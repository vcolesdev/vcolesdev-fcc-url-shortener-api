import {NextFunction, Request, Response} from "express";
import ShortUrlModule from "../ShortUrlModule";

/**
 * handleApiPostShortUrlRoute()
 * @param req
 * @param res
 * @param next
 * Handle the POST request for shortening a URL
 */
export const handleApiPostShortUrlRoute = async (req: Request, res: Response, next: NextFunction) => {
  const shortUrlModule = ShortUrlModule as any;
  const {original_url, short_url} = req.body;

  // Check if the URL is valid
  const regexStr = /^(http|https):\/\/[^ "]+$/
  const urlRegex = new RegExp(regexStr);
  if (!urlRegex.test(original_url)) console.error("Invalid URL");

  // Check for existing short_url
  await shortUrlModule.fn.checkExistingShortUrl(short_url);
  const shortUrl = shortUrlModule.fn.createNewShortUrl(original_url, short_url);

  // Check if the URL is valid then save
  shortUrlModule.fn.checkIfValidUrl(original_url);
  await shortUrl.save({validateBeforeSave: true});

  // Return the short URL
  return res.json(shortUrl);
}

/**
 * handleApiShortUrlParamRoute()
 * @param req
 * @param res
 * Handle the GET request for a short URL
 */
export const handleApiShortUrlParamRoute = async (req: Request, res: Response) => {
  const shortUrlModule = ShortUrlModule as any;
  const short_url = req.params.short_url;
  const shortUrl = await shortUrlModule.fn.getShortUrl(short_url);

  return res.redirect(shortUrl?.original_url || "https://api.nasa.gov/");
}