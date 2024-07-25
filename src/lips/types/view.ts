import {ObjectId} from 'mongoose'
import { ViewGroup } from '../enum/view.enum'

export interface View{
    _id: ObjectId;
    viewGroup: ViewGroup;
    memberId: ObjectId;
    viewRefId: ObjectId;
    createdId: Date;
    updatedId: Date 
}

export interface ViewInput{
    memberId: ObjectId;
    viewRefId: ObjectId;
    viewGroup: ViewGroup;
}