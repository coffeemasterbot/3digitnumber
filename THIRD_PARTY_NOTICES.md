OPEN-SOURCE GAME ADAPTATIONS — 戶口三位數 website v2

Runner: pantharev/SubwaySurfersRGB (MIT grant in upstream README).
https://github.com/pantharev/SubwaySurfersRGB
Adapted Game, Track, Obstacle, Coin, input, collision and state architecture.
Changes: custom human mesh, persistent input physics, local UI only, no Supabase/login, power-ups, timer, Chinese controls, resume/restart fixes.

Runner city scenery: Kenney — Starter Kit City Builder model assets (CC0 1.0).
https://store.godotengine.org/asset/kenney/starter-kit-city-builder/
https://github.com/KenneyNL/Starter-Kit-City-Builder/tree/4535092b740b378b700efd9df9e27a631815b84a
Adapted building-small-a, building-garage and pavement-fountain to indexed meshes with vertex colors.

Runner trains: Kenney — Train Kit 1.1 (CC0 1.0).
https://kenney.nl/assets/train-kit
https://opengameart.org/content/train-kit
The bundled meshes adapt train-electric-subway-a.glb and train-electric-subway-b.glb, with the original palette baked into vertex colors. The pack thanks Guus Vermeulen and Tony Schaer.

Forest platforms and masonry: Kenney — Starter Kit 3D Platformer models (CC0 1.0).
https://store.godotengine.org/asset/kenney/starter-kit-3d-platformer/
https://github.com/KenneyNL/Starter-Kit-3D-Platformer/tree/3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0
Orthographic 2D artwork rendered from brick.glb and grass.glb using colormap.png. The runtime uses the baked artwork.

Defence training scenery and models: Kenney — Starter Kit First Person Shooter (CC0 1.0 for art).
https://store.godotengine.org/asset/kenney/starter-kit-first-person-shooter/
https://github.com/KenneyNL/Starter-Kit-FPS/tree/185fd2326d74a5cf858cffc616f87cf9696f9cc0
  Adapted wall-high.glb for the arena terminal, with baked vertex colors from the pack palette. The equipment and robot models are original to Budget Defence.

Flight: GameHelix/jetpack_joyride (MIT grant in upstream README).
https://github.com/GameHelix/jetpack_joyride
Adapted engine, renderer, spawner, audio and React UI.
Changes: static bundled app, Chinese interface, fixed 60Hz simulation, 90-second run, safe boundaries, one life, death sequence, richer rhythm.

Garden: plantsvszombiesjs/plantsvszombiesjs.github.io (MIT).
https://github.com/plantsvszombiesjs/plantsvszombiesjs.github.io
Copyright (c) 2025 Valentyn Kolesnikov <0009-0003-9608-3364@orcid.org>
Adapted full nine-plant/twenty-wave implementation.
Changes: Chinese interface, explicit start, no automatic fullscreen, music, integrated navigation.

Other mechanics references, no code or assets copied:
https://github.com/SahilPanhotra/subway-surfer-clone
https://github.com/Fady2024/Fireboy-And-Watergirl

The adaptations are fan-made open-source implementations, not official source code from the commercial games. Three.js and bundled React dependencies retain their original license comments in the bundles.

MIT license text for the adapted projects:
MIT License

Copyright (c) 2025 Valentyn Kolesnikov <0009-0003-9608-3364@orcid.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

FPS / 5 November 2026 upgrade:
Original local arena, AI robots, training weapon models, procedural geometry, vector plant art and synthesized sound effects. Uses existing Three.js 0.160.1 under its retained MIT notice in games/licenses/three_0.160.1.txt.
Architecture references: https://threejs.org/examples/games_fps.html and https://threejs.org/docs/pages/PointerLockControls.html
No Valve, EA/PopCap or commercial-game extracted maps, sprites or sound files were added.

# Additional launch assets

## Change Chase

The runner avatar is adapted from Mini Sophia in the [Godot 4 3D Characters Repository](https://github.com/EH-DN/3D-Characters-Repository), copyright 2023 GDQuest, under the MIT License. The model was repackaged for the browser, with four animation clips and reduced material textures.

MIT License

Copyright (c) 2023 GDQuest

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Budget Defence and Fire & Ice

Budget Defence shot recordings are adapted from [Gunshot Sounds](https://opengameart.org/content/gunshot-sounds), copyright 2009 Vincent Sevedge, under the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/) specified in the download. Excerpts were trimmed, level adjusted, encoded as MP3, and combined with original layers for the launcher effects.

Fire & Ice uses the project-team-supplied `Video Project 2.mp3`.
