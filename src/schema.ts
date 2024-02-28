import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define the ShortUrl schema
export const shortUrlSchema = new Schema({
  original_url: String,
  short_url: Number,
});

export const ShortUrlModel = mongoose.model("ShortUrl", shortUrlSchema);
