import { AnimationMixer, Box3, Group, Mesh, Texture, TextureLoader, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import avatarData from './runner-avatar.glb';

type Pose = 'idle'|'happy_run'|'jump_up'|'fall';
export type RunnerAvatar = { root:Group; pose(name:Pose,dt:number):void; dispose():void };

export async function loadRunnerAvatar(): Promise<RunnerAvatar> {
  const loader = new GLTFLoader();
  // Image elements can read embedded textures with the offline package’s fetch policy.
  loader.register(parser=>{
    parser.textureLoader=new TextureLoader(loader.manager);
    return {name:'pfapEmbeddedTextures'};
  });
  const bytes=Uint8Array.from(avatarData);
  const {scene,animations}=await loader.parseAsync(bytes.buffer,'');
  const root=new Group();
  root.add(scene);
  scene.rotation.y=Math.PI;
  const bounds=new Box3().setFromObject(scene);
  const scale=1.76/bounds.getSize(new Vector3()).y;
  const center=bounds.getCenter(new Vector3());
  scene.scale.multiplyScalar(scale);
  scene.position.set(-center.x*scale,-.87-bounds.min.y*scale,-center.z*scale);
  const mixer=new AnimationMixer(scene);
  const clips=new Map(animations.map(clip=>[clip.name,mixer.clipAction(clip)]));
  let current=clips.get('idle');
  current?.play();
  return {root,pose(name,dt){
    const next=clips.get(name);
    if(next&&next!==current){current?.fadeOut(.12);next.reset().fadeIn(.12).play();current=next}
    mixer.update(dt);
  },dispose(){
    mixer.stopAllAction();
    mixer.uncacheRoot(scene);
    const disposed = new Set();
    scene.traverse(object=>{
      if(!(object instanceof Mesh))return;
      object.geometry.dispose();
      for(const material of Array.isArray(object.material)?object.material:[object.material]){
        if(disposed.has(material))continue;
        disposed.add(material);
        for(const value of Object.values(material))if(value instanceof Texture&&!disposed.has(value)){
          disposed.add(value);
          value.dispose();
        }
        material.dispose();
      }
    });
  }};
}
