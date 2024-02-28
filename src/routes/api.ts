import { Request, Response, Express } from "express";
import ShortUrlModule from "../modules/ShortUrlModule";

const shortUrl = ShortUrlModule;

// Handle the test route
const handleApiTestRoute = (req: Request, res: Response) => {
  res.json({message: "Test endpoint"});
};

/**
 * Get API routes
 * @param app
 */
export default function getApiRoutes(app: Express) {
  app.get("/api/test", function(req: Request, res: Response) {
    return handleApiTestRoute(req, res);
  });

  app.post("/api/shorturl", (req, res, next) => {
    return shortUrl.events.handleApiPostShortUrlRoute(req, res, next)
  });

  app.get("/api/shorturl/:short_url?", async (req, res) => {
    return shortUrl.events.handleApiShortUrlParamRoute(req, res);
  });
}