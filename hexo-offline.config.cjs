// <blog_root>/hexo-offline.config.cjs
// offline config passed to workbox-build.
module.exports = {
    /**
     * Whether to add an unconditional call to skipWaiting() to the generated service worker.
     * If false, then a message listener will be added instead,
     * allowing client pages to trigger skipWaiting() by calling postMessage({type: 'SKIP_WAITING'}) on a waiting service worker.
     */
    skipWaiting: true,
    // Whether or not the service worker should start controlling any existing clients as soon as it activates.
    clientsClaim: true,
    // 按需修改：Files matching any of these patterns will be included in the precache manifest.
    globPatterns: ['**/*.{js,html,css}'],
    // 按需修改：A set of patterns matching files to always exclude when generating the precache manifest.
    globIgnores: [
      '**/node_modules/**/*',
      '**/images/**/*',
      '**/posts/**/*',
      '**/archives/**/*',
      '**/categories/**/*',
      '**/tags/**/*'
    ],
    /**
     * 按需修改
     * When using Workbox's build tools to generate your service worker,
     * you can specify one or more runtime caching configurations.
     * These are then translated to workbox-routing.registerRoute calls using the match and handler configuration you define.
     * For all of the options, see the workbox-build.RuntimeCaching documentation.
     */
    runtimeCaching: [
      {
        urlPattern: /.*\.html$/,
        /**
         * 按需修改使用策略
         * StaleWhileRevalidate: 使用缓存的内容尽快响应请求（如果可用），如果未缓存，则回退到网络请求。然后，网络请求用于更新缓存。
         * CacheFirst: 缓存优先策略，优先获取缓存中的资源，如果缓存中没有相关资源，那么就发起网络请求。
         * NetworkFirst: 尝试从网络获取最新请求，如果请求成功，将响应放入缓存中。如果网络无法返回响应，则将使用缓存响应。
         * NetworkOnly: 只使用网络请求获取的资源
         * CacheOnly: 只使用缓存中的资源
         */
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'html-cache',
          cacheableResponse: { statuses: [0, 200] },
          expiration: { maxAgeSeconds: 86400 * 7 } // 按需修改
        }
      },
      {
        urlPattern: /.*\.(css|js)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'css-js-cache',
          cacheableResponse: { statuses: [0, 200] },
          expiration: { maxAgeSeconds: 86400 * 7 } // 按需修改
        }
      },
      {
        urlPattern: /.*\.(png|gif|jpg|jpeg|ico|svg|cur|mp4|woff2?)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'media-cache',
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: /^https:\/\/(cdn\.staticfile\.org|unpkg\.com|lib.baomitu.com)\/.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cdn-cache',
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: /^https:\/\/(mscphoto\.pages\.dev|maserver\.netlify\.app)\/.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cdn-cache',
          cacheableResponse: { statuses: [0, 200] }
        }
      },
    ]
};