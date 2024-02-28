import {
  handleApiPostShortUrlRoute,
  handleApiShortUrlParamRoute
} from "./events";
import {
  checkIfValidUrl,
  createNewShortUrl,
  checkExistingShortUrl,
  getShortUrl,
} from "./functions";

/**
 * ShortUrlModule
 * @description Module for handling short URLs.
 */
let ShortUrlModule: any = {events: {}, fn: {}};
export default {
  // Events
  events: {
    handleApiPostShortUrlRoute: handleApiPostShortUrlRoute,
    handleApiShortUrlParamRoute: handleApiShortUrlParamRoute
  },
  // Functions
  fn: {
    checkIfValidUrl: checkIfValidUrl,
    createNewShortUrl: createNewShortUrl,
    checkExistingShortUrl: checkExistingShortUrl,
    getShortUrl: getShortUrl
  }
} as const;