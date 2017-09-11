'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author_id: { type: Number, required: true },
    reply_count: { type: Number, default: 0 },
    tag: { type: String, required: true },
    create_time: { type: Date, default: Date.now() },
    update_time: { type: Date, default: Date.now() },
    top: { type: Boolean, default: false }, // 是否是置顶帖子
    good: { type: Boolean, default: false }, // 是否是精华帖子
  });
  return mongoose.model('Post', PostSchema);
};
