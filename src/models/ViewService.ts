
import Errors from "../lips/Errors";
import { View, ViewInput } from "../lips/types/view";
import ViewModel from "../scheme/View.model";
import { HttpCode } from "../lips/Errors";
import { Message } from "../lips/Errors";


class ViewService {
    private readonly viewModel

    constructor() {
        this.viewModel = ViewModel
    }

    public async checkViewExistence(input: ViewInput): Promise<View> {
     return await this.viewModel
      .findOne({memberId: input.memberId, viewRefId: input.viewRefId})
      .exec()
    }

    public async insertMemberView(input: ViewInput): Promise<View> {
      try{
        return await this.viewModel.create(input)

      }catch (err) {
        console.error('Error, model:insertMemberView:', err);
    throw new Errors(HttpCode.BAD_REQUEST,Message.CREATE_FAILED)
      }
    }
}

export default ViewService