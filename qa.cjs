const {spawnSync}=require('node:child_process');
for(const script of ['qa-garden-repair.cjs','qa-reworked-duo.cjs','qa-repair.cjs','qa-powerups.cjs','qa-usability.cjs','qa-layout.cjs','qa-challenge.cjs']){
 const result=spawnSync(process.execPath,[script],{cwd:__dirname,stdio:'inherit'});
 if(result.error)throw result.error;
 if(result.status!==0)process.exit(result.status||1);
}
