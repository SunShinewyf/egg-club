'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String }, // 头像
    github: { type: String }, // github地址
    scroe: { type: Number, default: 0 }, // 个人积分
    signature: { type: String, default: '这家伙很懒，什么个性签名都没有留下' },
    topic: { type: Number, default: 0 },
    reply: { type: Number, default: 0 },
    create_time: { type: Date, default: Date.now },
  });
  return mongoose.model('User', UserSchema);
};
