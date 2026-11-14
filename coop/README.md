# Budget Defence cooperative room

The web client uses the local service at ws://127.0.0.1:8791/rooms when the game is opened from localhost. Start the website with `node preview.cjs`. In this directory install the declared ws dependency and run `npm start`. Two separate browser sessions at http://127.0.0.1:8789/#play-defence can use the same eight-character room code. The local service only binds to loopback.

The deployment candidate is worker.mjs with wrangler.jsonc. Each code routes to its own SQLite-backed Durable Object. Active matches live in memory. A worker restart ends a match. Origin checks limit browser access to the configured sites. The server accepts player input and runs 20 simulation steps and 10 broadcasts per second. It accepts no client scores, bank amounts or unlocks.

Public hosting has not been verified. After a free-plan deployment is verified, set a `coop-endpoint` meta tag in the FPS HTML to the public wss URL ending in /rooms, then rebuild and publish the frontend. Do not put a deployment credential or reconnect token in that URL. Offline builds disable room connections.

