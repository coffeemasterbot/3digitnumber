const {spawnSync}=require('node:child_process');
for(const script of ['qa-garden-duo.cjs','qa-usability.cjs','qa-layout.cjs']){
 const result=spawnSync(process.execPath,[script],{cwd:__dirname,stdio:'inherit'});
 if(result.error)throw result.error;
 if(result.status!==0)process.exit(result.status||1);
}
