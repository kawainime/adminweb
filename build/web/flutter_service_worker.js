'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c7361c3d2cde53da0410004afcf55ba2",
"assets/AssetManifest.bin.json": "d1078c75679a16eb72539c53262b4373",
"assets/AssetManifest.json": "99036fb5cdb91a61392e8f19b74e8e23",
"assets/assets/images/addUser.png": "5405d77c51fb46a0cbf26cb96fe4da4d",
"assets/assets/images/goApp.png": "ab080495b41caedfd2718b3850eb8685",
"assets/assets/images/loginBanner.png": "e621a82774dc7d814957fcd2be0c82d4",
"assets/assets/images/loginBg.png": "f6e808bec650360da137ca1fe3f77887",
"assets/assets/images/logo.png": "f6e808bec650360da137ca1fe3f77887",
"assets/assets/images/logo1.png": "d15e45594feec97fbb186951df5c26f0",
"assets/assets/images/onBoardingVariant_1.png": "a56828d056e399d943956a4b6323f8c7",
"assets/assets/images/onBoardingVariant_2.png": "9b54a42b1619e4d04e3875c31d0e19c9",
"assets/assets/images/onBoardingVariant_3.png": "515ecd26b9c5420af80d83e3ec1d82f8",
"assets/assets/images/SplashVariant_1.png": "73cd0bd57c44c2adffbd458cbb05e524",
"assets/assets/images/SplashVariant_2.png": "64c26d47e9ad9eb438dc8887c0029018",
"assets/assets/images/SplashVariant_3.png": "bb52d86b9d7349fa138c3ffc63859bea",
"assets/assets/svg/aaa.gif": "fb13988542ed3f85039eba9ba46d0c65",
"assets/assets/svg/adDark.svg": "1d9283c0ee844b1e43eb58aa16689d26",
"assets/assets/svg/adLine.svg": "667ddb6ccffe966bbf1f674ce89ace43",
"assets/assets/svg/android.svg": "f4b747275c3edac9c771f426928cab4a",
"assets/assets/svg/appConfigDark.svg": "4f048d2b56de9bae7025987eebf796a0",
"assets/assets/svg/appConfigLine.svg": "10388879e4087df3ee33eaa5c95f230c",
"assets/assets/svg/crown.svg": "1b6ed281603eb9951710e9565820c659",
"assets/assets/svg/dashboard.svg": "ab13321f486067e86fb181ff73582288",
"assets/assets/svg/dashboardDark.svg": "e090c1489f5263c55ca00d0cd52c76ee",
"assets/assets/svg/dashDark.svg": "4f1e52f9eddb872b955cdc34684f167d",
"assets/assets/svg/dashicon.svg": "82eea68f0a2a6077bf242089d121d645",
"assets/assets/svg/dashLine.svg": "f5f6fb6fb84d75da0735623067ddd7f5",
"assets/assets/svg/exitDark.svg": "535508ef120ab5d114b66974cb1455e2",
"assets/assets/svg/exitLine.svg": "6d6cf8133fe5e97c15555d79c37848eb",
"assets/assets/svg/headerDark.svg": "8b312686225c7adc892dc628d3196ba3",
"assets/assets/svg/headerLine.svg": "a1c359ada6c4dad784513815d99206ca",
"assets/assets/svg/languages.svg": "b783eb6fe4b176eeed085b8a02d452cf",
"assets/assets/svg/leftDark.svg": "f01baaa9e2d5349732bddf17e7bdf289",
"assets/assets/svg/leftLine.svg": "eeae19502fcd2573a7fd736745da4131",
"assets/assets/svg/notificationDark.svg": "ced2d0334fba226864a0707d407c0bef",
"assets/assets/svg/notificationLine.svg": "a5b8a73da12a886c178328bf3c59d49f",
"assets/assets/svg/onboardDark.svg": "68138c198ec2fc274ce539874c78a433",
"assets/assets/svg/onboardLine.svg": "a74163e0cf026428d59daec3fbc3187d",
"assets/assets/svg/people.svg": "774084104749ab903cdda0b32e99f950",
"assets/assets/svg/rightDark.svg": "3645d9de8d29b19e9b27033724235c63",
"assets/assets/svg/rightLine.svg": "044945aad97bc7dffa0e3bbb1b6f87b3",
"assets/assets/svg/settingDark.svg": "641e70b426a20288d3b864a14c37bb28",
"assets/assets/svg/settingLine.svg": "3970321452ca4551a7cfbb6ce67f9bbd",
"assets/assets/svg/shareDark.svg": "5b35ddb2c6a19b2fa1b3c3a4f1128ba4",
"assets/assets/svg/shareLine.svg": "8ca38d8f27979d2dd1defb0e6f5bc64a",
"assets/assets/svg/socialDark.svg": "44fa87135a54eb0c686e83ee62f91150",
"assets/assets/svg/socialLine.svg": "cde44b2d275563fb4a48e40a6bceae96",
"assets/assets/svg/splashDark.svg": "371841f644956fef07947f2cd3e5e4c6",
"assets/assets/svg/splashLine.svg": "d736ace9409ec10f2d0c19af770ebd75",
"assets/assets/svg/themeDark.svg": "31cf635e17d3ff57616124efddf6f225",
"assets/assets/svg/themeLine.svg": "e946f9fe7de03852f4bafa42e17dfc78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d9caf0f695fa232d67b9681de55046fb",
"assets/json_class/google_font_list.json": "e1359e14ac62aae8acbb57ab23e5546b",
"assets/NOTICES": "381b4fb6a66f99b4e0cdb2349f1d6a52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5afd058b870167b37906fb5464b53f43",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a153d22df9c53dfc8fb7847c1b5771ad",
"goApp.png": "ab080495b41caedfd2718b3850eb8685",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "944c14f397db04c2d744c12982d32b2d",
"/": "944c14f397db04c2d744c12982d32b2d",
"main.dart.js": "2a883c86cc12ad164029fae374165157",
"manifest.json": "d2e78130795fd48f81883d81664b4a01",
"version.json": "4b91ea536e28419696ceed6e92f00d4f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
