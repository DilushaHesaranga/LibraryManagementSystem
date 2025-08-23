// Name of cache
const CACHE_NAME = "my-app-cache-v1";

// Files to cache
const urlsToCache = [
  "/",
  "./index.html",
  "./styles/style.css",
  "./scripts/script.js",
  "./favicons/favicon-16x16.png"
];

// Install service worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch requests - serve from cache if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached file or fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate service worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
