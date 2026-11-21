(()=>{var Ol=Object.freeze([4,5,6]),Sa=[{x:0,z:-18,w:36,d:1,h:5},{x:0,z:18,w:36,d:1,h:5},{x:-18,z:0,w:1,d:36,h:5},{x:18,z:0,w:1,d:36,h:5},{x:-7,z:-5,w:.65,d:14,h:3.8},{x:-7,z:7,w:.65,d:2,h:3.8},{x:-7,z:11,w:.65,d:2,h:3.8},{x:7,z:4,w:.65,d:12,h:3.8},{x:7,z:-14.25,w:.65,d:3.5,h:3.8},{x:7,z:-7.75,w:.65,d:3.5,h:3.8},{x:-3.75,z:-4,w:4.5,d:.65,h:3.8},{x:3.75,z:-4,w:4.5,d:.65,h:3.8},{x:-3,z:6,w:2.2,d:2,h:1.15},{x:3,z:6,w:2.2,d:2,h:1.15},{x:-12,z:7,w:2.5,d:2,h:1.2},{x:12,z:4,w:2,d:2,h:1.2},{x:-11,z:-8,w:2.3,d:2.3,h:1.2},{x:11,z:-10,w:2.3,d:2.3,h:1.2},{x:3,z:-11,w:2,d:2,h:1.2}],Xd=()=>[{id:"west",x:-7,z:4,w:.65,d:3.8,h:3.5,open:!1},{id:"east",x:7,z:-4,w:.65,d:3.8,h:3.5,open:!1},{id:"vault",x:0,z:-4,w:2.9,d:.65,h:3.5,open:!1},{id:"west-shortcut",x:-7,z:9,w:.65,d:1.9,h:3.5,open:!1},{id:"east-shortcut",x:7,z:-11,w:.65,d:2.9,h:3.5,open:!1}],Fl=Sa.slice(0,4),Ze=(n,e,t,i,s=3.8)=>({x:n,z:e,w:t,d:i,h:s}),Dn=(n,e,t,i,s)=>({id:n,x:e,z:t,w:i,d:s,h:3.5,open:!1});function Vi(n=1){return n===1?{name:"\u820A\u57CE\u8857\u5340",walls:Sa.map(e=>({...e})),doors:Xd()}:n===2?{name:"\u5009\u5EAB\u8FF4\u5ECA",walls:[...Fl,Ze(-14.4,4,5.2,.65),Ze(-5,4,6,.65),Ze(5,4,6,.65),Ze(14.4,4,5.2,.65),Ze(-6,-4,.65,10),Ze(6,-4,.65,10),Ze(-12.5,-9,9,.65),Ze(0,-9,10,.65),Ze(12.5,-9,9,.65),Ze(-12,9,3,2,1.15),Ze(12,8,3,2,1.15),Ze(0,9,2.5,2,1.15),Ze(-12,-3,2,3,1.2),Ze(12,-3,2,3,1.2),Ze(-3,-13,2,2,1.2),Ze(8,-14,2,2,1.2)],doors:[Dn("west-store",-10,4,3.4,.65),Dn("main-store",0,4,3.8,.65),Dn("east-store",10,4,3.4,.65),Dn("west-vault",-6.5,-9,2.7,.65),Dn("east-vault",6.5,-9,2.7,.65)]}:{name:"\u82B1\u5712\u5821\u58D8",walls:[...Fl,Ze(-9,6,.65,14),Ze(9,6,.65,14),Ze(-9,-7,.65,6),Ze(9,-7,.65,6),Ze(0,-6,.65,10),Ze(0,3,4,.65),Ze(-6.5,3,3,.65),Ze(6.5,3,3,.65),Ze(-6,-12,7,.65),Ze(6,-12,7,.65),Ze(-3,10,2,2,1.1),Ze(3,10,2,2,1.1),Ze(-5,-5,2,2,1.1),Ze(5,-6,2,2,1.1),Ze(-13,7,2.5,3,1.2),Ze(13,5,2.5,3,1.2)],doors:[Dn("left-court",-3.5,3,2.8,.65),Dn("right-court",3.5,3,2.8,.65),Dn("west-passage",-9,-2.5,.65,2.8),Dn("east-passage",9,-2.5,.65,2.8),Dn("temple-vault",0,-12,4.8,.65)]}}var ii=Sa;function Bl(n=1){let e=Vi(n);return ii=e.walls,e}var zl=(n=1)=>Vi(n).doors,si=[{q:"\u300C\u4FDD\u8B49\u56DE\u5831\uFF0C\u5148\u8F49\u8A02\u91D1\u3002\u300D\u800C\u57FA\u672C\u751F\u6D3B\u8CBB\u672A\u9810\u7559\u3002",answers:["\u62D2\u7D55\u8F49\u5E33\uFF0C\u5148\u4FDD\u57FA\u672C\u9700\u8981","\u5148\u7540\u8A02\u91D1\uFF0C\u4E4B\u5F8C\u518D\u8AD7\u751F\u6D3B\u8CBB"],right:0,why:"\u4FDD\u8B49\u56DE\u5831\u540C\u50AC\u4FC3\u8F49\u5E33\u4FC2\u8B66\u865F\u3002\u5148\u6838\u5BE6\u8CC7\u6599\u3001\u4FDD\u4F4F\u57FA\u672C\u9700\u8981\u3002"},{q:"\u4ECA\u65E5\u53EA\u6709 $50\uFF1B$600 \u4EBA\u5DE5\u4E09\u65E5\u5F8C\u5148\u5230\u3002",answers:["\u7576\u4F5C\u5DF2\u6709 $650\uFF0C\u4ECA\u65E5\u5C31\u82B1","\u53EA\u7528\u73FE\u6709\u73FE\u91D1\uFF0C\u78BA\u8A8D\u5230\u5E33\u65E5\u518D\u6392\u652F\u51FA"],right:1,why:"\u672A\u5230\u5E33\u6536\u5165\u5514\u4FC2\u4ECA\u65E5\u53EF\u7528\u73FE\u91D1\uFF1B\u5148\u5B89\u6392\u6BCF\u65E5\u9700\u8981\u540C\u7F3A\u53E3\u3002"},{q:"\u6E4A\u55AE\u514D\u904B $300\uFF1B\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\u9023\u904B\u8CBB $205\u3002",answers:["\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\uFF0C\u5BE6\u4ED8 $205","\u591A\u8CB7\u672A\u9700\u8981\u5605\u5622\uFF0C\u70BA\u5497\u514D\u904B\u4ED8 $300"],right:0,why:"\u6BD4\u8F03\u6700\u5F8C\u7E3D\u984D\u3002\u5514\u70BA\u5497\u514D\u904B\u800C\u591A\u82B1 $95\u3002"}],ot={pistol:{label:"\u624B\u69CD",mag:12,reserve:60,damage:24,cooldown:.3,reload:1.4,range:50},carbine:{label:"\u6B65\u69CD",mag:24,reserve:96,damage:25,cooldown:.13,reload:1.8,range:55},sniper:{label:"\u72D9\u64CA\u69CD",mag:5,reserve:20,damage:85,cooldown:1.3,reload:2.3,range:75},bazooka:{label:"\u706B\u7BAD\u7B52",mag:1,reserve:2,damage:220,splash:160,blastRadius:4.5,selfCap:50,cooldown:1.5,reload:2.5,range:55},knife:{label:"\u5315\u9996",mag:0,reserve:0,damage:60,cooldown:.6,reload:0,range:2.2}};function kl(n){return{magazines:Object.fromEntries(n.map(e=>[e,ot[e].mag])),reserves:Object.fromEntries(n.map(e=>[e,ot[e].reserve]))}}function qd(n,e){n.magazines[n.weapon]=n.ammo,n.weapon=e,n.reload=0,n.ammo=n.magazines[e]??ot[e].mag,n.reserves[e]??=ot[e].reserve,n.maxAmmo=ot[e].mag}function Gl(n){let e=ot[n.weapon];return n.reload||!e.reload||n.ammo>=e.mag||!n.reserves[n.weapon]?!1:(n.reload=e.reload,!0)}function Hl(n,e){if(!n.reload||e<=0||(n.reload=Math.max(0,n.reload-e),n.reload))return;let t=Math.min(ot[n.weapon].mag-n.ammo,n.reserves[n.weapon]);n.ammo+=t,n.reserves[n.weapon]-=t}var Ws=()=>`\u76F4\u64CA ${ot.bazooka.damage} \xB7 \u7206\u98A8\u4E2D\u5FC3 ${ot.bazooka.splash} \xB7 \u534A\u5F91 ${ot.bazooka.blastRadius}m \xB7 \u5171\u4E09\u767C\uFF0C\u81EA\u50B7\u4E0A\u9650 ${ot.bazooka.selfCap}`,Fr={bazooka:{cost:350,label:"\u706B\u7BAD\u7B52"},carbine:{cost:220,label:"\u6B65\u69CD"},sniper:{cost:300,label:"\u72D9\u64CA\u69CD"},kit:{cost:80,label:"\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177"}};function Wi(){return{phase:"menu",round:1,credits:0,earned:0,spent:0,headshots:0,weaponReady:{},purchases:[],hp:100,weapon:"pistol",owned:["pistol","knife"],...kl(["pistol","knife"]),ammo:12,maxAmmo:12,reload:0,cooldown:0,time:95,defuse:0,verified:!1,checked:!1,decisionCorrect:0,attempts:0,kills:0,totalKills:0,shots:0,hits:0,melee:0,x:0,z:14,y:1.65,jumpY:0,vy:0,crouch:!1,feedback:"100 \u751F\u547D\u503C\u3002\u5229\u7528\u63A9\u9AD4\u3001\u5075\u5BDF\u8DEF\u7DDA\uFF0C\u518D\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002"}}function An(n,e,t=.34,i=[]){return[...ii,...i.filter(s=>!s.open)].some(s=>Math.abs(n-s.x)<s.w/2+t&&Math.abs(e-s.z)<s.d/2+t)}function Or(n,e,t,i=[]){An(n.x+e,n.z,.34,i)||(n.x+=e),An(n.x,n.z+t,.34,i)||(n.z+=t)}function Xs(n,e,t,i,s=[],r=1.4){let o=Math.hypot(t-n,i-e),a=[...ii,...s.filter(c=>!c.open)].filter(c=>c.h>=r);for(let c=0;c<=o;c+=.16){let l=o?c/o:0,h=n+(t-n)*l,u=e+(i-e)*l;if(a.some(d=>Math.abs(h-d.x)<d.w/2&&Math.abs(u-d.z)<d.d/2))return!0}return!1}function Br(n,e,t,i,s=[]){let r=[Math.round(n),Math.round(e)],o=[Math.round(t),Math.round(i)],a=[r],c=new Map([[r.join(),null]]),l=null;for(let u=0;u<a.length&&u<1500;u++){let d=a[u];if(Math.hypot(d[0]-o[0],d[1]-o[1])<1.5){l=d;break}for(let[p,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let _=[d[0]+p,d[1]+g],m=_.join();Math.abs(_[0])>16||Math.abs(_[1])>16||c.has(m)||An(_[0],_[1],.45,s)||(c.set(m,d),a.push(_))}}if(!l)return[];let h=[];for(;l&&l.join()!==r.join();)h.unshift({x:l[0],z:l[1]}),l=c.get(l.join());return h}function Vl(n,e){let t=Fr[e];return n.phase!=="buy"||!t||n.purchases.includes(e)||n.credits<t.cost?!1:(n.credits-=t.cost,n.spent+=t.cost,n.purchases.push(e),!0)}function Wl(n,e){return!["playing","buy"].includes(n.phase)||!n.owned.includes(e)||n.weapon===e?!1:(qd(n,e),n.cooldown=Math.max(.2,n.weaponReady?.[e]||0),!0)}function Xl(n){return n.phase!=="buy"?!1:(n.phase="playing",n.hp=100,n.owned=["pistol","knife",...n.purchases.filter(e=>ot[e])],n.weapon=n.purchases.includes("sniper")?"sniper":n.purchases.includes("carbine")?"carbine":"pistol",Object.assign(n,kl(n.owned)),n.maxAmmo=ot[n.weapon].mag,n.ammo=n.maxAmmo,n.reload=0,n.cooldown=0,n.weaponReady={},n.time=105-n.round*10,n.defuse=0,n.verified=!1,n.checked=!1,n.attempts=0,n.kills=0,n.x=0,n.z=14,n.y=1.65,n.jumpY=0,n.vy=0,n.crouch=!1,!0)}function Ea(n,e=8){return n.phase!=="playing"||!Number.isFinite(e)||e<=0?!1:(n.hp=Math.max(0,n.hp-e),n.defuse=0,n.hp||(n.phase="dying"),!0)}function wa(n,e=[]){if(n.phase!=="playing")return null;if(Math.hypot(n.x,n.z+13)<2.7)return{type:n.verified?"defuse":"check",key:n.verified?"E":"F"};let t=e.filter(i=>Math.hypot(i.x-n.x,i.z-n.z)<2.7).sort((i,s)=>Math.hypot(i.x-n.x,i.z-n.z)-Math.hypot(s.x-n.x,s.z-n.z))[0];return t?{type:"door",id:t.id,key:"E",open:t.open}:null}function ql(n,e,t=si[n.round-1]){return n.phase!=="playing"||!n.checked||n.verified?!1:(n.attempts++,e===t.right?(n.verified=!0,n.attempts===1&&n.decisionCorrect++,n.feedback=t.why,!0):(n.feedback="\u518D\u6838\u5C0D\u7E3D\u984D\u3001\u9700\u8981\u540C\u5230\u5E33\u65E5\u671F\u3002"+t.why,!1))}function Ta(n){return{judgement:Math.round(n.decisionCorrect/3*80),reserve:n.earned>0?Math.round(n.credits/n.earned*20):n.spent===0?20:0,accuracy:n.shots?Math.round(n.hits/n.shots*100):0}}function Yl(n,e,t=!1){if(n.phase!=="playing"||!e||e.hp<=0)return null;let i=ot[n.weapon],s=t&&n.weapon!=="knife";return e.hp=Math.max(0,n.weapon==="knife"?0:e.hp-i.damage*(s?3:1)),s&&n.headshots++,!e.hp&&!e.rewarded?(e.rewarded=!0,n.kills++,n.totalKills++,n.credits+=100,n.earned+=100,{head:s,killed:!0,coins:100}):{head:s,killed:!1,coins:0}}var qs=18,zr=.12,Ql=ot.bazooka.range;function Jl(n,e,t,i){let s=Math.hypot(t.x,t.y,t.z);return{id:crypto.randomUUID(),owner:n,position:{...e},previousPosition:{...e},velocity:{x:t.x*qs/s,y:t.y*qs/s,z:t.z*qs/s},spawnTime:i,travelled:0,active:!0,exploded:!1}}function Ra(n,e,t,i){let s=0,r=1;for(let[o,a,c]of[["x",t.x-t.w/2,t.x+t.w/2],["y",t.base||0,(t.base||0)+t.h],["z",t.z-t.d/2,t.z+t.d/2]]){let l=n[o],h=e[o];if(!h){if(l<a-i||l>c+i)return 1/0;continue}let u=(a-i-l)/h,d=(c+i-l)/h;if(s=Math.max(s,Math.min(u,d)),r=Math.min(r,Math.max(u,d)),s>r)return 1/0}return s}function Zl(n,e,t,i){if(!n.active||e<=0)return null;let s=Math.min(Ql-n.travelled,e*qs),r=Object.fromEntries(Object.entries(n.velocity).map(([h,u])=>[h,u*s/qs])),o=n.position,a=r.y<0&&o.y+r.y<=zr?Math.max(0,(zr-o.y)/r.y):1/0,c=null;for(let h of t)a=Math.min(a,Ra(o,r,h,zr));for(let h of i){if(h.hp<=0)continue;let u=Ra(o,r,{x:h.x,z:h.z,w:1.1,d:.95,h:1.9},zr);u<a&&(a=u,c=h.id)}let l=Math.min(1,a);return n.previousPosition=o,n.position={x:o.x+r.x*l,y:o.y+r.y*l,z:o.z+r.z*l},n.travelled+=s*l,!Number.isFinite(a)&&n.travelled<Ql-1e-8?null:(n.active=!1,n.exploded=!0,{id:n.id,owner:n.owner,position:{...n.position},direct:c})}function Ca(n,e,t,i=!1){if(!i&&e.id===n.direct)return ot.bazooka.damage;let s=n.position,r={x:e.x-s.x,y:(e.y??1.05)-s.y,z:e.z-s.z},o=Math.hypot(r.x,r.y,r.z),{blastRadius:a,splash:c,selfCap:l}=ot.bazooka;return o>=a||t.some(h=>Ra(s,r,h,0)<1)?0:Math.min(i?l:c,Math.round(c*(1-o/a)))}var Yd=0,Kl=1,Qd=2;var Pu=1,ol=2,Xn=3,mi=0,Zt=1,Mn=2;var di=0,ps=1,$l=2,jl=3,eh=4,Jd=5,Pi=100,Zd=101,Kd=102,th=103,nh=104,$d=200,jd=201,ef=202,tf=203,fc=204,pc=205,nf=206,sf=207,rf=208,of=209,af=210,cf=211,lf=212,hf=213,uf=214,df=0,ff=1,pf=2,_o=3,mf=4,gf=5,_f=6,Af=7,Iu=0,xf=1,yf=2,fi=0,vf=1,Mf=2,bf=3,Sf=4,Ef=5,wf=6;var Du=300,_s=301,As=302,mc=303,gc=304,Zo=306,rr=1e3,bn=1001,_c=1002,Qt=1003,ih=1004;var Pa=1005;var on=1006,Tf=1007;var or=1008;var pi=1009,Rf=1010,Cf=1011,al=1012,Lu=1013,hi=1014,ui=1015,ar=1016,Nu=1017,Uu=1018,Li=1020,Pf=1021,Sn=1023,If=1024,Df=1025,Ni=1026,xs=1027,Lf=1028,Fu=1029,Nf=1030,Ou=1031,Bu=1033,Ia=33776,Da=33777,La=33778,Na=33779,sh=35840,rh=35841,oh=35842,ah=35843,zu=36196,ch=37492,lh=37496,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,_h=37815,Ah=37816,xh=37817,yh=37818,vh=37819,Mh=37820,bh=37821,Ua=36492,Sh=36494,Eh=36495,Uf=36283,wh=36284,Th=36285,Rh=36286;var Ao=2300,xo=2301,Fa=2302,Ch=2400,Ph=2401,Ih=2402;var ku=3e3,Ui=3001,Ff=3200,Of=3201,Gu=0,Bf=1,an="",_t="srgb",Zn="srgb-linear",cl="display-p3",Ko="display-p3-linear",yo="linear",at="srgb",vo="rec709",Mo="p3";var Xi=7680;var Dh=519,zf=512,kf=513,Gf=514,Hu=515,Hf=516,Vf=517,Wf=518,Xf=519,Ac=35044;var Lh="300 es",xc=1035,Qn=2e3,bo=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oa=Math.PI/180,yc=180/Math.PI;function Jn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function qf(n,e){return(n%e+e)%e}function Ba(n,e,t){return(1-t)*n+t*e}function Nh(n){return(n&n-1)===0&&n!==0}function vc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],v=s[1],A=s[4],E=s[7],C=s[2],R=s[5],w=s[8];return r[0]=o*_+a*v+c*C,r[3]=o*m+a*A+c*R,r[6]=o*f+a*E+c*w,r[1]=l*_+h*v+u*C,r[4]=l*m+h*A+u*R,r[7]=l*f+h*E+u*w,r[2]=d*_+p*v+g*C,r[5]=d*m+p*A+g*R,r[8]=d*f+p*E+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},za=new Ye;function Vu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function So(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){let n=So("canvas");return n.style.display="block",n}var Uh={};function er(n){n in Uh||(Uh[n]=!0,console.warn(n))}var Fh=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Oh=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[Zn]:{transfer:yo,primaries:vo,toReference:n=>n,fromReference:n=>n},[_t]:{transfer:at,primaries:vo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ko]:{transfer:yo,primaries:Mo,toReference:n=>n.applyMatrix3(Oh),fromReference:n=>n.applyMatrix3(Fh)},[cl]:{transfer:at,primaries:Mo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Oh),fromReference:n=>n.applyMatrix3(Fh).convertLinearToSRGB()}},Qf=new Set([Zn,Ko]),je={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=kr[e].toReference,s=kr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return kr[n].primaries},getTransfer:function(n){return n===an?yo:kr[n].transfer}};function ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qi,Eo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=So("canvas")),qi.width=e.width,qi.height=e.height;let i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ms(t[i]/255)*255):t[i]=ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jf=0,wo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zf=0,cn=class n extends gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bn,s=bn,r=on,o=or,a=Sn,c=pi,l=n.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Jn(),this.name="",this.source=new wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ui?_t:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Ui:ku}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ui?_t:an}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Du;cn.DEFAULT_ANISOTROPY=1;var It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,E=(p+1)/2,C=(f+1)/2,R=(h+d)/4,w=(u+_)/4,U=(g+m)/4;return A>E&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=w/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=U/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ui?_t:an),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Mc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},To=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bc=class extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*_,v=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){let C=Math.sqrt(A),R=Math.atan2(C,f*v);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let E=a*v;if(c=c*m+d*E,l=l*m+p*E,h=h*m+g*E,u=u*m+_*E,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new I,Bh=new _i,Fi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Hr.subVectors(this.max,Ys),Yi.subVectors(e.a,Ys),Qi.subVectors(e.b,Ys),Ji.subVectors(e.c,Ys),ri.subVectors(Qi,Yi),oi.subVectors(Ji,Qi),Ei.subVectors(Yi,Ji);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!Va(t,Yi,Qi,Ji,Hr)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Yi,Qi,Ji,Hr))?!1:(Vr.crossVectors(ri,oi),t=[Vr.x,Vr.y,Vr.z],Va(t,Yi,Qi,Ji,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},kn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,Gr=new Fi,Yi=new I,Qi=new I,Ji=new I,ri=new I,oi=new I,Ei=new I,Ys=new I,Hr=new I,Vr=new I,wi=new I;function Va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Kf=new Fi,Qs=new I,Wa=new I,ys=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Kf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Wa)),this.expandByPoint(Qs.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new I,Xa=new I,Wr=new I,ai=new I,qa=new I,Xr=new I,Ya=new I,cr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xa.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Xa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=ai.dot(this.direction),c=-ai.dot(Wr),l=ai.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xa).addScaledVector(Wr,d),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){qa.subVectors(t,e),Xr.subVectors(i,e),Ya.crossVectors(qa,Xr);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);let c=a*this.direction.dot(Xr.crossVectors(ai,Xr));if(c<0)return null;let l=a*this.direction.dot(qa.cross(ai));if(l<0||c+l>o)return null;let h=-a*ai.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($f,e,jf)}lookAt(e,t,i){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ci.crossVectors(i,jt),ci.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ci.crossVectors(i,jt)),ci.normalize(),qr.crossVectors(jt,ci),s[0]=ci.x,s[4]=qr.x,s[8]=jt.x,s[1]=ci.y,s[5]=qr.y,s[9]=jt.y,s[2]=ci.z,s[6]=qr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],A=i[7],E=i[11],C=i[15],R=s[0],w=s[4],U=s[8],y=s[12],b=s[1],F=s[5],X=s[9],j=s[13],L=s[2],B=s[6],W=s[10],$=s[14],J=s[3],q=s[7],ie=s[11],ee=s[15];return r[0]=o*R+a*b+c*L+l*J,r[4]=o*w+a*F+c*B+l*q,r[8]=o*U+a*X+c*W+l*ie,r[12]=o*y+a*j+c*$+l*ee,r[1]=h*R+u*b+d*L+p*J,r[5]=h*w+u*F+d*B+p*q,r[9]=h*U+u*X+d*W+p*ie,r[13]=h*y+u*j+d*$+p*ee,r[2]=g*R+_*b+m*L+f*J,r[6]=g*w+_*F+m*B+f*q,r[10]=g*U+_*X+m*W+f*ie,r[14]=g*y+_*j+m*$+f*ee,r[3]=v*R+A*b+E*L+C*J,r[7]=v*w+A*F+E*B+C*q,r[11]=v*U+A*X+E*W+C*ie,r[15]=v*y+A*j+E*$+C*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,A=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,E=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*v+i*A+s*E+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=v*w,e[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*w,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*f+i*c*f)*w,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*w,e[4]=A*w,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*w,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*w,e[8]=E*w,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*f-t*u*f)*w,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*f+t*a*f)*w,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*w,e[12]=C*w,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*w,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,v=c*l,A=c*h,E=c*u,C=i.x,R=i.y,w=i.z;return s[0]=(1-(_+f))*C,s[1]=(p+E)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(p-E)*R,s[5]=(1-(d+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+A)*w,s[9]=(m-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);let l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Qn){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===Qn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Qn){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,p=(i+s)*h,g,_;if(a===Qn)g=(o+r)*u,_=-2*u;else if(a===bo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zi=new I,yn=new xt,$f=new I(0,0,0),jf=new I(1,1,1),ci=new I,qr=new I,jt=new I,zh=new xt,kh=new _i,Ro=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ro.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,Gh=new I,Ki=new _i,Hn=new xt,Yr=new I,Js=new I,tp=new I,np=new _i,Hh=new I(1,0,0),Vh=new I(0,1,0),Wh=new I(0,0,1),ip={type:"added"},sp={type:"removed"},Ut=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Ro,i=new _i,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Js,Yr,this.up):Hn.lookAt(Yr,Js,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new I,Vn=new I,Qa=new I,Wn=new I,$i=new I,ji=new I,Xh=new I,Ja=new I,Za=new I,Ka=new I,Qr=!1,Di=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Vn.subVectors(i,t),Qa.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Vn),c=vn.dot(Qa),l=Vn.dot(Vn),h=Vn.dot(Qa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,t,i,s,r,o,a,c){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Vn.subVectors(e,t),vn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,i),ji.subVectors(r,i),Ja.subVectors(e,i);let c=$i.dot(Ja),l=ji.dot(Ja);if(c<=0&&l<=0)return t.copy(i);Za.subVectors(e,s);let h=$i.dot(Za),u=ji.dot(Za);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector($i,o);Ka.subVectors(e,r);let p=$i.dot(Ka),g=ji.dot(Ka);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ji,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Xh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Xh,a);let f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector($i,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=qf(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let i=Wu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return je.fromWorkingColorSpace(zt.copy(this),e),Math.round(kt(zt.r*255,0,255))*65536+Math.round(kt(zt.g*255,0,255))*256+Math.round(kt(zt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=_t){je.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Jr);let i=Ba(li.h,Jr.h,t),s=Ba(li.s,Jr.s,t),r=Ba(li.l,Jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Be;Be.NAMES=Wu;var rp=0,$n=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=ps,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new I,Zr=new ae,yt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}};var Co=class extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Po=class extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var et=class extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var op=0,rn=new xt,ja=new Ut,es=new I,en=new Fi,Zs=new Fi,Pt=new I,vt=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?Po:Co)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(en.min,Zs.min),en.expandByPoint(Pt),Pt.addVectors(en.max,Zs.max),en.expandByPoint(Pt)):(en.expandByPoint(Zs.min),en.expandByPoint(Zs.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(e,l),Pt.add(es)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new I,h[b]=new I;let u=new I,d=new I,p=new I,g=new ae,_=new ae,m=new ae,f=new I,v=new I;function A(b,F,X){u.fromArray(s,b*3),d.fromArray(s,F*3),p.fromArray(s,X*3),g.fromArray(o,b*2),_.fromArray(o,F*2),m.fromArray(o,X*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);let j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(j),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(j),l[b].add(f),l[F].add(f),l[X].add(f),h[b].add(v),h[F].add(v),h[X].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,F=E.length;b<F;++b){let X=E[b],j=X.start,L=X.count;for(let B=j,W=j+L;B<W;B+=3)A(i[B+0],i[B+1],i[B+2])}let C=new I,R=new I,w=new I,U=new I;function y(b){w.fromArray(r,b*3),U.copy(w);let F=l[b];C.copy(F),C.sub(w.multiplyScalar(w.dot(F))).normalize(),R.crossVectors(U,F);let j=R.dot(h[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=j}for(let b=0,F=E.length;b<F;++b){let X=E[b],j=X.start,L=X.count;for(let B=j,W=j+L;B<W;B+=3)y(i[B+0]),y(i[B+1]),y(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new xt,Ti=new cr,Kr=new ys,Yh=new I,ts=new I,ns=new I,is=new I,ec=new I,$r=new I,jr=new ae,eo=new ae,to=new ae,Qh=new I,Jh=new I,Zh=new I,no=new I,io=new I,At=class extends Ut{constructor(e=new vt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ec.fromBufferAttribute(u,e),o?$r.addScaledVector(ec,h):$r.addScaledVector(ec.sub(t),h))}t.add($r)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Kr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Kr,Yh)===null||Ti.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(qh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(qh),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,C=A;E<C;E+=3){let R=a.getX(E),w=a.getX(E+1),U=a.getX(E+2);s=so(this,f,e,i,l,h,u,R,w,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);s=so(this,o,e,i,l,h,u,v,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,C=A;E<C;E+=3){let R=E,w=E+1,U=E+2;s=so(this,f,e,i,l,h,u,R,w,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=m,A=m+1,E=m+2;s=so(this,o,e,i,l,h,u,v,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ap(n,e,t,i,s,r,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:n}}function so(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ts),n.getVertexPosition(c,ns),n.getVertexPosition(l,is);let h=ap(n,e,t,i,ts,ns,is,no);if(h){s&&(jr.fromBufferAttribute(s,a),eo.fromBufferAttribute(s,c),to.fromBufferAttribute(s,l),h.uv=Di.getInterpolation(no,ts,ns,is,jr,eo,to,new ae)),r&&(jr.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,c),to.fromBufferAttribute(r,l),h.uv1=Di.getInterpolation(no,ts,ns,is,jr,eo,to,new ae),h.uv2=h.uv1),o&&(Qh.fromBufferAttribute(o,a),Jh.fromBufferAttribute(o,c),Zh.fromBufferAttribute(o,l),h.normal=Di.getInterpolation(no,ts,ns,is,Qh,Jh,Zh,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};Di.getNormal(ts,ns,is,u.normal),h.face=u}return h}var ln=class n extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,m,f,v,A,E,C,R,w,U,y){let b=E/w,F=C/U,X=E/2,j=C/2,L=R/2,B=w+1,W=U+1,$=0,J=0,q=new I;for(let ie=0;ie<W;ie++){let ee=ie*F-j;for(let de=0;de<B;de++){let V=de*b-X;q[_]=V*v,q[m]=ee*A,q[f]=L,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(de/w),u.push(1-ie/U),$+=1}}for(let ie=0;ie<U;ie++)for(let ee=0;ee<w;ee++){let de=d+ee+B*ie,V=d+ee+B*(ie+1),re=d+(ee+1)+B*(ie+1),pe=d+(ee+1)+B*ie;c.push(de,V,pe),c.push(V,re,pe),J+=6}a.addGroup(p,J,y),p+=J,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let s in i)e[s]=i[s]}return e}function cp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xu(n){return n.getRenderTarget()===null?n.outputColorSpace:je.workingColorSpace}var lp={clone:vs,merge:Yt},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Io=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nt=class extends Io{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=-90,rs=1,Sc=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Nt(ss,rs,e,t);r.layers=this.layers,this.add(r);let o=new Nt(ss,rs,e,t);o.layers=this.layers,this.add(o);let a=new Nt(ss,rs,e,t);a.layers=this.layers,this.add(a);let c=new Nt(ss,rs,e,t);c.layers=this.layers,this.add(c);let l=new Nt(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Do=class extends cn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ec=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ui?_t:an),this.texture=new Do(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:di});r.uniforms.tEquirect.value=t;let o=new At(s,r),a=t.minFilter;return t.minFilter===or&&(t.minFilter=on),new Sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},tc=new I,dp=new I,fp=new Ye,qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=tc.subVectors(i,t).cross(dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fp.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new ys,ro=new I,hr=class{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],v=s[13],A=s[14],E=s[15];if(i[0].setComponents(c-r,d-l,m-p,E-f).normalize(),i[1].setComponents(c+r,d+l,m+p,E+f).normalize(),i[2].setComponents(c+o,d+h,m+g,E+v).normalize(),i[3].setComponents(c-o,d-h,m-g,E-v).normalize(),i[4].setComponents(c-a,d-u,m-_,E-A).normalize(),t===Qn)i[5].setComponents(c+a,d+u,m+_,E+A).normalize();else if(t===bo)i[5].setComponents(a,u,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let f=g[_];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ur=class n extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let v=f*d-o;for(let A=0;A<l;A++){let E=A*u-r;g.push(E,-v,0),_.push(0,0,1),m.push(A/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){let A=v+l*f,E=v+l*(f+1),C=v+1+l*(f+1),R=v+1+l*f;p.push(A,E,R),p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
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
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`
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
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jm=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
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
}`,vg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Lg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:_p,alphamap_pars_fragment:Ap,alphatest_fragment:xp,alphatest_pars_fragment:yp,aomap_fragment:vp,aomap_pars_fragment:Mp,batching_pars_vertex:bp,batching_vertex:Sp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Lp,color_fragment:Np,color_pars_fragment:Up,color_pars_vertex:Fp,color_vertex:Op,common:Bp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Hp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:Jp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:cm,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:vm,map_fragment:Mm,map_pars_fragment:bm,map_particle_fragment:Sm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Dm,normal_fragment_maps:Lm,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Gm,opaque_fragment:Hm,packing:Vm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Km,shadowmap_vertex:$m,shadowmask_pars_fragment:jm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:cg,transmission_pars_fragment:lg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:Ag,cube_frag:xg,depth_vert:yg,depth_frag:vg,distanceRGBA_vert:Mg,distanceRGBA_frag:bg,equirect_vert:Sg,equirect_frag:Eg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Dg,meshmatcap_frag:Lg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:kg,meshtoon_frag:Gg,points_vert:Hg,points_frag:Vg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},ue={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ln={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ln.physical={uniforms:Yt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var oo={r:0,b:0,g:0};function Qg(n,e,t,i,s,r,o){let a=new Be(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let v=!1,A=f.isScene===!0?f.background:null;A&&A.isTexture&&(A=(f.backgroundBlurriness>0?t:e).get(A)),A===null?_(a,c):A&&A.isColor&&(_(A,1),v=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Zo)?(h===void 0&&(h=new At(new ln(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:vs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=je.getTransfer(A.colorSpace)!==at,(u!==A||d!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new At(new ur(2,2),new jn({name:"BackgroundMaterial",uniforms:vs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=je.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(oo,Xu(n)),i.buffers.color.setClear(oo.r,oo.g,oo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Jg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(L,B,W,$,J){let q=!1;if(o){let ie=_($,W,B);l!==ie&&(l=ie,p(l.object)),q=f(L,$,W,J),q&&v(L,$,W,J)}else{let ie=B.wireframe===!0;(l.geometry!==$.id||l.program!==W.id||l.wireframe!==ie)&&(l.geometry=$.id,l.program=W.id,l.wireframe=ie,q=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,U(L,B,W,$),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,B,W){let $=W.wireframe===!0,J=a[L.id];J===void 0&&(J={},a[L.id]=J);let q=J[B.id];q===void 0&&(q={},J[B.id]=q);let ie=q[$];return ie===void 0&&(ie=m(d()),q[$]=ie),ie}function m(L){let B=[],W=[],$=[];for(let J=0;J<s;J++)B[J]=0,W[J]=0,$[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:$,object:L,attributes:{},index:null}}function f(L,B,W,$){let J=l.attributes,q=B.attributes,ie=0,ee=W.getAttributes();for(let de in ee)if(ee[de].location>=0){let re=J[de],pe=q[de];if(pe===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),re===void 0||re.attribute!==pe||pe&&re.data!==pe.data)return!0;ie++}return l.attributesNum!==ie||l.index!==$}function v(L,B,W,$){let J={},q=B.attributes,ie=0,ee=W.getAttributes();for(let de in ee)if(ee[de].location>=0){let re=q[de];re===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));let pe={};pe.attribute=re,re&&re.data&&(pe.data=re.data),J[de]=pe,ie++}l.attributes=J,l.attributesNum=ie,l.index=$}function A(){let L=l.newAttributes;for(let B=0,W=L.length;B<W;B++)L[B]=0}function E(L){C(L,0)}function C(L,B){let W=l.newAttributes,$=l.enabledAttributes,J=l.attributeDivisors;W[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),J[L]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),J[L]=B)}function R(){let L=l.newAttributes,B=l.enabledAttributes;for(let W=0,$=B.length;W<$;W++)B[W]!==L[W]&&(n.disableVertexAttribArray(W),B[W]=0)}function w(L,B,W,$,J,q,ie){ie===!0?n.vertexAttribIPointer(L,B,W,J,q):n.vertexAttribPointer(L,B,W,$,J,q)}function U(L,B,W,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();let J=$.attributes,q=W.getAttributes(),ie=B.defaultAttributeValues;for(let ee in q){let de=q[ee];if(de.location>=0){let V=J[ee];if(V===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let re=V.normalized,pe=V.itemSize,be=t.get(V);if(be===void 0)continue;let xe=be.buffer,Ie=be.type,Ne=be.bytesPerElement,we=i.isWebGL2===!0&&(Ie===n.INT||Ie===n.UNSIGNED_INT||V.gpuType===Lu);if(V.isInterleavedBufferAttribute){let Ue=V.data,P=Ue.stride,ce=V.offset;if(Ue.isInstancedInterleavedBuffer){for(let Y=0;Y<de.locationSize;Y++)C(de.location+Y,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Y=0;Y<de.locationSize;Y++)E(de.location+Y);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Y=0;Y<de.locationSize;Y++)w(de.location+Y,pe/de.locationSize,Ie,re,P*Ne,(ce+pe/de.locationSize*Y)*Ne,we)}else{if(V.isInstancedBufferAttribute){for(let Ue=0;Ue<de.locationSize;Ue++)C(de.location+Ue,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ue=0;Ue<de.locationSize;Ue++)E(de.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Ue=0;Ue<de.locationSize;Ue++)w(de.location+Ue,pe/de.locationSize,Ie,re,pe*Ne,pe/de.locationSize*Ue*Ne,we)}}else if(ie!==void 0){let re=ie[ee];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(de.location,re);break;case 3:n.vertexAttrib3fv(de.location,re);break;case 4:n.vertexAttrib4fv(de.location,re);break;default:n.vertexAttrib1fv(de.location,re)}}}}R()}function y(){X();for(let L in a){let B=a[L];for(let W in B){let $=B[W];for(let J in $)g($[J].object),delete $[J];delete B[W]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let B=a[L.id];for(let W in B){let $=B[W];for(let J in $)g($[J].object),delete $[J];delete B[W]}delete a[L.id]}function F(L){for(let B in a){let W=a[B];if(W[L.id]===void 0)continue;let $=W[L.id];for(let J in $)g($[J].object),delete $[J];delete W[L.id]}}function X(){j(),h=!0,l!==c&&(l=c,p(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:E,disableUnusedAttributes:R}}function Zg(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Kg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,E=o||e.has("OES_texture_float"),C=A&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:R}}function $g(n){let e=this,t=null,i=0,s=!1,r=!1,o=new qn,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:i,A=v*4,E=f.clippingState||null;c.value=E,E=h(g,d,A,p);for(let C=0;C!==A;++C)E[C]=t[C];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,E=p;A!==_;++A,E+=4)o.copy(u[A]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jg(n){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=_s:a===gc&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===mc||a===gc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ec(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Lo=class extends Io{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=4,Kh=[.125,.215,.35,.446,.526,.582],Ii=20,nc=new Lo,$h=new Be,ic=null,sc=0,rc=0,Ci=(1+Math.sqrt(5))/2,os=1/Ci,jh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ci,os),new I(0,Ci,-os),new I(os,0,Ci),new I(-os,0,Ci),new I(Ci,os,0),new I(-Ci,os,0)],No=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,sc,rc),e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:ar,format:Sn,colorSpace:Zn,depthBuffer:!1},s=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=t0(r,e,t)}return s}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,i,s){let a=new Nt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=fi,h.autoClear=!1;let p=new Gt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new At(new ln,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy($h),_=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let A=this._cubeSize;ao(s,v*A,f>2?A:0,A,A),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===_s||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ao(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,nc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jh[(s-1)%jh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new At(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let f=[],v=0;for(let w=0;w<Ii;++w){let U=w/_,y=Math.exp(-U*U/2);f.push(y),w===0?v+=y:w<m&&(v+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;let E=this._sizeLods[s],C=3*E*(s>A-us?s-A+us:0),R=4*(this._cubeSize-E);ao(t,C,R,3*E,2*E),c.setRenderTarget(t),c.render(u,nc)}};function e0(n){let e=[],t=[],i=[],s=n,r=n-us+1+Kh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-us?c=Kh[o-n+us-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),A=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,U=R>2?0:-1,y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(y,_*g*R),A.set(d,m*g*R);let b=[R,R,R,R,R,R];E.set(b,f*g*R)}let C=new vt;C.setAttribute("position",new yt(v,_)),C.setAttribute("uv",new yt(A,m)),C.setAttribute("faceIndex",new yt(E,f)),e.push(C),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eu(n,e,t){let i=new Kn(n,e,t);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function t0(n,e,t){let i=new Float32Array(Ii),s=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ll(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function tu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function nu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function n0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===mc||c===gc,h=c===_s||c===As;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new No(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new No(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function i0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function s0(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let A=0,E=v.length;A<E;A+=3){let C=v[A+0],R=v[A+1],w=v[A+2];d.push(C,R,R,w,w,C)}}else if(g!==void 0){let v=g.array;_=g.version;for(let A=0,E=v.length/3-1;A<E;A+=3){let C=A+0,R=A+1,w=A+2;d.push(C,R,R,w,w,C)}}else return;let m=new(Vu(d)?Po:Co)(d,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function r0(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,_),t.update(g,r,_)}function d(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function o0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function a0(n,e){return n[0]-e[0]}function c0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function l0(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new It,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],U=0;v===!0&&(U=1),A===!0&&(U=2),E===!0&&(U=3);let y=h.attributes.position.count*U,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let F=new Float32Array(y*b*4*g),X=new To(F,y,b,g);X.type=ui,X.needsUpdate=!0;let j=U*4;for(let B=0;B<g;B++){let W=C[B],$=R[B],J=w[B],q=y*b*4*B;for(let ie=0;ie<W.count;ie++){let ee=ie*j;v===!0&&(o.fromBufferAttribute(W,ie),F[q+ee+0]=o.x,F[q+ee+1]=o.y,F[q+ee+2]=o.z,F[q+ee+3]=0),A===!0&&(o.fromBufferAttribute($,ie),F[q+ee+4]=o.x,F[q+ee+5]=o.y,F[q+ee+6]=o.z,F[q+ee+7]=0),E===!0&&(o.fromBufferAttribute(J,ie),F[q+ee+8]=o.x,F[q+ee+9]=o.y,F[q+ee+10]=o.z,F[q+ee+11]=J.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new ae(y,b)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let A=0;A<p;A++)g[A]=[A,0];i[h.id]=g}for(let A=0;A<p;A++){let E=g[A];E[0]=A,E[1]=d[A]}g.sort(c0);for(let A=0;A<8;A++)A<p&&g[A][1]?(a[A][0]=g[A][0],a[A][1]=g[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(a0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let A=0;A<8;A++){let E=a[A],C=E[0],R=E[1];C!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+A)!==_[C]&&h.setAttribute("morphTarget"+A,_[C]),m&&h.getAttribute("morphNormal"+A)!==m[C]&&h.setAttribute("morphNormal"+A,m[C]),s[A]=R,f+=R):(_&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function h0(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Uo=class extends cn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ni&&(i=hi),i===void 0&&h===xs&&(i=Li),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yu=new cn,Qu=new Uo(1,1);Qu.compareFunction=Hu;var Ju=new To,Zu=new bc,Ku=new Do,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Cs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $o(n,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function f0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function p0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function m0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;au.set(i),n.uniformMatrix2fv(this.addr,!1,au),Tt(t,i)}}function g0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),Tt(t,i)}}function _0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;ru.set(i),n.uniformMatrix4fv(this.addr,!1,ru),Tt(t,i)}}function A0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function y0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function v0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function M0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function S0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function E0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function w0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qu:Yu;t.setTexture2D(e||r,s)}function T0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zu,s)}function R0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ku,s)}function C0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ju,s)}function P0(n){switch(n){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return A0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(n,e){n.uniform1fv(this.addr,e)}function D0(n,e){let t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function L0(n,e){let t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function N0(n,e){let t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function U0(n,e){let t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function F0(n,e){let t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O0(n,e){let t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B0(n,e){n.uniform1iv(this.addr,e)}function z0(n,e){n.uniform2iv(this.addr,e)}function k0(n,e){n.uniform3iv(this.addr,e)}function G0(n,e){n.uniform4iv(this.addr,e)}function H0(n,e){n.uniform1uiv(this.addr,e)}function V0(n,e){n.uniform2uiv(this.addr,e)}function W0(n,e){n.uniform3uiv(this.addr,e)}function X0(n,e){n.uniform4uiv(this.addr,e)}function q0(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yu,r[o])}function Y0(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zu,r[o])}function Q0(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ku,r[o])}function J0(n,e,t){let i=this.cache,s=e.length,r=$o(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ju,r[o])}function Z0(n){switch(n){case 5126:return I0;case 35664:return D0;case 35665:return L0;case 35666:return N0;case 35674:return U0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return J0}}var wc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P0(t.type)}},Tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},oc=/(\w+)(\])?(\[|\.)?/g;function cu(n,e){n.seq.push(e),n.map[e.id]=e}function K0(n,e,t){let i=n.name,s=i.length;for(oc.lastIndex=0;;){let r=oc.exec(i),o=oc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cu(t,l===void 0?new wc(a,n,e):new Tc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Rc(a),cu(t,u)),t=u}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K0(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function lu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var $0=37297,j0=0;function e_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function t_(n){let e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n),i;switch(e===t?i="":e===Mo&&t===vo?i="LinearDisplayP3ToLinearSRGB":e===vo&&t===Mo&&(i="LinearSRGBToLinearDisplayP3"),n){case Zn:case Ko:return[i,"LinearTransferOETF"];case _t:case cl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+e_(n.getShaderSource(e),o)}else return s}function n_(n,e){let t=t_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function i_(n,e){let t;switch(e){case vf:t="Linear";break;case Mf:t="Reinhard";break;case bf:t="OptimizedCineon";break;case Sf:t="ACESFilmic";break;case wf:t="AgX";break;case Ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function r_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function o_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ds(n){return n!==""}function uu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(c_,h_)}var l_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function h_(n,e){let t=Ve[e];if(t===void 0){let i=l_.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(u_,d_)}function d_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function p_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case As:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===As&&(e="ENVMAP_MODE_REFRACTION"),e}function g_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Iu:e="ENVMAP_BLENDING_MULTIPLY";break;case xf:e="ENVMAP_BLENDING_MIX";break;case yf:e="ENVMAP_BLENDING_ADD";break}return e}function __(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function A_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=f_(t),l=p_(t),h=m_(t),u=g_(t),d=__(t),p=t.isWebGL2?"":s_(t),g=r_(t),_=o_(r),m=s.createProgram(),f,v,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),v.length>0&&(v+=`
`)):(f=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),v=[p,pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==fi?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,n_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Cc(o),o=uu(o,t),o=du(o,t),a=Cc(a),a=uu(a,t),a=du(a,t),o=fu(o),a=fu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=A+f+o,C=A+v+a,R=lu(s,s.VERTEX_SHADER,E),w=lu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,R),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(X){if(n.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(w).trim(),W=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,w);else{let J=hu(s,R,"vertex"),q=hu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+J+`
`+q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||B==="")&&($=!1);$&&(X.diagnostics={runnable:W,programLog:j,vertexShader:{log:L,prefix:f},fragmentShader:{log:B,prefix:v}})}s.deleteShader(R),s.deleteShader(w),y=new gs(s,m),b=a_(s,m)}let y;this.getUniforms=function(){return y===void 0&&U(this),y};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,$0)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}var x_=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ic(e),t.set(e,i)),i}},Ic=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};function y_(n,e,t,i,s,r,o){let a=new lr,c=new Pc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,b,F,X,j){let L=X.fog,B=j.geometry,W=y.isMeshStandardMaterial?X.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),J=$&&$.mapping===Zo?$.image.height:null,q=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=ie!==void 0?ie.length:0,de=0;B.morphAttributes.position!==void 0&&(de=1),B.morphAttributes.normal!==void 0&&(de=2),B.morphAttributes.color!==void 0&&(de=3);let V,re,pe,be;if(q){let Wt=Ln[q];V=Wt.vertexShader,re=Wt.fragmentShader}else V=y.vertexShader,re=y.fragmentShader,c.update(y),pe=c.getVertexShaderID(y),be=c.getFragmentShaderID(y);let xe=n.getRenderTarget(),Ie=j.isInstancedMesh===!0,Ne=j.isBatchedMesh===!0,we=!!y.map,Ue=!!y.matcap,P=!!$,ce=!!y.aoMap,Y=!!y.lightMap,oe=!!y.bumpMap,Q=!!y.normalMap,G=!!y.displacementMap,se=!!y.emissiveMap,M=!!y.metalnessMap,x=!!y.roughnessMap,N=y.anisotropy>0,K=y.clearcoat>0,te=y.iridescence>0,Z=y.sheen>0,_e=y.transmission>0,le=N&&!!y.anisotropyMap,Ae=K&&!!y.clearcoatMap,Se=K&&!!y.clearcoatNormalMap,Ce=K&&!!y.clearcoatRoughnessMap,ne=te&&!!y.iridescenceMap,Qe=te&&!!y.iridescenceThicknessMap,De=Z&&!!y.sheenColorMap,fe=Z&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,Me=!!y.specularColorMap,He=!!y.specularIntensityMap,Ke=_e&&!!y.transmissionMap,pt=_e&&!!y.thicknessMap,Xe=!!y.gradientMap,he=!!y.alphaMap,D=y.alphaTest>0,me=!!y.alphaHash,ge=!!y.extensions,Fe=!!B.attributes.uv1,Pe=!!B.attributes.uv2,it=!!B.attributes.uv3,st=fi;return y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:re,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ne,instancing:Ie,instancingColor:Ie&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Zn,map:we,matcap:Ue,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:J,aoMap:ce,lightMap:Y,bumpMap:oe,normalMap:Q,displacementMap:d&&G,emissiveMap:se,normalMapObjectSpace:Q&&y.normalMapType===Bf,normalMapTangentSpace:Q&&y.normalMapType===Gu,metalnessMap:M,roughnessMap:x,anisotropy:N,anisotropyMap:le,clearcoat:K,clearcoatMap:Ae,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,iridescence:te,iridescenceMap:ne,iridescenceThicknessMap:Qe,sheen:Z,sheenColorMap:De,sheenRoughnessMap:fe,specularMap:Ee,specularColorMap:Me,specularIntensityMap:He,transmission:_e,transmissionMap:Ke,thicknessMap:pt,gradientMap:Xe,opaque:y.transparent===!1&&y.blending===ps,alphaMap:he,alphaTest:D,alphaHash:me,combine:y.combine,mapUv:we&&_(y.map.channel),aoMapUv:ce&&_(y.aoMap.channel),lightMapUv:Y&&_(y.lightMap.channel),bumpMapUv:oe&&_(y.bumpMap.channel),normalMapUv:Q&&_(y.normalMap.channel),displacementMapUv:G&&_(y.displacementMap.channel),emissiveMapUv:se&&_(y.emissiveMap.channel),metalnessMapUv:M&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:Ae&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(y.sheenRoughnessMap.channel),specularMapUv:Ee&&_(y.specularMap.channel),specularColorMapUv:Me&&_(y.specularColorMap.channel),specularIntensityMapUv:He&&_(y.specularIntensityMap.channel),transmissionMapUv:Ke&&_(y.transmissionMap.channel),thicknessMapUv:pt&&_(y.thicknessMap.channel),alphaMapUv:he&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Q||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Pe,vertexUv3s:it,pointsUvs:j.isPoints===!0&&!!B.attributes.uv&&(we||he),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ge&&y.extensions.derivatives===!0,extensionFragDepth:ge&&y.extensions.fragDepth===!0,extensionDrawBuffers:ge&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)b.push(F),b.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(v(b,y),A(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function A(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){let b=g[y.type],F;if(b){let X=Ln[b];F=lp.clone(X.uniforms)}else F=y.uniforms;return F}function C(y,b){let F;for(let X=0,j=l.length;X<j;X++){let L=l[X];if(L.cacheKey===b){F=L,++F.usedTimes;break}}return F===void 0&&(F=new A_(n,b,y,r),l.push(F)),F}function R(y){if(--y.usedTimes===0){let b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function w(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:U}}function v_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function M_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||M_),i.length>1&&i.sort(d||mu),s.length>1&&s.sort(d||mu)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function b_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new gu,n.set(i,[o])):s>=r.length?(o=new gu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function S_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function E_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var w_=0;function T_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R_(n,e){let t=new S_,i=E_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new xt,a=new xt;function c(h,u){let d=0,p=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let _=0,m=0,f=0,v=0,A=0,E=0,C=0,R=0,w=0,U=0,y=0;h.sort(T_);let b=u===!0?Math.PI:1;for(let X=0,j=h.length;X<j;X++){let L=h[X],B=L.color,W=L.intensity,$=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*W*b,p+=B.g*W*b,g+=B.b*W*b;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],W);y++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let ie=L.shadow,ee=i.get(L);ee.shadowBias=ie.bias,ee.shadowNormalBias=ie.normalBias,ee.shadowRadius=ie.radius,ee.shadowMapSize=ie.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=J,s.directionalShadowMatrix[_]=L.shadow.matrix,E++}s.directional[_]=q,_++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(W*b),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[f]=q;let ie=L.shadow;if(L.map&&(s.spotLightMap[w]=L.map,w++,ie.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[f]=ie.matrix,L.castShadow){let ee=i.get(L);ee.shadowBias=ie.bias,ee.shadowNormalBias=ie.normalBias,ee.shadowRadius=ie.radius,ee.shadowMapSize=ie.mapSize,s.spotShadow[f]=ee,s.spotShadowMap[f]=J,R++}f++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=q,v++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*b),q.distance=L.distance,q.decay=L.decay,L.castShadow){let ie=L.shadow,ee=i.get(L);ee.shadowBias=ie.bias,ee.shadowNormalBias=ie.normalBias,ee.shadowRadius=ie.radius,ee.shadowMapSize=ie.mapSize,ee.shadowCameraNear=ie.camera.near,ee.shadowCameraFar=ie.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=q,m++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(W*b),q.groundColor.copy(L.groundColor).multiplyScalar(W*b),s.hemi[A]=q,A++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==v||F.hemiLength!==A||F.numDirectionalShadows!==E||F.numPointShadows!==C||F.numSpotShadows!==R||F.numSpotMaps!==w||F.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=v,s.point.length=m,s.hemi.length=A,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+w-U,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=y,F.directionalLength=_,F.pointLength=m,F.spotLength=f,F.rectAreaLength=v,F.hemiLength=A,F.numDirectionalShadows=E,F.numPointShadows=C,F.numSpotShadows=R,F.numSpotMaps=w,F.numLightProbes=y,s.version=w_++)}function l(h,u){let d=0,p=0,g=0,_=0,m=0,f=u.matrixWorldInverse;for(let v=0,A=h.length;v<A;v++){let E=h[v];if(E.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(E.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function _u(n,e){let t=new R_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function C_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new _u(n,e),t.set(r,[c])):o>=a.length?(c=new _u(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Dc=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lc=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function D_(n,e,t){let i=new hr,s=new ae,r=new ae,o=new It,a=new Dc({depthPacking:Of}),c=new Lc,l={},h=t.maxTextureSize,u={[mi]:Zt,[Zt]:mi,[Mn]:Mn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:P_,fragmentShader:I_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let f=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let y=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),X=n.state;X.setBlending(di),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let j=f!==Xn&&this.type===Xn,L=f===Xn&&this.type!==Xn;for(let B=0,W=R.length;B<W;B++){let $=R[B],J=$.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let q=J.getFrameExtents();if(s.multiply(q),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,J.mapSize.y=r.y)),J.map===null||j===!0||L===!0){let ee=this.type!==Xn?{minFilter:Qt,magFilter:Qt}:{};J.map!==null&&J.map.dispose(),J.map=new Kn(s.x,s.y,ee),J.map.texture.name=$.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let ie=J.getViewportCount();for(let ee=0;ee<ie;ee++){let de=J.getViewport(ee);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),X.viewport(o),J.updateMatrices($,ee),i=J.getFrustum(),E(w,U,J.camera,$,this.type)}J.isPointLightShadow!==!0&&this.type===Xn&&v(J,U),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,F)};function v(R,w){let U=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,U,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,U,p,_,null)}function A(R,w,U,y){let b=null,F=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let X=b.uuid,j=w.uuid,L=l[X];L===void 0&&(L={},l[X]=L);let B=L[j];B===void 0&&(B=b.clone(),L[j]=B,w.addEventListener("dispose",C)),b=B}if(b.visible=w.visible,b.wireframe=w.wireframe,y===Xn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let X=n.properties.get(b);X.light=U}return b}function E(R,w,U,y,b){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Xn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let j=e.update(R),L=R.material;if(Array.isArray(L)){let B=j.groups;for(let W=0,$=B.length;W<$;W++){let J=B[W],q=L[J.materialIndex];if(q&&q.visible){let ie=A(R,q,y,b);R.onBeforeShadow(n,R,w,U,j,ie,J),n.renderBufferDirect(U,null,j,ie,R,J),R.onAfterShadow(n,R,w,U,j,ie,J)}}}else if(L.visible){let B=A(R,L,y,b);R.onBeforeShadow(n,R,w,U,j,B,null),n.renderBufferDirect(U,null,j,B,R,null),R.onAfterShadow(n,R,w,U,j,B,null)}}let X=R.children;for(let j=0,L=X.length;j<L;j++)E(X[j],w,U,y,b)}function C(R){R.target.removeEventListener("dispose",C);for(let U in l){let y=l[U],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function L_(n,e,t){let i=t.isWebGL2;function s(){let D=!1,me=new It,ge=null,Fe=new It(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!D&&(n.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){D=Pe},setClear:function(Pe,it,st,Rt,Wt){Wt===!0&&(Pe*=Rt,it*=Rt,st*=Rt),me.set(Pe,it,st,Rt),Fe.equals(me)===!1&&(n.clearColor(Pe,it,st,Rt),Fe.copy(me))},reset:function(){D=!1,ge=null,Fe.set(-1,0,0,0)}}}function r(){let D=!1,me=null,ge=null,Fe=null;return{setTest:function(Pe){Pe?Ne(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Pe){me!==Pe&&!D&&(n.depthMask(Pe),me=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case df:n.depthFunc(n.NEVER);break;case ff:n.depthFunc(n.ALWAYS);break;case pf:n.depthFunc(n.LESS);break;case _o:n.depthFunc(n.LEQUAL);break;case mf:n.depthFunc(n.EQUAL);break;case gf:n.depthFunc(n.GEQUAL);break;case _f:n.depthFunc(n.GREATER);break;case Af:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Pe}},setLocked:function(Pe){D=Pe},setClear:function(Pe){Fe!==Pe&&(n.clearDepth(Pe),Fe=Pe)},reset:function(){D=!1,me=null,ge=null,Fe=null}}}function o(){let D=!1,me=null,ge=null,Fe=null,Pe=null,it=null,st=null,Rt=null,Wt=null;return{setTest:function(rt){D||(rt?Ne(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!D&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,Xt,In){(ge!==rt||Fe!==Xt||Pe!==In)&&(n.stencilFunc(rt,Xt,In),ge=rt,Fe=Xt,Pe=In)},setOp:function(rt,Xt,In){(it!==rt||st!==Xt||Rt!==In)&&(n.stencilOp(rt,Xt,In),it=rt,st=Xt,Rt=In)},setLocked:function(rt){D=rt},setClear:function(rt){Wt!==rt&&(n.clearStencil(rt),Wt=rt)},reset:function(){D=!1,me=null,ge=null,Fe=null,Pe=null,it=null,st=null,Rt=null,Wt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,A=null,E=null,C=null,R=null,w=null,U=null,y=new Be(0,0,0),b=0,F=!1,X=null,j=null,L=null,B=null,W=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,q=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=q>=2);let ee=null,de={},V=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),pe=new It().fromArray(V),be=new It().fromArray(re);function xe(D,me,ge,Fe){let Pe=new Uint8Array(4),it=n.createTexture();n.bindTexture(D,it),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<ge;st++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(me+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return it}let Ie={};Ie[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(n.DEPTH_TEST),c.setFunc(_o),se(!1),M(Kl),Ne(n.CULL_FACE),Q(di);function Ne(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Ue(D,me){return p[D]!==me?(n.bindFramebuffer(D,me),p[D]=me,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function P(D,me){let ge=_,Fe=!1;if(D)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),D.isWebGLMultipleRenderTargets){let Pe=D.texture;if(ge.length!==Pe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let it=0,st=Pe.length;it<st;it++)ge[it]=n.COLOR_ATTACHMENT0+it;ge.length=Pe.length,Fe=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Fe=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function ce(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let Y={[Pi]:n.FUNC_ADD,[Zd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};if(i)Y[th]=n.MIN,Y[nh]=n.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(Y[th]=D.MIN_EXT,Y[nh]=D.MAX_EXT)}let oe={[$d]:n.ZERO,[jd]:n.ONE,[ef]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[rf]:n.DST_COLOR,[nf]:n.DST_ALPHA,[tf]:n.ONE_MINUS_SRC_COLOR,[pc]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[sf]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[hf]:n.CONSTANT_ALPHA,[uf]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(D,me,ge,Fe,Pe,it,st,Rt,Wt,rt){if(D===di){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(Ne(n.BLEND),f=!0),D!==Jd){if(D!==v||rt!==F){if((A!==Pi||R!==Pi)&&(n.blendEquation(n.FUNC_ADD),A=Pi,R=Pi),rt)switch(D){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,C=null,w=null,U=null,y.set(0,0,0),b=0,v=D,F=rt}return}Pe=Pe||me,it=it||ge,st=st||Fe,(me!==A||Pe!==R)&&(n.blendEquationSeparate(Y[me],Y[Pe]),A=me,R=Pe),(ge!==E||Fe!==C||it!==w||st!==U)&&(n.blendFuncSeparate(oe[ge],oe[Fe],oe[it],oe[st]),E=ge,C=Fe,w=it,U=st),(Rt.equals(y)===!1||Wt!==b)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Wt),y.copy(Rt),b=Wt),v=D,F=!1}function G(D,me){D.side===Mn?we(n.CULL_FACE):Ne(n.CULL_FACE);let ge=D.side===Zt;me&&(ge=!ge),se(ge),D.blending===ps&&D.transparent===!1?Q(di):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let Fe=D.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){X!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),X=D)}function M(D){D!==Yd?(Ne(n.CULL_FACE),D!==j&&(D===Kl?n.cullFace(n.BACK):D===Qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),j=D}function x(D){D!==L&&(J&&n.lineWidth(D),L=D)}function N(D,me,ge){D?(Ne(n.POLYGON_OFFSET_FILL),(B!==me||W!==ge)&&(n.polygonOffset(me,ge),B=me,W=ge)):we(n.POLYGON_OFFSET_FILL)}function K(D){D?Ne(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+$-1),ee!==D&&(n.activeTexture(D),ee=D)}function Z(D,me,ge){ge===void 0&&(ee===null?ge=n.TEXTURE0+$-1:ge=ee);let Fe=de[ge];Fe===void 0&&(Fe={type:void 0,texture:void 0},de[ge]=Fe),(Fe.type!==D||Fe.texture!==me)&&(ee!==ge&&(n.activeTexture(ge),ee=ge),n.bindTexture(D,me||Ie[D]),Fe.type=D,Fe.texture=me)}function _e(){let D=de[ee];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(D){pe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),pe.copy(D))}function Ke(D){be.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),be.copy(D))}function pt(D,me){let ge=u.get(me);ge===void 0&&(ge=new WeakMap,u.set(me,ge));let Fe=ge.get(D);Fe===void 0&&(Fe=n.getUniformBlockIndex(me,D.name),ge.set(D,Fe))}function Xe(D,me){let Fe=u.get(me).get(D);h.get(me)!==Fe&&(n.uniformBlockBinding(me,Fe,D.__bindingPointIndex),h.set(me,Fe))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,de={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,A=null,E=null,C=null,R=null,w=null,U=null,y=new Be(0,0,0),b=0,F=!1,X=null,j=null,L=null,B=null,W=null,pe.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ne,disable:we,bindFramebuffer:Ue,drawBuffers:P,useProgram:ce,setBlending:Q,setMaterial:G,setFlipSided:se,setCullFace:M,setLineWidth:x,setPolygonOffset:N,setScissorTest:K,activeTexture:te,bindTexture:Z,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:Ae,texImage2D:Ee,texImage3D:Me,updateUBOMapping:pt,uniformBlockBinding:Xe,texStorage2D:De,texStorage3D:fe,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:ne,compressedTexSubImage3D:Qe,scissor:He,viewport:Ke,reset:he}}function N_(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return p?new OffscreenCanvas(M,x):So("canvas")}function _(M,x,N,K){let te=1;if((M.width>K||M.height>K)&&(te=K/Math.max(M.width,M.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let Z=x?vc:Math.floor,_e=Z(te*M.width),le=Z(te*M.height);u===void 0&&(u=g(_e,le));let Ae=N?g(_e,le):u;return Ae.width=_e,Ae.height=le,Ae.getContext("2d").drawImage(M,0,0,_e,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+le+")."),Ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Nh(M.width)&&Nh(M.height)}function f(M){return a?!1:M.wrapS!==bn||M.wrapT!==bn||M.minFilter!==Qt&&M.minFilter!==on}function v(M,x){return M.generateMipmaps&&x&&M.minFilter!==Qt&&M.minFilter!==on}function A(M){n.generateMipmap(M)}function E(M,x,N,K,te=!1){if(a===!1)return x;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=x;if(x===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),x===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RGBA){let _e=te?yo:je.getTransfer(K);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=_e===at?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(M,x,N){return v(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Qt&&M.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function R(M){return M===Qt||M===ih||M===Pa?n.NEAREST:n.LINEAR}function w(M){let x=M.target;x.removeEventListener("dispose",w),y(x),x.isVideoTexture&&h.delete(x)}function U(M){let x=M.target;x.removeEventListener("dispose",U),F(x)}function y(M){let x=i.get(M);if(x.__webglInit===void 0)return;let N=M.source,K=d.get(N);if(K){let te=K[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(M),Object.keys(K).length===0&&d.delete(N)}i.remove(M)}function b(M){let x=i.get(M);n.deleteTexture(x.__webglTexture);let N=M.source,K=d.get(N);delete K[x.__cacheKey],o.memory.textures--}function F(M){let x=M.texture,N=i.get(M),K=i.get(x);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(N.__webglFramebuffer[te]))for(let Z=0;Z<N.__webglFramebuffer[te].length;Z++)n.deleteFramebuffer(N.__webglFramebuffer[te][Z]);else n.deleteFramebuffer(N.__webglFramebuffer[te]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[te])}else{if(Array.isArray(N.__webglFramebuffer))for(let te=0;te<N.__webglFramebuffer.length;te++)n.deleteFramebuffer(N.__webglFramebuffer[te]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let te=0;te<N.__webglColorRenderbuffer.length;te++)N.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[te]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let te=0,Z=x.length;te<Z;te++){let _e=i.get(x[te]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(x[te])}i.remove(x),i.remove(M)}let X=0;function j(){X=0}function L(){let M=X;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),X+=1,M}function B(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function W(M,x){let N=i.get(M);if(M.isVideoTexture&&G(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(N,M,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function $(M,x){let N=i.get(M);if(M.version>0&&N.__version!==M.version){pe(N,M,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function J(M,x){let N=i.get(M);if(M.version>0&&N.__version!==M.version){pe(N,M,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function q(M,x){let N=i.get(M);if(M.version>0&&N.__version!==M.version){be(N,M,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}let ie={[rr]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[_c]:n.MIRRORED_REPEAT},ee={[Qt]:n.NEAREST,[ih]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Tf]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},de={[zf]:n.NEVER,[Xf]:n.ALWAYS,[kf]:n.LESS,[Hu]:n.LEQUAL,[Gf]:n.EQUAL,[Wf]:n.GEQUAL,[Hf]:n.GREATER,[Vf]:n.NOTEQUAL};function V(M,x,N){if(N?(n.texParameteri(M,n.TEXTURE_WRAP_S,ie[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ie[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ie[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ee[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ee[x.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==bn||x.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Qt&&x.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Qt||x.minFilter!==Pa&&x.minFilter!==or||x.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(M,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function re(M,x){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",w));let K=x.source,te=d.get(K);te===void 0&&(te={},d.set(K,te));let Z=B(x);if(Z!==M.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),te[Z].usedTimes++;let _e=te[M.__cacheKey];_e!==void 0&&(te[M.__cacheKey].usedTimes--,_e.usedTimes===0&&b(x)),M.__cacheKey=Z,M.__webglTexture=te[Z].texture}return N}function pe(M,x,N){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let te=re(M,x),Z=x.source;t.bindTexture(K,M.__webglTexture,n.TEXTURE0+N);let _e=i.get(Z);if(Z.version!==_e.__version||te===!0){t.activeTexture(n.TEXTURE0+N);let le=je.getPrimaries(je.workingColorSpace),Ae=x.colorSpace===an?null:je.getPrimaries(x.colorSpace),Se=x.colorSpace===an||le===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ce=f(x)&&m(x.image)===!1,ne=_(x.image,Ce,!1,s.maxTextureSize);ne=se(x,ne);let Qe=m(ne)||a,De=r.convert(x.format,x.colorSpace),fe=r.convert(x.type),Ee=E(x.internalFormat,De,fe,x.colorSpace,x.isVideoTexture);V(K,x,Qe);let Me,He=x.mipmaps,Ke=a&&x.isVideoTexture!==!0&&Ee!==zu,pt=_e.__version===void 0||te===!0,Xe=C(x,ne,Qe);if(x.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?x.type===ui?Ee=n.DEPTH_COMPONENT32F:x.type===hi?Ee=n.DEPTH_COMPONENT24:x.type===Li?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:x.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ni&&Ee===n.DEPTH_COMPONENT&&x.type!==al&&x.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=hi,fe=r.convert(x.type)),x.format===xs&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,x.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Li,fe=r.convert(x.type))),pt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,De,fe,null));else if(x.isDataTexture)if(He.length>0&&Qe){Ke&&pt&&t.texStorage2D(n.TEXTURE_2D,Xe,Ee,He[0].width,He[0].height);for(let he=0,D=He.length;he<D;he++)Me=He[he],Ke?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,De,fe,Me.data):t.texImage2D(n.TEXTURE_2D,he,Ee,Me.width,Me.height,0,De,fe,Me.data);x.generateMipmaps=!1}else Ke?(pt&&t.texStorage2D(n.TEXTURE_2D,Xe,Ee,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,De,fe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,De,fe,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Ee,He[0].width,He[0].height,ne.depth);for(let he=0,D=He.length;he<D;he++)Me=He[he],x.format!==Sn?De!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,ne.depth,De,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ee,Me.width,Me.height,ne.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,ne.depth,De,fe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ee,Me.width,Me.height,ne.depth,0,De,fe,Me.data)}else{Ke&&pt&&t.texStorage2D(n.TEXTURE_2D,Xe,Ee,He[0].width,He[0].height);for(let he=0,D=He.length;he<D;he++)Me=He[he],x.format!==Sn?De!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,De,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Me.width,Me.height,De,fe,Me.data):t.texImage2D(n.TEXTURE_2D,he,Ee,Me.width,Me.height,0,De,fe,Me.data)}else if(x.isDataArrayTexture)Ke?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,De,fe,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,De,fe,ne.data);else if(x.isData3DTexture)Ke?(pt&&t.texStorage3D(n.TEXTURE_3D,Xe,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,De,fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,De,fe,ne.data);else if(x.isFramebufferTexture){if(pt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Xe,Ee,ne.width,ne.height);else{let he=ne.width,D=ne.height;for(let me=0;me<Xe;me++)t.texImage2D(n.TEXTURE_2D,me,Ee,he,D,0,De,fe,null),he>>=1,D>>=1}}else if(He.length>0&&Qe){Ke&&pt&&t.texStorage2D(n.TEXTURE_2D,Xe,Ee,He[0].width,He[0].height);for(let he=0,D=He.length;he<D;he++)Me=He[he],Ke?t.texSubImage2D(n.TEXTURE_2D,he,0,0,De,fe,Me):t.texImage2D(n.TEXTURE_2D,he,Ee,De,fe,Me);x.generateMipmaps=!1}else Ke?(pt&&t.texStorage2D(n.TEXTURE_2D,Xe,Ee,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,fe,ne)):t.texImage2D(n.TEXTURE_2D,0,Ee,De,fe,ne);v(x,Qe)&&A(K),_e.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function be(M,x,N){if(x.image.length!==6)return;let K=re(M,x),te=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);let Z=i.get(te);if(te.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+N);let _e=je.getPrimaries(je.workingColorSpace),le=x.colorSpace===an?null:je.getPrimaries(x.colorSpace),Ae=x.colorSpace===an||_e===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Se=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let he=0;he<6;he++)!Se&&!Ce?ne[he]=_(x.image[he],!1,!0,s.maxCubemapSize):ne[he]=Ce?x.image[he].image:x.image[he],ne[he]=se(x,ne[he]);let Qe=ne[0],De=m(Qe)||a,fe=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Me=E(x.internalFormat,fe,Ee,x.colorSpace),He=a&&x.isVideoTexture!==!0,Ke=Z.__version===void 0||K===!0,pt=C(x,Qe,De);V(n.TEXTURE_CUBE_MAP,x,De);let Xe;if(Se){He&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Me,Qe.width,Qe.height);for(let he=0;he<6;he++){Xe=ne[he].mipmaps;for(let D=0;D<Xe.length;D++){let me=Xe[D];x.format!==Sn?fe!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,0,0,me.width,me.height,fe,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,0,0,me.width,me.height,fe,Ee,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,Me,me.width,me.height,0,fe,Ee,me.data)}}}else{Xe=x.mipmaps,He&&Ke&&(Xe.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Me,ne[0].width,ne[0].height));for(let he=0;he<6;he++)if(Ce){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ne[he].width,ne[he].height,fe,Ee,ne[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Me,ne[he].width,ne[he].height,0,fe,Ee,ne[he].data);for(let D=0;D<Xe.length;D++){let ge=Xe[D].image[he].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,0,0,ge.width,ge.height,fe,Ee,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,Me,ge.width,ge.height,0,fe,Ee,ge.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,fe,Ee,ne[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Me,fe,Ee,ne[he]);for(let D=0;D<Xe.length;D++){let me=Xe[D];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,0,0,fe,Ee,me.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,Me,fe,Ee,me.image[he])}}}v(x,De)&&A(n.TEXTURE_CUBE_MAP),Z.__version=te.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function xe(M,x,N,K,te,Z){let _e=r.convert(N.format,N.colorSpace),le=r.convert(N.type),Ae=E(N.internalFormat,_e,le,N.colorSpace);if(!i.get(x).__hasExternalTextures){let Ce=Math.max(1,x.width>>Z),ne=Math.max(1,x.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Ae,Ce,ne,x.depth,0,_e,le,null):t.texImage2D(te,Z,Ae,Ce,ne,0,_e,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Q(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,i.get(N).__webglTexture,0,oe(x)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,i.get(N).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(M,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||Q(x)){let te=x.depthTexture;te&&te.isDepthTexture&&(te.type===ui?K=n.DEPTH_COMPONENT32F:te.type===hi&&(K=n.DEPTH_COMPONENT24));let Z=oe(x);Q(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,K,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,K,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let K=oe(x);N&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):Q(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<K.length;te++){let Z=K[te],_e=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),Ae=E(Z.internalFormat,_e,le,Z.colorSpace),Se=oe(x);N&&Q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ae,x.width,x.height):Q(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let K=i.get(x.depthTexture).__webglTexture,te=oe(x);if(x.depthTexture.format===Ni)Q(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===xs)Q(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function we(M){let x=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ne(x.__webglFramebuffer,M)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=n.createRenderbuffer(),Ie(x.__webglDepthbuffer[K],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ie(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(M,x,N){let K=i.get(M);x!==void 0&&xe(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&we(M)}function P(M){let x=M.texture,N=i.get(M),K=i.get(x);M.addEventListener("dispose",U),M.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++);let te=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,_e=m(M)||a;if(te){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)N.__webglFramebuffer[le][Ae]=n.createFramebuffer()}else N.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)N.__webglFramebuffer[le]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Z)if(s.drawBuffers){let le=M.texture;for(let Ae=0,Se=le.length;Ae<Se;Ae++){let Ce=i.get(le[Ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Q(M)===!1){let le=Z?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Ae=0;Ae<le.length;Ae++){let Se=le[Ae];N.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Ae]);let Ce=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),Qe=E(Se.internalFormat,Ce,ne,Se.colorSpace,M.isXRRenderTarget===!0),De=oe(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Qe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),V(n.TEXTURE_CUBE_MAP,x,_e);for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)xe(N.__webglFramebuffer[le][Ae],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae);else xe(N.__webglFramebuffer[le],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(x,_e)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let le=M.texture;for(let Ae=0,Se=le.length;Ae<Se;Ae++){let Ce=le[Ae],ne=i.get(Ce);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),V(n.TEXTURE_2D,Ce,_e),xe(N.__webglFramebuffer,M,Ce,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),v(Ce,_e)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,K.__webglTexture),V(le,x,_e),a&&x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)xe(N.__webglFramebuffer[Ae],M,x,n.COLOR_ATTACHMENT0,le,Ae);else xe(N.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,le,0);v(x,_e)&&A(le),t.unbindTexture()}M.depthBuffer&&we(M)}function ce(M){let x=m(M)||a,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0,te=N.length;K<te;K++){let Z=N[K];if(v(Z,x)){let _e=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(Z).__webglTexture;t.bindTexture(_e,le),A(_e),t.unbindTexture()}}}function Y(M){if(a&&M.samples>0&&Q(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,K=M.height,te=n.COLOR_BUFFER_BIT,Z=[],_e=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(M),Ae=M.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){Z.push(n.COLOR_ATTACHMENT0+Se),M.depthBuffer&&Z.push(_e);let Ce=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ce===!1&&(M.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Se]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),Ae){let ne=i.get(x[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,N,K,0,0,N,K,te,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);let Ce=i.get(x[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function oe(M){return Math.min(s.maxSamples,M.samples)}function Q(M){let x=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function G(M){let x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function se(M,x){let N=M.colorSpace,K=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===xc||N!==Zn&&N!==an&&(je.getTransfer(N)===at?a===!1?e.has("EXT_sRGB")===!0&&K===Sn?(M.format=xc,M.minFilter=on,M.generateMipmaps=!1):x=Eo.sRGBToLinear(x):(K!==Sn||te!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Ue,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Q}function U_(n,e,t){let i=t.isWebGL2;function s(r,o=an){let a,c=je.getTransfer(o);if(r===pi)return n.UNSIGNED_BYTE;if(r===Nu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Uu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Rf)return n.BYTE;if(r===Cf)return n.SHORT;if(r===al)return n.UNSIGNED_SHORT;if(r===Lu)return n.INT;if(r===hi)return n.UNSIGNED_INT;if(r===ui)return n.FLOAT;if(r===ar)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Pf)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===If)return n.LUMINANCE;if(r===Df)return n.LUMINANCE_ALPHA;if(r===Ni)return n.DEPTH_COMPONENT;if(r===xs)return n.DEPTH_STENCIL;if(r===xc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Lf)return n.RED;if(r===Fu)return n.RED_INTEGER;if(r===Nf)return n.RG;if(r===Ou)return n.RG_INTEGER;if(r===Bu)return n.RGBA_INTEGER;if(r===Ia||r===Da||r===La||r===Na)if(c===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===rh||r===oh||r===ah)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ch||r===lh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ch)return c===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===lh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===_h||r===Ah||r===xh||r===yh||r===vh||r===Mh||r===bh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ah)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ua||r===Sh||r===Eh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ua)return c===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Eh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uf||r===wh||r===Th||r===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ua)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Th)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Nc=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},F_={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Uc=class extends gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=t.getContextAttributes(),m=null,f=null,v=[],A=[],E=new ae,C=null,R=new Nt;R.layers.enable(1),R.viewport=new It;let w=new Nt;w.layers.enable(2),w.viewport=new It;let U=[R,w],y=new Nc;y.layers.enable(1),y.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=v[V];return re===void 0&&(re=new tr,v[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=v[V];return re===void 0&&(re=new tr,v[V]=re),re.getGripSpace()},this.getHand=function(V){let re=v[V];return re===void 0&&(re=new tr,v[V]=re),re.getHandSpace()};function X(V){let re=A.indexOf(V.inputSource);if(re===-1)return;let pe=v[re];pe!==void 0&&(pe.update(V.inputSource,V.frame,l||o),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",L);for(let V=0;V<v.length;V++){let re=A[V];re!==null&&(A[V]=null,v[V].disconnect(re))}b=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let re={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,pe=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?xs:Ni,pe=_.stencil?Li:hi);let xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Kn(d.textureWidth,d.textureHeight,{format:Sn,type:pi,depthTexture:new Uo(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ie=e.properties.get(f);Ie.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let re=0;re<V.removed.length;re++){let pe=V.removed[re],be=A.indexOf(pe);be>=0&&(A[be]=null,v[be].disconnect(pe))}for(let re=0;re<V.added.length;re++){let pe=V.added[re],be=A.indexOf(pe);if(be===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=A.length){A.push(pe),be=Ie;break}else if(A[Ie]===null){A[Ie]=pe,be=Ie;break}if(be===-1)break}let xe=v[be];xe&&xe.connect(pe)}}let B=new I,W=new I;function $(V,re,pe){B.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(pe.matrixWorld);let be=B.distanceTo(W),xe=re.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,Ne=xe[14]/(xe[10]-1),we=xe[14]/(xe[10]+1),Ue=(xe[9]+1)/xe[5],P=(xe[9]-1)/xe[5],ce=(xe[8]-1)/xe[0],Y=(Ie[8]+1)/Ie[0],oe=Ne*ce,Q=Ne*Y,G=be/(-ce+Y),se=G*-ce;re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(se),V.translateZ(G),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let M=Ne+G,x=we+G,N=oe-se,K=Q+(be-se),te=Ue*we/x*M,Z=P*we/x*M;V.projectionMatrix.makePerspective(N,K,te,Z,M,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=w.near=R.near=V.near,y.far=w.far=R.far=V.far,(b!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,F=y.far);let re=V.parent,pe=y.cameras;J(y,re);for(let be=0;be<pe.length;be++)J(pe[be],re);pe.length===2?$(y,R,w):y.projectionMatrix.copy(R.projectionMatrix),q(V,y,re)};function q(V,re,pe){pe===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=yc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let ie=null;function ee(V,re){if(h=re.getViewerPose(l||o),g=re,h!==null){let pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let be=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,be=!0);for(let xe=0;xe<pe.length;xe++){let Ie=pe[xe],Ne=null;if(p!==null)Ne=p.getViewport(Ie);else{let Ue=u.getViewSubImage(d,Ie);Ne=Ue.viewport,xe===0&&(e.setRenderTargetTextures(f,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(f))}let we=U[xe];we===void 0&&(we=new Nt,we.layers.enable(xe),we.viewport=new It,U[xe]=we),we.matrix.fromArray(Ie.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ie.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),xe===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),be===!0&&y.cameras.push(we)}}for(let pe=0;pe<v.length;pe++){let be=A[pe],xe=v[pe];be!==null&&xe!==void 0&&xe.update(be,re,l||o)}ie&&ie(V,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let de=new qu;de.setAnimationLoop(ee),this.setAnimationLoop=function(V){ie=V},this.dispose=function(){}}};function O_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Xu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,A,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,A):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*A,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B_(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,A){let E=A.program;i.uniformBlockBinding(v,E)}function l(v,A){let E=s[v.id];E===void 0&&(g(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",m));let C=A.program;i.updateUBOMapping(v,C);let R=e.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function h(v){let A=u();v.__bindingPointIndex=A;let E=n.createBuffer(),C=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let A=s[v.id],E=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,w=E.length;R<w;R++){let U=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,b=U.length;y<b;y++){let F=U[y];if(p(F,R,y,C)===!0){let X=F.__offset,j=Array.isArray(F.value)?F.value:[F.value],L=0;for(let B=0;B<j.length;B++){let W=j[B],$=_(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,X+L,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,A,E,C){let R=v.value,w=A+"_"+E;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{let U=C[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(v){let A=v.uniforms,E=0,C=16;for(let w=0,U=A.length;w<U;w++){let y=Array.isArray(A[w])?A[w]:[A[w]];for(let b=0,F=y.length;b<F;b++){let X=y[b],j=Array.isArray(X.value)?X.value:[X.value];for(let L=0,B=j.length;L<B;L++){let W=j[L],$=_(W),J=E%C;J!==0&&C-J<$.boundary&&(E+=C-J),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=$.storage}}}let R=E%C;return R>0&&(E+=C-R),v.__size=E,v.__cache={},this}function _(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),A}function m(v){let A=v.target;A.removeEventListener("dispose",m);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Oi=class{constructor(e={}){let{canvas:t=Yf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;let A=this,E=!1,C=0,R=0,w=null,U=-1,y=null,b=new It,F=new It,X=null,j=new Be(0),L=0,B=t.width,W=t.height,$=1,J=null,q=null,ie=new It(0,0,B,W),ee=new It(0,0,B,W),de=!1,V=new hr,re=!1,pe=!1,be=null,xe=new xt,Ie=new ae,Ne=new I,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?$:1}let P=i;function ce(S,O){for(let k=0;k<S.length;k++){let H=S[k],z=t.getContext(H,O);if(z!==null)return z}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),P===null){let O=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&O.shift(),P=ce(O,S),P===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,oe,Q,G,se,M,x,N,K,te,Z,_e,le,Ae,Se,Ce,ne,Qe,De,fe,Ee,Me,He,Ke;function pt(){Y=new i0(P),oe=new Kg(P,Y,e),Y.init(oe),Me=new U_(P,Y,oe),Q=new L_(P,Y,oe),G=new o0(P),se=new v_,M=new N_(P,Y,Q,se,oe,Me,G),x=new jg(A),N=new n0(A),K=new pp(P,oe),He=new Jg(P,Y,K,oe),te=new s0(P,K,G,He),Z=new h0(P,te,K,G),De=new l0(P,oe,M),Ce=new $g(se),_e=new y_(A,x,N,Y,oe,He,Ce),le=new O_(A,se),Ae=new b_,Se=new C_(Y,oe),Qe=new Qg(A,x,N,Q,Z,d,c),ne=new D_(A,Z,oe),Ke=new B_(P,G,oe,Q),fe=new Zg(P,Y,G,oe),Ee=new r0(P,Y,G,oe),G.programs=_e.programs,A.capabilities=oe,A.extensions=Y,A.properties=se,A.renderLists=Ae,A.shadowMap=ne,A.state=Q,A.info=G}pt();let Xe=new Uc(A,P);this.xr=Xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(B,W,!1))},this.getSize=function(S){return S.set(B,W)},this.setSize=function(S,O,k=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,W=O,t.width=Math.floor(S*$),t.height=Math.floor(O*$),k===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(B*$,W*$).floor()},this.setDrawingBufferSize=function(S,O,k){B=S,W=O,$=k,t.width=Math.floor(S*k),t.height=Math.floor(O*k),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,O,k,H){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,O,k,H),Q.viewport(b.copy(ie).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,O,k,H){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,O,k,H),Q.scissor(F.copy(ee).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){Q.setScissorTest(de=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){q=S},this.getClearColor=function(S){return S.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(S=!0,O=!0,k=!0){let H=0;if(S){let z=!1;if(w!==null){let ye=w.texture.format;z=ye===Bu||ye===Ou||ye===Fu}if(z){let ye=w.texture.type,Te=ye===pi||ye===hi||ye===al||ye===Li||ye===Nu||ye===Uu,Le=Qe.getClearColor(),Oe=Qe.getClearAlpha(),We=Le.r,ke=Le.g,Ge=Le.b;Te?(p[0]=We,p[1]=ke,p[2]=Ge,p[3]=Oe,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=We,g[1]=ke,g[2]=Ge,g[3]=Oe,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ae.dispose(),Se.dispose(),se.dispose(),x.dispose(),N.dispose(),Z.dispose(),He.dispose(),Ke.dispose(),_e.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Wt),Xe.removeEventListener("sessionend",rt),be&&(be.dispose(),be=null),Xt.stop()};function he(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=G.autoReset,O=ne.enabled,k=ne.autoUpdate,H=ne.needsUpdate,z=ne.type;pt(),G.autoReset=S,ne.enabled=O,ne.autoUpdate=k,ne.needsUpdate=H,ne.type=z}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ge(S){let O=S.target;O.removeEventListener("dispose",ge),Fe(O)}function Fe(S){Pe(S),se.remove(S)}function Pe(S){let O=se.get(S).programs;O!==void 0&&(O.forEach(function(k){_e.releaseProgram(k)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,k,H,z,ye){O===null&&(O=we);let Te=z.isMesh&&z.matrixWorld.determinant()<0,Le=Gd(S,O,k,H,z);Q.setMaterial(H,Te);let Oe=k.index,We=1;if(H.wireframe===!0){if(Oe=te.getWireframeAttribute(k),Oe===void 0)return;We=2}let ke=k.drawRange,Ge=k.attributes.position,gt=ke.start*We,$t=(ke.start+ke.count)*We;ye!==null&&(gt=Math.max(gt,ye.start*We),$t=Math.min($t,(ye.start+ye.count)*We)),Oe!==null?(gt=Math.max(gt,0),$t=Math.min($t,Oe.count)):Ge!=null&&(gt=Math.max(gt,0),$t=Math.min($t,Ge.count));let Ct=$t-gt;if(Ct<0||Ct===1/0)return;He.setup(z,H,Le,k,Oe);let zn,dt=fe;if(Oe!==null&&(zn=K.get(Oe),dt=Ee,dt.setIndex(zn)),z.isMesh)H.wireframe===!0?(Q.setLineWidth(H.wireframeLinewidth*Ue()),dt.setMode(P.LINES)):dt.setMode(P.TRIANGLES);else if(z.isLine){let qe=H.linewidth;qe===void 0&&(qe=1),Q.setLineWidth(qe*Ue()),z.isLineSegments?dt.setMode(P.LINES):z.isLineLoop?dt.setMode(P.LINE_LOOP):dt.setMode(P.LINE_STRIP)}else z.isPoints?dt.setMode(P.POINTS):z.isSprite&&dt.setMode(P.TRIANGLES);if(z.isBatchedMesh)dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)dt.renderInstances(gt,Ct,z.count);else if(k.isInstancedBufferGeometry){let qe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ya=Math.min(k.instanceCount,qe);dt.renderInstances(gt,Ct,ya)}else dt.render(gt,Ct)};function it(S,O,k){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Zt,S.needsUpdate=!0,Ur(S,O,k),S.side=mi,S.needsUpdate=!0,Ur(S,O,k),S.side=Mn):Ur(S,O,k)}this.compile=function(S,O,k=null){k===null&&(k=S),m=Se.get(k),m.init(),v.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),S!==k&&S.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(A._useLegacyLights);let H=new Set;return S.traverse(function(z){let ye=z.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let Le=ye[Te];it(Le,k,z),H.add(Le)}else it(ye,k,z),H.add(ye)}),v.pop(),m=null,H},this.compileAsync=function(S,O,k=null){let H=this.compile(S,O,k);return new Promise(z=>{function ye(){if(H.forEach(function(Te){se.get(Te).currentProgram.isReady()&&H.delete(Te)}),H.size===0){z(S);return}setTimeout(ye,10)}Y.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let st=null;function Rt(S){st&&st(S)}function Wt(){Xt.stop()}function rt(){Xt.start()}let Xt=new qu;Xt.setAnimationLoop(Rt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(S){st=S,Xe.setAnimationLoop(S),S===null?Xt.stop():Xt.start()},Xe.addEventListener("sessionstart",Wt),Xe.addEventListener("sessionend",rt),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(O),O=Xe.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,O,w),m=Se.get(S,v.length),m.init(),v.push(m),xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(xe),pe=this.localClippingEnabled,re=Ce.init(this.clippingPlanes,pe),_=Ae.get(S,f.length),_.init(),f.push(_),In(S,O,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(J,q),this.info.render.frame++,re===!0&&Ce.beginShadows();let k=m.state.shadowsArray;if(ne.render(k,S,O),re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,S),m.setupLights(A._useLegacyLights),O.isArrayCamera){let H=O.cameras;for(let z=0,ye=H.length;z<ye;z++){let Te=H[z];Pl(_,S,Te,Te.viewport)}}else Pl(_,S,O);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(A,S,O),He.resetDefaultState(),U=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function In(S,O,k,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){H&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xe);let Te=Z.update(S),Le=S.material;Le.visible&&_.push(S,Te,Le,k,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){let Te=Z.update(S),Le=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){let Oe=Te.groups;for(let We=0,ke=Oe.length;We<ke;We++){let Ge=Oe[We],gt=Le[Ge.materialIndex];gt&&gt.visible&&_.push(S,Te,gt,k,Ne.z,Ge)}}else Le.visible&&_.push(S,Te,Le,k,Ne.z,null)}}let ye=S.children;for(let Te=0,Le=ye.length;Te<Le;Te++)In(ye[Te],O,k,H)}function Pl(S,O,k,H){let z=S.opaque,ye=S.transmissive,Te=S.transparent;m.setupLightsView(k),re===!0&&Ce.setGlobalState(A.clippingPlanes,k),ye.length>0&&kd(z,ye,O,k),H&&Q.viewport(b.copy(H)),z.length>0&&Nr(z,O,k),ye.length>0&&Nr(ye,O,k),Te.length>0&&Nr(Te,O,k),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function kd(S,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let ye=oe.isWebGL2;be===null&&(be=new Kn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?ar:pi,minFilter:or,samples:ye?4:0})),A.getDrawingBufferSize(Ie),ye?be.setSize(Ie.x,Ie.y):be.setSize(vc(Ie.x),vc(Ie.y));let Te=A.getRenderTarget();A.setRenderTarget(be),A.getClearColor(j),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear();let Le=A.toneMapping;A.toneMapping=fi,Nr(S,k,H),M.updateMultisampleRenderTarget(be),M.updateRenderTargetMipmap(be);let Oe=!1;for(let We=0,ke=O.length;We<ke;We++){let Ge=O[We],gt=Ge.object,$t=Ge.geometry,Ct=Ge.material,zn=Ge.group;if(Ct.side===Mn&&gt.layers.test(H.layers)){let dt=Ct.side;Ct.side=Zt,Ct.needsUpdate=!0,Il(gt,k,H,$t,Ct,zn),Ct.side=dt,Ct.needsUpdate=!0,Oe=!0}}Oe===!0&&(M.updateMultisampleRenderTarget(be),M.updateRenderTargetMipmap(be)),A.setRenderTarget(Te),A.setClearColor(j,L),A.toneMapping=Le}function Nr(S,O,k){let H=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ye=S.length;z<ye;z++){let Te=S[z],Le=Te.object,Oe=Te.geometry,We=H===null?Te.material:H,ke=Te.group;Le.layers.test(k.layers)&&Il(Le,O,k,Oe,We,ke)}}function Il(S,O,k,H,z,ye){S.onBeforeRender(A,O,k,H,z,ye),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(A,O,k,H,S,ye),z.transparent===!0&&z.side===Mn&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,A.renderBufferDirect(k,O,H,z,S,ye),z.side=mi,z.needsUpdate=!0,A.renderBufferDirect(k,O,H,z,S,ye),z.side=Mn):A.renderBufferDirect(k,O,H,z,S,ye),S.onAfterRender(A,O,k,H,z,ye)}function Ur(S,O,k){O.isScene!==!0&&(O=we);let H=se.get(S),z=m.state.lights,ye=m.state.shadowsArray,Te=z.state.version,Le=_e.getParameters(S,z.state,ye,O,k),Oe=_e.getProgramCacheKey(Le),We=H.programs;H.environment=S.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||H.environment),We===void 0&&(S.addEventListener("dispose",ge),We=new Map,H.programs=We);let ke=We.get(Oe);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===Te)return Ll(S,Le),ke}else Le.uniforms=_e.getUniforms(S),S.onBuild(k,Le,A),S.onBeforeCompile(Le,A),ke=_e.acquireProgram(Le,Oe),We.set(Oe,ke),H.uniforms=Le.uniforms;let Ge=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=Ce.uniform),Ll(S,Le),H.needsLights=Vd(S),H.lightsStateVersion=Te,H.needsLights&&(Ge.ambientLightColor.value=z.state.ambient,Ge.lightProbe.value=z.state.probe,Ge.directionalLights.value=z.state.directional,Ge.directionalLightShadows.value=z.state.directionalShadow,Ge.spotLights.value=z.state.spot,Ge.spotLightShadows.value=z.state.spotShadow,Ge.rectAreaLights.value=z.state.rectArea,Ge.ltc_1.value=z.state.rectAreaLTC1,Ge.ltc_2.value=z.state.rectAreaLTC2,Ge.pointLights.value=z.state.point,Ge.pointLightShadows.value=z.state.pointShadow,Ge.hemisphereLights.value=z.state.hemi,Ge.directionalShadowMap.value=z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ge.spotShadowMap.value=z.state.spotShadowMap,Ge.spotLightMatrix.value=z.state.spotLightMatrix,Ge.spotLightMap.value=z.state.spotLightMap,Ge.pointShadowMap.value=z.state.pointShadowMap,Ge.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function Dl(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ll(S,O){let k=se.get(S);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Gd(S,O,k,H,z){O.isScene!==!0&&(O=we),M.resetTextureUnits();let ye=O.fog,Te=H.isMeshStandardMaterial?O.environment:null,Le=w===null?A.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zn,Oe=(H.isMeshStandardMaterial?N:x).get(H.envMap||Te),We=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!k.morphAttributes.position,gt=!!k.morphAttributes.normal,$t=!!k.morphAttributes.color,Ct=fi;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=A.toneMapping);let zn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,dt=zn!==void 0?zn.length:0,qe=se.get(H),ya=m.state.lights;if(re===!0&&(pe===!0||S!==y)){let sn=S===y&&H.id===U;Ce.setState(H,S,sn)}let mt=!1;H.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ya.state.version||qe.outputColorSpace!==Le||z.isBatchedMesh&&qe.batching===!1||!z.isBatchedMesh&&qe.batching===!0||z.isInstancedMesh&&qe.instancing===!1||!z.isInstancedMesh&&qe.instancing===!0||z.isSkinnedMesh&&qe.skinning===!1||!z.isSkinnedMesh&&qe.skinning===!0||z.isInstancedMesh&&qe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&qe.instancingColor===!1&&z.instanceColor!==null||qe.envMap!==Oe||H.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ce.numPlanes||qe.numIntersection!==Ce.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==ke||qe.morphTargets!==Ge||qe.morphNormals!==gt||qe.morphColors!==$t||qe.toneMapping!==Ct||oe.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(mt=!0):(mt=!0,qe.__version=H.version);let bi=qe.currentProgram;mt===!0&&(bi=Ur(H,O,z));let Nl=!1,Vs=!1,va=!1,Ot=bi.getUniforms(),Si=qe.uniforms;if(Q.useProgram(bi.program)&&(Nl=!0,Vs=!0,va=!0),H.id!==U&&(U=H.id,Vs=!0),Nl||y!==S){Ot.setValue(P,"projectionMatrix",S.projectionMatrix),Ot.setValue(P,"viewMatrix",S.matrixWorldInverse);let sn=Ot.map.cameraPosition;sn!==void 0&&sn.setValue(P,Ne.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&Ot.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ot.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Vs=!0,va=!0)}if(z.isSkinnedMesh){Ot.setOptional(P,z,"bindMatrix"),Ot.setOptional(P,z,"bindMatrixInverse");let sn=z.skeleton;sn&&(oe.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Ot.setValue(P,"boneTexture",sn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ot.setOptional(P,z,"batchingTexture"),Ot.setValue(P,"batchingTexture",z._matricesTexture,M));let Ma=k.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&oe.isWebGL2===!0)&&De.update(z,k,bi),(Vs||qe.receiveShadow!==z.receiveShadow)&&(qe.receiveShadow=z.receiveShadow,Ot.setValue(P,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Si.envMap.value=Oe,Si.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Vs&&(Ot.setValue(P,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&Hd(Si,va),ye&&H.fog===!0&&le.refreshFogUniforms(Si,ye),le.refreshMaterialUniforms(Si,H,$,W,be),gs.upload(P,Dl(qe),Si,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gs.upload(P,Dl(qe),Si,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ot.setValue(P,"center",z.center),Ot.setValue(P,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(P,"normalMatrix",z.normalMatrix),Ot.setValue(P,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let sn=H.uniformsGroups;for(let ba=0,Wd=sn.length;ba<Wd;ba++)if(oe.isWebGL2){let Ul=sn[ba];Ke.update(Ul,bi),Ke.bind(Ul,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Hd(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,O,k){se.get(S.texture).__webglTexture=O,se.get(S.depthTexture).__webglTexture=k;let H=se.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){let k=se.get(S);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,k=0){w=S,C=O,R=k;let H=!0,z=null,ye=!1,Te=!1;if(S){let Oe=se.get(S);Oe.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(P.FRAMEBUFFER,null),H=!1):Oe.__webglFramebuffer===void 0?M.setupRenderTarget(S):Oe.__hasExternalTextures&&M.rebindTextures(S,se.get(S.texture).__webglTexture,se.get(S.depthTexture).__webglTexture);let We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Te=!0);let ke=se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?z=ke[O][k]:z=ke[O],ye=!0):oe.isWebGL2&&S.samples>0&&M.useMultisampledRTT(S)===!1?z=se.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[k]:z=ke,b.copy(S.viewport),F.copy(S.scissor),X=S.scissorTest}else b.copy(ie).multiplyScalar($).floor(),F.copy(ee).multiplyScalar($).floor(),X=de;if(Q.bindFramebuffer(P.FRAMEBUFFER,z)&&oe.drawBuffers&&H&&Q.drawBuffers(S,z),Q.viewport(b),Q.scissor(F),Q.setScissorTest(X),ye){let Oe=se.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Oe.__webglTexture,k)}else if(Te){let Oe=se.get(S.texture),We=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.__webglTexture,k||0,We)}U=-1},this.readRenderTargetPixels=function(S,O,k,H,z,ye,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){Q.bindFramebuffer(P.FRAMEBUFFER,Le);try{let Oe=S.texture,We=Oe.format,ke=Oe.type;if(We!==Sn&&Me.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=ke===ar&&(Y.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Y.has("EXT_color_buffer_float"));if(ke!==pi&&Me.convert(ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ui&&(oe.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&k>=0&&k<=S.height-z&&P.readPixels(O,k,H,z,Me.convert(We),Me.convert(ke),ye)}finally{let Oe=w!==null?se.get(w).__webglFramebuffer:null;Q.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(S,O,k=0){let H=Math.pow(2,-k),z=Math.floor(O.image.width*H),ye=Math.floor(O.image.height*H);M.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,S.x,S.y,z,ye),Q.unbindTexture()},this.copyTextureToTexture=function(S,O,k,H=0){let z=O.image.width,ye=O.image.height,Te=Me.convert(k.format),Le=Me.convert(k.type);M.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,S.x,S.y,z,ye,Te,Le,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,H,S.x,S.y,Te,Le,O.image),H===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(S,O,k,H,z=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=S.max.x-S.min.x+1,Te=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Oe=Me.convert(H.format),We=Me.convert(H.type),ke;if(H.isData3DTexture)M.setTexture3D(H,0),ke=P.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)M.setTexture2DArray(H,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let Ge=P.getParameter(P.UNPACK_ROW_LENGTH),gt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$t=P.getParameter(P.UNPACK_SKIP_PIXELS),Ct=P.getParameter(P.UNPACK_SKIP_ROWS),zn=P.getParameter(P.UNPACK_SKIP_IMAGES),dt=k.isCompressedTexture?k.mipmaps[z]:k.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?P.texSubImage3D(ke,z,O.x,O.y,O.z,ye,Te,Le,Oe,We,dt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,z,O.x,O.y,O.z,ye,Te,Le,Oe,dt.data)):P.texSubImage3D(ke,z,O.x,O.y,O.z,ye,Te,Le,Oe,We,dt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ge),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zn),z===0&&H.generateMipmaps&&P.generateMipmap(ke),Q.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?M.setTextureCube(S,0):S.isData3DTexture?M.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?M.setTexture2DArray(S,0):M.setTexture2D(S,0),Q.unbindTexture()},this.resetState=function(){C=0,R=0,w=null,Q.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===cl?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Ko?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Ui:ku}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ui?_t:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Fc=class extends Oi{};Fc.prototype.isWebGL1Renderer=!0;var Ms=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new I,dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},as,Ks=new I,cs=new I,ls=new I,hs=new ae,$s=new ae,$u=new xt,co=new I,js=new I,lo=new I,Au=new ae,ac=new ae,xu=new ae,Oo=class extends Ut{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fo(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new dr(i,3,0,!1)),as.setAttribute("uv",new dr(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),$u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ho(co.set(-.5,-.5,0),ls,o,cs,s,r),ho(js.set(.5,-.5,0),ls,o,cs,s,r),ho(lo.set(.5,.5,0),ls,o,cs,s,r),Au.set(0,0),ac.set(1,0),xu.set(1,1);let a=e.ray.intersectTriangle(co,js,lo,!1,Ks);if(a===null&&(ho(js.set(-.5,.5,0),ls,o,cs,s,r),ac.set(0,1),a=e.ray.intersectTriangle(co,lo,js,!1,Ks),a===null))return;let c=e.ray.origin.distanceTo(Ks);c<e.near||c>e.far||t.push({distance:c,point:Ks.clone(),uv:Di.getInterpolation(Ks,co,js,lo,Au,ac,xu,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ho(n,e,t,i,s,r){hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($s.x=r*hs.x-s*hs.y,$s.y=s*hs.x+r*hs.y):$s.copy(hs),n.copy(e),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4($u)}var pr=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yu=new I,vu=new I,Mu=new xt,cc=new cr,uo=new ys,Bo=class extends Ut{constructor(e=new vt,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)yu.fromBufferAttribute(t,s-1),vu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=yu.distanceTo(vu);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;Mu.copy(s).invert(),cc.copy(e.ray).applyMatrix4(Mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,h=new I,u=new I,d=new I,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let A=f,E=v-1;A<E;A+=p){let C=g.getX(A),R=g.getX(A+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,R),cc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let A=f,E=v-1;A<E;A+=p){if(l.fromBufferAttribute(m,A),h.fromBufferAttribute(m,A+1),cc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Ss=class extends cn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,c=new xt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends hn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new ae,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oc=class extends mr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var fo=new I,lc=new hl,hc=new hl,uc=new hl,Bc=class extends hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),l=fo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),lc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),hc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),uc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),hc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),uc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(lc.calc(c),hc.calc(c),uc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function z_(n,e){let t=1-n;return t*t*e}function k_(n,e){return 2*(1-n)*n*e}function G_(n,e){return n*n*e}function nr(n,e,t,i){return z_(n,e)+k_(n,t)+G_(n,i)}function H_(n,e){let t=1-n;return t*t*t*e}function V_(n,e){let t=1-n;return 3*t*t*n*e}function W_(n,e){return 3*(1-n)*n*n*e}function X_(n,e){return n*n*n*e}function ir(n,e,t,i,s){return H_(n,e)+V_(n,t)+W_(n,i)+X_(n,s)}var zo=class extends hn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zc=class extends hn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends hn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends hn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends hn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends hn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(bu(a,c.x,l.x,h.x,u.x),bu(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Hc=Object.freeze({__proto__:null,ArcCurve:Oc,CatmullRomCurve3:Bc,CubicBezierCurve:zo,CubicBezierCurve3:zc,EllipseCurve:mr,LineCurve:ko,LineCurve3:kc,QuadraticBezierCurve:Go,QuadraticBezierCurve3:Gc,SplineCurve:Ho}),Vc=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Hc[s.type]().fromJSON(s))}return this}},Vo=class extends Vc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ko(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Go(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new zo(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ho(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new mr(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Wo=class n extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=i/2,f=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function v(){let E=new I,C=new I,R=0,w=(t-e)/i;for(let U=0;U<=r;U++){let y=[],b=U/r,F=b*(t-e)+e;for(let X=0;X<=s;X++){let j=X/s,L=j*c+a,B=Math.sin(L),W=Math.cos(L);C.x=F*B,C.y=-b*i+m,C.z=F*W,u.push(C.x,C.y,C.z),E.set(B,w,W).normalize(),d.push(E.x,E.y,E.z),p.push(j,1-b),y.push(g++)}_.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){let b=_[y][U],F=_[y+1][U],X=_[y+1][U+1],j=_[y][U+1];h.push(b,F,j),h.push(F,X,j),R+=6}l.addGroup(f,R,0),f+=R}function A(E){let C=g,R=new ae,w=new I,U=0,y=E===!0?e:t,b=E===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;let F=g;for(let X=0;X<=s;X++){let L=X/s*c+a,B=Math.cos(L),W=Math.sin(L);w.x=y*W,w.y=m*b,w.z=y*B,u.push(w.x,w.y,w.z),d.push(0,b,0),R.x=B*.5+.5,R.y=W*.5*b+.5,p.push(R.x,R.y),g++}for(let X=0;X<s;X++){let j=C+X,L=F+X;E===!0?h.push(L,L+1,j):h.push(L+1,L,j),U+=3}l.addGroup(f,U,E===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ei=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wc=class n extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let A=new I,E=new I,C=new I;for(let R=0;R<t.length;R+=3)p(t[R+0],A),p(t[R+1],E),p(t[R+2],C),c(A,E,C,v)}function c(v,A,E,C){let R=C+1,w=[];for(let U=0;U<=R;U++){w[U]=[];let y=v.clone().lerp(E,U/R),b=A.clone().lerp(E,U/R),F=R-U;for(let X=0;X<=F;X++)X===0&&U===R?w[U][X]=y:w[U][X]=y.clone().lerp(b,X/F)}for(let U=0;U<R;U++)for(let y=0;y<2*(R-U)-1;y++){let b=Math.floor(y/2);y%2===0?(d(w[U][b+1]),d(w[U+1][b]),d(w[U][b])):(d(w[U][b+1]),d(w[U+1][b+1]),d(w[U+1][b]))}}function l(v){let A=new I;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(v),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function h(){let v=new I;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let E=m(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;o.push(E,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let A=o[v+0],E=o[v+2],C=o[v+4],R=Math.max(A,E,C),w=Math.min(A,E,C);R>.9&&w<.1&&(A<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,A){let E=v*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function g(){let v=new I,A=new I,E=new I,C=new I,R=new ae,w=new ae,U=new ae;for(let y=0,b=0;y<r.length;y+=9,b+=6){v.set(r[y+0],r[y+1],r[y+2]),A.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),R.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),C.copy(v).add(A).add(E).divideScalar(3);let F=m(C);_(R,b+0,v,F),_(w,b+2,A,F),_(U,b+4,E,F)}}function _(v,A,E,C){C<0&&v.x===1&&(o[A]=v.x-1),E.x===0&&E.z===0&&(o[A]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var gr=class extends Vo{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Vo().fromJSON(s))}return this}},q_={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ju(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(i&&(r=K_(n,e,r,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return _r(r,o,t,a,c,p,0),o}};function ju(n,e,t,i,s){let r,o;if(s===cA(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Su(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Su(r,n[r],n[r+1],o);return o&&jo(o,o.next)&&(xr(o),o=o.next),o}function Bi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(jo(t,t.next)||ft(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function _r(n,e,t,i,s,r,o){if(!n)return;!o&&r&&nA(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Q_(n,i,s,r):Y_(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),xr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=J_(Bi(n),e,t),_r(n,e,t,i,s,r,2)):o===2&&Z_(n,e,t,i,s,r):_r(Bi(n),e,t,i,s,r,1);break}}}function Y_(n){let e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&fs(s,a,r,c,o,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(ft(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Xc(p,g,e,t,i),v=Xc(_,m,e,t,i),A=n.prevZ,E=n.nextZ;for(;A&&A.z>=f&&E&&E.z<=v;){if(A.x>=p&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&fs(a,h,c,u,l,d,A.x,A.y)&&ft(A.prev,A,A.next)>=0||(A=A.prevZ,E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fs(a,h,c,u,l,d,E.x,E.y)&&ft(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;A&&A.z>=f;){if(A.x>=p&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&fs(a,h,c,u,l,d,A.x,A.y)&&ft(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fs(a,h,c,u,l,d,E.x,E.y)&&ft(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function J_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!jo(s,r)&&ed(s,i,i.next,r)&&Ar(s,r)&&Ar(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),xr(i),xr(i.next),i=n=r),i=i.next}while(i!==n);return Bi(i)}function Z_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rA(o,a)){let c=td(o,a);o=Bi(o,o.next),c=Bi(c,c.next),_r(o,e,t,i,s,r,0),_r(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function K_(n,e,t,i){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=ju(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(sA(l));for(s.sort($_),r=0;r<s.length;r++)t=j_(s[r],t);return t}function $_(n,e){return n.x-e.x}function j_(n,e){let t=eA(n,e);if(!t)return e;let i=td(t,n);return Bi(i,i.next),Bi(t,t.next)}function eA(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&fs(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ar(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&tA(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function tA(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function nA(n,e,t,i){let s=n;do s.z===0&&(s.z=Xc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,iA(s)}function iA(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function Xc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function rA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!oA(n,e)&&(Ar(n,e)&&Ar(e,n)&&aA(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||jo(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function jo(n,e){return n.x===e.x&&n.y===e.y}function ed(n,e,t,i){let s=mo(ft(n,e,t)),r=mo(ft(n,e,i)),o=mo(ft(t,i,n)),a=mo(ft(t,i,e));return!!(s!==r&&o!==a||s===0&&po(n,t,e)||r===0&&po(n,i,e)||o===0&&po(t,n,i)||a===0&&po(t,e,i))}function po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function mo(n){return n>0?1:n<0?-1:0}function oA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ed(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ar(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function aA(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function td(n,e){let t=new qc(n.i,n.x,n.y),i=new qc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Su(n,e,t,i){let s=new qc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cA(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var sr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Eu(e),wu(i,e);let o=e.length;t.forEach(Eu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,wu(i,t[c]);let a=q_.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Eu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function wu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Xo=class n extends vt{constructor(e=new gr([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:lA,A,E=!1,C,R,w,U;f&&(A=f.getSpacedPoints(h),E=!0,d=!1,C=f.computeFrenetFrames(h,!1),R=new I,w=new I,U=new I),d||(m=0,p=0,g=0,_=0);let y=a.extractPoints(l),b=y.shape,F=y.holes;if(!sr.isClockWise(b)){b=b.reverse();for(let P=0,ce=F.length;P<ce;P++){let Y=F[P];sr.isClockWise(Y)&&(F[P]=Y.reverse())}}let j=sr.triangulateShape(b,F),L=b;for(let P=0,ce=F.length;P<ce;P++){let Y=F[P];b=b.concat(Y)}function B(P,ce,Y){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ce,Y)}let W=b.length,$=j.length;function J(P,ce,Y){let oe,Q,G,se=P.x-ce.x,M=P.y-ce.y,x=Y.x-P.x,N=Y.y-P.y,K=se*se+M*M,te=se*N-M*x;if(Math.abs(te)>Number.EPSILON){let Z=Math.sqrt(K),_e=Math.sqrt(x*x+N*N),le=ce.x-M/Z,Ae=ce.y+se/Z,Se=Y.x-N/_e,Ce=Y.y+x/_e,ne=((Se-le)*N-(Ce-Ae)*x)/(se*N-M*x);oe=le+se*ne-P.x,Q=Ae+M*ne-P.y;let Qe=oe*oe+Q*Q;if(Qe<=2)return new ae(oe,Q);G=Math.sqrt(Qe/2)}else{let Z=!1;se>Number.EPSILON?x>Number.EPSILON&&(Z=!0):se<-Number.EPSILON?x<-Number.EPSILON&&(Z=!0):Math.sign(M)===Math.sign(N)&&(Z=!0),Z?(oe=-M,Q=se,G=Math.sqrt(K)):(oe=se,Q=M,G=Math.sqrt(K/2))}return new ae(oe/G,Q/G)}let q=[];for(let P=0,ce=L.length,Y=ce-1,oe=P+1;P<ce;P++,Y++,oe++)Y===ce&&(Y=0),oe===ce&&(oe=0),q[P]=J(L[P],L[Y],L[oe]);let ie=[],ee,de=q.concat();for(let P=0,ce=F.length;P<ce;P++){let Y=F[P];ee=[];for(let oe=0,Q=Y.length,G=Q-1,se=oe+1;oe<Q;oe++,G++,se++)G===Q&&(G=0),se===Q&&(se=0),ee[oe]=J(Y[oe],Y[G],Y[se]);ie.push(ee),de=de.concat(ee)}for(let P=0;P<m;P++){let ce=P/m,Y=p*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let Q=0,G=L.length;Q<G;Q++){let se=B(L[Q],q[Q],oe);xe(se.x,se.y,-Y)}for(let Q=0,G=F.length;Q<G;Q++){let se=F[Q];ee=ie[Q];for(let M=0,x=se.length;M<x;M++){let N=B(se[M],ee[M],oe);xe(N.x,N.y,-Y)}}}let V=g+_;for(let P=0;P<W;P++){let ce=d?B(b[P],de[P],V):b[P];E?(w.copy(C.normals[0]).multiplyScalar(ce.x),R.copy(C.binormals[0]).multiplyScalar(ce.y),U.copy(A[0]).add(w).add(R),xe(U.x,U.y,U.z)):xe(ce.x,ce.y,0)}for(let P=1;P<=h;P++)for(let ce=0;ce<W;ce++){let Y=d?B(b[ce],de[ce],V):b[ce];E?(w.copy(C.normals[P]).multiplyScalar(Y.x),R.copy(C.binormals[P]).multiplyScalar(Y.y),U.copy(A[P]).add(w).add(R),xe(U.x,U.y,U.z)):xe(Y.x,Y.y,u/h*P)}for(let P=m-1;P>=0;P--){let ce=P/m,Y=p*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let Q=0,G=L.length;Q<G;Q++){let se=B(L[Q],q[Q],oe);xe(se.x,se.y,u+Y)}for(let Q=0,G=F.length;Q<G;Q++){let se=F[Q];ee=ie[Q];for(let M=0,x=se.length;M<x;M++){let N=B(se[M],ee[M],oe);E?xe(N.x,N.y+A[h-1].y,A[h-1].x+Y):xe(N.x,N.y,u+Y)}}}re(),pe();function re(){let P=s.length/3;if(d){let ce=0,Y=W*ce;for(let oe=0;oe<$;oe++){let Q=j[oe];Ie(Q[2]+Y,Q[1]+Y,Q[0]+Y)}ce=h+m*2,Y=W*ce;for(let oe=0;oe<$;oe++){let Q=j[oe];Ie(Q[0]+Y,Q[1]+Y,Q[2]+Y)}}else{for(let ce=0;ce<$;ce++){let Y=j[ce];Ie(Y[2],Y[1],Y[0])}for(let ce=0;ce<$;ce++){let Y=j[ce];Ie(Y[0]+W*h,Y[1]+W*h,Y[2]+W*h)}}i.addGroup(P,s.length/3-P,0)}function pe(){let P=s.length/3,ce=0;be(L,ce),ce+=L.length;for(let Y=0,oe=F.length;Y<oe;Y++){let Q=F[Y];be(Q,ce),ce+=Q.length}i.addGroup(P,s.length/3-P,1)}function be(P,ce){let Y=P.length;for(;--Y>=0;){let oe=Y,Q=Y-1;Q<0&&(Q=P.length-1);for(let G=0,se=h+m*2;G<se;G++){let M=W*G,x=W*(G+1),N=ce+oe+M,K=ce+Q+M,te=ce+Q+x,Z=ce+oe+x;Ne(N,K,te,Z)}}}function xe(P,ce,Y){c.push(P),c.push(ce),c.push(Y)}function Ie(P,ce,Y){we(P),we(ce),we(Y);let oe=s.length/3,Q=v.generateTopUV(i,s,oe-3,oe-2,oe-1);Ue(Q[0]),Ue(Q[1]),Ue(Q[2])}function Ne(P,ce,Y,oe){we(P),we(ce),we(oe),we(ce),we(Y),we(oe);let Q=s.length/3,G=v.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);Ue(G[0]),Ue(G[1]),Ue(G[3]),Ue(G[1]),Ue(G[2]),Ue(G[3])}function we(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function Ue(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return hA(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Hc[s.type]().fromJSON(s)),new n(i,e.options)}},lA={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(d,1-g),new ae(_,1-f)]:[new ae(a,1-c),new ae(h,1-u),new ae(p,1-g),new ae(m,1-f)]}};function hA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qo=class n extends vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,p=new I,g=new ae;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let f=0;f<i;f++){let v=f+m,A=v,E=v+i+1,C=v+i+2,R=v+1;a.push(A,E,R),a.push(E,C,R)}}this.setIndex(a),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Es=class n extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let v=[],A=f/i,E=0;f===0&&o===0?E=.5/t:f===i&&c===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){let R=C/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+A*a),u.y=e*Math.cos(o+A*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+A*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+E,1-A),v.push(l++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let A=h[f][v+1],E=h[f][v],C=h[f+1][v],R=h[f+1][v+1];(f!==0||o>0)&&p.push(A,E,R),(f!==i-1||c<Math.PI)&&p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Yo=class n extends Wc{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ai=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function go(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=e,a=2*t-i;break;case Ih:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ph:o=e,c=2*i-t;break;case Ih:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-p)*m+(1.5+p)*_+.5*g,E=p*m-p*_;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+v*o[l+C]+A*o[c+C]+E*o[u+C];return r}},Qc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Jc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&uA(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=xo;var zi=class extends En{};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Ao;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends En{};Zc.prototype.ValueTypeName="color";var Kc=class extends En{};Kc.prototype.ValueTypeName="number";var $c=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)_i.slerpFlat(r,0,o,l-a,o,l,c);return r}},yr=class extends En{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=xo;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends En{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Ao;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends En{};jc.prototype.ValueTypeName="vector";var el=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},dA=new el,tl=class{constructor(e){this.manager=e!==void 0?e:dA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qo=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ts=class extends Qo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dc=new xt,Tu=new I,Ru=new I,nl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var il=class extends nl{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ul="\\[\\]\\.:\\/",fA=new RegExp("["+ul+"]","g"),dl="[^"+ul+"]",pA="[^"+ul.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",dl),gA=/(WCOD+)?/.source.replace("WCOD",pA),_A=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),AA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),xA=new RegExp("^"+mA+gA+_A+AA+"$"),yA=["material","materials","bones","map"],sl=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fA,"")}static parseTrackName(e){let t=xA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=sl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rx=new Float32Array(1);var Jo=class{constructor(e,t,i=0,s=1/0){this.ray=new cr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return rl(e,this,i,t),i.sort(Cu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)rl(e[s],this,i,t);return i.sort(Cu),i}};function Cu(n,e){return n.distance-e.distance}function rl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)rl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function ea(n,{reducedMotion:e=!1,onImpact:t}={}){let i=new Map,s=new Map,r=new Set,o=new ei(.105,.42,10);o.rotateX(Math.PI/2);let a=new ei(.075,.28,8);a.rotateX(-Math.PI/2);let c=new qo(.15,.2,24),l=new Yo(.08),h=new Ai({color:"#b86436",metalness:.5,roughness:.4}),u=new Gt({color:"#ffd374"}),d=new Gt({color:"#ffd38a",transparent:!0,side:Mn,depthWrite:!1}),p=new Gt({color:"#efa65a",transparent:!0});function g(f,v){f.position.set(v.x,v.y,v.z)}function _(f,v,A){let E=new Set;for(let C of f){E.add(C.id);let R=i.get(C.id);if(!R){R=new ht,R.add(new At(o,h));let y=new At(a,u);y.position.z=.3,R.add(y),n.add(R),i.set(C.id,R)}g(R,C.position);let w=C.velocity,U=new I(w.x,w.y,w.z);U.lengthSq()&&R.quaternion.setFromUnitVectors(new I(0,0,-1),U.normalize())}for(let[C,R]of i)E.has(C)||(n.remove(R),i.delete(C));for(let C of v){if(r.has(C.id))continue;r.add(C.id);let R=new ht,w=d.clone(),U=new At(c,w);if(R.add(U),!e)for(let y=0;y<6;y++){let b=new At(l,p.clone());b.userData.direction=new I(Math.cos(y*Math.PI/3),.35+y%2*.3,Math.sin(y*Math.PI/3)),R.add(b)}g(R,C.position),n.add(R),s.set(C.id,{group:R,age:0}),t?.(C)}for(let[C,R]of s){R.age+=Math.max(0,A);let w=Math.min(1,R.age/.55);R.group.children[0].scale.setScalar(1+w*6),R.group.children[0].material.opacity=.85*(1-w);for(let U of R.group.children.slice(1))U.position.copy(U.userData.direction).multiplyScalar(w*1.4),U.material.opacity=1-w;if(w>=1){n.remove(R.group);for(let U of R.group.children)U.material.dispose();s.delete(C)}}}function m(){for(let f of i.values())n.remove(f);for(let f of s.values()){n.remove(f.group);for(let v of f.group.children)v.material.dispose()}i.clear(),s.clear(),r.clear();for(let f of[o,a,c,l,h,u,d,p])f.dispose()}return{update:_,dispose:m}}function ta({on:n,canvas:e,active:t,look:i,fire:s,clearInput:r}){let o=null,a=null;function c(){o=a=null,r()}n(e,"contextmenu",l=>l.preventDefault()),n(e,"mousedown",l=>{!t()||l.button!==0&&l.button!==2||(l.preventDefault(),e.focus({preventScroll:!0}),l.button===0?s(!0):o={x:l.clientX,y:l.clientY})}),n(window,"mousemove",l=>{if(!(!t()||!o)){if(!(l.buttons&2)){o=null;return}i(l.clientX-o.x,l.clientY-o.y),o.x=l.clientX,o.y=l.clientY}}),n(window,"mouseup",l=>{l.button===0&&s(!1),l.button===2&&(o=null)}),n(e,"pointerdown",l=>{!t()||l.pointerType==="mouse"||a||(l.preventDefault(),e.setPointerCapture(l.pointerId),a={id:l.pointerId,x:l.clientX,y:l.clientY})}),n(window,"pointermove",l=>{!t()||a?.id!==l.pointerId||(i((l.clientX-a.x)*2.2,(l.clientY-a.y)*2.2),a.x=l.clientX,a.y=l.clientY)});for(let l of["pointerup","pointercancel","lostpointercapture"])n(e,l,h=>{a?.id===h.pointerId&&(a=null)});return{clear:c}}function id(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new vt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=nd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let g=nd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function nd(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new yt(o,t,i);return s!==void 0&&(c.gpuType=s),c}var Mr=new I;function un(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Mr.copy(e),Mr[i]=0,Mr.normalize();let l=.5*o/(o+a),h=1-Mr.angleTo(n)/c;return Math.sign(Mr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Ps=class extends ln{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new I,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=un(g,c,"z","y",r,i),d[f+1]=1-un(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-un(g,c,"z","y",r,i),d[f+1]=1-un(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-un(g,c,"x","z",r,e),d[f+1]=un(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-un(g,c,"x","z",r,e),d[f+1]=1-un(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-un(g,c,"x","y",r,e),d[f+1]=1-un(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=un(g,c,"x","y",r,e),d[f+1]=1-un(g,c,"y","x",r,t);break}}};var sd={station:["2f4zG80EcgAzG5oF2f5mGpoF2f4zG80E2f5mGpoFP/0zG5oF7wPXGZoFKwIzG5oF7wMzGz0EtAUzG5oF7wPXGZoF7wMzGz0EAAczA5oFVwXXAZoFVwUzAz0EVwXXAZoFrgMzA5oFVwUzAz0E9wTXGWb61wYzG2b69wQzG8P7FgMzG2b69wTXGWb69wQzG8P71fszA2b6jf7XAWb6jf4zA8P7jf7XAWb6RQEzA2b6jf4zA8P7APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAGb6zfQzA2b6APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAJoFzfQzA5oFzfQAGGb6zfQzG2b6APQAGDP7APQzGzP7APQAGM0EAPQzG80EzfQAGJoFzfQzG5oFAPQAGDP7APQzGzP7APQAGM0EAPQzG80EcgAzG5oFKwIzG5oF2f5mGpoF7wPXGZoFzfQzG5oFP/0zG5oFzfQAGJoFMwsAGJoFMwszG5oFtAUzG5oFAAwzA80EAAwAAM0EMwszA5oFMwsAAJoFAAwzAzP7AAwzA80EMwszA2b6MwszA5oFZgozAwD8RQEzA2b6jf4zA8P7ZgozAwAEAAczA5oFVwUzAz0EmvUzAwD81fszA2b6mvUzAwAEzfQzA2b6rgMzA5oFzfQzA5oFAPQzAzP7APQzA80EzfQAAGb6MwsAAGb6zfQzA2b6jf7XAWb61fszA2b6MwszA2b6RQEzA2b6AAwzAzP7AAwAADP7AAwzA80EAAwAAM0EAAwzG80EAAwAGM0EMwszG5oFMwsAGJoFAAwzGzP7AAwAGDP7AAwzG80EAAwAGM0EAAwzGzP7AAwzG80EMwszG2b6MwszG5oF1wYzG2b6tAUzG5oF9wQzG8P77wMzGz0EFgMzG2b6KwIzG5oFzfQzG2b6cgAzG5oF2f4zG80EP/0zG5oFzfQzG5oFAPQzGzP7APQzG80EMwszG2b6MwsAGGb6AAwzGzP7AAwAGDP7AAwAGM0EAAwAGDP7MwsAGJoFMwsAGGb6ZgoAGAAEzfQAGJoFZgoAGAD8mvUAGAAEzfQAGGb6mvUAGAD8APQAGM0EAPQAGDP7zfQAGGb6MwsAGGb6zfQzG2b69wTXGWb6FgMzG2b6MwszG2b61wYzG2b6AAwAAM0EAAwAADP7MwsAAJoFMwsAAGb6zfQAAJoFzfQAAGb6APQAAM0EAPQAADP7MwszA2b6MwsAAGb6AAwzAzP7AAwAADP7AAczA5oFMwszA5oFVwXXAZoFMwsAAJoFzfQAAJoFzfQzA5oFrgMzA5oFmvUzAwD8mvUAGAD8mvUzAwAEmvUAGAAEZgoAGAD8ZgozAwD8ZgoAGAAEZgozAwAEmvUzAwD8ZgozAwD8mvUAGAD8ZgoAGAD8ZgoAGAD8ZgoAGAAEmvUAGAD8mvUAGAAEZgozAwAEmvUzAwAEZgoAGAAEmvUAGAAEOQQuBgAEOQTrBwAEnAQuBoEEnATrB4EEsQYuBoEEnAQuBoEEsQbrB4EEnATrB4EEEwcuBgAEOQQuBgAEsQYuBoEEnAQuBoEEEwfrBwAEEwcuBgAEsQbrB4EEsQYuBoEEEwfrBwAEsQbrB4EEOQTrBwAEnATrB4EE+ffECAAE+feACgAEW/jECIEEW/iACoEEcPrECIEEW/jECIEEcPqACoEEW/iACoEE0vrECAAE+ffECAAEcPrECIEEW/jECIEE0vqACgAE0vrECAAEcPqACoEEcPrECIEE0vqACgAEcPqACoEE+feACgAEW/iACoEE5PlOCwAE5PkKDQAERvpOC4EERvoKDYEEW/xOC4EERvpOC4EEW/wKDYEERvoKDYEEvfxOCwAE5PlOCwAEW/xOC4EERvpOC4EEvfwKDQAEvfxOCwAEW/wKDYEEW/xOC4EEvfwKDQAEW/wKDYEE5PkKDQAERvoKDYEErAEIFAAErAHFFQAEDgIIFIEEDgLFFYEEIwQIFIEEDgIIFIEEIwTFFYEEDgLFFYEEhQQIFAAErAEIFAAEIwQIFIEEDgIIFIEEhQTFFQAEhQQIFAAEIwTFFYEEIwQIFIEEhQTFFQAEIwTFFYEErAHFFQAEDgLFFYEEaP6UBwD8aP5RCQD8Bv6UB3/7Bv5RCX/78fuUB3/7Bv6UB3/78ftRCX/7Bv5RCX/7j/uUBwD8aP6UBwD88fuUB3/7Bv6UB3/7j/tRCQD8j/uUBwD88ftRCX/78fuUB3/7j/tRCQD88ftRCX/7aP5RCQD8Bv5RCX/7ffwkCgD8ffzgCwD8G/wkCn/7G/zgC3/7BfokCn/7G/wkCn/7BfrgC3/7G/zgC3/7o/kkCgD8ffwkCgD8BfokCn/7G/wkCn/7o/ngCwD8o/kkCgD8BfrgC3/7BfokCn/7o/ngCwD8BfrgC3/7ffzgCwD8G/zgC3/7ega4EQD8egZ1EwD8GAa4EX/7GAZ1E3/7AwS4EX/7GAa4EX/7AwR1E3/7GAZ1E3/7oQO4EQD8ega4EQD8AwS4EX/7GAa4EX/7oQN1EwD8oQO4EQD8AwR1E3/7AwS4EX/7oQN1EwD8AwR1E3/7egZ1EwD8GAZ1E3/7ZgrPCIwAZgqLCowA5wrPCCoA5wqLCioA5wrPCBT+5wrPCCoA5wqLChT+5wqLCioAZgrPCLL9ZgrPCIwA5wrPCBT+5wrPCCoAZgqLCrL9ZgrPCLL95wqLChT+5wrPCBT+ZgqLCrL95wqLChT+ZgqLCowA5wqLCioAmvXWEfL+mvWTE/L+GfXWEVT/GfWTE1T/GfXWEWkBGfXWEVT/GfWTE2kBGfWTE1T/mvXWEcsBmvXWEfL+GfXWEWkBGfXWEVT/mvWTE8sBmvXWEcsBGfWTE2kBGfXWEWkBmvWTE8sBGfWTE2kBmvWTE/L+GfWTE1T/","AACCWoJaVtVVVVVVAACCWoJaAACCWoJaAACCWoJaqipVVVVVAACCWoJaKT2CT4JPAACCWoJa18KCT4JPAACCWoJaAACCWoJa0b9OTk5OAACCWoJaAACCWoJaAACCWoJaL0BOTk5OAACCWoJaAACCWn6losWMUHSvAACCWn6lXjqMUHSvAACCWn6lAACCWn6lqipVVauqAACCWn6lAACCWn6lAACCWn6lVtVVVauqAACCWn6lv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2Bc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2v4kAAAXPv4kAAAXPv4kAAPswv4kAAPswAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/Bc8AAEF2AAAAAP9/Bc8AAEF2+zAAAEF2+zAAAEF2AAAAAP9/QXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAQXYAAAXPQXYAAAXPQXYAAPswQXYAAPswQXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2QXYAAAXPQXYAAAXPQXYAAPswQXYAAPswAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAAAAP9/+zAAAEF2AAAAAP9/+zAAAEF2Bc8AAEF2Bc8AAEF2AAAAAP9/AYAAAAAAAYAAAAAAAYAAAAAAAYAAAAAA/38AAAAA/38AAAAA/38AAAAA/38AAAAAAAAAAAGAAAAAAAGAAAAAAAGAAAAAAAGAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/GJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAc00AAOhlc00AAOhlqnIAAOA4qnIAAOA4qnIAACDHqnIAAOA4qnIAACDHqnIAAOA4AAABgAAAAAABgAAAAAABgAAAAAABgAAAc00AABiac00AABiaqnIAACDHqnIAACDHAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAjbIAABiajbIAABiaVo0AACDHVo0AACDHVo0AAOA4Vo0AACDHVo0AAOA4Vo0AACDHAAABgAAAAAABgAAAAAABgAAAAAABgAAAjbIAAOhljbIAAOhlVo0AAOA4Vo0AAOA4AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA","OD1VOD1VNzxUOD1VNzxUOD1VNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VNzxUNjtUOD1VOD1VNDlQNDlQOD1VOD1VHSAzGh4wHSAzGh4wHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzGh4wGh4wHSAzHB8yHSAzHSAzHSAzHSAzGh4wHSAzGh4wOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VNDlQOD1VNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQOD1VNjtUOD1VOD1VOD1VGh4wGh4wGh4wGh4wGh4wGh4wGh4wGh4wHSAzGh4wHSAzGh4wHSAzHSAzHB8yGh4wGh4wHSAzHSAzrwsM6x8NrwsM6x8N6x8NrwsM6x8NrwsMrwsMrwsM6x8N6x8N6x8N6x8N6x8N6x8NrwsMrwsM6x8N6x8NuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsN","AgABAAAABQAEAAMACAAHAAYACwAKAAkADgANAAwAEQAQAA8AFAATABIAFwAWABUAGgAZABgAHQAcABsAIAAfAB4AHwAgACEAJAAjACIAIwAkACUAKAAnACYAJwAoACkALAArACoAKwAsAC0AMAAvAC4ALwAwADEANAAzADIAMwA0ADUAOAA3ADYANwA4ADkAOgA5ADgAOgA4ADsAOQA6ADwAPQA5ADwAOQA9AD4AOQA+AD8AQgBBAEAAQQBCAEMARgBFAEQARQBGAEcARwBGAEgASABGAEkASABJAEoASwBHAEgARwBLAEwATABLAE0ASABKAE4ATgBKAE8ATQBLAFAATgBPAFEATgBRAFAATQBQAFIAUgBQAFMAUwBQAFEAUwBRAFQAUwBUAFUAWABXAFYAVwBYAFkAWQBYAFoAWQBbAFcAWwBZAFwAXwBeAF0AXgBfAGAAYwBiAGEAYgBjAGQAZwBmAGUAZgBnAGgAawBqAGkAagBrAGwAbABrAG0AbABtAG4AbgBtAG8AbgBvAHAAcABvAHEAcABxAHIAcgBxAHMAcgBzAHQAdABzAHUAdQBzAHYAdgBzAHcAdwBzAHgAdwB4AHkAfAB7AHoAewB8AH0AgAB/AH4AfwCAAIEAgQCAAIIAggCAAIMAhACBAIIAggCDAIUAgQCEAIYAhQCDAIcAhgCEAIcAhgCHAIMAhgCDAIgAhgCIAIkAjACLAIoAiwCMAI0AjQCMAI4AjQCPAIsAjwCNAJAAkwCSAJEAkgCTAJQAlACTAJUAlACVAJYAlgCVAJcAlgCXAJgAmwCaAJkAmgCbAJwAnwCeAJ0AnwCgAJ4AoACfAKEAnwCiAKEAogCfAKMApgClAKQApQCmAKcAqgCpAKgAqQCqAKsArgCtAKwArQCuAK8AsgCxALAAsQCyALMAtgC1ALQAtQC2ALcAugC5ALgAuQC6ALsAvgC9ALwAvQC+AL8AwgDBAMAAwQDCAMMAxgDFAMQAxQDGAMcAygDJAMgAyQDKAMsAzgDNAMwAzQDOAM8A0gDRANAA0QDSANMA1gDVANQA1QDWANcA2gDZANgA2QDaANsA3gDdANwA3QDeAN8A4gDhAOAA4QDiAOMA5gDlAOQA5QDmAOcA6gDpAOgA6QDqAOsA7gDtAOwA7QDuAO8A8gDxAPAA8QDyAPMA9gD1APQA9QD2APcA+gD5APgA+QD6APsA/gD9APwA/QD+AP8AAgEBAQABAQECAQMBBgEFAQQBBQEGAQcBCgEJAQgBCQEKAQsBDgENAQwBDQEOAQ8BEgERARABEQESARMBFgEVARQBFQEWARcBGgEZARgBGQEaARsBHgEdARwBHQEeAR8BIgEhASABIQEiASMBJgElASQBJQEmAScBKgEpASgBKQEqASsBLgEtASwBLQEuAS8BMgExATABMQEyATMBNgE1ATQBNQE2ATcBOgE5ATgBOQE6ATsBPgE9ATwBPQE+AT8BQgFBAUABQQFCAUMBRgFFAUQBRQFGAUcBSgFJAUgBSQFKAUsBTgFNAUwBTQFOAU8BUgFRAVABUQFSAVMBVgFVAVQBVQFWAVcBWgFZAVgBWQFaAVsBXgFdAVwBXQFeAV8BYgFhAWABYQFiAWMBZgFlAWQBZQFmAWcBagFpAWgBaQFqAWsB"]};var ia={sky:"#cadcde",fog:"#c8d5ca",floor:"#a69780",wall:"#c7a27d",inlay:"#87765c",trim:"#efe0be",edge:"#ab7e62",cover:"#a48762",door:"#50726b",cold:"#465750",bright:"#ffe3b6",landmark:"#477b70"},sa={sky:"#c1d3de",fog:"#b5c5c5",floor:"#8f9b9c",wall:"#849c9d",inlay:"#405c67",trim:"#d6bf89",edge:"#687f89",cover:"#93896b",door:"#4e6b77",cold:"#453f35",bright:"#f0edda",landmark:"#b07c40"},pl={sky:"#d2dace",fog:"#c9d3bc",floor:"#90967d",wall:"#abb191",inlay:"#747c62",trim:"#e0d6b2",edge:"#8c9c76",cover:"#827a58",door:"#686f53",cold:"#4a594d",bright:"#fff4cc",landmark:"#955a40"},vA=[ia,sa,pl];function MA(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ss(i);return s.colorSpace=_t,s.wrapS=s.wrapT=rr,s.anisotropy=4,s}function na(n,e){return MA(256,256,t=>{t.fillStyle=n[e],t.fillRect(0,0,256,256);let i=62431,s=()=>(i=i*1664525+1013904223>>>0,i/4294967296),r="rgba(40,44,38,.32)",o="rgba(255,245,219,.27)";if(e==="door"||e==="wall"&&n===sa){for(let a=0;a<256;a+=16){let c=t.createLinearGradient(a,0,a+16,0);c.addColorStop(0,r),c.addColorStop(.27,o),c.addColorStop(.56,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(a,0,16,256)}t.fillStyle=n.inlay,t.fillRect(0,0,256,8),t.fillRect(0,244,256,12),e==="door"&&(t.fillStyle=n.trim,t.fillRect(18,121,220,2),t.fillRect(18,156,220,2),t.strokeStyle=n.inlay,t.lineWidth=8,t.strokeRect(15,15,226,226))}else{let a=e==="cover"?32:e==="wall"?42:64;for(let c=0;c<256;c+=a){let l=Math.floor(c/a)%2?32:0;if(t.fillStyle=r,t.fillRect(0,c,256,3),t.fillStyle=o,t.fillRect(0,c+3,256,2),e!=="cover")for(let h=l;h<256;h+=64)t.fillStyle=r,t.fillRect(h,c,2,a),t.fillStyle=o,t.fillRect(h+2,c+3,1,a-4)}if(e==="cover"){t.fillStyle=n.inlay,t.fillRect(16,0,13,256),t.fillRect(227,0,13,256);for(let c of[20,231])for(let l of[19,79,150,228])t.fillStyle=o,t.fillRect(c,l,5,5)}}for(let a=0;a<860;a++){let c=s()*256,l=s()*256;t.fillStyle=s()>.58?"rgba(255,250,221,.075)":"rgba(40,34,28,.11)",t.fillRect(c,l,(1+s()*2)*(e==="cover"?3:1),1+s()*2)}if(n===pl&&e==="wall"){let a=t.createLinearGradient(0,256,0,158);a.addColorStop(0,"#54684650"),a.addColorStop(1,"#54684600"),t.fillStyle=a,t.fillRect(0,158,256,98)}})}function Ht(n,e={}){return new Ai({color:n,roughness:.84,...e})}function Je(n,e,t,i,s,r){return new ln(n,e,t).translate(i,s,r)}function Jt(n,e,t,i=!0,s=!0){let r=new At(n,e);return r.castShadow=i,r.receiveShadow=s,t.add(r),r}function br(n){if(n.length===1)return n[0];let t=n.some(s=>!s.index)?n.map(s=>s.index?s.toNonIndexed():s):n,i=id(t);return new Set([...n,...t]).forEach(s=>s.dispose()),i}function bA(n){let e=new Map;return{add(t,i){e.has(i)||e.set(i,[]),e.get(i).push(t)},finish(){for(let[t,i]of e)Jt(br(i),t,n)}}}function SA(n,e,t){let i=n.getAttribute("uv");for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*e,i.getY(s)*t);return n}var fl=new Map;function EA(n){if(!fl.has(n)){let[r,o,a,c]=sd[n].map(l=>Uint8Array.from(atob(l),h=>h.charCodeAt(0)));fl.set(n,{positions:Float32Array.from(new Int16Array(r.buffer),l=>l/4096),normals:new Int16Array(o.buffer),colors:a,indices:new Uint16Array(c.buffer)})}let{positions:e,normals:t,colors:i,indices:s}=fl.get(n);return new vt().setAttribute("position",new yt(e.slice(),3)).setAttribute("normal",new yt(t.slice(),3,!0)).setAttribute("color",new yt(i,3,!0)).setIndex(new yt(s,1))}function wA(n,e,t){return n.w>=n.d?[n.x+e,n.z+t*Math.sign(-n.z||1)]:[n.x+t*Math.sign(-n.x||1),n.z+e]}function TA(n,e,t,i,s,r){let o=e.w>=e.d,a=Math.max(e.w,e.d),c=Math.min(e.w,e.d),l=(h,u,d,p,g,_,m)=>{let[f,v]=wA(e,h,d);n.add(Je(o?p:_,g,o?_:p,f,u,v),m)};if(!s){l(0,e.h-.07,0,a+.035,.08,c+.03,i.trim),l(0,.08,0,a+.035,.09,c+.03,i.inlay);for(let h of[-a*.34,a*.34])l(h,e.h*.51,c*.49,.09,e.h*.8,.042,i.inlay);return}if(l(0,e.h-.07,0,a+.045,.13,c+.045,i.trim),l(0,.29,0,a,.52,c+.04,i.inlay),l(0,.58,0,a,.07,c+.06,i.trim),t===sa)for(let h=-a/2+.14;h<a/2;h+=5)l(h,(e.h+.6)/2,c*.5,.13,e.h-.6,.07,i.inlay),l(h,e.h-.34,c*.54,.42,.14,.065,i.landmark);else if(t===ia)for(let h=-a/2+1.35;h<a/2-.75;h+=3.2){l(h,e.h-1.05,c*.5,.91,1.16,.064,i.trim),l(h,e.h-1.05,c*.54,.71,.9,.06,i.inlay);for(let u=0;u<4;u++)l(h,e.h-.75-u*.18,c*.57,.66,.033,.045,i.edge);l(h,e.h-1.63,c*.55,1.02,.08,.14,i.trim)}else if(r)for(let h=-a/2+.55;h<a/2;h+=1.55)l(h,e.h+.25,0,.62,.5,c,i.edge)}function RA(n,e){for(let s=0;s<7;s++){let r=-19+s*6.25,o=[7,10,8,13,10,8,7][s];n.add(Je(5.95,o,4,r,o/2,-21.3),e.edge),n.add(Je(6.2,.25,4.1,r,o,-21.3),e.trim);for(let a of[-1.6,0,1.6])s===3&&a===0||(n.add(Je(.72,1.23,.04,r+a,o-1.4,-19.29),e.inlay),n.add(Je(1.04,.12,.15,r+a,o-2.04,-19.22),e.trim))}let t=new Nn(.72,.72,.15,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.25),i=new Nn(.6,.6,.16,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.19);n.add(t,e.inlay),n.add(i,e.trim),n.add(Je(.43,.075,.04,-.09,11.25,-19.08),e.inlay),n.add(Je(.075,.33,.04,-.25,11.4,-19.08),e.inlay)}function CA(n,e){for(let t of[-14,0,14]){let i=t===0,s=i?9.4:7.4;n.add(Je(13.45,s,5,t,s/2,-22),e.edge),n.add(Je(13.65,.3,5.2,t,s,-22),e.inlay),n.add(Je(11,.34,.08,t,s-1.15,-19.46),e.landmark);for(let r of[-4,-2,0,2,4])n.add(Je(1.33,.76,.1,t+r,s-.57,-19.45),e.trim);if(i){n.add(Je(9.8,1.45,2.6,t,s+.69,-22),e.edge),n.add(Je(10.05,.2,2.85,t,s+1.46,-22),e.inlay);for(let r of[-3.5,3.5])n.add(new Nn(.32,.43,2,12).translate(t+r,s+2.1,-22),e.inlay)}}}function PA(n,e){n.add(Je(38.5,6.7,4,0,3.35,-23),e.edge),n.add(Je(38.5,.17,4.1,0,6.62,-23),e.trim);for(let t=-17.8;t<18.8;t+=1.65)n.add(Je(.76,.59,1.18,t,6.96,-21.5),e.edge);for(let t of[-12.7,0,12.7]){let i=t===0?11.5:9;n.add(new Nn(2.35,2.58,i,14).translate(t,i/2,-22),e.edge),n.add(new Nn(2.5,2.43,.25,14).translate(t,i-.48,-22),e.trim),n.add(new ei(2.65,2.8,14).translate(t,i+1.33,-22),e.landmark),n.add(Je(.53,1.18,.075,t,i-1.55,-19.62),e.inlay),n.add(Je(.83,.11,.16,t,i-2.16,-19.55),e.trim)}}function IA(n,e,t,i){t===ia&&RA(n,i),t===sa&&CA(n,i),t===pl&&PA(n,i);for(let s of[-1,1]){let r=EA("station").scale(.95,1.45,.95).translate(s*2.5,4.92,-18.3);Jt(r,Ht(t.trim,{vertexColors:!0}),e,!1)}}function ra(n,e,t,i){let s=vA[i-1]??ia,r=bA(n),o=Object.fromEntries(["trim","inlay","edge","landmark"].map(w=>[w,Ht(s[w])])),a=na(s,"floor");a.repeat.set(10,10),Jt(new ur(38,38).rotateX(-Math.PI/2),Ht("#fff8ed",{map:a}),n,!1);let c=Ht(s.landmark);for(let w of[-1,1])for(let U=12;U>=-12;U-=2.4)r.add(Je(.086,.009,1.5,w*1.15,.006,U),c);let l=Ht("#ffffff",{map:na(s,"wall")}),h=Ht("#ffffff",{map:na(s,"cover")}),u=Ht("#ffffff"),d=e.map((w,U)=>{let y=w.h>=1.5,b=Math.max(1,Math.round(Math.max(w.w,w.d)/3.7)),F=SA(Je(w.w,w.h,w.d,w.x,w.h*.5,w.z),b,1);r.add(F,y?l:h),TA(r,w,s,o,y,U<4);let X=Jt(Je(w.w,w.h,w.d,w.x,w.h*.5,w.z),u,n,!1,!1);return X.visible=!1,X}),p=Ht("#ffffff",{map:na(s,"door")}),g=t.map(w=>{let U=new ht;U.position.set(w.x,w.h/2,w.z),n.add(U);let y=Jt(new ln(w.w,w.h,w.d),p,U),b=w.w>w.d,F=[Je(w.w+.035,.11,w.d+.035,0,-w.h/2+.12,0),Je(w.w+.035,.07,w.d+.035,0,w.h/2-.15,0)];for(let j of[-1,1])F.push(Je(b?.08:w.w+.03,w.h-.18,b?w.d+.03:.08,b?j*(w.w/2-.16):0,0,b?0:j*(w.d/2-.16)));Jt(br(F),o.trim,U);let X=Jt(Je(b?.24:w.w+.04,.075,b?w.d+.04:.24,0,.8,0),new Gt({color:"#e6ad65"}),U,!1,!1);return{d:w,mesh:y,group:U,status:X}}),_=new ht;_.position.set(0,0,-13),n.add(_);let m=Ht("#435c60",{metalness:.38,roughness:.58}),f=[Je(1.48,.09,1.06,0,.05,0),new Ps(1.3,.62,.88,2,.055).translate(0,.37,0),Je(1.15,.065,.72,0,.74,0),Je(.12,.13,1,0,.12,0)];Jt(br(f),m,_);let v=Jt(new Ps(.67,.18,.075,2,.02).translate(0,.43,.46),Ht("#d2a35f",{metalness:.4}),_);v.name="device-case";let A=Jt(Je(.66,.076,.43,0,.802,0),Ht("#213238",{metalness:.36}),_);A.rotation.x=.025;let E=Jt(Je(.54,.024,.36,0,.85,.015),new Gt({color:"#edb663"}),_,!1,!1),C=Jt(new Es(.044,10,6).translate(.31,.56,.457),new Gt({color:"#edb663"}),_,!1,!1),R=Jt(new Wo(1.17,36).rotateX(-Math.PI/2),Ht(s.trim,{transparent:!0,opacity:.22,depthWrite:!1}),_,!1,!1);return R.position.y=.012,IA(r,n,s,o),r.finish(),{theme:s,wallRays:d,doorViews:g,station:_,strip:E,lamp:C}}function ve(n,e,t,i,s=0,r=0,o=0){return new Ps(n,e,t,1,i).translate(s,r,o)}function ct(n,e,t,i,s,r="z",o=12){let a=new Nn(n,n,e,o);return r==="z"&&a.rotateX(Math.PI/2),r==="x"&&a.rotateZ(Math.PI/2),a.translate(t,i,s)}function Is(n,e,t){let i=t.map(([s,r])=>{let o=new Be(r),a=new Float32Array(s.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return s.setAttribute("color",new yt(a,3)),s});return Jt(br(i),e,n,!1,!1)}function Ds(n,e){let t="#38434a",i="#788287",s="#abb3ae",r="#282d30",o=["#d8904a","#b88560","#ccaa65"][e%3],a=Ht(["#d39864","#b99070","#d2aa71"][e%3],{vertexColors:!0,metalness:.32,roughness:.53,emissive:"#000000"}),c=Ht("#ffffff",{vertexColors:!0,metalness:.3,roughness:.61}),l=[[ve(.63,.47,.36,.063,0,1.17,-.013),"#ded9c6"],[ve(.42,.21,.28,.029,0,.79,-.02),"#8a989c"],[ve(.45,.33,.37,.054,0,1.68,-.003),"#d8d4c2"],[ve(.34,.08,.28,.024,0,1.864,-.018),"#e7dbbd"],[ve(.43,.19,.08,.034,0,1.2,.176),"#bebcb3"]],h=[[ve(.41,.21,.08,.038,0,1.69,.172),t],[ve(.33,.132,.037,.021,0,1.7,.214),"#263436"],[ve(.25,.069,.075,.019,0,1.574,.166),i],[ct(.108,.108,0,1.47,-.02,"y"),i],[ve(.36,.23,.33,.045,0,.92,0),r],[ve(.32,.29,.15,.035,0,1.27,-.22),t],[ve(.27,.055,.05,.012,0,1.02,.174),t],[ve(.18,.072,.036,.013,0,1.2,.223),"#252f31"]];for(let g of[-1,1]){l.push([ve(.057,.11,.3,.014,g*.219,1.756,-.01),"#8b9294"]),h.push([ct(.037,.026,g*.223,1.69,.171,"x"),i]),h.push([ct(.018,.016,g*.257,1.24,.183),"#c2c2b5"]);for(let _=0;_<4;_++)h.push([Je(.084,.012,.046,g*.103,1.18+_*.032,-.298),"#151f22"])}Is(n,a,l),Is(n,c,h);let u=Jt(br([ve(.162,.057,.025,.012,0,1.7,.238),ct(.029,.019,-.118,1.7,.235),ct(.029,.019,.118,1.7,.235),ve(.1,.023,.017,.006,0,1.2,.247)]),new Gt({color:"#ffc277"}),n,!1,!1),d=[],p=[];for(let g of[-1,1]){let _=new ht;_.position.set(g*.214,.74,0),n.add(_),Is(_,c,[[ve(.196,.27,.27,.031,0,-.11,-.039),s],[ct(.093,.235,0,-.31,.023,"x"),t],[ct(.058,.022,g*.123,-.31,.023,"x"),i],[ct(.039,.26,g*.041,-.448,-.065,"y"),i],[ve(.15,.26,.156,.026,0,-.455,.04),t],[ve(.165,.2,.086,.024,0,-.435,.133),o],[ve(.21,.135,.37,.028,0,-.639,.047),i],[ve(.23,.056,.385,.016,0,-.711,.05),r],[ve(.167,.078,.125,.015,0,-.628,.207),s]]),d.push(_);let m=new ht;n.add(m),m.position.set(g*.393,1.4,-.01),m.rotation.z=g*.1,Is(m,c,[[ct(.1,.16,0,-.04,-.017,"x"),r],[ve(.215,.157,.281,.04,g*.032,-.007,.014),s],[ve(.068,.103,.176,.016,g*.124,-.02,.027),o],[ve(.128,.2,.149,.022,0,-.17,-.013),t],[ct(.068,.171,0,-.26,.017,"x"),i],[ve(.167,.206,.205,.034,0,-.373,.047),t],[ve(.124,.143,.048,.017,0,-.38,.16),i],[ve(.127,.108,.136,.02,0,-.514,.065),r]]),p.push(m)}return{legs:d,arms:p,chassis:a,visor:u}}function DA(n,e){let t="#49575a",i="#70766b",s="#303936",r=Ht("#ffffff",{vertexColors:!0,roughness:.82}),o=[[ve(.16,.15,.48,.049,.056,-.22,.24).rotateZ(.21),t],[ve(.17,.153,.092,.027,.046,-.2,.095),i],[ve(.157,.167,.179,.048,.031,-.137,.056),s],[ve(.105,.064,.102,.022,-.056,-.104,.051).rotateZ(.13),"#4d5b55"],[ve(.087,.031,.094,.012,.039,-.116,-.045),"#495853"],[ve(.093,.026,.083,.011,.04,-.152,-.043),"#495853"]];if((e==="carbine"||e==="sniper"||e==="bazooka")&&o.push([ve(.19,.17,.4,.049,-.102,-.214,-.24).rotateZ(-.13),t],[ve(.175,.117,.111,.026,-.055,-.145,-.447),i],[ve(.162,.096,.162,.035,-.024,-.095,-.48),s],[ve(.048,.074,.131,.021,-.093,-.056,-.49),"#495853"]),e==="knife")for(let[a]of o)a.translate(0,.066,.037);Is(n,r,o)}function oa(n,e){let t="#647277",i="#434e53",s="#283237",r="#797f72",o="#a89065",a="#cfb581",c=Ht("#ffffff",{vertexColors:!0,metalness:.37,roughness:.44}),l=[],h;if(e==="knife"){let u=new gr;u.moveTo(-.07,.085),u.lineTo(.063,.085),u.lineTo(.06,-.22),u.quadraticCurveTo(.046,-.48,-.055,-.58),u.lineTo(-.07,-.3),u.closePath();let d=new Xo(u,{depth:.016,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:8}).rotateX(Math.PI/2).translate(0,.052,-.14);l.push([d,"#bfcbc9"],[ve(.058,.011,.32,.005,.015,.055,-.307),"#8f9d9e"],[ve(.185,.054,.067,.014,0,.04,-.081),i],[ve(.112,.088,.304,.029,0,.032,.104),s]);for(let p=0;p<6;p++)l.push([ve(.121,.095,.025,.008,0,.032,-.006+p*.042),i]);h={x:0,y:.052,z:-.72}}else if(e==="bazooka"){l.push([ct(.102,.64,0,.027,-.28,"z",18),r],[ct(.113,.052,0,.027,-.588,"z",18),i],[ct(.108,.071,0,.027,.058,"z",18),i],[ct(.081,.013,0,.027,-.619),s],[ve(.181,.088,.198,.019,0,-.095,-.22),s],[ve(.206,.06,.324,.017,0,.138,-.24),t],[ve(.096,.079,.121,.016,0,.181,-.1),i],[ve(.057,.026,.012,.006,0,.184,-.034),"#587c77"]);for(let u of[-.519,-.42,-.04])l.push([ct(.106,.026,0,.027,u,"z",18),u===-.42?o:t]);h={x:0,y:.027,z:-.658}}else if(e==="pistol"){l.push([ve(.131,.1,.41,.023,0,.073,-.183),t],[ve(.119,.057,.355,.015,0,.119,-.16),i],[ve(.119,.068,.365,.014,0,.008,-.135),s],[ve(.107,.181,.115,.024,0,-.079,.036).rotateX(-.14),i],[ve(.123,.035,.141,.011,0,-.167,.049),s],[ct(.038,.027,0,.066,-.393),i],[ct(.023,.019,0,.066,-.412),s],[ve(.11,.023,.115,.006,.016,.121,-.17),"#939b9a"],[ve(.095,.028,.043,.006,0,.149,.004),s],[ve(.047,.033,.04,.006,0,.149,-.35),s],[ve(.027,.01,.026,.004,0,.168,-.348),a],[ve(.081,.031,.092,.006,0,-.04,-.183),i]);for(let u=0;u<6;u++){let d=-.017-u*.024;l.push([Je(.132,.056,.009,0,.082,d).rotateX(.016),s])}h={x:0,y:.066,z:-.438}}else{let u=e==="sniper",d=u?-.855:-.708;l.push([ve(.154,.138,.409,.023,0,.067,-.109),t],[ve(.125,.092,.242,.019,0,.024,.204),i],[ve(.154,.065,.231,.017,0,.084,.264),s],[ve(.151,.172,.143,.019,0,-.085,-.215).rotateX(-.09),s],[ve(.131,.027,.324,.008,0,.147,-.202),s],[ve(.149,.113,.318,.015,0,.072,-.464),u?r:i],[ct(.026,u?.26:.13,0,.071,d+.083),t],[ct(.039,.067,0,.071,d),i],[ct(.025,.009,0,.071,d-.037),s]);for(let p=0;p<7;p++)l.push([ve(.141,.015,.025,.003,0,.161,-.079-p*.039),i]),l.push([Je(.152,.035,.014,0,.064,-.338-p*.042),s]);u?l.push([ve(.064,.071,.227,.012,0,.172,-.25),i],[ct(.051,.251,0,.233,-.218),s],[ct(.069,.103,0,.233,-.382),i],[ct(.061,.072,0,.233,-.059),i],[ct(.044,.008,0,.233,-.02),"#497d79"],[ct(.041,.034,0,.293,-.2,"y"),t]):l.push([ve(.069,.052,.088,.012,0,.183,-.089),s],[ve(.061,.067,.054,.01,0,.169,-.57),i],[ve(.02,.016,.025,.004,0,.21,-.57),a],[ve(.024,.059,.114,.006,.081,.071,-.081),o]),h={x:0,y:.071,z:d-.067}}return DA(n,e),Is(n,c,l),h}function rd(n){let e=["localhost","127.0.0.1"].includes(location.hostname),t=e?"ws://127.0.0.1:8791/rooms":document.querySelector("meta[name=coop-endpoint]")?.content,i=document.createElement("dialog");i.style.cssText="width:min(960px,96vw);max-height:96dvh;background:#173a32;color:#fff6da;padding:12px;overflow:auto",i.innerHTML='<h2>\u5169\u4EBA\u5408\u4F5C \xB7 \u820A\u57CE\u8857\u5340</h2><p role="status"></p><div class="room-controls"><label>\u540D\u7A31 <input maxlength="20" value="\u73A9\u5BB6"></label> <button data-create>\u5EFA\u7ACB\u623F\u9593</button> <label>\u623F\u9593\u78BC <input maxlength="8"></label> <button data-join>\u52A0\u5165</button> <button data-resume hidden>\u91CD\u65B0\u9023\u7DDA</button></div><button data-match-resume hidden>\u7E7C\u7E8C\u64CD\u4F5C</button><button data-ready hidden>\u6E96\u5099\uFF0F\u518D\u6230</button> <button data-exit>\u96E2\u958B\u623F\u9593</button><div data-field hidden><canvas tabindex="0" style="display:block;width:100%;height:min(52vh,450px);touch-action:none"></canvas><p>WASD \u79FB\u52D5 \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u2190\uFF0F\u2192 \u8F49\u5411 \xB7 Q \u7784\u6E96 \xB7 R \u63DB\u5F48 \xB7 E \u958B\u9580\uFF0F\u9577\u6309\u62C6\u89E3 \xB7 F \u67E5\u5E33</p><button data-buy-rocket>\u8CFC\u8CB7\u706B\u7BAD\u7B52 \xB7 350</button><button data-reload>\u63DB\u5F48 R</button><button data-equip>\u5207\u63DB\u6B66\u5668</button><div data-offer hidden></div></div>',i.querySelector("[data-buy-rocket]").title=Ws(),i.querySelector("[data-buy-rocket]").insertAdjacentText("afterend"," "+Ws()+" "),document.body.append(i),i.showModal();let s=G=>i.querySelector(G),r=s("[role=status]"),o=s("canvas"),a=i.querySelectorAll("input"),c=new AbortController,l=(G,se,M)=>G.addEventListener(se,M,{signal:c.signal}),h,u,d,p,g=0,_,m,f,v,A,E,C=!1,R=!1,w=0,U=0,y=0,b=null,F=!1,X=!1,j=new Set,L=new Map,B=G=>{h?.readyState===1&&h.send(JSON.stringify({v:3,seq:++g,...G}))},W,$=()=>{j.clear(),C=R=!1,w=0,ie()},J=()=>W?W.clear():$(),q=()=>_?.phase==="playing"&&!F&&s("[data-offer]").hidden&&_.players.some(G=>G.id===u&&G.hp);function ie(){let G=q();B({type:"input",f:G?Number(j.has("KeyW"))-Number(j.has("KeyS")):0,r:G?Number(j.has("KeyD"))-Number(j.has("KeyA")):0,fire:G&&(C||j.has("KeyX")||performance.now()<w),use:G&&j.has("KeyE"),yaw:U,pitch:y})}let ee,de,V,re=new Map,pe=0,be=0,xe=[];function Ie(G){let se=Math.min(1,(G-pe)/100),M=_.projectiles.map(x=>{let N=re.get(x.id)?.position||x.previousPosition,K=x.position;return{...x,position:{x:N.x+(K.x-N.x)*se,y:N.y+(K.y-N.y)*se,z:N.z+(K.z-N.z)*se}}});V.update(M,xe.splice(0),Math.min(.1,(G-be)/1e3)),be=G}let Ne=new I,we=matchMedia("(prefers-reduced-motion: reduce)");function Ue(G,se,M,x,N,K,te){let Z=L.get(G);if(!Z){let De=new ht;De.position.set(se,0,M),f.add(De);let fe=Ds(De,x);te&&(fe.chassis.color.setHex(5674136),fe.visor.material.color.setHex(10092530)),Z={root:De,art:fe},L.set(G,Z)}let{root:_e,art:le}=Z;if(_e.visible=N,!N)return;let Ae=se-_e.position.x,Se=M-_e.position.z;_e.position.x+=Ae*.35,_e.position.z+=Se*.35;let Ce=Math.hypot(Ae,Se);K!=null?_e.rotation.y=Math.PI+K:Ce>.005&&(_e.rotation.y=Math.atan2(Ae,Se));let ne=we.matches?0:Math.min(.42,Ce*3),Qe=performance.now()/114;for(let[De,fe]of le.legs.entries()){let Ee=Math.sin(Qe+De*Math.PI)*ne;fe.rotation.x=Ee,le.arms[De].rotation.x=-Ee*.6}}function P(){m=new Oi({canvas:o,antialias:matchMedia("(pointer:fine)").matches}),f=new bs,v=new Nt(72,1,.08,65),f.add(v);let G=Vi(1),se=ra(f,G.walls,G.doors,1),{theme:M,doorViews:x}=se;f.background=new Be(M.sky),f.fog=new Ms(M.fog,27,61),f.add(new Ts("#fff0d1",M.cold,1.85));let N=new Rs(M.bright,2.05);N.position.set(6,15,8),f.add(N);let K=new Map(x.map(_e=>[_e.d.id,_e])),te=performance.now(),Z=(_e=performance.now())=>{let le=Math.min(.05,(_e-te)/1e3);te=_e,q()&&(U+=(Number(j.has("ArrowLeft"))-Number(j.has("ArrowRight")))*le*1.9);let Ae=R?54:72;if(v.fov!==Ae&&(v.fov=Ae,v.updateProjectionMatrix()),A=requestAnimationFrame(Z),!_||!o.clientWidth)return;let Se=_.players.find(fe=>fe.id===u),Ce=Se?.hp?Se:_.players.find(fe=>fe.hp)||Se;if(!Ce)return;let ne=o.clientWidth,Qe=o.clientHeight;(o.width!==ne||o.height!==Qe)&&(m.setSize(ne,Qe,!1),v.aspect=ne/Qe,v.updateProjectionMatrix()),Ne.set(Ce.x,1.55,Ce.z),b||(b=Ne.clone()),b.lerp(Ne,.34),v.position.copy(b),v.rotation.set(y,U,0,"YXZ");for(let fe of _.doors){let Ee=K.get(fe.id);Ee&&(Ee.group.position.y+=((fe.open?fe.h+2:fe.h/2)-Ee.group.position.y)*.25,Ee.status.material.color.setHex(fe.open?8767136:15117669))}let De=_.verified?8443050:_.time<10?15960688:15578723;se.strip.material.color.setHex(De),se.lamp.material.color.setHex(De);for(let fe of _.bots)Ue("b"+fe.id,fe.x,fe.z,fe.id,fe.hp>0,null,!1);for(let fe of _.players)Ue(fe.id,fe.x,fe.z,1,fe.id!==Ce.id&&fe.hp>0,fe.yaw,!0);Se?.weapon!==de&&(ee&&(v.remove(ee),ee.traverse(fe=>{fe.geometry?.dispose(),fe.material?.dispose()})),de=Se?.weapon,ee=new ht,ee.position.set(.34,-.33,-.65),ee.scale.setScalar(.74),v.add(ee),oa(ee,de||"pistol")),V&&Ie(performance.now()),m.render(f,v)};Z()}function ce(){let G=_.players.find(se=>se.id===u);G&&(r.textContent="\u623F\u9593 "+d+" \xB7 "+_.players.map(se=>se.name+" "+se.hp+" HP"+(se.online?se.ready?"\uFF08\u5DF2\u6E96\u5099\uFF09":"":"\uFF08\u96E2\u7DDA\uFF09")).join(" \uFF0F ")+" \xB7 "+(_.phase==="playing"?Math.ceil(_.time)+" \u79D2 \xB7 \u5F48\u5323 "+G.ammo+" / \u5099\u5F48 "+G.reserve+(G.reload?" \xB7 \u63DB\u5F48 "+G.reload.toFixed(1)+"s":"")+" \xB7 "+(_.verified?"\u5DF2\u6838\u5BE6":"\u5230\u5317\u9762\u67E5\u5E33")+" \xB7 \u62C6\u89E3 "+_.progress.toFixed(1)+"/5 \u79D2"+(F?" \xB7 \u9078\u55AE\u958B\u555F\uFF0C\u5408\u4F5C\u5C0D\u5C40\u7E7C\u7E8C":""):_.result||"\u7B49\u5019\u5169\u4EBA\u6E96\u5099"),s("[data-buy-rocket]").disabled=!G.hp||G.launcher||G.credits<350,s("[data-reload]").disabled=!G.hp||G.reload>0||!G.reserve||G.ammo>=ot[G.weapon].mag,s("[data-equip]").disabled=!G.hp||!G.launcher,_.phase==="playing"&&(r.textContent+=" \xB7 \u88DD\u5099\u9EDE "+G.credits+" \xB7 "+(G.weapon==="bazooka"?"\u706B\u7BAD\u7B52":"\u624B\u69CD")),s("[data-match-resume]").hidden=_.phase!=="playing"||!F,s("[data-ready]").hidden=_.phase==="playing",s("[data-ready]").disabled=G.ready,s("[data-field]").hidden=_.phase!=="playing",s("[data-offer]").hidden=!(_.phase==="playing"&&G.hp&&G.checked&&!_.verified&&Math.hypot(G.x,G.z+13)<2.7),_.phase==="playing"&&!m&&P())}function Y(G){if(h&&h.readyState<2)return;let se;try{se=JSON.parse(sessionStorage.getItem("coop-room-session"))}catch{}let M=new URL(t);M.searchParams.set("action",G),G!=="create"&&M.searchParams.set("code",G==="reconnect"?se?.code:a[1].value.trim().toUpperCase()),h=new WebSocket(e?t:M),r.textContent="\u9023\u7DDA\u4E2D\u2026",h.onopen=()=>B({type:G,code:G==="reconnect"?se?.code:a[1].value.trim().toUpperCase(),token:G==="reconnect"?se?.token:void 0,name:a[0].value}),h.onmessage=x=>{let N=JSON.parse(x.data);if(N.v!==3){r.textContent="\u5408\u4F5C\u7248\u672C\u4E0D\u540C\uFF0C\u8ACB\u66F4\u65B0\u904A\u6232\u540C\u623F\u9593\u4F3A\u670D\u5668\u3002",h.close();return}if(N.type==="joined"){({id:u,code:d,token:p}=N);try{sessionStorage.setItem("coop-room-session",JSON.stringify({code:d,token:p}))}catch{}s(".room-controls").hidden=!0;return}if(N.type==="state"){let K=_?.round!==N.round;re=new Map((K?[]:_.projectiles).map(Z=>[Z.id,Z])),(K||N.phase!=="playing")&&(V?.dispose(),V=null,xe=[]);let te=q();_=N,pe=performance.now(),ce(),te&&!q()&&J(),_.phase==="playing"&&(V??=ea(f,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,onImpact:n}),xe.push(...N.impacts))}else N.type==="error"&&(r.textContent=N.message)},h.onerror=()=>r.textContent="\u623F\u9593\u4F3A\u670D\u5668\u672A\u80FD\u9023\u7DDA\u3002",h.onclose=()=>{X||(J(),s("[data-field]").hidden=s("[data-ready]").hidden=!0,s(".room-controls").hidden=!1,s("[data-resume]").hidden=!p,r.textContent+=" \xB7 \u9023\u7DDA\u5DF2\u95DC\u9589")}}function oe(){J(),X=!0,clearInterval(E),cancelAnimationFrame(A),c.abort(),V?.dispose(),h?.close(),f?.traverse(G=>{G.geometry?.dispose(),G.material?.map?.dispose(),G.material?.dispose()}),m?.dispose(),m?.forceContextLoss(),i.remove()}if(s("[data-exit]").onclick=oe,s("[data-match-resume]").onclick=()=>{F=!1,J(),_&&ce(),o.focus()},l(i,"cancel",G=>{G.preventDefault(),F=!0,J(),_&&ce()}),l(window,"pagehide",oe),window.offlineEdition||!t){s(".room-controls").hidden=!0,r.textContent=window.offlineEdition?"\u96E2\u7DDA\u7248\u53EF\u73A9\u55AE\u4EBA\uFF1B\u5408\u4F5C\u9700\u8981\u7DB2\u7D61\u3002":"\u516C\u958B\u5408\u4F5C\u4F3A\u670D\u5668\u5C1A\u672A\u9023\u63A5\u3002";return}try{s("[data-resume]").hidden=!sessionStorage.getItem("coop-room-session")}catch{}s("[data-create]").onclick=()=>Y("create"),s("[data-join]").onclick=()=>Y("join"),s("[data-resume]").onclick=()=>Y("reconnect"),s("[data-ready]").onclick=()=>B({type:"ready"}),s("[data-buy-rocket]").onclick=()=>{B({type:"buy",item:"bazooka"}),B({type:"equip",weapon:"bazooka"}),o.focus()},s("[data-reload]").onclick=()=>{B({type:"reload"}),o.focus()},s("[data-equip]").onclick=()=>{B({type:"equip",weapon:_.players.find(G=>G.id===u)?.weapon==="bazooka"?"pistol":"bazooka"}),o.focus()};let Q=s("[data-offer]");Q.textContent=si[0].q+" \u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\uFF0C\u5168\u968A\u4EFB\u52D9\u5931\u6557\u3002",si[0].answers.forEach((G,se)=>{let M=document.createElement("button");M.textContent=G,M.onclick=()=>B({type:"answer",answer:se}),Q.append(M)}),W=ta({on:l,canvas:o,active:q,look(G,se){let M=R?.0018:.003;U-=G*M,y=Math.max(-1.2,Math.min(1.2,y-se*M))},fire(G){C=G,G&&(w=performance.now()+70,ie())},clearInput:$}),l(i,"keydown",G=>{if(!q()||G.target.matches("input,select,textarea")||!["KeyW","KeyA","KeyS","KeyD","KeyX","KeyQ","KeyE","KeyF","KeyR","ArrowLeft","ArrowRight"].includes(G.code)||(G.preventDefault(),j.add(G.code),G.repeat))return;G.code==="KeyX"&&(w=performance.now()+70,ie()),G.code==="KeyQ"&&(R=!R);let se={KeyE:"door",KeyF:"check",KeyR:"reload"}[G.code];se&&B({type:se})}),l(window,"keyup",G=>j.delete(G.code)),l(window,"blur",J),l(document,"visibilitychange",()=>{document.hidden&&J()}),E=setInterval(()=>{_?.phase==="playing"&&ie()},75),r.textContent="\u5EFA\u7ACB\u623F\u9593\u5F8C\uFF0C\u5C07\u516B\u4F4D\u623F\u9593\u78BC\u4EA4\u7540\u968A\u53CB\u3002"}function od(n){return globalThis.siteLocale?.text(n)??n}var ml=Object.freeze({x:0,z:-13,name:"\u5317\u9762\u7D42\u7AEF"}),ad=Object.freeze({q:"\u963F\u4FCA\u8AD7\u4F4F\u501F HK$20,000 \u66AB\u6642\u9084\u820A\u5361\u6578\u3002\u78BA\u8A8D\u4E4B\u524D\u61C9\u8A72\u9EDE\u505A\uFF1F",answers:["\u66AB\u505C\u78BA\u8A8D\uFF0C\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB","\u5148\u501F\u65B0\u9322\u66AB\u6642\u9084\u820A\u5361\u6578"],right:0,why:"\u66AB\u505C\u64B3\u78BA\u8A8D\u3002\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB\uFF0C\u518D\u540C\u963F\u4FCA\u4E00\u9F4A\u67E5\u6E05\u695A\u820A\u6B20\u6B3E\u3002"}),LA=[{x:-12,z:-13,name:"\u897F\u5DF7\u63A5\u6536\u7AD9"},{x:12,z:-13,name:"\u6771\u5074\u8CA8\u53F0"},{x:13,z:-14,name:"\u6771\u5317\u77AD\u671B\u53F0"}],NA=[{id:"verify",title:"\u6838\u5C0D\u53CA\u62C6\u89E3",brief:"\u53BB\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u8CC7\u6599\uFF0C\u6309\u4F4F E \u62C6\u89E3\u3002"},{id:"dispatch",title:"\u96D9\u7AD9\u63A5\u529B",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\u4E26\u6309\u4F4F E \u6574\u7406\u8A18\u9304\uFF0C\u518D\u53BB\u63A5\u6536\u7AD9\u6309\u4F4F E \u4EA4\u63A5\u3002"},{id:"hold",title:"\u5B88\u4F4F\u4E0A\u50B3\u9EDE",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\uFF0C\u518D\u53BB\u6307\u5B9A\u5730\u9EDE\u7559\u55BA\u7BC4\u570D\u5167\u76F4\u81F3\u4E0A\u50B3\u5B8C\u6210\u3002"}],gl=LA.flatMap((n,e)=>NA.map(t=>({...t,id:e+1+"-"+t.id,mode:t.id,round:e+1,map:Vi(e+1).name,second:n})));function cd(n){let e=gl.find(t=>t.id===n);return e?{mission:e,stage:0,complete:!1}:null}function _l(n,e,t=!1){let i=n?.stage??0,s=n?.mission.mode??"verify";return e?s==="hold"?{point:n.mission.second,kind:"upload",seconds:8}:s==="dispatch"?i===0?{point:ml,kind:"prepare",seconds:t?2:3}:{point:n.mission.second,kind:"handoff",seconds:4}:{point:ml,kind:"defuse",seconds:t?3:5}:{point:ml,kind:"check",seconds:t?3:5}}function Ls(n,e,t=2.7){return Math.hypot(n.x-e.x,n.z-e.z)<t}function ld(n,e,t,i){if(n?.complete)return null;let s=_l(n,e.verified,e.purchases.includes("kit"));return e.phase!=="playing"||s.kind==="check"||!Ls(e,s.point)||!t&&s.kind!=="upload"?(e.defuse=0,null):(e.defuse=Math.min(s.seconds,e.defuse+i),e.defuse+1e-9<s.seconds?null:n?.mission.mode==="dispatch"&&n.stage===0?(n.stage=1,e.defuse=0,"relay"):(n&&(n.complete=!0),"complete"))}var aa={follow:"\u8DDF\u96A8",hold:"\u5B88\u4F4D",cover:"\u63A9\u8B77",advance:"\u7A81\u7834"};function hd(n,e){return[[-1.4,15.6],[1.6,15.2],[0,16.5]].map(([t,i],s)=>{let r=new ht,o=Ds(r,s);return r.position.set(t,0,i),o.chassis.color.set("#397c73"),o.visor.material.color.set("#abf4d5"),n.add(r),{id:s,x:t,z:i,mesh:r,art:o,plan:[],refresh:s*.2,action:1+s*.3,open:!An(t,i,.33,e)}})}function ud(n,e,t,i,s,r,o,a,c){for(let l of n){if(!l.open)continue;let h=e==="advance"?i:e==="follow"?{x:t.x+(l.id-1)*1.16,z:Math.min(16.5,t.z+1.7+l.id*.5)}:null;if(l.refresh-=o,h&&l.refresh<=0){l.refresh=.9+l.id*.11;let p=Math.hypot(l.x-h.x,l.z-h.z);l.plan=p<1.2?[]:Xs(l.x,l.z,h.x,h.z,r)?Br(l.x,l.z,h.x,h.z,r):[h]}let u=h&&l.plan[0];if(u){let p=u.x-l.x,g=u.z-l.z,_=Math.hypot(p,g);if(_<.45)l.plan.shift();else{let m=Math.min(2.8*o,_)/_;Or(l,p*m,g*m,r),l.mesh.position.set(l.x,0,l.z),l.mesh.rotation.y=Math.atan2(p,g)}}for(let[p,g]of l.art.legs.entries())g.rotation.x=u?Math.sin(a*9+p*Math.PI)*.34:0;if(l.action-=o,l.action>0||!["cover","advance"].includes(e))continue;l.action=1.7+l.id*.12;let d=s.find(p=>p.hp>0&&Math.hypot(l.x-p.x,l.z-p.z)<10&&!Xs(l.x,l.z,p.x,p.z,r));d&&c(l,d)}}function UA(n={}){n=n&&typeof n=="object"?n:{};let e=(t,i,s,r)=>Number.isFinite(t)?Math.min(s,Math.max(i,t)):r;return{sensitivity:e(n.sensitivity,.25,3,1),ads:e(n.ads,.2,1.5,.45),volume:e(n.volume,0,1,.65),invert:n.invert===!0,camera:"free",reduced:n.reduced===!0}}function Al(n,e={}){return UA(n??e)}function dd(n,e,t,i){let s=.0022*i.sensitivity*(t?i.ads:1),r=Number.isFinite(n)?n:0,o=Number.isFinite(e)?e:0;return{yaw:r*s,pitch:o*s*(i.invert?-1:1)}}var xl=new Map,Re=n=>{if(!xl.has(n)){let e=document.getElementById(n);return e&&xl.set(n,e),e}return xl.get(n)},ti=Re("world"),_d=new AbortController,ut=new Set,ca=new Jo,Gs=document.createElement("label");Gs.id="squad-control";Gs.hidden=!0;Gs.innerHTML='\u5C0F\u968A <select aria-label="\u5C0F\u968A\u6307\u4EE4">'+Object.entries(aa).map(([n,e])=>'<option value="'+n+'">'+e+"</option>").join("")+"</select>";document.body.append(Gs);var ua=Gs.querySelector("select"),FA=[...document.querySelectorAll("[data-weapon]")],bl=null,Sl=null,fd=0,Us=!0,Dr=!1,Ad=[],Ns=null,wr=null,Rn=null,Ml=null,wn=null,Tr=null,Lt=null;try{let n=localStorage.getItem("fps-preferences-v2"),e=localStorage.getItem("fps-preferences-v1");Lt=Al(n?JSON.parse(n):null,JSON.parse(e||"{}"))}catch{Lt=Al(null)}var vi=0,Cr=0,Mt=zl(),El=[],mn=!1,Pr=!1,xd=0,pa=!1,T=Wi(),Kt,Et,Dt,dn,fn,tn=0,Mi=0,ma=0,nn=[],Os=[],Ir=[],yd=[],Cn=0,Bs=0,Pn=!1,_n=!1,pn=!1,Fn=Lt.reduced||matchMedia("(prefers-reduced-motion:reduce)").matches,tt=null,ga=0,Sr=0,Rr=0,Fs=0,Er=0,_a=!1,bt=!1,ze=null,ni=[],zs="follow",Ft=()=>window.arcadeStory?.id==="verify",wl=()=>Ft()?ad:si[T.round-1],vd="fps-missions-v1",On=()=>_l(ze,T.verified,T.purchases.includes("kit")),$e=(n,e,t,i={})=>n.addEventListener(e,t,{...i,signal:_d.signal});$e(ua,"change",()=>{if(!(T.phase!=="playing"||!ni.length||!Object.hasOwn(aa,ua.value))){zs=ua.value;for(let n of ni)n.refresh=0;T.feedback="\u5C0F\u968A\u6307\u4EE4 \xB7 "+aa[zs],ti.focus()}});function gn(n,e=.1,t=.06,i="sine"){if(pn||!tt||tt.state!=="running")return;let s=tt.createOscillator(),r=tt.createGain();s.type=i,s.frequency.setValueAtTime(n,tt.currentTime),s.frequency.exponentialRampToValueAtTime(Math.max(30,n*.4),tt.currentTime+e),r.gain.setValueAtTime(t,tt.currentTime),r.gain.exponentialRampToValueAtTime(.001,tt.currentTime+e),s.connect(r),r.connect(Tr||tt.destination),s.onended=()=>{s.disconnect(),r.disconnect()},s.start(),s.stop(tt.currentTime+e)}function ks(){if(!pn&&!document.hidden&&window.gameAudio?.resume(),!(pn||!["menu","buy","playing"].includes(T.phase)))try{tt||(tt=new AudioContext,Tr=tt.createGain(),Tr.gain.value=Lt.volume,Tr.connect(tt.destination)),tt.resume().catch(()=>{}),ga=tt.currentTime}catch{}}function OA(){if(!(!tt||pn||T.phase!=="playing")&&tt.currentTime>=ga){let n=[110,98,130.81,87.31][Math.floor(Sr/16)%4];gn(n*(Sr%2?2:1),.14,.025,"triangle"),Sr%4===0&&gn(58,.12,.07),Sr%4===2&&gn(800,.03,.012,"square"),Sr++,ga=tt.currentTime+.2}}function la(n,e,t,i,s=0,r=0,o=0,a=Et){let c=new At(new ln(n,e,t),new Ai({color:i,roughness:.85}));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a.add(c),c}function da(n,e="#254f48"){let t=document.createElement("canvas");t.width=512,t.height=128;let i=t.getContext("2d"),s=new Ss(t),r=new Oo(new fr({map:s}));return r.userData.localize=()=>{i.fillStyle=e,i.fillRect(0,0,512,128),i.strokeStyle="#e9d59e",i.lineWidth=6,i.strokeRect(6,6,500,116),i.fillStyle="#fff4d5",i.textAlign="center",i.textBaseline="middle",i.font="bold 37px Microsoft JhengHei,sans-serif",i.fillText(od(n),256,65,475),s.needsUpdate=!0},r.userData.localize(),r.scale.set(4.2,1.05,1),r}function BA(){Et=new bs,Et.fog=new Ms,Dt=new Nt(76,1,.05,100),Dt.rotation.order="YXZ",Et.add(Dt),Kt=new Oi({antialias:matchMedia("(pointer:fine)").matches,powerPreference:"high-performance"}),Kt.outputColorSpace=_t,Kt.shadowMap.type=ol,ti.append(Kt.domElement),Ml=new Ts("#fff0d1","#4d6d59",1.85),Et.add(Ml),wn=new Rs("#ffe3b6",2.05),wn.position.set(6,15,8),wn.castShadow=!0,wn.shadow.mapSize.set(512,512),wn.shadow.camera.left=-23,wn.shadow.camera.right=23,wn.shadow.camera.top=23,wn.shadow.camera.bottom=-23,wn.shadow.normalBias=.03,Et.add(wn),Md(),Tl(),Lr()}function Md(){Ns&&yi(Ns),wr=Bl(T.round),Mt=wr.doors,Ns=new ht,Et.add(Ns),Rn=ra(Ns,ii,Mt,T.round);let{theme:n,station:e}=Rn;yd=Rn.wallRays,El=Rn.doorViews,Et.background=new Be(n.sky),Et.fog.color.set(n.fog),Et.fog.near=27,Et.fog.far=64,wn.color.set(n.bright),Ml.groundColor.set(n.cold),document.body.dataset.court=String(T.round);let t=da("\u5317\u9762\u7D42\u7AEF \xB7 \u67E5\u5E33 F","#264745");t.position.set(0,1.55,0),t.scale.set(2.6,.65,1),e.add(t);let i=da("\u5DF2\u6838\u5BE6 \xB7 \u4F9D\u7167\u756B\u9762\u6307\u793A","#264745");i.position.copy(t.position),i.scale.copy(t.scale),i.visible=!1,e.add(i),Rn.stationSign=t,Rn.verifiedSign=i;let s=da(wr.name,"#374d50");s.position.set(0,4,17.3),Ns.add(s)}function Tl(){dn&&yi(dn),dn=new ht,Dt.add(dn),dn.position.set(.34,-.33,-.65),dn.scale.setScalar(.74);let n=oa(dn,T.weapon);fn=new At(new ei(.07,.17,7),new Gt({color:"#ffe5a3"})),fn.rotation.x=-Math.PI/2,fn.position.set(n.x,n.y,n.z),fn.visible=!1,dn.add(fn)}function bd(n){Wl(T,n)&&(mn=!1,Tl(),T.feedback=ot[n].label)}function zA(){return T.weapon!=="knife"&&(T.weapon!=="sniper"||T.cooldown<=0)}function Sd(){T.phase==="playing"&&!bt&&zA()&&(mn=!mn)}function Ed(){T.phase==="playing"&&!bt&&T.jumpY===0&&(T.vy=5.3,Pr=!1,T.crouch=!1)}function wd(){if(T.phase!=="playing"||bt)return!1;let n=Mt.filter(e=>Math.hypot(e.x-T.x,e.z-T.z)<2.7).sort((e,t)=>Math.hypot(e.x-T.x,e.z-T.z)-Math.hypot(t.x-T.x,t.z-T.z))[0];return n?n.open&&Math.abs(T.x-n.x)<n.w/2+.45&&Math.abs(T.z-n.z)<n.d/2+.45?(T.feedback="\u5148\u96E2\u958B\u9580\u6846\uFF0C\u518D\u95DC\u9580\u3002",!0):(n.open=!n.open,nn.forEach(e=>e.navTime=0),T.feedback=n.open?"\u9580\u5DF2\u958B\uFF1B\u7559\u610F\u9580\u5F8C\u3002":"\u9580\u5DF2\u95DC\u3002",gn(140,.16,.04),!0):!1}function yi(n){n.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map?.dispose(),i.dispose()})}),n.removeFromParent()}var xi=[],Gi;function Aa(){xi=[],Gi?.dispose(),Gi=null,nn.forEach(n=>yi(n.mesh)),nn=[],ni.forEach(n=>yi(n.mesh)),ni=[],Os.forEach(n=>yi(n.mesh)),Os=[],Ir.forEach(n=>yi(n.mesh)),Ir=[],bt=!1,Re("terminal").hidden=!0,Rr=Fs=0,Pn=_n=!1,ut.clear()}function kA(n,e,t){let i=new ht;i.position.set(n,0,e),Et.add(i);let s=Rl()?59:90+(T.round-1)*10,r={mesh:i,x:n,z:e,hp:s,maxHp:s,rewarded:!1,dying:0,nav:[],navTime:t*.05,patrol:t,shoot:2+t*.3,ammo:9,reload:0,burst:0,burstClock:0,alertUntil:0,origin:{x:n,z:e},id:t},o=Ds(i,t);r.parts=o.legs,r.arms=o.arms,r.chassisMaterial=o.chassis,r.visor=o.visor,r.motion=0;let a=la(.75,.75,.5,"#fff",0,1.05,0,i),c=la(.65,.45,.5,"#fff",0,1.7,0,i);a.visible=c.visible=!1,a.userData.enemy=r,c.userData.enemy=r,c.userData.head=!0;let l=da(["\u4FE1\u7528\u5361\u8D85\u652F","\u60C5\u7DD2\u8AB2\u91D1","\u5206\u671F\u758A\u52A0","\u6E4A\u55AE\u885D\u52D5","\u6700\u4F4E\u9084\u6B3E"][t%5],"#3c4648");l.position.y=2.44,l.scale.set(1.92,.48,1),i.add(l);let h=new ht;return h.position.y=2.16,i.add(h),r.meter=h,la(1.15,.12,.05,"#273535",0,0,0,h),r.bar=la(1.08,.08,.06,"#a9d975",0,0,.04,h),r}function GA(){HA()&&(window.arcadeTest&&!ze&&(T.round=Number(window.arcadeTest.target.split("-")[1])),VA())}function HA(){return T.phase==="buy"}function VA(){if(!Xl(T))return;Aa(),Md(),Mi=performance.now(),Cn=0,Bs=0,tn=0,Er=0,mn=!1,Pr=!1,vi=0,Mt.forEach(e=>e.open=!1),Tl();let n=WA();Ad=n;for(let e=0;e<(Ft()?2:Ol[T.round-1]);e++)nn.push(kA(...n[e],e));zs="follow",ze?.training?T.time=180:ze&&(ni=hd(Et,Mt)),T.feedback=ze?.training?"\u7DF4\u7FD2\u5834 \xB7 \u6A5F\u68B0\u9776\u5514\u6703\u9084\u64CA\u3002\u53EF\u4EE5\u7DF4\u7FD2\u79FB\u52D5\u3001\u958B\u9580\u3001\u67E5\u5E33\u540C\u62C6\u89E3\u3002":ze?ze.mission.brief:"100 \u751F\u547D\u503C \xB7 \u5229\u7528\u63A9\u9AD4\u5230\u5317\u9762\u67E5\u5E33\u62C6\u5F48\uFF0C\u6BCB\u9808\u6D88\u6EC5\u6240\u6709\u6575\u4EBA\u3002",ks(),Vt(),ti.focus()}function WA(){let n=[[-12,5],[12,0],[-11,-11],[11,-13],[3,-14],[-13,-1],[13,10]];for(let e of[-14,-9,-3,3,9])for(let t of[-14,-10,-5,0,5,10,14])!An(t,e,.55,Mt)&&Math.hypot(t,e-14)>8&&n.every(i=>Math.hypot(t-i[0],e-i[1])>2.5)&&n.push([t,e]);return n.filter(([e,t])=>!An(e,t,.55,Mt))}var Td;function Bn(){Td?.clear(),Pn=!1,mn=!1}function Rl(){return T.round===1&&!ze&&!Ft()&&!window.arcadeTest}function xa(){if(T.phase!=="playing"||bt||T.reload>0||T.cooldown>0)return;let n=ot[T.weapon],e=T.weapon==="knife";if(!e&&T.ammo<=0){T.feedback=T.reserves[T.weapon]?"\u5F48\u5323\u5DF2\u7A7A\uFF0CR \u63DB\u5F48\u3002":"\u5099\u5F48\u7528\u76E1\uFF0C\u8ACB\u5207\u63DB\u6B66\u5668\u3002",gn(100,.04,.025);return}if(e?T.melee++:(T.ammo--,T.shots++),T.cooldown=n.cooldown,T.weaponReady[T.weapon]=n.cooldown,xd=tn+(e?.1:1),fn.visible=!e,fn.userData.life=e?0:.065,gn(e?500:T.weapon==="sniper"?85:180,e?.14:.09,e?.045:.11,e?"triangle":"sawtooth"),Dt.position.set(T.x,T.y,T.z),Dt.rotation.set(Bs+vi,Cn,0,"YXZ"),Et.updateMatrixWorld(!0),ca.setFromCamera(new ae,Dt),T.weapon==="bazooka"){let r={x:T.x,y:T.y,z:T.z};xi.push(Jl("solo",r,ca.ray.direction,tn));return}let t=[...yd,...El.filter(r=>!r.d.open).map(r=>r.mesh),...nn.filter(r=>r.hp>0).flatMap(r=>r.mesh.children.filter(o=>o.userData.enemy))],i=ca.intersectObjects(t,!1).find(r=>r.distance<=n.range),s=i?i.point:ca.ray.at(n.range,new I);if(!e){let r=new Bo(new vt().setFromPoints([Dt.localToWorld(new I(.3,-.3,-.7)),s]),new pr({color:"#ffe1a0",transparent:!0,opacity:.8}));Et.add(r),Ir.push({mesh:r,life:.1})}if(i?.object.userData.enemy){let r=i.object.userData.enemy,o=Yl(T,r,!!i.object.userData.head);o&&(r.chassisMaterial.emissive.setHex(10376224),e||T.hits++,Fs=.13,Cr=o.head?1.1:Cr,gn(o.head?880:440,.08,.065,"triangle"),r.bar.scale.x=r.hp/r.maxHp,r.bar.position.x=-(1-r.hp/r.maxHp)*.54,o.killed&&(pn||window.gameAudio?.effect("kill",crypto.randomUUID()),r.dying=.001,T.feedback=(o.head?"\u7206\u982D\uFF01":"\u76EE\u6A19\u505C\u6A5F\u3002")+" +100 \u91D1\u5E63"))}T.weapon==="sniper"&&(mn=!1,T.feedback="\u9000\u93E1\u62C9\u6813\u4E2D \xB7 "+n.cooldown.toFixed(1)+"s"),T.weapon==="carbine"&&(vi=Math.min(.22,vi+.0231),Cn+=(Math.random()-.5)*.0098)}function Rd(){T.phase!=="playing"||bt||!Gl(T)||(T.feedback="\u63DB\u5F48\u4E2D\u2026",pn||window.gameAudio?.effect("reload",crypto.randomUUID()),gn(300,.13,.04))}function Cd(){for(let n of["music","effects"])window.gameAudio?.volume(n,Lt.volume);pn?window.gameAudio?.pause():window.gameAudio?.resume()}function Pd(){Cd(),Fn=Lt.reduced,Tr?.gain.setTargetAtTime(Lt.volume,tt.currentTime,.04);try{localStorage.setItem("fps-preferences-v2",JSON.stringify(Lt))}catch{T.feedback="\u8A2D\u5B9A\u9069\u7528\u65BC\u4ECA\u6B21\u904A\u73A9\u3002"}}function XA(){Hi(),Bn();for(let n of["sensitivity","ads","volume"])Re("setting-"+n).value=Lt[n],Re(""+n+"-output").textContent=n==="volume"?Math.round(Lt[n]*100)+"%":Lt[n].toFixed(2)+"\xD7";Re("setting-invert").checked=Lt.invert,Re("setting-reduced").checked=Fn,Re("settings-dialog").showModal()}function qA(){Re("view-status").textContent="",T.phase="playing",Mi=performance.now(),ks(),ga=tt?.currentTime||0,Vt(),ti.focus()}function Id(){T.phase!=="paused"||Dr||Re("settings-dialog").open||qA()}async function Dd(){Re("view-status").textContent="",T.phase==="playing"&&Hi(),Bn();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),Lr()}catch{Re("view-status").textContent="\u700F\u89BD\u5668\u672A\u80FD\u5207\u63DB\u5168\u87A2\u5E55\u3002\u6309 V \u91CD\u8A66\uFF0C\u6216\u4EE5\u8996\u7A97\u6A21\u5F0F\u7E7C\u7E8C\u3002"}}function YA(n){let e=new At(new Es(.1,6,6),new Gt({color:"#ff8e56"}));e.position.set(n.x,1.4,n.z),Et.add(e);let t=T.x-n.x,i=T.z-n.z,s=(T.crouch?.55:1.05)+T.jumpY-1.4,r=Math.hypot(t,i,s)||1;Os.push({mesh:e,x:n.x,y:1.4,z:n.z,vx:t/r*11,vy:s/r*11,vz:i/r*11,life:4}),gn(110,.06,.018,"triangle"),n.ammo--,n.burst--;let o=Rl()?.7:1;n.burstClock=.15/o,n.burst===0&&(n.shoot=(2.9-T.round*.2)/o),n.ammo===0&&(n.reload=2.2,n.burst=0)}function Hi(){T.phase==="playing"&&(T.phase="paused",window.gameAudio?.pause(),Pn=_n=!1,ut.clear(),Bn(),tt?.suspend().catch(()=>{}),Vt())}function Ld(){if(T.phase!=="playing"||ze&&T.verified)return;if(!Ls(T,On().point,3)){T.feedback="\u5148\u5230\u5317\u9762\u8CA1\u52D9\u70B8\u5F48\u65C1\u908A\uFF0C\u64B3 F \u67E5\u5E33\u3002";return}T.checked=!0,bt=!0,ut.clear(),tt?.suspend().catch(()=>{}),Bn();let n=wl();Re("terminal").innerHTML="<h2>\u5148\u67E5\u5E33\uFF0C\u5F8C\u62C6\u89E3</h2><p>\u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\u88DD\u7F6E\u3002</p><p>"+n.q+"</p>"+n.answers.map((e,t)=>'<button data-answer="'+t+'">'+e+"</button>").join("")+'<p id="terminal-feedback" role="status"></p><button id="terminal-back">\u8FD4\u56DE\u6230\u5834</button>',Re("terminal").hidden=!1,Pn=!1,_n=!1}function Nd(){try{let n=JSON.parse(localStorage.getItem(vd));return n&&n.version===1&&n.completed?n:{version:1,completed:{}}}catch{return{version:1,completed:{}}}}function yl(n,e=!1){let t=cd(n);t&&(Aa(),pa=!1,ze={...t,training:e},T=Wi(),T.round=t.mission.round,T.credits=400,T.phase="buy",Vt())}function QA(){if(T.phase="roundend",T.defuse=On().seconds,window.dispatchEvent(new Event("arcade-game-state")),Pn=_n=!1,Bn(),tt?.suspend().catch(()=>{}),ze&&!ze.training&&!window.arcadeTest&&!Ft())try{let n=Nd(),e=Math.round(tn*1e3),t=n.completed[ze.mission.id];n.completed[ze.mission.id]=Number.isFinite(t)?Math.min(e,t):e,localStorage.setItem(vd,JSON.stringify(n))}catch{}Vt()}function JA(n){if(!xi.length&&!Gi)return;let e=[...ii,...Mt.filter(i=>!i.open)],t=[];for(let i of xi){let s=Zl(i,n,e,nn);if(!s)continue;t.push(s),s.direct!==null&&T.hits++;for(let o of nn){if(!o.hp)continue;let a=Ca(s,o,e);a&&(o.hp=Math.max(0,o.hp-a),o.bar.scale.x=o.hp/o.maxHp,o.bar.position.x=-(1-o.bar.scale.x)*.54,Fs=.13,!o.hp&&!o.rewarded&&(o.rewarded=!0,o.dying=.001,T.kills++,T.totalKills++,T.credits+=100,T.earned+=100,pn||window.gameAudio?.effect("kill",crypto.randomUUID())))}let r=Ca(s,T,e,!0);r&&Ea(T,r)}xi=xi.filter(i=>i.active),Gi??=ea(Et,{reducedMotion:Fn,onImpact:()=>gn(80,.18,.1,"triangle")}),Gi.update(xi,t,n)}function ZA(n){if(T.phase==="dying"){Er+=n,Dt.rotation.z=Fn?0:Math.min(.65,Er*.5),Dt.position.y=Math.max(.4,T.y-Er*.7),Er>=1.3&&(T.phase="dead",Vt());return}if(T.phase!=="playing"||bt||(tn+=n,JA(n),T.phase!=="playing"))return;if(T.time=Math.max(0,T.time-n),!T.time){T.feedback="\u8CA1\u52D9\u70B8\u5F48\u5012\u6578\u5B8C\u3002\u91CD\u8A66\uFF0C\u5148\u5B89\u6392\u8DEF\u7DDA\u540C\u5668\u6750\u3002",T.phase="dead",Bn(),Vt();return}for(let t in T.weaponReady)T.weaponReady[t]=Math.max(0,T.weaponReady[t]-n);if(T.cooldown=Math.max(0,T.cooldown-n),vi=Math.max(0,vi-n*.14),Cr=Math.max(0,Cr-n),Hl(T,n),!bt){Cn+=(Number(ut.has("ArrowLeft"))-Number(ut.has("ArrowRight")))*n*1.9;let t=(ut.has("KeyW")||ut.has("forward")?1:0)-(ut.has("KeyS")||ut.has("back")?1:0),i=(ut.has("KeyD")||ut.has("right")?1:0)-(ut.has("KeyA")||ut.has("left")?1:0),s=Math.hypot(t,i)||1,r=T.crouch?2:ut.has("ShiftLeft")?6:T.weapon==="knife"?5:4.1;Or(T,(-Math.sin(Cn)*t+Math.cos(Cn)*i)/s*r*n,(-Math.cos(Cn)*t-Math.sin(Cn)*i)/s*r*n,Mt),T.crouch=Pr||ut.has("KeyC")||ut.has("ControlLeft"),(T.jumpY>0||T.vy)&&(T.vy-=12*n,T.jumpY=Math.max(0,T.jumpY+T.vy*n),T.jumpY||(T.vy=0)),T.y=(T.crouch?.93:1.65)+T.jumpY,(Pn||ut.has("KeyX"))&&xa()}for(let t of nn){if(t.hp<=0){t.dying+=n,t.mesh.rotation.z=Math.min(Math.PI/2,t.dying*2),t.mesh.position.y=-Math.min(.5,t.dying*.4),t.mesh.scale.setScalar(Math.max(.01,1-Math.max(0,t.dying-.8)));continue}t.navTime-=n;let i=Math.hypot(t.x-T.x,t.z-T.z),s=i<16&&!Xs(t.x,t.z,T.x,T.z,Mt,T.crouch?.8:1.4);(s||tn<xd&&i<18)&&(t.alertUntil=tn+8);let r=t.alertUntil>tn,o;if(r){let d=tn*.55+t.id*1.7;o=i>9?{x:T.x,z:T.z}:{x:T.x+Math.sin(d)*5,z:T.z+Math.cos(d)*5},An(o.x,o.z,.55,Mt)&&(o={x:T.x,z:T.z})}else{let d=Ad,p=d[t.patrol%d.length];o={x:p[0],z:p[1]},Math.hypot(t.x-o.x,t.z-o.z)<1.2&&(t.patrol=(t.patrol+3)%d.length)}t.navTime<=0&&(t.nav=Br(t.x,t.z,o.x,o.z,Mt.map(d=>({...d,open:!0}))),t.navTime=.7);let a=t.x,c=t.z,l=t.nav[0];if(l){for(let _ of Mt)!_.open&&Math.hypot(_.x-t.x,_.z-t.z)<1.6&&(_.open=!0);let d=l.x-t.x,p=l.z-t.z,g=Math.hypot(d,p);if(g<.3)t.nav.shift();else{let _=Math.min(g,(1.9+T.round*.25)*n);An(t.x+d/g*_,t.z,.5,Mt)||(t.x+=d/g*_),An(t.x,t.z+p/g*_,.5,Mt)||(t.z+=p/g*_)}}t.mesh.position.set(t.x,0,t.z),t.mesh.rotation.y=Math.atan2(o.x-t.x,o.z-t.z);let h=Math.hypot(t.x-a,t.z-c);t.motion+=(Math.min(1,h/Math.max(n,.001)/1.5)-t.motion)*Math.min(1,n*13);let u=Fn?0:t.motion*.49;for(let[d,p]of t.parts.entries()){let g=Math.sin(tn*9+d*Math.PI)*u;p.rotation.x=g,t.arms[d].rotation.x=-g*.6-(r?.16:0)}t.visor.material.color.setHex(t.reload>0?16757085:r?16356209:16768397),t.shoot-=n,t.burstClock-=n,t.reload>0?(t.reload=Math.max(0,t.reload-n),t.reload||(t.ammo=9,t.shoot=.4)):r&&s&&!ze?.training?(t.shoot<=0&&t.burst===0&&(t.burst=Math.min(3,t.ammo)),t.burst>0&&t.burstClock<=0&&YA(t)):t.burst=0}ni.length&&ud(ni,zs,T,On().point,nn,Mt,n,tn,(t,i)=>{i.hp=Math.max(0,i.hp-14),i.bar.scale.x=i.hp/i.maxHp,i.bar.position.x=-(1-i.bar.scale.x)*.54,i.hp||(i.dying=.01)}),Os=Os.filter(t=>{t.x+=t.vx*n,t.z+=t.vz*n,t.y=(t.y??1.4)+(t.vy||0)*n,t.life-=n,t.mesh.position.set(t.x,t.y,t.z);let i=t.life<=0||[...ii,...Mt.filter(r=>!r.open)].some(r=>Math.abs(t.x-r.x)<r.w/2+.1&&Math.abs(t.z-r.z)<r.d/2+.1&&t.y<r.h),s=(T.crouch?1.02:1.82)+T.jumpY;if(!i&&Math.hypot(t.x-T.x,t.z-T.z)<.45&&t.y>T.jumpY&&t.y<s){let r=T.defuse;Ea(T,Ft()?3:Rl()?6:6+T.round*2),Ft()&&T.hp>0&&(T.defuse=r),Rr=.5,gn(85,.16,.09,"sawtooth"),i=!0,T.feedback=T.hp?"\u4E2D\u5F48\uFF01\u9918\u4E0B "+T.hp+" \u751F\u547D\u503C\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002",T.hp||(Bn(),Pn=!1,tt?.suspend().catch(()=>{}),Vt())}return i&&yi(t.mesh),!i});let e=ld(ze,T,_n&&!bt,n);e==="relay"&&(T.feedback="\u5317\u9762\u8A18\u9304\u6E96\u5099\u597D\u3002\u53BB"+On().point.name+"\uFF0C\u6309\u4F4F E \u4EA4\u63A5\u3002",_n=!1),e==="complete"&&QA(),OA()}function KA(){let n=Nd().completed;return'<section class="panel mission-panel"><h1>\u4EFB\u52D9\u9078\u64C7</h1><p>\u4E09\u5F35\u5730\u5716\u5404\u6709\u4E09\u500B\u4EFB\u52D9\u3002\u6BCF\u5C40\u6709\u7368\u7ACB\u5605 400 \u88DD\u5099\u9EDE\u3002</p><div class="mission-grid">'+[1,2,3].map(e=>{let t=gl.filter(i=>i.round===e);return"<section><h2>"+t[0].map+"</h2>"+t.map(i=>'<button data-mission="'+i.id+'"><b>'+i.title+"</b><span>"+i.brief+"</span>"+(Number.isFinite(n[i.id])?"<small>\u6700\u4F73 "+(n[i.id]/1e3).toFixed(1)+" \u79D2</small>":"")+"</button>").join("")+"</section>"}).join("")+'</div><button data-action="main-menu">\u8FD4\u56DE</button></section>'}function Vt(){Hs(),document.body.dataset.phase=T.phase,Gs.hidden=!(T.phase==="playing"&&ni.length),ua.value=zs;let n=Re("menu");if(n.innerHTML="",T.phase==="menu")n.innerHTML='<section class="panel"><small>FIRST PERSON \xB7 \u539F\u5275\u6A5F\u68B0\u4EBA\u8A13\u7DF4</small><h1>\u9810\u7B97\u9632\u885B\u6230<br>\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002</h1><p>\u907F\u958B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\uFF0C\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u5E33\u76EE\uFF0C\u518D\u62C6\u89E3\u70B8\u5F48\u3002</p><div class="control-guide"><span><b>\u79FB\u52D5</b> WASD\uFF0F\u756B\u9762\u65B9\u5411\u63A3</span><span><b>\u7784\u6E96</b> \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u62D6\u52D5</span><span><b>\u5C04\u64CA</b> \u5DE6\u9375\u6216\u6309\u4F4F X \xB7 Q \u7784\u6E96</span><span><b>\u4E92\u52D5</b> F \u67E5\u5E33 \xB7 E \u62C6\u89E3</span></div><details><summary>\u64CD\u4F5C\u8AAA\u660E</summary><p>WASD \u79FB\u52D5 \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\u8F49\u5411 \xB7 Esc \u66AB\u505C \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 Q \u7784\u6E96 \xB7 \u7A7A\u767D\u8DF3\u8E8D \xB7 C \u8E72\u4E0B \xB7 1\u20135 \u63DB\u6B66\u5668 \xB7 R \u63DB\u5F48 \xB7 F \u67E5\u5E33 \xB7 E \u958B\u9580\uFF0F\u62C6\u89E3 \xB7 P\uFF0FEsc \u66AB\u505C \xB7 V \u5168\u87A2\u5E55\u3002</p><p>\u89F8\u63A7\u677F\uFF1A\u53EF\u7528\u65B9\u5411\u9375\u8F49\u5411\u3001X \u5C04\u64CA\u3001Q \u7784\u6E96\u3002\u624B\u6A5F\uFF1A\u5DE6\u4E0B\u65B9\u5411\u63A3\u79FB\u52D5\u3001\u53F3\u908A\u62D6\u52D5\u7784\u6E96\u3001\u53F3\u4E0B\u5C04\u64CA\u3002</p></details><div class="settings"><label><input id="reduce" type="checkbox" '+(Fn?"checked":"")+'> \u6E1B\u5C11\u93E1\u982D\u52D5\u614B</label></div><div class="actions"><button data-action="begin">'+(Ft()?"\u958B\u59CB\u6838\u5C0D\u8CB8\u6B3E":"\u5FEB\u901F\u4E09\u8F2A")+"</button>"+(Ft()?"":'<button data-action="missions">\u4EFB\u52D9\u9078\u64C7</button><button data-action="training">3D \u7DF4\u7FD2\u5834</button><button data-action="coop">\u5169\u4EBA\u5408\u4F5C</button><a href="range.html">\u7121\u969C\u7919\u4E0D\u9650\u6642\u6587\u5B57\uFF0F\u6A19\u9776\u7248 \u2197</a>')+"</div></section>";else if(T.phase==="missions")n.innerHTML=KA();else if(T.phase==="buy")n.innerHTML='<section class="panel"><small>ROUND '+T.round+" / 3 \xB7 BUY PHASE</small><h1>"+(ze?.training?"3D \u7DF4\u7FD2\u5834":ze?ze.mission.map+" \xB7 "+ze.mission.title:"\u5148\u7559\u4E0B\u4E00\u8F2A\u5605\u8CC7\u6E90\u3002")+"</h1><p>\u9918\u4E0B <b>"+T.credits+" \u91D1\u5E63</b>\u3002\u624B\u69CD\u8207\u5315\u9996\u514D\u8CBB\u3002\u6BCF\u8F2A\u6709 100 \u751F\u547D\u503C\uFF0C\u8ACB\u5229\u7528\u63A9\u9AD4\uFF1B\u5668\u6750\u53EA\u9650\u4ECA\u8F2A\u3002</p>"+(Ft()?"<p>\u5DF2\u63D0\u4F9B\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177\u3002\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u963F\u4FCA\u5605\u8CB8\u6B3E\u8CC7\u6599\u3002</p>":ze?"<p>"+ze.mission.brief+"</p>":"")+'<div class="gear">'+Object.entries(Fr).map(([e,t])=>"<div><b>"+t.label+"</b><small>"+{bazooka:Ws(),carbine:"24 \u767C\uFF0C\u5C04\u901F\u8F03\u5FEB",sniper:"5 \u767C\uFF0C\u55AE\u767C\u9AD8\u5A01\u529B\uFF0C\u53EF\u958B\u93E1",kit:"\u62C6\u89E3\u7531 5 \u79D2\u6E1B\u81F3 3 \u79D2"}[e]+"</small><strong>"+t.cost+' \u91D1\u5E63</strong><button data-buy="'+e+'" '+(T.purchases.includes(e)||T.credits<t.cost?"disabled":"")+">"+(T.purchases.includes(e)?"\u5DF2\u8CFC\u8CB7":"\u8CFC\u8CB7")+"</button></div>").join("")+'</div><div class="actions"><button data-action="start">\u9032\u5165\u6230\u5834</button>'+(ze?'<button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button>':"")+"</div></section>";else if(T.phase==="paused")n.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u66AB\u505C</h1><p>\u6309\u4F4F\u53F3\u9375\u62D6\u52D5\u8F49\u5411\uFF0C\u653E\u958B\u5373\u505C\u3002Esc \u66AB\u505C\u3002V \u5207\u63DB\u5168\u87A2\u5E55\u3002</p><p>\u79FB\u52D5\u3001AI\u3001\u5B50\u5F48\u3001\u63DB\u5F48\u540C\u5012\u6578\u5DF2\u505C\u3002'+Math.ceil(T.time)+" \u79D2 \xB7 "+T.ammo+' \u767C\u3002</p><div class="actions"><button data-action="resume">\u7E7C\u7E8C\u4EFB\u52D9</button><button data-action="retry">'+(ze?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+"</button></div></section>";else if(T.phase==="roundend"&&Ft())n.innerHTML='<section class="panel"><h1>\u6838\u5C0D\u5B8C\u6210</h1><p>'+wl().why+'</p><button data-action="exit">\u8FD4\u56DE\u8ABF\u67E5</button></section>';else if(T.phase==="roundend"&&ze)n.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u5B8C\u6210</h1><p>'+ze.mission.map+" \xB7 "+ze.mission.title+" \xB7 "+tn.toFixed(1)+" \u79D2</p><p>"+si[T.round-1].why+'</p><div class="actions"><button data-action="retry">\u518D\u8A66\u4E00\u6B21</button><button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button></div></section>';else if(T.phase==="roundend")n.innerHTML='<section class="panel"><small>FINANCIAL BOMB DEFUSED</small><h1>\u7B2C '+T.round+" \u8F2A\uFF1A\u62C6\u89E3\u5B8C\u6210\u3002</h1><p>"+si[T.round-1].why+"</p><p>\u5236\u6B62 "+T.kills+" \u500B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\u3002\u5668\u6750\u5269\u9918 "+T.credits+' \u91D1\u5E63\uFF0C\u7559\u7540\u4E0B\u4E00\u8F2A\u3002</p><button data-action="next">'+(T.round===3?"\u67E5\u770B\u4EFB\u52D9\u7E3D\u7D50":"\u4E0B\u4E00\u8F2A")+"</button></section>";else if(T.phase==="results"){let e=Ta(T);if(!pa&&!Ft()&&!window.arcadeTest){pa=!0;try{let t=JSON.parse(localStorage.getItem("website-v1-arcade")||"{}"),i=JSON.parse(localStorage.getItem("website-v1-records")||"{}");t.defence={score:e.judgement+e.reserve,completed:!0},i.defence={best:Math.max(i.defence?.best||0,e.judgement+e.reserve),plays:(i.defence?.plays||0)+1},localStorage.setItem("website-v1-arcade",JSON.stringify(t)),localStorage.setItem("website-v1-records",JSON.stringify(i))}catch{}}n.innerHTML='<section class="panel"><small>MISSION COMPLETE</small><h1>\u4FDD\u4F4F\u9700\u8981\uFF0C\u7559\u4F4E\u672A\u4F86\u3002</h1><div class="score-row"><p>\u91D1\u878D\u5224\u65B7<br><b>'+e.judgement+"\uFF0F80</b></p><p>\u8CC7\u6E90\u4FDD\u7559<br><b>"+e.reserve+"\uFF0F20</b></p><p>\u5C04\u64CA\u6E96\u78BA\u7387\uFF08\u53E6\u8A08\uFF09<br><b>"+e.accuracy+"%</b></p></div><p>\u5236\u6B62 "+T.totalKills+' \u500B\u6A5F\u68B0\u4EBA\uFF0C\u62C6\u89E3\u4E09\u679A\u865B\u69CB\u8CA1\u52D9\u70B8\u5F48\u3002\u91D1\u878D\u5224\u65B7\u53EA\u8A08\u7D42\u7AEF\u9996\u6B21\u6838\u5C0D\uFF0C\u5C04\u64CA\u6E96\u78BA\u7387\u5514\u52A0\u5165\u91D1\u878D\u5206\u6578\u3002\u5148\u4FDD\u57FA\u672C\u751F\u6D3B\u3001\u67E5\u6E05\u7E3D\u984D\u540C\u6536\u5165\u65E5\u671F\uFF0C\u518D\u70BA\u672A\u4F86\u76EE\u6A19\u9810\u7559\u8CC7\u6E90\u3002\u4E03\u65E5\u5F8C\u518D\u6AA2\u8996\u5B89\u6392\u3002</p><div class="actions"><button data-action="retry">\u518D\u73A9\u4E00\u6B21</button><button data-action="exit">\u8FD4\u56DE\u904A\u6232\u9078\u55AE</button></div></section>'}else T.phase==="dead"&&(n.innerHTML='<section class="panel"><small>RETRY / \u518D\u5B89\u6392\u8DEF\u7DDA</small><h1>'+(T.hp?"\u4ECA\u6B21\u672A\u80FD\u8D95\u53CA\u62C6\u89E3\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002\u518D\u5B89\u6392\u4F0F\u64CA\u8DEF\u7DDA\u3002")+'</h1><p>\u7528\u63A9\u9AD4\u963B\u64CB\u706B\u529B\uFF0C\u907F\u958B\u6216\u53CD\u64CA\u6A5F\u68B0\u4EBA\uFF0C\u518D\u5230\u5317\u9762\u7D42\u7AEF\u67E5\u5E33\u3002\u6210\u7E3E\u5514\u6703\u6539\u52D5\u963F\u4FCA\u5605\u6545\u4E8B\u3002</p><div class="actions"><button data-action="retry">'+(ze?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+'</button><button data-action="exit">\u9000\u51FA</button></div></section>');["playing","dying"].includes(T.phase)&&(n.innerHTML="")}var Tn=(n,e)=>{let t=Re(n);window.siteLocale?window.siteLocale.write(t,e):t.textContent!==e&&(t.textContent=e)},Un=(n,e,t)=>{n[e]!==t&&(n[e]=t)},fa=(n,e,t)=>{n.getAttribute(e)!==t&&n.setAttribute(e,t)};function Ud(){let n=Re("hud");document.documentElement.style.setProperty("--hud-bottom",n.offsetTop+n.offsetHeight+"px")}function $A(){let n=On(),e=T.phase==="playing"&&!bt,t=e&&Ls(T,n.point),i=ze?Mt.find(a=>Ls(T,a)):wa(T,Mt),s=e&&!t&&(ze?!!i:i?.type==="door");Un(Re("interaction-hint"),"hidden",!s),s&&Tn("interaction-hint",i.open?"[ E ] \u95DC\u9580":"[ E ] \u958B\u9580");let r=nn.reduce((a,c)=>a+ +(c.hp>0),0);Tn("round",ze?wr.name:T.round+"/3"),Tn("health",T.hp+" / 100"),Un(Re("health-bar"),"value",T.hp),fa(Re("health-wrap"),"data-low",String(T.hp<=25)),Tn("ammo",T.weapon==="knife"?"\u5315\u9996 \xB7 \u8FD1\u6230":ot[T.weapon].label+" \xB7 \u5F48\u5323 "+T.ammo+" / \u5099\u5F48 "+T.reserves[T.weapon]+(T.reload?" \xB7 \u63DB\u5F48 "+T.reload.toFixed(1)+"s":"")+(T.weapon==="sniper"&&T.cooldown>0?" \xB7 \u62C9\u6813 "+T.cooldown.toFixed(1)+"s":"")),Tn("timer",Math.ceil(T.time)+"s"),Tn("money",T.credits+" \u91D1\u5E63");let o={check:"F \u67E5\u5E33",defuse:"\u6309\u4F4F E \u62C6\u89E3",prepare:"\u6309\u4F4F E \u6574\u7406",handoff:"\u6309\u4F4F E \u4EA4\u63A5",upload:"\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3"}[n.kind];Tn("objective",n.point.name+" \xB7 "+o+" \xB7 "+r+" \u500B\u6A5F\u68B0\u4EBA\u6D3B\u52D5\u4E2D"),Tn("notice",T.feedback),Un(Re("defuse"),"hidden",!t),t&&(Tn("defuse-label",T.defuse>0?o+" \xB7 "+T.defuse.toFixed(1)+" / "+n.seconds+" \u79D2":o),Un(Re("defuse-progress"),"max",n.seconds),Un(Re("defuse-progress"),"value",T.defuse)),fa(Re("crouch"),"aria-pressed",String(T.crouch));for(let a of FA)Un(a,"disabled",!T.owned.includes(a.dataset.weapon)),fa(a,"aria-pressed",String(T.weapon===a.dataset.weapon))}function Fd(){return T.phase==="dying"||T.phase==="playing"&&!bt}function Od(){!ma&&!_a&&!Dr&&!document.hidden&&(Us||Fd())&&(ma=requestAnimationFrame(jA))}function Hs(){Us=!0,Od()}var ha=0,vl=1e3/60;function jA(n){if(ma=0,_a||Dr||document.hidden)return;let e=Mi?Math.max(0,(n-Mi)/1e3):0;if(Mi=n,Fd()){let o=Math.min(e,.15),a=Math.max(1,Math.ceil(o/.03));for(let l=0;l<a;l++)ZA(o/a);e>.15&&T.phase==="playing"&&(T.time=Math.max(0,T.time-(e-.15)));let c=Math.exp(-e*13);for(let l of nn)l.chassisMaterial?.emissive.multiplyScalar(c);Rr=Math.max(0,Rr-e),Fs=Math.max(0,Fs-e),Ir=Ir.filter(l=>(l.life-=e,l.life>0?!0:(yi(l.mesh),!1))),fn.userData.life>0&&(fn.userData.life-=e),fn.visible=fn.userData.life>0,dn.position.z=-.65+(!Fn&&fn.visible?.05:0),dn.rotation.x=T.reload?-Math.sin(T.reload/ot[T.weapon].reload*Math.PI)*.7:T.weapon==="knife"&&T.cooldown>0?-Math.sin(T.cooldown/.6*Math.PI)*1.4:0,dn.position.y=-.32+(Fn?0:Math.sin(tn*9)*.007)}(Us||n>=fd)&&($A(),fd=n+80),fa(document.body,"data-terminal",String(bt)),Un(Re("scope-view"),"hidden",!(mn&&T.weapon==="sniper")),Un(Re("hitmarker"),"hidden",Fs<=0),Un(Re("headshot"),"hidden",Cr<=0),Un(Re("damage").style,"opacity",Fn?"0":String(Math.min(.65,Rr))),T.phase!=="dying"&&(Dt.position.set(T.x,T.y,T.z),Dt.rotation.set(Bs+vi,Cn,0,"YXZ"));for(let o of nn)o.meter.visible=o.hp>0,o.meter.visible&&(o.meter.rotation.y=Math.atan2(T.x-o.x,T.z-o.z)-o.mesh.rotation.y);let t=1-Math.pow(.8,e*60);for(let o of El)o.group.position.y+=((o.d.open?o.d.h+2:o.d.h/2)-o.group.position.y)*t,o.status.material.color.setHex(o.d.open?8767136:15117669);let i=On().point;Rn.station.position.set(i.x,0,i.z);let s=T.verified?8443050:T.time<10?15960688:15578723;Rn.strip.material.color.setHex(s),Rn.lamp.material.color.setHex(s),Rn.stationSign.visible=!T.verified,Rn.verifiedSign.visible=T.verified;let r=mn?T.weapon==="sniper"?28:57:76;Dt.fov!==r&&(Dt.fov=r,Dt.updateProjectionMatrix()),dn.visible=!(mn&&T.weapon==="sniper"),(Us||n>=ha-1)&&(Kt.render(Et,Dt),ha=ha<n-vl||Us?n+vl:ha+vl),Us=!1,Od()}var pd=0,md=0,gd=0;function Lr(){if(!Kt)return;let n=ti.clientWidth,e=ti.clientHeight;if(!n||!e)return;let t=Math.min(devicePixelRatio||1,1.35,Math.sqrt(15e5/(n*e)));n===pd&&e===md&&t===gd||(pd=n,md=e,gd=t,Kt.setPixelRatio(t),Kt.setSize(n,e,!1),Kt.shadowMap.enabled=n>=900&&matchMedia("(pointer:fine)").matches,Dt.aspect=n/e,Dt.updateProjectionMatrix(),Hs())}function Bd(){_a||(_a=!0,bl?.disconnect(),Sl?.disconnect(),xi=[],Gi?.dispose(),Gi=null,cancelAnimationFrame(ma),_d.abort(),ut.clear(),tt?.close().catch(()=>{}),Et?.traverse(n=>{n.geometry?.dispose(),(n.material?Array.isArray(n.material)?n.material:[n.material]:[]).forEach(t=>{t.map?.dispose(),t.dispose()})}),Kt?.dispose(),Kt?.forceContextLoss(),Bn())}function zd(){Bd(),parent!==window?(parent.postMessage({type:"budget-defence-exit"},location.origin),parent.postMessage({type:"website-v1-back"},location.origin)):location.href="../../#play"}try{BA()}catch(n){throw Re("menu").innerHTML='<section class="panel"><h1>3D \u756B\u9762\u672A\u80FD\u555F\u52D5</h1><p>\u53EF\u4EE5\u8F49\u7528\u76F8\u540C\u5B78\u7FD2\u5167\u5BB9\u5605\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002</p><a href="range.html">\u6253\u958B\u7121\u969C\u7919\u7248\u672C</a></section>',n}$e(document,"click",n=>{ks();let e=n.target.closest("[data-action]")?.dataset.action,t=n.target.closest("[data-buy]")?.dataset.buy,i=n.target.closest("[data-weapon]")?.dataset.weapon,s=n.target.closest("[data-answer]")?.dataset.answer;i&&bd(i),t&&Vl(T,t)&&(T.feedback="\u5DF2\u8CB7 "+Fr[t].label+"\uFF0C\u53EA\u6263\u4E00\u6B21\u3002",Vt()),e==="coop"&&T.phase==="menu"&&!window.arcadeTest&&!Ft()&&rd(()=>gn(80,.18,.1,"triangle")),e==="begin"&&(ze=null,T.phase="buy",Ft()&&(T.purchases=["kit"]),Vt()),e==="training"&&!Ft()&&yl("1-verify",!0),e==="missions"&&!Ft()&&(Aa(),ze=null,T=Wi(),T.phase="missions",Vt()),e==="main-menu"&&(ze=null,T=Wi(),Vt());let r=n.target.closest("[data-mission]")?.dataset.mission;if(r&&T.phase==="missions"&&yl(r),e==="start"&&GA(),e==="resume"&&Id(),e==="retry"&&(ze?yl(ze.mission.id,ze.training):(Aa(),pa=!1,T=Wi(),T.phase="buy",Ft()&&(T.purchases=["kit"]),Vt())),e==="next"){if(T.phase!=="roundend"||ze||Ft())return;T.round===3?T.phase="results":(T.round++,T.phase="buy",T.purchases=[]),Vt()}e==="exit"&&zd(),s!==void 0&&(ql(T,Number(s),wl())?(bt=!1,Re("terminal").hidden=!0,ze&&On().kind==="upload"&&(T.feedback="\u8CC7\u6599\u5DF2\u6838\u5BE6\u3002\u53BB"+On().point.name+"\uFF0C\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3\u3002"),ks(),ti.focus()):T.phase==="playing"&&T.checked&&!T.verified&&(bt=!1,Re("terminal").hidden=!0,T.phase="dead",T.time=0,T.feedback="\u6838\u5BE6\u932F\u8AA4\uFF0C\u88DD\u7F6E\u5DF2\u5F15\u7206\u3002",Bn(),Vt())),n.target.id==="terminal-back"&&(bt=!1,Re("terminal").hidden=!0,ti.focus()),(s!==void 0||n.target.id==="terminal-back")&&(Mi=0,Hs())});$e(Re("fullscreen"),"click",Dd);$e(Re("settings-open"),"click",XA);$e(document,"fullscreenchange",()=>{Re("fullscreen").textContent=document.fullscreenElement?"\u9000\u51FA\u5168\u87A2\u5E55 V":"\u5168\u87A2\u5E55 V",Re("fullscreen").setAttribute("aria-pressed",String(!!document.fullscreenElement)),Lr()});for(let n of["sensitivity","ads","volume"])$e(Re("setting-"+n),"input",e=>{Lt[n]=Number(e.target.value),Re(""+n+"-output").textContent=n==="volume"?Math.round(Lt[n]*100)+"%":Lt[n].toFixed(2)+"\xD7",Pd()});for(let n of["invert","reduced"])$e(Re("setting-"+n),"change",e=>{Lt[n]=e.target.checked,Pd()});$e(Re("pause"),"click",Hi);$e(Re("exit"),"click",zd);$e(Re("mute"),"click",()=>{pn=!pn,Cd(),Re("mute").textContent=pn?"\u266B \u8072\u97F3\uFF1A\u95DC":"\u266B \u8072\u97F3\uFF1A\u958B",pn?tt?.suspend().catch(()=>{}):ks()});$e(document,"change",n=>{n.target.id==="reduce"&&(Fn=n.target.checked)});$e(Re("reload"),"click",Rd);$e(Re("check"),"click",Ld);$e(Re("jump"),"click",Ed);$e(Re("crouch"),"click",()=>{T.phase==="playing"&&!bt&&(Pr=!Pr)});$e(Re("door"),"click",wd);$e(Re("scope"),"click",Sd);$e(document,"keydown",n=>{if(!(n.target instanceof Element&&n.target.matches("input,select,textarea"))&&!Re("settings-dialog").open){if(["KeyP","Escape"].includes(n.code)){n.repeat||(n.code==="KeyP"&&T.phase==="paused"?Id():Hi());return}if(n.code==="KeyV"&&!n.repeat){n.preventDefault(),Dd();return}T.phase!=="playing"||bt||(["KeyW","KeyA","KeyS","KeyD","Space","KeyE","KeyR","KeyF","KeyX","KeyQ","ArrowLeft","ArrowRight","ShiftLeft"].includes(n.code)&&n.preventDefault(),ut.add(n.code),n.code==="Space"&&!n.repeat&&Ed(),n.code==="KeyX"&&!n.repeat&&xa(),n.code==="KeyQ"&&!n.repeat&&Sd(),/^Digit[1-5]$/.test(n.code)&&bd(["pistol","carbine","sniper","knife","bazooka"][Number(n.code.slice(-1))-1]),n.code==="KeyR"&&!n.repeat&&Rd(),n.code==="KeyF"&&!n.repeat&&Ld(),n.code==="KeyE"&&!n.repeat&&((ze?T.verified&&Ls(T,On().point):wa(T,Mt)?.type==="defuse")?_n=!0:wd()||(_n=!0)))}});$e(document,"keyup",n=>{ut.delete(n.code),n.code==="KeyE"&&(_n=!1)});function ex(n,e){let t=dd(n,e,mn,Lt);Cn-=t.yaw,Bs=Math.max(-1.2,Math.min(1.2,Bs-t.pitch))}var Cl=Kt.domElement,tx=()=>T.phase==="playing"&&!bt&&!Re("settings-dialog").open;$e(Cl,"webglcontextlost",n=>{n.preventDefault(),Dr=!0,Bn(),ut.clear(),Hi(),Tn("view-status","3D \u756B\u9762\u66AB\u505C\u3002\u7B49\u5019\u700F\u89BD\u5668\u6062\u5FA9\uFF0C\u4EA6\u53EF\u4F7F\u7528\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002")});$e(Cl,"webglcontextrestored",()=>{Dr=!1,Mi=0,Tn("view-status","3D \u756B\u9762\u5DF2\u6062\u5FA9\u3002\u6309\u300C\u7E7C\u7E8C\u4EFB\u52D9\u300D\u8FD4\u56DE\u3002"),Hs()});Td=ta({on:$e,canvas:Cl,active:tx,look:ex,fire(n){Pn=n,n&&(ks(),xa())},clearInput(){ut.clear(),Pn=_n=mn=!1}});document.querySelectorAll("[data-hold]").forEach(n=>{let e=n.dataset.hold;$e(n,"pointerdown",t=>{T.phase!=="playing"||bt||(t.preventDefault(),n.setPointerCapture(t.pointerId),e==="fire"?(Pn=!0,xa()):e==="defuse"?_n=!0:ut.add(e))});for(let t of["pointerup","pointercancel","lostpointercapture"])$e(n,t,()=>{ut.delete(e),e==="fire"&&(Pn=!1),e==="defuse"&&(_n=!1)})});$e(document,"visibilitychange",()=>{document.hidden?(Hi(),Mi=0):Hs()});$e(window,"blur",()=>{Hi()});$e(window,"resize",Lr);$e(window,"pagehide",Bd);$e(window,"site-language-change",()=>{Et.traverse(n=>n.userData.localize?.()),Hs()});bl=new ResizeObserver(Ud);bl.observe(Re("hud"));Sl=new ResizeObserver(Lr);Sl.observe(ti);Ud();window.fpsSnapshot=()=>({...T,recoilPitch:vi,score:Ta(T),enemies:nn.map(n=>({x:n.x,z:n.z,hp:n.hp,maxHp:n.maxHp,ammo:n.ammo,reload:n.reload,burst:n.burst,dying:n.dying})),bullets:Os.length,terminalOpen:bt,squad:{order:zs,members:ni.map(({id:n,x:e,z:t})=>({id:n,x:e,z:t}))},audio:tt?.state||"not-started",walls:ii,doors:Mt.map(n=>({...n})),view:{yaw:Cn,pitch:Bs,scoped:mn,locked:!!document.pointerLockElement},settings:{...Lt},fullscreen:!!document.fullscreenElement,map:wr?.name,mission:ze?{id:ze.mission.id,stage:ze.stage,target:On()}:null,graphics:{court:document.body.dataset.court,calls:Kt?.info.render.calls||0,triangles:Kt?.info.render.triangles||0},posture:{crouch:T.crouch,jump:T.jumpY}});Vt();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
