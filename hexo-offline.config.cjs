// offline config passed to workbox-build.
module.exports = {
    globPatterns: ["**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}"],
    globDirectory: "/path/to/hexo/public",
    swDest: "/path/to/hexo/service-worker.js",
  },
// offline config passed to workbox-build.
module.exports = {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/mscphoto\.pages\.dev\/.*/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /^https:\/\/maserver\.netlify\.app\/.*/,
        handler: "CacheFirst"
      }
    ]
}