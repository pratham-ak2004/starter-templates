import { CorsOptions, CorsOptionsDelegate } from "cors";

export const corsConfig: CorsOptions | CorsOptionsDelegate = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    // Add origins here
    const origins = ["*"];

    if (!origin || origins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },

  // Add methods here
  methods: ["GET", "POST"],
};