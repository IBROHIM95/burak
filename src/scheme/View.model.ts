import mongoose, {Schema} from 'mongoose';
import {ViewGroup} from '../lips/enum/view.enum'

const memberSchema = new Schema({

  viewGroup:{
    type: String,
    enum: ViewGroup,
    required: true
  },

  memberId: {
   type: Schema.Types.ObjectId,
   required: true,
   ref : 'Member'
  },

  viewRefId: {
    type: Schema.Types.ObjectId,
    req: true
  },

},
{ timestamps: true }
)

    export default mongoose.model('View', memberSchema)