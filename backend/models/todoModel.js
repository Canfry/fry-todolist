import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User',
  // },
});

export default mongoose.model('Todo', todoSchema);
