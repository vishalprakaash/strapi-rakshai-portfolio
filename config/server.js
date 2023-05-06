module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "https://rakshai-strapi.onrender.com",
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  dirs: {
    public: "./public",
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
  },
});
