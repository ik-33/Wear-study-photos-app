// Always update immediately
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Activate new worker and take control of open clients
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

// Let all requests through normally (no caching to avoid stale code)
self.addEventListener("fetch", () => {});


