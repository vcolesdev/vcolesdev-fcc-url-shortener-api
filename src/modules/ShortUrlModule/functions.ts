import dns from "dns";
import {ShortUrlModel} from "../../schema";

/**
 * checkIfValidUrl()
 * @param url
 * Check if the given URL is a valid URL.
 */
export const checkIfValidUrl = (url: string) => {
  dns.lookup(url, (error) => {
    if (error) {
      console.error(error);
    }
  });
}
/**
 * createNewShortUrl()
 * @param originalUrl
 * Create a new ShortURL.
 */
export const createNewShortUrl = (originalUrl: string) => {
  const generateRandomShortUrl = (): number => {
    return Math.floor(Math.random() * 100) + 1;
  }

  return new ShortUrlModel({
    "original_url": originalUrl,
    "short_url": generateRandomShortUrl(),
  });
}

/**
 * checkIfExistingUrl()
 * @param shortUrl
 * Check if a ShortURL exists in the database.
 */
export const checkExistingShortUrl = async (shortUrl: string) => {
  const exists = await ShortUrlModel.exists({short_url: shortUrl});
  if (exists) {
    console.error("Short URL already exists");
  } else {
    console.log("Short URL does not exist.");
  }
}

/**
 * getShortUrl()
 * @param short_url
 * Retrieve a shortURL by string.
 */
export const getShortUrl = async (short_url: string) => {
  return ShortUrlModel.findOne({
    short_url: short_url
  });
}