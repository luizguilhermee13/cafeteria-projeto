import "dotenv/config";

export const config = {
  port: process.env.PORT || 3000,
  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
};
