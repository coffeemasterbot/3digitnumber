(()=>{var Hl=Object.freeze([4,5,6]),Bl=Object.freeze([Object.freeze({movement:1,projectile:1,health:1}),Object.freeze({movement:1.15,projectile:1.15,health:1.15}),Object.freeze({movement:1.25,projectile:1.25,health:1.3})]),Zd=Object.freeze({movement:1.4,projectile:1.4,health:1.38}),Ur=n=>n===4?Zd:Bl[n-1]??Bl[0],wa=n=>n.ammo===0&&!n.reload&&je[n.weapon].reload>0&&n.reserves[n.weapon]>0,Ta=[{x:0,z:-18,w:36,d:1,h:5},{x:0,z:18,w:36,d:1,h:5},{x:-18,z:0,w:1,d:36,h:5},{x:18,z:0,w:1,d:36,h:5},{x:-7,z:-5,w:.65,d:14,h:3.8},{x:-7,z:7,w:.65,d:2,h:3.8},{x:-7,z:11,w:.65,d:2,h:3.8},{x:7,z:4,w:.65,d:12,h:3.8},{x:7,z:-14.25,w:.65,d:3.5,h:3.8},{x:7,z:-7.75,w:.65,d:3.5,h:3.8},{x:-3.75,z:-4,w:4.5,d:.65,h:3.8},{x:3.75,z:-4,w:4.5,d:.65,h:3.8},{x:-3,z:6,w:2.2,d:2,h:1.15},{x:3,z:6,w:2.2,d:2,h:1.15},{x:-12,z:7,w:2.5,d:2,h:1.2},{x:12,z:4,w:2,d:2,h:1.2},{x:-11,z:-8,w:2.3,d:2.3,h:1.2},{x:11,z:-10,w:2.3,d:2.3,h:1.2},{x:3,z:-11,w:2,d:2,h:1.2}],Kd=()=>[{id:"west",x:-7,z:4,w:.65,d:3.8,h:3.5,open:!1},{id:"east",x:7,z:-4,w:.65,d:3.8,h:3.5,open:!1},{id:"vault",x:0,z:-4,w:2.9,d:.65,h:3.5,open:!1},{id:"west-shortcut",x:-7,z:9,w:.65,d:1.9,h:3.5,open:!1},{id:"east-shortcut",x:7,z:-11,w:.65,d:2.9,h:3.5,open:!1}],kl=Ta.slice(0,4),Ke=(n,e,t,i,s=3.8)=>({x:n,z:e,w:t,d:i,h:s}),Dn=(n,e,t,i,s)=>({id:n,x:e,z:t,w:i,d:s,h:3.5,open:!1});function Wi(n=1){return n===1?{name:"\u820A\u57CE\u8857\u5340",walls:Ta.map(e=>({...e})),doors:Kd()}:n===2?{name:"\u5009\u5EAB\u8FF4\u5ECA",walls:[...kl,Ke(-14.4,4,5.2,.65),Ke(-5,4,6,.65),Ke(5,4,6,.65),Ke(14.4,4,5.2,.65),Ke(-6,-4,.65,10),Ke(6,-4,.65,10),Ke(-12.5,-9,9,.65),Ke(0,-9,10,.65),Ke(12.5,-9,9,.65),Ke(-12,9,3,2,1.15),Ke(12,8,3,2,1.15),Ke(0,9,2.5,2,1.15),Ke(-12,-3,2,3,1.2),Ke(12,-3,2,3,1.2),Ke(-3,-13,2,2,1.2),Ke(8,-14,2,2,1.2)],doors:[Dn("west-store",-10,4,3.4,.65),Dn("main-store",0,4,3.8,.65),Dn("east-store",10,4,3.4,.65),Dn("west-vault",-6.5,-9,2.7,.65),Dn("east-vault",6.5,-9,2.7,.65)]}:{name:"\u82B1\u5712\u5821\u58D8",walls:[...kl,Ke(-9,6,.65,14),Ke(9,6,.65,14),Ke(-9,-7,.65,6),Ke(9,-7,.65,6),Ke(0,-6,.65,10),Ke(0,3,4,.65),Ke(-6.5,3,3,.65),Ke(6.5,3,3,.65),Ke(-6,-12,7,.65),Ke(6,-12,7,.65),Ke(-3,10,2,2,1.1),Ke(3,10,2,2,1.1),Ke(-5,-5,2,2,1.1),Ke(5,-6,2,2,1.1),Ke(-13,7,2.5,3,1.2),Ke(13,5,2.5,3,1.2)],doors:[Dn("left-court",-3.5,3,2.8,.65),Dn("right-court",3.5,3,2.8,.65),Dn("west-passage",-9,-2.5,.65,2.8),Dn("east-passage",9,-2.5,.65,2.8),Dn("temple-vault",0,-12,4.8,.65)]}}var ii=Ta;function Gl(n=1){let e=Wi(n);return ii=e.walls,e}var Vl=(n=1)=>Wi(n).doors,si=[{q:"\u300C\u4FDD\u8B49\u56DE\u5831\uFF0C\u5148\u8F49\u8A02\u91D1\u3002\u300D\u800C\u57FA\u672C\u751F\u6D3B\u8CBB\u672A\u9810\u7559\u3002",answers:["\u62D2\u7D55\u8F49\u5E33\uFF0C\u5148\u4FDD\u57FA\u672C\u9700\u8981","\u5148\u7540\u8A02\u91D1\uFF0C\u4E4B\u5F8C\u518D\u8AD7\u751F\u6D3B\u8CBB"],right:0,why:"\u4FDD\u8B49\u56DE\u5831\u540C\u50AC\u4FC3\u8F49\u5E33\u4FC2\u8B66\u865F\u3002\u5148\u6838\u5BE6\u8CC7\u6599\u3001\u4FDD\u4F4F\u57FA\u672C\u9700\u8981\u3002"},{q:"\u4ECA\u65E5\u53EA\u6709 $50\uFF1B$600 \u4EBA\u5DE5\u4E09\u65E5\u5F8C\u5148\u5230\u3002",answers:["\u7576\u4F5C\u5DF2\u6709 $650\uFF0C\u4ECA\u65E5\u5C31\u82B1","\u53EA\u7528\u73FE\u6709\u73FE\u91D1\uFF0C\u78BA\u8A8D\u5230\u5E33\u65E5\u518D\u6392\u652F\u51FA"],right:1,why:"\u672A\u5230\u5E33\u6536\u5165\u5514\u4FC2\u4ECA\u65E5\u53EF\u7528\u73FE\u91D1\uFF1B\u5148\u5B89\u6392\u6BCF\u65E5\u9700\u8981\u540C\u7F3A\u53E3\u3002"},{q:"\u6E4A\u55AE\u514D\u904B $300\uFF1B\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\u9023\u904B\u8CBB $205\u3002",answers:["\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\uFF0C\u5BE6\u4ED8 $205","\u591A\u8CB7\u672A\u9700\u8981\u5605\u5622\uFF0C\u70BA\u5497\u514D\u904B\u4ED8 $300"],right:0,why:"\u6BD4\u8F03\u6700\u5F8C\u7E3D\u984D\u3002\u5514\u70BA\u5497\u514D\u904B\u800C\u591A\u82B1 $95\u3002"}],je={pistol:{label:"\u624B\u69CD",mag:12,reserve:60,damage:24,cooldown:.42,reload:1.4,range:50},carbine:{label:"\u6B65\u69CD",mag:24,reserve:96,damage:25,cooldown:.13,reload:1.8,range:55},sniper:{label:"\u72D9\u64CA\u69CD",mag:5,reserve:20,damage:85,cooldown:1.3,reload:2.3,range:75},bazooka:{label:"\u706B\u7BAD\u7B52",mag:1,reserve:5,damage:220,splash:160,blastRadius:4.5,selfCap:50,cooldown:1.5,reload:2.5,range:55},knife:{label:"\u5315\u9996",mag:0,reserve:0,damage:60,cooldown:.6,reload:0,range:2.2}};function Wl(n){return{magazines:Object.fromEntries(n.map(e=>[e,je[e].mag])),reserves:Object.fromEntries(n.map(e=>[e,je[e].reserve]))}}function $d(n,e){n.magazines[n.weapon]=n.ammo,n.weapon=e,n.reload=0,n.ammo=n.magazines[e]??je[e].mag,n.reserves[e]??=je[e].reserve,n.maxAmmo=je[e].mag}function Xl(n){let e=je[n.weapon];return n.reload||!e.reload||n.ammo>=e.mag||!n.reserves[n.weapon]?!1:(n.reload=e.reload,!0)}function ql(n,e){if(!n.reload||e<=0||(n.reload=Math.max(0,n.reload-e),n.reload))return;let t=Math.min(je[n.weapon].mag-n.ammo,n.reserves[n.weapon]);n.ammo+=t,n.reserves[n.weapon]-=t}var Ws=()=>`\u76F4\u64CA ${je.bazooka.damage} \xB7 \u7206\u98A8\u4E2D\u5FC3 ${je.bazooka.splash} \xB7 \u534A\u5F91 ${je.bazooka.blastRadius}m \xB7 \u5171 ${je.bazooka.mag+je.bazooka.reserve} \u767C\uFF0C\u81EA\u50B7\u4E0A\u9650 ${je.bazooka.selfCap}`,Fr={bazooka:{cost:350,label:"\u706B\u7BAD\u7B52"},carbine:{cost:220,label:"\u6B65\u69CD"},sniper:{cost:300,label:"\u72D9\u64CA\u69CD"},kit:{cost:80,label:"\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177"}};function Si(){return{phase:"menu",round:1,credits:0,earned:0,spent:0,headshots:0,weaponReady:{},purchases:[],hp:100,weapon:"pistol",owned:["pistol","knife"],...Wl(["pistol","knife"]),ammo:12,maxAmmo:12,reload:0,cooldown:0,time:95,defuse:0,verified:!1,checked:!1,decisionCorrect:0,attempts:0,kills:0,totalKills:0,shots:0,hits:0,melee:0,x:0,z:14,y:1.65,jumpY:0,vy:0,crouch:!1,feedback:"100 \u751F\u547D\u503C\u3002\u5229\u7528\u63A9\u9AD4\u3001\u5075\u5BDF\u8DEF\u7DDA\uFF0C\u518D\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002"}}function An(n,e,t=.34,i=[]){return[...ii,...i.filter(s=>!s.open)].some(s=>Math.abs(n-s.x)<s.w/2+t&&Math.abs(e-s.z)<s.d/2+t)}function Or(n,e,t,i=[]){An(n.x+e,n.z,.34,i)||(n.x+=e),An(n.x,n.z+t,.34,i)||(n.z+=t)}function Xs(n,e,t,i,s=[],r=1.4){let o=Math.hypot(t-n,i-e),a=[...ii,...s.filter(c=>!c.open)].filter(c=>c.h>=r);for(let c=0;c<=o;c+=.16){let l=o?c/o:0,h=n+(t-n)*l,u=e+(i-e)*l;if(a.some(d=>Math.abs(h-d.x)<d.w/2&&Math.abs(u-d.z)<d.d/2))return!0}return!1}function zr(n,e,t,i,s=[]){let r=[Math.round(n),Math.round(e)],o=[Math.round(t),Math.round(i)],a=[r],c=new Map([[r.join(),null]]),l=null;for(let u=0;u<a.length&&u<1500;u++){let d=a[u];if(Math.hypot(d[0]-o[0],d[1]-o[1])<1.5){l=d;break}for(let[f,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let _=[d[0]+f,d[1]+g],m=_.join();Math.abs(_[0])>16||Math.abs(_[1])>16||c.has(m)||An(_[0],_[1],.45,s)||(c.set(m,d),a.push(_))}}if(!l)return[];let h=[];for(;l&&l.join()!==r.join();)h.unshift({x:l[0],z:l[1]}),l=c.get(l.join());return h}function Yl(n,e){let t=Fr[e];return n.phase!=="buy"||!t||n.purchases.includes(e)||n.credits<t.cost?!1:(n.credits-=t.cost,n.spent+=t.cost,n.purchases.push(e),!0)}function Ql(n,e){return!["playing","buy"].includes(n.phase)||!n.owned.includes(e)||n.weapon===e?!1:($d(n,e),n.cooldown=Math.max(.2,n.weaponReady?.[e]||0),!0)}function Jl(n){return n.phase!=="buy"?!1:(n.phase="playing",n.hp=100,n.owned=["pistol","knife",...n.purchases.filter(e=>je[e])],n.weapon=n.purchases.includes("sniper")?"sniper":n.purchases.includes("carbine")?"carbine":"pistol",Object.assign(n,Wl(n.owned)),n.maxAmmo=je[n.weapon].mag,n.ammo=n.maxAmmo,n.reload=0,n.cooldown=0,n.weaponReady={},n.time=105-n.round*10,n.defuse=0,n.verified=!1,n.checked=!1,n.attempts=0,n.kills=0,n.x=0,n.z=14,n.y=1.65,n.jumpY=0,n.vy=0,n.crouch=!1,!0)}function Ra(n,e=8){return n.phase!=="playing"||!Number.isFinite(e)||e<=0?!1:(n.hp=Math.max(0,n.hp-e),n.defuse=0,n.hp||(n.phase="dying"),!0)}function Ca(n,e=[]){if(n.phase!=="playing")return null;if(Math.hypot(n.x,n.z+13)<2.7)return{type:n.verified?"defuse":"check",key:n.verified?"E":"F"};let t=e.filter(i=>Math.hypot(i.x-n.x,i.z-n.z)<2.7).sort((i,s)=>Math.hypot(i.x-n.x,i.z-n.z)-Math.hypot(s.x-n.x,s.z-n.z))[0];return t?{type:"door",id:t.id,key:"E",open:t.open}:null}function Zl(n,e,t=si[n.round-1]){return n.phase!=="playing"||!n.checked||n.verified?!1:(n.attempts++,e===t.right?(n.verified=!0,n.attempts===1&&n.decisionCorrect++,n.feedback=t.why,!0):(n.feedback="\u518D\u6838\u5C0D\u7E3D\u984D\u3001\u9700\u8981\u540C\u5230\u5E33\u65E5\u671F\u3002"+t.why,!1))}function Br(n){return{judgement:Math.round(n.decisionCorrect/3*80),reserve:n.earned>0?Math.round(n.credits/n.earned*20):n.spent===0?20:0,accuracy:n.shots?Math.round(n.hits/n.shots*100):0}}function Kl(n,e,t=!1){if(n.phase!=="playing"||!e||e.hp<=0)return null;let i=je[n.weapon],s=t&&n.weapon!=="knife";return e.hp=Math.max(0,n.weapon==="knife"?0:e.hp-i.damage*(s?3:1)),s&&n.headshots++,!e.hp&&!e.rewarded?(e.rewarded=!0,n.kills++,n.totalKills++,n.credits+=100,n.earned+=100,{head:s,killed:!0,coins:100}):{head:s,killed:!1,coins:0}}var qs=18,kr=.12,$l=je.bazooka.range;function jl(n,e,t,i){let s=Math.hypot(t.x,t.y,t.z);return{id:crypto.randomUUID(),owner:n,position:{...e},previousPosition:{...e},velocity:{x:t.x*qs/s,y:t.y*qs/s,z:t.z*qs/s},spawnTime:i,travelled:0,active:!0,exploded:!1}}function Pa(n,e,t,i){let s=0,r=1;for(let[o,a,c]of[["x",t.x-t.w/2,t.x+t.w/2],["y",t.base||0,(t.base||0)+t.h],["z",t.z-t.d/2,t.z+t.d/2]]){let l=n[o],h=e[o];if(!h){if(l<a-i||l>c+i)return 1/0;continue}let u=(a-i-l)/h,d=(c+i-l)/h;if(s=Math.max(s,Math.min(u,d)),r=Math.min(r,Math.max(u,d)),s>r)return 1/0}return s}function eh(n,e,t,i){if(!n.active||e<=0)return null;let s=Math.min($l-n.travelled,e*qs),r=Object.fromEntries(Object.entries(n.velocity).map(([h,u])=>[h,u*s/qs])),o=n.position,a=r.y<0&&o.y+r.y<=kr?Math.max(0,(kr-o.y)/r.y):1/0,c=null;for(let h of t)a=Math.min(a,Pa(o,r,h,kr));for(let h of i){if(h.hp<=0)continue;let u=Pa(o,r,{x:h.x,z:h.z,w:1.1,d:.95,h:1.9},kr);u<a&&(a=u,c=h.id)}let l=Math.min(1,a);return n.previousPosition=o,n.position={x:o.x+r.x*l,y:o.y+r.y*l,z:o.z+r.z*l},n.travelled+=s*l,!Number.isFinite(a)&&n.travelled<$l-1e-8?null:(n.active=!1,n.exploded=!0,{id:n.id,owner:n.owner,position:{...n.position},direct:c})}function Ia(n,e,t,i=!1){if(!i&&e.id===n.direct)return je.bazooka.damage;let s=n.position,r={x:e.x-s.x,y:(e.y??1.05)-s.y,z:e.z-s.z},o=Math.hypot(r.x,r.y,r.z),{blastRadius:a,splash:c,selfCap:l}=je.bazooka;return o>=a||t.some(h=>Pa(s,r,h,0)<1)?0:Math.min(i?l:c,Math.round(c*(1-o/a)))}var jd=0,th=1,ef=2;var Nu=1,cl=2,qn=3,mi=0,jt=1,Mn=2;var di=0,ps=1,nh=2,ih=3,sh=4,tf=5,Pi=100,nf=101,sf=102,rh=103,oh=104,rf=200,of=201,af=202,cf=203,mc=204,gc=205,lf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,_f=214,Af=0,xf=1,yf=2,Ao=3,vf=4,Mf=5,bf=6,Sf=7,Uu=0,Ef=1,wf=2,fi=0,Tf=1,Rf=2,Cf=3,Pf=4,If=5,Df=6;var Fu=300,_s=301,As=302,_c=303,Ac=304,Ko=306,rr=1e3,bn=1001,xc=1002,Qt=1003,ah=1004;var Da=1005;var cn=1006,Lf=1007;var or=1008;var pi=1009,Nf=1010,Uf=1011,ll=1012,Ou=1013,hi=1014,ui=1015,ar=1016,zu=1017,Bu=1018,Li=1020,Ff=1021,Sn=1023,Of=1024,zf=1025,Ni=1026,xs=1027,Bf=1028,ku=1029,kf=1030,Hu=1031,Gu=1033,La=33776,Na=33777,Ua=33778,Fa=33779,ch=35840,lh=35841,hh=35842,uh=35843,Vu=36196,dh=37492,fh=37496,ph=37808,mh=37809,gh=37810,_h=37811,Ah=37812,xh=37813,yh=37814,vh=37815,Mh=37816,bh=37817,Sh=37818,Eh=37819,wh=37820,Th=37821,Oa=36492,Rh=36494,Ch=36495,Hf=36283,Ph=36284,Ih=36285,Dh=36286;var xo=2300,yo=2301,za=2302,Lh=2400,Nh=2401,Uh=2402;var Wu=3e3,Ui=3001,Gf=3200,Vf=3201,Xu=0,Wf=1,ln="",At="srgb",Kn="srgb-linear",hl="display-p3",$o="display-p3-linear",vo="linear",at="srgb",Mo="rec709",bo="p3";var Xi=7680;var Fh=519,Xf=512,qf=513,Yf=514,qu=515,Qf=516,Jf=517,Zf=518,Kf=519,yc=35044;var Oh="300 es",vc=1035,Jn=2e3,So=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ba=Math.PI/180,Mc=180/Math.PI;function Zn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function $f(n,e){return(n%e+e)%e}function ka(n,e,t){return(1-t)*n+t*e}function zh(n){return(n&n-1)===0&&n!==0}function bc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],A=s[4],E=s[7],P=s[2],R=s[5],T=s[8];return r[0]=o*_+a*x+c*P,r[3]=o*m+a*A+c*R,r[6]=o*p+a*E+c*T,r[1]=l*_+h*x+u*P,r[4]=l*m+h*A+u*R,r[7]=l*p+h*E+u*T,r[2]=d*_+f*x+g*P,r[5]=d*m+f*A+g*R,r[8]=d*p+f*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Je;function Yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jf(){let n=Eo("canvas");return n.style.display="block",n}var Bh={};function er(n){n in Bh||(Bh[n]=!0,console.warn(n))}var kh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Kn]:{transfer:vo,primaries:Mo,toReference:n=>n,fromReference:n=>n},[At]:{transfer:at,primaries:Mo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$o]:{transfer:vo,primaries:bo,toReference:n=>n.applyMatrix3(Hh),fromReference:n=>n.applyMatrix3(kh)},[hl]:{transfer:at,primaries:bo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hh),fromReference:n=>n.applyMatrix3(kh).convertLinearToSRGB()}},ep=new Set([Kn,$o]),et={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ep.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Hr[e].toReference,s=Hr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hr[n].primaries},getTransfer:function(n){return n===ln?vo:Hr[n].transfer}};function ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qi,wo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=Eo("canvas")),qi.width=e.width,qi.height=e.height;let i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Eo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ms(t[i]/255)*255):t[i]=ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tp=0,To=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var np=0,hn=class n extends gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bn,s=bn,r=cn,o=or,a=Sn,c=pi,l=n.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Zn(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ui?At:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Ui:Wu}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ui?At:ln}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Fu;hn.DEFAULT_ANISOTROPY=1;var Pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,E=(f+1)/2,P=(p+1)/2,R=(h+d)/4,T=(u+_)/4,U=(g+m)/4;return A>E&&A>P?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=T/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=U/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=T/r,s=U/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ui?At:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ro=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ec=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let P=Math.sqrt(A),R=Math.atan2(P,p*x);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let E=a*x;if(c=c*m+d*E,l=l*m+f*E,h=h*m+g*E,u=u*m+_*E,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wa=new D,Gh=new _i,Fi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Vr.subVectors(this.max,Ys),Yi.subVectors(e.a,Ys),Qi.subVectors(e.b,Ys),Ji.subVectors(e.c,Ys),ri.subVectors(Qi,Yi),oi.subVectors(Ji,Qi),Ei.subVectors(Yi,Ji);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!Xa(t,Yi,Qi,Ji,Vr)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Yi,Qi,Ji,Vr))?!1:(Wr.crossVectors(ri,oi),t=[Wr.x,Wr.y,Wr.z],Xa(t,Yi,Qi,Ji,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,Gr=new Fi,Yi=new D,Qi=new D,Ji=new D,ri=new D,oi=new D,Ei=new D,Ys=new D,Vr=new D,Wr=new D,wi=new D;function Xa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ip=new Fi,Qs=new D,qa=new D,ys=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ip.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(qa)),this.expandByPoint(Qs.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new D,Ya=new D,Xr=new D,ai=new D,Qa=new D,qr=new D,Ja=new D,cr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ya.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ya);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xr),a=ai.dot(this.direction),c=-ai.dot(Xr),l=ai.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ya).addScaledVector(Xr,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){Qa.subVectors(t,e),qr.subVectors(i,e),Ja.crossVectors(Qa,qr);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);let c=a*this.direction.dot(qr.crossVectors(ai,qr));if(c<0)return null;let l=a*this.direction.dot(Qa.cross(ai));if(l<0||c+l>o)return null;let h=-a*ai.dot(Ja);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ci.crossVectors(i,nn),ci.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ci.crossVectors(i,nn)),ci.normalize(),Yr.crossVectors(nn,ci),s[0]=ci.x,s[4]=Yr.x,s[8]=nn.x,s[1]=ci.y,s[5]=Yr.y,s[9]=nn.y,s[2]=ci.z,s[6]=Yr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],A=i[7],E=i[11],P=i[15],R=s[0],T=s[4],U=s[8],v=s[12],b=s[1],F=s[5],X=s[9],ne=s[13],L=s[2],z=s[6],k=s[10],$=s[14],Q=s[3],Y=s[7],ie=s[11],ee=s[15];return r[0]=o*R+a*b+c*L+l*Q,r[4]=o*T+a*F+c*z+l*Y,r[8]=o*U+a*X+c*k+l*ie,r[12]=o*v+a*ne+c*$+l*ee,r[1]=h*R+u*b+d*L+f*Q,r[5]=h*T+u*F+d*z+f*Y,r[9]=h*U+u*X+d*k+f*ie,r[13]=h*v+u*ne+d*$+f*ee,r[2]=g*R+_*b+m*L+p*Q,r[6]=g*T+_*F+m*z+p*Y,r[10]=g*U+_*X+m*k+p*ie,r[14]=g*v+_*ne+m*$+p*ee,r[3]=x*R+A*b+E*L+P*Q,r[7]=x*T+A*F+E*z+P*Y,r[11]=x*U+A*X+E*k+P*ie,r[15]=x*v+A*ne+E*$+P*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,A=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,E=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*x+i*A+s*E+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=x*T,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*T,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*T,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*T,e[4]=A*T,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*T,e[8]=E*T,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*T,e[12]=P*T,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*T,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=c*l,A=c*h,E=c*u,P=i.x,R=i.y,T=i.z;return s[0]=(1-(_+p))*P,s[1]=(f+E)*P,s[2]=(g-A)*P,s[3]=0,s[4]=(f-E)*R,s[5]=(1-(d+p))*R,s[6]=(m+x)*R,s[7]=0,s[8]=(g+A)*T,s[9]=(m-x)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);let l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Jn){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===So)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h,g,_;if(a===Jn)g=(o+r)*u,_=-2*u;else if(a===So)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zi=new D,yn=new yt,sp=new D(0,0,0),rp=new D(1,1,1),ci=new D,Yr=new D,nn=new D,Vh=new yt,Wh=new _i,Co=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Co.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},op=0,Xh=new D,Ki=new _i,Vn=new yt,Qr=new D,Js=new D,ap=new D,cp=new _i,qh=new D(1,0,0),Yh=new D(0,1,0),Qh=new D(0,0,1),lp={type:"added"},hp={type:"removed"},Lt=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Co,i=new _i,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Js,Qr,this.up):Vn.lookAt(Qr,Js,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Vn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new D,Wn=new D,Za=new D,Xn=new D,$i=new D,ji=new D,Jh=new D,Ka=new D,$a=new D,ja=new D,Jr=!1,Di=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Wn.subVectors(i,t),Za.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Wn),c=vn.dot(Za),l=Wn.dot(Wn),h=Wn.dot(Za),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,i,s,r,o,a,c){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Wn.subVectors(e,t),vn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,i),ji.subVectors(r,i),Ka.subVectors(e,i);let c=$i.dot(Ka),l=ji.dot(Ka);if(c<=0&&l<=0)return t.copy(i);$a.subVectors(e,s);let h=$i.dot($a),u=ji.dot($a);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector($i,o);ja.subVectors(e,r);let f=$i.dot(ja),g=ji.dot(ja);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ji,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Jh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector($i,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function ec(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=$f(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ec(o,r,e+1/3),this.g=ec(o,r,e),this.b=ec(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Bt(zt.r*255,0,255))*65536+Math.round(Bt(zt.g*255,0,255))*256+Math.round(Bt(zt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=At){et.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Zr);let i=ka(li.h,Zr.h,t),s=ka(li.s,Zr.s,t),r=ka(li.l,Zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new He;He.NAMES=Qu;var up=0,jn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=ps,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==gc&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kt=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new D,Kr=new oe,vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}};var Po=class extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Io=class extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var dp=0,an=new yt,tc=new Lt,es=new D,sn=new Fi,Zs=new Fi,Ct=new D,Mt=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?Io:Po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(sn.min,Zs.min),sn.expandByPoint(Ct),Ct.addVectors(sn.max,Zs.max),sn.expandByPoint(Ct)):(sn.expandByPoint(Zs.min),sn.expandByPoint(Zs.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(e,l),Ct.add(es)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new D,h[b]=new D;let u=new D,d=new D,f=new D,g=new oe,_=new oe,m=new oe,p=new D,x=new D;function A(b,F,X){u.fromArray(s,b*3),d.fromArray(s,F*3),f.fromArray(s,X*3),g.fromArray(o,b*2),_.fromArray(o,F*2),m.fromArray(o,X*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let ne=1/(_.x*m.y-m.x*_.y);isFinite(ne)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(ne),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(ne),l[b].add(p),l[F].add(p),l[X].add(p),h[b].add(x),h[F].add(x),h[X].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,F=E.length;b<F;++b){let X=E[b],ne=X.start,L=X.count;for(let z=ne,k=ne+L;z<k;z+=3)A(i[z+0],i[z+1],i[z+2])}let P=new D,R=new D,T=new D,U=new D;function v(b){T.fromArray(r,b*3),U.copy(T);let F=l[b];P.copy(F),P.sub(T.multiplyScalar(T.dot(F))).normalize(),R.crossVectors(U,F);let ne=R.dot(h[b])<0?-1:1;c[b*4]=P.x,c[b*4+1]=P.y,c[b*4+2]=P.z,c[b*4+3]=ne}for(let b=0,F=E.length;b<F;++b){let X=E[b],ne=X.start,L=X.count;for(let z=ne,k=ne+L;z<k;z+=3)v(i[z+0]),v(i[z+1]),v(i[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zh=new yt,Ti=new cr,$r=new ys,Kh=new D,ts=new D,ns=new D,is=new D,nc=new D,jr=new D,eo=new oe,to=new oe,no=new oe,$h=new D,jh=new D,eu=new D,io=new D,so=new D,xt=class extends Lt{constructor(e=new Mt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(nc.fromBufferAttribute(u,e),o?jr.addScaledVector(nc,h):jr.addScaledVector(nc.sub(t),h))}t.add(jr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!($r.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere($r,Kh)===null||Ti.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,P=A;E<P;E+=3){let R=a.getX(E),T=a.getX(E+1),U=a.getX(E+2);s=ro(this,p,e,i,l,h,u,R,T,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);s=ro(this,o,e,i,l,h,u,x,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,P=A;E<P;E+=3){let R=E,T=E+1,U=E+2;s=ro(this,p,e,i,l,h,u,R,T,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=m,A=m+1,E=m+2;s=ro(this,o,e,i,l,h,u,x,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function fp(n,e,t,i,s,r,o,a){let c;if(e.side===jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(so);return l<t.near||l>t.far?null:{distance:l,point:so.clone(),object:n}}function ro(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ts),n.getVertexPosition(c,ns),n.getVertexPosition(l,is);let h=fp(n,e,t,i,ts,ns,is,io);if(h){s&&(eo.fromBufferAttribute(s,a),to.fromBufferAttribute(s,c),no.fromBufferAttribute(s,l),h.uv=Di.getInterpolation(io,ts,ns,is,eo,to,no,new oe)),r&&(eo.fromBufferAttribute(r,a),to.fromBufferAttribute(r,c),no.fromBufferAttribute(r,l),h.uv1=Di.getInterpolation(io,ts,ns,is,eo,to,no,new oe),h.uv2=h.uv1),o&&($h.fromBufferAttribute(o,a),jh.fromBufferAttribute(o,c),eu.fromBufferAttribute(o,l),h.normal=Di.getInterpolation(io,ts,ns,is,$h,jh,eu,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Di.getNormal(ts,ns,is,u.normal),h.face=u}return h}var un=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(_,m,p,x,A,E,P,R,T,U,v){let b=E/T,F=P/U,X=E/2,ne=P/2,L=R/2,z=T+1,k=U+1,$=0,Q=0,Y=new D;for(let ie=0;ie<k;ie++){let ee=ie*F-ne;for(let ue=0;ue<z;ue++){let W=ue*b-X;Y[_]=W*x,Y[m]=ee*A,Y[p]=L,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ue/T),u.push(1-ie/U),$+=1}}for(let ie=0;ie<U;ie++)for(let ee=0;ee<T;ee++){let ue=d+ee+z*ie,W=d+ee+z*(ie+1),j=d+(ee+1)+z*(ie+1),de=d+(ee+1)+z*ie;c.push(ue,W,de),c.push(W,j,de),Q+=6}a.addGroup(f,Q,v),f+=Q,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let s in i)e[s]=i[s]}return e}function pp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ju(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}var mp={clone:vs,merge:Yt},gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Do=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dt=class extends Do{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mc*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=-90,rs=1,wc=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Dt(ss,rs,e,t);r.layers=this.layers,this.add(r);let o=new Dt(ss,rs,e,t);o.layers=this.layers,this.add(o);let a=new Dt(ss,rs,e,t);a.layers=this.layers,this.add(a);let c=new Dt(ss,rs,e,t);c.layers=this.layers,this.add(c);let l=new Dt(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Lo=class extends hn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tc=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ui?At:ln),this.texture=new Lo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new un(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:di});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===or&&(t.minFilter=cn),new wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ic=new D,Ap=new D,xp=new Je,Yn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ic.subVectors(i,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ic),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xp.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new ys,oo=new D,hr=class{constructor(e=new Yn,t=new Yn,i=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],A=s[14],E=s[15];if(i[0].setComponents(c-r,d-l,m-f,E-p).normalize(),i[1].setComponents(c+r,d+l,m+f,E+p).normalize(),i[2].setComponents(c+o,d+h,m+g,E+x).normalize(),i[3].setComponents(c-o,d-h,m-g,E-x).normalize(),i[4].setComponents(c-a,d-u,m-_,E-A).normalize(),t===Jn)i[5].setComponents(c+a,d+u,m+_,E+A).normalize();else if(t===So)i[5].setComponents(a,u,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ur=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let x=p*d-o;for(let A=0;A<l;A++){let E=A*u-r;g.push(E,-x,0),_.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let A=x+l*p,E=x+l*(p+1),P=x+1+l*(p+1),R=x+1+l*p;f.push(A,E,R),f.push(E,P,R)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:bp,alphamap_pars_fragment:Sp,alphatest_fragment:Ep,alphatest_pars_fragment:wp,aomap_fragment:Tp,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Ip,beginnormal_vertex:Dp,bsdfs:Lp,iridescence_fragment:Np,bumpmap_pars_fragment:Up,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Bp,color_fragment:kp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Vp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Qp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Zp,colorspace_fragment:Kp,colorspace_pars_fragment:$p,envmap_fragment:jp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:pm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:cm,lightmap_fragment:lm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:Am,lights_physical_fragment:xm,lights_physical_pars_fragment:ym,lights_fragment_begin:vm,lights_fragment_maps:Mm,lights_fragment_end:bm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Tm,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Lm,morphcolor_vertex:Nm,morphnormal_vertex:Um,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:zm,normal_fragment_maps:Bm,normal_pars_fragment:km,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Qm,packing:Jm,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:$m,dithering_pars_fragment:jm,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:cg,skinnormal_vertex:lg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:Ag,worldpos_vertex:xg,background_vert:yg,background_frag:vg,backgroundCube_vert:Mg,backgroundCube_frag:bg,cube_vert:Sg,cube_frag:Eg,depth_vert:wg,depth_frag:Tg,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Dg,linedashed_frag:Lg,meshbasic_vert:Ng,meshbasic_frag:Ug,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:zg,meshmatcap_frag:Bg,meshnormal_vert:kg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Vg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:Qg,points_frag:Jg,shadow_vert:Zg,shadow_frag:Kg,sprite_vert:$g,sprite_frag:jg},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ln={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ln.physical={uniforms:Yt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var ao={r:0,b:0,g:0};function e0(n,e,t,i,s,r,o){let a=new He(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let x=!1,A=p.isScene===!0?p.background:null;A&&A.isTexture&&(A=(p.backgroundBlurriness>0?t:e).get(A)),A===null?_(a,c):A&&A.isColor&&(_(A,1),x=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Ko)?(h===void 0&&(h=new xt(new un(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:vs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=et.getTransfer(A.colorSpace)!==at,(u!==A||d!==A.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new xt(new ur(2,2),new ei({name:"BackgroundMaterial",uniforms:vs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=et.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(ao,Ju(n)),i.buffers.color.setClear(ao.r,ao.g,ao.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function t0(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,z,k,$,Q){let Y=!1;if(o){let ie=_($,k,z);l!==ie&&(l=ie,f(l.object)),Y=p(L,$,k,Q),Y&&x(L,$,k,Q)}else{let ie=z.wireframe===!0;(l.geometry!==$.id||l.program!==k.id||l.wireframe!==ie)&&(l.geometry=$.id,l.program=k.id,l.wireframe=ie,Y=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(L,z,k,$),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,z,k){let $=k.wireframe===!0,Q=a[L.id];Q===void 0&&(Q={},a[L.id]=Q);let Y=Q[z.id];Y===void 0&&(Y={},Q[z.id]=Y);let ie=Y[$];return ie===void 0&&(ie=m(d()),Y[$]=ie),ie}function m(L){let z=[],k=[],$=[];for(let Q=0;Q<s;Q++)z[Q]=0,k[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,z,k,$){let Q=l.attributes,Y=z.attributes,ie=0,ee=k.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let j=Q[ue],de=Y[ue];if(de===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),j===void 0||j.attribute!==de||de&&j.data!==de.data)return!0;ie++}return l.attributesNum!==ie||l.index!==$}function x(L,z,k,$){let Q={},Y=z.attributes,ie=0,ee=k.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let j=Y[ue];j===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let de={};de.attribute=j,j&&j.data&&(de.data=j.data),Q[ue]=de,ie++}l.attributes=Q,l.attributesNum=ie,l.index=$}function A(){let L=l.newAttributes;for(let z=0,k=L.length;z<k;z++)L[z]=0}function E(L){P(L,0)}function P(L,z){let k=l.newAttributes,$=l.enabledAttributes,Q=l.attributeDivisors;k[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),Q[L]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),Q[L]=z)}function R(){let L=l.newAttributes,z=l.enabledAttributes;for(let k=0,$=z.length;k<$;k++)z[k]!==L[k]&&(n.disableVertexAttribArray(k),z[k]=0)}function T(L,z,k,$,Q,Y,ie){ie===!0?n.vertexAttribIPointer(L,z,k,Q,Y):n.vertexAttribPointer(L,z,k,$,Q,Y)}function U(L,z,k,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();let Q=$.attributes,Y=k.getAttributes(),ie=z.defaultAttributeValues;for(let ee in Y){let ue=Y[ee];if(ue.location>=0){let W=Q[ee];if(W===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){let j=W.normalized,de=W.itemSize,Me=t.get(W);if(Me===void 0)continue;let Ae=Me.buffer,Ne=Me.type,Be=Me.bytesPerElement,Se=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||W.gpuType===Ou);if(W.isInterleavedBufferAttribute){let Le=W.data,I=Le.stride,ce=W.offset;if(Le.isInstancedInterleavedBuffer){for(let Z=0;Z<ue.locationSize;Z++)P(ue.location+Z,Le.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Z=0;Z<ue.locationSize;Z++)E(ue.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Z=0;Z<ue.locationSize;Z++)T(ue.location+Z,de/ue.locationSize,Ne,j,I*Be,(ce+de/ue.locationSize*Z)*Be,Se)}else{if(W.isInstancedBufferAttribute){for(let Le=0;Le<ue.locationSize;Le++)P(ue.location+Le,W.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Le=0;Le<ue.locationSize;Le++)E(ue.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Le=0;Le<ue.locationSize;Le++)T(ue.location+Le,de/ue.locationSize,Ne,j,de*Be,de/ue.locationSize*Le*Be,Se)}}else if(ie!==void 0){let j=ie[ee];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ue.location,j);break;case 3:n.vertexAttrib3fv(ue.location,j);break;case 4:n.vertexAttrib4fv(ue.location,j);break;default:n.vertexAttrib1fv(ue.location,j)}}}}R()}function v(){X();for(let L in a){let z=a[L];for(let k in z){let $=z[k];for(let Q in $)g($[Q].object),delete $[Q];delete z[k]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let z=a[L.id];for(let k in z){let $=z[k];for(let Q in $)g($[Q].object),delete $[Q];delete z[k]}delete a[L.id]}function F(L){for(let z in a){let k=a[z];if(k[L.id]===void 0)continue;let $=k[L.id];for(let Q in $)g($[Q].object),delete $[Q];delete k[L.id]}}function X(){ne(),h=!0,l!==c&&(l=c,f(l.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:ne,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:E,disableUnusedAttributes:R}}function n0(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function i0(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,E=o||e.has("OES_texture_float"),P=A&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:R}}function s0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Yn,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:i,A=x*4,E=p.clippingState||null;c.value=E,E=h(g,d,A,f);for(let P=0;P!==A;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,E=f;A!==_;++A,E+=4)o.copy(u[A]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function r0(n){let e=new WeakMap;function t(o,a){return a===_c?o.mapping=_s:a===Ac&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===_c||a===Ac)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Tc(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var No=class extends Do{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=4,tu=[.125,.215,.35,.446,.526,.582],Ii=20,sc=new No,nu=new He,rc=null,oc=0,ac=0,Ci=(1+Math.sqrt(5))/2,os=1/Ci,iu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ci,os),new D(0,Ci,-os),new D(os,0,Ci),new D(-os,0,Ci),new D(Ci,os,0),new D(-Ci,os,0)],Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,oc,ac),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ar,format:Sn,colorSpace:Kn,depthBuffer:!1},s=su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o0(r)),this._blurMaterial=a0(r,e,t)}return s}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,i,s){let a=new Dt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nu),h.toneMapping=fi,h.autoClear=!1;let f=new kt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new xt(new un,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(nu),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let A=this._cubeSize;co(s,x*A,p>2?A:0,A,A),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===_s||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;co(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,sc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=iu[(s-1)%iu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],x=0;for(let T=0;T<Ii;++T){let U=T/_,v=Math.exp(-U*U/2);p.push(v),T===0?x+=v:T<m&&(x+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;let E=this._sizeLods[s],P=3*E*(s>A-us?s-A+us:0),R=4*(this._cubeSize-E);co(t,P,R,3*E,2*E),c.setRenderTarget(t),c.render(u,sc)}};function o0(n){let e=[],t=[],i=[],s=n,r=n-us+1+tu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-us?c=tu[o-n+us-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),A=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,U=R>2?0:-1,v=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];x.set(v,_*g*R),A.set(d,m*g*R);let b=[R,R,R,R,R,R];E.set(b,p*g*R)}let P=new Mt;P.setAttribute("position",new vt(x,_)),P.setAttribute("uv",new vt(A,m)),P.setAttribute("faceIndex",new vt(E,p)),e.push(P),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function su(n,e,t){let i=new $n(n,e,t);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function a0(n,e,t){let i=new Float32Array(Ii),s=new D(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ru(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ou(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===_c||c===Ac,h=c===_s||c===As;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Uo(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Uo(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function l0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function h0(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let x=f.array;_=f.version;for(let A=0,E=x.length;A<E;A+=3){let P=x[A+0],R=x[A+1],T=x[A+2];d.push(P,R,R,T,T,P)}}else if(g!==void 0){let x=g.array;_=g.version;for(let A=0,E=x.length/3-1;A<E;A+=3){let P=A+0,R=A+1,T=A+2;d.push(P,R,R,T,T,P)}}else return;let m=new(Yu(d)?Io:Po)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function u0(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function d0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function f0(n,e){return n[0]-e[0]}function p0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function m0(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],U=0;x===!0&&(U=1),A===!0&&(U=2),E===!0&&(U=3);let v=h.attributes.position.count*U,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let F=new Float32Array(v*b*4*g),X=new Ro(F,v,b,g);X.type=ui,X.needsUpdate=!0;let ne=U*4;for(let z=0;z<g;z++){let k=P[z],$=R[z],Q=T[z],Y=v*b*4*z;for(let ie=0;ie<k.count;ie++){let ee=ie*ne;x===!0&&(o.fromBufferAttribute(k,ie),F[Y+ee+0]=o.x,F[Y+ee+1]=o.y,F[Y+ee+2]=o.z,F[Y+ee+3]=0),A===!0&&(o.fromBufferAttribute($,ie),F[Y+ee+4]=o.x,F[Y+ee+5]=o.y,F[Y+ee+6]=o.z,F[Y+ee+7]=0),E===!0&&(o.fromBufferAttribute(Q,ie),F[Y+ee+8]=o.x,F[Y+ee+9]=o.y,F[Y+ee+10]=o.z,F[Y+ee+11]=Q.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new oe(v,b)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let A=0;A<f;A++)g[A]=[A,0];i[h.id]=g}for(let A=0;A<f;A++){let E=g[A];E[0]=A,E[1]=d[A]}g.sort(p0);for(let A=0;A<8;A++)A<f&&g[A][1]?(a[A][0]=g[A][0],a[A][1]=g[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(f0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let A=0;A<8;A++){let E=a[A],P=E[0],R=E[1];P!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+A)!==_[P]&&h.setAttribute("morphTarget"+A,_[P]),m&&h.getAttribute("morphNormal"+A)!==m[P]&&h.setAttribute("morphNormal"+A,m[P]),s[A]=R,p+=R):(_&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function g0(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Fo=class extends hn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ni&&(i=hi),i===void 0&&h===xs&&(i=Li),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ku=new hn,$u=new Fo(1,1);$u.compareFunction=qu;var ju=new Ro,ed=new Ec,td=new Lo,au=[],cu=[],lu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Cs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jo(n,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function x0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function y0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function v0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),wt(t,i)}}function M0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),wt(t,i)}}function b0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),wt(t,i)}}function S0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function w0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function T0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function R0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function P0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function I0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function D0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?$u:Ku;t.setTexture2D(e||r,s)}function L0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ed,s)}function N0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||td,s)}function U0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ju,s)}function F0(n){switch(n){case 5126:return _0;case 35664:return A0;case 35665:return x0;case 35666:return y0;case 35674:return v0;case 35675:return M0;case 35676:return b0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return U0}}function O0(n,e){n.uniform1fv(this.addr,e)}function z0(n,e){let t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function B0(n,e){let t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function k0(n,e){let t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function H0(n,e){let t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G0(n,e){let t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V0(n,e){let t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function W0(n,e){n.uniform1iv(this.addr,e)}function X0(n,e){n.uniform2iv(this.addr,e)}function q0(n,e){n.uniform3iv(this.addr,e)}function Y0(n,e){n.uniform4iv(this.addr,e)}function Q0(n,e){n.uniform1uiv(this.addr,e)}function J0(n,e){n.uniform2uiv(this.addr,e)}function Z0(n,e){n.uniform3uiv(this.addr,e)}function K0(n,e){n.uniform4uiv(this.addr,e)}function $0(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ku,r[o])}function j0(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ed,r[o])}function e_(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||td,r[o])}function t_(n,e,t){let i=this.cache,s=e.length,r=jo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ju,r[o])}function n_(n){switch(n){case 5126:return O0;case 35664:return z0;case 35665:return B0;case 35666:return k0;case 35674:return H0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return Q0;case 36294:return J0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}var Rc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}},Cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},cc=/(\w+)(\])?(\[|\.)?/g;function du(n,e){n.seq.push(e),n.map[e.id]=e}function i_(n,e,t){let i=n.name,s=i.length;for(cc.lastIndex=0;;){let r=cc.exec(i),o=cc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){du(t,l===void 0?new Rc(a,n,e):new Cc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Pc(a),du(t,u)),t=u}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);i_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function fu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var s_=37297,r_=0;function o_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function a_(n){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n),i;switch(e===t?i="":e===bo&&t===Mo?i="LinearDisplayP3ToLinearSRGB":e===Mo&&t===bo&&(i="LinearSRGBToLinearDisplayP3"),n){case Kn:case $o:return[i,"LinearTransferOETF"];case At:case hl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+o_(n.getShaderSource(e),o)}else return s}function c_(n,e){let t=a_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function l_(n,e){let t;switch(e){case Tf:t="Linear";break;case Rf:t="Reinhard";break;case Cf:t="OptimizedCineon";break;case Pf:t="ACESFilmic";break;case Df:t="AgX";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function u_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function d_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ds(n){return n!==""}function mu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(p_,g_)}var m_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g_(n,e){let t=We[e];if(t===void 0){let i=m_.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(n){return n.replace(__,A_)}function A_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case As:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===As&&(e="ENVMAP_MODE_REFRACTION"),e}function M_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ef:e="ENVMAP_BLENDING_MIX";break;case wf:e="ENVMAP_BLENDING_ADD";break}return e}function b_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function S_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=x_(t),l=y_(t),h=v_(t),u=M_(t),d=b_(t),f=t.isWebGL2?"":h_(t),g=u_(t),_=d_(r),m=s.createProgram(),p,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),x.length>0&&(x+=`
`)):(p=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),x=[f,Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?We.tonemapping_pars_fragment:"",t.toneMapping!==fi?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Ic(o),o=mu(o,t),o=gu(o,t),a=Ic(a),a=mu(a,t),a=gu(a,t),o=_u(o),a=_u(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let E=A+p+o,P=A+x+a,R=fu(s,s.VERTEX_SHADER,E),T=fu(s,s.FRAGMENT_SHADER,P);s.attachShader(m,R),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(X){if(n.debug.checkShaderErrors){let ne=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(T).trim(),k=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,T);else{let Q=pu(s,R,"vertex"),Y=pu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+Q+`
`+Y)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(L===""||z==="")&&($=!1);$&&(X.diagnostics={runnable:k,programLog:ne,vertexShader:{log:L,prefix:p},fragmentShader:{log:z,prefix:x}})}s.deleteShader(R),s.deleteShader(T),v=new gs(s,m),b=f_(s,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,s_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}var E_=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lc(e),t.set(e,i)),i}},Lc=class{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}};function w_(n,e,t,i,s,r,o){let a=new lr,c=new Dc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,b,F,X,ne){let L=X.fog,z=ne.geometry,k=v.isMeshStandardMaterial?X.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),Q=$&&$.mapping===Ko?$.image.height:null,Y=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=ie!==void 0?ie.length:0,ue=0;z.morphAttributes.position!==void 0&&(ue=1),z.morphAttributes.normal!==void 0&&(ue=2),z.morphAttributes.color!==void 0&&(ue=3);let W,j,de,Me;if(Y){let Wt=Ln[Y];W=Wt.vertexShader,j=Wt.fragmentShader}else W=v.vertexShader,j=v.fragmentShader,c.update(v),de=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);let Ae=n.getRenderTarget(),Ne=ne.isInstancedMesh===!0,Be=ne.isBatchedMesh===!0,Se=!!v.map,Le=!!v.matcap,I=!!$,ce=!!v.aoMap,Z=!!v.lightMap,se=!!v.bumpMap,J=!!v.normalMap,we=!!v.displacementMap,fe=!!v.emissiveMap,S=!!v.metalnessMap,y=!!v.roughnessMap,C=v.anisotropy>0,V=v.clearcoat>0,q=v.iridescence>0,K=v.sheen>0,ae=v.transmission>0,re=C&&!!v.anisotropyMap,_e=V&&!!v.clearcoatMap,pe=V&&!!v.clearcoatNormalMap,Ee=V&&!!v.clearcoatRoughnessMap,te=q&&!!v.iridescenceMap,qe=q&&!!v.iridescenceThicknessMap,Oe=K&&!!v.sheenColorMap,Ce=K&&!!v.sheenRoughnessMap,Te=!!v.specularMap,xe=!!v.specularColorMap,Pe=!!v.specularIntensityMap,be=ae&&!!v.transmissionMap,$e=ae&&!!v.thicknessMap,Ye=!!v.gradientMap,le=!!v.alphaMap,N=v.alphaTest>0,me=!!v.alphaHash,ge=!!v.extensions,ze=!!z.attributes.uv1,Ue=!!z.attributes.uv2,st=!!z.attributes.uv3,rt=fi;return v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:j,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Be,instancing:Ne,instancingColor:Ne&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Kn,map:Se,matcap:Le,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:Q,aoMap:ce,lightMap:Z,bumpMap:se,normalMap:J,displacementMap:d&&we,emissiveMap:fe,normalMapObjectSpace:J&&v.normalMapType===Wf,normalMapTangentSpace:J&&v.normalMapType===Xu,metalnessMap:S,roughnessMap:y,anisotropy:C,anisotropyMap:re,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ee,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:qe,sheen:K,sheenColorMap:Oe,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:xe,specularIntensityMap:Pe,transmission:ae,transmissionMap:be,thicknessMap:$e,gradientMap:Ye,opaque:v.transparent===!1&&v.blending===ps,alphaMap:le,alphaTest:N,alphaHash:me,combine:v.combine,mapUv:Se&&_(v.map.channel),aoMapUv:ce&&_(v.aoMap.channel),lightMapUv:Z&&_(v.lightMap.channel),bumpMapUv:se&&_(v.bumpMap.channel),normalMapUv:J&&_(v.normalMap.channel),displacementMapUv:we&&_(v.displacementMap.channel),emissiveMapUv:fe&&_(v.emissiveMap.channel),metalnessMapUv:S&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:re&&_(v.anisotropyMap.channel),clearcoatMapUv:_e&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(v.sheenRoughnessMap.channel),specularMapUv:Te&&_(v.specularMap.channel),specularColorMapUv:xe&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:be&&_(v.transmissionMap.channel),thicknessMapUv:$e&&_(v.thicknessMap.channel),alphaMapUv:le&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(J||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Ue,vertexUv3s:st,pointsUvs:ne.isPoints===!0&&!!z.attributes.uv&&(Se||le),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ne.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ge&&v.extensions.derivatives===!0,extensionFragDepth:ge&&v.extensions.fragDepth===!0,extensionDrawBuffers:ge&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(b,v),A(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function A(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function E(v){let b=g[v.type],F;if(b){let X=Ln[b];F=mp.clone(X.uniforms)}else F=v.uniforms;return F}function P(v,b){let F;for(let X=0,ne=l.length;X<ne;X++){let L=l[X];if(L.cacheKey===b){F=L,++F.usedTimes;break}}return F===void 0&&(F=new S_(n,b,v,r),l.push(F)),F}function R(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:U}}function T_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function R_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||R_),i.length>1&&i.sort(d||xu),s.length>1&&s.sort(d||xu)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function C_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new yu,n.set(i,[o])):s>=r.length?(o=new yu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function P_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function I_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var D_=0;function L_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N_(n,e){let t=new P_,i=I_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,o=new yt,a=new yt;function c(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let _=0,m=0,p=0,x=0,A=0,E=0,P=0,R=0,T=0,U=0,v=0;h.sort(L_);let b=u===!0?Math.PI:1;for(let X=0,ne=h.length;X<ne;X++){let L=h[X],z=L.color,k=L.intensity,$=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*k*b,f+=z.g*k*b,g+=z.b*k*b;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],k);v++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let ie=L.shadow,ee=i.get(L);ee.shadowBias=ie.bias,ee.shadowNormalBias=ie.normalBias,ee.shadowRadius=ie.radius,ee.shadowMapSize=ie.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=Q,s.directionalShadowMatrix[_]=L.shadow.matrix,E++}s.directional[_]=Y,_++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(k*b),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[p]=Y;let ie=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,ie.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[p]=ie.matrix,L.castShadow){let ee=i.get(L);ee.shadowBias=ie.bias,ee.shadowNormalBias=ie.normalBias,ee.shadowRadius=ie.radius,ee.shadowMapSize=ie.mapSize,s.spotShadow[p]=ee,s.spotShadowMap[p]=Q,R++}p++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(z).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=Y,x++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ie=L.shadow,ee=i.get(L);ee.shadowBias=ie.bias,ee.shadowNormalBias=ie.normalBias,ee.shadowRadius=ie.radius,ee.shadowMapSize=ie.mapSize,ee.shadowCameraNear=ie.camera.near,ee.shadowCameraFar=ie.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=Q,s.pointShadowMatrix[m]=L.shadow.matrix,P++}s.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k*b),Y.groundColor.copy(L.groundColor).multiplyScalar(k*b),s.hemi[A]=Y,A++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==x||F.hemiLength!==A||F.numDirectionalShadows!==E||F.numPointShadows!==P||F.numSpotShadows!==R||F.numSpotMaps!==T||F.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=A,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+T-U,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=v,F.directionalLength=_,F.pointLength=m,F.spotLength=p,F.rectAreaLength=x,F.hemiLength=A,F.numDirectionalShadows=E,F.numPointShadows=P,F.numSpotShadows=R,F.numSpotMaps=T,F.numLightProbes=v,s.version=D_++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){let E=h[x];if(E.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),d++}else if(E.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let P=s.point[f];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function vu(n,e){let t=new N_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function U_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new vu(n,e),t.set(r,[c])):o>=a.length?(c=new vu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Nc=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z_(n,e,t){let i=new hr,s=new oe,r=new oe,o=new Pt,a=new Nc({depthPacking:Vf}),c=new Uc,l={},h=t.maxTextureSize,u={[mi]:jt,[jt]:mi,[Mn]:Mn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:F_,fragmentShader:O_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let p=this.type;this.render=function(R,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),X=n.state;X.setBlending(di),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let ne=p!==qn&&this.type===qn,L=p===qn&&this.type!==qn;for(let z=0,k=R.length;z<k;z++){let $=R[z],Q=$.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let Y=Q.getFrameExtents();if(s.multiply(Y),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,Q.mapSize.y=r.y)),Q.map===null||ne===!0||L===!0){let ee=this.type!==qn?{minFilter:Qt,magFilter:Qt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new $n(s.x,s.y,ee),Q.map.texture.name=$.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let ie=Q.getViewportCount();for(let ee=0;ee<ie;ee++){let ue=Q.getViewport(ee);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),X.viewport(o),Q.updateMatrices($,ee),i=Q.getFrustum(),E(T,U,Q.camera,$,this.type)}Q.isPointLightShadow!==!0&&this.type===qn&&x(Q,U),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,F)};function x(R,T){let U=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,U,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,U,f,_,null)}function A(R,T,U,v){let b=null,F=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let X=b.uuid,ne=T.uuid,L=l[X];L===void 0&&(L={},l[X]=L);let z=L[ne];z===void 0&&(z=b.clone(),L[ne]=z,T.addEventListener("dispose",P)),b=z}if(b.visible=T.visible,b.wireframe=T.wireframe,v===qn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let X=n.properties.get(b);X.light=U}return b}function E(R,T,U,v,b){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let ne=e.update(R),L=R.material;if(Array.isArray(L)){let z=ne.groups;for(let k=0,$=z.length;k<$;k++){let Q=z[k],Y=L[Q.materialIndex];if(Y&&Y.visible){let ie=A(R,Y,v,b);R.onBeforeShadow(n,R,T,U,ne,ie,Q),n.renderBufferDirect(U,null,ne,ie,R,Q),R.onAfterShadow(n,R,T,U,ne,ie,Q)}}}else if(L.visible){let z=A(R,L,v,b);R.onBeforeShadow(n,R,T,U,ne,z,null),n.renderBufferDirect(U,null,ne,z,R,null),R.onAfterShadow(n,R,T,U,ne,z,null)}}let X=R.children;for(let ne=0,L=X.length;ne<L;ne++)E(X[ne],T,U,v,b)}function P(R){R.target.removeEventListener("dispose",P);for(let U in l){let v=l[U],b=R.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function B_(n,e,t){let i=t.isWebGL2;function s(){let N=!1,me=new Pt,ge=null,ze=new Pt(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!N&&(n.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){N=Ue},setClear:function(Ue,st,rt,Tt,Wt){Wt===!0&&(Ue*=Tt,st*=Tt,rt*=Tt),me.set(Ue,st,rt,Tt),ze.equals(me)===!1&&(n.clearColor(Ue,st,rt,Tt),ze.copy(me))},reset:function(){N=!1,ge=null,ze.set(-1,0,0,0)}}}function r(){let N=!1,me=null,ge=null,ze=null;return{setTest:function(Ue){Ue?Be(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Ue){me!==Ue&&!N&&(n.depthMask(Ue),me=Ue)},setFunc:function(Ue){if(ge!==Ue){switch(Ue){case Af:n.depthFunc(n.NEVER);break;case xf:n.depthFunc(n.ALWAYS);break;case yf:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case vf:n.depthFunc(n.EQUAL);break;case Mf:n.depthFunc(n.GEQUAL);break;case bf:n.depthFunc(n.GREATER);break;case Sf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Ue}},setLocked:function(Ue){N=Ue},setClear:function(Ue){ze!==Ue&&(n.clearDepth(Ue),ze=Ue)},reset:function(){N=!1,me=null,ge=null,ze=null}}}function o(){let N=!1,me=null,ge=null,ze=null,Ue=null,st=null,rt=null,Tt=null,Wt=null;return{setTest:function(ot){N||(ot?Be(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ot){me!==ot&&!N&&(n.stencilMask(ot),me=ot)},setFunc:function(ot,Xt,In){(ge!==ot||ze!==Xt||Ue!==In)&&(n.stencilFunc(ot,Xt,In),ge=ot,ze=Xt,Ue=In)},setOp:function(ot,Xt,In){(st!==ot||rt!==Xt||Tt!==In)&&(n.stencilOp(ot,Xt,In),st=ot,rt=Xt,Tt=In)},setLocked:function(ot){N=ot},setClear:function(ot){Wt!==ot&&(n.clearStencil(ot),Wt=ot)},reset:function(){N=!1,me=null,ge=null,ze=null,Ue=null,st=null,rt=null,Tt=null,Wt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,A=null,E=null,P=null,R=null,T=null,U=null,v=new He(0,0,0),b=0,F=!1,X=null,ne=null,L=null,z=null,k=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,Y=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=Y>=2);let ee=null,ue={},W=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),de=new Pt().fromArray(W),Me=new Pt().fromArray(j);function Ae(N,me,ge,ze){let Ue=new Uint8Array(4),st=n.createTexture();n.bindTexture(N,st),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<ge;rt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(me+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return st}let Ne={};Ne[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Be(n.DEPTH_TEST),c.setFunc(Ao),fe(!1),S(th),Be(n.CULL_FACE),J(di);function Be(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Se(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Le(N,me){return f[N]!==me?(n.bindFramebuffer(N,me),f[N]=me,i&&(N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function I(N,me){let ge=_,ze=!1;if(N)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),N.isWebGLMultipleRenderTargets){let Ue=N.texture;if(ge.length!==Ue.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Ue.length;st<rt;st++)ge[st]=n.COLOR_ATTACHMENT0+st;ge.length=Ue.length,ze=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,ze=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function ce(N){return m!==N?(n.useProgram(N),m=N,!0):!1}let Z={[Pi]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};if(i)Z[rh]=n.MIN,Z[oh]=n.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(Z[rh]=N.MIN_EXT,Z[oh]=N.MAX_EXT)}let se={[rf]:n.ZERO,[of]:n.ONE,[af]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[ff]:n.SRC_ALPHA_SATURATE,[uf]:n.DST_COLOR,[lf]:n.DST_ALPHA,[cf]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[df]:n.ONE_MINUS_DST_COLOR,[hf]:n.ONE_MINUS_DST_ALPHA,[pf]:n.CONSTANT_COLOR,[mf]:n.ONE_MINUS_CONSTANT_COLOR,[gf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function J(N,me,ge,ze,Ue,st,rt,Tt,Wt,ot){if(N===di){p===!0&&(Se(n.BLEND),p=!1);return}if(p===!1&&(Be(n.BLEND),p=!0),N!==tf){if(N!==x||ot!==F){if((A!==Pi||R!==Pi)&&(n.blendEquation(n.FUNC_ADD),A=Pi,R=Pi),ot)switch(N){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nh:n.blendFunc(n.ONE,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,P=null,T=null,U=null,v.set(0,0,0),b=0,x=N,F=ot}return}Ue=Ue||me,st=st||ge,rt=rt||ze,(me!==A||Ue!==R)&&(n.blendEquationSeparate(Z[me],Z[Ue]),A=me,R=Ue),(ge!==E||ze!==P||st!==T||rt!==U)&&(n.blendFuncSeparate(se[ge],se[ze],se[st],se[rt]),E=ge,P=ze,T=st,U=rt),(Tt.equals(v)===!1||Wt!==b)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Wt),v.copy(Tt),b=Wt),x=N,F=!1}function we(N,me){N.side===Mn?Se(n.CULL_FACE):Be(n.CULL_FACE);let ge=N.side===jt;me&&(ge=!ge),fe(ge),N.blending===ps&&N.transparent===!1?J(di):J(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let ze=N.stencilWrite;l.setTest(ze),ze&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),C(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(N){X!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),X=N)}function S(N){N!==jd?(Be(n.CULL_FACE),N!==ne&&(N===th?n.cullFace(n.BACK):N===ef?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),ne=N}function y(N){N!==L&&(Q&&n.lineWidth(N),L=N)}function C(N,me,ge){N?(Be(n.POLYGON_OFFSET_FILL),(z!==me||k!==ge)&&(n.polygonOffset(me,ge),z=me,k=ge)):Se(n.POLYGON_OFFSET_FILL)}function V(N){N?Be(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function q(N){N===void 0&&(N=n.TEXTURE0+$-1),ee!==N&&(n.activeTexture(N),ee=N)}function K(N,me,ge){ge===void 0&&(ee===null?ge=n.TEXTURE0+$-1:ge=ee);let ze=ue[ge];ze===void 0&&(ze={type:void 0,texture:void 0},ue[ge]=ze),(ze.type!==N||ze.texture!==me)&&(ee!==ge&&(n.activeTexture(ge),ee=ge),n.bindTexture(N,me||Ne[N]),ze.type=N,ze.texture=me)}function ae(){let N=ue[ee];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){de.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function be(N){Me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function $e(N,me){let ge=u.get(me);ge===void 0&&(ge=new WeakMap,u.set(me,ge));let ze=ge.get(N);ze===void 0&&(ze=n.getUniformBlockIndex(me,N.name),ge.set(N,ze))}function Ye(N,me){let ze=u.get(me).get(N);h.get(me)!==ze&&(n.uniformBlockBinding(me,ze,N.__bindingPointIndex),h.set(me,ze))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,ue={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,A=null,E=null,P=null,R=null,T=null,U=null,v=new He(0,0,0),b=0,F=!1,X=null,ne=null,L=null,z=null,k=null,de.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Be,disable:Se,bindFramebuffer:Le,drawBuffers:I,useProgram:ce,setBlending:J,setMaterial:we,setFlipSided:fe,setCullFace:S,setLineWidth:y,setPolygonOffset:C,setScissorTest:V,activeTexture:q,bindTexture:K,unbindTexture:ae,compressedTexImage2D:re,compressedTexImage3D:_e,texImage2D:Te,texImage3D:xe,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Oe,texStorage3D:Ce,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:te,compressedTexSubImage3D:qe,scissor:Pe,viewport:be,reset:le}}function k_(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):Eo("canvas")}function _(S,y,C,V){let q=1;if((S.width>V||S.height>V)&&(q=V/Math.max(S.width,S.height)),q<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let K=y?bc:Math.floor,ae=K(q*S.width),re=K(q*S.height);u===void 0&&(u=g(ae,re));let _e=C?g(ae,re):u;return _e.width=ae,_e.height=re,_e.getContext("2d").drawImage(S,0,0,ae,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ae+"x"+re+")."),_e}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return zh(S.width)&&zh(S.height)}function p(S){return a?!1:S.wrapS!==bn||S.wrapT!==bn||S.minFilter!==Qt&&S.minFilter!==cn}function x(S,y){return S.generateMipmaps&&y&&S.minFilter!==Qt&&S.minFilter!==cn}function A(S){n.generateMipmap(S)}function E(S,y,C,V,q=!1){if(a===!1)return y;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=y;if(y===n.RED&&(C===n.FLOAT&&(K=n.R32F),C===n.HALF_FLOAT&&(K=n.R16F),C===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(K=n.R8UI),C===n.UNSIGNED_SHORT&&(K=n.R16UI),C===n.UNSIGNED_INT&&(K=n.R32UI),C===n.BYTE&&(K=n.R8I),C===n.SHORT&&(K=n.R16I),C===n.INT&&(K=n.R32I)),y===n.RG&&(C===n.FLOAT&&(K=n.RG32F),C===n.HALF_FLOAT&&(K=n.RG16F),C===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RGBA){let ae=q?vo:et.getTransfer(V);C===n.FLOAT&&(K=n.RGBA32F),C===n.HALF_FLOAT&&(K=n.RGBA16F),C===n.UNSIGNED_BYTE&&(K=ae===at?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function P(S,y,C){return x(S,C)===!0||S.isFramebufferTexture&&S.minFilter!==Qt&&S.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function R(S){return S===Qt||S===ah||S===Da?n.NEAREST:n.LINEAR}function T(S){let y=S.target;y.removeEventListener("dispose",T),v(y),y.isVideoTexture&&h.delete(y)}function U(S){let y=S.target;y.removeEventListener("dispose",U),F(y)}function v(S){let y=i.get(S);if(y.__webglInit===void 0)return;let C=S.source,V=d.get(C);if(V){let q=V[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(S),Object.keys(V).length===0&&d.delete(C)}i.remove(S)}function b(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let C=S.source,V=d.get(C);delete V[y.__cacheKey],o.memory.textures--}function F(S){let y=S.texture,C=i.get(S),V=i.get(y);if(V.__webglTexture!==void 0&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(C.__webglFramebuffer[q]))for(let K=0;K<C.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(C.__webglFramebuffer[q][K]);else n.deleteFramebuffer(C.__webglFramebuffer[q]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[q])}else{if(Array.isArray(C.__webglFramebuffer))for(let q=0;q<C.__webglFramebuffer.length;q++)n.deleteFramebuffer(C.__webglFramebuffer[q]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let q=0;q<C.__webglColorRenderbuffer.length;q++)C.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[q]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let q=0,K=y.length;q<K;q++){let ae=i.get(y[q]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(y[q])}i.remove(y),i.remove(S)}let X=0;function ne(){X=0}function L(){let S=X;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),X+=1,S}function z(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function k(S,y){let C=i.get(S);if(S.isVideoTexture&&we(S),S.isRenderTargetTexture===!1&&S.version>0&&C.__version!==S.version){let V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(C,S,y);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+y)}function $(S,y){let C=i.get(S);if(S.version>0&&C.__version!==S.version){de(C,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+y)}function Q(S,y){let C=i.get(S);if(S.version>0&&C.__version!==S.version){de(C,S,y);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+y)}function Y(S,y){let C=i.get(S);if(S.version>0&&C.__version!==S.version){Me(C,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+y)}let ie={[rr]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},ee={[Qt]:n.NEAREST,[ah]:n.NEAREST_MIPMAP_NEAREST,[Da]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Lf]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},ue={[Xf]:n.NEVER,[Kf]:n.ALWAYS,[qf]:n.LESS,[qu]:n.LEQUAL,[Yf]:n.EQUAL,[Zf]:n.GEQUAL,[Qf]:n.GREATER,[Jf]:n.NOTEQUAL};function W(S,y,C){if(C?(n.texParameteri(S,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ie[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ee[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ee[y.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==bn||y.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,R(y.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Qt&&y.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let V=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Qt||y.minFilter!==Da&&y.minFilter!==or||y.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(S,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function j(S,y){let C=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",T));let V=y.source,q=d.get(V);q===void 0&&(q={},d.set(V,q));let K=z(y);if(K!==S.__cacheKey){q[K]===void 0&&(q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),q[K].usedTimes++;let ae=q[S.__cacheKey];ae!==void 0&&(q[S.__cacheKey].usedTimes--,ae.usedTimes===0&&b(y)),S.__cacheKey=K,S.__webglTexture=q[K].texture}return C}function de(S,y,C){let V=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=n.TEXTURE_3D);let q=j(S,y),K=y.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+C);let ae=i.get(K);if(K.version!==ae.__version||q===!0){t.activeTexture(n.TEXTURE0+C);let re=et.getPrimaries(et.workingColorSpace),_e=y.colorSpace===ln?null:et.getPrimaries(y.colorSpace),pe=y.colorSpace===ln||re===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ee=p(y)&&m(y.image)===!1,te=_(y.image,Ee,!1,s.maxTextureSize);te=fe(y,te);let qe=m(te)||a,Oe=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),Te=E(y.internalFormat,Oe,Ce,y.colorSpace,y.isVideoTexture);W(V,y,qe);let xe,Pe=y.mipmaps,be=a&&y.isVideoTexture!==!0&&Te!==Vu,$e=ae.__version===void 0||q===!0,Ye=P(y,te,qe);if(y.isDepthTexture)Te=n.DEPTH_COMPONENT,a?y.type===ui?Te=n.DEPTH_COMPONENT32F:y.type===hi?Te=n.DEPTH_COMPONENT24:y.type===Li?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:y.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ni&&Te===n.DEPTH_COMPONENT&&y.type!==ll&&y.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=hi,Ce=r.convert(y.type)),y.format===xs&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,y.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Li,Ce=r.convert(y.type))),$e&&(be?t.texStorage2D(n.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,Oe,Ce,null));else if(y.isDataTexture)if(Pe.length>0&&qe){be&&$e&&t.texStorage2D(n.TEXTURE_2D,Ye,Te,Pe[0].width,Pe[0].height);for(let le=0,N=Pe.length;le<N;le++)xe=Pe[le],be?t.texSubImage2D(n.TEXTURE_2D,le,0,0,xe.width,xe.height,Oe,Ce,xe.data):t.texImage2D(n.TEXTURE_2D,le,Te,xe.width,xe.height,0,Oe,Ce,xe.data);y.generateMipmaps=!1}else be?($e&&t.texStorage2D(n.TEXTURE_2D,Ye,Te,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Oe,Ce,te.data)):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,Oe,Ce,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){be&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Te,Pe[0].width,Pe[0].height,te.depth);for(let le=0,N=Pe.length;le<N;le++)xe=Pe[le],y.format!==Sn?Oe!==null?be?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,te.depth,Oe,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Te,xe.width,xe.height,te.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,te.depth,Oe,Ce,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Te,xe.width,xe.height,te.depth,0,Oe,Ce,xe.data)}else{be&&$e&&t.texStorage2D(n.TEXTURE_2D,Ye,Te,Pe[0].width,Pe[0].height);for(let le=0,N=Pe.length;le<N;le++)xe=Pe[le],y.format!==Sn?Oe!==null?be?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,xe.width,xe.height,Oe,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Te,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(n.TEXTURE_2D,le,0,0,xe.width,xe.height,Oe,Ce,xe.data):t.texImage2D(n.TEXTURE_2D,le,Te,xe.width,xe.height,0,Oe,Ce,xe.data)}else if(y.isDataArrayTexture)be?($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Te,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Oe,Ce,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,Oe,Ce,te.data);else if(y.isData3DTexture)be?($e&&t.texStorage3D(n.TEXTURE_3D,Ye,Te,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Oe,Ce,te.data)):t.texImage3D(n.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,Oe,Ce,te.data);else if(y.isFramebufferTexture){if($e)if(be)t.texStorage2D(n.TEXTURE_2D,Ye,Te,te.width,te.height);else{let le=te.width,N=te.height;for(let me=0;me<Ye;me++)t.texImage2D(n.TEXTURE_2D,me,Te,le,N,0,Oe,Ce,null),le>>=1,N>>=1}}else if(Pe.length>0&&qe){be&&$e&&t.texStorage2D(n.TEXTURE_2D,Ye,Te,Pe[0].width,Pe[0].height);for(let le=0,N=Pe.length;le<N;le++)xe=Pe[le],be?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Oe,Ce,xe):t.texImage2D(n.TEXTURE_2D,le,Te,Oe,Ce,xe);y.generateMipmaps=!1}else be?($e&&t.texStorage2D(n.TEXTURE_2D,Ye,Te,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ce,te)):t.texImage2D(n.TEXTURE_2D,0,Te,Oe,Ce,te);x(y,qe)&&A(V),ae.__version=K.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Me(S,y,C){if(y.image.length!==6)return;let V=j(S,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+C);let K=i.get(q);if(q.version!==K.__version||V===!0){t.activeTexture(n.TEXTURE0+C);let ae=et.getPrimaries(et.workingColorSpace),re=y.colorSpace===ln?null:et.getPrimaries(y.colorSpace),_e=y.colorSpace===ln||ae===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ee=y.image[0]&&y.image[0].isDataTexture,te=[];for(let le=0;le<6;le++)!pe&&!Ee?te[le]=_(y.image[le],!1,!0,s.maxCubemapSize):te[le]=Ee?y.image[le].image:y.image[le],te[le]=fe(y,te[le]);let qe=te[0],Oe=m(qe)||a,Ce=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),xe=E(y.internalFormat,Ce,Te,y.colorSpace),Pe=a&&y.isVideoTexture!==!0,be=K.__version===void 0||V===!0,$e=P(y,qe,Oe);W(n.TEXTURE_CUBE_MAP,y,Oe);let Ye;if(pe){Pe&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,xe,qe.width,qe.height);for(let le=0;le<6;le++){Ye=te[le].mipmaps;for(let N=0;N<Ye.length;N++){let me=Ye[N];y.format!==Sn?Ce!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,0,0,me.width,me.height,Ce,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,0,0,me.width,me.height,Ce,Te,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N,xe,me.width,me.height,0,Ce,Te,me.data)}}}else{Ye=y.mipmaps,Pe&&be&&(Ye.length>0&&$e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,xe,te[0].width,te[0].height));for(let le=0;le<6;le++)if(Ee){Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,te[le].width,te[le].height,Ce,Te,te[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,te[le].width,te[le].height,0,Ce,Te,te[le].data);for(let N=0;N<Ye.length;N++){let ge=Ye[N].image[le].image;Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,0,0,ge.width,ge.height,Ce,Te,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,xe,ge.width,ge.height,0,Ce,Te,ge.data)}}else{Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce,Te,te[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,Ce,Te,te[le]);for(let N=0;N<Ye.length;N++){let me=Ye[N];Pe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,0,0,Ce,Te,me.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,N+1,xe,Ce,Te,me.image[le])}}}x(y,Oe)&&A(n.TEXTURE_CUBE_MAP),K.__version=q.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Ae(S,y,C,V,q,K){let ae=r.convert(C.format,C.colorSpace),re=r.convert(C.type),_e=E(C.internalFormat,ae,re,C.colorSpace);if(!i.get(y).__hasExternalTextures){let Ee=Math.max(1,y.width>>K),te=Math.max(1,y.height>>K);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,K,_e,Ee,te,y.depth,0,ae,re,null):t.texImage2D(q,K,_e,Ee,te,0,ae,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),J(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,q,i.get(C).__webglTexture,0,se(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,q,i.get(C).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(S,y,C){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let V=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(C||J(y)){let q=y.depthTexture;q&&q.isDepthTexture&&(q.type===ui?V=n.DEPTH_COMPONENT32F:q.type===hi&&(V=n.DEPTH_COMPONENT24));let K=se(y);J(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,V,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,K,V,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let V=se(y);C&&J(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,y.width,y.height):J(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let V=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let q=0;q<V.length;q++){let K=V[q],ae=r.convert(K.format,K.colorSpace),re=r.convert(K.type),_e=E(K.internalFormat,ae,re,K.colorSpace),pe=se(y);C&&J(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,_e,y.width,y.height):J(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,_e,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_e,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let V=i.get(y.depthTexture).__webglTexture,q=se(y);if(y.depthTexture.format===Ni)J(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(y.depthTexture.format===xs)J(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Se(S){let y=i.get(S),C=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Be(y.__webglFramebuffer,S)}else if(C){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]=n.createRenderbuffer(),Ne(y.__webglDepthbuffer[V],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ne(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(S,y,C){let V=i.get(S);y!==void 0&&Ae(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Se(S)}function I(S){let y=S.texture,C=i.get(S),V=i.get(y);S.addEventListener("dispose",U),S.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=y.version,o.memory.textures++);let q=S.isWebGLCubeRenderTarget===!0,K=S.isWebGLMultipleRenderTargets===!0,ae=m(S)||a;if(q){C.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0){C.__webglFramebuffer[re]=[];for(let _e=0;_e<y.mipmaps.length;_e++)C.__webglFramebuffer[re][_e]=n.createFramebuffer()}else C.__webglFramebuffer[re]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){C.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)C.__webglFramebuffer[re]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(K)if(s.drawBuffers){let re=S.texture;for(let _e=0,pe=re.length;_e<pe;_e++){let Ee=i.get(re[_e]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&J(S)===!1){let re=K?y:[y];C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let _e=0;_e<re.length;_e++){let pe=re[_e];C.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[_e]);let Ee=r.convert(pe.format,pe.colorSpace),te=r.convert(pe.type),qe=E(pe.internalFormat,Ee,te,pe.colorSpace,S.isXRRenderTarget===!0),Oe=se(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,qe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,C.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(C.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),W(n.TEXTURE_CUBE_MAP,y,ae);for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ae(C.__webglFramebuffer[re][_e],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e);else Ae(C.__webglFramebuffer[re],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);x(y,ae)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){let re=S.texture;for(let _e=0,pe=re.length;_e<pe;_e++){let Ee=re[_e],te=i.get(Ee);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),W(n.TEXTURE_2D,Ee,ae),Ae(C.__webglFramebuffer,S,Ee,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),x(Ee,ae)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?re=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,V.__webglTexture),W(re,y,ae),a&&y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ae(C.__webglFramebuffer[_e],S,y,n.COLOR_ATTACHMENT0,re,_e);else Ae(C.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,re,0);x(y,ae)&&A(re),t.unbindTexture()}S.depthBuffer&&Se(S)}function ce(S){let y=m(S)||a,C=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let V=0,q=C.length;V<q;V++){let K=C[V];if(x(K,y)){let ae=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,re=i.get(K).__webglTexture;t.bindTexture(ae,re),A(ae),t.unbindTexture()}}}function Z(S){if(a&&S.samples>0&&J(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],C=S.width,V=S.height,q=n.COLOR_BUFFER_BIT,K=[],ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(S),_e=S.isWebGLMultipleRenderTargets===!0;if(_e)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){K.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&K.push(ae);let Ee=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ee===!1&&(S.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[pe]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ae])),_e){let te=i.get(y[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,C,V,0,0,C,V,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let Ee=i.get(y[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function se(S){return Math.min(s.maxSamples,S.samples)}function J(S){let y=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(S){let y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function fe(S,y){let C=S.colorSpace,V=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===vc||C!==Kn&&C!==ln&&(et.getTransfer(C)===at?a===!1?e.has("EXT_sRGB")===!0&&V===Sn?(S.format=vc,S.minFilter=cn,S.generateMipmaps=!1):y=wo.sRGBToLinear(y):(V!==Sn||q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),y}this.allocateTextureUnit=L,this.resetTextureUnits=ne,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=J}function H_(n,e,t){let i=t.isWebGL2;function s(r,o=ln){let a,c=et.getTransfer(o);if(r===pi)return n.UNSIGNED_BYTE;if(r===zu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Nf)return n.BYTE;if(r===Uf)return n.SHORT;if(r===ll)return n.UNSIGNED_SHORT;if(r===Ou)return n.INT;if(r===hi)return n.UNSIGNED_INT;if(r===ui)return n.FLOAT;if(r===ar)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ff)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===Of)return n.LUMINANCE;if(r===zf)return n.LUMINANCE_ALPHA;if(r===Ni)return n.DEPTH_COMPONENT;if(r===xs)return n.DEPTH_STENCIL;if(r===vc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Bf)return n.RED;if(r===ku)return n.RED_INTEGER;if(r===kf)return n.RG;if(r===Hu)return n.RG_INTEGER;if(r===Gu)return n.RGBA_INTEGER;if(r===La||r===Na||r===Ua||r===Fa)if(c===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ch||r===lh||r===hh||r===uh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ch)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dh||r===fh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===dh)return c===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ph||r===mh||r===gh||r===_h||r===Ah||r===xh||r===yh||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ph)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oa||r===Rh||r===Ch)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Oa)return c===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hf||r===Ph||r===Ih||r===Dh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Fc=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},G_={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Oc=class extends gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,x=[],A=[],E=new oe,P=null,R=new Dt;R.layers.enable(1),R.viewport=new Pt;let T=new Dt;T.layers.enable(2),T.viewport=new Pt;let U=[R,T],v=new Fc;v.layers.enable(1),v.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=x[W];return j===void 0&&(j=new tr,x[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=x[W];return j===void 0&&(j=new tr,x[W]=j),j.getGripSpace()},this.getHand=function(W){let j=x[W];return j===void 0&&(j=new tr,x[W]=j),j.getHandSpace()};function X(W){let j=A.indexOf(W.inputSource);if(j===-1)return;let de=x[j];de!==void 0&&(de.update(W.inputSource,W.frame,l||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function ne(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",L);for(let W=0;W<x.length;W++){let j=A[W];j!==null&&(A[W]=null,x[W].disconnect(j))}b=null,F=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new $n(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,de=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?xs:Ni,de=_.stencil?Li:hi);let Ae={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new $n(d.textureWidth,d.textureHeight,{format:Sn,type:pi,depthTexture:new Fo(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ne=e.properties.get(p);Ne.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(W){for(let j=0;j<W.removed.length;j++){let de=W.removed[j],Me=A.indexOf(de);Me>=0&&(A[Me]=null,x[Me].disconnect(de))}for(let j=0;j<W.added.length;j++){let de=W.added[j],Me=A.indexOf(de);if(Me===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=A.length){A.push(de),Me=Ne;break}else if(A[Ne]===null){A[Ne]=de,Me=Ne;break}if(Me===-1)break}let Ae=x[Me];Ae&&Ae.connect(de)}}let z=new D,k=new D;function $(W,j,de){z.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(de.matrixWorld);let Me=z.distanceTo(k),Ae=j.projectionMatrix.elements,Ne=de.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),Se=Ae[14]/(Ae[10]+1),Le=(Ae[9]+1)/Ae[5],I=(Ae[9]-1)/Ae[5],ce=(Ae[8]-1)/Ae[0],Z=(Ne[8]+1)/Ne[0],se=Be*ce,J=Be*Z,we=Me/(-ce+Z),fe=we*-ce;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(we),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=Be+we,y=Se+we,C=se-fe,V=J+(Me-fe),q=Le*Se/y*S,K=I*Se/y*S;W.projectionMatrix.makePerspective(C,V,q,K,S,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Q(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.near=T.near=R.near=W.near,v.far=T.far=R.far=W.far,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far);let j=W.parent,de=v.cameras;Q(v,j);for(let Me=0;Me<de.length;Me++)Q(de[Me],j);de.length===2?$(v,R,T):v.projectionMatrix.copy(R.projectionMatrix),Y(W,v,j)};function Y(W,j,de){de===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Mc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let ie=null;function ee(W,j){if(h=j.getViewerPose(l||o),g=j,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Me=!1;de.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let Ae=0;Ae<de.length;Ae++){let Ne=de[Ae],Be=null;if(f!==null)Be=f.getViewport(Ne);else{let Le=u.getViewSubImage(d,Ne);Be=Le.viewport,Ae===0&&(e.setRenderTargetTextures(p,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let Se=U[Ae];Se===void 0&&(Se=new Dt,Se.layers.enable(Ae),Se.viewport=new Pt,U[Ae]=Se),Se.matrix.fromArray(Ne.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ne.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Be.x,Be.y,Be.width,Be.height),Ae===0&&(v.matrix.copy(Se.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Se)}}for(let de=0;de<x.length;de++){let Me=A[de],Ae=x[de];Me!==null&&Ae!==void 0&&Ae.update(Me,j,l||o)}ie&&ie(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ue=new Zu;ue.setAnimationLoop(ee),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}};function V_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ju(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,A,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W_(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,A){let E=A.program;i.uniformBlockBinding(x,E)}function l(x,A){let E=s[x.id];E===void 0&&(g(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",m));let P=A.program;i.updateUBOMapping(x,P);let R=e.render.frame;r[x.id]!==R&&(d(x),r[x.id]=R)}function h(x){let A=u();x.__bindingPointIndex=A;let E=n.createBuffer(),P=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let A=s[x.id],E=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,T=E.length;R<T;R++){let U=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,b=U.length;v<b;v++){let F=U[v];if(f(F,R,v,P)===!0){let X=F.__offset,ne=Array.isArray(F.value)?F.value:[F.value],L=0;for(let z=0;z<ne.length;z++){let k=ne[z],$=_(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,X+L,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,A,E,P){let R=x.value,T=A+"_"+E;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{let U=P[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return P[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(x){let A=x.uniforms,E=0,P=16;for(let T=0,U=A.length;T<U;T++){let v=Array.isArray(A[T])?A[T]:[A[T]];for(let b=0,F=v.length;b<F;b++){let X=v[b],ne=Array.isArray(X.value)?X.value:[X.value];for(let L=0,z=ne.length;L<z;L++){let k=ne[L],$=_(k),Q=E%P;Q!==0&&P-Q<$.boundary&&(E+=P-Q),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=$.storage}}}let R=E%P;return R>0&&(E+=P-R),x.__size=E,x.__cache={},this}function _(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),A}function m(x){let A=x.target;A.removeEventListener("dispose",m);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Oi=class{constructor(e={}){let{canvas:t=jf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;let A=this,E=!1,P=0,R=0,T=null,U=-1,v=null,b=new Pt,F=new Pt,X=null,ne=new He(0),L=0,z=t.width,k=t.height,$=1,Q=null,Y=null,ie=new Pt(0,0,z,k),ee=new Pt(0,0,z,k),ue=!1,W=new hr,j=!1,de=!1,Me=null,Ae=new yt,Ne=new oe,Be=new D,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?$:1}let I=i;function ce(w,O){for(let H=0;H<w.length;H++){let G=w[H],B=t.getContext(G,O);if(B!==null)return B}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){let O=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&O.shift(),I=ce(O,w),I===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,se,J,we,fe,S,y,C,V,q,K,ae,re,_e,pe,Ee,te,qe,Oe,Ce,Te,xe,Pe,be;function $e(){Z=new l0(I),se=new i0(I,Z,e),Z.init(se),xe=new H_(I,Z,se),J=new B_(I,Z,se),we=new d0(I),fe=new T_,S=new k_(I,Z,J,fe,se,xe,we),y=new r0(A),C=new c0(A),V=new yp(I,se),Pe=new t0(I,Z,V,se),q=new h0(I,V,we,Pe),K=new g0(I,q,V,we),Oe=new m0(I,se,S),Ee=new s0(fe),ae=new w_(A,y,C,Z,se,Pe,Ee),re=new V_(A,fe),_e=new C_,pe=new U_(Z,se),qe=new e0(A,y,C,J,K,d,c),te=new z_(A,K,se),be=new W_(I,we,se,J),Ce=new n0(I,Z,we,se),Te=new u0(I,Z,we,se),we.programs=ae.programs,A.capabilities=se,A.extensions=Z,A.properties=fe,A.renderLists=_e,A.shadowMap=te,A.state=J,A.info=we}$e();let Ye=new Oc(A,I);this.xr=Ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(z,k,!1))},this.getSize=function(w){return w.set(z,k)},this.setSize=function(w,O,H=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,k=O,t.width=Math.floor(w*$),t.height=Math.floor(O*$),H===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(z*$,k*$).floor()},this.setDrawingBufferSize=function(w,O,H){z=w,k=O,$=H,t.width=Math.floor(w*H),t.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,O,H,G){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,O,H,G),J.viewport(b.copy(ie).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,O,H,G){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,O,H,G),J.scissor(F.copy(ee).multiplyScalar($).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){J.setScissorTest(ue=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,O=!0,H=!0){let G=0;if(w){let B=!1;if(T!==null){let ye=T.texture.format;B=ye===Gu||ye===Hu||ye===ku}if(B){let ye=T.texture.type,Re=ye===pi||ye===hi||ye===ll||ye===Li||ye===zu||ye===Bu,Fe=qe.getClearColor(),ke=qe.getClearAlpha(),Xe=Fe.r,Ge=Fe.g,Ve=Fe.b;Re?(f[0]=Xe,f[1]=Ge,f[2]=Ve,f[3]=ke,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Xe,g[1]=Ge,g[2]=Ve,g[3]=ke,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}O&&(G|=I.DEPTH_BUFFER_BIT),H&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),pe.dispose(),fe.dispose(),y.dispose(),C.dispose(),K.dispose(),Pe.dispose(),be.dispose(),ae.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Wt),Ye.removeEventListener("sessionend",ot),Me&&(Me.dispose(),Me=null),Xt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=we.autoReset,O=te.enabled,H=te.autoUpdate,G=te.needsUpdate,B=te.type;$e(),we.autoReset=w,te.enabled=O,te.autoUpdate=H,te.needsUpdate=G,te.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ge(w){let O=w.target;O.removeEventListener("dispose",ge),ze(O)}function ze(w){Ue(w),fe.remove(w)}function Ue(w){let O=fe.get(w).programs;O!==void 0&&(O.forEach(function(H){ae.releaseProgram(H)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,G,B,ye){O===null&&(O=Se);let Re=B.isMesh&&B.matrixWorld.determinant()<0,Fe=qd(w,O,H,G,B);J.setMaterial(G,Re);let ke=H.index,Xe=1;if(G.wireframe===!0){if(ke=q.getWireframeAttribute(H),ke===void 0)return;Xe=2}let Ge=H.drawRange,Ve=H.attributes.position,_t=Ge.start*Xe,tn=(Ge.start+Ge.count)*Xe;ye!==null&&(_t=Math.max(_t,ye.start*Xe),tn=Math.min(tn,(ye.start+ye.count)*Xe)),ke!==null?(_t=Math.max(_t,0),tn=Math.min(tn,ke.count)):Ve!=null&&(_t=Math.max(_t,0),tn=Math.min(tn,Ve.count));let Rt=tn-_t;if(Rt<0||Rt===1/0)return;Pe.setup(B,G,Fe,H,ke);let kn,dt=Ce;if(ke!==null&&(kn=V.get(ke),dt=Te,dt.setIndex(kn)),B.isMesh)G.wireframe===!0?(J.setLineWidth(G.wireframeLinewidth*Le()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(B.isLine){let Qe=G.linewidth;Qe===void 0&&(Qe=1),J.setLineWidth(Qe*Le()),B.isLineSegments?dt.setMode(I.LINES):B.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else B.isPoints?dt.setMode(I.POINTS):B.isSprite&&dt.setMode(I.TRIANGLES);if(B.isBatchedMesh)dt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)dt.renderInstances(_t,Rt,B.count);else if(H.isInstancedBufferGeometry){let Qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ma=Math.min(H.instanceCount,Qe);dt.renderInstances(_t,Rt,Ma)}else dt.render(_t,Rt)};function st(w,O,H){w.transparent===!0&&w.side===Mn&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,Nr(w,O,H),w.side=mi,w.needsUpdate=!0,Nr(w,O,H),w.side=Mn):Nr(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),m=pe.get(H),m.init(),x.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(A._useLegacyLights);let G=new Set;return w.traverse(function(B){let ye=B.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){let Fe=ye[Re];st(Fe,H,B),G.add(Fe)}else st(ye,H,B),G.add(ye)}),x.pop(),m=null,G},this.compileAsync=function(w,O,H=null){let G=this.compile(w,O,H);return new Promise(B=>{function ye(){if(G.forEach(function(Re){fe.get(Re).currentProgram.isReady()&&G.delete(Re)}),G.size===0){B(w);return}setTimeout(ye,10)}Z.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let rt=null;function Tt(w){rt&&rt(w)}function Wt(){Xt.stop()}function ot(){Xt.start()}let Xt=new Zu;Xt.setAnimationLoop(Tt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(w){rt=w,Ye.setAnimationLoop(w),w===null?Xt.stop():Xt.start()},Ye.addEventListener("sessionstart",Wt),Ye.addEventListener("sessionend",ot),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(O),O=Ye.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,O,T),m=pe.get(w,x.length),m.init(),x.push(m),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Ae),de=this.localClippingEnabled,j=Ee.init(this.clippingPlanes,de),_=_e.get(w,p.length),_.init(),p.push(_),In(w,O,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(Q,Y),this.info.render.frame++,j===!0&&Ee.beginShadows();let H=m.state.shadowsArray;if(te.render(H,w,O),j===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(_,w),m.setupLights(A._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let B=0,ye=G.length;B<ye;B++){let Re=G[B];Ll(_,w,Re,Re.viewport)}}else Ll(_,w,O);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(A,w,O),Pe.resetDefaultState(),U=-1,v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function In(w,O,H,G){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){G&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);let Re=K.update(w),Fe=w.material;Fe.visible&&_.push(w,Re,Fe,H,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let Re=K.update(w),Fe=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Be.copy(Re.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Fe)){let ke=Re.groups;for(let Xe=0,Ge=ke.length;Xe<Ge;Xe++){let Ve=ke[Xe],_t=Fe[Ve.materialIndex];_t&&_t.visible&&_.push(w,Re,_t,H,Be.z,Ve)}}else Fe.visible&&_.push(w,Re,Fe,H,Be.z,null)}}let ye=w.children;for(let Re=0,Fe=ye.length;Re<Fe;Re++)In(ye[Re],O,H,G)}function Ll(w,O,H,G){let B=w.opaque,ye=w.transmissive,Re=w.transparent;m.setupLightsView(H),j===!0&&Ee.setGlobalState(A.clippingPlanes,H),ye.length>0&&Xd(B,ye,O,H),G&&J.viewport(b.copy(G)),B.length>0&&Lr(B,O,H),ye.length>0&&Lr(ye,O,H),Re.length>0&&Lr(Re,O,H),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Xd(w,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ye=se.isWebGL2;Me===null&&(Me=new $n(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?ar:pi,minFilter:or,samples:ye?4:0})),A.getDrawingBufferSize(Ne),ye?Me.setSize(Ne.x,Ne.y):Me.setSize(bc(Ne.x),bc(Ne.y));let Re=A.getRenderTarget();A.setRenderTarget(Me),A.getClearColor(ne),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear();let Fe=A.toneMapping;A.toneMapping=fi,Lr(w,H,G),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let ke=!1;for(let Xe=0,Ge=O.length;Xe<Ge;Xe++){let Ve=O[Xe],_t=Ve.object,tn=Ve.geometry,Rt=Ve.material,kn=Ve.group;if(Rt.side===Mn&&_t.layers.test(G.layers)){let dt=Rt.side;Rt.side=jt,Rt.needsUpdate=!0,Nl(_t,H,G,tn,Rt,kn),Rt.side=dt,Rt.needsUpdate=!0,ke=!0}}ke===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),A.setRenderTarget(Re),A.setClearColor(ne,L),A.toneMapping=Fe}function Lr(w,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ye=w.length;B<ye;B++){let Re=w[B],Fe=Re.object,ke=Re.geometry,Xe=G===null?Re.material:G,Ge=Re.group;Fe.layers.test(H.layers)&&Nl(Fe,O,H,ke,Xe,Ge)}}function Nl(w,O,H,G,B,ye){w.onBeforeRender(A,O,H,G,B,ye),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(A,O,H,G,w,ye),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=jt,B.needsUpdate=!0,A.renderBufferDirect(H,O,G,B,w,ye),B.side=mi,B.needsUpdate=!0,A.renderBufferDirect(H,O,G,B,w,ye),B.side=Mn):A.renderBufferDirect(H,O,G,B,w,ye),w.onAfterRender(A,O,H,G,B,ye)}function Nr(w,O,H){O.isScene!==!0&&(O=Se);let G=fe.get(w),B=m.state.lights,ye=m.state.shadowsArray,Re=B.state.version,Fe=ae.getParameters(w,B.state,ye,O,H),ke=ae.getProgramCacheKey(Fe),Xe=G.programs;G.environment=w.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(w.isMeshStandardMaterial?C:y).get(w.envMap||G.environment),Xe===void 0&&(w.addEventListener("dispose",ge),Xe=new Map,G.programs=Xe);let Ge=Xe.get(ke);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===Re)return Fl(w,Fe),Ge}else Fe.uniforms=ae.getUniforms(w),w.onBuild(H,Fe,A),w.onBeforeCompile(Fe,A),Ge=ae.acquireProgram(Fe,ke),Xe.set(ke,Ge),G.uniforms=Fe.uniforms;let Ve=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),Fl(w,Fe),G.needsLights=Qd(w),G.lightsStateVersion=Re,G.needsLights&&(Ve.ambientLightColor.value=B.state.ambient,Ve.lightProbe.value=B.state.probe,Ve.directionalLights.value=B.state.directional,Ve.directionalLightShadows.value=B.state.directionalShadow,Ve.spotLights.value=B.state.spot,Ve.spotLightShadows.value=B.state.spotShadow,Ve.rectAreaLights.value=B.state.rectArea,Ve.ltc_1.value=B.state.rectAreaLTC1,Ve.ltc_2.value=B.state.rectAreaLTC2,Ve.pointLights.value=B.state.point,Ve.pointLightShadows.value=B.state.pointShadow,Ve.hemisphereLights.value=B.state.hemi,Ve.directionalShadowMap.value=B.state.directionalShadowMap,Ve.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ve.spotShadowMap.value=B.state.spotShadowMap,Ve.spotLightMatrix.value=B.state.spotLightMatrix,Ve.spotLightMap.value=B.state.spotLightMap,Ve.pointShadowMap.value=B.state.pointShadowMap,Ve.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ge,G.uniformsList=null,Ge}function Ul(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=gs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Fl(w,O){let H=fe.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function qd(w,O,H,G,B){O.isScene!==!0&&(O=Se),S.resetTextureUnits();let ye=O.fog,Re=G.isMeshStandardMaterial?O.environment:null,Fe=T===null?A.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kn,ke=(G.isMeshStandardMaterial?C:y).get(G.envMap||Re),Xe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ve=!!H.morphAttributes.position,_t=!!H.morphAttributes.normal,tn=!!H.morphAttributes.color,Rt=fi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let kn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=kn!==void 0?kn.length:0,Qe=fe.get(G),Ma=m.state.lights;if(j===!0&&(de===!0||w!==v)){let on=w===v&&G.id===U;Ee.setState(G,w,on)}let pt=!1;G.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ma.state.version||Qe.outputColorSpace!==Fe||B.isBatchedMesh&&Qe.batching===!1||!B.isBatchedMesh&&Qe.batching===!0||B.isInstancedMesh&&Qe.instancing===!1||!B.isInstancedMesh&&Qe.instancing===!0||B.isSkinnedMesh&&Qe.skinning===!1||!B.isSkinnedMesh&&Qe.skinning===!0||B.isInstancedMesh&&Qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Qe.instancingColor===!1&&B.instanceColor!==null||Qe.envMap!==ke||G.fog===!0&&Qe.fog!==ye||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ee.numPlanes||Qe.numIntersection!==Ee.numIntersection)||Qe.vertexAlphas!==Xe||Qe.vertexTangents!==Ge||Qe.morphTargets!==Ve||Qe.morphNormals!==_t||Qe.morphColors!==tn||Qe.toneMapping!==Rt||se.isWebGL2===!0&&Qe.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Qe.__version=G.version);let Mi=Qe.currentProgram;pt===!0&&(Mi=Nr(G,O,B));let Ol=!1,Vs=!1,ba=!1,Ft=Mi.getUniforms(),bi=Qe.uniforms;if(J.useProgram(Mi.program)&&(Ol=!0,Vs=!0,ba=!0),G.id!==U&&(U=G.id,Vs=!0),Ol||v!==w){Ft.setValue(I,"projectionMatrix",w.projectionMatrix),Ft.setValue(I,"viewMatrix",w.matrixWorldInverse);let on=Ft.map.cameraPosition;on!==void 0&&on.setValue(I,Be.setFromMatrixPosition(w.matrixWorld)),se.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Vs=!0,ba=!0)}if(B.isSkinnedMesh){Ft.setOptional(I,B,"bindMatrix"),Ft.setOptional(I,B,"bindMatrixInverse");let on=B.skeleton;on&&(se.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ft.setValue(I,"boneTexture",on.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ft.setOptional(I,B,"batchingTexture"),Ft.setValue(I,"batchingTexture",B._matricesTexture,S));let Sa=H.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0&&se.isWebGL2===!0)&&Oe.update(B,H,Mi),(Vs||Qe.receiveShadow!==B.receiveShadow)&&(Qe.receiveShadow=B.receiveShadow,Ft.setValue(I,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(bi.envMap.value=ke,bi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Vs&&(Ft.setValue(I,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&Yd(bi,ba),ye&&G.fog===!0&&re.refreshFogUniforms(bi,ye),re.refreshMaterialUniforms(bi,G,$,k,Me),gs.upload(I,Ul(Qe),bi,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gs.upload(I,Ul(Qe),bi,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ft.setValue(I,"center",B.center),Ft.setValue(I,"modelViewMatrix",B.modelViewMatrix),Ft.setValue(I,"normalMatrix",B.normalMatrix),Ft.setValue(I,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let on=G.uniformsGroups;for(let Ea=0,Jd=on.length;Ea<Jd;Ea++)if(se.isWebGL2){let zl=on[Ea];be.update(zl,Mi),be.bind(zl,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function Yd(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Qd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,H){fe.get(w.texture).__webglTexture=O,fe.get(w.depthTexture).__webglTexture=H;let G=fe.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){let H=fe.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,H=0){T=w,P=O,R=H;let G=!0,B=null,ye=!1,Re=!1;if(w){let ke=fe.get(w);ke.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):ke.__webglFramebuffer===void 0?S.setupRenderTarget(w):ke.__hasExternalTextures&&S.rebindTextures(w,fe.get(w.texture).__webglTexture,fe.get(w.depthTexture).__webglTexture);let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);let Ge=fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?B=Ge[O][H]:B=Ge[O],ye=!0):se.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?B=fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ge)?B=Ge[H]:B=Ge,b.copy(w.viewport),F.copy(w.scissor),X=w.scissorTest}else b.copy(ie).multiplyScalar($).floor(),F.copy(ee).multiplyScalar($).floor(),X=ue;if(J.bindFramebuffer(I.FRAMEBUFFER,B)&&se.drawBuffers&&G&&J.drawBuffers(w,B),J.viewport(b),J.scissor(F),J.setScissorTest(X),ye){let ke=fe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,ke.__webglTexture,H)}else if(Re){let ke=fe.get(w.texture),Xe=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,H||0,Xe)}U=-1},this.readRenderTargetPixels=function(w,O,H,G,B,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){J.bindFramebuffer(I.FRAMEBUFFER,Fe);try{let ke=w.texture,Xe=ke.format,Ge=ke.type;if(Xe!==Sn&&xe.convert(Xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=Ge===ar&&(Z.has("EXT_color_buffer_half_float")||se.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ge!==pi&&xe.convert(Ge)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ui&&(se.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-G&&H>=0&&H<=w.height-B&&I.readPixels(O,H,G,B,xe.convert(Xe),xe.convert(Ge),ye)}finally{let ke=T!==null?fe.get(T).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(w,O,H=0){let G=Math.pow(2,-H),B=Math.floor(O.image.width*G),ye=Math.floor(O.image.height*G);S.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,w.x,w.y,B,ye),J.unbindTexture()},this.copyTextureToTexture=function(w,O,H,G=0){let B=O.image.width,ye=O.image.height,Re=xe.convert(H.format),Fe=xe.convert(H.type);S.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,w.x,w.y,B,ye,Re,Fe,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Re,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,w.x,w.y,Re,Fe,O.image),G===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(w,O,H,G,B=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,ke=xe.convert(G.format),Xe=xe.convert(G.type),Ge;if(G.isData3DTexture)S.setTexture3D(G,0),Ge=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ge=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let Ve=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=I.getParameter(I.UNPACK_SKIP_PIXELS),Rt=I.getParameter(I.UNPACK_SKIP_ROWS),kn=I.getParameter(I.UNPACK_SKIP_IMAGES),dt=H.isCompressedTexture?H.mipmaps[B]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(Ge,B,O.x,O.y,O.z,ye,Re,Fe,ke,Xe,dt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,B,O.x,O.y,O.z,ye,Re,Fe,ke,dt.data)):I.texSubImage3D(Ge,B,O.x,O.y,O.z,ye,Re,Fe,ke,Xe,dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kn),B===0&&G.generateMipmaps&&I.generateMipmap(Ge),J.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,J.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===hl?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===$o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Ui:Wu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ui?At:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},zc=class extends Oi{};zc.prototype.isWebGL1Renderer=!0;var Ms=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Oo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new D,dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},as,Ks=new D,cs=new D,ls=new D,hs=new oe,$s=new oe,nd=new yt,lo=new D,js=new D,ho=new D,Mu=new oe,lc=new oe,bu=new oe,zo=class extends Lt{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Oo(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new dr(i,3,0,!1)),as.setAttribute("uv",new dr(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;uo(lo.set(-.5,-.5,0),ls,o,cs,s,r),uo(js.set(.5,-.5,0),ls,o,cs,s,r),uo(ho.set(.5,.5,0),ls,o,cs,s,r),Mu.set(0,0),lc.set(1,0),bu.set(1,1);let a=e.ray.intersectTriangle(lo,js,ho,!1,Ks);if(a===null&&(uo(js.set(-.5,.5,0),ls,o,cs,s,r),lc.set(0,1),a=e.ray.intersectTriangle(lo,ho,js,!1,Ks),a===null))return;let c=e.ray.origin.distanceTo(Ks);c<e.near||c>e.far||t.push({distance:c,point:Ks.clone(),uv:Di.getInterpolation(Ks,lo,js,ho,Mu,lc,bu,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function uo(n,e,t,i,s,r){hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($s.x=r*hs.x-s*hs.y,$s.y=s*hs.x+r*hs.y):$s.copy(hs),n.copy(e),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4(nd)}var pr=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Su=new D,Eu=new D,wu=new yt,hc=new cr,fo=new ys,Bo=class extends Lt{constructor(e=new Mt,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Su.fromBufferAttribute(t,s-1),Eu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Su.distanceTo(Eu);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;wu.copy(s).invert(),hc.copy(e.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,d=new D,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let A=p,E=x-1;A<E;A+=f){let P=g.getX(A),R=g.getX(A+1);if(l.fromBufferAttribute(m,P),h.fromBufferAttribute(m,R),hc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let A=p,E=x-1;A<E;A+=f){if(l.fromBufferAttribute(m,A),h.fromBufferAttribute(m,A+1),hc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Ss=class extends hn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new oe:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new D,s=[],r=[],o=[],a=new D,c=new yt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Bt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends dn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bc=class extends mr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var po=new D,uc=new dl,dc=new dl,fc=new dl,kc=class extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(po.subVectors(s[0],s[1]).add(s[0]),l=po);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),uc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),dc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),fc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),dc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(uc.calc(c),dc.calc(c),fc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function X_(n,e){let t=1-n;return t*t*e}function q_(n,e){return 2*(1-n)*n*e}function Y_(n,e){return n*n*e}function nr(n,e,t,i){return X_(n,e)+q_(n,t)+Y_(n,i)}function Q_(n,e){let t=1-n;return t*t*t*e}function J_(n,e){let t=1-n;return 3*t*t*n*e}function Z_(n,e){return 3*(1-n)*n*n*e}function K_(n,e){return n*n*n*e}function ir(n,e,t,i,s){return Q_(n,e)+J_(n,t)+Z_(n,i)+K_(n,s)}var ko=class extends dn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hc=class extends dn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ho=class extends dn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends dn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends dn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends dn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Tu(a,c.x,l.x,h.x,u.x),Tu(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:kc,CubicBezierCurve:ko,CubicBezierCurve3:Hc,EllipseCurve:mr,LineCurve:Ho,LineCurve3:Gc,QuadraticBezierCurve:Go,QuadraticBezierCurve3:Vc,SplineCurve:Vo}),Xc=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},Wo=class extends Xc{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ho(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Go(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ko(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Vo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new mr(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Xo=class n extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=i/2,p=0;x(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function x(){let E=new D,P=new D,R=0,T=(t-e)/i;for(let U=0;U<=r;U++){let v=[],b=U/r,F=b*(t-e)+e;for(let X=0;X<=s;X++){let ne=X/s,L=ne*c+a,z=Math.sin(L),k=Math.cos(L);P.x=F*z,P.y=-b*i+m,P.z=F*k,u.push(P.x,P.y,P.z),E.set(z,T,k).normalize(),d.push(E.x,E.y,E.z),f.push(ne,1-b),v.push(g++)}_.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let b=_[v][U],F=_[v+1][U],X=_[v+1][U+1],ne=_[v][U+1];h.push(b,F,ne),h.push(F,X,ne),R+=6}l.addGroup(p,R,0),p+=R}function A(E){let P=g,R=new oe,T=new D,U=0,v=E===!0?e:t,b=E===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let F=g;for(let X=0;X<=s;X++){let L=X/s*c+a,z=Math.cos(L),k=Math.sin(L);T.x=v*k,T.y=m*b,T.z=v*z,u.push(T.x,T.y,T.z),d.push(0,b,0),R.x=z*.5+.5,R.y=k*.5*b+.5,f.push(R.x,R.y),g++}for(let X=0;X<s;X++){let ne=P+X,L=F+X;E===!0?h.push(L,L+1,ne):h.push(L+1,L,ne),U+=3}l.addGroup(p,U,E===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qc=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let A=new D,E=new D,P=new D;for(let R=0;R<t.length;R+=3)f(t[R+0],A),f(t[R+1],E),f(t[R+2],P),c(A,E,P,x)}function c(x,A,E,P){let R=P+1,T=[];for(let U=0;U<=R;U++){T[U]=[];let v=x.clone().lerp(E,U/R),b=A.clone().lerp(E,U/R),F=R-U;for(let X=0;X<=F;X++)X===0&&U===R?T[U][X]=v:T[U][X]=v.clone().lerp(b,X/F)}for(let U=0;U<R;U++)for(let v=0;v<2*(R-U)-1;v++){let b=Math.floor(v/2);v%2===0?(d(T[U][b+1]),d(T[U+1][b]),d(T[U][b])):(d(T[U][b+1]),d(T[U+1][b+1]),d(T[U+1][b]))}}function l(x){let A=new D;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(x),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function h(){let x=new D;for(let A=0;A<r.length;A+=3){x.x=r[A+0],x.y=r[A+1],x.z=r[A+2];let E=m(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;o.push(E,1-P)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let A=o[x+0],E=o[x+2],P=o[x+4],R=Math.max(A,E,P),T=Math.min(A,E,P);R>.9&&T<.1&&(A<.2&&(o[x+0]+=1),E<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,A){let E=x*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function g(){let x=new D,A=new D,E=new D,P=new D,R=new oe,T=new oe,U=new oe;for(let v=0,b=0;v<r.length;v+=9,b+=6){x.set(r[v+0],r[v+1],r[v+2]),A.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),R.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),P.copy(x).add(A).add(E).divideScalar(3);let F=m(P);_(R,b+0,x,F),_(T,b+2,A,F),_(U,b+4,E,F)}}function _(x,A,E,P){P<0&&x.x===1&&(o[A]=x.x-1),E.x===0&&E.z===0&&(o[A]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var gr=class extends Wo{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Wo().fromJSON(s))}return this}},$_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=id(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(i&&(r=iA(n,e,r,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return _r(r,o,t,a,c,f,0),o}};function id(n,e,t,i,s){let r,o;if(s===pA(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Ru(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Ru(r,n[r],n[r+1],o);return o&&ea(o,o.next)&&(xr(o),o=o.next),o}function zi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ea(t,t.next)||ft(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function _r(n,e,t,i,s,r,o){if(!n)return;!o&&r&&cA(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?eA(n,i,s,r):j_(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),xr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=tA(zi(n),e,t),_r(n,e,t,i,s,r,2)):o===2&&nA(n,e,t,i,s,r):_r(zi(n),e,t,i,s,r,1);break}}}function j_(n){let e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fs(s,a,r,c,o,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eA(n,e,t,i){let s=n.prev,r=n,o=n.next;if(ft(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Yc(f,g,e,t,i),x=Yc(_,m,e,t,i),A=n.prevZ,E=n.nextZ;for(;A&&A.z>=p&&E&&E.z<=x;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&fs(a,h,c,u,l,d,A.x,A.y)&&ft(A.prev,A,A.next)>=0||(A=A.prevZ,E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fs(a,h,c,u,l,d,E.x,E.y)&&ft(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&fs(a,h,c,u,l,d,A.x,A.y)&&ft(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;E&&E.z<=x;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fs(a,h,c,u,l,d,E.x,E.y)&&ft(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function tA(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!ea(s,r)&&sd(s,i,i.next,r)&&Ar(s,r)&&Ar(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),xr(i),xr(i.next),i=n=r),i=i.next}while(i!==n);return zi(i)}function nA(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uA(o,a)){let c=rd(o,a);o=zi(o,o.next),c=zi(c,c.next),_r(o,e,t,i,s,r,0),_r(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function iA(n,e,t,i){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=id(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(hA(l));for(s.sort(sA),r=0;r<s.length;r++)t=rA(s[r],t);return t}function sA(n,e){return n.x-e.x}function rA(n,e){let t=oA(n,e);if(!t)return e;let i=rd(t,n);return zi(i,i.next),zi(t,t.next)}function oA(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&fs(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ar(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&aA(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function aA(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function cA(n,e,t,i){let s=n;do s.z===0&&(s.z=Yc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,lA(s)}function lA(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function Yc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function hA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function uA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dA(n,e)&&(Ar(n,e)&&Ar(e,n)&&fA(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||ea(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ea(n,e){return n.x===e.x&&n.y===e.y}function sd(n,e,t,i){let s=go(ft(n,e,t)),r=go(ft(n,e,i)),o=go(ft(t,i,n)),a=go(ft(t,i,e));return!!(s!==r&&o!==a||s===0&&mo(n,t,e)||r===0&&mo(n,i,e)||o===0&&mo(t,n,i)||a===0&&mo(t,e,i))}function mo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function go(n){return n>0?1:n<0?-1:0}function dA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&sd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ar(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function fA(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rd(n,e){let t=new Qc(n.i,n.x,n.y),i=new Qc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ru(n,e,t,i){let s=new Qc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pA(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var sr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Cu(e),Pu(i,e);let o=e.length;t.forEach(Cu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Pu(i,t[c]);let a=$_.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Cu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Pu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qo=class n extends Mt{constructor(e=new gr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:mA,A,E=!1,P,R,T,U;p&&(A=p.getSpacedPoints(h),E=!0,d=!1,P=p.computeFrenetFrames(h,!1),R=new D,T=new D,U=new D),d||(m=0,f=0,g=0,_=0);let v=a.extractPoints(l),b=v.shape,F=v.holes;if(!sr.isClockWise(b)){b=b.reverse();for(let I=0,ce=F.length;I<ce;I++){let Z=F[I];sr.isClockWise(Z)&&(F[I]=Z.reverse())}}let ne=sr.triangulateShape(b,F),L=b;for(let I=0,ce=F.length;I<ce;I++){let Z=F[I];b=b.concat(Z)}function z(I,ce,Z){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ce,Z)}let k=b.length,$=ne.length;function Q(I,ce,Z){let se,J,we,fe=I.x-ce.x,S=I.y-ce.y,y=Z.x-I.x,C=Z.y-I.y,V=fe*fe+S*S,q=fe*C-S*y;if(Math.abs(q)>Number.EPSILON){let K=Math.sqrt(V),ae=Math.sqrt(y*y+C*C),re=ce.x-S/K,_e=ce.y+fe/K,pe=Z.x-C/ae,Ee=Z.y+y/ae,te=((pe-re)*C-(Ee-_e)*y)/(fe*C-S*y);se=re+fe*te-I.x,J=_e+S*te-I.y;let qe=se*se+J*J;if(qe<=2)return new oe(se,J);we=Math.sqrt(qe/2)}else{let K=!1;fe>Number.EPSILON?y>Number.EPSILON&&(K=!0):fe<-Number.EPSILON?y<-Number.EPSILON&&(K=!0):Math.sign(S)===Math.sign(C)&&(K=!0),K?(se=-S,J=fe,we=Math.sqrt(V)):(se=fe,J=S,we=Math.sqrt(V/2))}return new oe(se/we,J/we)}let Y=[];for(let I=0,ce=L.length,Z=ce-1,se=I+1;I<ce;I++,Z++,se++)Z===ce&&(Z=0),se===ce&&(se=0),Y[I]=Q(L[I],L[Z],L[se]);let ie=[],ee,ue=Y.concat();for(let I=0,ce=F.length;I<ce;I++){let Z=F[I];ee=[];for(let se=0,J=Z.length,we=J-1,fe=se+1;se<J;se++,we++,fe++)we===J&&(we=0),fe===J&&(fe=0),ee[se]=Q(Z[se],Z[we],Z[fe]);ie.push(ee),ue=ue.concat(ee)}for(let I=0;I<m;I++){let ce=I/m,Z=f*Math.cos(ce*Math.PI/2),se=g*Math.sin(ce*Math.PI/2)+_;for(let J=0,we=L.length;J<we;J++){let fe=z(L[J],Y[J],se);Ae(fe.x,fe.y,-Z)}for(let J=0,we=F.length;J<we;J++){let fe=F[J];ee=ie[J];for(let S=0,y=fe.length;S<y;S++){let C=z(fe[S],ee[S],se);Ae(C.x,C.y,-Z)}}}let W=g+_;for(let I=0;I<k;I++){let ce=d?z(b[I],ue[I],W):b[I];E?(T.copy(P.normals[0]).multiplyScalar(ce.x),R.copy(P.binormals[0]).multiplyScalar(ce.y),U.copy(A[0]).add(T).add(R),Ae(U.x,U.y,U.z)):Ae(ce.x,ce.y,0)}for(let I=1;I<=h;I++)for(let ce=0;ce<k;ce++){let Z=d?z(b[ce],ue[ce],W):b[ce];E?(T.copy(P.normals[I]).multiplyScalar(Z.x),R.copy(P.binormals[I]).multiplyScalar(Z.y),U.copy(A[I]).add(T).add(R),Ae(U.x,U.y,U.z)):Ae(Z.x,Z.y,u/h*I)}for(let I=m-1;I>=0;I--){let ce=I/m,Z=f*Math.cos(ce*Math.PI/2),se=g*Math.sin(ce*Math.PI/2)+_;for(let J=0,we=L.length;J<we;J++){let fe=z(L[J],Y[J],se);Ae(fe.x,fe.y,u+Z)}for(let J=0,we=F.length;J<we;J++){let fe=F[J];ee=ie[J];for(let S=0,y=fe.length;S<y;S++){let C=z(fe[S],ee[S],se);E?Ae(C.x,C.y+A[h-1].y,A[h-1].x+Z):Ae(C.x,C.y,u+Z)}}}j(),de();function j(){let I=s.length/3;if(d){let ce=0,Z=k*ce;for(let se=0;se<$;se++){let J=ne[se];Ne(J[2]+Z,J[1]+Z,J[0]+Z)}ce=h+m*2,Z=k*ce;for(let se=0;se<$;se++){let J=ne[se];Ne(J[0]+Z,J[1]+Z,J[2]+Z)}}else{for(let ce=0;ce<$;ce++){let Z=ne[ce];Ne(Z[2],Z[1],Z[0])}for(let ce=0;ce<$;ce++){let Z=ne[ce];Ne(Z[0]+k*h,Z[1]+k*h,Z[2]+k*h)}}i.addGroup(I,s.length/3-I,0)}function de(){let I=s.length/3,ce=0;Me(L,ce),ce+=L.length;for(let Z=0,se=F.length;Z<se;Z++){let J=F[Z];Me(J,ce),ce+=J.length}i.addGroup(I,s.length/3-I,1)}function Me(I,ce){let Z=I.length;for(;--Z>=0;){let se=Z,J=Z-1;J<0&&(J=I.length-1);for(let we=0,fe=h+m*2;we<fe;we++){let S=k*we,y=k*(we+1),C=ce+se+S,V=ce+J+S,q=ce+J+y,K=ce+se+y;Be(C,V,q,K)}}}function Ae(I,ce,Z){c.push(I),c.push(ce),c.push(Z)}function Ne(I,ce,Z){Se(I),Se(ce),Se(Z);let se=s.length/3,J=x.generateTopUV(i,s,se-3,se-2,se-1);Le(J[0]),Le(J[1]),Le(J[2])}function Be(I,ce,Z,se){Se(I),Se(ce),Se(se),Se(ce),Se(Z),Se(se);let J=s.length/3,we=x.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);Le(we[0]),Le(we[1]),Le(we[3]),Le(we[1]),Le(we[2]),Le(we[3])}function Se(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function Le(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return gA(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new n(i,e.options)}},mA={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,c),new oe(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new oe(o,1-c),new oe(l,1-u),new oe(d,1-g),new oe(_,1-p)]:[new oe(a,1-c),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};function gA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Yo=class n extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new D,g=new oe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let x=p+m,A=x,E=x+i+1,P=x+i+2,R=x+1;a.push(A,E,R),a.push(E,P,R)}}this.setIndex(a),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Es=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let x=[],A=p/i,E=0;p===0&&o===0?E=.5/t:p===i&&c===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+A*a),u.y=e*Math.cos(o+A*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+A*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+E,1-A),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let A=h[p][x+1],E=h[p][x],P=h[p+1][x],R=h[p+1][x+1];(p!==0||o>0)&&f.push(A,E,R),(p!==i-1||c<Math.PI)&&f.push(E,P,R)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qo=class n extends qc{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ai=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xu,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _A(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,a=2*t-i;break;case Uh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Nh:o=e,c=2*i-t;break;case Uh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+x*o[l+P]+A*o[c+P]+E*o[u+P];return r}},Zc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Kc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xo:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&_A(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=yo;var Bi=class extends En{};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=xo;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends En{};$c.prototype.ValueTypeName="color";var jc=class extends En{};jc.prototype.ValueTypeName="number";var el=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)_i.slerpFlat(r,0,o,l-a,o,l,c);return r}},yr=class extends En{InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=yo;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends En{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=xo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends En{};tl.prototype.ValueTypeName="vector";var nl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},AA=new nl,il=class{constructor(e){this.manager=e!==void 0?e:AA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jo=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ts=class extends Jo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},pc=new yt,Iu=new D,Du=new D,sl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var rl=class extends sl{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new rl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fl="\\[\\]\\.:\\/",xA=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",yA="[^"+fl.replace("\\.","")+"]",vA=/((?:WC+[\/:])*)/.source.replace("WC",pl),MA=/(WCOD+)?/.source.replace("WCOD",yA),bA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),SA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),EA=new RegExp("^"+vA+MA+bA+SA+"$"),wA=["material","materials","bones","map"],ol=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xA,"")}static parseTrackName(e){let t=EA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=ol;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dx=new Float32Array(1);var Zo=class{constructor(e,t,i=0,s=1/0){this.ray=new cr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return al(e,this,i,t),i.sort(Lu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)al(e[s],this,i,t);return i.sort(Lu),i}};function Lu(n,e){return n.distance-e.distance}function al(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)al(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function ta(n,{reducedMotion:e=!1,onImpact:t}={}){let i=new Map,s=new Map,r=new Set,o=new ti(.105,.42,10);o.rotateX(Math.PI/2);let a=new ti(.075,.28,8);a.rotateX(-Math.PI/2);let c=new Yo(.15,.2,24),l=new Qo(.08),h=new Ai({color:"#b86436",metalness:.5,roughness:.4}),u=new kt({color:"#ffd374"}),d=new kt({color:"#ffd38a",transparent:!0,side:Mn,depthWrite:!1}),f=new kt({color:"#efa65a",transparent:!0});function g(p,x){p.position.set(x.x,x.y,x.z)}function _(p,x,A){let E=new Set;for(let P of p){E.add(P.id);let R=i.get(P.id);if(!R){R=new ht,R.add(new xt(o,h));let v=new xt(a,u);v.position.z=.3,R.add(v),n.add(R),i.set(P.id,R)}g(R,P.position);let T=P.velocity,U=new D(T.x,T.y,T.z);U.lengthSq()&&R.quaternion.setFromUnitVectors(new D(0,0,-1),U.normalize())}for(let[P,R]of i)E.has(P)||(n.remove(R),i.delete(P));for(let P of x){if(r.has(P.id))continue;r.add(P.id);let R=new ht,T=d.clone(),U=new xt(c,T);if(R.add(U),!e)for(let v=0;v<6;v++){let b=new xt(l,f.clone());b.userData.direction=new D(Math.cos(v*Math.PI/3),.35+v%2*.3,Math.sin(v*Math.PI/3)),R.add(b)}g(R,P.position),n.add(R),s.set(P.id,{group:R,age:0}),t?.(P)}for(let[P,R]of s){R.age+=Math.max(0,A);let T=Math.min(1,R.age/.55);R.group.children[0].scale.setScalar(1+T*6),R.group.children[0].material.opacity=.85*(1-T);for(let U of R.group.children.slice(1))U.position.copy(U.userData.direction).multiplyScalar(T*1.4),U.material.opacity=1-T;if(T>=1){n.remove(R.group);for(let U of R.group.children)U.material.dispose();s.delete(P)}}}function m(){for(let p of i.values())n.remove(p);for(let p of s.values()){n.remove(p.group);for(let x of p.group.children)x.material.dispose()}i.clear(),s.clear(),r.clear();for(let p of[o,a,c,l,h,u,d,f])p.dispose()}return{update:_,dispose:m}}function na({on:n,canvas:e,active:t,look:i,fire:s,clearInput:r}){let o=null,a=null;function c(){o=a=null,r()}n(e,"contextmenu",l=>l.preventDefault()),n(e,"mousedown",l=>{!t()||l.button!==0&&l.button!==2||(l.preventDefault(),e.focus({preventScroll:!0}),l.button===0?s(!0):o={x:l.clientX,y:l.clientY})}),n(window,"mousemove",l=>{if(!(!t()||!o)){if(!(l.buttons&2)){o=null;return}i(l.clientX-o.x,l.clientY-o.y),o.x=l.clientX,o.y=l.clientY}}),n(window,"mouseup",l=>{l.button===0&&s(!1),l.button===2&&(o=null)}),n(e,"pointerdown",l=>{!t()||l.pointerType==="mouse"||a||(l.preventDefault(),e.setPointerCapture(l.pointerId),a={id:l.pointerId,x:l.clientX,y:l.clientY})}),n(window,"pointermove",l=>{!t()||a?.id!==l.pointerId||(i((l.clientX-a.x)*2.2,(l.clientY-a.y)*2.2),a.x=l.clientX,a.y=l.clientY)});for(let l of["pointerup","pointercancel","lostpointercapture"])n(e,l,h=>{a?.id===h.pointerId&&(a=null)});return{clear:c}}function ad(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let g=od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function od(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new vt(o,t,i);return s!==void 0&&(c.gpuType=s),c}var Mr=new D;function fn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Mr.copy(e),Mr[i]=0,Mr.normalize();let l=.5*o/(o+a),h=1-Mr.angleTo(n)/c;return Math.sign(Mr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Ps=class extends un{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,c=new D,l=new D(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new D,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=fn(g,c,"z","y",r,i),d[p+1]=1-fn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-fn(g,c,"z","y",r,i),d[p+1]=1-fn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-fn(g,c,"x","z",r,e),d[p+1]=fn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-fn(g,c,"x","z",r,e),d[p+1]=1-fn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-fn(g,c,"x","y",r,e),d[p+1]=1-fn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=fn(g,c,"x","y",r,e),d[p+1]=1-fn(g,c,"y","x",r,t);break}}};var cd={station:["2f4zG80EcgAzG5oF2f5mGpoF2f4zG80E2f5mGpoFP/0zG5oF7wPXGZoFKwIzG5oF7wMzGz0EtAUzG5oF7wPXGZoF7wMzGz0EAAczA5oFVwXXAZoFVwUzAz0EVwXXAZoFrgMzA5oFVwUzAz0E9wTXGWb61wYzG2b69wQzG8P7FgMzG2b69wTXGWb69wQzG8P71fszA2b6jf7XAWb6jf4zA8P7jf7XAWb6RQEzA2b6jf4zA8P7APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAGb6zfQzA2b6APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAJoFzfQzA5oFzfQAGGb6zfQzG2b6APQAGDP7APQzGzP7APQAGM0EAPQzG80EzfQAGJoFzfQzG5oFAPQAGDP7APQzGzP7APQAGM0EAPQzG80EcgAzG5oFKwIzG5oF2f5mGpoF7wPXGZoFzfQzG5oFP/0zG5oFzfQAGJoFMwsAGJoFMwszG5oFtAUzG5oFAAwzA80EAAwAAM0EMwszA5oFMwsAAJoFAAwzAzP7AAwzA80EMwszA2b6MwszA5oFZgozAwD8RQEzA2b6jf4zA8P7ZgozAwAEAAczA5oFVwUzAz0EmvUzAwD81fszA2b6mvUzAwAEzfQzA2b6rgMzA5oFzfQzA5oFAPQzAzP7APQzA80EzfQAAGb6MwsAAGb6zfQzA2b6jf7XAWb61fszA2b6MwszA2b6RQEzA2b6AAwzAzP7AAwAADP7AAwzA80EAAwAAM0EAAwzG80EAAwAGM0EMwszG5oFMwsAGJoFAAwzGzP7AAwAGDP7AAwzG80EAAwAGM0EAAwzGzP7AAwzG80EMwszG2b6MwszG5oF1wYzG2b6tAUzG5oF9wQzG8P77wMzGz0EFgMzG2b6KwIzG5oFzfQzG2b6cgAzG5oF2f4zG80EP/0zG5oFzfQzG5oFAPQzGzP7APQzG80EMwszG2b6MwsAGGb6AAwzGzP7AAwAGDP7AAwAGM0EAAwAGDP7MwsAGJoFMwsAGGb6ZgoAGAAEzfQAGJoFZgoAGAD8mvUAGAAEzfQAGGb6mvUAGAD8APQAGM0EAPQAGDP7zfQAGGb6MwsAGGb6zfQzG2b69wTXGWb6FgMzG2b6MwszG2b61wYzG2b6AAwAAM0EAAwAADP7MwsAAJoFMwsAAGb6zfQAAJoFzfQAAGb6APQAAM0EAPQAADP7MwszA2b6MwsAAGb6AAwzAzP7AAwAADP7AAczA5oFMwszA5oFVwXXAZoFMwsAAJoFzfQAAJoFzfQzA5oFrgMzA5oFmvUzAwD8mvUAGAD8mvUzAwAEmvUAGAAEZgoAGAD8ZgozAwD8ZgoAGAAEZgozAwAEmvUzAwD8ZgozAwD8mvUAGAD8ZgoAGAD8ZgoAGAD8ZgoAGAAEmvUAGAD8mvUAGAAEZgozAwAEmvUzAwAEZgoAGAAEmvUAGAAEOQQuBgAEOQTrBwAEnAQuBoEEnATrB4EEsQYuBoEEnAQuBoEEsQbrB4EEnATrB4EEEwcuBgAEOQQuBgAEsQYuBoEEnAQuBoEEEwfrBwAEEwcuBgAEsQbrB4EEsQYuBoEEEwfrBwAEsQbrB4EEOQTrBwAEnATrB4EE+ffECAAE+feACgAEW/jECIEEW/iACoEEcPrECIEEW/jECIEEcPqACoEEW/iACoEE0vrECAAE+ffECAAEcPrECIEEW/jECIEE0vqACgAE0vrECAAEcPqACoEEcPrECIEE0vqACgAEcPqACoEE+feACgAEW/iACoEE5PlOCwAE5PkKDQAERvpOC4EERvoKDYEEW/xOC4EERvpOC4EEW/wKDYEERvoKDYEEvfxOCwAE5PlOCwAEW/xOC4EERvpOC4EEvfwKDQAEvfxOCwAEW/wKDYEEW/xOC4EEvfwKDQAEW/wKDYEE5PkKDQAERvoKDYEErAEIFAAErAHFFQAEDgIIFIEEDgLFFYEEIwQIFIEEDgIIFIEEIwTFFYEEDgLFFYEEhQQIFAAErAEIFAAEIwQIFIEEDgIIFIEEhQTFFQAEhQQIFAAEIwTFFYEEIwQIFIEEhQTFFQAEIwTFFYEErAHFFQAEDgLFFYEEaP6UBwD8aP5RCQD8Bv6UB3/7Bv5RCX/78fuUB3/7Bv6UB3/78ftRCX/7Bv5RCX/7j/uUBwD8aP6UBwD88fuUB3/7Bv6UB3/7j/tRCQD8j/uUBwD88ftRCX/78fuUB3/7j/tRCQD88ftRCX/7aP5RCQD8Bv5RCX/7ffwkCgD8ffzgCwD8G/wkCn/7G/zgC3/7BfokCn/7G/wkCn/7BfrgC3/7G/zgC3/7o/kkCgD8ffwkCgD8BfokCn/7G/wkCn/7o/ngCwD8o/kkCgD8BfrgC3/7BfokCn/7o/ngCwD8BfrgC3/7ffzgCwD8G/zgC3/7ega4EQD8egZ1EwD8GAa4EX/7GAZ1E3/7AwS4EX/7GAa4EX/7AwR1E3/7GAZ1E3/7oQO4EQD8ega4EQD8AwS4EX/7GAa4EX/7oQN1EwD8oQO4EQD8AwR1E3/7AwS4EX/7oQN1EwD8AwR1E3/7egZ1EwD8GAZ1E3/7ZgrPCIwAZgqLCowA5wrPCCoA5wqLCioA5wrPCBT+5wrPCCoA5wqLChT+5wqLCioAZgrPCLL9ZgrPCIwA5wrPCBT+5wrPCCoAZgqLCrL9ZgrPCLL95wqLChT+5wrPCBT+ZgqLCrL95wqLChT+ZgqLCowA5wqLCioAmvXWEfL+mvWTE/L+GfXWEVT/GfWTE1T/GfXWEWkBGfXWEVT/GfWTE2kBGfWTE1T/mvXWEcsBmvXWEfL+GfXWEWkBGfXWEVT/mvWTE8sBmvXWEcsBGfWTE2kBGfXWEWkBmvWTE8sBGfWTE2kBmvWTE/L+GfWTE1T/","AACCWoJaVtVVVVVVAACCWoJaAACCWoJaAACCWoJaqipVVVVVAACCWoJaKT2CT4JPAACCWoJa18KCT4JPAACCWoJaAACCWoJa0b9OTk5OAACCWoJaAACCWoJaAACCWoJaL0BOTk5OAACCWoJaAACCWn6losWMUHSvAACCWn6lXjqMUHSvAACCWn6lAACCWn6lqipVVauqAACCWn6lAACCWn6lAACCWn6lVtVVVauqAACCWn6lv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2Bc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2v4kAAAXPv4kAAAXPv4kAAPswv4kAAPswAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/Bc8AAEF2AAAAAP9/Bc8AAEF2+zAAAEF2+zAAAEF2AAAAAP9/QXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAQXYAAAXPQXYAAAXPQXYAAPswQXYAAPswQXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2QXYAAAXPQXYAAAXPQXYAAPswQXYAAPswAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAAAAP9/+zAAAEF2AAAAAP9/+zAAAEF2Bc8AAEF2Bc8AAEF2AAAAAP9/AYAAAAAAAYAAAAAAAYAAAAAAAYAAAAAA/38AAAAA/38AAAAA/38AAAAA/38AAAAAAAAAAAGAAAAAAAGAAAAAAAGAAAAAAAGAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/GJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAc00AAOhlc00AAOhlqnIAAOA4qnIAAOA4qnIAACDHqnIAAOA4qnIAACDHqnIAAOA4AAABgAAAAAABgAAAAAABgAAAAAABgAAAc00AABiac00AABiaqnIAACDHqnIAACDHAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAjbIAABiajbIAABiaVo0AACDHVo0AACDHVo0AAOA4Vo0AACDHVo0AAOA4Vo0AACDHAAABgAAAAAABgAAAAAABgAAAAAABgAAAjbIAAOhljbIAAOhlVo0AAOA4Vo0AAOA4AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA","OD1VOD1VNzxUOD1VNzxUOD1VNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VNzxUNjtUOD1VOD1VNDlQNDlQOD1VOD1VHSAzGh4wHSAzGh4wHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzGh4wGh4wHSAzHB8yHSAzHSAzHSAzHSAzGh4wHSAzGh4wOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VNDlQOD1VNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQOD1VNjtUOD1VOD1VOD1VGh4wGh4wGh4wGh4wGh4wGh4wGh4wGh4wHSAzGh4wHSAzGh4wHSAzHSAzHB8yGh4wGh4wHSAzHSAzrwsM6x8NrwsM6x8N6x8NrwsM6x8NrwsMrwsMrwsM6x8N6x8N6x8N6x8N6x8N6x8NrwsMrwsM6x8N6x8NuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsN","AgABAAAABQAEAAMACAAHAAYACwAKAAkADgANAAwAEQAQAA8AFAATABIAFwAWABUAGgAZABgAHQAcABsAIAAfAB4AHwAgACEAJAAjACIAIwAkACUAKAAnACYAJwAoACkALAArACoAKwAsAC0AMAAvAC4ALwAwADEANAAzADIAMwA0ADUAOAA3ADYANwA4ADkAOgA5ADgAOgA4ADsAOQA6ADwAPQA5ADwAOQA9AD4AOQA+AD8AQgBBAEAAQQBCAEMARgBFAEQARQBGAEcARwBGAEgASABGAEkASABJAEoASwBHAEgARwBLAEwATABLAE0ASABKAE4ATgBKAE8ATQBLAFAATgBPAFEATgBRAFAATQBQAFIAUgBQAFMAUwBQAFEAUwBRAFQAUwBUAFUAWABXAFYAVwBYAFkAWQBYAFoAWQBbAFcAWwBZAFwAXwBeAF0AXgBfAGAAYwBiAGEAYgBjAGQAZwBmAGUAZgBnAGgAawBqAGkAagBrAGwAbABrAG0AbABtAG4AbgBtAG8AbgBvAHAAcABvAHEAcABxAHIAcgBxAHMAcgBzAHQAdABzAHUAdQBzAHYAdgBzAHcAdwBzAHgAdwB4AHkAfAB7AHoAewB8AH0AgAB/AH4AfwCAAIEAgQCAAIIAggCAAIMAhACBAIIAggCDAIUAgQCEAIYAhQCDAIcAhgCEAIcAhgCHAIMAhgCDAIgAhgCIAIkAjACLAIoAiwCMAI0AjQCMAI4AjQCPAIsAjwCNAJAAkwCSAJEAkgCTAJQAlACTAJUAlACVAJYAlgCVAJcAlgCXAJgAmwCaAJkAmgCbAJwAnwCeAJ0AnwCgAJ4AoACfAKEAnwCiAKEAogCfAKMApgClAKQApQCmAKcAqgCpAKgAqQCqAKsArgCtAKwArQCuAK8AsgCxALAAsQCyALMAtgC1ALQAtQC2ALcAugC5ALgAuQC6ALsAvgC9ALwAvQC+AL8AwgDBAMAAwQDCAMMAxgDFAMQAxQDGAMcAygDJAMgAyQDKAMsAzgDNAMwAzQDOAM8A0gDRANAA0QDSANMA1gDVANQA1QDWANcA2gDZANgA2QDaANsA3gDdANwA3QDeAN8A4gDhAOAA4QDiAOMA5gDlAOQA5QDmAOcA6gDpAOgA6QDqAOsA7gDtAOwA7QDuAO8A8gDxAPAA8QDyAPMA9gD1APQA9QD2APcA+gD5APgA+QD6APsA/gD9APwA/QD+AP8AAgEBAQABAQECAQMBBgEFAQQBBQEGAQcBCgEJAQgBCQEKAQsBDgENAQwBDQEOAQ8BEgERARABEQESARMBFgEVARQBFQEWARcBGgEZARgBGQEaARsBHgEdARwBHQEeAR8BIgEhASABIQEiASMBJgElASQBJQEmAScBKgEpASgBKQEqASsBLgEtASwBLQEuAS8BMgExATABMQEyATMBNgE1ATQBNQE2ATcBOgE5ATgBOQE6ATsBPgE9ATwBPQE+AT8BQgFBAUABQQFCAUMBRgFFAUQBRQFGAUcBSgFJAUgBSQFKAUsBTgFNAUwBTQFOAU8BUgFRAVABUQFSAVMBVgFVAVQBVQFWAVcBWgFZAVgBWQFaAVsBXgFdAVwBXQFeAV8BYgFhAWABYQFiAWMBZgFlAWQBZQFmAWcBagFpAWgBaQFqAWsB"]};var sa={sky:"#cadcde",fog:"#c8d5ca",floor:"#a69780",wall:"#c7a27d",inlay:"#87765c",trim:"#efe0be",edge:"#ab7e62",cover:"#a48762",door:"#50726b",cold:"#465750",bright:"#ffe3b6",landmark:"#477b70"},ra={sky:"#c1d3de",fog:"#b5c5c5",floor:"#8f9b9c",wall:"#849c9d",inlay:"#405c67",trim:"#d6bf89",edge:"#687f89",cover:"#93896b",door:"#4e6b77",cold:"#453f35",bright:"#f0edda",landmark:"#b07c40"},gl={sky:"#d2dace",fog:"#c9d3bc",floor:"#90967d",wall:"#abb191",inlay:"#747c62",trim:"#e0d6b2",edge:"#8c9c76",cover:"#827a58",door:"#686f53",cold:"#4a594d",bright:"#fff4cc",landmark:"#955a40"},TA=[sa,ra,gl];function RA(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ss(i);return s.colorSpace=At,s.wrapS=s.wrapT=rr,s.anisotropy=4,s}function ia(n,e){return RA(256,256,t=>{t.fillStyle=n[e],t.fillRect(0,0,256,256);let i=62431,s=()=>(i=i*1664525+1013904223>>>0,i/4294967296),r="rgba(40,44,38,.32)",o="rgba(255,245,219,.27)";if(e==="door"||e==="wall"&&n===ra){for(let a=0;a<256;a+=16){let c=t.createLinearGradient(a,0,a+16,0);c.addColorStop(0,r),c.addColorStop(.27,o),c.addColorStop(.56,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(a,0,16,256)}t.fillStyle=n.inlay,t.fillRect(0,0,256,8),t.fillRect(0,244,256,12),e==="door"&&(t.fillStyle=n.trim,t.fillRect(18,121,220,2),t.fillRect(18,156,220,2),t.strokeStyle=n.inlay,t.lineWidth=8,t.strokeRect(15,15,226,226))}else{let a=e==="cover"?32:e==="wall"?42:64;for(let c=0;c<256;c+=a){let l=Math.floor(c/a)%2?32:0;if(t.fillStyle=r,t.fillRect(0,c,256,3),t.fillStyle=o,t.fillRect(0,c+3,256,2),e!=="cover")for(let h=l;h<256;h+=64)t.fillStyle=r,t.fillRect(h,c,2,a),t.fillStyle=o,t.fillRect(h+2,c+3,1,a-4)}if(e==="cover"){t.fillStyle=n.inlay,t.fillRect(16,0,13,256),t.fillRect(227,0,13,256);for(let c of[20,231])for(let l of[19,79,150,228])t.fillStyle=o,t.fillRect(c,l,5,5)}}for(let a=0;a<860;a++){let c=s()*256,l=s()*256;t.fillStyle=s()>.58?"rgba(255,250,221,.075)":"rgba(40,34,28,.11)",t.fillRect(c,l,(1+s()*2)*(e==="cover"?3:1),1+s()*2)}if(n===gl&&e==="wall"){let a=t.createLinearGradient(0,256,0,158);a.addColorStop(0,"#54684650"),a.addColorStop(1,"#54684600"),t.fillStyle=a,t.fillRect(0,158,256,98)}})}function Ht(n,e={}){return new Ai({color:n,roughness:.84,...e})}function Ze(n,e,t,i,s,r){return new un(n,e,t).translate(i,s,r)}function Jt(n,e,t,i=!0,s=!0){let r=new xt(n,e);return r.castShadow=i,r.receiveShadow=s,t.add(r),r}function br(n){if(n.length===1)return n[0];let t=n.some(s=>!s.index)?n.map(s=>s.index?s.toNonIndexed():s):n,i=ad(t);return new Set([...n,...t]).forEach(s=>s.dispose()),i}function CA(n){let e=new Map;return{add(t,i){e.has(i)||e.set(i,[]),e.get(i).push(t)},finish(){for(let[t,i]of e)Jt(br(i),t,n)}}}function PA(n,e,t){let i=n.getAttribute("uv");for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*e,i.getY(s)*t);return n}var ml=new Map;function IA(n){if(!ml.has(n)){let[r,o,a,c]=cd[n].map(l=>Uint8Array.from(atob(l),h=>h.charCodeAt(0)));ml.set(n,{positions:Float32Array.from(new Int16Array(r.buffer),l=>l/4096),normals:new Int16Array(o.buffer),colors:a,indices:new Uint16Array(c.buffer)})}let{positions:e,normals:t,colors:i,indices:s}=ml.get(n);return new Mt().setAttribute("position",new vt(e.slice(),3)).setAttribute("normal",new vt(t.slice(),3,!0)).setAttribute("color",new vt(i,3,!0)).setIndex(new vt(s,1))}function DA(n,e,t){return n.w>=n.d?[n.x+e,n.z+t*Math.sign(-n.z||1)]:[n.x+t*Math.sign(-n.x||1),n.z+e]}function LA(n,e,t,i,s,r){let o=e.w>=e.d,a=Math.max(e.w,e.d),c=Math.min(e.w,e.d),l=(h,u,d,f,g,_,m)=>{let[p,x]=DA(e,h,d);n.add(Ze(o?f:_,g,o?_:f,p,u,x),m)};if(!s){l(0,e.h-.07,0,a+.035,.08,c+.03,i.trim),l(0,.08,0,a+.035,.09,c+.03,i.inlay);for(let h of[-a*.34,a*.34])l(h,e.h*.51,c*.49,.09,e.h*.8,.042,i.inlay);return}if(l(0,e.h-.07,0,a+.045,.13,c+.045,i.trim),l(0,.29,0,a,.52,c+.04,i.inlay),l(0,.58,0,a,.07,c+.06,i.trim),t===ra)for(let h=-a/2+.14;h<a/2;h+=5)l(h,(e.h+.6)/2,c*.5,.13,e.h-.6,.07,i.inlay),l(h,e.h-.34,c*.54,.42,.14,.065,i.landmark);else if(t===sa)for(let h=-a/2+1.35;h<a/2-.75;h+=3.2){l(h,e.h-1.05,c*.5,.91,1.16,.064,i.trim),l(h,e.h-1.05,c*.54,.71,.9,.06,i.inlay);for(let u=0;u<4;u++)l(h,e.h-.75-u*.18,c*.57,.66,.033,.045,i.edge);l(h,e.h-1.63,c*.55,1.02,.08,.14,i.trim)}else if(r)for(let h=-a/2+.55;h<a/2;h+=1.55)l(h,e.h+.25,0,.62,.5,c,i.edge)}function NA(n,e){for(let s=0;s<7;s++){let r=-19+s*6.25,o=[7,10,8,13,10,8,7][s];n.add(Ze(5.95,o,4,r,o/2,-21.3),e.edge),n.add(Ze(6.2,.25,4.1,r,o,-21.3),e.trim);for(let a of[-1.6,0,1.6])s===3&&a===0||(n.add(Ze(.72,1.23,.04,r+a,o-1.4,-19.29),e.inlay),n.add(Ze(1.04,.12,.15,r+a,o-2.04,-19.22),e.trim))}let t=new Nn(.72,.72,.15,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.25),i=new Nn(.6,.6,.16,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.19);n.add(t,e.inlay),n.add(i,e.trim),n.add(Ze(.43,.075,.04,-.09,11.25,-19.08),e.inlay),n.add(Ze(.075,.33,.04,-.25,11.4,-19.08),e.inlay)}function UA(n,e){for(let t of[-14,0,14]){let i=t===0,s=i?9.4:7.4;n.add(Ze(13.45,s,5,t,s/2,-22),e.edge),n.add(Ze(13.65,.3,5.2,t,s,-22),e.inlay),n.add(Ze(11,.34,.08,t,s-1.15,-19.46),e.landmark);for(let r of[-4,-2,0,2,4])n.add(Ze(1.33,.76,.1,t+r,s-.57,-19.45),e.trim);if(i){n.add(Ze(9.8,1.45,2.6,t,s+.69,-22),e.edge),n.add(Ze(10.05,.2,2.85,t,s+1.46,-22),e.inlay);for(let r of[-3.5,3.5])n.add(new Nn(.32,.43,2,12).translate(t+r,s+2.1,-22),e.inlay)}}}function FA(n,e){n.add(Ze(38.5,6.7,4,0,3.35,-23),e.edge),n.add(Ze(38.5,.17,4.1,0,6.62,-23),e.trim);for(let t=-17.8;t<18.8;t+=1.65)n.add(Ze(.76,.59,1.18,t,6.96,-21.5),e.edge);for(let t of[-12.7,0,12.7]){let i=t===0?11.5:9;n.add(new Nn(2.35,2.58,i,14).translate(t,i/2,-22),e.edge),n.add(new Nn(2.5,2.43,.25,14).translate(t,i-.48,-22),e.trim),n.add(new ti(2.65,2.8,14).translate(t,i+1.33,-22),e.landmark),n.add(Ze(.53,1.18,.075,t,i-1.55,-19.62),e.inlay),n.add(Ze(.83,.11,.16,t,i-2.16,-19.55),e.trim)}}function OA(n,e,t,i){t===sa&&NA(n,i),t===ra&&UA(n,i),t===gl&&FA(n,i);for(let s of[-1,1]){let r=IA("station").scale(.95,1.45,.95).translate(s*2.5,4.92,-18.3);Jt(r,Ht(t.trim,{vertexColors:!0}),e,!1)}}function oa(n,e,t,i){let s=TA[i-1]??sa,r=CA(n),o=Object.fromEntries(["trim","inlay","edge","landmark"].map(T=>[T,Ht(s[T])])),a=ia(s,"floor");a.repeat.set(10,10),Jt(new ur(38,38).rotateX(-Math.PI/2),Ht("#fff8ed",{map:a}),n,!1);let c=Ht(s.landmark);for(let T of[-1,1])for(let U=12;U>=-12;U-=2.4)r.add(Ze(.086,.009,1.5,T*1.15,.006,U),c);let l=Ht("#ffffff",{map:ia(s,"wall")}),h=Ht("#ffffff",{map:ia(s,"cover")}),u=Ht("#ffffff"),d=e.map((T,U)=>{let v=T.h>=1.5,b=Math.max(1,Math.round(Math.max(T.w,T.d)/3.7)),F=PA(Ze(T.w,T.h,T.d,T.x,T.h*.5,T.z),b,1);r.add(F,v?l:h),LA(r,T,s,o,v,U<4);let X=Jt(Ze(T.w,T.h,T.d,T.x,T.h*.5,T.z),u,n,!1,!1);return X.visible=!1,X}),f=Ht("#ffffff",{map:ia(s,"door")}),g=t.map(T=>{let U=new ht;U.position.set(T.x,T.h/2,T.z),n.add(U);let v=Jt(new un(T.w,T.h,T.d),f,U),b=T.w>T.d,F=[Ze(T.w+.035,.11,T.d+.035,0,-T.h/2+.12,0),Ze(T.w+.035,.07,T.d+.035,0,T.h/2-.15,0)];for(let ne of[-1,1])F.push(Ze(b?.08:T.w+.03,T.h-.18,b?T.d+.03:.08,b?ne*(T.w/2-.16):0,0,b?0:ne*(T.d/2-.16)));Jt(br(F),o.trim,U);let X=Jt(Ze(b?.24:T.w+.04,.075,b?T.d+.04:.24,0,.8,0),new kt({color:"#e6ad65"}),U,!1,!1);return{d:T,mesh:v,group:U,status:X}}),_=new ht;_.position.set(0,0,-13),n.add(_);let m=Ht("#435c60",{metalness:.38,roughness:.58}),p=[Ze(1.48,.09,1.06,0,.05,0),new Ps(1.3,.62,.88,2,.055).translate(0,.37,0),Ze(1.15,.065,.72,0,.74,0),Ze(.12,.13,1,0,.12,0)];Jt(br(p),m,_);let x=Jt(new Ps(.67,.18,.075,2,.02).translate(0,.43,.46),Ht("#d2a35f",{metalness:.4}),_);x.name="device-case";let A=Jt(Ze(.66,.076,.43,0,.802,0),Ht("#213238",{metalness:.36}),_);A.rotation.x=.025;let E=Jt(Ze(.54,.024,.36,0,.85,.015),new kt({color:"#edb663"}),_,!1,!1),P=Jt(new Es(.044,10,6).translate(.31,.56,.457),new kt({color:"#edb663"}),_,!1,!1),R=Jt(new Xo(1.17,36).rotateX(-Math.PI/2),Ht(s.trim,{transparent:!0,opacity:.22,depthWrite:!1}),_,!1,!1);return R.position.y=.012,OA(r,n,s,o),r.finish(),{theme:s,wallRays:d,doorViews:g,station:_,strip:E,lamp:P}}function ve(n,e,t,i,s=0,r=0,o=0){return new Ps(n,e,t,1,i).translate(s,r,o)}function ct(n,e,t,i,s,r="z",o=12){let a=new Nn(n,n,e,o);return r==="z"&&a.rotateX(Math.PI/2),r==="x"&&a.rotateZ(Math.PI/2),a.translate(t,i,s)}function Is(n,e,t){let i=t.map(([s,r])=>{let o=new He(r),a=new Float32Array(s.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return s.setAttribute("color",new vt(a,3)),s});return Jt(br(i),e,n,!1,!1)}function Ds(n,e){let t="#38434a",i="#788287",s="#abb3ae",r="#282d30",o=["#d8904a","#b88560","#ccaa65"][e%3],a=Ht(["#d39864","#b99070","#d2aa71"][e%3],{vertexColors:!0,metalness:.32,roughness:.53,emissive:"#000000"}),c=Ht("#ffffff",{vertexColors:!0,metalness:.3,roughness:.61}),l=[[ve(.63,.47,.36,.063,0,1.17,-.013),"#ded9c6"],[ve(.42,.21,.28,.029,0,.79,-.02),"#8a989c"],[ve(.45,.33,.37,.054,0,1.68,-.003),"#d8d4c2"],[ve(.34,.08,.28,.024,0,1.864,-.018),"#e7dbbd"],[ve(.43,.19,.08,.034,0,1.2,.176),"#bebcb3"]],h=[[ve(.41,.21,.08,.038,0,1.69,.172),t],[ve(.33,.132,.037,.021,0,1.7,.214),"#263436"],[ve(.25,.069,.075,.019,0,1.574,.166),i],[ct(.108,.108,0,1.47,-.02,"y"),i],[ve(.36,.23,.33,.045,0,.92,0),r],[ve(.32,.29,.15,.035,0,1.27,-.22),t],[ve(.27,.055,.05,.012,0,1.02,.174),t],[ve(.18,.072,.036,.013,0,1.2,.223),"#252f31"]];for(let g of[-1,1]){l.push([ve(.057,.11,.3,.014,g*.219,1.756,-.01),"#8b9294"]),h.push([ct(.037,.026,g*.223,1.69,.171,"x"),i]),h.push([ct(.018,.016,g*.257,1.24,.183),"#c2c2b5"]);for(let _=0;_<4;_++)h.push([Ze(.084,.012,.046,g*.103,1.18+_*.032,-.298),"#151f22"])}Is(n,a,l),Is(n,c,h);let u=Jt(br([ve(.162,.057,.025,.012,0,1.7,.238),ct(.029,.019,-.118,1.7,.235),ct(.029,.019,.118,1.7,.235),ve(.1,.023,.017,.006,0,1.2,.247)]),new kt({color:"#ffc277"}),n,!1,!1),d=[],f=[];for(let g of[-1,1]){let _=new ht;_.position.set(g*.214,.74,0),n.add(_),Is(_,c,[[ve(.196,.27,.27,.031,0,-.11,-.039),s],[ct(.093,.235,0,-.31,.023,"x"),t],[ct(.058,.022,g*.123,-.31,.023,"x"),i],[ct(.039,.26,g*.041,-.448,-.065,"y"),i],[ve(.15,.26,.156,.026,0,-.455,.04),t],[ve(.165,.2,.086,.024,0,-.435,.133),o],[ve(.21,.135,.37,.028,0,-.639,.047),i],[ve(.23,.056,.385,.016,0,-.711,.05),r],[ve(.167,.078,.125,.015,0,-.628,.207),s]]),d.push(_);let m=new ht;n.add(m),m.position.set(g*.393,1.4,-.01),m.rotation.z=g*.1,Is(m,c,[[ct(.1,.16,0,-.04,-.017,"x"),r],[ve(.215,.157,.281,.04,g*.032,-.007,.014),s],[ve(.068,.103,.176,.016,g*.124,-.02,.027),o],[ve(.128,.2,.149,.022,0,-.17,-.013),t],[ct(.068,.171,0,-.26,.017,"x"),i],[ve(.167,.206,.205,.034,0,-.373,.047),t],[ve(.124,.143,.048,.017,0,-.38,.16),i],[ve(.127,.108,.136,.02,0,-.514,.065),r]]),f.push(m)}return{legs:d,arms:f,chassis:a,visor:u}}function zA(n,e){let t="#49575a",i="#70766b",s="#303936",r=Ht("#ffffff",{vertexColors:!0,roughness:.82}),o=[[ve(.16,.15,.48,.049,.056,-.22,.24).rotateZ(.21),t],[ve(.17,.153,.092,.027,.046,-.2,.095),i],[ve(.157,.167,.179,.048,.031,-.137,.056),s],[ve(.105,.064,.102,.022,-.056,-.104,.051).rotateZ(.13),"#4d5b55"],[ve(.087,.031,.094,.012,.039,-.116,-.045),"#495853"],[ve(.093,.026,.083,.011,.04,-.152,-.043),"#495853"]];if((e==="carbine"||e==="sniper"||e==="bazooka")&&o.push([ve(.19,.17,.4,.049,-.102,-.214,-.24).rotateZ(-.13),t],[ve(.175,.117,.111,.026,-.055,-.145,-.447),i],[ve(.162,.096,.162,.035,-.024,-.095,-.48),s],[ve(.048,.074,.131,.021,-.093,-.056,-.49),"#495853"]),e==="knife")for(let[a]of o)a.translate(0,.066,.037);Is(n,r,o)}function aa(n,e){let t="#647277",i="#434e53",s="#283237",r="#797f72",o="#a89065",a="#cfb581",c=Ht("#ffffff",{vertexColors:!0,metalness:.37,roughness:.44}),l=[],h;if(e==="knife"){let u=new gr;u.moveTo(-.07,.085),u.lineTo(.063,.085),u.lineTo(.06,-.22),u.quadraticCurveTo(.046,-.48,-.055,-.58),u.lineTo(-.07,-.3),u.closePath();let d=new qo(u,{depth:.016,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:8}).rotateX(Math.PI/2).translate(0,.052,-.14);l.push([d,"#bfcbc9"],[ve(.058,.011,.32,.005,.015,.055,-.307),"#8f9d9e"],[ve(.185,.054,.067,.014,0,.04,-.081),i],[ve(.112,.088,.304,.029,0,.032,.104),s]);for(let f=0;f<6;f++)l.push([ve(.121,.095,.025,.008,0,.032,-.006+f*.042),i]);h={x:0,y:.052,z:-.72}}else if(e==="bazooka"){l.push([ct(.102,.64,0,.027,-.28,"z",18),r],[ct(.113,.052,0,.027,-.588,"z",18),i],[ct(.108,.071,0,.027,.058,"z",18),i],[ct(.081,.013,0,.027,-.619),s],[ve(.181,.088,.198,.019,0,-.095,-.22),s],[ve(.206,.06,.324,.017,0,.138,-.24),t],[ve(.096,.079,.121,.016,0,.181,-.1),i],[ve(.057,.026,.012,.006,0,.184,-.034),"#587c77"]);for(let u of[-.519,-.42,-.04])l.push([ct(.106,.026,0,.027,u,"z",18),u===-.42?o:t]);h={x:0,y:.027,z:-.658}}else if(e==="pistol"){l.push([ve(.131,.1,.41,.023,0,.073,-.183),t],[ve(.119,.057,.355,.015,0,.119,-.16),i],[ve(.119,.068,.365,.014,0,.008,-.135),s],[ve(.107,.181,.115,.024,0,-.079,.036).rotateX(-.14),i],[ve(.123,.035,.141,.011,0,-.167,.049),s],[ct(.038,.027,0,.066,-.393),i],[ct(.023,.019,0,.066,-.412),s],[ve(.11,.023,.115,.006,.016,.121,-.17),"#939b9a"],[ve(.095,.028,.043,.006,0,.149,.004),s],[ve(.047,.033,.04,.006,0,.149,-.35),s],[ve(.027,.01,.026,.004,0,.168,-.348),a],[ve(.081,.031,.092,.006,0,-.04,-.183),i]);for(let u=0;u<6;u++){let d=-.017-u*.024;l.push([Ze(.132,.056,.009,0,.082,d).rotateX(.016),s])}h={x:0,y:.066,z:-.438}}else{let u=e==="sniper",d=u?-.855:-.708;l.push([ve(.154,.138,.409,.023,0,.067,-.109),t],[ve(.125,.092,.242,.019,0,.024,.204),i],[ve(.154,.065,.231,.017,0,.084,.264),s],[ve(.151,.172,.143,.019,0,-.085,-.215).rotateX(-.09),s],[ve(.131,.027,.324,.008,0,.147,-.202),s],[ve(.149,.113,.318,.015,0,.072,-.464),u?r:i],[ct(.026,u?.26:.13,0,.071,d+.083),t],[ct(.039,.067,0,.071,d),i],[ct(.025,.009,0,.071,d-.037),s]);for(let f=0;f<7;f++)l.push([ve(.141,.015,.025,.003,0,.161,-.079-f*.039),i]),l.push([Ze(.152,.035,.014,0,.064,-.338-f*.042),s]);u?l.push([ve(.064,.071,.227,.012,0,.172,-.25),i],[ct(.051,.251,0,.233,-.218),s],[ct(.069,.103,0,.233,-.382),i],[ct(.061,.072,0,.233,-.059),i],[ct(.044,.008,0,.233,-.02),"#497d79"],[ct(.041,.034,0,.293,-.2,"y"),t]):l.push([ve(.069,.052,.088,.012,0,.183,-.089),s],[ve(.061,.067,.054,.01,0,.169,-.57),i],[ve(.02,.016,.025,.004,0,.21,-.57),a],[ve(.024,.059,.114,.006,.081,.071,-.081),o]),h={x:0,y:.071,z:d-.067}}return zA(n,e),Is(n,c,l),h}function ld(n,e=()=>{},t="coop"){let i=t==="duel",s=["localhost","127.0.0.1"].includes(location.hostname),r=s?"ws://127.0.0.1:8791/rooms":document.querySelector("meta[name=coop-endpoint]")?.content,o=document.createElement("dialog");if(o.style.cssText="width:min(960px,96vw);max-height:96dvh;background:#173a32;color:#fff6da;padding:12px;overflow:auto",o.innerHTML='<h2>\u5169\u4EBA\u5408\u4F5C \xB7 \u820A\u57CE\u8857\u5340</h2><p role="status"></p><div class="room-controls"><label>\u540D\u7A31 <input maxlength="20" value="\u73A9\u5BB6"></label> <button data-create>\u5EFA\u7ACB\u623F\u9593</button> <label>\u623F\u9593\u78BC <input maxlength="8"></label> <button data-join>\u52A0\u5165</button> <button data-resume hidden>\u91CD\u65B0\u9023\u7DDA</button></div><button data-match-resume hidden>\u7E7C\u7E8C\u64CD\u4F5C</button><button data-ready hidden>\u6E96\u5099\uFF0F\u518D\u6230</button> <button data-exit>\u96E2\u958B\u623F\u9593</button><div data-field hidden><canvas tabindex="0" style="display:block;width:100%;height:min(52vh,450px);touch-action:none"></canvas><p>WASD \u79FB\u52D5 \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u2190\uFF0F\u2192 \u8F49\u5411 \xB7 Q \u7784\u6E96 \xB7 R \u63DB\u5F48 \xB7 E \u958B\u9580\uFF0F\u9577\u6309\u62C6\u89E3 \xB7 F \u67E5\u5E33</p><button data-buy-rocket>\u8CFC\u8CB7\u706B\u7BAD\u7B52 \xB7 350</button><button data-reload>\u63DB\u5F48 R</button><button data-equip>\u5207\u63DB\u6B66\u5668</button><div data-offer hidden></div></div>',o.querySelector("[data-buy-rocket]").title=Ws(),i||o.querySelector("[data-buy-rocket]").insertAdjacentText("afterend"," "+Ws()+" "),i){o.querySelector("h2").textContent="1 \u5C0D 1 \xB7 \u820A\u57CE\u8857\u5340",o.querySelector("[data-field] p").textContent="\u5148\u8D0F\u4E09\u56DE\u5408\u52DD\u51FA\u3002WASD \u79FB\u52D5 \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 \u53F3\u9375\u62D6\u52D5\u8F49\u5411 \xB7 R \u63DB\u5F48 \xB7 E \u958B\u9580";for(let C of["[data-buy-rocket]","[data-equip]"])o.querySelector(C).hidden=!0}o.append(window.PFAPAudio?.controls()??document.createElement("span")),document.body.append(o),o.showModal();let a=C=>o.querySelector(C),c=a("[role=status]"),l=a("canvas"),h=o.querySelectorAll("input"),u=new AbortController,d=(C,V,q)=>C.addEventListener(V,q,{signal:u.signal}),f,g,_,m,p=0,x,A,E,P,R,T,U=!1,v=!1,b=0,F=0,X=0,ne=null,L=!1,z=!1,k=new Set,$=new Map,Q=C=>{f?.readyState===1&&f.send(JSON.stringify({v:3,seq:++p,...C}))},Y,ie=()=>{k.clear(),U=v=!1,b=0,W()},ee=()=>Y?Y.clear():ie(),ue=()=>x?.phase==="playing"&&!L&&a("[data-offer]").hidden&&x.players.some(C=>C.id===g&&C.hp);function W(){let C=ue();Q({type:"input",f:C?Number(k.has("KeyW"))-Number(k.has("KeyS")):0,r:C?Number(k.has("KeyD"))-Number(k.has("KeyA")):0,fire:C&&(U||k.has("KeyX")||performance.now()<b),use:C&&k.has("KeyE"),yaw:F,pitch:X})}let j,de,Me,Ae=new Map,Ne=0,Be=0,Se=[],Le=0;function I(C){let V=Math.min(1,(C-Ne)/100),q=x.projectiles.map(K=>{let ae=Ae.get(K.id)?.position||K.previousPosition,re=K.position;return{...K,position:{x:ae.x+(re.x-ae.x)*V,y:ae.y+(re.y-ae.y)*V,z:ae.z+(re.z-ae.z)*V}}});Me.update(q,Se.splice(0),Math.min(.1,(C-Be)/1e3)),Be=C}let ce=new D,Z=matchMedia("(prefers-reduced-motion: reduce)");function se(C,V,q,K,ae,re,_e){let pe=$.get(C);if(!pe){let Pe=new ht;Pe.position.set(V,0,q),E.add(Pe);let be=Ds(Pe,K);_e&&(be.chassis.color.setHex(5674136),be.visor.material.color.setHex(10092530)),pe={root:Pe,art:be},$.set(C,pe)}let{root:Ee,art:te}=pe;if(Ee.visible=ae,!ae)return;let qe=V-Ee.position.x,Oe=q-Ee.position.z;Ee.position.x+=qe*.35,Ee.position.z+=Oe*.35;let Ce=Math.hypot(qe,Oe);re!=null?Ee.rotation.y=Math.PI+re:Ce>.005&&(Ee.rotation.y=Math.atan2(qe,Oe));let Te=Z.matches?0:Math.min(.42,Ce*3),xe=performance.now()/114;for(let[Pe,be]of te.legs.entries()){let $e=Math.sin(xe+Pe*Math.PI)*Te;be.rotation.x=$e,te.arms[Pe].rotation.x=-$e*.6}}function J(){A=new Oi({canvas:l,antialias:matchMedia("(pointer:fine)").matches}),E=new bs,P=new Dt(72,1,.08,65),E.add(P);let C=Wi(1),V=oa(E,C.walls,C.doors,1),{theme:q,doorViews:K}=V;E.background=new He(q.sky),E.fog=new Ms(q.fog,27,61),E.add(new Ts("#fff0d1",q.cold,1.85));let ae=new Rs(q.bright,2.05);ae.position.set(6,15,8),E.add(ae);let re=new Map(K.map(Ee=>[Ee.d.id,Ee])),_e=performance.now(),pe=(Ee=performance.now())=>{let te=Math.min(.05,(Ee-_e)/1e3);_e=Ee,ue()&&(F+=(Number(k.has("ArrowLeft"))-Number(k.has("ArrowRight")))*te*1.9);let qe=v?54:72;if(P.fov!==qe&&(P.fov=qe,P.updateProjectionMatrix()),R=requestAnimationFrame(pe),!x||!l.clientWidth)return;let Oe=x.players.find(be=>be.id===g),Ce=Oe?.hp?Oe:x.players.find(be=>be.hp)||Oe;if(!Ce)return;let Te=l.clientWidth,xe=l.clientHeight;(l.width!==Te||l.height!==xe)&&(A.setSize(Te,xe,!1),P.aspect=Te/xe,P.updateProjectionMatrix()),ce.set(Ce.x,1.55,Ce.z),ne||(ne=ce.clone()),ne.lerp(ce,.34),P.position.copy(ne),Le=Math.max(0,Le-.009),P.rotation.set(X+Le,F,0,"YXZ");for(let be of x.doors){let $e=re.get(be.id);$e&&($e.group.position.y+=((be.open?be.h+2:be.h/2)-$e.group.position.y)*.25,$e.status.material.color.setHex(be.open?8767136:15117669))}let Pe=x.verified?8443050:x.time<10?15960688:15578723;V.strip.material.color.setHex(Pe),V.lamp.material.color.setHex(Pe);for(let be of x.bots)se("b"+be.id,be.x,be.z,be.id,be.hp>0,null,!1);for(let be of x.players)se(be.id,be.x,be.z,1,be.id!==Ce.id&&be.hp>0,be.yaw,!i);Oe?.weapon!==de&&(j&&(P.remove(j),j.traverse(be=>{be.geometry?.dispose(),be.material?.dispose()})),de=Oe?.weapon,j=new ht,j.position.set(.34,-.33,-.65),j.scale.setScalar(.74),P.add(j),aa(j,de||"pistol")),Me&&I(performance.now()),A.render(E,P)};pe()}function we(){let C=x.players.find(V=>V.id===g);C&&(c.textContent="\u623F\u9593 "+_+" \xB7 "+x.players.map(V=>V.name+" "+V.hp+" HP"+(V.online?V.ready?"\uFF08\u5DF2\u6E96\u5099\uFF09":"":"\uFF08\u96E2\u7DDA\uFF09")).join(" \uFF0F ")+" \xB7 "+(x.phase==="playing"?Math.ceil(x.time)+" \u79D2 \xB7 \u5F48\u5323 "+C.ammo+" / \u5099\u5F48 "+C.reserve+(C.reload?" \xB7 \u63DB\u5F48 "+C.reload.toFixed(1)+"s":"")+" \xB7 "+(x.verified?"\u5DF2\u6838\u5BE6":"\u5230\u5317\u9762\u67E5\u5E33")+" \xB7 \u62C6\u89E3 "+x.progress.toFixed(1)+"/5 \u79D2"+(L?" \xB7 \u9078\u55AE\u958B\u555F\uFF0C\u5408\u4F5C\u5C0D\u5C40\u7E7C\u7E8C":""):x.result||"\u7B49\u5019\u5169\u4EBA\u6E96\u5099"),i&&(c.textContent="\u623F\u9593 "+_+" \xB7 "+x.players.map(V=>V.name+" "+(x.wins?.[V.id]||0)+" \u52DD \xB7 "+V.hp+" HP").join(" \uFF0F ")+" \xB7 "+(x.phase==="playing"?Math.ceil(x.time)+" \u79D2 \xB7 \u5F48\u5323 "+C.ammo+" / "+C.reserve:x.result||"\u7B49\u5019\u5169\u4EBA\u6E96\u5099")),a("[data-buy-rocket]").disabled=!C.hp||C.launcher||C.credits<350,a("[data-reload]").disabled=!C.hp||C.reload>0||!C.reserve||C.ammo>=je[C.weapon].mag,a("[data-equip]").disabled=!C.hp||!C.launcher,!i&&x.phase==="playing"&&(c.textContent+=" \xB7 \u88DD\u5099\u9EDE "+C.credits+" \xB7 "+(C.weapon==="bazooka"?"\u706B\u7BAD\u7B52":"\u624B\u69CD")),a("[data-match-resume]").hidden=x.phase!=="playing"||!L,a("[data-ready]").hidden=x.phase==="playing",a("[data-ready]").disabled=C.ready,a("[data-field]").hidden=x.phase!=="playing",a("[data-offer]").hidden=i||!(x.phase==="playing"&&C.hp&&C.checked&&!x.verified&&Math.hypot(C.x,C.z+13)<2.7),x.phase==="playing"&&!A&&J())}function fe(C){if(f&&f.readyState<2)return;let V;try{V=JSON.parse(sessionStorage.getItem("coop-room-session"))}catch{}let q=new URL(r);q.searchParams.set("action",C),C!=="create"&&q.searchParams.set("code",C==="reconnect"?V?.code:h[1].value.trim().toUpperCase()),f=new WebSocket(s?r:q),c.textContent="\u9023\u7DDA\u4E2D\u2026",f.onopen=()=>Q({type:C,mode:t,code:C==="reconnect"?V?.code:h[1].value.trim().toUpperCase(),token:C==="reconnect"?V?.token:void 0,name:h[0].value}),f.onmessage=K=>{let ae=JSON.parse(K.data);if(ae.v!==3){c.textContent="\u5408\u4F5C\u7248\u672C\u4E0D\u540C\uFF0C\u8ACB\u66F4\u65B0\u904A\u6232\u540C\u623F\u9593\u4F3A\u670D\u5668\u3002",f.close();return}if(ae.type==="joined"){({id:g,code:_,token:m}=ae);try{sessionStorage.setItem("coop-room-session",JSON.stringify({code:_,token:m}))}catch{}a(".room-controls").hidden=!0;return}if(ae.type==="state"){let re=x?.round!==ae.round;if(!re&&ae.phase==="playing")for(let pe of ae.players){let Ee=x.players.find(te=>te.id===pe.id);pe.shot&&Ee&&pe.shot>(Ee.shot??0)&&["pistol","bazooka"].includes(pe.shotWeapon)&&(e("shot-"+pe.shotWeapon),pe.id===g&&pe.shotWeapon==="pistol"&&(Le=Math.min(.19,Le+.043)),pe.shotWeapon==="bazooka"&&e("rocket-flight")),pe.id===g&&pe.reload>0&&Ee&&!Ee.reload&&e("reload")}Ae=new Map((re?[]:x.projectiles).map(pe=>[pe.id,pe])),(re||ae.phase!=="playing")&&(Me?.dispose(),Me=null,Se=[]);let _e=ue();x=ae,re&&ae.phase==="playing"&&(F=i&&ae.players.find(pe=>pe.id===g)?.z<0?Math.PI:0,X=0,ne=null,Le=0),Ne=performance.now(),we(),_e&&!ue()&&ee(),x.phase==="playing"&&(Me??=ta(E,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,onImpact:n}),Se.push(...ae.impacts))}else ae.type==="error"&&(c.textContent=ae.message)},f.onerror=()=>c.textContent="\u623F\u9593\u4F3A\u670D\u5668\u672A\u80FD\u9023\u7DDA\u3002",f.onclose=()=>{z||(ee(),a("[data-field]").hidden=a("[data-ready]").hidden=!0,a(".room-controls").hidden=!1,a("[data-resume]").hidden=!m,c.textContent+=" \xB7 \u9023\u7DDA\u5DF2\u95DC\u9589")}}function S(){ee(),z=!0,clearInterval(T),cancelAnimationFrame(R),u.abort(),Me?.dispose(),f?.close(),E?.traverse(C=>{C.geometry?.dispose(),C.material?.map?.dispose(),C.material?.dispose()}),A?.dispose(),A?.forceContextLoss(),o.remove()}if(a("[data-exit]").onclick=S,a("[data-match-resume]").onclick=()=>{L=!1,ee(),x&&we(),l.focus()},d(o,"cancel",C=>{C.preventDefault(),L=!0,ee(),x&&we()}),d(window,"pagehide",S),window.offlineEdition||!r){a(".room-controls").hidden=!0,c.textContent=window.offlineEdition?"\u96E2\u7DDA\u7248\u53EF\u73A9\u55AE\u4EBA\uFF1B1 \u5C0D 1 \u9700\u8981\u7DB2\u7D61\u3002":"\u516C\u958B\u623F\u9593\u4F3A\u670D\u5668\u5C1A\u672A\u9023\u63A5\u3002";return}try{a("[data-resume]").hidden=!sessionStorage.getItem("coop-room-session")}catch{}a("[data-create]").onclick=()=>fe("create"),a("[data-join]").onclick=()=>fe("join"),a("[data-resume]").onclick=()=>fe("reconnect"),a("[data-ready]").onclick=()=>Q({type:"ready"}),a("[data-buy-rocket]").onclick=()=>{Q({type:"buy",item:"bazooka"}),Q({type:"equip",weapon:"bazooka"}),l.focus()},a("[data-reload]").onclick=()=>{Q({type:"reload"}),l.focus()},a("[data-equip]").onclick=()=>{Q({type:"equip",weapon:x.players.find(C=>C.id===g)?.weapon==="bazooka"?"pistol":"bazooka"}),l.focus()};let y=a("[data-offer]");y.textContent=si[0].q+" \u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\uFF0C\u5168\u968A\u4EFB\u52D9\u5931\u6557\u3002",si[0].answers.forEach((C,V)=>{let q=document.createElement("button");q.textContent=C,q.onclick=()=>Q({type:"answer",answer:V}),y.append(q)}),Y=na({on:d,canvas:l,active:ue,look(C,V){let q=v?.0018:.003;F-=C*q,X=Math.max(-1.2,Math.min(1.2,X-V*q))},fire(C){U=C,C&&(b=performance.now()+70,W())},clearInput:ie}),d(o,"keydown",C=>{if(!ue()||C.target.matches("input,select,textarea")||!["KeyW","KeyA","KeyS","KeyD","KeyX","KeyQ","KeyE","KeyF","KeyR","ArrowLeft","ArrowRight"].includes(C.code)||(C.preventDefault(),k.add(C.code),C.repeat))return;C.code==="KeyX"&&(b=performance.now()+70,W()),C.code==="KeyQ"&&(v=!v);let V={KeyE:"door",KeyF:"check",KeyR:"reload"}[C.code];V&&Q({type:V})}),d(window,"keyup",C=>k.delete(C.code)),d(window,"blur",ee),d(document,"visibilitychange",()=>{document.hidden&&ee()}),T=setInterval(()=>{x?.phase==="playing"&&W()},75),c.textContent="\u5EFA\u7ACB\u623F\u9593\u5F8C\uFF0C\u5C07\u516B\u4F4D\u623F\u9593\u78BC\u4EA4\u7540\u968A\u53CB\u3002"}function hd(n){return globalThis.siteLocale?.text(n)??n}var _l=Object.freeze({x:0,z:-13,name:"\u5317\u9762\u7D42\u7AEF"}),ud=Object.freeze({q:"\u963F\u4FCA\u8AD7\u4F4F\u501F HK$20,000 \u66AB\u6642\u9084\u820A\u5361\u6578\u3002\u78BA\u8A8D\u4E4B\u524D\u61C9\u8A72\u9EDE\u505A\uFF1F",answers:["\u66AB\u505C\u78BA\u8A8D\uFF0C\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB","\u5148\u501F\u65B0\u9322\u66AB\u6642\u9084\u820A\u5361\u6578"],right:0,why:"\u66AB\u505C\u64B3\u78BA\u8A8D\u3002\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB\uFF0C\u518D\u540C\u963F\u4FCA\u4E00\u9F4A\u67E5\u6E05\u695A\u820A\u6B20\u6B3E\u3002"}),BA=[{x:-12,z:-13,name:"\u897F\u5DF7\u63A5\u6536\u7AD9"},{x:12,z:-13,name:"\u6771\u5074\u8CA8\u53F0"},{x:13,z:-14,name:"\u6771\u5317\u77AD\u671B\u53F0"}],kA=[{id:"verify",title:"\u6838\u5C0D\u53CA\u62C6\u89E3",brief:"\u53BB\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u8CC7\u6599\uFF0C\u6309\u4F4F E \u62C6\u89E3\u3002"},{id:"dispatch",title:"\u96D9\u7AD9\u63A5\u529B",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\u4E26\u6309\u4F4F E \u6574\u7406\u8A18\u9304\uFF0C\u518D\u53BB\u63A5\u6536\u7AD9\u6309\u4F4F E \u4EA4\u63A5\u3002"},{id:"hold",title:"\u5B88\u4F4F\u4E0A\u50B3\u9EDE",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\uFF0C\u518D\u53BB\u6307\u5B9A\u5730\u9EDE\u7559\u55BA\u7BC4\u570D\u5167\u76F4\u81F3\u4E0A\u50B3\u5B8C\u6210\u3002"}],Al=BA.flatMap((n,e)=>kA.map(t=>({...t,id:e+1+"-"+t.id,mode:t.id,round:e+1,map:Wi(e+1).name,second:n})));function dd(n){let e=Al.find(t=>t.id===n);return e?{mission:e,stage:0,complete:!1}:null}function xl(n,e,t=!1){let i=n?.stage??0,s=n?.mission.mode??"verify";return e?s==="hold"?{point:n.mission.second,kind:"upload",seconds:8}:s==="dispatch"?i===0?{point:_l,kind:"prepare",seconds:t?2:3}:{point:n.mission.second,kind:"handoff",seconds:4}:{point:_l,kind:"defuse",seconds:t?3:5}:{point:_l,kind:"check",seconds:t?3:5}}function Ls(n,e,t=2.7){return Math.hypot(n.x-e.x,n.z-e.z)<t}function fd(n,e,t,i){if(n?.complete)return null;let s=xl(n,e.verified,e.purchases.includes("kit"));return e.phase!=="playing"||s.kind==="check"||!Ls(e,s.point)||!t&&s.kind!=="upload"?(e.defuse=0,null):(e.defuse=Math.min(s.seconds,e.defuse+i),e.defuse+1e-9<s.seconds?null:n?.mission.mode==="dispatch"&&n.stage===0?(n.stage=1,e.defuse=0,"relay"):(n&&(n.complete=!0),"complete"))}var ca={follow:"\u8DDF\u96A8",hold:"\u5B88\u4F4D",cover:"\u63A9\u8B77",advance:"\u7A81\u7834"};function pd(n,e){return[[-1.4,15.6],[1.6,15.2],[0,16.5]].map(([t,i],s)=>{let r=new ht,o=Ds(r,s);return r.position.set(t,0,i),o.chassis.color.set("#397c73"),o.visor.material.color.set("#abf4d5"),n.add(r),{id:s,x:t,z:i,mesh:r,art:o,plan:[],refresh:s*.2,action:1+s*.3,open:!An(t,i,.33,e)}})}function md(n,e,t,i,s,r,o,a,c){for(let l of n){if(!l.open)continue;let h=e==="advance"?i:e==="follow"?{x:t.x+(l.id-1)*1.16,z:Math.min(16.5,t.z+1.7+l.id*.5)}:null;if(l.refresh-=o,h&&l.refresh<=0){l.refresh=.9+l.id*.11;let f=Math.hypot(l.x-h.x,l.z-h.z);l.plan=f<1.2?[]:Xs(l.x,l.z,h.x,h.z,r)?zr(l.x,l.z,h.x,h.z,r):[h]}let u=h&&l.plan[0];if(u){let f=u.x-l.x,g=u.z-l.z,_=Math.hypot(f,g);if(_<.45)l.plan.shift();else{let m=Math.min(2.8*o,_)/_;Or(l,f*m,g*m,r),l.mesh.position.set(l.x,0,l.z),l.mesh.rotation.y=Math.atan2(f,g)}}for(let[f,g]of l.art.legs.entries())g.rotation.x=u?Math.sin(a*9+f*Math.PI)*.34:0;if(l.action-=o,l.action>0||!["cover","advance"].includes(e))continue;l.action=1.7+l.id*.12;let d=s.find(f=>f.hp>0&&Math.hypot(l.x-f.x,l.z-f.z)<10&&!Xs(l.x,l.z,f.x,f.z,r));d&&c(l,d)}}function HA(n={}){n=n&&typeof n=="object"?n:{};let e=(t,i,s,r)=>Number.isFinite(t)?Math.min(s,Math.max(i,t)):r;return{sensitivity:e(n.sensitivity,.25,3,1),ads:e(n.ads,.2,1.5,.45),volume:e(n.volume,0,1,.65),invert:n.invert===!0,camera:"free",reduced:n.reduced===!0}}function yl(n,e={}){return HA(n??e)}function gd(n,e,t,i){let s=.0022*i.sensitivity*(t?i.ads:1),r=Number.isFinite(n)?n:0,o=Number.isFinite(e)?e:0;return{yaw:r*s,pitch:o*s*(i.invert?-1:1)}}var vl=new Map,De=n=>{if(!vl.has(n)){let e=document.getElementById(n);return e&&vl.set(n,e),e}return vl.get(n)},Cn=De("world"),Md=new AbortController,ut=new Set,la=new Zo,Hs=document.createElement("label");Hs.id="squad-control";Hs.hidden=!0;Hs.innerHTML='\u5C0F\u968A <select aria-label="\u5C0F\u968A\u6307\u4EE4">'+Object.entries(ca).map(([n,e])=>'<option value="'+n+'">'+e+"</option>").join("")+"</select>";document.body.append(Hs);var da=Hs.querySelector("select"),GA=[...document.querySelectorAll("[data-weapon]")],wl=null,Tl=null,_d=0,Us=!0,Ir=!1,bd=[],Ns=null,Hi=null,Rn=null,bl=null,wn=null,Vt=null;try{let n=localStorage.getItem("fps-preferences-v2"),e=localStorage.getItem("fps-preferences-v1");Vt=yl(n?JSON.parse(n):null,JSON.parse(e||"{}"))}catch{Vt=yl(null)}var Fn=0,Tr=0,mt=Vl(),Rl=[],gn=!1,Rr=!1,Sd=0,ga=!1,M=Si(),Kt,St,It,pn,mn,Zt=0,vi=0,_a=0,en=[],Os=[],Cr=[],Ed=[],rn=0,zs=0,Pn=!1,_n=!1,On=Vt.reduced||matchMedia("(prefers-reduced-motion:reduce)").matches,Sl=0,El=0,Sr=0,wr=0,Fs=0,Er=0,Aa=!1,gt=!1,Ie=null,Ad=/^mission-([1-3]-(?:verify|dispatch|hold))$/.exec(window.arcadeTest?.target??""),ni=[],Bs="follow",Ut=()=>window.arcadeStory?.id==="verify",wd={q:"\u4FE1\u7528\u5361\u7D50\u6B20 HK$4,000\uFF0C\u6700\u4F4E\u9084\u6B3E HK$200\u3002\u6263\u9664\u57FA\u672C\u751F\u6D3B\u8CBB\u5F8C\uFF0C\u5269 HK$800\u3002\u61C9\u8A72\u9EDE\u5B89\u6392\uFF1F",answers:["\u53EA\u4ED8\u6700\u4F4E\u984D\uFF0C\u5C07\u5176\u9918\u7528\u569F\u6D88\u8CBB","\u9810\u7559\u5FC5\u8981\u958B\u652F\uFF0C\u518D\u591A\u9084\u6B20\u6B3E\u540C\u6838\u5C0D\u5229\u606F"],right:1,why:"\u6700\u4F4E\u9084\u6B3E\u53EA\u4FC2\u9580\u6ABB\u3002\u5148\u4FDD\u7559\u57FA\u672C\u958B\u652F\uFF0C\u518D\u76E1\u91CF\u591A\u9084\u4E26\u6838\u5C0D\u5229\u606F\u8207\u9084\u6B3E\u671F\u9650\u3002"},Cl=()=>Ut()?ud:M.round===4?wd:si[M.round-1],Td="fps-missions-v1",zn=()=>xl(Ie,M.verified,M.purchases.includes("kit")),nt=(n,e,t,i={})=>n.addEventListener(e,t,{...i,signal:Md.signal});nt(da,"change",()=>{if(!(M.phase!=="playing"||!ni.length||!Object.hasOwn(ca,da.value))){Bs=da.value;for(let n of ni)n.refresh=0;M.feedback="\u5C0F\u968A\u6307\u4EE4 \xB7 "+ca[Bs],Cn.focus()}});var Gt=window.PFAPAudio,$t=n=>Gt?.play(n);function ks(){Gt?.setVolume(Vt.volume)}function VA(){if(!Gt?.enabled("bgm")||M.phase!=="playing"||gt)return;let n=Gt.now();if(!n||n<El)return;let e=[110,98,130.81,87.31][Math.floor(Sr/16)%4];Gt.note(e*(Sr%2?2:1),.14,.025,"triangle"),Sr%4===0&&Gt.note(58,.12,.07),Sr%4===2&&Gt.note(800,.03,.012,"square"),Sr++,El=n+.2}function ha(n,e,t,i,s=0,r=0,o=0,a=St){let c=new xt(new un(n,e,t),new Ai({color:i,roughness:.85}));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a.add(c),c}function fa(n,e="#254f48"){let t=document.createElement("canvas");t.width=512,t.height=128;let i=t.getContext("2d"),s=new Ss(t),r=new zo(new fr({map:s}));return r.userData.localize=()=>{i.fillStyle=e,i.fillRect(0,0,512,128),i.strokeStyle="#e9d59e",i.lineWidth=6,i.strokeRect(6,6,500,116),i.fillStyle="#fff4d5",i.textAlign="center",i.textBaseline="middle",i.font="bold 37px Microsoft JhengHei,sans-serif",i.fillText(hd(n),256,65,475),s.needsUpdate=!0},r.userData.localize(),r.scale.set(4.2,1.05,1),r}function WA(){St=new bs,St.fog=new Ms,It=new Dt(76,1,.05,100),It.rotation.order="YXZ",St.add(It),Kt=new Oi({antialias:matchMedia("(pointer:fine)").matches,powerPreference:"high-performance"}),Kt.outputColorSpace=At,Kt.shadowMap.type=cl,Cn.append(Kt.domElement),bl=new Ts("#fff0d1","#4d6d59",1.85),St.add(bl),wn=new Rs("#ffe3b6",2.05),wn.position.set(6,15,8),wn.castShadow=!0,wn.shadow.mapSize.set(512,512),wn.shadow.camera.left=-23,wn.shadow.camera.right=23,wn.shadow.camera.top=23,wn.shadow.camera.bottom=-23,wn.shadow.normalBias=.03,St.add(wn),Rd(),Pl(),Dr()}function Rd(){Ns&&yi(Ns),Hi=Gl(M.round),mt=Hi.doors,Ns=new ht,St.add(Ns),Rn=oa(Ns,ii,mt,M.round);let{theme:n,station:e}=Rn;Ed=Rn.wallRays,Rl=Rn.doorViews,St.background=new He(n.sky),St.fog.color.set(n.fog),St.fog.near=27,St.fog.far=64,wn.color.set(n.bright),bl.groundColor.set(n.cold),document.body.dataset.court=String(M.round);let t=fa("\u5317\u9762\u7D42\u7AEF \xB7 \u67E5\u5E33 F","#264745");t.position.set(0,1.55,0),t.scale.set(2.6,.65,1),e.add(t);let i=fa("\u5DF2\u6838\u5BE6 \xB7 \u4F9D\u7167\u756B\u9762\u6307\u793A","#264745");i.position.copy(t.position),i.scale.copy(t.scale),i.visible=!1,e.add(i),Rn.stationSign=t,Rn.verifiedSign=i;let s=fa(Hi.name,"#374d50");s.position.set(0,4,17.3),Ns.add(s)}function Pl(){pn&&yi(pn),pn=new ht,It.add(pn),pn.position.set(.34,-.33,-.65),pn.scale.setScalar(.74);let n=aa(pn,M.weapon);mn=new xt(new ti(.07,.17,7),new kt({color:"#ffe5a3"})),mn.rotation.x=-Math.PI/2,mn.position.set(n.x,n.y,n.z),mn.visible=!1,pn.add(mn)}function Cd(n){Ql(M,n)&&(gn=!1,Pl(),M.feedback=je[n].label)}function XA(){return M.weapon!=="knife"&&(M.weapon!=="sniper"||M.cooldown<=0)}function Pd(){M.phase==="playing"&&!gt&&XA()&&(gn=!gn)}function Id(){M.phase==="playing"&&!gt&&M.jumpY===0&&(M.vy=5.3,Rr=!1,M.crouch=!1)}function Dd(){if(M.phase!=="playing"||gt)return!1;let n=mt.filter(e=>Math.hypot(e.x-M.x,e.z-M.z)<2.7).sort((e,t)=>Math.hypot(e.x-M.x,e.z-M.z)-Math.hypot(t.x-M.x,t.z-M.z))[0];return n?n.open&&Math.abs(M.x-n.x)<n.w/2+.45&&Math.abs(M.z-n.z)<n.d/2+.45?(M.feedback="\u5148\u96E2\u958B\u9580\u6846\uFF0C\u518D\u95DC\u9580\u3002",!0):(n.open=!n.open,en.forEach(e=>e.navTime=0),M.feedback=n.open?"\u9580\u5DF2\u958B\uFF1B\u7559\u610F\u9580\u5F8C\u3002":"\u9580\u5DF2\u95DC\u3002",$t("lever_click"),!0):!1}function yi(n){n.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map?.dispose(),i.dispose()})}),n.removeFromParent()}var xi=[],Gi;function xa(){xi=[],Gi?.dispose(),Gi=null,en.forEach(n=>yi(n.mesh)),en=[],ni.forEach(n=>yi(n.mesh)),ni=[],Os.forEach(n=>yi(n.mesh)),Os=[],Cr.forEach(n=>yi(n.mesh)),Cr=[],gt=!1,De("terminal").hidden=!0,wr=Fs=0,Pn=_n=!1,ut.clear()}function qA(n,e,t){let i=new ht;i.position.set(n,0,e),St.add(i);let s=Il()?59:90+(M.round-1)*10,r={mesh:i,x:n,z:e,hp:s,maxHp:s,rewarded:!1,dying:0,nav:[],navTime:t*.05,patrol:t,shoot:2+t*.3,ammo:9,reload:0,burst:0,burstClock:0,alertUntil:0,origin:{x:n,z:e},id:t},o=Ds(i,t);r.parts=o.legs,r.arms=o.arms,r.chassisMaterial=o.chassis,r.visor=o.visor,r.motion=0;let a=ha(.75,.75,.5,"#fff",0,1.05,0,i),c=ha(.65,.45,.5,"#fff",0,1.7,0,i);a.visible=c.visible=!1,a.userData.enemy=r,c.userData.enemy=r,c.userData.head=!0;let l=fa(["\u4FE1\u7528\u5361\u8D85\u652F","\u60C5\u7DD2\u8AB2\u91D1","\u5206\u671F\u758A\u52A0","\u6E4A\u55AE\u885D\u52D5","\u6700\u4F4E\u9084\u6B3E"][t%5],"#3c4648");l.position.y=2.44,l.scale.set(1.92,.48,1),i.add(l);let h=new ht;return h.position.y=2.16,i.add(h),r.meter=h,ha(1.15,.12,.05,"#273535",0,0,0,h),r.bar=ha(1.08,.08,.06,"#a9d975",0,0,.04,h),r}function YA(){if(!QA())return;let n=/^round-([1-3])$/.exec(window.arcadeTest?.target??"");n&&!Ie&&(M.round=Number(n[1])),JA()}function QA(){return M.phase==="buy"}function JA(){if(!Jl(M))return;(M.round===1||Ie)&&window.arcadeRun?.start("defence",Ie?.training?null:Ie?.mission.id??"quick"),xa(),Rd(),vi=performance.now(),rn=0,zs=0,Zt=0,Er=0,Sl=0,gn=!1,Rr=!1,Fn=0,mt.forEach(e=>e.open=!1),Pl();let n=ZA();bd=n;for(let e=0;e<(Ut()?2:Math.min(n.length,M.round===4?14:Hl[M.round-1]));e++){let t=qA(...n[e],e);t.maxHp=Math.ceil(t.maxHp*Ur(M.round).health),t.hp=t.maxHp,en.push(t)}Bs="follow",Ie?.training?M.time=180:Ie&&(ni=pd(St,mt)),M.feedback=Ie?.training?"\u7DF4\u7FD2\u5834 \xB7 \u6A5F\u68B0\u9776\u5514\u6703\u9084\u64CA\u3002\u53EF\u4EE5\u7DF4\u7FD2\u79FB\u52D5\u3001\u958B\u9580\u3001\u67E5\u5E33\u540C\u62C6\u89E3\u3002":Ie?Ie.mission.brief:"100 \u751F\u547D\u503C \xB7 \u5229\u7528\u63A9\u9AD4\u5230\u5317\u9762\u67E5\u5E33\u62C6\u5F48\uFF0C\u6BCB\u9808\u6D88\u6EC5\u6240\u6709\u6575\u4EBA\u3002",ks(),Nt(),Cn.focus()}function ZA(){let n=[[-12,5],[12,0],[-11,-11],[11,-13],[3,-14],[-13,-1],[13,10]];for(let e of[-14,-9,-3,3,9])for(let t of[-14,-10,-5,0,5,10,14])!An(t,e,.55,mt)&&Math.hypot(t,e-14)>8&&n.every(i=>Math.hypot(t-i[0],e-i[1])>2.5)&&n.push([t,e]);return n.filter(([e,t])=>!An(e,t,.55,mt))}var Ld;function Bn(){Ld?.clear(),Pn=!1,gn=!1}function Il(){return M.round===1&&!Ie&&!Ut()&&!window.arcadeTest}function ya(){if(M.phase!=="playing"||gt||M.reload>0||M.cooldown>0)return;let n=je[M.weapon],e=M.weapon==="knife";if(!e&&M.ammo<=0){wa(M)?va():(M.feedback="\u5099\u5F48\u7528\u76E1\uFF0C\u8ACB\u5207\u63DB\u6B66\u5668\u3002",$t("lever_click"));return}if(e?M.melee++:(M.ammo--,M.shots++),M.cooldown=n.cooldown,M.weaponReady[M.weapon]=n.cooldown,Sd=Zt+(e?.1:1),mn.visible=!e,mn.userData.life=e?0:.065,e?$t("slide"):Pr("shot-"+M.weapon),It.position.set(M.x,M.y,M.z),It.rotation.set(zs+Fn,rn,0,"YXZ"),St.updateMatrixWorld(!0),la.setFromCamera(new oe,It),M.weapon==="bazooka"){let r={x:M.x,y:M.y,z:M.z};Pr("rocket-flight"),xi.push(jl("solo",r,la.ray.direction,Zt));return}let t=[...Ed,...Rl.filter(r=>!r.d.open).map(r=>r.mesh),...en.filter(r=>r.hp>0).flatMap(r=>r.mesh.children.filter(o=>o.userData.enemy))],i=la.intersectObjects(t,!1).find(r=>r.distance<=n.range),s=i?i.point:la.ray.at(n.range,new D);if(!e){let r=new Bo(new Mt().setFromPoints([It.localToWorld(new D(.3,-.3,-.7)),s]),new pr({color:"#ffe1a0",transparent:!0,opacity:.8}));St.add(r),Cr.push({mesh:r,life:.1})}if(i?.object.userData.enemy){let r=i.object.userData.enemy,o=Kl(M,r,!!i.object.userData.head);o&&(r.chassisMaterial.emissive.setHex(10376224),e||M.hits++,Fs=.13,Tr=o.head?1.1:Tr,$t("hit_tick"),r.bar.scale.x=r.hp/r.maxHp,r.bar.position.x=-(1-r.hp/r.maxHp)*.54,o.killed&&($t("hit_tick"),r.dying=.001,M.feedback=(o.head?"\u7206\u982D\uFF01":"\u76EE\u6A19\u505C\u6A5F\u3002")+" +100 \u91D1\u5E63"))}M.weapon==="sniper"&&(gn=!1,M.feedback="\u9000\u93E1\u62C9\u6813\u4E2D \xB7 "+n.cooldown.toFixed(1)+"s"),M.weapon==="carbine"?(Fn=Math.min(.22,Fn+.0231),rn+=(Math.random()-.5)*.0098):M.weapon==="pistol"&&(Fn=Math.min(.19,Fn+.043))}function Pr(n){n.startsWith("shot-")?$t("shoot"):n==="rocket-impact"?$t("shield_break"):n==="reload"&&$t("buy_equip")}function va(){M.phase!=="playing"||gt||!Xl(M)||(M.feedback="\u63DB\u5F48\u4E2D\u2026",$t("buy_equip"))}function Nd(){ks(),On=Vt.reduced;try{localStorage.setItem("fps-preferences-v2",JSON.stringify(Vt))}catch{M.feedback="\u8A2D\u5B9A\u9069\u7528\u65BC\u4ECA\u6B21\u904A\u73A9\u3002"}}function KA(){Vi(),Bn();for(let n of["sensitivity","ads","volume"])De("setting-"+n).value=Vt[n],De(""+n+"-output").textContent=n==="volume"?Math.round(Vt[n]*100)+"%":Vt[n].toFixed(2)+"\xD7";De("setting-invert").checked=Vt.invert,De("setting-reduced").checked=On,De("settings-dialog").showModal()}function $A(){De("view-status").textContent="",M.phase="playing",vi=performance.now(),ks(),El=Gt?.now()||0,Nt(),Cn.focus()}function Ud(){M.phase!=="paused"||Ir||De("settings-dialog").open||$A()}async function Fd(){De("view-status").textContent="",M.phase==="playing"&&Vi(),Bn();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),Dr()}catch{De("view-status").textContent="\u700F\u89BD\u5668\u672A\u80FD\u5207\u63DB\u5168\u87A2\u5E55\u3002\u6309 V \u91CD\u8A66\uFF0C\u6216\u4EE5\u8996\u7A97\u6A21\u5F0F\u7E7C\u7E8C\u3002"}}function jA(n){let e=new xt(new Es(.1,6,6),new kt({color:"#ff8e56"}));e.position.set(n.x,1.4,n.z),St.add(e);let t=M.x-n.x,i=M.z-n.z,s=(M.crouch?.55:1.05)+M.jumpY-1.4,r=Math.hypot(t,i,s)||1,o=11*Ur(M.round).projectile;Os.push({mesh:e,x:n.x,y:1.4,z:n.z,vx:t/r*o,vy:s/r*o,vz:i/r*o,life:4}),n.ammo--,n.burst--;let a=Il()?.7:1;n.burstClock=.15/a,n.burst===0&&(n.shoot=(2.9-M.round*.2)/a),n.ammo===0&&(n.reload=2.2,n.burst=0)}function Vi(){M.phase==="playing"&&(M.phase="paused",window.gameAudio?.pause(),Pn=_n=!1,ut.clear(),Bn(),Gt?.stopEffects(),Nt())}function Od(){if(M.phase!=="playing"||Ie&&M.verified)return;if(!Ls(M,zn().point,3)){M.feedback="\u5148\u5230\u5317\u9762\u8CA1\u52D9\u70B8\u5F48\u65C1\u908A\uFF0C\u64B3 F \u67E5\u5E33\u3002";return}M.checked=!0,gt=!0,ut.clear(),Gt?.stopEffects(),Bn();let n=Cl();De("terminal").innerHTML="<h2>\u5148\u67E5\u5E33\uFF0C\u5F8C\u62C6\u89E3</h2><p>\u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\u88DD\u7F6E\u3002</p><p>"+n.q+"</p>"+n.answers.map((e,t)=>'<button data-answer="'+t+'">'+e+"</button>").join("")+'<p id="terminal-feedback" role="status"></p><button id="terminal-back">\u8FD4\u56DE\u6230\u5834</button>',De("terminal").hidden=!1,Pn=!1,_n=!1}function zd(){try{let n=JSON.parse(localStorage.getItem(Td));return n&&n.version===1&&n.completed?n:{version:1,completed:{}}}catch{return{version:1,completed:{}}}}function pa(n,e=!1){let t=dd(n);t&&(xa(),ga=!1,Ie={...t,training:e},M=Si(),M.round=t.mission.round,M.credits=400,M.phase="buy",Nt())}function ex(){if(!Ie&&M.round===3||Ie&&!Ie.training){let{judgement:n,reserve:e}=Br(M);window.arcadeRun?.finish(Math.min(100,(Ie?M.decisionCorrect*80:n)+e))}if(M.phase="roundend",M.defuse=zn().seconds,window.dispatchEvent(new Event("arcade-game-state")),Pn=_n=!1,Bn(),Gt?.stopEffects(),$t("defuse_ok"),Ie&&!Ie.training&&!window.arcadeTest&&!Ut())try{let n=zd(),e=Math.round(Zt*1e3),t=n.completed[Ie.mission.id];n.completed[Ie.mission.id]=Number.isFinite(t)?Math.min(e,t):e,localStorage.setItem(Td,JSON.stringify(n))}catch{}Nt()}function tx(n){if(!xi.length&&!Gi)return;let e=[...ii,...mt.filter(i=>!i.open)],t=[];for(let i of xi){let s=eh(i,n,e,en);if(!s)continue;t.push(s),Pr("rocket-impact"),s.direct!==null&&M.hits++;for(let o of en){if(!o.hp)continue;let a=Ia(s,o,e);a&&(o.hp=Math.max(0,o.hp-a),o.bar.scale.x=o.hp/o.maxHp,o.bar.position.x=-(1-o.bar.scale.x)*.54,Fs=.13,!o.hp&&!o.rewarded&&(o.rewarded=!0,o.dying=.001,M.kills++,M.totalKills++,M.credits+=100,M.earned+=100,$t("hit_tick")))}let r=Ia(s,M,e,!0);r&&Ra(M,r)}xi=xi.filter(i=>i.active),Gi??=ta(St,{reducedMotion:On,onImpact:()=>$t("shield_break")}),Gi.update(xi,t,n)}function nx(n){if(M.phase==="dying"){Er+=n,It.rotation.z=On?0:Math.min(.65,Er*.5),It.position.y=Math.max(.4,M.y-Er*.7),Er>=1.3&&(M.phase="dead",Nt());return}if(M.phase!=="playing"||gt||(Zt+=n,tx(n),wa(M)&&va(),M.phase!=="playing"))return;if(M.time=Math.max(0,M.time-n),M.time>0&&Zt>=Sl&&($t("bomb_beep"),Sl=Zt+.28+1.12*Math.min(1,M.time/20)),!M.time){M.feedback="\u8CA1\u52D9\u70B8\u5F48\u5012\u6578\u5B8C\u3002\u91CD\u8A66\uFF0C\u5148\u5B89\u6392\u8DEF\u7DDA\u540C\u5668\u6750\u3002",M.phase="dead",Bn(),Nt();return}for(let t in M.weaponReady)M.weaponReady[t]=Math.max(0,M.weaponReady[t]-n);if(M.cooldown=Math.max(0,M.cooldown-n),Fn=Math.max(0,Fn-n*.14),Tr=Math.max(0,Tr-n),ql(M,n),!gt){rn+=(Number(ut.has("ArrowLeft"))-Number(ut.has("ArrowRight")))*n*1.9;let t=(ut.has("KeyW")||ut.has("forward")?1:0)-(ut.has("KeyS")||ut.has("back")?1:0),i=(ut.has("KeyD")||ut.has("right")?1:0)-(ut.has("KeyA")||ut.has("left")?1:0),s=Math.hypot(t,i)||1,r=M.crouch?2:ut.has("ShiftLeft")?6:M.weapon==="knife"?5:4.1;Or(M,(-Math.sin(rn)*t+Math.cos(rn)*i)/s*r*n,(-Math.cos(rn)*t-Math.sin(rn)*i)/s*r*n,mt),M.crouch=Rr||ut.has("KeyC")||ut.has("ControlLeft"),(M.jumpY>0||M.vy)&&(M.vy-=12*n,M.jumpY=Math.max(0,M.jumpY+M.vy*n),M.jumpY||(M.vy=0)),M.y=(M.crouch?.93:1.65)+M.jumpY,(Pn||ut.has("KeyX"))&&ya()}for(let t of en){if(t.hp<=0){t.dying+=n,t.mesh.rotation.z=Math.min(Math.PI/2,t.dying*2),t.mesh.position.y=-Math.min(.5,t.dying*.4),t.mesh.scale.setScalar(Math.max(.01,1-Math.max(0,t.dying-.8)));continue}t.navTime-=n;let i=Math.hypot(t.x-M.x,t.z-M.z),s=i<16&&!Xs(t.x,t.z,M.x,M.z,mt,M.crouch?.8:1.4);(s||Zt<Sd&&i<18)&&(t.alertUntil=Zt+8);let r=t.alertUntil>Zt,o;if(r){let d=Zt*.55+t.id*1.7;o=i>9?{x:M.x,z:M.z}:{x:M.x+Math.sin(d)*5,z:M.z+Math.cos(d)*5},An(o.x,o.z,.55,mt)&&(o={x:M.x,z:M.z})}else{let d=bd,f=d[t.patrol%d.length];o={x:f[0],z:f[1]},Math.hypot(t.x-o.x,t.z-o.z)<1.2&&(t.patrol=(t.patrol+3)%d.length)}t.navTime<=0&&(t.nav=zr(t.x,t.z,o.x,o.z,mt.map(d=>({...d,open:!0}))),t.navTime=.7);let a=t.x,c=t.z,l=t.nav[0];if(l){for(let _ of mt)!_.open&&Math.hypot(_.x-t.x,_.z-t.z)<1.6&&(_.open=!0);let d=l.x-t.x,f=l.z-t.z,g=Math.hypot(d,f);if(g<.3)t.nav.shift();else{let _=Math.min(g,(1.9+M.round*.25)*Ur(M.round).movement*n);An(t.x+d/g*_,t.z,.5,mt)||(t.x+=d/g*_),An(t.x,t.z+f/g*_,.5,mt)||(t.z+=f/g*_)}}t.mesh.position.set(t.x,0,t.z),t.mesh.rotation.y=Math.atan2(o.x-t.x,o.z-t.z);let h=Math.hypot(t.x-a,t.z-c);t.motion+=(Math.min(1,h/Math.max(n,.001)/1.5)-t.motion)*Math.min(1,n*13);let u=On?0:t.motion*.49;for(let[d,f]of t.parts.entries()){let g=Math.sin(Zt*9+d*Math.PI)*u;f.rotation.x=g,t.arms[d].rotation.x=-g*.6-(r?.16:0)}t.visor.material.color.setHex(t.reload>0?16757085:r?16356209:16768397),t.shoot-=n,t.burstClock-=n,t.reload>0?(t.reload=Math.max(0,t.reload-n),t.reload||(t.ammo=9,t.shoot=.4)):r&&s&&!Ie?.training?(t.shoot<=0&&t.burst===0&&(t.burst=Math.min(3,t.ammo)),t.burst>0&&t.burstClock<=0&&jA(t)):t.burst=0}ni.length&&md(ni,Bs,M,zn().point,en,mt,n,Zt,(t,i)=>{i.hp=Math.max(0,i.hp-14),i.bar.scale.x=i.hp/i.maxHp,i.bar.position.x=-(1-i.bar.scale.x)*.54,i.hp||(i.dying=.01)}),Os=Os.filter(t=>{t.x+=t.vx*n,t.z+=t.vz*n,t.y=(t.y??1.4)+(t.vy||0)*n,t.life-=n,t.mesh.position.set(t.x,t.y,t.z);let i=t.life<=0||[...ii,...mt.filter(r=>!r.open)].some(r=>Math.abs(t.x-r.x)<r.w/2+.1&&Math.abs(t.z-r.z)<r.d/2+.1&&t.y<r.h),s=(M.crouch?1.02:1.82)+M.jumpY;if(!i&&Math.hypot(t.x-M.x,t.z-M.z)<.45&&t.y>M.jumpY&&t.y<s){let r=M.defuse;Ra(M,Ut()?3:Il()?6:6+M.round*2),Ut()&&M.hp>0&&(M.defuse=r),wr=.5,$t("hit_thud"),i=!0,M.feedback=M.hp?"\u4E2D\u5F48\uFF01\u9918\u4E0B "+M.hp+" \u751F\u547D\u503C\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002",M.hp||(Bn(),Pn=!1,Gt?.stopEffects(),Nt())}return i&&yi(t.mesh),!i});let e=fd(Ie,M,_n&&!gt,n);e==="relay"&&(M.feedback="\u5317\u9762\u8A18\u9304\u6E96\u5099\u597D\u3002\u53BB"+zn().point.name+"\uFF0C\u6309\u4F4F E \u4EA4\u63A5\u3002",_n=!1),e==="complete"&&ex(),VA()}function ix(){let n=zd().completed;return'<section class="panel mission-panel"><h1>\u4EFB\u52D9\u9078\u64C7</h1><p>\u4E09\u5F35\u5730\u5716\u5404\u6709\u4E09\u500B\u4EFB\u52D9\u3002\u6BCF\u5C40\u6709\u7368\u7ACB\u5605 400 \u88DD\u5099\u9EDE\u3002</p><div class="mission-grid">'+[1,2,3].map(e=>{let t=Al.filter(i=>i.round===e);return"<section><h2>"+t[0].map+"</h2>"+t.map(i=>'<button data-mission="'+i.id+'"><b>'+i.title+"</b><span>"+i.brief+"</span>"+(Number.isFinite(n[i.id])?"<small>\u6700\u4F73 "+(n[i.id]/1e3).toFixed(1)+" \u79D2</small>":"")+"</button>").join("")+"</section>"}).join("")+'</div><button data-action="main-menu">\u8FD4\u56DE</button></section>'}function Nt(){Gs(),document.body.dataset.phase=M.phase,Hs.hidden=!(M.phase==="playing"&&ni.length),da.value=Bs;let n=De("menu");if(n.innerHTML="",M.phase==="menu")n.innerHTML='<section class="panel"><small>FIRST PERSON \xB7 \u539F\u5275\u6A5F\u68B0\u4EBA\u8A13\u7DF4</small><h1>\u9810\u7B97\u9632\u885B\u6230<br>\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002</h1><p>\u907F\u958B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\uFF0C\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u5E33\u76EE\uFF0C\u518D\u62C6\u89E3\u70B8\u5F48\u3002</p><div class="control-guide"><span><b>\u79FB\u52D5</b> WASD\uFF0F\u756B\u9762\u65B9\u5411\u63A3</span><span><b>\u7784\u6E96</b> \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u62D6\u52D5</span><span><b>\u5C04\u64CA</b> \u5DE6\u9375\u6216\u6309\u4F4F X \xB7 Q \u7784\u6E96</span><span><b>\u4E92\u52D5</b> F \u67E5\u5E33 \xB7 E \u62C6\u89E3</span></div><details><summary>\u64CD\u4F5C\u8AAA\u660E</summary><p>WASD \u79FB\u52D5 \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\u8F49\u5411 \xB7 Esc \u66AB\u505C \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 Q \u7784\u6E96 \xB7 \u7A7A\u767D\u8DF3\u8E8D \xB7 C \u8E72\u4E0B \xB7 1\u20135 \u63DB\u6B66\u5668 \xB7 R \u63DB\u5F48 \xB7 F \u67E5\u5E33 \xB7 E \u958B\u9580\uFF0F\u62C6\u89E3 \xB7 P\uFF0FEsc \u66AB\u505C \xB7 V \u5168\u87A2\u5E55\u3002</p><p>\u89F8\u63A7\u677F\uFF1A\u53EF\u7528\u65B9\u5411\u9375\u8F49\u5411\u3001X \u5C04\u64CA\u3001Q \u7784\u6E96\u3002\u624B\u6A5F\uFF1A\u5DE6\u4E0B\u65B9\u5411\u63A3\u79FB\u52D5\u3001\u53F3\u908A\u62D6\u52D5\u7784\u6E96\u3001\u53F3\u4E0B\u5C04\u64CA\u3002</p></details><div class="settings"><label><input id="reduce" type="checkbox" '+(On?"checked":"")+'> \u6E1B\u5C11\u93E1\u982D\u52D5\u614B</label></div><div class="actions"><button data-action="begin">'+(Ut()?"\u958B\u59CB\u6838\u5C0D\u8CB8\u6B3E":"\u55AE\u4EBA\u4E09\u8F2A")+"</button>"+(Ut()?"":'<button data-action="ex">EX \u95DC \xB7 \u6A5F\u68B0\u4EBA\u570D\u653B</button><button data-action="duel">1 \u5C0D 1</button><a href="range.html">\u7121\u969C\u7919\u4E0D\u9650\u6642\u6587\u5B57\uFF0F\u6A19\u9776\u7248 \u2197</a>')+"</div></section>";else if(M.phase==="missions")n.innerHTML=ix();else if(M.phase==="buy")n.innerHTML='<section class="panel"><small>'+(M.round===4?"EX \u95DC":"ROUND "+M.round+" / 3")+" \xB7 BUY PHASE</small><h1>"+(Ie?.training?"3D \u7DF4\u7FD2\u5834":Ie?Ie.mission.map+" \xB7 "+Ie.mission.title:"\u5148\u7559\u4E0B\u4E00\u8F2A\u5605\u8CC7\u6E90\u3002")+"</h1><p>\u9918\u4E0B <b>"+M.credits+" \u91D1\u5E63</b>\u3002\u624B\u69CD\u8207\u5315\u9996\u514D\u8CBB\u3002\u6BCF\u8F2A\u6709 100 \u751F\u547D\u503C\uFF0C\u8ACB\u5229\u7528\u63A9\u9AD4\uFF1B\u5668\u6750\u53EA\u9650\u4ECA\u8F2A\u3002</p>"+(Ut()?"<p>\u5DF2\u63D0\u4F9B\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177\u3002\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u963F\u4FCA\u5605\u8CB8\u6B3E\u8CC7\u6599\u3002</p>":Ie?"<p>"+Ie.mission.brief+"</p>":"")+'<div class="gear">'+Object.entries(Fr).map(([e,t])=>"<div><b>"+t.label+"</b><small>"+{bazooka:Ws(),carbine:"24 \u767C\uFF0C\u5C04\u901F\u8F03\u5FEB",sniper:"5 \u767C\uFF0C\u55AE\u767C\u9AD8\u5A01\u529B\uFF0C\u53EF\u958B\u93E1",kit:"\u62C6\u89E3\u7531 5 \u79D2\u6E1B\u81F3 3 \u79D2"}[e]+"</small><strong>"+t.cost+' \u91D1\u5E63</strong><button data-buy="'+e+'" '+(M.purchases.includes(e)||M.credits<t.cost?"disabled":"")+">"+(M.purchases.includes(e)?"\u5DF2\u8CFC\u8CB7":"\u8CFC\u8CB7")+"</button></div>").join("")+'</div><div class="actions"><button data-action="start">\u9032\u5165\u6230\u5834</button>'+(Ie?'<button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button>':"")+"</div></section>";else if(M.phase==="paused")n.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u66AB\u505C</h1><span data-pfap-audio-slot></span><p>\u6309\u4F4F\u53F3\u9375\u62D6\u52D5\u8F49\u5411\uFF0C\u653E\u958B\u5373\u505C\u3002Esc \u66AB\u505C\u3002V \u5207\u63DB\u5168\u87A2\u5E55\u3002</p><p>\u79FB\u52D5\u3001AI\u3001\u5B50\u5F48\u3001\u63DB\u5F48\u540C\u5012\u6578\u5DF2\u505C\u3002'+Math.ceil(M.time)+" \u79D2 \xB7 "+M.ammo+' \u767C\u3002</p><div class="actions"><button data-action="resume">\u7E7C\u7E8C\u4EFB\u52D9</button><button data-action="retry">'+(M.round===4?"\u91CD\u8A66 EX \u95DC":Ie?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+"</button></div></section>";else if(M.phase==="roundend"&&Ut())n.innerHTML='<section class="panel"><h1>\u6838\u5C0D\u5B8C\u6210</h1><p>'+Cl().why+'</p><button data-action="exit">\u8FD4\u56DE\u8ABF\u67E5</button></section>';else if(M.phase==="roundend"&&Ie)n.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u5B8C\u6210</h1><p>'+Ie.mission.map+" \xB7 "+Ie.mission.title+" \xB7 "+Zt.toFixed(1)+" \u79D2</p><p>"+si[M.round-1].why+'</p><div class="actions"><button data-action="retry">\u518D\u8A66\u4E00\u6B21</button><button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button></div></section>';else if(M.phase==="roundend"&&M.round===4)n.innerHTML='<section class="panel"><h1>EX \u95DC \xB7 \u62C6\u89E3\u5B8C\u6210</h1><p>'+wd.why+'</p><div class="actions"><button data-action="retry">\u518D\u6230 EX \u95DC</button><button data-action="exit">\u9000\u51FA</button></div></section>';else if(M.phase==="roundend")n.innerHTML='<section class="panel"><small>FINANCIAL BOMB DEFUSED</small><h1>\u7B2C '+M.round+" \u8F2A\uFF1A\u62C6\u89E3\u5B8C\u6210\u3002</h1><p>"+si[M.round-1].why+"</p><p>\u5236\u6B62 "+M.kills+" \u500B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\u3002\u5668\u6750\u5269\u9918 "+M.credits+' \u91D1\u5E63\uFF0C\u7559\u7540\u4E0B\u4E00\u8F2A\u3002</p><button data-action="next">'+(M.round>=3?"\u67E5\u770B\u4EFB\u52D9\u7E3D\u7D50":"\u4E0B\u4E00\u8F2A")+"</button></section>";else if(M.phase==="results"){let e=Br(M);if(!ga&&!Ut()&&!window.arcadeTest){ga=!0;try{let t=JSON.parse(localStorage.getItem("website-v1-arcade")||"{}"),i=JSON.parse(localStorage.getItem("website-v1-records")||"{}");t.defence={score:e.judgement+e.reserve,completed:!0},i.defence={best:Math.max(i.defence?.best||0,e.judgement+e.reserve),plays:(i.defence?.plays||0)+1},localStorage.setItem("website-v1-arcade",JSON.stringify(t)),localStorage.setItem("website-v1-records",JSON.stringify(i))}catch{}}n.innerHTML='<section class="panel"><small>MISSION COMPLETE</small><h1>\u4FDD\u4F4F\u9700\u8981\uFF0C\u7559\u4F4E\u672A\u4F86\u3002</h1><div class="score-row"><p>\u91D1\u878D\u5224\u65B7<br><b>'+e.judgement+"\uFF0F80</b></p><p>\u8CC7\u6E90\u4FDD\u7559<br><b>"+e.reserve+"\uFF0F20</b></p><p>\u5C04\u64CA\u6E96\u78BA\u7387\uFF08\u53E6\u8A08\uFF09<br><b>"+e.accuracy+"%</b></p></div><p>\u5236\u6B62 "+M.totalKills+' \u500B\u6A5F\u68B0\u4EBA\uFF0C\u62C6\u89E3\u4E09\u679A\u865B\u69CB\u8CA1\u52D9\u70B8\u5F48\u3002\u91D1\u878D\u5224\u65B7\u53EA\u8A08\u7D42\u7AEF\u9996\u6B21\u6838\u5C0D\uFF0C\u5C04\u64CA\u6E96\u78BA\u7387\u5514\u52A0\u5165\u91D1\u878D\u5206\u6578\u3002\u5148\u4FDD\u57FA\u672C\u751F\u6D3B\u3001\u67E5\u6E05\u7E3D\u984D\u540C\u6536\u5165\u65E5\u671F\uFF0C\u518D\u70BA\u672A\u4F86\u76EE\u6A19\u9810\u7559\u8CC7\u6E90\u3002\u4E03\u65E5\u5F8C\u518D\u6AA2\u8996\u5B89\u6392\u3002</p><div class="actions"><button data-action="retry">\u518D\u73A9\u4E00\u6B21</button><button data-action="exit">\u8FD4\u56DE\u904A\u6232\u9078\u55AE</button></div></section>'}else M.phase==="dead"&&(n.innerHTML='<section class="panel"><small>RETRY / \u518D\u5B89\u6392\u8DEF\u7DDA</small><h1>'+(M.hp?"\u4ECA\u6B21\u672A\u80FD\u8D95\u53CA\u62C6\u89E3\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002\u518D\u5B89\u6392\u4F0F\u64CA\u8DEF\u7DDA\u3002")+'</h1><p>\u7528\u63A9\u9AD4\u963B\u64CB\u706B\u529B\uFF0C\u907F\u958B\u6216\u53CD\u64CA\u6A5F\u68B0\u4EBA\uFF0C\u518D\u5230\u5317\u9762\u7D42\u7AEF\u67E5\u5E33\u3002\u6210\u7E3E\u5514\u6703\u6539\u52D5\u963F\u4FCA\u5605\u6545\u4E8B\u3002</p><div class="actions"><button data-action="retry">'+(M.round===4?"\u91CD\u8A66 EX \u95DC":Ie?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+'</button><button data-action="exit">\u9000\u51FA</button></div></section>');["playing","dying"].includes(M.phase)&&(n.innerHTML=""),Gt?.mountControls()}var Tn=(n,e)=>{let t=De(n);window.siteLocale?window.siteLocale.write(t,e):t.textContent!==e&&(t.textContent=e)},Un=(n,e,t)=>{n[e]!==t&&(n[e]=t)},ma=(n,e,t)=>{n.getAttribute(e)!==t&&n.setAttribute(e,t)};function Bd(){let n=De("hud");document.documentElement.style.setProperty("--hud-bottom",n.offsetTop+n.offsetHeight+"px")}var kd=De("minimap");function sx(n){let e=kd.getContext("2d");if(!e||!Hi)return;let t=3.5,i=r=>64+r*t;e.fillStyle="#162e2c",e.fillRect(0,0,128,128),e.fillStyle="#748783";for(let r of Hi.walls)e.fillRect(i(r.x-r.w/2),i(r.z-r.d/2),r.w*t,r.d*t);e.fillStyle="#dda767";for(let r of mt)r.open||e.fillRect(i(r.x-r.w/2),i(r.z-r.d/2),r.w*t,r.d*t);function s(r,o,a,c){e.fillStyle=a,e.beginPath(),e.arc(i(r),i(o),c,0,Math.PI*2),e.fill()}s(n.x,n.z,"#ffd277",3);for(let r of en)r.hp>0&&s(r.x,r.z,"#ff8e76",2.2);s(M.x,M.z,"#a9f5de",3),e.strokeStyle="#a9f5de",e.beginPath(),e.moveTo(i(M.x),i(M.z)),e.lineTo(i(M.x)-Math.sin(rn)*9,i(M.z)-Math.cos(rn)*9),e.stroke()}function rx(){let n=zn(),e=M.phase==="playing"&&!gt,t=e&&Ls(M,n.point);kd.hidden=!e,e&&sx(n.point);let i=Ie?mt.find(a=>Ls(M,a)):Ca(M,mt),s=e&&!t&&(Ie?!!i:i?.type==="door");Un(De("interaction-hint"),"hidden",!s),s&&Tn("interaction-hint",i.open?"[ E ] \u95DC\u9580":"[ E ] \u958B\u9580");let r=en.reduce((a,c)=>a+ +(c.hp>0),0);Tn("round",M.round===4?"EX":Ie?Hi.name:M.round+"/3"),Tn("health",M.hp+" / 100"),Un(De("health-bar"),"value",M.hp),ma(De("health-wrap"),"data-low",String(M.hp<=25)),Tn("ammo",M.weapon==="knife"?"\u5315\u9996 \xB7 \u8FD1\u6230":je[M.weapon].label+" \xB7 \u5F48\u5323 "+M.ammo+" / \u5099\u5F48 "+M.reserves[M.weapon]+(M.reload?" \xB7 \u63DB\u5F48 "+M.reload.toFixed(1)+"s":"")+(M.weapon==="sniper"&&M.cooldown>0?" \xB7 \u62C9\u6813 "+M.cooldown.toFixed(1)+"s":"")),Tn("timer",Math.ceil(M.time)+"s"),Tn("money",M.credits+" \u91D1\u5E63");let o={check:"F \u67E5\u5E33",defuse:"\u6309\u4F4F E \u62C6\u89E3",prepare:"\u6309\u4F4F E \u6574\u7406",handoff:"\u6309\u4F4F E \u4EA4\u63A5",upload:"\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3"}[n.kind];Tn("objective",n.point.name+" \xB7 "+o+" \xB7 "+r+" \u500B\u6A5F\u68B0\u4EBA\u6D3B\u52D5\u4E2D"),Tn("notice",M.feedback),Un(De("defuse"),"hidden",!t),t&&(Tn("defuse-label",M.defuse>0?o+" \xB7 "+M.defuse.toFixed(1)+" / "+n.seconds+" \u79D2":o),Un(De("defuse-progress"),"max",n.seconds),Un(De("defuse-progress"),"value",M.defuse)),ma(De("crouch"),"aria-pressed",String(M.crouch));for(let a of GA)Un(a,"disabled",!M.owned.includes(a.dataset.weapon)),ma(a,"aria-pressed",String(M.weapon===a.dataset.weapon))}function Hd(){return M.phase==="dying"||M.phase==="playing"&&!gt}function Gd(){!document.body.dataset.webglError&&!_a&&!Aa&&!Ir&&!document.hidden&&(Us||Hd())&&(_a=requestAnimationFrame(ox))}function Gs(){!Kt||document.body.dataset.webglError||(Us=!0,Gd())}var ua=0,Ml=1e3/60;function ox(n){if(_a=0,Aa||Ir||document.hidden)return;let e=vi?Math.max(0,(n-vi)/1e3):0;if(vi=n,Hd()){let o=Math.min(e,.15),a=Math.max(1,Math.ceil(o/.03));for(let l=0;l<a;l++)nx(o/a);e>.15&&M.phase==="playing"&&(M.time=Math.max(0,M.time-(e-.15)));let c=Math.exp(-e*13);for(let l of en)l.chassisMaterial?.emissive.multiplyScalar(c);wr=Math.max(0,wr-e),Fs=Math.max(0,Fs-e),Cr=Cr.filter(l=>(l.life-=e,l.life>0?!0:(yi(l.mesh),!1))),mn.userData.life>0&&(mn.userData.life-=e),mn.visible=mn.userData.life>0,pn.position.z=-.65+(!On&&mn.visible?.05:0),pn.rotation.x=M.reload?-Math.sin(M.reload/je[M.weapon].reload*Math.PI)*.7:M.weapon==="knife"&&M.cooldown>0?-Math.sin(M.cooldown/.6*Math.PI)*1.4:0,pn.position.y=-.32+(On?0:Math.sin(Zt*9)*.007)}(Us||n>=_d)&&(rx(),_d=n+80),ma(document.body,"data-terminal",String(gt)),Un(De("scope-view"),"hidden",!(gn&&M.weapon==="sniper")),Un(De("hitmarker"),"hidden",Fs<=0),Un(De("headshot"),"hidden",Tr<=0),Un(De("damage").style,"opacity",On?"0":String(Math.min(.65,wr))),M.phase!=="dying"&&(It.position.set(M.x,M.y,M.z),It.rotation.set(zs+Fn,rn,0,"YXZ"));for(let o of en)o.meter.visible=o.hp>0,o.meter.visible&&(o.meter.rotation.y=Math.atan2(M.x-o.x,M.z-o.z)-o.mesh.rotation.y);let t=1-Math.pow(.8,e*60);for(let o of Rl)o.group.position.y+=((o.d.open?o.d.h+2:o.d.h/2)-o.group.position.y)*t,o.status.material.color.setHex(o.d.open?8767136:15117669);let i=zn().point;Rn.station.position.set(i.x,0,i.z);let s=M.verified?8443050:M.time<10?15960688:15578723;Rn.strip.material.color.setHex(s),Rn.lamp.material.color.setHex(s),Rn.stationSign.visible=!M.verified,Rn.verifiedSign.visible=M.verified;let r=gn?M.weapon==="sniper"?28:57:76;It.fov!==r&&(It.fov=r,It.updateProjectionMatrix()),pn.visible=!(gn&&M.weapon==="sniper"),(Us||n>=ua-1)&&(Kt.render(St,It),ua=ua<n-Ml||Us?n+Ml:ua+Ml),Us=!1,Gd()}var xd=0,yd=0,vd=0;function Dr(){if(!Kt)return;let n=Cn.clientWidth,e=Cn.clientHeight;if(!n||!e)return;let t=Math.min(devicePixelRatio||1,1.35,Math.sqrt(15e5/(n*e)));n===xd&&e===yd&&t===vd||(xd=n,yd=e,vd=t,Kt.setPixelRatio(t),Kt.setSize(n,e,!1),Kt.shadowMap.enabled=n>=900&&matchMedia("(pointer:fine)").matches,It.aspect=n/e,It.updateProjectionMatrix(),Gs())}function Vd(){Aa||(Aa=!0,wl?.disconnect(),Tl?.disconnect(),xi=[],Gi?.dispose(),Gi=null,cancelAnimationFrame(_a),Md.abort(),ut.clear(),Gt?.stopEffects(),St?.traverse(n=>{n.geometry?.dispose(),(n.material?Array.isArray(n.material)?n.material:[n.material]:[]).forEach(t=>{t.map?.dispose(),t.dispose()})}),Kt?.dispose(),Kt?.forceContextLoss(),Bn())}function Wd(){Vd(),parent!==window?(parent.postMessage({type:"budget-defence-exit"},location.origin),parent.postMessage({type:"website-v1-back"},location.origin)):location.href="../../#play"}try{WA()}catch(n){document.body.dataset.webglError="true",document.body.dataset.phase="unavailable",De("pause").disabled=!0,Cn.innerHTML='<section class="panel webgl-fallback"><h1>3D \u756B\u9762\u672A\u80FD\u555F\u52D5</h1><p>\u53EF\u4EE5\u8F49\u7528\u76F8\u540C\u5B78\u7FD2\u5167\u5BB9\u5605\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002</p><a href="./range.html">\u6253\u958B\u7121\u969C\u7919\u7248\u672C</a></section>',console.warn("Budget Defence WebGL unavailable",n)}nt(document,"click",n=>{ks();let e=n.target.closest("[data-action]")?.dataset.action,t=n.target.closest("[data-buy]")?.dataset.buy,i=n.target.closest("[data-weapon]")?.dataset.weapon,s=n.target.closest("[data-answer]")?.dataset.answer;i&&Cd(i),t&&Yl(M,t)&&($t("buy_equip"),M.feedback="\u5DF2\u8CB7 "+Fr[t].label+"\uFF0C\u53EA\u6263\u4E00\u6B21\u3002",Nt()),e==="duel"&&M.phase==="menu"&&!window.arcadeTest&&!Ut()&&ld(()=>Pr("rocket-impact"),Pr,"duel"),e==="ex"&&(Ie=null,M=Si(),M.round=4,M.credits=600,M.phase="buy",Nt()),e==="begin"&&(Ie=null,M.phase="buy",Ut()&&(M.purchases=["kit"]),Nt()),e==="training"&&!Ut()&&pa("1-verify",!0),e==="missions"&&!Ut()&&(xa(),Ie=null,M=Si(),M.phase="missions",Nt()),e==="main-menu"&&(Ie=null,M=Si(),Nt());let r=n.target.closest("[data-mission]")?.dataset.mission;if(r&&M.phase==="missions"&&pa(r),e==="start"&&YA(),e==="resume"&&Ud(),e==="retry")if(Ie)pa(Ie.mission.id,Ie.training);else{let o=M.round===4;xa(),ga=!1,M=Si(),o&&(M.round=4,M.credits=600),M.phase="buy",Ut()&&(M.purchases=["kit"]),Nt()}if(e==="next"){if(M.phase!=="roundend"||Ie||Ut())return;M.round>=3?M.phase="results":(M.round++,M.phase="buy",M.purchases=[]),Nt()}e==="exit"&&Wd(),s!==void 0&&(Zl(M,Number(s),Cl())?(gt=!1,De("terminal").hidden=!0,Ie&&zn().kind==="upload"&&(M.feedback="\u8CC7\u6599\u5DF2\u6838\u5BE6\u3002\u53BB"+zn().point.name+"\uFF0C\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3\u3002"),ks(),Cn.focus()):M.phase==="playing"&&M.checked&&!M.verified&&(gt=!1,De("terminal").hidden=!0,M.phase="dead",M.time=0,M.feedback="\u6838\u5BE6\u932F\u8AA4\uFF0C\u88DD\u7F6E\u5DF2\u5F15\u7206\u3002",Bn(),Nt())),n.target.id==="terminal-back"&&(gt=!1,De("terminal").hidden=!0,Cn.focus()),(s!==void 0||n.target.id==="terminal-back")&&(vi=0,Gs())});nt(De("fullscreen"),"click",Fd);nt(De("settings-open"),"click",KA);nt(document,"fullscreenchange",()=>{De("fullscreen").textContent=document.fullscreenElement?"\u9000\u51FA\u5168\u87A2\u5E55 V":"\u5168\u87A2\u5E55 V",De("fullscreen").setAttribute("aria-pressed",String(!!document.fullscreenElement)),Dr()});for(let n of["sensitivity","ads","volume"])nt(De("setting-"+n),"input",e=>{Vt[n]=Number(e.target.value),De(""+n+"-output").textContent=n==="volume"?Math.round(Vt[n]*100)+"%":Vt[n].toFixed(2)+"\xD7",Nd()});for(let n of["invert","reduced"])nt(De("setting-"+n),"change",e=>{Vt[n]=e.target.checked,Nd()});nt(De("pause"),"click",Vi);nt(De("exit"),"click",Wd);De("mute").replaceWith(Gt.controls());nt(document,"change",n=>{n.target.id==="reduce"&&(On=n.target.checked)});nt(De("reload"),"click",va);nt(De("check"),"click",Od);nt(De("jump"),"click",Id);nt(De("crouch"),"click",()=>{M.phase==="playing"&&!gt&&(Rr=!Rr)});nt(De("door"),"click",Dd);nt(De("scope"),"click",Pd);nt(document,"keydown",n=>{if(!(n.target instanceof Element&&n.target.matches("input,select,textarea"))&&!De("settings-dialog").open){if(["KeyP","Escape"].includes(n.code)){n.repeat||(n.code==="KeyP"&&M.phase==="paused"?Ud():Vi());return}if(n.code==="KeyV"&&!n.repeat){n.preventDefault(),Fd();return}M.phase!=="playing"||gt||(["KeyW","KeyA","KeyS","KeyD","Space","KeyE","KeyR","KeyF","KeyX","KeyQ","ArrowLeft","ArrowRight","ShiftLeft"].includes(n.code)&&n.preventDefault(),ut.add(n.code),n.code==="Space"&&!n.repeat&&Id(),n.code==="KeyX"&&!n.repeat&&ya(),n.code==="KeyQ"&&!n.repeat&&Pd(),/^Digit[1-5]$/.test(n.code)&&Cd(["pistol","carbine","sniper","knife","bazooka"][Number(n.code.slice(-1))-1]),n.code==="KeyR"&&!n.repeat&&va(),n.code==="KeyF"&&!n.repeat&&Od(),n.code==="KeyE"&&!n.repeat&&((Ie?M.verified&&Ls(M,zn().point):Ca(M,mt)?.type==="defuse")?_n=!0:Dd()||(_n=!0)))}});nt(document,"keyup",n=>{ut.delete(n.code),n.code==="KeyE"&&(_n=!1)});function ax(n,e){let t=gd(n,e,gn,Vt);rn-=t.yaw,zs=Math.max(-1.2,Math.min(1.2,zs-t.pitch))}var Dl=Kt?.domElement??Cn,cx=()=>M.phase==="playing"&&!gt&&!De("settings-dialog").open;nt(Dl,"webglcontextlost",n=>{n.preventDefault(),Ir=!0,Bn(),ut.clear(),Vi(),Tn("view-status","3D \u756B\u9762\u66AB\u505C\u3002\u7B49\u5019\u700F\u89BD\u5668\u6062\u5FA9\uFF0C\u4EA6\u53EF\u4F7F\u7528\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002")});nt(Dl,"webglcontextrestored",()=>{Ir=!1,vi=0,Tn("view-status","3D \u756B\u9762\u5DF2\u6062\u5FA9\u3002\u6309\u300C\u7E7C\u7E8C\u4EFB\u52D9\u300D\u8FD4\u56DE\u3002"),Gs()});Ld=na({on:nt,canvas:Dl,active:cx,look:ax,fire(n){Pn=n,n&&(ks(),ya())},clearInput(){ut.clear(),Pn=_n=gn=!1}});document.querySelectorAll("[data-hold]").forEach(n=>{let e=n.dataset.hold;nt(n,"pointerdown",t=>{M.phase!=="playing"||gt||(t.preventDefault(),n.setPointerCapture(t.pointerId),e==="fire"?(Pn=!0,ya()):e==="defuse"?_n=!0:ut.add(e))});for(let t of["pointerup","pointercancel","lostpointercapture"])nt(n,t,()=>{ut.delete(e),e==="fire"&&(Pn=!1),e==="defuse"&&(_n=!1)})});nt(document,"visibilitychange",()=>{document.hidden?(Vi(),vi=0):Gs()});nt(window,"blur",()=>{Vi()});nt(window,"resize",Dr);nt(window,"pagehide",Vd);nt(window,"site-language-change",()=>{St.traverse(n=>n.userData.localize?.()),Gs()});wl=new ResizeObserver(Bd);wl.observe(De("hud"));Tl=new ResizeObserver(Dr);Tl.observe(Cn);Bd();window.fpsSnapshot=()=>({...M,recoilPitch:Fn,score:Br(M),enemies:en.map(n=>({x:n.x,z:n.z,hp:n.hp,maxHp:n.maxHp,ammo:n.ammo,reload:n.reload,burst:n.burst,dying:n.dying})),bullets:Os.length,terminalOpen:gt,squad:{order:Bs,members:ni.map(({id:n,x:e,z:t})=>({id:n,x:e,z:t}))},audio:Gt?.now()?"running":"not-started",walls:ii,doors:mt.map(n=>({...n})),view:{yaw:rn,pitch:zs,scoped:gn,locked:!!document.pointerLockElement},settings:{...Vt},fullscreen:!!document.fullscreenElement,map:Hi?.name,mission:Ie?{id:Ie.mission.id,stage:Ie.stage,target:zn()}:null,graphics:{court:document.body.dataset.court,calls:Kt?.info.render.calls||0,triangles:Kt?.info.render.triangles||0},posture:{crouch:M.crouch,jump:M.jumpY}});document.body.dataset.webglError||(Ad?pa(Ad[1]):Nt());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
