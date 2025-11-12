'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7d6b10bcf1c141511d1f881134cd904d",
".git/config": "04b62557e4f853bd5d0afaf5178985be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "472df38d3a4648400ad2338ad6732b7a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41f3ef669bf3156d5b79055c78bea8d5",
".git/logs/refs/heads/main": "41f3ef669bf3156d5b79055c78bea8d5",
".git/logs/refs/remotes/origin/main": "91a1a0163d45402e06c8f7627a123b0e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0f/51e9c40e8147d8d4e41b52929b3b3fdbe4b8a0": "d7fd64b618be6ee88c708e20b42f24a3",
".git/objects/11/376f527891889e30b354c402ca4263b468ddf8": "39de46dd02d37b62a3ca882fdc71bf25",
".git/objects/19/5d86e3e340581e783bc70aecedc64a88797839": "7e33f0a1235f3adee46940660a68361f",
".git/objects/1a/2a38ed391288a7f99378f40af9bf43e350e67b": "a260082936b63bca79b1db158858e251",
".git/objects/1c/2d3ec47eed0888d5ce606e2abb4d80ff78dc86": "d7b507dbf3ce8b66afca3efd9ec417fe",
".git/objects/1f/6dca352bc30b2a4cfacfb89117100605463595": "a1cc0bfbda260bc991251296385a7c26",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/2d0ac400eac98ab4810dbdb29b52c54541892f": "5335dfb43d5f4c001b875640f98e5f22",
".git/objects/25/665bc1d86cf84c5b7ca2b0c66a1d114d39041c": "25fc5d061257b4470941babb3863e694",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/4b2939fef0d15f746b31094ac445ff3c61cb7b": "93772111e18cc774e5aa4dc8b2373b0c",
".git/objects/2e/32e5d7871ef6f9946f95b463307c974df7a73d": "a5ceb2be869bcd966ccfa39a4430bac6",
".git/objects/2e/861dec5f20b5420c3cb8203341ea13931f4058": "68b59542ae752c480908051989082f74",
".git/objects/33/b7c0bc5954f43700738f7f13ae2ce8aea0ac00": "b53e4b42f3735339756e87e8ceaff1e8",
".git/objects/35/3ba01f5c7eab995be2a914bb0c01a9f5ef5ab7": "67ff32c39dede637e2a07fb41b9d47d4",
".git/objects/3a/6ed0f879c6c9ded898eb491d614fa21cf6b7b9": "afe78f9b511f50c8b979341cc48d6b3b",
".git/objects/44/3c4129d4fd7ec34b6734bac1596773ca05a012": "e01972fc7f6ba769ec76ddd7397d72e1",
".git/objects/44/4a2d2d0f145048f521ca9c2a6d61901ab2f3a6": "523dc70ff32ffcc13bbfd4d643d339a3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/f5f205a559b1982f9368bc7d957250e338ddb6": "5a69b1e1327acbc051b8b12b1ce07507",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/17252d31e00e50880ca6e95d4a0fd2949188c5": "7346352877cb7c832bffa1d02958bade",
".git/objects/5a/25935d82793187906f6dfae6ef5479b2c3910d": "ee75866ff941da2a7eca82b977257cc6",
".git/objects/5e/e4ff649fbff07450e7abd11d939f20f55d90d9": "53f8b9d2099591f637feeb9f53e843eb",
".git/objects/62/26b1c6c8766dfc0ad6e262b0049996c00d9bfb": "b40f47290b5a23be197c6f24a74c9272",
".git/objects/63/4e94253711975da53b145a18a4edec71750226": "b6bedff8fdc69926015ceca6dfb9e932",
".git/objects/65/2c2bb88d789e52a693e3b4996de871e5454066": "d3785b186fa18308c7805a44472c599d",
".git/objects/67/e2d48ba3332a18e76358441698eb8619585558": "aad28112d59293735f85b20f74b52b6f",
".git/objects/68/ad073718a33c8e9fe81e3dea02ff35d156511d": "9b35ebde8c72f93b046b691b4ae06e35",
".git/objects/69/65fddac117af163c1ee51556364e4d99fc629a": "6f7a0bc075f9e994b7be027fcbbdabf0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/0a674300081b8c85c39356ff8d2ae78aa07adc": "84b3324ba4355078304361769a981f87",
".git/objects/79/18428bbfc7e1c35324f0031361ad96612b4f75": "ac2ddb71efe37b26b7067bf683639001",
".git/objects/79/d735a8a7c8b5f3a52fb6df0af83cf450a11f35": "1f3a218f67114edacb8ee48dc41b1b56",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/fb92d77e01b24512e2797f3860e002ab2078c0": "02a3b5be41b9bd746b7d5b8cc2336a2c",
".git/objects/86/23494b9c06c506a1640b712b7b3fa63f70cbd2": "5fb4a6d9c19c9e9d66265c7e43c2849e",
".git/objects/8a/e7e6728396c9ec41d6e761767425b54d14e4b1": "940ad04c240a66bcc91d24325a10ec7d",
".git/objects/91/f6bda4ddcfbfac967364988115c8b6990005ee": "ba5f167a88df205e696f780fbe95054e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/1a2ceb8f479a88125058c8021a47111c365897": "fd60d4635dea27c38158be9dc64e2bc9",
".git/objects/a7/cb70b8b1c4747d8808d7fba08585e09d5f3f3d": "b1cecff943220e19c9407b8452cf4c5e",
".git/objects/b1/a036271c6c534915908d344d577b372dbb0b6b": "d428a7f446e1c345ca64fa4bfb24bffe",
".git/objects/b2/f0465138f66dd82cbf37909fcd7d26d0a08eb2": "50d88aba9f318b8c74ffd6944e364105",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/bd/81915c56a395b8db68dea9d2147802d13f4453": "de441b49d9b56ea9a6d091cbe6566205",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/59f93bef7ba4e5454fc9cb14f7f525be655c22": "01a6a7d694769a6ef0ad842d3b5ef841",
".git/objects/c9/7700817943a37dd93486d3d5a14704400642b8": "0bea3f53713aa40a08486dc6d3c2a7ed",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/56f1c1a43f41d6bcf46aa47261b9bb6e96cc92": "28717dfdde7cfff3273cae7c94b48dbc",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/6f192612fb0f95600bc232d8210af489c49873": "c3a2c934d6695d8e5ff67f221e411c02",
".git/objects/e3/df2415f88613ce405652b5ea222529f5181684": "8a9a8fae0d329bfbc89ae4e2e192b883",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/1fb7f630e9770a4d07714055de0de53f5a1eea": "4560c7614cccd669046b9dae6b1f6e14",
".git/objects/e9/5768f6e038404a15a35f8f7183b8ed19b39399": "9eefdbba6c062fa51de4d33183fa201a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8696aaebae449e8a806fdeec27486702d213cf": "c6dd3e744eb2d3523f9ae97e35f3b8ae",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/237a88dd4413150bceeb0e72facb9a7b25ea4c": "496417724ff982adfcde22c0874f586b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/85c012e5c243edf7c93a4e758d71933328b452": "52eccb906dafa545b3c96233861b744d",
".git/objects/ff/dec5814479a8c88a4144b160668419cd25f15b": "dabd72267f820ea4b4eef4fe4562efeb",
".git/refs/heads/main": "5b1f24ab10bd77654c4bfe7f891bb319",
".git/refs/remotes/origin/main": "5b1f24ab10bd77654c4bfe7f891bb319",
"assets/AssetManifest.bin": "31d980f7a972ade703ad61e87b35bcfe",
"assets/AssetManifest.bin.json": "c131578fcb7e5a914760a2659ba41634",
"assets/AssetManifest.json": "6e01dfbf0e75b6d7fb64435251533db4",
"assets/assets/images/HARRY-HARE.png": "582811c5e8db2b3a745f3922f2d399fa",
"assets/assets/images/logo.png": "01781823f0d28d138de3ed7d366bd683",
"assets/assets/images/marcus.jpg": "bbdc8f9256f1670f0f9098a86c3ee8ef",
"assets/assets/images/moneybudgercombined.png": "5c5f05cfe67b4a49239ee37726984f7c",
"assets/assets/images/money_b.png": "40f0c3fc82188eb63cb4252d96c9ea3a",
"assets/assets/images/walter.jpg": "4671246f1d126af36db62e6b41534429",
"assets/assets/images/watson.jpg": "e62038b045e8299a8aa48697e6cea383",
"assets/assets/mockups/ciomag.png": "6d6135942e4576baf17d428b08449b31",
"assets/assets/mockups/duwit.png": "e70ef7ed80329bac6ded07df4734f1d5",
"assets/assets/mockups/events.png": "0dfd3bd1150027a4c7ba8a6ec8d847be",
"assets/assets/mockups/foodsight.png": "a768a47eac7dd685c3b514ebd056311b",
"assets/assets/mockups/imoth.png": "8f6da6053e32e875c75ee6981c9738ed",
"assets/assets/mockups/lendsense.png": "3b5fc70e90f43691578792c18b098953",
"assets/assets/mockups/memorial.png": "0edd1651d6998f85a63ed996fb0632d1",
"assets/assets/mockups/money_budger.png": "13d2e704bb11ae9e64a1b94c286a47f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "916ed024a2b1f8e761fc01b9666c138f",
"assets/NOTICES": "94d848cb3fbe3c9e8ceaa54eeb360640",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "6b30d893d0961682c09051566210ae2e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7ddd55f318de7eecbd6b8a3409970a2c",
"icons/Icon-192.png": "8ade364f1e5db9c64b1142ef39bee851",
"icons/Icon-512.png": "8d4864a4fb2d3d7ac422a4f8042b881d",
"icons/Icon-masakable-192.png": "8ade364f1e5db9c64b1142ef39bee851",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "8d4864a4fb2d3d7ac422a4f8042b881d",
"index.html": "74c9d0bc1c5891ea419f71af28d843a8",
"/": "74c9d0bc1c5891ea419f71af28d843a8",
"main.dart.js": "b18058c0c7c6a93a97fe274fb14b4d60",
"manifest.json": "833e722509e4d18b7a89ee58bfe666f7",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3"};
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
