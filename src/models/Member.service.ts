import MemberModel from "../scheme/Member.model"
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../lips/types/member"
import Errors, { Message } from "../lips/Errors";
import { HttpCode } from "../lips/Errors";
import { MemberType } from "../lips/enum/member.enum";
import * as bcrypt from 'bcryptjs'
import { shapeIntMongooseObjectId } from "../lips/config";

class MemberService {
    private readonly memberModel;

    constructor(){
        this.memberModel = MemberModel
    }

    /* SPA  */

    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        
        try{
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON();
        } catch(err) {
            console.log('Error, model:signup', err);
            
           throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE)
        }    
    }

    public async login(input: LoginInput): Promise<Member> {
        //TODO Consider member status later
       const member = await this.memberModel 
       .findOne(
        {memberNick: input.memberNick},
         {memberNick: 1, memberPassword: 1} //kerak bo'lsa bir, kerak bo'lmasa nol
       )
       .exec();
       if(!member) throw new Errors(HttpCode.NOT_FOUNT, Message.NO_MEMBER_NICK)
       
       const isMatch = await bcrypt.compare(
        input.memberPassword, 
        member.memberPassword
       ) 

       if(!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD)
       }

       return await this.memberModel.findById(member._id).lean().exec();
       
       
    }




    /* SSR  */
     
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
        .findOne({memberType: MemberType.RESTAURANT})
        .exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
    
        console.log('before:', input.memberPassword);
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        console.log('after:', input.memberPassword);
        
        try{
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result
        } catch(err) {
           throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }    
    }

    public async processLogin(input: LoginInput): Promise<Member> {
       const member = await this.memberModel 
       .findOne(
        {memberNick: input.memberNick},
         {memberNick: 1, memberPassword: 1} //kerak bo'lsa bir, kerak bo'lmasa nol
       )
       .exec();
       if(!member) throw new Errors(HttpCode.NOT_FOUNT, Message.NO_MEMBER_NICK)
       
       const isMatch = await bcrypt.compare(
        input.memberPassword, 
        member.memberPassword
       ) 

       if(!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD)
       }

       return await this.memberModel.findById(member._id).exec();
       
       
    }

    public async getUsers(): Promise<Member[]> {
       const result = await this.memberModel
       .find({memberType: MemberType.USER})
       .exec();
     if(!result) throw new Errors(HttpCode.NOT_FOUNT, Message.NO_DATA_FOUND);
     console.log( 'result::', result);
     
     return result
    }

    public async updateChosenUser(input: MemberUpdateInput): Promise<Member[]> {
       input._id = shapeIntMongooseObjectId(input._id)
        const result = await this.memberModel
       .findByIdAndUpdate({_id: input._id}, input, {new: true})
       .exec();
     if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
     console.log( 'result::', result);
     
     return result
    }
}

export default MemberService