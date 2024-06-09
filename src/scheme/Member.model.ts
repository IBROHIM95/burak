import mongoose, {Schema} from 'mongoose';
import { MemberType, MemberStatus } from '../lips/enum/member.enum';

const memberSchema = new Schema({
    memberType: {
        type : String,
        enum : MemberType,
        default: MemberType.USER
    },

    memberStatus : {
        type : String,
        enum : MemberStatus,
        default : MemberStatus.ACTIVE,
    },

    memberNick : {
        type : String,
        index : {unique: true, sparse: true},
        required: true
    },


    memberPhone : {
        type : String,
        index : {unique: true, sparse: true},
        required: true
    },

    memberPassword: {
        type: String,
        select : false,
        required : true
    },

    memberAddress : {
        type : String,
    },

    memberDesc : {
        type : String,
    },

    memberImage : {
        type : String,
    },

    memberPoints : {
        type : String,
        default : 0
    },
},
 { timestamps: true }  //update, upload
 );

 export default mongoose.model('Member', memberSchema)