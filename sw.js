importScripts('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/workbox-sw/6.5.0/workbox-sw.js');

if (workbox) {
    workbox.setConfig({ modulePathPrefix: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/workbox-sw/6.5.0/' });

    workbox.precaching.precache(['/', '/index.html']);

    workbox.routing.registerRoute(new RegExp('^https?://www.mscaome.top/?$'), workbox.strategies.networkFirst());

    workbox.routing.registerRoute(new RegExp('.*.html'), workbox.strategies.networkFirst());

    workbox.routing.registerRoute(new RegExp('.*.(?:js|css)'), workbox.strategies.staleWhileRevalidate());

    workbox.routing.registerRoute(new RegExp('https://www.mscaome.top/'), workbox.strategies.cacheFirst());
}