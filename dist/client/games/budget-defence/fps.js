(()=>{var Yl=Object.freeze([4,5,6]),Xl=Object.freeze([Object.freeze({movement:1,projectile:1,health:1}),Object.freeze({movement:1.15,projectile:1.15,health:1.15}),Object.freeze({movement:1.25,projectile:1.25,health:1.3})]),af=Object.freeze({movement:1.4,projectile:1.4,health:1.38}),kr=n=>n===4?af:Xl[n-1]??Xl[0],Da=n=>n.ammo===0&&!n.reload&&et[n.weapon].reload>0&&n.reserves[n.weapon]>0,La=[{x:0,z:-18,w:36,d:1,h:5},{x:0,z:18,w:36,d:1,h:5},{x:-18,z:0,w:1,d:36,h:5},{x:18,z:0,w:1,d:36,h:5},{x:-7,z:-5,w:.65,d:14,h:3.8},{x:-7,z:7,w:.65,d:2,h:3.8},{x:-7,z:11,w:.65,d:2,h:3.8},{x:7,z:4,w:.65,d:12,h:3.8},{x:7,z:-14.25,w:.65,d:3.5,h:3.8},{x:7,z:-7.75,w:.65,d:3.5,h:3.8},{x:-3.75,z:-4,w:4.5,d:.65,h:3.8},{x:3.75,z:-4,w:4.5,d:.65,h:3.8},{x:-3,z:6,w:2.2,d:2,h:1.15},{x:3,z:6,w:2.2,d:2,h:1.15},{x:-12,z:7,w:2.5,d:2,h:1.2},{x:12,z:4,w:2,d:2,h:1.2},{x:-11,z:-8,w:2.3,d:2.3,h:1.2},{x:11,z:-10,w:2.3,d:2.3,h:1.2},{x:3,z:-11,w:2,d:2,h:1.2}],cf=()=>[{id:"west",x:-7,z:4,w:.65,d:3.8,h:3.5,open:!1},{id:"east",x:7,z:-4,w:.65,d:3.8,h:3.5,open:!1},{id:"vault",x:0,z:-4,w:2.9,d:.65,h:3.5,open:!1},{id:"west-shortcut",x:-7,z:9,w:.65,d:1.9,h:3.5,open:!1},{id:"east-shortcut",x:7,z:-11,w:.65,d:2.9,h:3.5,open:!1}],ql=La.slice(0,4),$e=(n,e,t,i,s=3.8)=>({x:n,z:e,w:t,d:i,h:s}),In=(n,e,t,i,s)=>({id:n,x:e,z:t,w:i,d:s,h:3.5,open:!1});function Yi(n=1){return n===1?{name:"\u820A\u57CE\u8857\u5340",walls:La.map(e=>({...e})),doors:cf()}:n===2?{name:"\u5009\u5EAB\u8FF4\u5ECA",walls:[...ql,$e(-14.4,4,5.2,.65),$e(-5,4,6,.65),$e(5,4,6,.65),$e(14.4,4,5.2,.65),$e(-6,-4,.65,10),$e(6,-4,.65,10),$e(-12.5,-9,9,.65),$e(0,-9,10,.65),$e(12.5,-9,9,.65),$e(-12,9,3,2,1.15),$e(12,8,3,2,1.15),$e(0,9,2.5,2,1.15),$e(-12,-3,2,3,1.2),$e(12,-3,2,3,1.2),$e(-3,-13,2,2,1.2),$e(8,-14,2,2,1.2)],doors:[In("west-store",-10,4,3.4,.65),In("main-store",0,4,3.8,.65),In("east-store",10,4,3.4,.65),In("west-vault",-6.5,-9,2.7,.65),In("east-vault",6.5,-9,2.7,.65)]}:{name:"\u82B1\u5712\u5821\u58D8",walls:[...ql,$e(-9,6,.65,14),$e(9,6,.65,14),$e(-9,-7,.65,6),$e(9,-7,.65,6),$e(0,-6,.65,10),$e(0,3,4,.65),$e(-6.5,3,3,.65),$e(6.5,3,3,.65),$e(-6,-12,7,.65),$e(6,-12,7,.65),$e(-3,10,2,2,1.1),$e(3,10,2,2,1.1),$e(-5,-5,2,2,1.1),$e(5,-6,2,2,1.1),$e(-13,7,2.5,3,1.2),$e(13,5,2.5,3,1.2)],doors:[In("left-court",-3.5,3,2.8,.65),In("right-court",3.5,3,2.8,.65),In("west-passage",-9,-2.5,.65,2.8),In("east-passage",9,-2.5,.65,2.8),In("temple-vault",0,-12,4.8,.65)]}}var si=La;function Ql(n=1){let e=Yi(n);return si=e.walls,e}var Jl=(n=1)=>Yi(n).doors,ri=[{q:"\u300C\u4FDD\u8B49\u56DE\u5831\uFF0C\u5148\u8F49\u8A02\u91D1\u3002\u300D\u800C\u57FA\u672C\u751F\u6D3B\u8CBB\u672A\u9810\u7559\u3002",answers:["\u62D2\u7D55\u8F49\u5E33\uFF0C\u5148\u4FDD\u57FA\u672C\u9700\u8981","\u5148\u7540\u8A02\u91D1\uFF0C\u4E4B\u5F8C\u518D\u8AD7\u751F\u6D3B\u8CBB"],right:0,why:"\u4FDD\u8B49\u56DE\u5831\u540C\u50AC\u4FC3\u8F49\u5E33\u4FC2\u8B66\u865F\u3002\u5148\u6838\u5BE6\u8CC7\u6599\u3001\u4FDD\u4F4F\u57FA\u672C\u9700\u8981\u3002"},{q:"\u4ECA\u65E5\u53EA\u6709 $50\uFF1B$600 \u4EBA\u5DE5\u4E09\u65E5\u5F8C\u5148\u5230\u3002",answers:["\u7576\u4F5C\u5DF2\u6709 $650\uFF0C\u4ECA\u65E5\u5C31\u82B1","\u53EA\u7528\u73FE\u6709\u73FE\u91D1\uFF0C\u78BA\u8A8D\u5230\u5E33\u65E5\u518D\u6392\u652F\u51FA"],right:1,why:"\u672A\u5230\u5E33\u6536\u5165\u5514\u4FC2\u4ECA\u65E5\u53EF\u7528\u73FE\u91D1\uFF1B\u5148\u5B89\u6392\u6BCF\u65E5\u9700\u8981\u540C\u7F3A\u53E3\u3002"},{q:"\u6E4A\u55AE\u514D\u904B $300\uFF1B\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\u9023\u904B\u8CBB $205\u3002",answers:["\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\uFF0C\u5BE6\u4ED8 $205","\u591A\u8CB7\u672A\u9700\u8981\u5605\u5622\uFF0C\u70BA\u5497\u514D\u904B\u4ED8 $300"],right:0,why:"\u6BD4\u8F03\u6700\u5F8C\u7E3D\u984D\u3002\u5514\u70BA\u5497\u514D\u904B\u800C\u591A\u82B1 $95\u3002"}],et={pistol:{label:"\u624B\u69CD",mag:12,reserve:60,damage:24,cooldown:.42,reload:1.4,range:50},carbine:{label:"\u6B65\u69CD",mag:24,reserve:96,damage:25,cooldown:.13,reload:1.8,range:55},sniper:{label:"\u72D9\u64CA\u69CD",mag:5,reserve:20,damage:85,cooldown:1.3,reload:2.3,range:75},bazooka:{label:"\u706B\u7BAD\u7B52",mag:1,reserve:5,damage:220,splash:160,blastRadius:4.5,selfCap:50,cooldown:1.5,reload:2.5,range:55},knife:{label:"\u5315\u9996",mag:0,reserve:0,damage:60,cooldown:.6,reload:0,range:2.2}};function Zl(n){return{magazines:Object.fromEntries(n.map(e=>[e,et[e].mag])),reserves:Object.fromEntries(n.map(e=>[e,et[e].reserve]))}}function lf(n,e){n.magazines[n.weapon]=n.ammo,n.weapon=e,n.reload=0,n.ammo=n.magazines[e]??et[e].mag,n.reserves[e]??=et[e].reserve,n.maxAmmo=et[e].mag}function Kl(n){let e=et[n.weapon];return n.reload||!e.reload||n.ammo>=e.mag||!n.reserves[n.weapon]?!1:(n.reload=e.reload,!0)}function $l(n,e){if(!n.reload||e<=0||(n.reload=Math.max(0,n.reload-e),n.reload))return;let t=Math.min(et[n.weapon].mag-n.ammo,n.reserves[n.weapon]);n.ammo+=t,n.reserves[n.weapon]-=t}var Ys=()=>`\u76F4\u64CA ${et.bazooka.damage} \xB7 \u7206\u98A8\u4E2D\u5FC3 ${et.bazooka.splash} \xB7 \u534A\u5F91 ${et.bazooka.blastRadius}m \xB7 \u5171 ${et.bazooka.mag+et.bazooka.reserve} \u767C\uFF0C\u81EA\u50B7\u4E0A\u9650 ${et.bazooka.selfCap}`,Hr={bazooka:{cost:350,label:"\u706B\u7BAD\u7B52"},carbine:{cost:220,label:"\u6B65\u69CD"},sniper:{cost:300,label:"\u72D9\u64CA\u69CD"},kit:{cost:80,label:"\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177"}};function wi(){return{phase:"menu",round:1,credits:0,earned:0,spent:0,headshots:0,weaponReady:{},purchases:[],hp:100,weapon:"pistol",owned:["pistol","knife"],...Zl(["pistol","knife"]),ammo:12,maxAmmo:12,reload:0,cooldown:0,time:95,defuse:0,verified:!1,checked:!1,decisionCorrect:0,attempts:0,kills:0,totalKills:0,shots:0,hits:0,melee:0,x:0,z:14,y:1.65,jumpY:0,vy:0,crouch:!1,feedback:"100 \u751F\u547D\u503C\u3002\u5229\u7528\u63A9\u9AD4\u3001\u5075\u5BDF\u8DEF\u7DDA\uFF0C\u518D\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002"}}function An(n,e,t=.34,i=[]){return[...si,...i.filter(s=>!s.open)].some(s=>Math.abs(n-s.x)<s.w/2+t&&Math.abs(e-s.z)<s.d/2+t)}function Gr(n,e,t,i=[]){An(n.x+e,n.z,.34,i)||(n.x+=e),An(n.x,n.z+t,.34,i)||(n.z+=t)}function Qs(n,e,t,i,s=[],r=1.4){let o=Math.hypot(t-n,i-e),a=[...si,...s.filter(c=>!c.open)].filter(c=>c.h>=r);for(let c=0;c<=o;c+=.16){let l=o?c/o:0,h=n+(t-n)*l,d=e+(i-e)*l;if(a.some(u=>Math.abs(h-u.x)<u.w/2&&Math.abs(d-u.z)<u.d/2))return!0}return!1}function Vr(n,e,t,i,s=[]){let r=[Math.round(n),Math.round(e)],o=[Math.round(t),Math.round(i)],a=[r],c=new Map([[r.join(),null]]),l=null;for(let d=0;d<a.length&&d<1500;d++){let u=a[d];if(Math.hypot(u[0]-o[0],u[1]-o[1])<1.5){l=u;break}for(let[f,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let _=[u[0]+f,u[1]+g],m=_.join();Math.abs(_[0])>16||Math.abs(_[1])>16||c.has(m)||An(_[0],_[1],.45,s)||(c.set(m,u),a.push(_))}}if(!l)return[];let h=[];for(;l&&l.join()!==r.join();)h.unshift({x:l[0],z:l[1]}),l=c.get(l.join());return h}function jl(n,e){let t=Hr[e];return n.phase!=="buy"||!t||n.purchases.includes(e)||n.credits<t.cost?!1:(n.credits-=t.cost,n.spent+=t.cost,n.purchases.push(e),!0)}function eh(n,e){return!["playing","buy"].includes(n.phase)||!n.owned.includes(e)||n.weapon===e?!1:(lf(n,e),n.cooldown=Math.max(.2,n.weaponReady?.[e]||0),!0)}function th(n){return n.phase!=="buy"?!1:(n.phase="playing",n.hp=100,n.owned=["pistol","knife",...n.purchases.filter(e=>et[e])],n.weapon=n.purchases.includes("sniper")?"sniper":n.purchases.includes("carbine")?"carbine":"pistol",Object.assign(n,Zl(n.owned)),n.maxAmmo=et[n.weapon].mag,n.ammo=n.maxAmmo,n.reload=0,n.cooldown=0,n.weaponReady={},n.time=105-n.round*10,n.defuse=0,n.verified=!1,n.checked=!1,n.attempts=0,n.kills=0,n.x=0,n.z=14,n.y=1.65,n.jumpY=0,n.vy=0,n.crouch=!1,!0)}function Na(n,e=8){return n.phase!=="playing"||!Number.isFinite(e)||e<=0?!1:(n.hp=Math.max(0,n.hp-e),n.defuse=0,n.hp||(n.phase="dying"),!0)}function Ua(n,e=[]){if(n.phase!=="playing")return null;if(Math.hypot(n.x,n.z+13)<2.7)return{type:n.verified?"defuse":"check",key:n.verified?"E":"F"};let t=e.filter(i=>Math.hypot(i.x-n.x,i.z-n.z)<2.7).sort((i,s)=>Math.hypot(i.x-n.x,i.z-n.z)-Math.hypot(s.x-n.x,s.z-n.z))[0];return t?{type:"door",id:t.id,key:"E",open:t.open}:null}function nh(n,e,t=ri[n.round-1]){return n.phase!=="playing"||!n.checked||n.verified?!1:(n.attempts++,e===t.right?(n.verified=!0,n.attempts===1&&n.decisionCorrect++,n.feedback=t.why,!0):(n.feedback="\u518D\u6838\u5C0D\u7E3D\u984D\u3001\u9700\u8981\u540C\u5230\u5E33\u65E5\u671F\u3002"+t.why,!1))}function Wr(n){return{judgement:Math.round(n.decisionCorrect/3*80),reserve:n.earned>0?Math.round(n.credits/n.earned*20):n.spent===0?20:0,accuracy:n.shots?Math.round(n.hits/n.shots*100):0}}function ih(n,e,t=!1){if(n.phase!=="playing"||!e||e.hp<=0)return null;let i=et[n.weapon],s=t&&n.weapon!=="knife";return e.hp=Math.max(0,n.weapon==="knife"?0:e.hp-i.damage*(s?3:1)),s&&n.headshots++,!e.hp&&!e.rewarded?(e.rewarded=!0,n.kills++,n.totalKills++,n.credits+=100,n.earned+=100,{head:s,killed:!0,coins:100}):{head:s,killed:!1,coins:0}}var Js=18,Xr=.12,sh=et.bazooka.range;function rh(n,e,t,i){let s=Math.hypot(t.x,t.y,t.z);return{id:crypto.randomUUID(),owner:n,position:{...e},previousPosition:{...e},velocity:{x:t.x*Js/s,y:t.y*Js/s,z:t.z*Js/s},spawnTime:i,travelled:0,active:!0,exploded:!1}}function Fa(n,e,t,i){let s=0,r=1;for(let[o,a,c]of[["x",t.x-t.w/2,t.x+t.w/2],["y",t.base||0,(t.base||0)+t.h],["z",t.z-t.d/2,t.z+t.d/2]]){let l=n[o],h=e[o];if(!h){if(l<a-i||l>c+i)return 1/0;continue}let d=(a-i-l)/h,u=(c+i-l)/h;if(s=Math.max(s,Math.min(d,u)),r=Math.min(r,Math.max(d,u)),s>r)return 1/0}return s}function oh(n,e,t,i){if(!n.active||e<=0)return null;let s=Math.min(sh-n.travelled,e*Js),r=Object.fromEntries(Object.entries(n.velocity).map(([h,d])=>[h,d*s/Js])),o=n.position,a=r.y<0&&o.y+r.y<=Xr?Math.max(0,(Xr-o.y)/r.y):1/0,c=null;for(let h of t)a=Math.min(a,Fa(o,r,h,Xr));for(let h of i){if(h.hp<=0)continue;let d=Fa(o,r,{x:h.x,z:h.z,w:1.1,d:.95,h:1.9},Xr);d<a&&(a=d,c=h.id)}let l=Math.min(1,a);return n.previousPosition=o,n.position={x:o.x+r.x*l,y:o.y+r.y*l,z:o.z+r.z*l},n.travelled+=s*l,!Number.isFinite(a)&&n.travelled<sh-1e-8?null:(n.active=!1,n.exploded=!0,{id:n.id,owner:n.owner,position:{...n.position},direct:c})}function Oa(n,e,t,i=!1){if(!i&&e.id===n.direct)return et.bazooka.damage;let s=n.position,r={x:e.x-s.x,y:(e.y??1.05)-s.y,z:e.z-s.z},o=Math.hypot(r.x,r.y,r.z),{blastRadius:a,splash:c,selfCap:l}=et.bazooka;return o>=a||t.some(h=>Fa(s,r,h,0)<1)?0:Math.min(i?l:c,Math.round(c*(1-o/a)))}var hf=0,ah=1,uf=2;var ku=1,pl=2,qn=3,gi=0,jt=1,Mn=2;var fi=0,_s=1,ch=2,lh=3,hh=4,df=5,Di=100,ff=101,pf=102,uh=103,dh=104,mf=200,gf=201,_f=202,Af=203,vc=204,Mc=205,xf=206,yf=207,vf=208,Mf=209,bf=210,Sf=211,Ef=212,wf=213,Tf=214,Rf=0,Cf=1,Pf=2,bo=3,If=4,Df=5,Lf=6,Nf=7,Hu=0,Uf=1,Ff=2,pi=0,Of=1,zf=2,Bf=3,kf=4,Hf=5,Gf=6;var Gu=300,ys=301,vs=302,bc=303,Sc=304,na=306,cr=1e3,bn=1001,Ec=1002,Qt=1003,fh=1004;var za=1005;var cn=1006,Vf=1007;var lr=1008;var mi=1009,Wf=1010,Xf=1011,ml=1012,Vu=1013,ui=1014,di=1015,hr=1016,Wu=1017,Xu=1018,Ui=1020,qf=1021,Sn=1023,Yf=1024,Qf=1025,Fi=1026,Ms=1027,Jf=1028,qu=1029,Zf=1030,Yu=1031,Qu=1033,Ba=33776,ka=33777,Ha=33778,Ga=33779,ph=35840,mh=35841,gh=35842,_h=35843,Ju=36196,Ah=37492,xh=37496,yh=37808,vh=37809,Mh=37810,bh=37811,Sh=37812,Eh=37813,wh=37814,Th=37815,Rh=37816,Ch=37817,Ph=37818,Ih=37819,Dh=37820,Lh=37821,Va=36492,Nh=36494,Uh=36495,Kf=36283,Fh=36284,Oh=36285,zh=36286;var So=2300,Eo=2301,Wa=2302,Bh=2400,kh=2401,Hh=2402;var Zu=3e3,Oi=3001,$f=3200,jf=3201,Ku=0,ep=1,ln="",gt="srgb",Kn="srgb-linear",gl="display-p3",ia="display-p3-linear",wo="linear",at="srgb",To="rec709",Ro="p3";var Qi=7680;var Gh=519,tp=512,np=513,ip=514,$u=515,sp=516,rp=517,op=518,ap=519,wc=35044;var Vh="300 es",Tc=1035,Jn=2e3,Co=2001,_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xa=Math.PI/180,Rc=180/Math.PI;function Zn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function cp(n,e){return(n%e+e)%e}function qa(n,e,t){return(1-t)*n+t*e}function Wh(n){return(n&n-1)===0&&n!==0}function Cc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],A=s[4],w=s[7],C=s[2],R=s[5],T=s[8];return r[0]=o*_+a*x+c*C,r[3]=o*m+a*A+c*R,r[6]=o*p+a*w+c*T,r[1]=l*_+h*x+d*C,r[4]=l*m+h*A+d*R,r[7]=l*p+h*w+d*T,r[2]=u*_+f*x+g*C,r[5]=u*m+f*A+g*R,r[8]=u*p+f*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new Ze;function ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lp(){let n=Po("canvas");return n.style.display="block",n}var Xh={};function ir(n){n in Xh||(Xh[n]=!0,console.warn(n))}var qh=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qr={[Kn]:{transfer:wo,primaries:To,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:at,primaries:To,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ia]:{transfer:wo,primaries:Ro,toReference:n=>n.applyMatrix3(Yh),fromReference:n=>n.applyMatrix3(qh)},[gl]:{transfer:at,primaries:Ro,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yh),fromReference:n=>n.applyMatrix3(qh).convertLinearToSRGB()}},hp=new Set([Kn,ia]),tt={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=qr[e].toReference,s=qr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qr[n].primaries},getTransfer:function(n){return n===ln?wo:qr[n].transfer}};function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ji,Io=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=Po("canvas")),Ji.width=e.width,Ji.height=e.height;let i=Ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},up=0,Do=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Io.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dp=0,hn=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bn,s=bn,r=cn,o=lr,a=Sn,c=mi,l=n.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Zn(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?gt:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Oi:Zu}set encoding(e){ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Oi?gt:ln}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Gu;hn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,w=(f+1)/2,C=(p+1)/2,R=(h+u)/4,T=(d+_)/4,U=(g+m)/4;return A>w&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=T/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=U/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pc=class extends _i{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Oi?gt:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Do(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Pc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Lo=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ic=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*_,x=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let C=Math.sqrt(A),R=Math.atan2(C,p*x);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let w=a*x;if(c=c*m+u*w,l=l*m+f*w,h=h*m+g*w,d=d*m+_*w,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new I,Qh=new Ai,zi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Qr.subVectors(this.max,Zs),Zi.subVectors(e.a,Zs),Ki.subVectors(e.b,Zs),$i.subVectors(e.c,Zs),oi.subVectors(Ki,Zi),ai.subVectors($i,Ki),Ti.subVectors(Zi,$i);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!Ka(t,Zi,Ki,$i,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Zi,Ki,$i,Qr))?!1:(Jr.crossVectors(oi,ai),t=[Jr.x,Jr.y,Jr.z],Ka(t,Zi,Ki,$i,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,Yr=new zi,Zi=new I,Ki=new I,$i=new I,oi=new I,ai=new I,Ti=new I,Zs=new I,Qr=new I,Jr=new I,Ri=new I;function Ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);let a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var fp=new zi,Ks=new I,$a=new I,bs=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add($a)),this.expandByPoint(Ks.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new I,ja=new I,Zr=new I,ci=new I,ec=new I,Kr=new I,tc=new I,ur=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ja.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ja);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=ci.dot(this.direction),c=-ci.dot(Zr),l=ci.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ja).addScaledVector(Zr,u),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){ec.subVectors(t,e),Kr.subVectors(i,e),tc.crossVectors(ec,Kr);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let c=a*this.direction.dot(Kr.crossVectors(ci,Kr));if(c<0)return null;let l=a*this.direction.dot(ec.cross(ci));if(l<0||c+l>o)return null;let h=-a*ci.dot(tc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class n{constructor(e,t,i,s,r,o,a,c,l,h,d,u,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),li.crossVectors(i,nn),li.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),li.crossVectors(i,nn)),li.normalize(),$r.crossVectors(nn,li),s[0]=li.x,s[4]=$r.x,s[8]=nn.x,s[1]=li.y,s[5]=$r.y,s[9]=nn.y,s[2]=li.z,s[6]=$r.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],A=i[7],w=i[11],C=i[15],R=s[0],T=s[4],U=s[8],v=s[12],b=s[1],F=s[5],q=s[9],ie=s[13],D=s[2],B=s[6],X=s[10],$=s[14],j=s[3],Y=s[7],ne=s[11],se=s[15];return r[0]=o*R+a*b+c*D+l*j,r[4]=o*T+a*F+c*B+l*Y,r[8]=o*U+a*q+c*X+l*ne,r[12]=o*v+a*ie+c*$+l*se,r[1]=h*R+d*b+u*D+f*j,r[5]=h*T+d*F+u*B+f*Y,r[9]=h*U+d*q+u*X+f*ne,r[13]=h*v+d*ie+u*$+f*se,r[2]=g*R+_*b+m*D+p*j,r[6]=g*T+_*F+m*B+p*Y,r[10]=g*U+_*q+m*X+p*ne,r[14]=g*v+_*ie+m*$+p*se,r[3]=x*R+A*b+w*D+C*j,r[7]=x*T+A*F+w*B+C*Y,r[11]=x*U+A*q+w*X+C*ne,r[15]=x*v+A*ie+w*$+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*a*u+i*l*u+s*a*f-i*c*f)+_*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*d+t*a*u+s*o*d-i*o*u+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,A=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,w=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,C=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,R=t*x+i*A+s*w+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=x*T,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*T,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*T,e[3]=(d*c*r-a*u*r-d*s*l+i*u*l+a*s*f-i*c*f)*T,e[4]=A*T,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*T,e[8]=w*T,e[9]=(g*d*r-h*_*r-g*i*f+t*_*f+h*i*p-t*d*p)*T,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*T,e[11]=(h*a*r-o*d*r-h*i*l+t*d*l+o*i*f-t*a*f)*T,e[12]=C*T,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*T,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*T,e[15]=(o*d*s-h*a*s+h*i*c-t*d*c-o*i*u+t*a*u)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,x=c*l,A=c*h,w=c*d,C=i.x,R=i.y,T=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+w)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(f-w)*R,s[5]=(1-(u+p))*R,s[6]=(m+x)*R,s[7]=0,s[8]=(g+A)*T,s[9]=(m-x)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);let l=1/r,h=1/o,d=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Jn){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Co)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn){let c=this.elements,l=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*l,f=(i+s)*h,g,_;if(a===Jn)g=(o+r)*d,_=-2*d;else if(a===Co)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ji=new I,yn=new At,pp=new I(0,0,0),mp=new I(1,1,1),li=new I,$r=new I,nn=new I,Jh=new At,Zh=new Ai,No=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};No.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gp=0,Kh=new I,es=new Ai,Vn=new At,jr=new I,$s=new I,_p=new I,Ap=new Ai,$h=new I(1,0,0),jh=new I(0,1,0),eu=new I(0,0,1),xp={type:"added"},yp={type:"removed"},Nt=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new No,i=new Ai,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt($s,jr,this.up):Vn.lookAt(jr,$s,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Vn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new I,Wn=new I,nc=new I,Xn=new I,ts=new I,ns=new I,tu=new I,ic=new I,sc=new I,rc=new I,eo=!1,Ni=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Wn.subVectors(i,t),nc.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Wn),c=vn.dot(nc),l=Wn.dot(Wn),h=Wn.dot(nc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,i,s,r,o,a,c){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Wn.subVectors(e,t),vn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,i),ns.subVectors(r,i),ic.subVectors(e,i);let c=ts.dot(ic),l=ns.dot(ic);if(c<=0&&l<=0)return t.copy(i);sc.subVectors(e,s);let h=ts.dot(sc),d=ns.dot(sc);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ts,o);rc.subVectors(e,r);let f=ts.dot(rc),g=ns.dot(rc);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ns,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return tu.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(tu,a);let p=1/(m+_+u);return o=_*p,a=u*p,t.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},to={h:0,s:0,l:0};function oc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=cp(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=oc(o,r,e+1/3),this.g=oc(o,r,e),this.b=oc(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(kt(Bt.r*255,0,255))*65536+Math.round(kt(Bt.g*255,0,255))*256+Math.round(kt(Bt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),t);let i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=gt){tt.fromWorkingColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,s=Bt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(to);let i=qa(hi.h,to.h,t),s=qa(hi.s,to.s,t),r=qa(hi.l,to.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ge;Ge.NAMES=ed;var vp=0,jn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=_s,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=Mc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==Mc&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ht=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new I,no=new oe,xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}};var Uo=class extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fo=class extends xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends xt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Mp=0,an=new At,ac=new Nt,is=new I,sn=new zi,js=new zi,Rt=new I,yt=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?Fo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(sn.min,js.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,js.max),sn.expandByPoint(Rt)):(sn.expandByPoint(js.min),sn.expandByPoint(js.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),Rt.add(is)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new I,h[b]=new I;let d=new I,u=new I,f=new I,g=new oe,_=new oe,m=new oe,p=new I,x=new I;function A(b,F,q){d.fromArray(s,b*3),u.fromArray(s,F*3),f.fromArray(s,q*3),g.fromArray(o,b*2),_.fromArray(o,F*2),m.fromArray(o,q*2),u.sub(d),f.sub(d),_.sub(g),m.sub(g);let ie=1/(_.x*m.y-m.x*_.y);isFinite(ie)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(ie),x.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(ie),l[b].add(p),l[F].add(p),l[q].add(p),h[b].add(x),h[F].add(x),h[q].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,F=w.length;b<F;++b){let q=w[b],ie=q.start,D=q.count;for(let B=ie,X=ie+D;B<X;B+=3)A(i[B+0],i[B+1],i[B+2])}let C=new I,R=new I,T=new I,U=new I;function v(b){T.fromArray(r,b*3),U.copy(T);let F=l[b];C.copy(F),C.sub(T.multiplyScalar(T.dot(F))).normalize(),R.crossVectors(U,F);let ie=R.dot(h[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=ie}for(let b=0,F=w.length;b<F;++b){let q=w[b],ie=q.start,D=q.count;for(let B=ie,X=ie+D;B<X;B+=3)v(i[B+0]),v(i[B+1]),v(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new xt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new At,Ci=new ur,io=new bs,iu=new I,ss=new I,rs=new I,os=new I,cc=new I,so=new I,ro=new oe,oo=new oe,ao=new oe,su=new I,ru=new I,ou=new I,co=new I,lo=new I,_t=class extends Nt{constructor(e=new yt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(cc.fromBufferAttribute(d,e),o?so.addScaledVector(cc,h):so.addScaledVector(cc.sub(t),h))}t.add(so)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(io.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(io,iu)===null||Ci.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(nu),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,C=A;w<C;w+=3){let R=a.getX(w),T=a.getX(w+1),U=a.getX(w+2);s=ho(this,p,e,i,l,h,d,R,T,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);s=ho(this,o,e,i,l,h,d,x,A,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,C=A;w<C;w+=3){let R=w,T=w+1,U=w+2;s=ho(this,p,e,i,l,h,d,R,T,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let x=m,A=m+1,w=m+2;s=ho(this,o,e,i,l,h,d,x,A,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function bp(n,e,t,i,s,r,o,a){let c;if(e.side===jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===gi,a),c===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:n}}function ho(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ss),n.getVertexPosition(c,rs),n.getVertexPosition(l,os);let h=bp(n,e,t,i,ss,rs,os,co);if(h){s&&(ro.fromBufferAttribute(s,a),oo.fromBufferAttribute(s,c),ao.fromBufferAttribute(s,l),h.uv=Ni.getInterpolation(co,ss,rs,os,ro,oo,ao,new oe)),r&&(ro.fromBufferAttribute(r,a),oo.fromBufferAttribute(r,c),ao.fromBufferAttribute(r,l),h.uv1=Ni.getInterpolation(co,ss,rs,os,ro,oo,ao,new oe),h.uv2=h.uv1),o&&(su.fromBufferAttribute(o,a),ru.fromBufferAttribute(o,c),ou.fromBufferAttribute(o,l),h.normal=Ni.getInterpolation(co,ss,rs,os,su,ru,ou,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Ni.getNormal(ss,rs,os,d.normal),h.face=d}return h}var un=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(_,m,p,x,A,w,C,R,T,U,v){let b=w/T,F=C/U,q=w/2,ie=C/2,D=R/2,B=T+1,X=U+1,$=0,j=0,Y=new I;for(let ne=0;ne<X;ne++){let se=ne*F-ie;for(let ce=0;ce<B;ce++){let W=ce*b-q;Y[_]=W*x,Y[m]=se*A,Y[p]=D,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ce/T),d.push(1-ne/U),$+=1}}for(let ne=0;ne<U;ne++)for(let se=0;se<T;se++){let ce=u+se+B*ne,W=u+se+B*(ne+1),ee=u+(se+1)+B*(ne+1),le=u+(se+1)+B*ne;c.push(ce,W,le),c.push(W,ee,le),j+=6}a.addGroup(f,j,v),f+=j,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ss(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Ss(n[t]);for(let s in i)e[s]=i[s]}return e}function Sp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}var Ep={clone:Ss,merge:Yt},wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oo=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lt=class extends Oo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},as=-90,cs=1,Dc=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(as,cs,e,t);s.layers=this.layers,this.add(s);let r=new Lt(as,cs,e,t);r.layers=this.layers,this.add(r);let o=new Lt(as,cs,e,t);o.layers=this.layers,this.add(o);let a=new Lt(as,cs,e,t);a.layers=this.layers,this.add(a);let c=new Lt(as,cs,e,t);c.layers=this.layers,this.add(c);let l=new Lt(as,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zo=class extends hn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lc=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Oi?gt:ln),this.texture=new zo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:fi});r.uniforms.tEquirect.value=t;let o=new _t(s,r),a=t.minFilter;return t.minFilter===lr&&(t.minFilter=cn),new Dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},lc=new I,Rp=new I,Cp=new Ze,Yn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=lc.subVectors(i,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cp.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new bs,uo=new I,fr=class{constructor(e=new Yn,t=new Yn,i=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],A=s[14],w=s[15];if(i[0].setComponents(c-r,u-l,m-f,w-p).normalize(),i[1].setComponents(c+r,u+l,m+f,w+p).normalize(),i[2].setComponents(c+o,u+h,m+g,w+x).normalize(),i[3].setComponents(c-o,u-h,m-g,w-x).normalize(),i[4].setComponents(c-a,u-d,m-_,w-A).normalize(),t===Jn)i[5].setComponents(c+a,u+d,m+_,w+A).normalize();else if(t===Co)i[5].setComponents(a,d,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Pp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let d=l.array,u=l.usage,f=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,l),f.count===-1&&g.length===0&&n.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):n.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):n.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=i.get(l);(!u||u.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}var pr=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let x=p*u-o;for(let A=0;A<l;A++){let w=A*d-r;g.push(w,-x,0),_.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let A=x+l*p,w=x+l*(p+1),C=x+1+l*(p+1),R=x+1+l*p;f.push(A,w,R),f.push(w,C,R)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,em=`#define PI 3.141592653589793
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
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`
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
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Pm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Zg=`#define NORMAL
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
}`,Kg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,l0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ip,alphahash_pars_fragment:Dp,alphamap_fragment:Lp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:zp,batching_pars_vertex:Bp,batching_vertex:kp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:Jp,color_fragment:Zp,color_pars_fragment:Kp,color_pars_vertex:$p,color_vertex:jp,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:cm,envmap_fragment:lm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:Sm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:Am,lightmap_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:vm,lights_lambert_pars_fragment:Mm,lights_pars_begin:bm,lights_toon_fragment:Em,lights_toon_pars_fragment:wm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:Lm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:zm,map_pars_fragment:Bm,map_particle_fragment:km,map_particle_pars_fragment:Hm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Vm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Qm,normal_fragment_maps:Jm,normal_pars_fragment:Zm,normal_pars_vertex:Km,normal_vertex:$m,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:cg,dithering_pars_fragment:lg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:Ag,skinnormal_vertex:xg,specularmap_fragment:yg,specularmap_pars_fragment:vg,tonemapping_fragment:Mg,tonemapping_pars_fragment:bg,transmission_fragment:Sg,transmission_pars_fragment:Eg,uv_pars_fragment:wg,uv_pars_vertex:Tg,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Dg,backgroundCube_frag:Lg,cube_vert:Ng,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distanceRGBA_vert:zg,distanceRGBA_frag:Bg,equirect_vert:kg,equirect_frag:Hg,linedashed_vert:Gg,linedashed_frag:Vg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Qg,meshmatcap_frag:Jg,meshnormal_vert:Zg,meshnormal_frag:Kg,meshphong_vert:$g,meshphong_frag:jg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:c0,sprite_frag:l0},ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Dn.physical={uniforms:Yt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var fo={r:0,b:0,g:0};function h0(n,e,t,i,s,r,o){let a=new Ge(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(m,p){let x=!1,A=p.isScene===!0?p.background:null;A&&A.isTexture&&(A=(p.backgroundBlurriness>0?t:e).get(A)),A===null?_(a,c):A&&A.isColor&&(_(A,1),x=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===na)?(h===void 0&&(h=new _t(new un(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ss(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=tt.getTransfer(A.colorSpace)!==at,(d!==A||u!==A.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new _t(new pr(2,2),new ei({name:"BackgroundMaterial",uniforms:Ss(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=tt.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,u=A.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(fo,td(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function u0(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function d(D,B,X,$,j){let Y=!1;if(o){let ne=_($,X,B);l!==ne&&(l=ne,f(l.object)),Y=p(D,$,X,j),Y&&x(D,$,X,j)}else{let ne=B.wireframe===!0;(l.geometry!==$.id||l.program!==X.id||l.wireframe!==ne)&&(l.geometry=$.id,l.program=X.id,l.wireframe=ne,Y=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(D,B,X,$),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,B,X){let $=X.wireframe===!0,j=a[D.id];j===void 0&&(j={},a[D.id]=j);let Y=j[B.id];Y===void 0&&(Y={},j[B.id]=Y);let ne=Y[$];return ne===void 0&&(ne=m(u()),Y[$]=ne),ne}function m(D){let B=[],X=[],$=[];for(let j=0;j<s;j++)B[j]=0,X[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:$,object:D,attributes:{},index:null}}function p(D,B,X,$){let j=l.attributes,Y=B.attributes,ne=0,se=X.getAttributes();for(let ce in se)if(se[ce].location>=0){let ee=j[ce],le=Y[ce];if(le===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;ne++}return l.attributesNum!==ne||l.index!==$}function x(D,B,X,$){let j={},Y=B.attributes,ne=0,se=X.getAttributes();for(let ce in se)if(se[ce].location>=0){let ee=Y[ce];ee===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),j[ce]=le,ne++}l.attributes=j,l.attributesNum=ne,l.index=$}function A(){let D=l.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function w(D){C(D,0)}function C(D,B){let X=l.newAttributes,$=l.enabledAttributes,j=l.attributeDivisors;X[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),j[D]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),j[D]=B)}function R(){let D=l.newAttributes,B=l.enabledAttributes;for(let X=0,$=B.length;X<$;X++)B[X]!==D[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function T(D,B,X,$,j,Y,ne){ne===!0?n.vertexAttribIPointer(D,B,X,j,Y):n.vertexAttribPointer(D,B,X,$,j,Y)}function U(D,B,X,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();let j=$.attributes,Y=X.getAttributes(),ne=B.defaultAttributeValues;for(let se in Y){let ce=Y[se];if(ce.location>=0){let W=j[se];if(W===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let ee=W.normalized,le=W.itemSize,Me=t.get(W);if(Me===void 0)continue;let ge=Me.buffer,De=Me.type,Be=Me.bytesPerElement,be=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||W.gpuType===Vu);if(W.isInterleavedBufferAttribute){let Ue=W.data,P=Ue.stride,ae=W.offset;if(Ue.isInstancedInterleavedBuffer){for(let J=0;J<ce.locationSize;J++)C(ce.location+J,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let J=0;J<ce.locationSize;J++)w(ce.location+J);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let J=0;J<ce.locationSize;J++)T(ce.location+J,le/ce.locationSize,De,ee,P*Be,(ae+le/ce.locationSize*J)*Be,be)}else{if(W.isInstancedBufferAttribute){for(let Ue=0;Ue<ce.locationSize;Ue++)C(ce.location+Ue,W.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ue=0;Ue<ce.locationSize;Ue++)w(ce.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ue=0;Ue<ce.locationSize;Ue++)T(ce.location+Ue,le/ce.locationSize,De,ee,le*Be,le/ce.locationSize*Ue*Be,be)}}else if(ne!==void 0){let ee=ne[se];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(ce.location,ee);break;case 3:n.vertexAttrib3fv(ce.location,ee);break;case 4:n.vertexAttrib4fv(ce.location,ee);break;default:n.vertexAttrib1fv(ce.location,ee)}}}}R()}function v(){q();for(let D in a){let B=a[D];for(let X in B){let $=B[X];for(let j in $)g($[j].object),delete $[j];delete B[X]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;let B=a[D.id];for(let X in B){let $=B[X];for(let j in $)g($[j].object),delete $[j];delete B[X]}delete a[D.id]}function F(D){for(let B in a){let X=a[B];if(X[D.id]===void 0)continue;let $=X[D.id];for(let j in $)g($[j].object),delete $[j];delete X[D.id]}}function q(){ie(),h=!0,l!==c&&(l=c,f(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:q,resetDefaultState:ie,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:w,disableUnusedAttributes:R}}function d0(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,u){if(u===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function l(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function f0(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=u>0,w=o||e.has("OES_texture_float"),C=A&&w,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:A,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:R}}function p0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Yn,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:i,A=x*4,w=p.clippingState||null;c.value=w,w=h(g,u,A,f);for(let C=0;C!==A;++C)w[C]=t[C];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,w=f;A!==_;++A,w+=4)o.copy(d[A]).applyMatrix4(x,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function m0(n){let e=new WeakMap;function t(o,a){return a===bc?o.mapping=ys:a===Sc&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===bc||a===Sc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lc(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Bo=class extends Oo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ps=4,au=[.125,.215,.35,.446,.526,.582],Li=20,hc=new Bo,cu=new Ge,uc=null,dc=0,fc=0,Ii=(1+Math.sqrt(5))/2,ls=1/Ii,lu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ii,ls),new I(0,Ii,-ls),new I(ls,0,Ii),new I(-ls,0,Ii),new I(Ii,ls,0),new I(-Ii,ls,0)],ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,dc,fc),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:hr,format:Sn,colorSpace:Kn,depthBuffer:!1},s=hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=_0(r,e,t)}return s}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,hc)}_sceneToCubeUV(e,t,i,s){let a=new Lt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(cu),h.toneMapping=pi,h.autoClear=!1;let f=new Ht({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new _t(new un,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(cu),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let A=this._cubeSize;po(s,x*A,p>2?A:0,A,A),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ys||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;po(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,hc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lu[(s-1)%lu.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new _t(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let p=[],x=0;for(let T=0;T<Li;++T){let U=T/_,v=Math.exp(-U*U/2);p.push(v),T===0?x+=v:T<m&&(x+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-i;let w=this._sizeLods[s],C=3*w*(s>A-ps?s-A+ps:0),R=4*(this._cubeSize-w);po(t,C,R,3*w,2*w),c.setRenderTarget(t),c.render(d,hc)}};function g0(n){let e=[],t=[],i=[],s=n,r=n-ps+1+au.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-ps?c=au[o-n+ps-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),A=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,U=R>2?0:-1,v=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];x.set(v,_*g*R),A.set(u,m*g*R);let b=[R,R,R,R,R,R];w.set(b,p*g*R)}let C=new yt;C.setAttribute("position",new xt(x,_)),C.setAttribute("uv",new xt(A,m)),C.setAttribute("faceIndex",new xt(w,p)),e.push(C),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hu(n,e,t){let i=new $n(n,e,t);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _0(n,e,t){let i=new Float32Array(Li),s=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function uu(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function du(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function A0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===bc||c===Sc,h=c===ys||c===vs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ko(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new ko(n));let u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function y0(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(f!==null){let x=f.array;_=f.version;for(let A=0,w=x.length;A<w;A+=3){let C=x[A+0],R=x[A+1],T=x[A+2];u.push(C,R,R,T,T,C)}}else if(g!==void 0){let x=g.array;_=g.version;for(let A=0,w=x.length/3-1;A<w;A+=3){let C=A+0,R=A+1,T=A+2;u.push(C,R,R,T,T,C)}}else return;let m=new(ju(u)?Fo:Uo)(u,1);m.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function v0(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*c),t.update(g,r,1)}function d(f,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,_),t.update(g,r,_)}function u(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function M0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function b0(n,e){return n[0]-e[0]}function S0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function E0(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Ct,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let D=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],U=0;x===!0&&(U=1),A===!0&&(U=2),w===!0&&(U=3);let v=h.attributes.position.count*U,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let F=new Float32Array(v*b*4*g),q=new Lo(F,v,b,g);q.type=di,q.needsUpdate=!0;let ie=U*4;for(let B=0;B<g;B++){let X=C[B],$=R[B],j=T[B],Y=v*b*4*B;for(let ne=0;ne<X.count;ne++){let se=ne*ie;x===!0&&(o.fromBufferAttribute(X,ne),F[Y+se+0]=o.x,F[Y+se+1]=o.y,F[Y+se+2]=o.z,F[Y+se+3]=0),A===!0&&(o.fromBufferAttribute($,ne),F[Y+se+4]=o.x,F[Y+se+5]=o.y,F[Y+se+6]=o.z,F[Y+se+7]=0),w===!0&&(o.fromBufferAttribute(j,ne),F[Y+se+8]=o.x,F[Y+se+9]=o.y,F[Y+se+10]=o.z,F[Y+se+11]=j.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new oe(v,b)},r.set(h,_),h.addEventListener("dispose",D)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let f=u===void 0?0:u.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let A=0;A<f;A++)g[A]=[A,0];i[h.id]=g}for(let A=0;A<f;A++){let w=g[A];w[0]=A,w[1]=u[A]}g.sort(S0);for(let A=0;A<8;A++)A<f&&g[A][1]?(a[A][0]=g[A][0],a[A][1]=g[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(b0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let A=0;A<8;A++){let w=a[A],C=w[0],R=w[1];C!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+A)!==_[C]&&h.setAttribute("morphTarget"+A,_[C]),m&&h.getAttribute("morphNormal"+A)!==m[C]&&h.setAttribute("morphNormal"+A,m[C]),s[A]=R,p+=R):(_&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),m&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}let x=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function w0(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ho=class extends hn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Fi,h!==Fi&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fi&&(i=ui),i===void 0&&h===Ms&&(i=Ui),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},id=new hn,sd=new Ho(1,1);sd.compareFunction=$u;var rd=new Lo,od=new Ic,ad=new zo,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Ds(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sa(n,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function C0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function P0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function I0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),Et(t,i)}}function D0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;gu.set(i),n.uniformMatrix3fv(this.addr,!1,gu),Et(t,i)}}function L0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;mu.set(i),n.uniformMatrix4fv(this.addr,!1,mu),Et(t,i)}}function N0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function F0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function z0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function k0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function H0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function G0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?sd:id;t.setTexture2D(e||r,s)}function V0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||od,s)}function W0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ad,s)}function X0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rd,s)}function q0(n){switch(n){case 5126:return T0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return I0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return B0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(n,e){n.uniform1fv(this.addr,e)}function Q0(n,e){let t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function J0(n,e){let t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function Z0(n,e){let t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function K0(n,e){let t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $0(n,e){let t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j0(n,e){let t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function s_(n,e){n.uniform1uiv(this.addr,e)}function r_(n,e){n.uniform2uiv(this.addr,e)}function o_(n,e){n.uniform3uiv(this.addr,e)}function a_(n,e){n.uniform4uiv(this.addr,e)}function c_(n,e,t){let i=this.cache,s=e.length,r=sa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||id,r[o])}function l_(n,e,t){let i=this.cache,s=e.length,r=sa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||od,r[o])}function h_(n,e,t){let i=this.cache,s=e.length,r=sa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ad,r[o])}function u_(n,e,t){let i=this.cache,s=e.length,r=sa(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rd,r[o])}function d_(n){switch(n){case 5126:return Y0;case 35664:return Q0;case 35665:return J0;case 35666:return Z0;case 35674:return K0;case 35675:return $0;case 35676:return j0;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var Nc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q0(t.type)}},Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},Fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},pc=/(\w+)(\])?(\[|\.)?/g;function Au(n,e){n.seq.push(e),n.map[e.id]=e}function f_(n,e,t){let i=n.name,s=i.length;for(pc.lastIndex=0;;){let r=pc.exec(i),o=pc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Au(t,l===void 0?new Nc(a,n,e):new Uc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Fc(a),Au(t,d)),t=d}}}var xs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);f_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function xu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var p_=37297,m_=0;function g_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function __(n){let e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n),i;switch(e===t?i="":e===Ro&&t===To?i="LinearDisplayP3ToLinearSRGB":e===To&&t===Ro&&(i="LinearSRGBToLinearDisplayP3"),n){case Kn:case ia:return[i,"LinearTransferOETF"];case gt:case gl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+g_(n.getShaderSource(e),o)}else return s}function A_(n,e){let t=__(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x_(n,e){let t;switch(e){case Of:t="Linear";break;case zf:t="Reinhard";break;case Bf:t="OptimizedCineon";break;case kf:t="ACESFilmic";break;case Gf:t="AgX";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function v_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function M_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ms(n){return n!==""}function vu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(n){return n.replace(S_,w_)}var E_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w_(n,e){let t=qe[e];if(t===void 0){let i=E_.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(n){return n.replace(T_,R_)}function R_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Su(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case vs:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===vs&&(e="ENVMAP_MODE_REFRACTION"),e}function D_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hu:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case Ff:e="ENVMAP_BLENDING_ADD";break}return e}function L_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function N_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=C_(t),l=P_(t),h=I_(t),d=D_(t),u=L_(t),f=t.isWebGL2?"":y_(t),g=v_(t),_=M_(r),m=s.createProgram(),p,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),x.length>0&&(x+=`
`)):(p=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),x=[f,Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?qe.tonemapping_pars_fragment:"",t.toneMapping!==pi?x_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=Oc(o),o=vu(o,t),o=Mu(o,t),a=Oc(a),a=vu(a,t),a=Mu(a,t),o=bu(o),a=bu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=A+p+o,C=A+x+a,R=xu(s,s.VERTEX_SHADER,w),T=xu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,R),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(q){if(n.debug.checkShaderErrors){let ie=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(T).trim(),X=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,T);else{let j=yu(s,R,"vertex"),Y=yu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+j+`
`+Y)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||B==="")&&($=!1);$&&(q.diagnostics={runnable:X,programLog:ie,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:x}})}s.deleteShader(R),s.deleteShader(T),v=new xs(s,m),b=b_(s,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,p_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}var U_=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Bc(e),t.set(e,i)),i}},Bc=class{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}};function F_(n,e,t,i,s,r,o){let a=new dr,c=new zc,l=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,b,F,q,ie){let D=q.fog,B=ie.geometry,X=v.isMeshStandardMaterial?q.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),j=$&&$.mapping===na?$.image.height:null,Y=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=ne!==void 0?ne.length:0,ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let W,ee,le,Me;if(Y){let Wt=Dn[Y];W=Wt.vertexShader,ee=Wt.fragmentShader}else W=v.vertexShader,ee=v.fragmentShader,c.update(v),le=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);let ge=n.getRenderTarget(),De=ie.isInstancedMesh===!0,Be=ie.isBatchedMesh===!0,be=!!v.map,Ue=!!v.matcap,P=!!$,ae=!!v.aoMap,J=!!v.lightMap,re=!!v.bumpMap,Z=!!v.normalMap,Ee=!!v.displacementMap,fe=!!v.emissiveMap,S=!!v.metalnessMap,y=!!v.roughnessMap,O=v.anisotropy>0,N=v.clearcoat>0,G=v.iridescence>0,Q=v.sheen>0,_e=v.transmission>0,te=O&&!!v.anisotropyMap,de=N&&!!v.clearcoatMap,we=N&&!!v.clearcoatNormalMap,ve=N&&!!v.clearcoatRoughnessMap,K=G&&!!v.iridescenceMap,Qe=G&&!!v.iridescenceThicknessMap,He=Q&&!!v.sheenColorMap,Ce=Q&&!!v.sheenRoughnessMap,Se=!!v.specularMap,Ae=!!v.specularColorMap,Fe=!!v.specularIntensityMap,Xe=_e&&!!v.transmissionMap,Re=_e&&!!v.thicknessMap,Oe=!!v.gradientMap,he=!!v.alphaMap,L=v.alphaTest>0,pe=!!v.alphaHash,me=!!v.extensions,ze=!!B.attributes.uv1,Le=!!B.attributes.uv2,st=!!B.attributes.uv3,rt=pi;return v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:ee,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Be,instancing:De,instancingColor:De&&ie.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Kn,map:be,matcap:Ue,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:j,aoMap:ae,lightMap:J,bumpMap:re,normalMap:Z,displacementMap:u&&Ee,emissiveMap:fe,normalMapObjectSpace:Z&&v.normalMapType===ep,normalMapTangentSpace:Z&&v.normalMapType===Ku,metalnessMap:S,roughnessMap:y,anisotropy:O,anisotropyMap:te,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:ve,iridescence:G,iridescenceMap:K,iridescenceThicknessMap:Qe,sheen:Q,sheenColorMap:He,sheenRoughnessMap:Ce,specularMap:Se,specularColorMap:Ae,specularIntensityMap:Fe,transmission:_e,transmissionMap:Xe,thicknessMap:Re,gradientMap:Oe,opaque:v.transparent===!1&&v.blending===_s,alphaMap:he,alphaTest:L,alphaHash:pe,combine:v.combine,mapUv:be&&_(v.map.channel),aoMapUv:ae&&_(v.aoMap.channel),lightMapUv:J&&_(v.lightMap.channel),bumpMapUv:re&&_(v.bumpMap.channel),normalMapUv:Z&&_(v.normalMap.channel),displacementMapUv:Ee&&_(v.displacementMap.channel),emissiveMapUv:fe&&_(v.emissiveMap.channel),metalnessMapUv:S&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:te&&_(v.anisotropyMap.channel),clearcoatMapUv:de&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(v.sheenRoughnessMap.channel),specularMapUv:Se&&_(v.specularMap.channel),specularColorMapUv:Ae&&_(v.specularColorMap.channel),specularIntensityMapUv:Fe&&_(v.specularIntensityMap.channel),transmissionMapUv:Xe&&_(v.transmissionMap.channel),thicknessMapUv:Re&&_(v.thicknessMap.channel),alphaMapUv:he&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Z||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Le,vertexUv3s:st,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(be||he),fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:me&&v.extensions.derivatives===!0,extensionFragDepth:me&&v.extensions.fragDepth===!0,extensionDrawBuffers:me&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(x(b,v),A(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function A(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function w(v){let b=g[v.type],F;if(b){let q=Dn[b];F=Ep.clone(q.uniforms)}else F=v.uniforms;return F}function C(v,b){let F;for(let q=0,ie=l.length;q<ie;q++){let D=l[q];if(D.cacheKey===b){F=D,++F.usedTimes;break}}return F===void 0&&(F=new N_(n,b,v,r),l.push(F)),F}function R(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:U}}function O_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function z_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Eu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,u,f,g,_,m){let p=o(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,u,f,g,_,m){let p=o(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||z_),i.length>1&&i.sort(u||Eu),s.length>1&&s.sort(u||Eu)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function B_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new wu,n.set(i,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function k_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function H_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var G_=0;function V_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n,e){let t=new k_,i=H_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new At,a=new At;function c(h,d){let u=0,f=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,p=0,x=0,A=0,w=0,C=0,R=0,T=0,U=0,v=0;h.sort(V_);let b=d===!0?Math.PI:1;for(let q=0,ie=h.length;q<ie;q++){let D=h[q],B=D.color,X=D.intensity,$=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*X*b,f+=B.g*X*b,g+=B.b*X*b;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(D.sh.coefficients[Y],X);v++}else if(D.isDirectionalLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){let ne=D.shadow,se=i.get(D);se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,s.directionalShadow[_]=se,s.directionalShadowMap[_]=j,s.directionalShadowMatrix[_]=D.shadow.matrix,w++}s.directional[_]=Y,_++}else if(D.isSpotLight){let Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(X*b),Y.distance=$,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,s.spot[p]=Y;let ne=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,ne.updateMatrices(D),D.castShadow&&U++),s.spotLightMatrix[p]=ne.matrix,D.castShadow){let se=i.get(D);se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,s.spotShadow[p]=se,s.spotShadowMap[p]=j,R++}p++}else if(D.isRectAreaLight){let Y=t.get(D);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),s.rectArea[x]=Y,x++}else if(D.isPointLight){let Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*b),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let ne=D.shadow,se=i.get(D);se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,se.shadowCameraNear=ne.camera.near,se.shadowCameraFar=ne.camera.far,s.pointShadow[m]=se,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=Y,m++}else if(D.isHemisphereLight){let Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(X*b),Y.groundColor.copy(D.groundColor).multiplyScalar(X*b),s.hemi[A]=Y,A++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==x||F.hemiLength!==A||F.numDirectionalShadows!==w||F.numPointShadows!==C||F.numSpotShadows!==R||F.numSpotMaps!==T||F.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=A,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+T-U,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=v,F.directionalLength=_,F.pointLength=m,F.spotLength=p,F.rectAreaLength=x,F.hemiLength=A,F.numDirectionalShadows=w,F.numPointShadows=C,F.numSpotShadows=R,F.numSpotMaps=T,F.numLightProbes=v,s.version=G_++)}function l(h,d){let u=0,f=0,g=0,_=0,m=0,p=d.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){let w=h[x];if(w.isDirectionalLight){let C=s.directional[u];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),u++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Tu(n,e){let t=new W_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function X_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Tu(n,e),t.set(r,[c])):o>=a.length?(c=new Tu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var kc=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hc=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function Q_(n,e,t){let i=new fr,s=new oe,r=new oe,o=new Ct,a=new kc({depthPacking:jf}),c=new Hc,l={},h=t.maxTextureSize,d={[gi]:jt,[jt]:gi,[Mn]:Mn},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new _t(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(R,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),q=n.state;q.setBlending(fi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let ie=p!==qn&&this.type===qn,D=p===qn&&this.type!==qn;for(let B=0,X=R.length;B<X;B++){let $=R[B],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let Y=j.getFrameExtents();if(s.multiply(Y),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,j.mapSize.y=r.y)),j.map===null||ie===!0||D===!0){let se=this.type!==qn?{minFilter:Qt,magFilter:Qt}:{};j.map!==null&&j.map.dispose(),j.map=new $n(s.x,s.y,se),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let ne=j.getViewportCount();for(let se=0;se<ne;se++){let ce=j.getViewport(se);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),q.viewport(o),j.updateMatrices($,se),i=j.getFrustum(),w(T,U,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===qn&&x(j,U),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,F)};function x(R,T){let U=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $n(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,U,u,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,U,f,_,null)}function A(R,T,U,v){let b=null,F=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let q=b.uuid,ie=T.uuid,D=l[q];D===void 0&&(D={},l[q]=D);let B=D[ie];B===void 0&&(B=b.clone(),D[ie]=B,T.addEventListener("dispose",C)),b=B}if(b.visible=T.visible,b.wireframe=T.wireframe,v===qn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let q=n.properties.get(b);q.light=U}return b}function w(R,T,U,v,b){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let ie=e.update(R),D=R.material;if(Array.isArray(D)){let B=ie.groups;for(let X=0,$=B.length;X<$;X++){let j=B[X],Y=D[j.materialIndex];if(Y&&Y.visible){let ne=A(R,Y,v,b);R.onBeforeShadow(n,R,T,U,ie,ne,j),n.renderBufferDirect(U,null,ie,ne,R,j),R.onAfterShadow(n,R,T,U,ie,ne,j)}}}else if(D.visible){let B=A(R,D,v,b);R.onBeforeShadow(n,R,T,U,ie,B,null),n.renderBufferDirect(U,null,ie,B,R,null),R.onAfterShadow(n,R,T,U,ie,B,null)}}let q=R.children;for(let ie=0,D=q.length;ie<D;ie++)w(q[ie],T,U,v,b)}function C(R){R.target.removeEventListener("dispose",C);for(let U in l){let v=l[U],b=R.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function J_(n,e,t){let i=t.isWebGL2;function s(){let L=!1,pe=new Ct,me=null,ze=new Ct(0,0,0,0);return{setMask:function(Le){me!==Le&&!L&&(n.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){L=Le},setClear:function(Le,st,rt,wt,Wt){Wt===!0&&(Le*=wt,st*=wt,rt*=wt),pe.set(Le,st,rt,wt),ze.equals(pe)===!1&&(n.clearColor(Le,st,rt,wt),ze.copy(pe))},reset:function(){L=!1,me=null,ze.set(-1,0,0,0)}}}function r(){let L=!1,pe=null,me=null,ze=null;return{setTest:function(Le){Le?Be(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!L&&(n.depthMask(Le),pe=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case Rf:n.depthFunc(n.NEVER);break;case Cf:n.depthFunc(n.ALWAYS);break;case Pf:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case If:n.depthFunc(n.EQUAL);break;case Df:n.depthFunc(n.GEQUAL);break;case Lf:n.depthFunc(n.GREATER);break;case Nf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Le}},setLocked:function(Le){L=Le},setClear:function(Le){ze!==Le&&(n.clearDepth(Le),ze=Le)},reset:function(){L=!1,pe=null,me=null,ze=null}}}function o(){let L=!1,pe=null,me=null,ze=null,Le=null,st=null,rt=null,wt=null,Wt=null;return{setTest:function(ot){L||(ot?Be(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!L&&(n.stencilMask(ot),pe=ot)},setFunc:function(ot,Xt,Pn){(me!==ot||ze!==Xt||Le!==Pn)&&(n.stencilFunc(ot,Xt,Pn),me=ot,ze=Xt,Le=Pn)},setOp:function(ot,Xt,Pn){(st!==ot||rt!==Xt||wt!==Pn)&&(n.stencilOp(ot,Xt,Pn),st=ot,rt=Xt,wt=Pn)},setLocked:function(ot){L=ot},setClear:function(ot){Wt!==ot&&(n.clearStencil(ot),Wt=ot)},reset:function(){L=!1,pe=null,me=null,ze=null,Le=null,st=null,rt=null,wt=null,Wt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,A=null,w=null,C=null,R=null,T=null,U=null,v=new Ge(0,0,0),b=0,F=!1,q=null,ie=null,D=null,B=null,X=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,Y=0,ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),j=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),j=Y>=2);let se=null,ce={},W=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),le=new Ct().fromArray(W),Me=new Ct().fromArray(ee);function ge(L,pe,me,ze){let Le=new Uint8Array(4),st=n.createTexture();n.bindTexture(L,st),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<me;rt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,ze,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(pe+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return st}let De={};De[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Be(n.DEPTH_TEST),c.setFunc(bo),fe(!1),S(ah),Be(n.CULL_FACE),Z(fi);function Be(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,pe){return f[L]!==pe?(n.bindFramebuffer(L,pe),f[L]=pe,i&&(L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function P(L,pe){let me=_,ze=!1;if(L)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),L.isWebGLMultipleRenderTargets){let Le=L.texture;if(me.length!==Le.length||me[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Le.length;st<rt;st++)me[st]=n.COLOR_ATTACHMENT0+st;me.length=Le.length,ze=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,ze=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ae(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let J={[Di]:n.FUNC_ADD,[ff]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};if(i)J[uh]=n.MIN,J[dh]=n.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(J[uh]=L.MIN_EXT,J[dh]=L.MAX_EXT)}let re={[mf]:n.ZERO,[gf]:n.ONE,[_f]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[bf]:n.SRC_ALPHA_SATURATE,[vf]:n.DST_COLOR,[xf]:n.DST_ALPHA,[Af]:n.ONE_MINUS_SRC_COLOR,[Mc]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[yf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(L,pe,me,ze,Le,st,rt,wt,Wt,ot){if(L===fi){p===!0&&(be(n.BLEND),p=!1);return}if(p===!1&&(Be(n.BLEND),p=!0),L!==df){if(L!==x||ot!==F){if((A!==Di||R!==Di)&&(n.blendEquation(n.FUNC_ADD),A=Di,R=Di),ot)switch(L){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ch:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,C=null,T=null,U=null,v.set(0,0,0),b=0,x=L,F=ot}return}Le=Le||pe,st=st||me,rt=rt||ze,(pe!==A||Le!==R)&&(n.blendEquationSeparate(J[pe],J[Le]),A=pe,R=Le),(me!==w||ze!==C||st!==T||rt!==U)&&(n.blendFuncSeparate(re[me],re[ze],re[st],re[rt]),w=me,C=ze,T=st,U=rt),(wt.equals(v)===!1||Wt!==b)&&(n.blendColor(wt.r,wt.g,wt.b,Wt),v.copy(wt),b=Wt),x=L,F=!1}function Ee(L,pe){L.side===Mn?be(n.CULL_FACE):Be(n.CULL_FACE);let me=L.side===jt;pe&&(me=!me),fe(me),L.blending===_s&&L.transparent===!1?Z(fi):Z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let ze=L.stencilWrite;l.setTest(ze),ze&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(L){q!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),q=L)}function S(L){L!==hf?(Be(n.CULL_FACE),L!==ie&&(L===ah?n.cullFace(n.BACK):L===uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),ie=L}function y(L){L!==D&&(j&&n.lineWidth(L),D=L)}function O(L,pe,me){L?(Be(n.POLYGON_OFFSET_FILL),(B!==pe||X!==me)&&(n.polygonOffset(pe,me),B=pe,X=me)):be(n.POLYGON_OFFSET_FILL)}function N(L){L?Be(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function G(L){L===void 0&&(L=n.TEXTURE0+$-1),se!==L&&(n.activeTexture(L),se=L)}function Q(L,pe,me){me===void 0&&(se===null?me=n.TEXTURE0+$-1:me=se);let ze=ce[me];ze===void 0&&(ze={type:void 0,texture:void 0},ce[me]=ze),(ze.type!==L||ze.texture!==pe)&&(se!==me&&(n.activeTexture(me),se=me),n.bindTexture(L,pe||De[L]),ze.type=L,ze.texture=pe)}function _e(){let L=ce[se];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(L){le.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function Xe(L){Me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function Re(L,pe){let me=d.get(pe);me===void 0&&(me=new WeakMap,d.set(pe,me));let ze=me.get(L);ze===void 0&&(ze=n.getUniformBlockIndex(pe,L.name),me.set(L,ze))}function Oe(L,pe){let ze=d.get(pe).get(L);h.get(pe)!==ze&&(n.uniformBlockBinding(pe,ze,L.__bindingPointIndex),h.set(pe,ze))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,ce={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,A=null,w=null,C=null,R=null,T=null,U=null,v=new Ge(0,0,0),b=0,F=!1,q=null,ie=null,D=null,B=null,X=null,le.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Be,disable:be,bindFramebuffer:Ue,drawBuffers:P,useProgram:ae,setBlending:Z,setMaterial:Ee,setFlipSided:fe,setCullFace:S,setLineWidth:y,setPolygonOffset:O,setScissorTest:N,activeTexture:G,bindTexture:Q,unbindTexture:_e,compressedTexImage2D:te,compressedTexImage3D:de,texImage2D:Se,texImage3D:Ae,updateUBOMapping:Re,uniformBlockBinding:Oe,texStorage2D:He,texStorage3D:Ce,texSubImage2D:we,texSubImage3D:ve,compressedTexSubImage2D:K,compressedTexSubImage3D:Qe,scissor:Fe,viewport:Xe,reset:he}}function Z_(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):Po("canvas")}function _(S,y,O,N){let G=1;if((S.width>N||S.height>N)&&(G=N/Math.max(S.width,S.height)),G<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Q=y?Cc:Math.floor,_e=Q(G*S.width),te=Q(G*S.height);d===void 0&&(d=g(_e,te));let de=O?g(_e,te):d;return de.width=_e,de.height=te,de.getContext("2d").drawImage(S,0,0,_e,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_e+"x"+te+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Wh(S.width)&&Wh(S.height)}function p(S){return a?!1:S.wrapS!==bn||S.wrapT!==bn||S.minFilter!==Qt&&S.minFilter!==cn}function x(S,y){return S.generateMipmaps&&y&&S.minFilter!==Qt&&S.minFilter!==cn}function A(S){n.generateMipmap(S)}function w(S,y,O,N,G=!1){if(a===!1)return y;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=y;if(y===n.RED&&(O===n.FLOAT&&(Q=n.R32F),O===n.HALF_FLOAT&&(Q=n.R16F),O===n.UNSIGNED_BYTE&&(Q=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.R8UI),O===n.UNSIGNED_SHORT&&(Q=n.R16UI),O===n.UNSIGNED_INT&&(Q=n.R32UI),O===n.BYTE&&(Q=n.R8I),O===n.SHORT&&(Q=n.R16I),O===n.INT&&(Q=n.R32I)),y===n.RG&&(O===n.FLOAT&&(Q=n.RG32F),O===n.HALF_FLOAT&&(Q=n.RG16F),O===n.UNSIGNED_BYTE&&(Q=n.RG8)),y===n.RGBA){let _e=G?wo:tt.getTransfer(N);O===n.FLOAT&&(Q=n.RGBA32F),O===n.HALF_FLOAT&&(Q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Q=_e===at?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(S,y,O){return x(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Qt&&S.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function R(S){return S===Qt||S===fh||S===za?n.NEAREST:n.LINEAR}function T(S){let y=S.target;y.removeEventListener("dispose",T),v(y),y.isVideoTexture&&h.delete(y)}function U(S){let y=S.target;y.removeEventListener("dispose",U),F(y)}function v(S){let y=i.get(S);if(y.__webglInit===void 0)return;let O=S.source,N=u.get(O);if(N){let G=N[y.__cacheKey];G.usedTimes--,G.usedTimes===0&&b(S),Object.keys(N).length===0&&u.delete(O)}i.remove(S)}function b(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let O=S.source,N=u.get(O);delete N[y.__cacheKey],o.memory.textures--}function F(S){let y=S.texture,O=i.get(S),N=i.get(y);if(N.__webglTexture!==void 0&&(n.deleteTexture(N.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(O.__webglFramebuffer[G]))for(let Q=0;Q<O.__webglFramebuffer[G].length;Q++)n.deleteFramebuffer(O.__webglFramebuffer[G][Q]);else n.deleteFramebuffer(O.__webglFramebuffer[G]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[G])}else{if(Array.isArray(O.__webglFramebuffer))for(let G=0;G<O.__webglFramebuffer.length;G++)n.deleteFramebuffer(O.__webglFramebuffer[G]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let G=0;G<O.__webglColorRenderbuffer.length;G++)O.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[G]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let G=0,Q=y.length;G<Q;G++){let _e=i.get(y[G]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(y[G])}i.remove(y),i.remove(S)}let q=0;function ie(){q=0}function D(){let S=q;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),q+=1,S}function B(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function X(S,y){let O=i.get(S);if(S.isVideoTexture&&Ee(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let N=S.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,S,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function $(S,y){let O=i.get(S);if(S.version>0&&O.__version!==S.version){le(O,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function j(S,y){let O=i.get(S);if(S.version>0&&O.__version!==S.version){le(O,S,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function Y(S,y){let O=i.get(S);if(S.version>0&&O.__version!==S.version){Me(O,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let ne={[cr]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},se={[Qt]:n.NEAREST,[fh]:n.NEAREST_MIPMAP_NEAREST,[za]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Vf]:n.LINEAR_MIPMAP_NEAREST,[lr]:n.LINEAR_MIPMAP_LINEAR},ce={[tp]:n.NEVER,[ap]:n.ALWAYS,[np]:n.LESS,[$u]:n.LEQUAL,[ip]:n.EQUAL,[op]:n.GEQUAL,[sp]:n.GREATER,[rp]:n.NOTEQUAL};function W(S,y,O){if(O?(n.texParameteri(S,n.TEXTURE_WRAP_S,ne[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ne[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ne[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,se[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,se[y.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==bn||y.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,R(y.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Qt&&y.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Qt||y.minFilter!==za&&y.minFilter!==lr||y.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===hr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ee(S,y){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",T));let N=y.source,G=u.get(N);G===void 0&&(G={},u.set(N,G));let Q=B(y);if(Q!==S.__cacheKey){G[Q]===void 0&&(G[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),G[Q].usedTimes++;let _e=G[S.__cacheKey];_e!==void 0&&(G[S.__cacheKey].usedTimes--,_e.usedTimes===0&&b(y)),S.__cacheKey=Q,S.__webglTexture=G[Q].texture}return O}function le(S,y,O){let N=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(N=n.TEXTURE_3D);let G=ee(S,y),Q=y.source;t.bindTexture(N,S.__webglTexture,n.TEXTURE0+O);let _e=i.get(Q);if(Q.version!==_e.__version||G===!0){t.activeTexture(n.TEXTURE0+O);let te=tt.getPrimaries(tt.workingColorSpace),de=y.colorSpace===ln?null:tt.getPrimaries(y.colorSpace),we=y.colorSpace===ln||te===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ve=p(y)&&m(y.image)===!1,K=_(y.image,ve,!1,s.maxTextureSize);K=fe(y,K);let Qe=m(K)||a,He=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),Se=w(y.internalFormat,He,Ce,y.colorSpace,y.isVideoTexture);W(N,y,Qe);let Ae,Fe=y.mipmaps,Xe=a&&y.isVideoTexture!==!0&&Se!==Ju,Re=_e.__version===void 0||G===!0,Oe=C(y,K,Qe);if(y.isDepthTexture)Se=n.DEPTH_COMPONENT,a?y.type===di?Se=n.DEPTH_COMPONENT32F:y.type===ui?Se=n.DEPTH_COMPONENT24:y.type===Ui?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:y.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Fi&&Se===n.DEPTH_COMPONENT&&y.type!==ml&&y.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ui,Ce=r.convert(y.type)),y.format===Ms&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,y.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ui,Ce=r.convert(y.type))),Re&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Se,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Se,K.width,K.height,0,He,Ce,null));else if(y.isDataTexture)if(Fe.length>0&&Qe){Xe&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Se,Fe[0].width,Fe[0].height);for(let he=0,L=Fe.length;he<L;he++)Ae=Fe[he],Xe?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,He,Ce,Ae.data):t.texImage2D(n.TEXTURE_2D,he,Se,Ae.width,Ae.height,0,He,Ce,Ae.data);y.generateMipmaps=!1}else Xe?(Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Se,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,He,Ce,K.data)):t.texImage2D(n.TEXTURE_2D,0,Se,K.width,K.height,0,He,Ce,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Se,Fe[0].width,Fe[0].height,K.depth);for(let he=0,L=Fe.length;he<L;he++)Ae=Fe[he],y.format!==Sn?He!==null?Xe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,K.depth,He,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Se,Ae.width,Ae.height,K.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,K.depth,He,Ce,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Se,Ae.width,Ae.height,K.depth,0,He,Ce,Ae.data)}else{Xe&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Se,Fe[0].width,Fe[0].height);for(let he=0,L=Fe.length;he<L;he++)Ae=Fe[he],y.format!==Sn?He!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,He,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,He,Ce,Ae.data):t.texImage2D(n.TEXTURE_2D,he,Se,Ae.width,Ae.height,0,He,Ce,Ae.data)}else if(y.isDataArrayTexture)Xe?(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Se,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,He,Ce,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,K.width,K.height,K.depth,0,He,Ce,K.data);else if(y.isData3DTexture)Xe?(Re&&t.texStorage3D(n.TEXTURE_3D,Oe,Se,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,He,Ce,K.data)):t.texImage3D(n.TEXTURE_3D,0,Se,K.width,K.height,K.depth,0,He,Ce,K.data);else if(y.isFramebufferTexture){if(Re)if(Xe)t.texStorage2D(n.TEXTURE_2D,Oe,Se,K.width,K.height);else{let he=K.width,L=K.height;for(let pe=0;pe<Oe;pe++)t.texImage2D(n.TEXTURE_2D,pe,Se,he,L,0,He,Ce,null),he>>=1,L>>=1}}else if(Fe.length>0&&Qe){Xe&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Se,Fe[0].width,Fe[0].height);for(let he=0,L=Fe.length;he<L;he++)Ae=Fe[he],Xe?t.texSubImage2D(n.TEXTURE_2D,he,0,0,He,Ce,Ae):t.texImage2D(n.TEXTURE_2D,he,Se,He,Ce,Ae);y.generateMipmaps=!1}else Xe?(Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Se,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,Ce,K)):t.texImage2D(n.TEXTURE_2D,0,Se,He,Ce,K);x(y,Qe)&&A(N),_e.__version=Q.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Me(S,y,O){if(y.image.length!==6)return;let N=ee(S,y),G=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let Q=i.get(G);if(G.version!==Q.__version||N===!0){t.activeTexture(n.TEXTURE0+O);let _e=tt.getPrimaries(tt.workingColorSpace),te=y.colorSpace===ln?null:tt.getPrimaries(y.colorSpace),de=y.colorSpace===ln||_e===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let we=y.isCompressedTexture||y.image[0].isCompressedTexture,ve=y.image[0]&&y.image[0].isDataTexture,K=[];for(let he=0;he<6;he++)!we&&!ve?K[he]=_(y.image[he],!1,!0,s.maxCubemapSize):K[he]=ve?y.image[he].image:y.image[he],K[he]=fe(y,K[he]);let Qe=K[0],He=m(Qe)||a,Ce=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),Ae=w(y.internalFormat,Ce,Se,y.colorSpace),Fe=a&&y.isVideoTexture!==!0,Xe=Q.__version===void 0||N===!0,Re=C(y,Qe,He);W(n.TEXTURE_CUBE_MAP,y,He);let Oe;if(we){Fe&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ae,Qe.width,Qe.height);for(let he=0;he<6;he++){Oe=K[he].mipmaps;for(let L=0;L<Oe.length;L++){let pe=Oe[L];y.format!==Sn?Ce!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,pe.width,pe.height,Ce,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,pe.width,pe.height,Ce,Se,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Ae,pe.width,pe.height,0,Ce,Se,pe.data)}}}else{Oe=y.mipmaps,Fe&&Xe&&(Oe.length>0&&Re++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ae,K[0].width,K[0].height));for(let he=0;he<6;he++)if(ve){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,K[he].width,K[he].height,Ce,Se,K[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ae,K[he].width,K[he].height,0,Ce,Se,K[he].data);for(let L=0;L<Oe.length;L++){let me=Oe[L].image[he].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,me.width,me.height,Ce,Se,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Ae,me.width,me.height,0,Ce,Se,me.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce,Se,K[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ae,Ce,Se,K[he]);for(let L=0;L<Oe.length;L++){let pe=Oe[L];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,Ce,Se,pe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Ae,Ce,Se,pe.image[he])}}}x(y,He)&&A(n.TEXTURE_CUBE_MAP),Q.__version=G.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ge(S,y,O,N,G,Q){let _e=r.convert(O.format,O.colorSpace),te=r.convert(O.type),de=w(O.internalFormat,_e,te,O.colorSpace);if(!i.get(y).__hasExternalTextures){let ve=Math.max(1,y.width>>Q),K=Math.max(1,y.height>>Q);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,Q,de,ve,K,y.depth,0,_e,te,null):t.texImage2D(G,Q,de,ve,K,0,_e,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Z(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,G,i.get(O).__webglTexture,0,re(y)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,G,i.get(O).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer&&!y.stencilBuffer){let N=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||Z(y)){let G=y.depthTexture;G&&G.isDepthTexture&&(G.type===di?N=n.DEPTH_COMPONENT32F:G.type===ui&&(N=n.DEPTH_COMPONENT24));let Q=re(y);Z(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,N,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,N,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(y.depthBuffer&&y.stencilBuffer){let N=re(y);O&&Z(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,y.width,y.height):Z(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let G=0;G<N.length;G++){let Q=N[G],_e=r.convert(Q.format,Q.colorSpace),te=r.convert(Q.type),de=w(Q.internalFormat,_e,te,Q.colorSpace),we=re(y);O&&Z(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,de,y.width,y.height):Z(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,de,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,de,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let N=i.get(y.depthTexture).__webglTexture,G=re(y);if(y.depthTexture.format===Fi)Z(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(y.depthTexture.format===Ms)Z(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function be(S){let y=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Be(y.__webglFramebuffer,S)}else if(O){y.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[N]),y.__webglDepthbuffer[N]=n.createRenderbuffer(),De(y.__webglDepthbuffer[N],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),De(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(S,y,O){let N=i.get(S);y!==void 0&&ge(N.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&be(S)}function P(S){let y=S.texture,O=i.get(S),N=i.get(y);S.addEventListener("dispose",U),S.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=y.version,o.memory.textures++);let G=S.isWebGLCubeRenderTarget===!0,Q=S.isWebGLMultipleRenderTargets===!0,_e=m(S)||a;if(G){O.__webglFramebuffer=[];for(let te=0;te<6;te++)if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[te]=[];for(let de=0;de<y.mipmaps.length;de++)O.__webglFramebuffer[te][de]=n.createFramebuffer()}else O.__webglFramebuffer[te]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)O.__webglFramebuffer[te]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Q)if(s.drawBuffers){let te=S.texture;for(let de=0,we=te.length;de<we;de++){let ve=i.get(te[de]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Z(S)===!1){let te=Q?y:[y];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){let we=te[de];O.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[de]);let ve=r.convert(we.format,we.colorSpace),K=r.convert(we.type),Qe=w(we.internalFormat,ve,K,we.colorSpace,S.isXRRenderTarget===!0),He=re(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Qe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,O.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),De(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),W(n.TEXTURE_CUBE_MAP,y,_e);for(let te=0;te<6;te++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)ge(O.__webglFramebuffer[te][de],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de);else ge(O.__webglFramebuffer[te],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);x(y,_e)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let te=S.texture;for(let de=0,we=te.length;de<we;de++){let ve=te[de],K=i.get(ve);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),W(n.TEXTURE_2D,ve,_e),ge(O.__webglFramebuffer,S,ve,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),x(ve,_e)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?te=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,N.__webglTexture),W(te,y,_e),a&&y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)ge(O.__webglFramebuffer[de],S,y,n.COLOR_ATTACHMENT0,te,de);else ge(O.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,te,0);x(y,_e)&&A(te),t.unbindTexture()}S.depthBuffer&&be(S)}function ae(S){let y=m(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let N=0,G=O.length;N<G;N++){let Q=O[N];if(x(Q,y)){let _e=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,te=i.get(Q).__webglTexture;t.bindTexture(_e,te),A(_e),t.unbindTexture()}}}function J(S){if(a&&S.samples>0&&Z(S)===!1){let y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,N=S.height,G=n.COLOR_BUFFER_BIT,Q=[],_e=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(S),de=S.isWebGLMultipleRenderTargets===!0;if(de)for(let we=0;we<y.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let we=0;we<y.length;we++){Q.push(n.COLOR_ATTACHMENT0+we),S.depthBuffer&&Q.push(_e);let ve=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(ve===!1&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[we]),ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),de){let K=i.get(y[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,O,N,0,0,O,N,G,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<y.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,te.__webglColorRenderbuffer[we]);let ve=i.get(y[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function re(S){return Math.min(s.maxSamples,S.samples)}function Z(S){let y=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(S){let y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function fe(S,y){let O=S.colorSpace,N=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Tc||O!==Kn&&O!==ln&&(tt.getTransfer(O)===at?a===!1?e.has("EXT_sRGB")===!0&&N===Sn?(S.format=Tc,S.minFilter=cn,S.generateMipmaps=!1):y=Io.sRGBToLinear(y):(N!==Sn||G!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Z}function K_(n,e,t){let i=t.isWebGL2;function s(r,o=ln){let a,c=tt.getTransfer(o);if(r===mi)return n.UNSIGNED_BYTE;if(r===Wu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Xu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Wf)return n.BYTE;if(r===Xf)return n.SHORT;if(r===ml)return n.UNSIGNED_SHORT;if(r===Vu)return n.INT;if(r===ui)return n.UNSIGNED_INT;if(r===di)return n.FLOAT;if(r===hr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===qf)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===Yf)return n.LUMINANCE;if(r===Qf)return n.LUMINANCE_ALPHA;if(r===Fi)return n.DEPTH_COMPONENT;if(r===Ms)return n.DEPTH_STENCIL;if(r===Tc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Jf)return n.RED;if(r===qu)return n.RED_INTEGER;if(r===Zf)return n.RG;if(r===Yu)return n.RG_INTEGER;if(r===Qu)return n.RGBA_INTEGER;if(r===Ba||r===ka||r===Ha||r===Ga)if(c===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===_h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ph)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ju)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ah||r===xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ah)return c===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yh||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th||r===Rh||r===Ch||r===Ph||r===Ih||r===Dh||r===Lh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===yh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Eh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Th)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ch)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Va||r===Nh||r===Uh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Va)return c===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kf||r===Fh||r===Oh||r===zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Va)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Oh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ui?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Gc=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$_={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vc=class extends _i{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,x=[],A=[],w=new oe,C=null,R=new Lt;R.layers.enable(1),R.viewport=new Ct;let T=new Lt;T.layers.enable(2),T.viewport=new Ct;let U=[R,T],v=new Gc;v.layers.enable(1),v.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=x[W];return ee===void 0&&(ee=new sr,x[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=x[W];return ee===void 0&&(ee=new sr,x[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=x[W];return ee===void 0&&(ee=new sr,x[W]=ee),ee.getHandSpace()};function q(W){let ee=A.indexOf(W.inputSource);if(ee===-1)return;let le=x[ee];le!==void 0&&(le.update(W.inputSource,W.frame,l||o),le.dispatchEvent({type:W.type,data:W.inputSource}))}function ie(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",D);for(let W=0;W<x.length;W++){let ee=A[W];ee!==null&&(A[W]=null,x[W].disconnect(ee))}b=null,F=null,e.setRenderTarget(m),f=null,u=null,d=null,s=null,p=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new $n(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,le=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Ms:Fi,le=_.stencil?Ui:ui);let ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new $n(u.textureWidth,u.textureHeight,{format:Sn,type:mi,depthTexture:new Ho(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(W){for(let ee=0;ee<W.removed.length;ee++){let le=W.removed[ee],Me=A.indexOf(le);Me>=0&&(A[Me]=null,x[Me].disconnect(le))}for(let ee=0;ee<W.added.length;ee++){let le=W.added[ee],Me=A.indexOf(le);if(Me===-1){for(let De=0;De<x.length;De++)if(De>=A.length){A.push(le),Me=De;break}else if(A[De]===null){A[De]=le,Me=De;break}if(Me===-1)break}let ge=x[Me];ge&&ge.connect(le)}}let B=new I,X=new I;function $(W,ee,le){B.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);let Me=B.distanceTo(X),ge=ee.projectionMatrix.elements,De=le.projectionMatrix.elements,Be=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),Ue=(ge[9]+1)/ge[5],P=(ge[9]-1)/ge[5],ae=(ge[8]-1)/ge[0],J=(De[8]+1)/De[0],re=Be*ae,Z=Be*J,Ee=Me/(-ae+J),fe=Ee*-ae;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let S=Be+Ee,y=be+Ee,O=re-fe,N=Z+(Me-fe),G=Ue*be/y*S,Q=P*be/y*S;W.projectionMatrix.makePerspective(O,N,G,Q,S,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.near=T.near=R.near=W.near,v.far=T.far=R.far=W.far,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far);let ee=W.parent,le=v.cameras;j(v,ee);for(let Me=0;Me<le.length;Me++)j(le[Me],ee);le.length===2?$(v,R,T):v.projectionMatrix.copy(R.projectionMatrix),Y(W,v,ee)};function Y(W,ee,le){le===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Rc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let ne=null;function se(W,ee){if(h=ee.getViewerPose(l||o),g=ee,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Me=!1;le.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let ge=0;ge<le.length;ge++){let De=le[ge],Be=null;if(f!==null)Be=f.getViewport(De);else{let Ue=d.getViewSubImage(u,De);Be=Ue.viewport,ge===0&&(e.setRenderTargetTextures(p,Ue.colorTexture,u.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(p))}let be=U[ge];be===void 0&&(be=new Lt,be.layers.enable(ge),be.viewport=new Ct,U[ge]=be),be.matrix.fromArray(De.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(De.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Be.x,Be.y,Be.width,Be.height),ge===0&&(v.matrix.copy(be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(be)}}for(let le=0;le<x.length;le++){let Me=A[le],ge=x[le];Me!==null&&ge!==void 0&&ge.update(Me,ee,l||o)}ne&&ne(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let ce=new nd;ce.setAnimationLoop(se),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}};function j_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,td(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,A,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eA(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,A){let w=A.program;i.uniformBlockBinding(x,w)}function l(x,A){let w=s[x.id];w===void 0&&(g(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",m));let C=A.program;i.updateUBOMapping(x,C);let R=e.render.frame;r[x.id]!==R&&(u(x),r[x.id]=R)}function h(x){let A=d();x.__bindingPointIndex=A;let w=n.createBuffer(),C=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,w),w}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let A=s[x.id],w=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,T=w.length;R<T;R++){let U=Array.isArray(w[R])?w[R]:[w[R]];for(let v=0,b=U.length;v<b;v++){let F=U[v];if(f(F,R,v,C)===!0){let q=F.__offset,ie=Array.isArray(F.value)?F.value:[F.value],D=0;for(let B=0;B<ie.length;B++){let X=ie[B],$=_(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,q+D,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,A,w,C){let R=x.value,T=A+"_"+w;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{let U=C[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(x){let A=x.uniforms,w=0,C=16;for(let T=0,U=A.length;T<U;T++){let v=Array.isArray(A[T])?A[T]:[A[T]];for(let b=0,F=v.length;b<F;b++){let q=v[b],ie=Array.isArray(q.value)?q.value:[q.value];for(let D=0,B=ie.length;D<B;D++){let X=ie[D],$=_(X),j=w%C;j!==0&&C-j<$.boundary&&(w+=C-j),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=$.storage}}}let R=w%C;return R>0&&(w+=C-R),x.__size=w,x.__cache={},this}function _(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),A}function m(x){let A=x.target;A.removeEventListener("dispose",m);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Bi=class{constructor(e={}){let{canvas:t=lp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;let A=this,w=!1,C=0,R=0,T=null,U=-1,v=null,b=new Ct,F=new Ct,q=null,ie=new Ge(0),D=0,B=t.width,X=t.height,$=1,j=null,Y=null,ne=new Ct(0,0,B,X),se=new Ct(0,0,B,X),ce=!1,W=new fr,ee=!1,le=!1,Me=null,ge=new At,De=new oe,Be=new I,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return T===null?$:1}let P=i;function ae(E,z){for(let H=0;H<E.length;H++){let V=E[H],k=t.getContext(V,z);if(k!==null)return k}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){let z=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&z.shift(),P=ae(z,E),P===null)throw ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,re,Z,Ee,fe,S,y,O,N,G,Q,_e,te,de,we,ve,K,Qe,He,Ce,Se,Ae,Fe,Xe;function Re(){J=new x0(P),re=new f0(P,J,e),J.init(re),Ae=new K_(P,J,re),Z=new J_(P,J,re),Ee=new M0(P),fe=new O_,S=new Z_(P,J,Z,fe,re,Ae,Ee),y=new m0(A),O=new A0(A),N=new Pp(P,re),Fe=new u0(P,J,N,re),G=new y0(P,N,Ee,Fe),Q=new w0(P,G,N,Ee),He=new E0(P,re,S),ve=new p0(fe),_e=new F_(A,y,O,J,re,Fe,ve),te=new j_(A,fe),de=new B_,we=new X_(J,re),Qe=new h0(A,y,O,Z,Q,u,c),K=new Q_(A,Q,re),Xe=new eA(P,Ee,re,Z),Ce=new d0(P,J,Ee,re),Se=new v0(P,J,Ee,re),Ee.programs=_e.programs,A.capabilities=re,A.extensions=J,A.properties=fe,A.renderLists=de,A.shadowMap=K,A.state=Z,A.info=Ee}Re();let Oe=new Vc(A,P);this.xr=Oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(B,X,!1))},this.getSize=function(E){return E.set(B,X)},this.setSize=function(E,z,H=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,X=z,t.width=Math.floor(E*$),t.height=Math.floor(z*$),H===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(B*$,X*$).floor()},this.setDrawingBufferSize=function(E,z,H){B=E,X=z,$=H,t.width=Math.floor(E*H),t.height=Math.floor(z*H),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,z,H,V){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,z,H,V),Z.viewport(b.copy(ne).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,z,H,V){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,z,H,V),Z.scissor(F.copy(se).multiplyScalar($).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Z.setScissorTest(ce=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(E=!0,z=!0,H=!0){let V=0;if(E){let k=!1;if(T!==null){let xe=T.texture.format;k=xe===Qu||xe===Yu||xe===qu}if(k){let xe=T.texture.type,Te=xe===mi||xe===ui||xe===ml||xe===Ui||xe===Wu||xe===Xu,Ne=Qe.getClearColor(),ke=Qe.getClearAlpha(),Ye=Ne.r,Ve=Ne.g,We=Ne.b;Te?(f[0]=Ye,f[1]=Ve,f[2]=We,f[3]=ke,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Ye,g[1]=Ve,g[2]=We,g[3]=ke,P.clearBufferiv(P.COLOR,0,g))}else V|=P.COLOR_BUFFER_BIT}z&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),de.dispose(),we.dispose(),fe.dispose(),y.dispose(),O.dispose(),Q.dispose(),Fe.dispose(),Xe.dispose(),_e.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Wt),Oe.removeEventListener("sessionend",ot),Me&&(Me.dispose(),Me=null),Xt.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Ee.autoReset,z=K.enabled,H=K.autoUpdate,V=K.needsUpdate,k=K.type;Re(),Ee.autoReset=E,K.enabled=z,K.autoUpdate=H,K.needsUpdate=V,K.type=k}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){let z=E.target;z.removeEventListener("dispose",me),ze(z)}function ze(E){Le(E),fe.remove(E)}function Le(E){let z=fe.get(E).programs;z!==void 0&&(z.forEach(function(H){_e.releaseProgram(H)}),E.isShaderMaterial&&_e.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,H,V,k,xe){z===null&&(z=be);let Te=k.isMesh&&k.matrixWorld.determinant()<0,Ne=nf(E,z,H,V,k);Z.setMaterial(V,Te);let ke=H.index,Ye=1;if(V.wireframe===!0){if(ke=G.getWireframeAttribute(H),ke===void 0)return;Ye=2}let Ve=H.drawRange,We=H.attributes.position,mt=Ve.start*Ye,tn=(Ve.start+Ve.count)*Ye;xe!==null&&(mt=Math.max(mt,xe.start*Ye),tn=Math.min(tn,(xe.start+xe.count)*Ye)),ke!==null?(mt=Math.max(mt,0),tn=Math.min(tn,ke.count)):We!=null&&(mt=Math.max(mt,0),tn=Math.min(tn,We.count));let Tt=tn-mt;if(Tt<0||Tt===1/0)return;Fe.setup(k,V,Ne,H,ke);let kn,ut=Ce;if(ke!==null&&(kn=N.get(ke),ut=Se,ut.setIndex(kn)),k.isMesh)V.wireframe===!0?(Z.setLineWidth(V.wireframeLinewidth*Ue()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(k.isLine){let Je=V.linewidth;Je===void 0&&(Je=1),Z.setLineWidth(Je*Ue()),k.isLineSegments?ut.setMode(P.LINES):k.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else k.isPoints?ut.setMode(P.POINTS):k.isSprite&&ut.setMode(P.TRIANGLES);if(k.isBatchedMesh)ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ut.renderInstances(mt,Tt,k.count);else if(H.isInstancedBufferGeometry){let Je=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ra=Math.min(H.instanceCount,Je);ut.renderInstances(mt,Tt,Ra)}else ut.render(mt,Tt)};function st(E,z,H){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,Br(E,z,H),E.side=gi,E.needsUpdate=!0,Br(E,z,H),E.side=Mn):Br(E,z,H)}this.compile=function(E,z,H=null){H===null&&(H=E),m=we.get(H),m.init(),x.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==H&&E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(A._useLegacyLights);let V=new Set;return E.traverse(function(k){let xe=k.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){let Ne=xe[Te];st(Ne,H,k),V.add(Ne)}else st(xe,H,k),V.add(xe)}),x.pop(),m=null,V},this.compileAsync=function(E,z,H=null){let V=this.compile(E,z,H);return new Promise(k=>{function xe(){if(V.forEach(function(Te){fe.get(Te).currentProgram.isReady()&&V.delete(Te)}),V.size===0){k(E);return}setTimeout(xe,10)}J.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let rt=null;function wt(E){rt&&rt(E)}function Wt(){Xt.stop()}function ot(){Xt.start()}let Xt=new nd;Xt.setAnimationLoop(wt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(E){rt=E,Oe.setAnimationLoop(E),E===null?Xt.stop():Xt.start()},Oe.addEventListener("sessionstart",Wt),Oe.addEventListener("sessionend",ot),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(z),z=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,z,T),m=we.get(E,x.length),m.init(),x.push(m),ge.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(ge),le=this.localClippingEnabled,ee=ve.init(this.clippingPlanes,le),_=de.get(E,p.length),_.init(),p.push(_),Pn(E,z,0,A.sortObjects),_.finish(),A.sortObjects===!0&&_.sort(j,Y),this.info.render.frame++,ee===!0&&ve.beginShadows();let H=m.state.shadowsArray;if(K.render(H,E,z),ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,E),m.setupLights(A._useLegacyLights),z.isArrayCamera){let V=z.cameras;for(let k=0,xe=V.length;k<xe;k++){let Te=V[k];Bl(_,E,Te,Te.viewport)}}else Bl(_,E,z);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(A,E,z),Fe.resetDefaultState(),U=-1,v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(E,z,H,V){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){V&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);let Te=Q.update(E),Ne=E.material;Ne.visible&&_.push(E,Te,Ne,H,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let Te=Q.update(E),Ne=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Be.copy(Te.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){let ke=Te.groups;for(let Ye=0,Ve=ke.length;Ye<Ve;Ye++){let We=ke[Ye],mt=Ne[We.materialIndex];mt&&mt.visible&&_.push(E,Te,mt,H,Be.z,We)}}else Ne.visible&&_.push(E,Te,Ne,H,Be.z,null)}}let xe=E.children;for(let Te=0,Ne=xe.length;Te<Ne;Te++)Pn(xe[Te],z,H,V)}function Bl(E,z,H,V){let k=E.opaque,xe=E.transmissive,Te=E.transparent;m.setupLightsView(H),ee===!0&&ve.setGlobalState(A.clippingPlanes,H),xe.length>0&&tf(k,xe,z,H),V&&Z.viewport(b.copy(V)),k.length>0&&zr(k,z,H),xe.length>0&&zr(xe,z,H),Te.length>0&&zr(Te,z,H),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function tf(E,z,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let xe=re.isWebGL2;Me===null&&(Me=new $n(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?hr:mi,minFilter:lr,samples:xe?4:0})),A.getDrawingBufferSize(De),xe?Me.setSize(De.x,De.y):Me.setSize(Cc(De.x),Cc(De.y));let Te=A.getRenderTarget();A.setRenderTarget(Me),A.getClearColor(ie),D=A.getClearAlpha(),D<1&&A.setClearColor(16777215,.5),A.clear();let Ne=A.toneMapping;A.toneMapping=pi,zr(E,H,V),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let ke=!1;for(let Ye=0,Ve=z.length;Ye<Ve;Ye++){let We=z[Ye],mt=We.object,tn=We.geometry,Tt=We.material,kn=We.group;if(Tt.side===Mn&&mt.layers.test(V.layers)){let ut=Tt.side;Tt.side=jt,Tt.needsUpdate=!0,kl(mt,H,V,tn,Tt,kn),Tt.side=ut,Tt.needsUpdate=!0,ke=!0}}ke===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),A.setRenderTarget(Te),A.setClearColor(ie,D),A.toneMapping=Ne}function zr(E,z,H){let V=z.isScene===!0?z.overrideMaterial:null;for(let k=0,xe=E.length;k<xe;k++){let Te=E[k],Ne=Te.object,ke=Te.geometry,Ye=V===null?Te.material:V,Ve=Te.group;Ne.layers.test(H.layers)&&kl(Ne,z,H,ke,Ye,Ve)}}function kl(E,z,H,V,k,xe){E.onBeforeRender(A,z,H,V,k,xe),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(A,z,H,V,E,xe),k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,A.renderBufferDirect(H,z,V,k,E,xe),k.side=gi,k.needsUpdate=!0,A.renderBufferDirect(H,z,V,k,E,xe),k.side=Mn):A.renderBufferDirect(H,z,V,k,E,xe),E.onAfterRender(A,z,H,V,k,xe)}function Br(E,z,H){z.isScene!==!0&&(z=be);let V=fe.get(E),k=m.state.lights,xe=m.state.shadowsArray,Te=k.state.version,Ne=_e.getParameters(E,k.state,xe,z,H),ke=_e.getProgramCacheKey(Ne),Ye=V.programs;V.environment=E.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(E.isMeshStandardMaterial?O:y).get(E.envMap||V.environment),Ye===void 0&&(E.addEventListener("dispose",me),Ye=new Map,V.programs=Ye);let Ve=Ye.get(ke);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===Te)return Gl(E,Ne),Ve}else Ne.uniforms=_e.getUniforms(E),E.onBuild(H,Ne,A),E.onBeforeCompile(Ne,A),Ve=_e.acquireProgram(Ne,ke),Ye.set(ke,Ve),V.uniforms=Ne.uniforms;let We=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=ve.uniform),Gl(E,Ne),V.needsLights=rf(E),V.lightsStateVersion=Te,V.needsLights&&(We.ambientLightColor.value=k.state.ambient,We.lightProbe.value=k.state.probe,We.directionalLights.value=k.state.directional,We.directionalLightShadows.value=k.state.directionalShadow,We.spotLights.value=k.state.spot,We.spotLightShadows.value=k.state.spotShadow,We.rectAreaLights.value=k.state.rectArea,We.ltc_1.value=k.state.rectAreaLTC1,We.ltc_2.value=k.state.rectAreaLTC2,We.pointLights.value=k.state.point,We.pointLightShadows.value=k.state.pointShadow,We.hemisphereLights.value=k.state.hemi,We.directionalShadowMap.value=k.state.directionalShadowMap,We.directionalShadowMatrix.value=k.state.directionalShadowMatrix,We.spotShadowMap.value=k.state.spotShadowMap,We.spotLightMatrix.value=k.state.spotLightMatrix,We.spotLightMap.value=k.state.spotLightMap,We.pointShadowMap.value=k.state.pointShadowMap,We.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function Hl(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Gl(E,z){let H=fe.get(E);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function nf(E,z,H,V,k){z.isScene!==!0&&(z=be),S.resetTextureUnits();let xe=z.fog,Te=V.isMeshStandardMaterial?z.environment:null,Ne=T===null?A.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kn,ke=(V.isMeshStandardMaterial?O:y).get(V.envMap||Te),Ye=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),We=!!H.morphAttributes.position,mt=!!H.morphAttributes.normal,tn=!!H.morphAttributes.color,Tt=pi;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Tt=A.toneMapping);let kn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=kn!==void 0?kn.length:0,Je=fe.get(V),Ra=m.state.lights;if(ee===!0&&(le===!0||E!==v)){let on=E===v&&V.id===U;ve.setState(V,E,on)}let ft=!1;V.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ra.state.version||Je.outputColorSpace!==Ne||k.isBatchedMesh&&Je.batching===!1||!k.isBatchedMesh&&Je.batching===!0||k.isInstancedMesh&&Je.instancing===!1||!k.isInstancedMesh&&Je.instancing===!0||k.isSkinnedMesh&&Je.skinning===!1||!k.isSkinnedMesh&&Je.skinning===!0||k.isInstancedMesh&&Je.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Je.instancingColor===!1&&k.instanceColor!==null||Je.envMap!==ke||V.fog===!0&&Je.fog!==xe||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ve.numPlanes||Je.numIntersection!==ve.numIntersection)||Je.vertexAlphas!==Ye||Je.vertexTangents!==Ve||Je.morphTargets!==We||Je.morphNormals!==mt||Je.morphColors!==tn||Je.toneMapping!==Tt||re.isWebGL2===!0&&Je.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Je.__version=V.version);let Si=Je.currentProgram;ft===!0&&(Si=Br(V,z,k));let Vl=!1,qs=!1,Ca=!1,Ot=Si.getUniforms(),Ei=Je.uniforms;if(Z.useProgram(Si.program)&&(Vl=!0,qs=!0,Ca=!0),V.id!==U&&(U=V.id,qs=!0),Vl||v!==E){Ot.setValue(P,"projectionMatrix",E.projectionMatrix),Ot.setValue(P,"viewMatrix",E.matrixWorldInverse);let on=Ot.map.cameraPosition;on!==void 0&&on.setValue(P,Be.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&Ot.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ot.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,qs=!0,Ca=!0)}if(k.isSkinnedMesh){Ot.setOptional(P,k,"bindMatrix"),Ot.setOptional(P,k,"bindMatrixInverse");let on=k.skeleton;on&&(re.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ot.setValue(P,"boneTexture",on.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ot.setOptional(P,k,"batchingTexture"),Ot.setValue(P,"batchingTexture",k._matricesTexture,S));let Pa=H.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&re.isWebGL2===!0)&&He.update(k,H,Si),(qs||Je.receiveShadow!==k.receiveShadow)&&(Je.receiveShadow=k.receiveShadow,Ot.setValue(P,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ei.envMap.value=ke,Ei.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),qs&&(Ot.setValue(P,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&sf(Ei,Ca),xe&&V.fog===!0&&te.refreshFogUniforms(Ei,xe),te.refreshMaterialUniforms(Ei,V,$,X,Me),xs.upload(P,Hl(Je),Ei,S)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xs.upload(P,Hl(Je),Ei,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ot.setValue(P,"center",k.center),Ot.setValue(P,"modelViewMatrix",k.modelViewMatrix),Ot.setValue(P,"normalMatrix",k.normalMatrix),Ot.setValue(P,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let on=V.uniformsGroups;for(let Ia=0,of=on.length;Ia<of;Ia++)if(re.isWebGL2){let Wl=on[Ia];Xe.update(Wl,Si),Xe.bind(Wl,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function sf(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,z,H){fe.get(E.texture).__webglTexture=z,fe.get(E.depthTexture).__webglTexture=H;let V=fe.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){let H=fe.get(E);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,H=0){T=E,C=z,R=H;let V=!0,k=null,xe=!1,Te=!1;if(E){let ke=fe.get(E);ke.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(P.FRAMEBUFFER,null),V=!1):ke.__webglFramebuffer===void 0?S.setupRenderTarget(E):ke.__hasExternalTextures&&S.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);let Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Te=!0);let Ve=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?k=Ve[z][H]:k=Ve[z],xe=!0):re.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?k=fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[H]:k=Ve,b.copy(E.viewport),F.copy(E.scissor),q=E.scissorTest}else b.copy(ne).multiplyScalar($).floor(),F.copy(se).multiplyScalar($).floor(),q=ce;if(Z.bindFramebuffer(P.FRAMEBUFFER,k)&&re.drawBuffers&&V&&Z.drawBuffers(E,k),Z.viewport(b),Z.scissor(F),Z.setScissorTest(q),xe){let ke=fe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,ke.__webglTexture,H)}else if(Te){let ke=fe.get(E.texture),Ye=z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ke.__webglTexture,H||0,Ye)}U=-1},this.readRenderTargetPixels=function(E,z,H,V,k,xe,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){Z.bindFramebuffer(P.FRAMEBUFFER,Ne);try{let ke=E.texture,Ye=ke.format,Ve=ke.type;if(Ye!==Sn&&Ae.convert(Ye)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=Ve===hr&&(J.has("EXT_color_buffer_half_float")||re.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ve!==mi&&Ae.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===di&&(re.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-V&&H>=0&&H<=E.height-k&&P.readPixels(z,H,V,k,Ae.convert(Ye),Ae.convert(Ve),xe)}finally{let ke=T!==null?fe.get(T).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(E,z,H=0){let V=Math.pow(2,-H),k=Math.floor(z.image.width*V),xe=Math.floor(z.image.height*V);S.setTexture2D(z,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,E.x,E.y,k,xe),Z.unbindTexture()},this.copyTextureToTexture=function(E,z,H,V=0){let k=z.image.width,xe=z.image.height,Te=Ae.convert(H.format),Ne=Ae.convert(H.type);S.setTexture2D(H,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment),z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,V,E.x,E.y,k,xe,Te,Ne,z.image.data):z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,V,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Te,z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,V,E.x,E.y,Te,Ne,z.image),V===0&&H.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(E,z,H,V,k=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xe=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,ke=Ae.convert(V.format),Ye=Ae.convert(V.type),Ve;if(V.isData3DTexture)S.setTexture3D(V,0),Ve=P.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)S.setTexture2DArray(V,0),Ve=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);let We=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Tt=P.getParameter(P.UNPACK_SKIP_ROWS),kn=P.getParameter(P.UNPACK_SKIP_IMAGES),ut=H.isCompressedTexture?H.mipmaps[k]:H.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,E.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,E.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?P.texSubImage3D(Ve,k,z.x,z.y,z.z,xe,Te,Ne,ke,Ye,ut.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ve,k,z.x,z.y,z.z,xe,Te,Ne,ke,ut.data)):P.texSubImage3D(Ve,k,z.x,z.y,z.z,xe,Te,Ne,ke,Ye,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kn),k===0&&V.generateMipmaps&&P.generateMipmap(Ve),Z.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,Z.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gl?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===ia?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Oi:Zu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Oi?gt:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Wc=class extends Bi{};Wc.prototype.isWebGL1Renderer=!0;var Es=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new I,mr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gr=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hs,er=new I,us=new I,ds=new I,fs=new oe,tr=new oe,cd=new At,mo=new I,nr=new I,go=new I,Ru=new oe,mc=new oe,Cu=new oe,Vo=class extends Nt{constructor(e=new gr){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Go(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new mr(i,3,0,!1)),hs.setAttribute("uv",new mr(i,2,3,!1))}this.geometry=hs,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;_o(mo.set(-.5,-.5,0),ds,o,us,s,r),_o(nr.set(.5,-.5,0),ds,o,us,s,r),_o(go.set(.5,.5,0),ds,o,us,s,r),Ru.set(0,0),mc.set(1,0),Cu.set(1,1);let a=e.ray.intersectTriangle(mo,nr,go,!1,er);if(a===null&&(_o(nr.set(-.5,.5,0),ds,o,us,s,r),mc.set(0,1),a=e.ray.intersectTriangle(mo,go,nr,!1,er),a===null))return;let c=e.ray.origin.distanceTo(er);c<e.near||c>e.far||t.push({distance:c,point:er.clone(),uv:Ni.getInterpolation(er,mo,nr,go,Ru,mc,Cu,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _o(n,e,t,i,s,r){fs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(tr.x=r*fs.x-s*fs.y,tr.y=s*fs.x+r*fs.y):tr.copy(fs),n.copy(e),n.x+=tr.x,n.y+=tr.y,n.applyMatrix4(cd)}var _r=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pu=new I,Iu=new I,Du=new At,gc=new ur,Ao=new bs,Wo=class extends Nt{constructor(e=new yt,t=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Pu.fromBufferAttribute(t,s-1),Iu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Pu.distanceTo(Iu);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Du.copy(s).invert(),gc.copy(e.ray).applyMatrix4(Du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,h=new I,d=new I,u=new I,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let A=p,w=x-1;A<w;A+=f){let C=g.getX(A),R=g.getX(A+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,R),gc.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(u);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let A=p,w=x-1;A<w;A+=f){if(l.fromBufferAttribute(m,A),h.fromBufferAttribute(m,A+1),gc.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Ts=class extends hn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new oe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,c=new At;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends dn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xc=class extends Ar{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Al(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var xo=new I,_c=new Al,Ac=new Al,xc=new Al,qc=class extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),l=xo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),_c.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),Ac.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),xc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ac.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),xc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(_c.calc(c),Ac.calc(c),xc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function tA(n,e){let t=1-n;return t*t*e}function nA(n,e){return 2*(1-n)*n*e}function iA(n,e){return n*n*e}function rr(n,e,t,i){return tA(n,e)+nA(n,t)+iA(n,i)}function sA(n,e){let t=1-n;return t*t*t*e}function rA(n,e){let t=1-n;return 3*t*t*n*e}function oA(n,e){return 3*(1-n)*n*n*e}function aA(n,e){return n*n*n*e}function or(n,e,t,i,s){return sA(n,e)+rA(n,t)+oA(n,i)+aA(n,s)}var Xo=class extends dn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends dn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y),or(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends dn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends dn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends dn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends dn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y),rr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Lu(a,c.x,l.x,h.x,d.x),Lu(a,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Zc=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:qc,CubicBezierCurve:Xo,CubicBezierCurve3:Yc,EllipseCurve:Ar,LineCurve:qo,LineCurve3:Qc,QuadraticBezierCurve:Yo,QuadraticBezierCurve3:Jc,SplineCurve:Qo}),Kc=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Zc[s.type]().fromJSON(s))}return this}},Jo=class extends Kc{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Yo(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Xo(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Ar(e,t,i,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Zo=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ln=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=i/2,p=0;x(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function x(){let w=new I,C=new I,R=0,T=(t-e)/i;for(let U=0;U<=r;U++){let v=[],b=U/r,F=b*(t-e)+e;for(let q=0;q<=s;q++){let ie=q/s,D=ie*c+a,B=Math.sin(D),X=Math.cos(D);C.x=F*B,C.y=-b*i+m,C.z=F*X,d.push(C.x,C.y,C.z),w.set(B,T,X).normalize(),u.push(w.x,w.y,w.z),f.push(ie,1-b),v.push(g++)}_.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let b=_[v][U],F=_[v+1][U],q=_[v+1][U+1],ie=_[v][U+1];h.push(b,F,ie),h.push(F,q,ie),R+=6}l.addGroup(p,R,0),p+=R}function A(w){let C=g,R=new oe,T=new I,U=0,v=w===!0?e:t,b=w===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;let F=g;for(let q=0;q<=s;q++){let D=q/s*c+a,B=Math.cos(D),X=Math.sin(D);T.x=v*X,T.y=m*b,T.z=v*B,d.push(T.x,T.y,T.z),u.push(0,b,0),R.x=B*.5+.5,R.y=X*.5*b+.5,f.push(R.x,R.y),g++}for(let q=0;q<s;q++){let ie=C+q,D=F+q;w===!0?h.push(D,D+1,ie):h.push(D+1,D,ie),U+=3}l.addGroup(p,U,w===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class n extends Ln{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$c=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let A=new I,w=new I,C=new I;for(let R=0;R<t.length;R+=3)f(t[R+0],A),f(t[R+1],w),f(t[R+2],C),c(A,w,C,x)}function c(x,A,w,C){let R=C+1,T=[];for(let U=0;U<=R;U++){T[U]=[];let v=x.clone().lerp(w,U/R),b=A.clone().lerp(w,U/R),F=R-U;for(let q=0;q<=F;q++)q===0&&U===R?T[U][q]=v:T[U][q]=v.clone().lerp(b,q/F)}for(let U=0;U<R;U++)for(let v=0;v<2*(R-U)-1;v++){let b=Math.floor(v/2);v%2===0?(u(T[U][b+1]),u(T[U+1][b]),u(T[U][b])):(u(T[U][b+1]),u(T[U+1][b+1]),u(T[U+1][b]))}}function l(x){let A=new I;for(let w=0;w<r.length;w+=3)A.x=r[w+0],A.y=r[w+1],A.z=r[w+2],A.normalize().multiplyScalar(x),r[w+0]=A.x,r[w+1]=A.y,r[w+2]=A.z}function h(){let x=new I;for(let A=0;A<r.length;A+=3){x.x=r[A+0],x.y=r[A+1],x.z=r[A+2];let w=m(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;o.push(w,1-C)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){let A=o[x+0],w=o[x+2],C=o[x+4],R=Math.max(A,w,C),T=Math.min(A,w,C);R>.9&&T<.1&&(A<.2&&(o[x+0]+=1),w<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,A){let w=x*3;A.x=e[w+0],A.y=e[w+1],A.z=e[w+2]}function g(){let x=new I,A=new I,w=new I,C=new I,R=new oe,T=new oe,U=new oe;for(let v=0,b=0;v<r.length;v+=9,b+=6){x.set(r[v+0],r[v+1],r[v+2]),A.set(r[v+3],r[v+4],r[v+5]),w.set(r[v+6],r[v+7],r[v+8]),R.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),C.copy(x).add(A).add(w).divideScalar(3);let F=m(C);_(R,b+0,x,F),_(T,b+2,A,F),_(U,b+4,w,F)}}function _(x,A,w,C){C<0&&x.x===1&&(o[A]=x.x-1),w.x===0&&w.z===0&&(o[A]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var xr=class extends Jo{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Jo().fromJSON(s))}return this}},cA={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ld(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(i&&(r=fA(n,e,r,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)d=n[g],u=n[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return yr(r,o,t,a,c,f,0),o}};function ld(n,e,t,i,s){let r,o;if(s===SA(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Nu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Nu(r,n[r],n[r+1],o);return o&&ra(o,o.next)&&(Mr(o),o=o.next),o}function ki(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ra(t,t.next)||dt(t.prev,t,t.next)===0)){if(Mr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&AA(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?hA(n,i,s,r):lA(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Mr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=uA(ki(n),e,t),yr(n,e,t,i,s,r,2)):o===2&&dA(n,e,t,i,s,r):yr(ki(n),e,t,i,s,r,1);break}}}function lA(n){let e=n.prev,t=n,i=n.next;if(dt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&gs(s,a,r,c,o,l,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hA(n,e,t,i){let s=n.prev,r=n,o=n.next;if(dt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,_=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,p=jc(f,g,e,t,i),x=jc(_,m,e,t,i),A=n.prevZ,w=n.nextZ;for(;A&&A.z>=p&&w&&w.z<=x;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&gs(a,h,c,d,l,u,A.x,A.y)&&dt(A.prev,A,A.next)>=0||(A=A.prevZ,w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&gs(a,h,c,d,l,u,w.x,w.y)&&dt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&gs(a,h,c,d,l,u,A.x,A.y)&&dt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;w&&w.z<=x;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&gs(a,h,c,d,l,u,w.x,w.y)&&dt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function uA(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!ra(s,r)&&hd(s,i,i.next,r)&&vr(s,r)&&vr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Mr(i),Mr(i.next),i=n=r),i=i.next}while(i!==n);return ki(i)}function dA(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vA(o,a)){let c=ud(o,a);o=ki(o,o.next),c=ki(c,c.next),yr(o,e,t,i,s,r,0),yr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function fA(n,e,t,i){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=ld(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(yA(l));for(s.sort(pA),r=0;r<s.length;r++)t=mA(s[r],t);return t}function pA(n,e){return n.x-e.x}function mA(n,e){let t=gA(n,e);if(!t)return e;let i=ud(t,n);return ki(i,i.next),ki(t,t.next)}function gA(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&gs(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),vr(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&_A(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function _A(n,e){return dt(n.prev,n,e.prev)<0&&dt(e.next,n,n.next)<0}function AA(n,e,t,i){let s=n;do s.z===0&&(s.z=jc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xA(s)}function xA(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function jc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function yA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function vA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!MA(n,e)&&(vr(n,e)&&vr(e,n)&&bA(n,e)&&(dt(n.prev,n,e.prev)||dt(n,e.prev,e))||ra(n,e)&&dt(n.prev,n,n.next)>0&&dt(e.prev,e,e.next)>0)}function dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ra(n,e){return n.x===e.x&&n.y===e.y}function hd(n,e,t,i){let s=vo(dt(n,e,t)),r=vo(dt(n,e,i)),o=vo(dt(t,i,n)),a=vo(dt(t,i,e));return!!(s!==r&&o!==a||s===0&&yo(n,t,e)||r===0&&yo(n,i,e)||o===0&&yo(t,n,i)||a===0&&yo(t,e,i))}function yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vo(n){return n>0?1:n<0?-1:0}function MA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function vr(n,e){return dt(n.prev,n,n.next)<0?dt(n,e,n.next)>=0&&dt(n,n.prev,e)>=0:dt(n,e,n.prev)<0||dt(n,n.next,e)<0}function bA(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ud(n,e){let t=new el(n.i,n.x,n.y),i=new el(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Nu(n,e,t,i){let s=new el(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Mr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function el(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function SA(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ar=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Uu(e),Fu(i,e);let o=e.length;t.forEach(Uu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Fu(i,t[c]);let a=cA.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Uu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ko=class n extends yt{constructor(e=new xr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:EA,A,w=!1,C,R,T,U;p&&(A=p.getSpacedPoints(h),w=!0,u=!1,C=p.computeFrenetFrames(h,!1),R=new I,T=new I,U=new I),u||(m=0,f=0,g=0,_=0);let v=a.extractPoints(l),b=v.shape,F=v.holes;if(!ar.isClockWise(b)){b=b.reverse();for(let P=0,ae=F.length;P<ae;P++){let J=F[P];ar.isClockWise(J)&&(F[P]=J.reverse())}}let ie=ar.triangulateShape(b,F),D=b;for(let P=0,ae=F.length;P<ae;P++){let J=F[P];b=b.concat(J)}function B(P,ae,J){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ae,J)}let X=b.length,$=ie.length;function j(P,ae,J){let re,Z,Ee,fe=P.x-ae.x,S=P.y-ae.y,y=J.x-P.x,O=J.y-P.y,N=fe*fe+S*S,G=fe*O-S*y;if(Math.abs(G)>Number.EPSILON){let Q=Math.sqrt(N),_e=Math.sqrt(y*y+O*O),te=ae.x-S/Q,de=ae.y+fe/Q,we=J.x-O/_e,ve=J.y+y/_e,K=((we-te)*O-(ve-de)*y)/(fe*O-S*y);re=te+fe*K-P.x,Z=de+S*K-P.y;let Qe=re*re+Z*Z;if(Qe<=2)return new oe(re,Z);Ee=Math.sqrt(Qe/2)}else{let Q=!1;fe>Number.EPSILON?y>Number.EPSILON&&(Q=!0):fe<-Number.EPSILON?y<-Number.EPSILON&&(Q=!0):Math.sign(S)===Math.sign(O)&&(Q=!0),Q?(re=-S,Z=fe,Ee=Math.sqrt(N)):(re=fe,Z=S,Ee=Math.sqrt(N/2))}return new oe(re/Ee,Z/Ee)}let Y=[];for(let P=0,ae=D.length,J=ae-1,re=P+1;P<ae;P++,J++,re++)J===ae&&(J=0),re===ae&&(re=0),Y[P]=j(D[P],D[J],D[re]);let ne=[],se,ce=Y.concat();for(let P=0,ae=F.length;P<ae;P++){let J=F[P];se=[];for(let re=0,Z=J.length,Ee=Z-1,fe=re+1;re<Z;re++,Ee++,fe++)Ee===Z&&(Ee=0),fe===Z&&(fe=0),se[re]=j(J[re],J[Ee],J[fe]);ne.push(se),ce=ce.concat(se)}for(let P=0;P<m;P++){let ae=P/m,J=f*Math.cos(ae*Math.PI/2),re=g*Math.sin(ae*Math.PI/2)+_;for(let Z=0,Ee=D.length;Z<Ee;Z++){let fe=B(D[Z],Y[Z],re);ge(fe.x,fe.y,-J)}for(let Z=0,Ee=F.length;Z<Ee;Z++){let fe=F[Z];se=ne[Z];for(let S=0,y=fe.length;S<y;S++){let O=B(fe[S],se[S],re);ge(O.x,O.y,-J)}}}let W=g+_;for(let P=0;P<X;P++){let ae=u?B(b[P],ce[P],W):b[P];w?(T.copy(C.normals[0]).multiplyScalar(ae.x),R.copy(C.binormals[0]).multiplyScalar(ae.y),U.copy(A[0]).add(T).add(R),ge(U.x,U.y,U.z)):ge(ae.x,ae.y,0)}for(let P=1;P<=h;P++)for(let ae=0;ae<X;ae++){let J=u?B(b[ae],ce[ae],W):b[ae];w?(T.copy(C.normals[P]).multiplyScalar(J.x),R.copy(C.binormals[P]).multiplyScalar(J.y),U.copy(A[P]).add(T).add(R),ge(U.x,U.y,U.z)):ge(J.x,J.y,d/h*P)}for(let P=m-1;P>=0;P--){let ae=P/m,J=f*Math.cos(ae*Math.PI/2),re=g*Math.sin(ae*Math.PI/2)+_;for(let Z=0,Ee=D.length;Z<Ee;Z++){let fe=B(D[Z],Y[Z],re);ge(fe.x,fe.y,d+J)}for(let Z=0,Ee=F.length;Z<Ee;Z++){let fe=F[Z];se=ne[Z];for(let S=0,y=fe.length;S<y;S++){let O=B(fe[S],se[S],re);w?ge(O.x,O.y+A[h-1].y,A[h-1].x+J):ge(O.x,O.y,d+J)}}}ee(),le();function ee(){let P=s.length/3;if(u){let ae=0,J=X*ae;for(let re=0;re<$;re++){let Z=ie[re];De(Z[2]+J,Z[1]+J,Z[0]+J)}ae=h+m*2,J=X*ae;for(let re=0;re<$;re++){let Z=ie[re];De(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let ae=0;ae<$;ae++){let J=ie[ae];De(J[2],J[1],J[0])}for(let ae=0;ae<$;ae++){let J=ie[ae];De(J[0]+X*h,J[1]+X*h,J[2]+X*h)}}i.addGroup(P,s.length/3-P,0)}function le(){let P=s.length/3,ae=0;Me(D,ae),ae+=D.length;for(let J=0,re=F.length;J<re;J++){let Z=F[J];Me(Z,ae),ae+=Z.length}i.addGroup(P,s.length/3-P,1)}function Me(P,ae){let J=P.length;for(;--J>=0;){let re=J,Z=J-1;Z<0&&(Z=P.length-1);for(let Ee=0,fe=h+m*2;Ee<fe;Ee++){let S=X*Ee,y=X*(Ee+1),O=ae+re+S,N=ae+Z+S,G=ae+Z+y,Q=ae+re+y;Be(O,N,G,Q)}}}function ge(P,ae,J){c.push(P),c.push(ae),c.push(J)}function De(P,ae,J){be(P),be(ae),be(J);let re=s.length/3,Z=x.generateTopUV(i,s,re-3,re-2,re-1);Ue(Z[0]),Ue(Z[1]),Ue(Z[2])}function Be(P,ae,J,re){be(P),be(ae),be(re),be(ae),be(J),be(re);let Z=s.length/3,Ee=x.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Ue(Ee[0]),Ue(Ee[1]),Ue(Ee[3]),Ue(Ee[1]),Ue(Ee[2]),Ue(Ee[3])}function be(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function Ue(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return wA(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zc[s.type]().fromJSON(s)),new n(i,e.options)}},EA={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,c),new oe(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new oe(o,1-c),new oe(l,1-d),new oe(u,1-g),new oe(_,1-p)]:[new oe(a,1-c),new oe(h,1-d),new oe(f,1-g),new oe(m,1-p)]}};function wA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $o=class n extends yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=e,u=(t-e)/s,f=new I,g=new oe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let x=p+m,A=x,w=x+i+1,C=x+i+2,R=x+1;a.push(A,w,R),a.push(w,C,R)}}this.setIndex(a),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Rs=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,u=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let x=[],A=p/i,w=0;p===0&&o===0?w=.5/t:p===i&&c===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){let R=C/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(R+w,1-A),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let A=h[p][x+1],w=h[p][x],C=h[p+1][x],R=h[p+1][x+1];(p!==0||o>0)&&f.push(A,w,R),(p!==i-1||c<Math.PI)&&f.push(w,C,R)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},jo=class n extends $c{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var xi=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Mo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function TA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tl=class extends Cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=e,a=2*t-i;break;case Hh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:o=e,c=2*i-t;break;case Hh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,x=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*_+.5*g,w=f*m-f*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+x*o[l+C]+A*o[c+C]+w*o[d+C];return r}},nl=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},il=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&TA(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Eo;var Hi=class extends En{};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=So;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends En{};sl.prototype.ValueTypeName="color";var rl=class extends En{};rl.prototype.ValueTypeName="number";var ol=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ai.slerpFlat(r,0,o,l-a,o,l,c);return r}},br=class extends En{InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=Eo;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends En{};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=So;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends En{};al.prototype.ValueTypeName="vector";var cl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},RA=new cl,ll=class{constructor(e){this.manager=e!==void 0?e:RA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var ea=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ps=class extends ea{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yc=new At,Ou=new I,zu=new I,hl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ul=class extends hl{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xl="\\[\\]\\.:\\/",CA=new RegExp("["+xl+"]","g"),yl="[^"+xl+"]",PA="[^"+xl.replace("\\.","")+"]",IA=/((?:WC+[\/:])*)/.source.replace("WC",yl),DA=/(WCOD+)?/.source.replace("WCOD",PA),LA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),NA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),UA=new RegExp("^"+IA+DA+LA+NA+"$"),FA=["material","materials","bones","map"],dl=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CA,"")}static parseTrackName(e){let t=UA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);FA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=dl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bx=new Float32Array(1);var ta=class{constructor(e,t,i=0,s=1/0){this.ray=new ur(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return fl(e,this,i,t),i.sort(Bu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fl(e[s],this,i,t);return i.sort(Bu),i}};function Bu(n,e){return n.distance-e.distance}function fl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)fl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function oa(n,{reducedMotion:e=!1,onImpact:t}={}){let i=new Map,s=new Map,r=new Set,o=new ti(.105,.42,10);o.rotateX(Math.PI/2);let a=new ti(.075,.28,8);a.rotateX(-Math.PI/2);let c=new $o(.15,.2,24),l=new jo(.08),h=new xi({color:"#b86436",metalness:.5,roughness:.4}),d=new Ht({color:"#ffd374"}),u=new Ht({color:"#ffd38a",transparent:!0,side:Mn,depthWrite:!1}),f=new Ht({color:"#efa65a",transparent:!0});function g(p,x){p.position.set(x.x,x.y,x.z)}function _(p,x,A){let w=new Set;for(let C of p){w.add(C.id);let R=i.get(C.id);if(!R){R=new ht,R.add(new _t(o,h));let v=new _t(a,d);v.position.z=.3,R.add(v),n.add(R),i.set(C.id,R)}g(R,C.position);let T=C.velocity,U=new I(T.x,T.y,T.z);U.lengthSq()&&R.quaternion.setFromUnitVectors(new I(0,0,-1),U.normalize())}for(let[C,R]of i)w.has(C)||(n.remove(R),i.delete(C));for(let C of x){if(r.has(C.id))continue;r.add(C.id);let R=new ht,T=u.clone(),U=new _t(c,T);if(R.add(U),!e)for(let v=0;v<6;v++){let b=new _t(l,f.clone());b.userData.direction=new I(Math.cos(v*Math.PI/3),.35+v%2*.3,Math.sin(v*Math.PI/3)),R.add(b)}g(R,C.position),n.add(R),s.set(C.id,{group:R,age:0}),t?.(C)}for(let[C,R]of s){R.age+=Math.max(0,A);let T=Math.min(1,R.age/.55);R.group.children[0].scale.setScalar(1+T*6),R.group.children[0].material.opacity=.85*(1-T);for(let U of R.group.children.slice(1))U.position.copy(U.userData.direction).multiplyScalar(T*1.4),U.material.opacity=1-T;if(T>=1){n.remove(R.group);for(let U of R.group.children)U.material.dispose();s.delete(C)}}}function m(){for(let p of i.values())n.remove(p);for(let p of s.values()){n.remove(p.group);for(let x of p.group.children)x.material.dispose()}i.clear(),s.clear(),r.clear();for(let p of[o,a,c,l,h,d,u,f])p.dispose()}return{update:_,dispose:m}}function OA(n,e,t){let i=Math.hypot(n,e);if(!i)return{x:0,y:0,right:0,forward:0};let s=Math.max(0,(Math.min(1,i/t)-.12)/.88),r=Math.min(i,t);return{x:n/i*r,y:e/i*r,right:n/i*s,forward:-e/i*s}}function aa({on:n,canvas:e,active:t,look:i,fire:s,clearInput:r,walk:o,stickRadius:a}){let c=null,l=null,h=null;function d(){let u=[l,h];c=l=h=null;for(let f of u)f&&e.hasPointerCapture?.(f.id)&&e.releasePointerCapture(f.id);o?.(0,0),r()}n(e,"contextmenu",u=>u.preventDefault()),n(e,"mousedown",u=>{!t()||u.button!==0&&u.button!==2||(u.preventDefault(),e.focus({preventScroll:!0}),u.button===0?s(!0):c={x:u.clientX,y:u.clientY})}),n(window,"mousemove",u=>{if(!(!t()||!c)){if(!(u.buttons&2)){c=null;return}i(u.clientX-c.x,u.clientY-c.y),c.x=u.clientX,c.y=u.clientY}}),n(window,"mouseup",u=>{u.button===0&&s(!1),u.button===2&&(c=null)}),n(e,"pointerdown",u=>{if(!t()||u.pointerType==="mouse")return;let f=e.getBoundingClientRect(),g=!!o&&u.clientX<f.left+f.width/2;if(g?h:l)return;u.preventDefault(),e.setPointerCapture(u.pointerId);let _={id:u.pointerId,x:u.clientX,y:u.clientY};g?(h=_,o(0,0,{x:0,y:0},_)):l=_}),n(window,"pointermove",u=>{if(t())if(h?.id===u.pointerId){let f=OA(u.clientX-h.x,u.clientY-h.y,a());o(f.right,f.forward,f,h)}else l?.id===u.pointerId&&(i((u.clientX-l.x)*2.2,(u.clientY-l.y)*2.2),l.x=u.clientX,l.y=u.clientY)});for(let u of["pointerup","pointercancel","lostpointercapture"])n(e,u,f=>{h?.id===f.pointerId&&(h=null,o(0,0)),l?.id===f.pointerId&&(l=null)});return{clear:d}}function fd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new yt,l=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=dd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let g=dd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function dd(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new xt(o,t,i);return s!==void 0&&(c.gpuType=s),c}var Er=new I;function fn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Er.copy(e),Er[i]=0,Er.normalize();let l=.5*o/(o+a),h=1-Er.angleTo(n)/c;return Math.sign(Er[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Ls=class extends un{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new I,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=fn(g,c,"z","y",r,i),u[p+1]=1-fn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),u[p+0]=1-fn(g,c,"z","y",r,i),u[p+1]=1-fn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),u[p+0]=1-fn(g,c,"x","z",r,e),u[p+1]=fn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),u[p+0]=1-fn(g,c,"x","z",r,e),u[p+1]=1-fn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),u[p+0]=1-fn(g,c,"x","y",r,e),u[p+1]=1-fn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),u[p+0]=fn(g,c,"x","y",r,e),u[p+1]=1-fn(g,c,"y","x",r,t);break}}};var pd={station:["2f4zG80EcgAzG5oF2f5mGpoF2f4zG80E2f5mGpoFP/0zG5oF7wPXGZoFKwIzG5oF7wMzGz0EtAUzG5oF7wPXGZoF7wMzGz0EAAczA5oFVwXXAZoFVwUzAz0EVwXXAZoFrgMzA5oFVwUzAz0E9wTXGWb61wYzG2b69wQzG8P7FgMzG2b69wTXGWb69wQzG8P71fszA2b6jf7XAWb6jf4zA8P7jf7XAWb6RQEzA2b6jf4zA8P7APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAGb6zfQzA2b6APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAJoFzfQzA5oFzfQAGGb6zfQzG2b6APQAGDP7APQzGzP7APQAGM0EAPQzG80EzfQAGJoFzfQzG5oFAPQAGDP7APQzGzP7APQAGM0EAPQzG80EcgAzG5oFKwIzG5oF2f5mGpoF7wPXGZoFzfQzG5oFP/0zG5oFzfQAGJoFMwsAGJoFMwszG5oFtAUzG5oFAAwzA80EAAwAAM0EMwszA5oFMwsAAJoFAAwzAzP7AAwzA80EMwszA2b6MwszA5oFZgozAwD8RQEzA2b6jf4zA8P7ZgozAwAEAAczA5oFVwUzAz0EmvUzAwD81fszA2b6mvUzAwAEzfQzA2b6rgMzA5oFzfQzA5oFAPQzAzP7APQzA80EzfQAAGb6MwsAAGb6zfQzA2b6jf7XAWb61fszA2b6MwszA2b6RQEzA2b6AAwzAzP7AAwAADP7AAwzA80EAAwAAM0EAAwzG80EAAwAGM0EMwszG5oFMwsAGJoFAAwzGzP7AAwAGDP7AAwzG80EAAwAGM0EAAwzGzP7AAwzG80EMwszG2b6MwszG5oF1wYzG2b6tAUzG5oF9wQzG8P77wMzGz0EFgMzG2b6KwIzG5oFzfQzG2b6cgAzG5oF2f4zG80EP/0zG5oFzfQzG5oFAPQzGzP7APQzG80EMwszG2b6MwsAGGb6AAwzGzP7AAwAGDP7AAwAGM0EAAwAGDP7MwsAGJoFMwsAGGb6ZgoAGAAEzfQAGJoFZgoAGAD8mvUAGAAEzfQAGGb6mvUAGAD8APQAGM0EAPQAGDP7zfQAGGb6MwsAGGb6zfQzG2b69wTXGWb6FgMzG2b6MwszG2b61wYzG2b6AAwAAM0EAAwAADP7MwsAAJoFMwsAAGb6zfQAAJoFzfQAAGb6APQAAM0EAPQAADP7MwszA2b6MwsAAGb6AAwzAzP7AAwAADP7AAczA5oFMwszA5oFVwXXAZoFMwsAAJoFzfQAAJoFzfQzA5oFrgMzA5oFmvUzAwD8mvUAGAD8mvUzAwAEmvUAGAAEZgoAGAD8ZgozAwD8ZgoAGAAEZgozAwAEmvUzAwD8ZgozAwD8mvUAGAD8ZgoAGAD8ZgoAGAD8ZgoAGAAEmvUAGAD8mvUAGAAEZgozAwAEmvUzAwAEZgoAGAAEmvUAGAAEOQQuBgAEOQTrBwAEnAQuBoEEnATrB4EEsQYuBoEEnAQuBoEEsQbrB4EEnATrB4EEEwcuBgAEOQQuBgAEsQYuBoEEnAQuBoEEEwfrBwAEEwcuBgAEsQbrB4EEsQYuBoEEEwfrBwAEsQbrB4EEOQTrBwAEnATrB4EE+ffECAAE+feACgAEW/jECIEEW/iACoEEcPrECIEEW/jECIEEcPqACoEEW/iACoEE0vrECAAE+ffECAAEcPrECIEEW/jECIEE0vqACgAE0vrECAAEcPqACoEEcPrECIEE0vqACgAEcPqACoEE+feACgAEW/iACoEE5PlOCwAE5PkKDQAERvpOC4EERvoKDYEEW/xOC4EERvpOC4EEW/wKDYEERvoKDYEEvfxOCwAE5PlOCwAEW/xOC4EERvpOC4EEvfwKDQAEvfxOCwAEW/wKDYEEW/xOC4EEvfwKDQAEW/wKDYEE5PkKDQAERvoKDYEErAEIFAAErAHFFQAEDgIIFIEEDgLFFYEEIwQIFIEEDgIIFIEEIwTFFYEEDgLFFYEEhQQIFAAErAEIFAAEIwQIFIEEDgIIFIEEhQTFFQAEhQQIFAAEIwTFFYEEIwQIFIEEhQTFFQAEIwTFFYEErAHFFQAEDgLFFYEEaP6UBwD8aP5RCQD8Bv6UB3/7Bv5RCX/78fuUB3/7Bv6UB3/78ftRCX/7Bv5RCX/7j/uUBwD8aP6UBwD88fuUB3/7Bv6UB3/7j/tRCQD8j/uUBwD88ftRCX/78fuUB3/7j/tRCQD88ftRCX/7aP5RCQD8Bv5RCX/7ffwkCgD8ffzgCwD8G/wkCn/7G/zgC3/7BfokCn/7G/wkCn/7BfrgC3/7G/zgC3/7o/kkCgD8ffwkCgD8BfokCn/7G/wkCn/7o/ngCwD8o/kkCgD8BfrgC3/7BfokCn/7o/ngCwD8BfrgC3/7ffzgCwD8G/zgC3/7ega4EQD8egZ1EwD8GAa4EX/7GAZ1E3/7AwS4EX/7GAa4EX/7AwR1E3/7GAZ1E3/7oQO4EQD8ega4EQD8AwS4EX/7GAa4EX/7oQN1EwD8oQO4EQD8AwR1E3/7AwS4EX/7oQN1EwD8AwR1E3/7egZ1EwD8GAZ1E3/7ZgrPCIwAZgqLCowA5wrPCCoA5wqLCioA5wrPCBT+5wrPCCoA5wqLChT+5wqLCioAZgrPCLL9ZgrPCIwA5wrPCBT+5wrPCCoAZgqLCrL9ZgrPCLL95wqLChT+5wrPCBT+ZgqLCrL95wqLChT+ZgqLCowA5wqLCioAmvXWEfL+mvWTE/L+GfXWEVT/GfWTE1T/GfXWEWkBGfXWEVT/GfWTE2kBGfWTE1T/mvXWEcsBmvXWEfL+GfXWEWkBGfXWEVT/mvWTE8sBmvXWEcsBGfWTE2kBGfXWEWkBmvWTE8sBGfWTE2kBmvWTE/L+GfWTE1T/","AACCWoJaVtVVVVVVAACCWoJaAACCWoJaAACCWoJaqipVVVVVAACCWoJaKT2CT4JPAACCWoJa18KCT4JPAACCWoJaAACCWoJa0b9OTk5OAACCWoJaAACCWoJaAACCWoJaL0BOTk5OAACCWoJaAACCWn6losWMUHSvAACCWn6lXjqMUHSvAACCWn6lAACCWn6lqipVVauqAACCWn6lAACCWn6lAACCWn6lVtVVVauqAACCWn6lv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2Bc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2v4kAAAXPv4kAAAXPv4kAAPswv4kAAPswAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/Bc8AAEF2AAAAAP9/Bc8AAEF2+zAAAEF2+zAAAEF2AAAAAP9/QXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAQXYAAAXPQXYAAAXPQXYAAPswQXYAAPswQXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2QXYAAAXPQXYAAAXPQXYAAPswQXYAAPswAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAAAAP9/+zAAAEF2AAAAAP9/+zAAAEF2Bc8AAEF2Bc8AAEF2AAAAAP9/AYAAAAAAAYAAAAAAAYAAAAAAAYAAAAAA/38AAAAA/38AAAAA/38AAAAA/38AAAAAAAAAAAGAAAAAAAGAAAAAAAGAAAAAAAGAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/GJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAc00AAOhlc00AAOhlqnIAAOA4qnIAAOA4qnIAACDHqnIAAOA4qnIAACDHqnIAAOA4AAABgAAAAAABgAAAAAABgAAAAAABgAAAc00AABiac00AABiaqnIAACDHqnIAACDHAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAjbIAABiajbIAABiaVo0AACDHVo0AACDHVo0AAOA4Vo0AACDHVo0AAOA4Vo0AACDHAAABgAAAAAABgAAAAAABgAAAAAABgAAAjbIAAOhljbIAAOhlVo0AAOA4Vo0AAOA4AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA","OD1VOD1VNzxUOD1VNzxUOD1VNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VNzxUNjtUOD1VOD1VNDlQNDlQOD1VOD1VHSAzGh4wHSAzGh4wHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzGh4wGh4wHSAzHB8yHSAzHSAzHSAzHSAzGh4wHSAzGh4wOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VNDlQOD1VNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQOD1VNjtUOD1VOD1VOD1VGh4wGh4wGh4wGh4wGh4wGh4wGh4wGh4wHSAzGh4wHSAzGh4wHSAzHSAzHB8yGh4wGh4wHSAzHSAzrwsM6x8NrwsM6x8N6x8NrwsM6x8NrwsMrwsMrwsM6x8N6x8N6x8N6x8N6x8N6x8NrwsMrwsM6x8N6x8NuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsN","AgABAAAABQAEAAMACAAHAAYACwAKAAkADgANAAwAEQAQAA8AFAATABIAFwAWABUAGgAZABgAHQAcABsAIAAfAB4AHwAgACEAJAAjACIAIwAkACUAKAAnACYAJwAoACkALAArACoAKwAsAC0AMAAvAC4ALwAwADEANAAzADIAMwA0ADUAOAA3ADYANwA4ADkAOgA5ADgAOgA4ADsAOQA6ADwAPQA5ADwAOQA9AD4AOQA+AD8AQgBBAEAAQQBCAEMARgBFAEQARQBGAEcARwBGAEgASABGAEkASABJAEoASwBHAEgARwBLAEwATABLAE0ASABKAE4ATgBKAE8ATQBLAFAATgBPAFEATgBRAFAATQBQAFIAUgBQAFMAUwBQAFEAUwBRAFQAUwBUAFUAWABXAFYAVwBYAFkAWQBYAFoAWQBbAFcAWwBZAFwAXwBeAF0AXgBfAGAAYwBiAGEAYgBjAGQAZwBmAGUAZgBnAGgAawBqAGkAagBrAGwAbABrAG0AbABtAG4AbgBtAG8AbgBvAHAAcABvAHEAcABxAHIAcgBxAHMAcgBzAHQAdABzAHUAdQBzAHYAdgBzAHcAdwBzAHgAdwB4AHkAfAB7AHoAewB8AH0AgAB/AH4AfwCAAIEAgQCAAIIAggCAAIMAhACBAIIAggCDAIUAgQCEAIYAhQCDAIcAhgCEAIcAhgCHAIMAhgCDAIgAhgCIAIkAjACLAIoAiwCMAI0AjQCMAI4AjQCPAIsAjwCNAJAAkwCSAJEAkgCTAJQAlACTAJUAlACVAJYAlgCVAJcAlgCXAJgAmwCaAJkAmgCbAJwAnwCeAJ0AnwCgAJ4AoACfAKEAnwCiAKEAogCfAKMApgClAKQApQCmAKcAqgCpAKgAqQCqAKsArgCtAKwArQCuAK8AsgCxALAAsQCyALMAtgC1ALQAtQC2ALcAugC5ALgAuQC6ALsAvgC9ALwAvQC+AL8AwgDBAMAAwQDCAMMAxgDFAMQAxQDGAMcAygDJAMgAyQDKAMsAzgDNAMwAzQDOAM8A0gDRANAA0QDSANMA1gDVANQA1QDWANcA2gDZANgA2QDaANsA3gDdANwA3QDeAN8A4gDhAOAA4QDiAOMA5gDlAOQA5QDmAOcA6gDpAOgA6QDqAOsA7gDtAOwA7QDuAO8A8gDxAPAA8QDyAPMA9gD1APQA9QD2APcA+gD5APgA+QD6APsA/gD9APwA/QD+AP8AAgEBAQABAQECAQMBBgEFAQQBBQEGAQcBCgEJAQgBCQEKAQsBDgENAQwBDQEOAQ8BEgERARABEQESARMBFgEVARQBFQEWARcBGgEZARgBGQEaARsBHgEdARwBHQEeAR8BIgEhASABIQEiASMBJgElASQBJQEmAScBKgEpASgBKQEqASsBLgEtASwBLQEuAS8BMgExATABMQEyATMBNgE1ATQBNQE2ATcBOgE5ATgBOQE6ATsBPgE9ATwBPQE+AT8BQgFBAUABQQFCAUMBRgFFAUQBRQFGAUcBSgFJAUgBSQFKAUsBTgFNAUwBTQFOAU8BUgFRAVABUQFSAVMBVgFVAVQBVQFWAVcBWgFZAVgBWQFaAVsBXgFdAVwBXQFeAV8BYgFhAWABYQFiAWMBZgFlAWQBZQFmAWcBagFpAWgBaQFqAWsB"]};var la={sky:"#cadcde",fog:"#c8d5ca",floor:"#a69780",wall:"#c7a27d",inlay:"#87765c",trim:"#efe0be",edge:"#ab7e62",cover:"#a48762",door:"#50726b",cold:"#465750",bright:"#ffe3b6",landmark:"#477b70"},ha={sky:"#c1d3de",fog:"#b5c5c5",floor:"#8f9b9c",wall:"#849c9d",inlay:"#405c67",trim:"#d6bf89",edge:"#687f89",cover:"#93896b",door:"#4e6b77",cold:"#453f35",bright:"#f0edda",landmark:"#b07c40"},Ml={sky:"#d2dace",fog:"#c9d3bc",floor:"#90967d",wall:"#abb191",inlay:"#747c62",trim:"#e0d6b2",edge:"#8c9c76",cover:"#827a58",door:"#686f53",cold:"#4a594d",bright:"#fff4cc",landmark:"#955a40"},zA=[la,ha,Ml];function BA(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ts(i);return s.colorSpace=gt,s.wrapS=s.wrapT=cr,s.anisotropy=4,s}function ca(n,e){return BA(256,256,t=>{t.fillStyle=n[e],t.fillRect(0,0,256,256);let i=62431,s=()=>(i=i*1664525+1013904223>>>0,i/4294967296),r="rgba(40,44,38,.32)",o="rgba(255,245,219,.27)";if(e==="door"||e==="wall"&&n===ha){for(let a=0;a<256;a+=16){let c=t.createLinearGradient(a,0,a+16,0);c.addColorStop(0,r),c.addColorStop(.27,o),c.addColorStop(.56,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(a,0,16,256)}t.fillStyle=n.inlay,t.fillRect(0,0,256,8),t.fillRect(0,244,256,12),e==="door"&&(t.fillStyle=n.trim,t.fillRect(18,121,220,2),t.fillRect(18,156,220,2),t.strokeStyle=n.inlay,t.lineWidth=8,t.strokeRect(15,15,226,226))}else{let a=e==="cover"?32:e==="wall"?42:64;for(let c=0;c<256;c+=a){let l=Math.floor(c/a)%2?32:0;if(t.fillStyle=r,t.fillRect(0,c,256,3),t.fillStyle=o,t.fillRect(0,c+3,256,2),e!=="cover")for(let h=l;h<256;h+=64)t.fillStyle=r,t.fillRect(h,c,2,a),t.fillStyle=o,t.fillRect(h+2,c+3,1,a-4)}if(e==="cover"){t.fillStyle=n.inlay,t.fillRect(16,0,13,256),t.fillRect(227,0,13,256);for(let c of[20,231])for(let l of[19,79,150,228])t.fillStyle=o,t.fillRect(c,l,5,5)}}for(let a=0;a<860;a++){let c=s()*256,l=s()*256;t.fillStyle=s()>.58?"rgba(255,250,221,.075)":"rgba(40,34,28,.11)",t.fillRect(c,l,(1+s()*2)*(e==="cover"?3:1),1+s()*2)}if(n===Ml&&e==="wall"){let a=t.createLinearGradient(0,256,0,158);a.addColorStop(0,"#54684650"),a.addColorStop(1,"#54684600"),t.fillStyle=a,t.fillRect(0,158,256,98)}})}function Gt(n,e={}){return new xi({color:n,roughness:.84,...e})}function Ke(n,e,t,i,s,r){return new un(n,e,t).translate(i,s,r)}function Jt(n,e,t,i=!0,s=!0){let r=new _t(n,e);return r.castShadow=i,r.receiveShadow=s,t.add(r),r}function wr(n){if(n.length===1)return n[0];let t=n.some(s=>!s.index)?n.map(s=>s.index?s.toNonIndexed():s):n,i=fd(t);return new Set([...n,...t]).forEach(s=>s.dispose()),i}function kA(n){let e=new Map;return{add(t,i){e.has(i)||e.set(i,[]),e.get(i).push(t)},finish(){for(let[t,i]of e)Jt(wr(i),t,n)}}}function HA(n,e,t){let i=n.getAttribute("uv");for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*e,i.getY(s)*t);return n}var vl=new Map;function GA(n){if(!vl.has(n)){let[r,o,a,c]=pd[n].map(l=>Uint8Array.from(atob(l),h=>h.charCodeAt(0)));vl.set(n,{positions:Float32Array.from(new Int16Array(r.buffer),l=>l/4096),normals:new Int16Array(o.buffer),colors:a,indices:new Uint16Array(c.buffer)})}let{positions:e,normals:t,colors:i,indices:s}=vl.get(n);return new yt().setAttribute("position",new xt(e.slice(),3)).setAttribute("normal",new xt(t.slice(),3,!0)).setAttribute("color",new xt(i,3,!0)).setIndex(new xt(s,1))}function VA(n,e,t){return n.w>=n.d?[n.x+e,n.z+t*Math.sign(-n.z||1)]:[n.x+t*Math.sign(-n.x||1),n.z+e]}function WA(n,e,t,i,s,r){let o=e.w>=e.d,a=Math.max(e.w,e.d),c=Math.min(e.w,e.d),l=(h,d,u,f,g,_,m)=>{let[p,x]=VA(e,h,u);n.add(Ke(o?f:_,g,o?_:f,p,d,x),m)};if(!s){l(0,e.h-.07,0,a+.035,.08,c+.03,i.trim),l(0,.08,0,a+.035,.09,c+.03,i.inlay);for(let h of[-a*.34,a*.34])l(h,e.h*.51,c*.49,.09,e.h*.8,.042,i.inlay);return}if(l(0,e.h-.07,0,a+.045,.13,c+.045,i.trim),l(0,.29,0,a,.52,c+.04,i.inlay),l(0,.58,0,a,.07,c+.06,i.trim),t===ha)for(let h=-a/2+.14;h<a/2;h+=5)l(h,(e.h+.6)/2,c*.5,.13,e.h-.6,.07,i.inlay),l(h,e.h-.34,c*.54,.42,.14,.065,i.landmark);else if(t===la)for(let h=-a/2+1.35;h<a/2-.75;h+=3.2){l(h,e.h-1.05,c*.5,.91,1.16,.064,i.trim),l(h,e.h-1.05,c*.54,.71,.9,.06,i.inlay);for(let d=0;d<4;d++)l(h,e.h-.75-d*.18,c*.57,.66,.033,.045,i.edge);l(h,e.h-1.63,c*.55,1.02,.08,.14,i.trim)}else if(r)for(let h=-a/2+.55;h<a/2;h+=1.55)l(h,e.h+.25,0,.62,.5,c,i.edge)}function XA(n,e){for(let s=0;s<7;s++){let r=-19+s*6.25,o=[7,10,8,13,10,8,7][s];n.add(Ke(5.95,o,4,r,o/2,-21.3),e.edge),n.add(Ke(6.2,.25,4.1,r,o,-21.3),e.trim);for(let a of[-1.6,0,1.6])s===3&&a===0||(n.add(Ke(.72,1.23,.04,r+a,o-1.4,-19.29),e.inlay),n.add(Ke(1.04,.12,.15,r+a,o-2.04,-19.22),e.trim))}let t=new Ln(.72,.72,.15,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.25),i=new Ln(.6,.6,.16,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.19);n.add(t,e.inlay),n.add(i,e.trim),n.add(Ke(.43,.075,.04,-.09,11.25,-19.08),e.inlay),n.add(Ke(.075,.33,.04,-.25,11.4,-19.08),e.inlay)}function qA(n,e){for(let t of[-14,0,14]){let i=t===0,s=i?9.4:7.4;n.add(Ke(13.45,s,5,t,s/2,-22),e.edge),n.add(Ke(13.65,.3,5.2,t,s,-22),e.inlay),n.add(Ke(11,.34,.08,t,s-1.15,-19.46),e.landmark);for(let r of[-4,-2,0,2,4])n.add(Ke(1.33,.76,.1,t+r,s-.57,-19.45),e.trim);if(i){n.add(Ke(9.8,1.45,2.6,t,s+.69,-22),e.edge),n.add(Ke(10.05,.2,2.85,t,s+1.46,-22),e.inlay);for(let r of[-3.5,3.5])n.add(new Ln(.32,.43,2,12).translate(t+r,s+2.1,-22),e.inlay)}}}function YA(n,e){n.add(Ke(38.5,6.7,4,0,3.35,-23),e.edge),n.add(Ke(38.5,.17,4.1,0,6.62,-23),e.trim);for(let t=-17.8;t<18.8;t+=1.65)n.add(Ke(.76,.59,1.18,t,6.96,-21.5),e.edge);for(let t of[-12.7,0,12.7]){let i=t===0?11.5:9;n.add(new Ln(2.35,2.58,i,14).translate(t,i/2,-22),e.edge),n.add(new Ln(2.5,2.43,.25,14).translate(t,i-.48,-22),e.trim),n.add(new ti(2.65,2.8,14).translate(t,i+1.33,-22),e.landmark),n.add(Ke(.53,1.18,.075,t,i-1.55,-19.62),e.inlay),n.add(Ke(.83,.11,.16,t,i-2.16,-19.55),e.trim)}}function QA(n,e,t,i){t===la&&XA(n,i),t===ha&&qA(n,i),t===Ml&&YA(n,i);for(let s of[-1,1]){let r=GA("station").scale(.95,1.45,.95).translate(s*2.5,4.92,-18.3);Jt(r,Gt(t.trim,{vertexColors:!0}),e,!1)}}function ua(n,e,t,i){let s=zA[i-1]??la,r=kA(n),o=Object.fromEntries(["trim","inlay","edge","landmark"].map(T=>[T,Gt(s[T])])),a=ca(s,"floor");a.repeat.set(10,10),Jt(new pr(38,38).rotateX(-Math.PI/2),Gt("#fff8ed",{map:a}),n,!1);let c=Gt(s.landmark);for(let T of[-1,1])for(let U=12;U>=-12;U-=2.4)r.add(Ke(.086,.009,1.5,T*1.15,.006,U),c);let l=Gt("#ffffff",{map:ca(s,"wall")}),h=Gt("#ffffff",{map:ca(s,"cover")}),d=Gt("#ffffff"),u=e.map((T,U)=>{let v=T.h>=1.5,b=Math.max(1,Math.round(Math.max(T.w,T.d)/3.7)),F=HA(Ke(T.w,T.h,T.d,T.x,T.h*.5,T.z),b,1);r.add(F,v?l:h),WA(r,T,s,o,v,U<4);let q=Jt(Ke(T.w,T.h,T.d,T.x,T.h*.5,T.z),d,n,!1,!1);return q.visible=!1,q}),f=Gt("#ffffff",{map:ca(s,"door")}),g=t.map(T=>{let U=new ht;U.position.set(T.x,T.h/2,T.z),n.add(U);let v=Jt(new un(T.w,T.h,T.d),f,U),b=T.w>T.d,F=[Ke(T.w+.035,.11,T.d+.035,0,-T.h/2+.12,0),Ke(T.w+.035,.07,T.d+.035,0,T.h/2-.15,0)];for(let ie of[-1,1])F.push(Ke(b?.08:T.w+.03,T.h-.18,b?T.d+.03:.08,b?ie*(T.w/2-.16):0,0,b?0:ie*(T.d/2-.16)));Jt(wr(F),o.trim,U);let q=Jt(Ke(b?.24:T.w+.04,.075,b?T.d+.04:.24,0,.8,0),new Ht({color:"#e6ad65"}),U,!1,!1);return{d:T,mesh:v,group:U,status:q}}),_=new ht;_.position.set(0,0,-13),n.add(_);let m=Gt("#435c60",{metalness:.38,roughness:.58}),p=[Ke(1.48,.09,1.06,0,.05,0),new Ls(1.3,.62,.88,2,.055).translate(0,.37,0),Ke(1.15,.065,.72,0,.74,0),Ke(.12,.13,1,0,.12,0)];Jt(wr(p),m,_);let x=Jt(new Ls(.67,.18,.075,2,.02).translate(0,.43,.46),Gt("#d2a35f",{metalness:.4}),_);x.name="device-case";let A=Jt(Ke(.66,.076,.43,0,.802,0),Gt("#213238",{metalness:.36}),_);A.rotation.x=.025;let w=Jt(Ke(.54,.024,.36,0,.85,.015),new Ht({color:"#edb663"}),_,!1,!1),C=Jt(new Rs(.044,10,6).translate(.31,.56,.457),new Ht({color:"#edb663"}),_,!1,!1),R=Jt(new Zo(1.17,36).rotateX(-Math.PI/2),Gt(s.trim,{transparent:!0,opacity:.22,depthWrite:!1}),_,!1,!1);return R.position.y=.012,QA(r,n,s,o),r.finish(),{theme:s,wallRays:u,doorViews:g,station:_,strip:w,lamp:C}}function ye(n,e,t,i,s=0,r=0,o=0){return new Ls(n,e,t,1,i).translate(s,r,o)}function ct(n,e,t,i,s,r="z",o=12){let a=new Ln(n,n,e,o);return r==="z"&&a.rotateX(Math.PI/2),r==="x"&&a.rotateZ(Math.PI/2),a.translate(t,i,s)}function Ns(n,e,t){let i=t.map(([s,r])=>{let o=new Ge(r),a=new Float32Array(s.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return s.setAttribute("color",new xt(a,3)),s});return Jt(wr(i),e,n,!1,!1)}function Us(n,e){let t="#38434a",i="#788287",s="#abb3ae",r="#282d30",o=["#d8904a","#b88560","#ccaa65"][e%3],a=Gt(["#d39864","#b99070","#d2aa71"][e%3],{vertexColors:!0,metalness:.32,roughness:.53,emissive:"#000000"}),c=Gt("#ffffff",{vertexColors:!0,metalness:.3,roughness:.61}),l=[[ye(.63,.47,.36,.063,0,1.17,-.013),"#ded9c6"],[ye(.42,.21,.28,.029,0,.79,-.02),"#8a989c"],[ye(.45,.33,.37,.054,0,1.68,-.003),"#d8d4c2"],[ye(.34,.08,.28,.024,0,1.864,-.018),"#e7dbbd"],[ye(.43,.19,.08,.034,0,1.2,.176),"#bebcb3"]],h=[[ye(.41,.21,.08,.038,0,1.69,.172),t],[ye(.33,.132,.037,.021,0,1.7,.214),"#263436"],[ye(.25,.069,.075,.019,0,1.574,.166),i],[ct(.108,.108,0,1.47,-.02,"y"),i],[ye(.36,.23,.33,.045,0,.92,0),r],[ye(.32,.29,.15,.035,0,1.27,-.22),t],[ye(.27,.055,.05,.012,0,1.02,.174),t],[ye(.18,.072,.036,.013,0,1.2,.223),"#252f31"]];for(let g of[-1,1]){l.push([ye(.057,.11,.3,.014,g*.219,1.756,-.01),"#8b9294"]),h.push([ct(.037,.026,g*.223,1.69,.171,"x"),i]),h.push([ct(.018,.016,g*.257,1.24,.183),"#c2c2b5"]);for(let _=0;_<4;_++)h.push([Ke(.084,.012,.046,g*.103,1.18+_*.032,-.298),"#151f22"])}Ns(n,a,l),Ns(n,c,h);let d=Jt(wr([ye(.162,.057,.025,.012,0,1.7,.238),ct(.029,.019,-.118,1.7,.235),ct(.029,.019,.118,1.7,.235),ye(.1,.023,.017,.006,0,1.2,.247)]),new Ht({color:"#ffc277"}),n,!1,!1),u=[],f=[];for(let g of[-1,1]){let _=new ht;_.position.set(g*.214,.74,0),n.add(_),Ns(_,c,[[ye(.196,.27,.27,.031,0,-.11,-.039),s],[ct(.093,.235,0,-.31,.023,"x"),t],[ct(.058,.022,g*.123,-.31,.023,"x"),i],[ct(.039,.26,g*.041,-.448,-.065,"y"),i],[ye(.15,.26,.156,.026,0,-.455,.04),t],[ye(.165,.2,.086,.024,0,-.435,.133),o],[ye(.21,.135,.37,.028,0,-.639,.047),i],[ye(.23,.056,.385,.016,0,-.711,.05),r],[ye(.167,.078,.125,.015,0,-.628,.207),s]]),u.push(_);let m=new ht;n.add(m),m.position.set(g*.393,1.4,-.01),m.rotation.z=g*.1,Ns(m,c,[[ct(.1,.16,0,-.04,-.017,"x"),r],[ye(.215,.157,.281,.04,g*.032,-.007,.014),s],[ye(.068,.103,.176,.016,g*.124,-.02,.027),o],[ye(.128,.2,.149,.022,0,-.17,-.013),t],[ct(.068,.171,0,-.26,.017,"x"),i],[ye(.167,.206,.205,.034,0,-.373,.047),t],[ye(.124,.143,.048,.017,0,-.38,.16),i],[ye(.127,.108,.136,.02,0,-.514,.065),r]]),f.push(m)}return{legs:u,arms:f,chassis:a,visor:d}}function JA(n,e){let t="#49575a",i="#70766b",s="#303936",r=Gt("#ffffff",{vertexColors:!0,roughness:.82}),o=[[ye(.16,.15,.48,.049,.056,-.22,.24).rotateZ(.21),t],[ye(.17,.153,.092,.027,.046,-.2,.095),i],[ye(.157,.167,.179,.048,.031,-.137,.056),s],[ye(.105,.064,.102,.022,-.056,-.104,.051).rotateZ(.13),"#4d5b55"],[ye(.087,.031,.094,.012,.039,-.116,-.045),"#495853"],[ye(.093,.026,.083,.011,.04,-.152,-.043),"#495853"]];if((e==="carbine"||e==="sniper"||e==="bazooka")&&o.push([ye(.19,.17,.4,.049,-.102,-.214,-.24).rotateZ(-.13),t],[ye(.175,.117,.111,.026,-.055,-.145,-.447),i],[ye(.162,.096,.162,.035,-.024,-.095,-.48),s],[ye(.048,.074,.131,.021,-.093,-.056,-.49),"#495853"]),e==="knife")for(let[a]of o)a.translate(0,.066,.037);Ns(n,r,o)}function da(n,e){let t="#647277",i="#434e53",s="#283237",r="#797f72",o="#a89065",a="#cfb581",c=Gt("#ffffff",{vertexColors:!0,metalness:.37,roughness:.44}),l=[],h;if(e==="knife"){let d=new xr;d.moveTo(-.07,.085),d.lineTo(.063,.085),d.lineTo(.06,-.22),d.quadraticCurveTo(.046,-.48,-.055,-.58),d.lineTo(-.07,-.3),d.closePath();let u=new Ko(d,{depth:.016,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:8}).rotateX(Math.PI/2).translate(0,.052,-.14);l.push([u,"#bfcbc9"],[ye(.058,.011,.32,.005,.015,.055,-.307),"#8f9d9e"],[ye(.185,.054,.067,.014,0,.04,-.081),i],[ye(.112,.088,.304,.029,0,.032,.104),s]);for(let f=0;f<6;f++)l.push([ye(.121,.095,.025,.008,0,.032,-.006+f*.042),i]);h={x:0,y:.052,z:-.72}}else if(e==="bazooka"){l.push([ct(.102,.64,0,.027,-.28,"z",18),r],[ct(.113,.052,0,.027,-.588,"z",18),i],[ct(.108,.071,0,.027,.058,"z",18),i],[ct(.081,.013,0,.027,-.619),s],[ye(.181,.088,.198,.019,0,-.095,-.22),s],[ye(.206,.06,.324,.017,0,.138,-.24),t],[ye(.096,.079,.121,.016,0,.181,-.1),i],[ye(.057,.026,.012,.006,0,.184,-.034),"#587c77"]);for(let d of[-.519,-.42,-.04])l.push([ct(.106,.026,0,.027,d,"z",18),d===-.42?o:t]);h={x:0,y:.027,z:-.658}}else if(e==="pistol"){l.push([ye(.131,.1,.41,.023,0,.073,-.183),t],[ye(.119,.057,.355,.015,0,.119,-.16),i],[ye(.119,.068,.365,.014,0,.008,-.135),s],[ye(.107,.181,.115,.024,0,-.079,.036).rotateX(-.14),i],[ye(.123,.035,.141,.011,0,-.167,.049),s],[ct(.038,.027,0,.066,-.393),i],[ct(.023,.019,0,.066,-.412),s],[ye(.11,.023,.115,.006,.016,.121,-.17),"#939b9a"],[ye(.095,.028,.043,.006,0,.149,.004),s],[ye(.047,.033,.04,.006,0,.149,-.35),s],[ye(.027,.01,.026,.004,0,.168,-.348),a],[ye(.081,.031,.092,.006,0,-.04,-.183),i]);for(let d=0;d<6;d++){let u=-.017-d*.024;l.push([Ke(.132,.056,.009,0,.082,u).rotateX(.016),s])}h={x:0,y:.066,z:-.438}}else{let d=e==="sniper",u=d?-.855:-.708;l.push([ye(.154,.138,.409,.023,0,.067,-.109),t],[ye(.125,.092,.242,.019,0,.024,.204),i],[ye(.154,.065,.231,.017,0,.084,.264),s],[ye(.151,.172,.143,.019,0,-.085,-.215).rotateX(-.09),s],[ye(.131,.027,.324,.008,0,.147,-.202),s],[ye(.149,.113,.318,.015,0,.072,-.464),d?r:i],[ct(.026,d?.26:.13,0,.071,u+.083),t],[ct(.039,.067,0,.071,u),i],[ct(.025,.009,0,.071,u-.037),s]);for(let f=0;f<7;f++)l.push([ye(.141,.015,.025,.003,0,.161,-.079-f*.039),i]),l.push([Ke(.152,.035,.014,0,.064,-.338-f*.042),s]);d?l.push([ye(.064,.071,.227,.012,0,.172,-.25),i],[ct(.051,.251,0,.233,-.218),s],[ct(.069,.103,0,.233,-.382),i],[ct(.061,.072,0,.233,-.059),i],[ct(.044,.008,0,.233,-.02),"#497d79"],[ct(.041,.034,0,.293,-.2,"y"),t]):l.push([ye(.069,.052,.088,.012,0,.183,-.089),s],[ye(.061,.067,.054,.01,0,.169,-.57),i],[ye(.02,.016,.025,.004,0,.21,-.57),a],[ye(.024,.059,.114,.006,.081,.071,-.081),o]),h={x:0,y:.071,z:u-.067}}return JA(n,e),Ns(n,c,l),h}function md(n,e=()=>{},t="coop"){let i=t==="duel",s=["localhost","127.0.0.1"].includes(location.hostname),r=s?"ws://127.0.0.1:8791/rooms":document.querySelector("meta[name=coop-endpoint]")?.content,o=document.createElement("dialog");if(o.style.cssText="width:min(960px,96vw);max-height:96dvh;background:#173a32;color:#fff6da;padding:12px;overflow:auto",o.innerHTML='<h2>\u5169\u4EBA\u5408\u4F5C \xB7 \u820A\u57CE\u8857\u5340</h2><p role="status"></p><div class="room-controls"><label>\u540D\u7A31 <input maxlength="20" value="\u73A9\u5BB6"></label> <button data-create>\u5EFA\u7ACB\u623F\u9593</button> <label>\u623F\u9593\u78BC <input maxlength="8"></label> <button data-join>\u52A0\u5165</button> <button data-resume hidden>\u91CD\u65B0\u9023\u7DDA</button></div><button data-match-resume hidden>\u7E7C\u7E8C\u64CD\u4F5C</button><button data-ready hidden>\u6E96\u5099\uFF0F\u518D\u6230</button> <button data-exit>\u96E2\u958B\u623F\u9593</button><div data-field hidden><canvas tabindex="0" style="display:block;width:100%;height:min(52vh,450px);touch-action:none"></canvas><p>WASD \u79FB\u52D5 \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u2190\uFF0F\u2192 \u8F49\u5411 \xB7 Q \u7784\u6E96 \xB7 R \u63DB\u5F48 \xB7 E \u958B\u9580\uFF0F\u9577\u6309\u62C6\u89E3 \xB7 F \u67E5\u5E33</p><button data-buy-rocket>\u8CFC\u8CB7\u706B\u7BAD\u7B52 \xB7 350</button><button data-reload>\u63DB\u5F48 R</button><button data-equip>\u5207\u63DB\u6B66\u5668</button><div data-offer hidden></div></div>',o.querySelector("[data-buy-rocket]").title=Ys(),i||o.querySelector("[data-buy-rocket]").insertAdjacentText("afterend"," "+Ys()+" "),i){o.querySelector("h2").textContent="1 \u5C0D 1 \xB7 \u820A\u57CE\u8857\u5340",o.querySelector("[data-field] p").textContent="\u5148\u8D0F\u4E09\u56DE\u5408\u52DD\u51FA\u3002WASD \u79FB\u52D5 \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 \u53F3\u9375\u62D6\u52D5\u8F49\u5411 \xB7 R \u63DB\u5F48 \xB7 E \u958B\u9580";for(let N of["[data-buy-rocket]","[data-equip]"])o.querySelector(N).hidden=!0}o.append(window.PFAPAudio?.controls()??document.createElement("span")),document.body.append(o),o.showModal();let a=N=>o.querySelector(N),c=a("[role=status]"),l=a("canvas"),h=o.querySelectorAll("input"),d=new AbortController,u=(N,G,Q)=>N.addEventListener(G,Q,{signal:d.signal}),f,g,_,m,p=0,x,A=!1,w,C,R,T,U,v=!1,b=!1,F=0,q=0,ie=0,D=null,B=!1,X=!1,$=new Set,j=new Map,Y=N=>{f?.readyState===1&&f.send(JSON.stringify({v:3,seq:++p,...N}))},ne,se=()=>{$.clear(),v=b=!1,F=0,ee()},ce=()=>ne?ne.clear():se(),W=()=>x?.phase==="playing"&&!B&&a("[data-offer]").hidden&&x.players.some(N=>N.id===g&&N.hp);function ee(){let N=W();Y({type:"input",f:N?Number($.has("KeyW"))-Number($.has("KeyS")):0,r:N?Number($.has("KeyD"))-Number($.has("KeyA")):0,fire:N&&(v||$.has("KeyX")||performance.now()<F),use:N&&$.has("KeyE"),yaw:q,pitch:ie})}let le,Me,ge,De=new Map,Be=0,be=0,Ue=[],P=0;function ae(N){let G=Math.min(1,(N-Be)/100),Q=x.projectiles.map(_e=>{let te=De.get(_e.id)?.position||_e.previousPosition,de=_e.position;return{..._e,position:{x:te.x+(de.x-te.x)*G,y:te.y+(de.y-te.y)*G,z:te.z+(de.z-te.z)*G}}});ge.update(Q,Ue.splice(0),Math.min(.1,(N-be)/1e3)),be=N}let J=new I,re=matchMedia("(prefers-reduced-motion: reduce)");function Z(N,G,Q,_e,te,de,we){let ve=j.get(N);if(!ve){let Xe=new ht;Xe.position.set(G,0,Q),C.add(Xe);let Re=Us(Xe,_e);we&&(Re.chassis.color.setHex(5674136),Re.visor.material.color.setHex(10092530)),ve={root:Xe,art:Re},j.set(N,ve)}let{root:K,art:Qe}=ve;if(K.visible=te,!te)return;let He=G-K.position.x,Ce=Q-K.position.z;K.position.x+=He*.35,K.position.z+=Ce*.35;let Se=Math.hypot(He,Ce);de!=null?K.rotation.y=Math.PI+de:Se>.005&&(K.rotation.y=Math.atan2(He,Ce));let Ae=re.matches?0:Math.min(.42,Se*3),Fe=performance.now()/114;for(let[Xe,Re]of Qe.legs.entries()){let Oe=Math.sin(Fe+Xe*Math.PI)*Ae;Re.rotation.x=Oe,Qe.arms[Xe].rotation.x=-Oe*.6}}function Ee(){w=new Bi({canvas:l,antialias:matchMedia("(pointer:fine)").matches}),C=new ws,R=new Lt(72,1,.08,65),C.add(R);let N=Yi(1),G=ua(C,N.walls,N.doors,1),{theme:Q,doorViews:_e}=G;C.background=new Ge(Q.sky),C.fog=new Es(Q.fog,27,61),C.add(new Ps("#fff0d1",Q.cold,1.85));let te=new Is(Q.bright,2.05);te.position.set(6,15,8),C.add(te);let de=new Map(_e.map(K=>[K.d.id,K])),we=performance.now(),ve=(K=performance.now())=>{let Qe=Math.min(.05,(K-we)/1e3);we=K,W()&&(q+=(Number($.has("ArrowLeft"))-Number($.has("ArrowRight")))*Qe*1.9);let He=b?54:72;if(R.fov!==He&&(R.fov=He,R.updateProjectionMatrix()),T=requestAnimationFrame(ve),!x||!l.clientWidth)return;let Ce=x.players.find(Re=>Re.id===g),Se=Ce?.hp?Ce:x.players.find(Re=>Re.hp)||Ce;if(!Se)return;let Ae=l.clientWidth,Fe=l.clientHeight;(l.width!==Ae||l.height!==Fe)&&(w.setSize(Ae,Fe,!1),R.aspect=Ae/Fe,R.updateProjectionMatrix()),J.set(Se.x,1.55,Se.z),D||(D=J.clone()),D.lerp(J,.34),R.position.copy(D),P=Math.max(0,P-.009),R.rotation.set(ie+P,q,0,"YXZ");for(let Re of x.doors){let Oe=de.get(Re.id);Oe&&(Oe.group.position.y+=((Re.open?Re.h+2:Re.h/2)-Oe.group.position.y)*.25,Oe.status.material.color.setHex(Re.open?8767136:15117669))}let Xe=x.verified?8443050:x.time<10?15960688:15578723;G.strip.material.color.setHex(Xe),G.lamp.material.color.setHex(Xe);for(let Re of x.bots)Z("b"+Re.id,Re.x,Re.z,Re.id,Re.hp>0,null,!1);for(let Re of x.players)Z(Re.id,Re.x,Re.z,1,Re.id!==Se.id&&Re.hp>0,Re.yaw,!i);Ce?.weapon!==Me&&(le&&(R.remove(le),le.traverse(Re=>{Re.geometry?.dispose(),Re.material?.dispose()})),Me=Ce?.weapon,le=new ht,le.position.set(.34,-.33,-.65),le.scale.setScalar(.74),R.add(le),da(le,Me||"pistol")),ge&&ae(performance.now()),w.render(C,R)};ve()}function fe(){let N=x.players.find(G=>G.id===g);N&&(c.textContent="\u623F\u9593 "+_+" \xB7 "+x.players.map(G=>G.name+" "+G.hp+" HP"+(G.online?G.ready?"\uFF08\u5DF2\u6E96\u5099\uFF09":"":"\uFF08\u96E2\u7DDA\uFF09")).join(" \uFF0F ")+" \xB7 "+(x.phase==="playing"?Math.ceil(x.time)+" \u79D2 \xB7 \u5F48\u5323 "+N.ammo+" / \u5099\u5F48 "+N.reserve+(N.reload?" \xB7 \u63DB\u5F48 "+N.reload.toFixed(1)+"s":"")+" \xB7 "+(x.verified?"\u5DF2\u6838\u5BE6":"\u5230\u5317\u9762\u67E5\u5E33")+" \xB7 \u62C6\u89E3 "+x.progress.toFixed(1)+"/5 \u79D2"+(B?" \xB7 \u9078\u55AE\u958B\u555F\uFF0C\u5408\u4F5C\u5C0D\u5C40\u7E7C\u7E8C":""):x.result||"\u7B49\u5019\u5169\u4EBA\u6E96\u5099"),i&&x.phase==="playing"&&!Object.values(x.wins??{}).some(Boolean)&&(A=!1),i&&!A&&x.phase==="result"&&Object.values(x.wins??{}).some(G=>G>=3)&&(A=!0,window.arcadeRun?.complete("defence")),i&&(c.textContent="\u623F\u9593 "+_+" \xB7 "+x.players.map(G=>G.name+" "+(x.wins?.[G.id]||0)+" \u52DD \xB7 "+G.hp+" HP").join(" \uFF0F ")+" \xB7 "+(x.phase==="playing"?Math.ceil(x.time)+" \u79D2 \xB7 \u5F48\u5323 "+N.ammo+" / "+N.reserve:x.result||"\u7B49\u5019\u5169\u4EBA\u6E96\u5099")),a("[data-buy-rocket]").disabled=!N.hp||N.launcher||N.credits<350,a("[data-reload]").disabled=!N.hp||N.reload>0||!N.reserve||N.ammo>=et[N.weapon].mag,a("[data-equip]").disabled=!N.hp||!N.launcher,!i&&x.phase==="playing"&&(c.textContent+=" \xB7 \u88DD\u5099\u9EDE "+N.credits+" \xB7 "+(N.weapon==="bazooka"?"\u706B\u7BAD\u7B52":"\u624B\u69CD")),a("[data-match-resume]").hidden=x.phase!=="playing"||!B,a("[data-ready]").hidden=x.phase==="playing",a("[data-ready]").disabled=N.ready,a("[data-field]").hidden=x.phase!=="playing",a("[data-offer]").hidden=i||!(x.phase==="playing"&&N.hp&&N.checked&&!x.verified&&Math.hypot(N.x,N.z+13)<2.7),x.phase==="playing"&&!w&&Ee())}function S(N){if(f&&f.readyState<2)return;let G;try{G=JSON.parse(sessionStorage.getItem("coop-room-session"))}catch{}let Q=new URL(r);Q.searchParams.set("action",N),N!=="create"&&Q.searchParams.set("code",N==="reconnect"?G?.code:h[1].value.trim().toUpperCase()),f=new WebSocket(s?r:Q),c.textContent="\u9023\u7DDA\u4E2D\u2026",f.onopen=()=>Y({type:N,mode:t,code:N==="reconnect"?G?.code:h[1].value.trim().toUpperCase(),token:N==="reconnect"?G?.token:void 0,name:h[0].value}),f.onmessage=_e=>{let te=JSON.parse(_e.data);if(te.v!==3){c.textContent="\u5408\u4F5C\u7248\u672C\u4E0D\u540C\uFF0C\u8ACB\u66F4\u65B0\u904A\u6232\u540C\u623F\u9593\u4F3A\u670D\u5668\u3002",f.close();return}if(te.type==="joined"){({id:g,code:_,token:m}=te);try{sessionStorage.setItem("coop-room-session",JSON.stringify({code:_,token:m}))}catch{}a(".room-controls").hidden=!0;return}if(te.type==="state"){let de=x?.round!==te.round;if(!de&&te.phase==="playing")for(let ve of te.players){let K=x.players.find(Qe=>Qe.id===ve.id);ve.shot&&K&&ve.shot>(K.shot??0)&&["pistol","bazooka"].includes(ve.shotWeapon)&&(e("shot-"+ve.shotWeapon),ve.id===g&&ve.shotWeapon==="pistol"&&(P=Math.min(.19,P+.043)),ve.shotWeapon==="bazooka"&&e("rocket-flight")),ve.id===g&&ve.reload>0&&K&&!K.reload&&e("reload")}De=new Map((de?[]:x.projectiles).map(ve=>[ve.id,ve])),(de||te.phase!=="playing")&&(ge?.dispose(),ge=null,Ue=[]);let we=W();x=te,de&&te.phase==="playing"&&(q=i&&te.players.find(ve=>ve.id===g)?.z<0?Math.PI:0,ie=0,D=null,P=0),Be=performance.now(),fe(),we&&!W()&&ce(),x.phase==="playing"&&(ge??=oa(C,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,onImpact:n}),Ue.push(...te.impacts))}else te.type==="error"&&(c.textContent=te.message)},f.onerror=()=>c.textContent="\u623F\u9593\u4F3A\u670D\u5668\u672A\u80FD\u9023\u7DDA\u3002",f.onclose=()=>{X||(ce(),a("[data-field]").hidden=a("[data-ready]").hidden=!0,a(".room-controls").hidden=!1,a("[data-resume]").hidden=!m,c.textContent+=" \xB7 \u9023\u7DDA\u5DF2\u95DC\u9589")}}function y(){ce(),X=!0,clearInterval(U),cancelAnimationFrame(T),d.abort(),ge?.dispose(),f?.close(),C?.traverse(N=>{N.geometry?.dispose(),N.material?.map?.dispose(),N.material?.dispose()}),w?.dispose(),w?.forceContextLoss(),o.remove()}if(a("[data-exit]").onclick=y,a("[data-match-resume]").onclick=()=>{B=!1,ce(),x&&fe(),l.focus()},u(o,"cancel",N=>{N.preventDefault(),B=!0,ce(),x&&fe()}),u(window,"pagehide",y),window.offlineEdition||!r){a(".room-controls").hidden=!0,c.textContent=window.offlineEdition?"\u96E2\u7DDA\u7248\u53EF\u73A9\u55AE\u4EBA\uFF1B1 \u5C0D 1 \u9700\u8981\u7DB2\u7D61\u3002":"\u516C\u958B\u623F\u9593\u4F3A\u670D\u5668\u5C1A\u672A\u9023\u63A5\u3002";return}try{a("[data-resume]").hidden=!sessionStorage.getItem("coop-room-session")}catch{}a("[data-create]").onclick=()=>S("create"),a("[data-join]").onclick=()=>S("join"),a("[data-resume]").onclick=()=>S("reconnect"),a("[data-ready]").onclick=()=>Y({type:"ready"}),a("[data-buy-rocket]").onclick=()=>{Y({type:"buy",item:"bazooka"}),Y({type:"equip",weapon:"bazooka"}),l.focus()},a("[data-reload]").onclick=()=>{Y({type:"reload"}),l.focus()},a("[data-equip]").onclick=()=>{Y({type:"equip",weapon:x.players.find(N=>N.id===g)?.weapon==="bazooka"?"pistol":"bazooka"}),l.focus()};let O=a("[data-offer]");O.textContent=ri[0].q+" \u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\uFF0C\u5168\u968A\u4EFB\u52D9\u5931\u6557\u3002",ri[0].answers.forEach((N,G)=>{let Q=document.createElement("button");Q.textContent=N,Q.onclick=()=>Y({type:"answer",answer:G}),O.append(Q)}),ne=aa({on:u,canvas:l,active:W,look(N,G){let Q=b?.0018:.003;q-=N*Q,ie=Math.max(-1.2,Math.min(1.2,ie-G*Q))},fire(N){v=N,N&&(F=performance.now()+70,ee())},clearInput:se}),u(o,"keydown",N=>{if(!W()||N.target.matches("input,select,textarea")||!["KeyW","KeyA","KeyS","KeyD","KeyX","KeyQ","KeyE","KeyF","KeyR","ArrowLeft","ArrowRight"].includes(N.code)||(N.preventDefault(),$.add(N.code),N.repeat))return;N.code==="KeyX"&&(F=performance.now()+70,ee()),N.code==="KeyQ"&&(b=!b);let G={KeyE:"door",KeyF:"check",KeyR:"reload"}[N.code];G&&Y({type:G})}),u(window,"keyup",N=>$.delete(N.code)),u(window,"blur",ce),u(document,"visibilitychange",()=>{document.hidden&&ce()}),U=setInterval(()=>{x?.phase==="playing"&&ee()},75),c.textContent="\u5EFA\u7ACB\u623F\u9593\u5F8C\uFF0C\u5C07\u516B\u4F4D\u623F\u9593\u78BC\u4EA4\u7540\u968A\u53CB\u3002"}function gd(n){return globalThis.siteLocale?.text(n)??n}var bl=Object.freeze({x:0,z:-13,name:"\u5317\u9762\u7D42\u7AEF"}),_d=Object.freeze({q:"\u963F\u4FCA\u8AD7\u4F4F\u501F HK$20,000 \u66AB\u6642\u9084\u820A\u5361\u6578\u3002\u78BA\u8A8D\u4E4B\u524D\u61C9\u8A72\u9EDE\u505A\uFF1F",answers:["\u66AB\u505C\u78BA\u8A8D\uFF0C\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB","\u5148\u501F\u65B0\u9322\u66AB\u6642\u9084\u820A\u5361\u6578"],right:0,why:"\u66AB\u505C\u64B3\u78BA\u8A8D\u3002\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB\uFF0C\u518D\u540C\u963F\u4FCA\u4E00\u9F4A\u67E5\u6E05\u695A\u820A\u6B20\u6B3E\u3002"}),ZA=[{x:-12,z:-13,name:"\u897F\u5DF7\u63A5\u6536\u7AD9"},{x:12,z:-13,name:"\u6771\u5074\u8CA8\u53F0"},{x:13,z:-14,name:"\u6771\u5317\u77AD\u671B\u53F0"}],KA=[{id:"verify",title:"\u6838\u5C0D\u53CA\u62C6\u89E3",brief:"\u53BB\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u8CC7\u6599\uFF0C\u6309\u4F4F E \u62C6\u89E3\u3002"},{id:"dispatch",title:"\u96D9\u7AD9\u63A5\u529B",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\u4E26\u6309\u4F4F E \u6574\u7406\u8A18\u9304\uFF0C\u518D\u53BB\u63A5\u6536\u7AD9\u6309\u4F4F E \u4EA4\u63A5\u3002"},{id:"hold",title:"\u5B88\u4F4F\u4E0A\u50B3\u9EDE",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\uFF0C\u518D\u53BB\u6307\u5B9A\u5730\u9EDE\u7559\u55BA\u7BC4\u570D\u5167\u76F4\u81F3\u4E0A\u50B3\u5B8C\u6210\u3002"}],Sl=ZA.flatMap((n,e)=>KA.map(t=>({...t,id:e+1+"-"+t.id,mode:t.id,round:e+1,map:Yi(e+1).name,second:n})));function Ad(n){let e=Sl.find(t=>t.id===n);return e?{mission:e,stage:0,complete:!1}:null}function El(n,e,t=!1){let i=n?.stage??0,s=n?.mission.mode??"verify";return e?s==="hold"?{point:n.mission.second,kind:"upload",seconds:8}:s==="dispatch"?i===0?{point:bl,kind:"prepare",seconds:t?2:3}:{point:n.mission.second,kind:"handoff",seconds:4}:{point:bl,kind:"defuse",seconds:t?3:5}:{point:bl,kind:"check",seconds:t?3:5}}function Fs(n,e,t=2.7){return Math.hypot(n.x-e.x,n.z-e.z)<t}function xd(n,e,t,i){if(n?.complete)return null;let s=El(n,e.verified,e.purchases.includes("kit"));return e.phase!=="playing"||s.kind==="check"||!Fs(e,s.point)||!t&&s.kind!=="upload"?(e.defuse=0,null):(e.defuse=Math.min(s.seconds,e.defuse+i),e.defuse+1e-9<s.seconds?null:n?.mission.mode==="dispatch"&&n.stage===0?(n.stage=1,e.defuse=0,"relay"):(n&&(n.complete=!0),"complete"))}var fa={follow:"\u8DDF\u96A8",hold:"\u5B88\u4F4D",cover:"\u63A9\u8B77",advance:"\u7A81\u7834"};function yd(n,e){return[[-1.4,15.6],[1.6,15.2],[0,16.5]].map(([t,i],s)=>{let r=new ht,o=Us(r,s);return r.position.set(t,0,i),o.chassis.color.set("#397c73"),o.visor.material.color.set("#abf4d5"),n.add(r),{id:s,x:t,z:i,mesh:r,art:o,plan:[],refresh:s*.2,action:1+s*.3,open:!An(t,i,.33,e)}})}function vd(n,e,t,i,s,r,o,a,c){for(let l of n){if(!l.open)continue;let h=e==="advance"?i:e==="follow"?{x:t.x+(l.id-1)*1.16,z:Math.min(16.5,t.z+1.7+l.id*.5)}:null;if(l.refresh-=o,h&&l.refresh<=0){l.refresh=.9+l.id*.11;let f=Math.hypot(l.x-h.x,l.z-h.z);l.plan=f<1.2?[]:Qs(l.x,l.z,h.x,h.z,r)?Vr(l.x,l.z,h.x,h.z,r):[h]}let d=h&&l.plan[0];if(d){let f=d.x-l.x,g=d.z-l.z,_=Math.hypot(f,g);if(_<.45)l.plan.shift();else{let m=Math.min(2.8*o,_)/_;Gr(l,f*m,g*m,r),l.mesh.position.set(l.x,0,l.z),l.mesh.rotation.y=Math.atan2(f,g)}}for(let[f,g]of l.art.legs.entries())g.rotation.x=d?Math.sin(a*9+f*Math.PI)*.34:0;if(l.action-=o,l.action>0||!["cover","advance"].includes(e))continue;l.action=1.7+l.id*.12;let u=s.find(f=>f.hp>0&&Math.hypot(l.x-f.x,l.z-f.z)<10&&!Qs(l.x,l.z,f.x,f.z,r));u&&c(l,u)}}function $A(n={}){n=n&&typeof n=="object"?n:{};let e=(t,i,s,r)=>Number.isFinite(t)?Math.min(s,Math.max(i,t)):r;return{sensitivity:e(n.sensitivity,.25,3,1),ads:e(n.ads,.2,1.5,.45),volume:e(n.volume,0,1,.65),invert:n.invert===!0,camera:"free",reduced:n.reduced===!0}}function wl(n,e={}){return $A(n??e)}function Md(n,e,t,i){let s=.0022*i.sensitivity*(t?i.ads:1),r=Number.isFinite(n)?n:0,o=Number.isFinite(e)?e:0;return{yaw:r*s,pitch:o*s*(i.invert?-1:1)}}var Tl=new Map,Ie=n=>{if(!Tl.has(n)){let e=document.getElementById(n);return e&&Tl.set(n,e),e}return Tl.get(n)},yi=Ie("touch-stick"),Rd=0,Cd=0,_n=Ie("world"),Pd=new AbortController,Pt=new Set,pa=new ta,Ws=document.createElement("label");Ws.id="squad-control";Ws.hidden=!0;Ws.innerHTML='\u5C0F\u968A <select aria-label="\u5C0F\u968A\u6307\u4EE4">'+Object.entries(fa).map(([n,e])=>'<option value="'+n+'">'+e+"</option>").join("")+"</select>";document.body.append(Ws);var _a=Ws.querySelector("select"),jA=[...document.querySelectorAll("[data-weapon]")],Dl=null,Ll=null,bd=0,Bs=!0,Ur=!1,Id=[],Os=null,Vi=null,Rn=null,Cl=null,wn=null,Dt=null;try{let n=localStorage.getItem("fps-preferences-v2"),e=localStorage.getItem("fps-preferences-v1");Dt=wl(n?JSON.parse(n):null,JSON.parse(e||"{}"))}catch{Dt=wl(null)}var Un=0,Pr=0,pt=Jl(),Nl=[],gn=!1,Ir=!1,Dd=0,va=!1,M=wi(),Kt,bt,It,pn,mn,Zt=0,bi=0,Ma=0,en=[],Hs=[],Dr=[],Ld=[],rn=0,Gs=0,Cn=!1,On=!1,Fn=Dt.reduced||matchMedia("(prefers-reduced-motion:reduce)").matches,Pl=0,Il=0,Tr=0,Cr=0,ks=0,Rr=0,Lr=!1,vt=!1,Pe=null,Sd=/^mission-([1-3]-(?:verify|dispatch|hold))$/.exec(window.arcadeTest?.target??""),ii=[],Vs="follow",ni=Ie("fps-bgm"),ba=!1,zs=null,Ft=()=>window.arcadeStory?.id==="verify",Nd={q:"\u4FE1\u7528\u5361\u7D50\u6B20 HK$4,000\uFF0C\u6700\u4F4E\u9084\u6B3E HK$200\u3002\u6263\u9664\u57FA\u672C\u751F\u6D3B\u8CBB\u5F8C\uFF0C\u5269 HK$800\u3002\u61C9\u8A72\u9EDE\u5B89\u6392\uFF1F",answers:["\u53EA\u4ED8\u6700\u4F4E\u984D\uFF0C\u5C07\u5176\u9918\u7528\u569F\u6D88\u8CBB","\u9810\u7559\u5FC5\u8981\u958B\u652F\uFF0C\u518D\u591A\u9084\u6B20\u6B3E\u540C\u6838\u5C0D\u5229\u606F"],right:1,why:"\u6700\u4F4E\u9084\u6B3E\u53EA\u4FC2\u9580\u6ABB\u3002\u5148\u4FDD\u7559\u57FA\u672C\u958B\u652F\uFF0C\u518D\u76E1\u91CF\u591A\u9084\u4E26\u6838\u5C0D\u5229\u606F\u8207\u9084\u6B3E\u671F\u9650\u3002"},Ul=()=>Ft()?_d:M.round===4?Nd:ri[M.round-1],Ud="fps-missions-v1",zn=()=>El(Pe,M.verified,M.purchases.includes("kit")),je=(n,e,t,i={})=>n.addEventListener(e,t,{...i,signal:Pd.signal});je(_a,"change",()=>{if(!(M.phase!=="playing"||!ii.length||!Object.hasOwn(fa,_a.value))){Vs=_a.value;for(let n of ii)n.refresh=0;M.feedback="\u5C0F\u968A\u6307\u4EE4 \xB7 "+fa[Vs],_n.focus()}});var Vt=window.PFAPAudio,$t=n=>Vt?.play(n);function Xi(){Vt?.setVolume(Dt.volume)}var Fd=()=>!Lr&&Vt?.enabled("bgm")&&Dt.volume>0&&M.phase==="playing"&&!vt&&!document.hidden;function Ea(){ni&&(zs=null,ni.pause())}function Fr(){if(!ni)return;if(!Fd()||ba){Ea();return}if(ni.volume=.28*Dt.volume,zs||!ni.paused)return;let n=ni.play();zs=n,n.catch(()=>{zs===n&&(ba=!0)}).finally(()=>{zs===n&&(zs=null)})}ni&&je(ni,"error",()=>{ba=!0,Ea()});je(window,"pfap-audio-change",Fr);function ex(){if(Fr(),!Fd()||ni&&!ba)return;let n=Vt.now();if(!n||n<Il)return;let e=[110,98,130.81,87.31][Math.floor(Tr/16)%4];Vt.note(e*(Tr%2?1.5:1),.21,.018,"triangle"),Tr%8===0&&Vt.note(e/2,.48,.024,"sine"),Tr%4===2&&Vt.note(800,.03,.006,"square"),Tr++,Il=n+.2}function ma(n,e,t,i,s=0,r=0,o=0,a=bt){let c=new _t(new un(n,e,t),new xi({color:i,roughness:.85}));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a.add(c),c}function Aa(n,e="#254f48"){let t=document.createElement("canvas");t.width=512,t.height=128;let i=t.getContext("2d"),s=new Ts(t),r=new Vo(new gr({map:s}));return r.userData.localize=()=>{i.fillStyle=e,i.fillRect(0,0,512,128),i.strokeStyle="#e9d59e",i.lineWidth=6,i.strokeRect(6,6,500,116),i.fillStyle="#fff4d5",i.textAlign="center",i.textBaseline="middle",i.font="bold 37px Microsoft JhengHei,sans-serif",i.fillText(gd(n),256,65,475),s.needsUpdate=!0},r.userData.localize(),r.scale.set(4.2,1.05,1),r}function tx(){bt=new ws,bt.fog=new Es,It=new Lt(76,1,.05,100),It.rotation.order="YXZ",bt.add(It),Kt=new Bi({antialias:matchMedia("(pointer:fine)").matches,powerPreference:"high-performance"}),Kt.outputColorSpace=gt,Kt.shadowMap.type=pl,_n.append(Kt.domElement),Cl=new Ps("#fff0d1","#4d6d59",1.85),bt.add(Cl),wn=new Is("#ffe3b6",2.05),wn.position.set(6,15,8),wn.castShadow=!0,wn.shadow.mapSize.set(512,512),wn.shadow.camera.left=-23,wn.shadow.camera.right=23,wn.shadow.camera.top=23,wn.shadow.camera.bottom=-23,wn.shadow.normalBias=.03,bt.add(wn),Od(),Fl(),Or()}function Od(){Os&&Mi(Os),Vi=Ql(M.round),pt=Vi.doors,Os=new ht,bt.add(Os),Rn=ua(Os,si,pt,M.round);let{theme:n,station:e}=Rn;Ld=Rn.wallRays,Nl=Rn.doorViews,bt.background=new Ge(n.sky),bt.fog.color.set(n.fog),bt.fog.near=27,bt.fog.far=64,wn.color.set(n.bright),Cl.groundColor.set(n.cold),document.body.dataset.court=String(M.round);let t=Aa("\u5317\u9762\u7D42\u7AEF \xB7 \u67E5\u5E33 F","#264745");t.position.set(0,1.55,0),t.scale.set(2.6,.65,1),e.add(t);let i=Aa("\u5DF2\u6838\u5BE6 \xB7 \u4F9D\u7167\u756B\u9762\u6307\u793A","#264745");i.position.copy(t.position),i.scale.copy(t.scale),i.visible=!1,e.add(i),Rn.stationSign=t,Rn.verifiedSign=i;let s=Aa(Vi.name,"#374d50");s.position.set(0,4,17.3),Os.add(s)}function Fl(){pn&&Mi(pn),pn=new ht,It.add(pn),pn.position.set(.34,-.33,-.65),pn.scale.setScalar(.74);let n=da(pn,M.weapon);mn=new _t(new ti(.07,.17,7),new Ht({color:"#ffe5a3"})),mn.rotation.x=-Math.PI/2,mn.position.set(n.x,n.y,n.z),mn.visible=!1,pn.add(mn)}function zd(n){eh(M,n)&&(gn=!1,Fl(),M.feedback=et[n].label)}function nx(){return M.weapon!=="knife"&&(M.weapon!=="sniper"||M.cooldown<=0)}function Bd(){M.phase==="playing"&&!vt&&nx()&&(gn=!gn)}function kd(){M.phase==="playing"&&!vt&&M.jumpY===0&&(M.vy=5.3,Ir=!1,M.crouch=!1)}function ix(){if(M.phase!=="playing"||vt)return!1;let n=pt.filter(e=>Math.hypot(e.x-M.x,e.z-M.z)<2.7).sort((e,t)=>Math.hypot(e.x-M.x,e.z-M.z)-Math.hypot(t.x-M.x,t.z-M.z))[0];return n?n.open&&Math.abs(M.x-n.x)<n.w/2+.45&&Math.abs(M.z-n.z)<n.d/2+.45?(M.feedback="\u5148\u96E2\u958B\u9580\u6846\uFF0C\u518D\u95DC\u9580\u3002",!0):(n.open=!n.open,en.forEach(e=>e.navTime=0),M.feedback=n.open?"\u9580\u5DF2\u958B\uFF1B\u7559\u610F\u9580\u5F8C\u3002":"\u9580\u5DF2\u95DC\u3002",$t("lever_click"),!0):!1}function Mi(n){n.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map?.dispose(),i.dispose()})}),n.removeFromParent()}var vi=[],Wi;function Sa(){vi=[],Wi?.dispose(),Wi=null,en.forEach(n=>Mi(n.mesh)),en=[],ii.forEach(n=>Mi(n.mesh)),ii=[],Hs.forEach(n=>Mi(n.mesh)),Hs=[],Dr.forEach(n=>Mi(n.mesh)),Dr=[],vt=!1,Ie("terminal").hidden=!0,Cr=ks=0,Cn=On=!1,Pt.clear()}function sx(n,e,t){let i=new ht;i.position.set(n,0,e),bt.add(i);let s=Ol()?59:90+(M.round-1)*10,r={mesh:i,x:n,z:e,hp:s,maxHp:s,rewarded:!1,dying:0,nav:[],navTime:t*.05,patrol:t,shoot:2+t*.3,ammo:9,reload:0,burst:0,burstClock:0,alertUntil:0,origin:{x:n,z:e},id:t},o=Us(i,t);r.parts=o.legs,r.arms=o.arms,r.chassisMaterial=o.chassis,r.visor=o.visor,r.motion=0;let a=ma(.75,.75,.5,"#fff",0,1.05,0,i),c=ma(.65,.45,.5,"#fff",0,1.7,0,i);a.visible=c.visible=!1,a.userData.enemy=r,c.userData.enemy=r,c.userData.head=!0;let l=Aa(["\u4FE1\u7528\u5361\u8D85\u652F","\u60C5\u7DD2\u8AB2\u91D1","\u5206\u671F\u758A\u52A0","\u6E4A\u55AE\u885D\u52D5","\u6700\u4F4E\u9084\u6B3E"][t%5],"#3c4648");l.position.y=2.44,l.scale.set(1.92,.48,1),i.add(l);let h=new ht;return h.position.y=2.16,i.add(h),r.meter=h,ma(1.15,.12,.05,"#273535",0,0,0,h),r.bar=ma(1.08,.08,.06,"#a9d975",0,0,.04,h),r}function rx(){if(!ox())return;let n=/^round-([1-3])$/.exec(window.arcadeTest?.target??"");n&&!Pe&&(M.round=Number(n[1])),ax()}function ox(){return M.phase==="buy"}function ax(){if(!th(M))return;(M.round===1||Pe)&&window.arcadeRun?.start("defence",Pe?.training?null:Pe?.mission.id??"quick"),Sa(),Od(),bi=performance.now(),rn=0,Gs=0,Zt=0,Rr=0,Pl=0,gn=!1,Ir=!1,Un=0,pt.forEach(e=>e.open=!1),Fl();let n=cx();Id=n;for(let e=0;e<(Ft()?2:Math.min(n.length,M.round===4?14:Yl[M.round-1]));e++){let t=sx(...n[e],e);t.maxHp=Math.ceil(t.maxHp*kr(M.round).health),t.hp=t.maxHp,en.push(t)}Vs="follow",Pe?.training?M.time=180:Pe&&(ii=yd(bt,pt)),M.feedback=Pe?.training?"\u7DF4\u7FD2\u5834 \xB7 \u6A5F\u68B0\u9776\u5514\u6703\u9084\u64CA\u3002\u53EF\u4EE5\u7DF4\u7FD2\u79FB\u52D5\u3001\u958B\u9580\u3001\u67E5\u5E33\u540C\u62C6\u89E3\u3002":Pe?Pe.mission.brief:"100 \u751F\u547D\u503C \xB7 \u5229\u7528\u63A9\u9AD4\u5230\u5317\u9762\u67E5\u5E33\u62C6\u5F48\uFF0C\u6BCB\u9808\u6D88\u6EC5\u6240\u6709\u6575\u4EBA\u3002",Xi(),Ut(),_n.focus()}function cx(){let n=[[-12,5],[12,0],[-11,-11],[11,-13],[3,-14],[-13,-1],[13,10]];for(let e of[-14,-9,-3,3,9])for(let t of[-14,-10,-5,0,5,10,14])!An(t,e,.55,pt)&&Math.hypot(t,e-14)>8&&n.every(i=>Math.hypot(t-i[0],e-i[1])>2.5)&&n.push([t,e]);return n.filter(([e,t])=>!An(e,t,.55,pt))}var Hd;function Bn(){Hd?.clear(),Cn=!1,gn=!1}function Ol(){return M.round===1&&!Pe&&!Ft()&&!window.arcadeTest}function wa(){if(M.phase!=="playing"||vt||M.reload>0||M.cooldown>0)return;let n=et[M.weapon],e=M.weapon==="knife";if(!e&&M.ammo<=0){Da(M)?Ta():(M.feedback="\u5099\u5F48\u7528\u76E1\uFF0C\u8ACB\u5207\u63DB\u6B66\u5668\u3002",$t("lever_click"));return}if(e?M.melee++:(M.ammo--,M.shots++),M.cooldown=n.cooldown,M.weaponReady[M.weapon]=n.cooldown,Dd=Zt+(e?.1:1),mn.visible=!e,mn.userData.life=e?0:.065,e?$t("slide"):Nr("shot-"+M.weapon),It.position.set(M.x,M.y,M.z),It.rotation.set(Gs+Un,rn,0,"YXZ"),bt.updateMatrixWorld(!0),pa.setFromCamera(new oe,It),M.weapon==="bazooka"){let r={x:M.x,y:M.y,z:M.z};Nr("rocket-flight"),vi.push(rh("solo",r,pa.ray.direction,Zt));return}let t=[...Ld,...Nl.filter(r=>!r.d.open).map(r=>r.mesh),...en.filter(r=>r.hp>0).flatMap(r=>r.mesh.children.filter(o=>o.userData.enemy))],i=pa.intersectObjects(t,!1).find(r=>r.distance<=n.range),s=i?i.point:pa.ray.at(n.range,new I);if(!e){let r=new Wo(new yt().setFromPoints([It.localToWorld(new I(.3,-.3,-.7)),s]),new _r({color:"#ffe1a0",transparent:!0,opacity:.8}));bt.add(r),Dr.push({mesh:r,life:.1})}if(i?.object.userData.enemy){let r=i.object.userData.enemy,o=ih(M,r,!!i.object.userData.head);o&&(r.chassisMaterial.emissive.setHex(10376224),e||M.hits++,ks=.13,Pr=o.head?1.1:Pr,$t("hit_tick"),r.bar.scale.x=r.hp/r.maxHp,r.bar.position.x=-(1-r.hp/r.maxHp)*.54,o.killed&&($t("hit_tick"),r.dying=.001,M.feedback=(o.head?"\u7206\u982D\uFF01":"\u76EE\u6A19\u505C\u6A5F\u3002")+" +100 \u91D1\u5E63"))}M.weapon==="sniper"&&(gn=!1,M.feedback="\u9000\u93E1\u62C9\u6813\u4E2D \xB7 "+n.cooldown.toFixed(1)+"s"),M.weapon==="carbine"?(Un=Math.min(.22,Un+.0231),rn+=(Math.random()-.5)*.0098):M.weapon==="pistol"&&(Un=Math.min(.19,Un+.043))}function Nr(n){n.startsWith("shot-")?$t("shoot"):n==="rocket-impact"?$t("shield_break"):n==="reload"&&$t("buy_equip")}function Ta(){M.phase!=="playing"||vt||!Kl(M)||(M.feedback="\u63DB\u5F48\u4E2D\u2026",$t("buy_equip"))}function Gd(){Xi(),Fr(),Fn=Dt.reduced;try{localStorage.setItem("fps-preferences-v2",JSON.stringify(Dt))}catch{M.feedback="\u8A2D\u5B9A\u9069\u7528\u65BC\u4ECA\u6B21\u904A\u73A9\u3002"}}function lx(){qi(),Bn();for(let n of["sensitivity","ads","volume"])Ie("setting-"+n).value=Dt[n],Ie(""+n+"-output").textContent=n==="volume"?Math.round(Dt[n]*100)+"%":Dt[n].toFixed(2)+"\xD7";Ie("setting-invert").checked=Dt.invert,Ie("setting-reduced").checked=Fn,Ie("settings-dialog").showModal()}function hx(){Ie("view-status").textContent="",M.phase="playing",bi=performance.now(),Xi(),Il=Vt?.now()||0,Ut(),_n.focus()}function Vd(){M.phase!=="paused"||Ur||Ie("settings-dialog").open||hx()}async function Wd(){Ie("view-status").textContent="",M.phase==="playing"&&qi(),Bn();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),Or()}catch{Ie("view-status").textContent="\u700F\u89BD\u5668\u672A\u80FD\u5207\u63DB\u5168\u87A2\u5E55\u3002\u6309 V \u91CD\u8A66\uFF0C\u6216\u4EE5\u8996\u7A97\u6A21\u5F0F\u7E7C\u7E8C\u3002"}}function ux(n){let e=new _t(new Rs(.1,6,6),new Ht({color:"#ff8e56"}));e.position.set(n.x,1.4,n.z),bt.add(e);let t=M.x-n.x,i=M.z-n.z,s=(M.crouch?.55:1.05)+M.jumpY-1.4,r=Math.hypot(t,i,s)||1,o=11*kr(M.round).projectile;Hs.push({mesh:e,x:n.x,y:1.4,z:n.z,vx:t/r*o,vy:s/r*o,vz:i/r*o,life:4}),n.ammo--,n.burst--;let a=Ol()?.7:1;n.burstClock=.15/a,n.burst===0&&(n.shoot=(2.9-M.round*.2)/a),n.ammo===0&&(n.reload=2.2,n.burst=0)}function qi(){M.phase==="playing"&&(M.phase="paused",window.gameAudio?.pause(),Cn=On=!1,Pt.clear(),Bn(),Vt?.stopEffects(),Ut())}function Xd(){if(M.phase!=="playing"||Pe&&M.verified)return;if(!Fs(M,zn().point,3)){M.feedback="\u5148\u5230\u5317\u9762\u8CA1\u52D9\u70B8\u5F48\u65C1\u908A\uFF0C\u64B3 F \u67E5\u5E33\u3002";return}M.checked=!0,vt=!0,Ea(),Pt.clear(),Vt?.stopEffects(),Bn();let n=Ul();Ie("terminal").innerHTML="<h2>\u5148\u67E5\u5E33\uFF0C\u5F8C\u62C6\u89E3</h2><p>\u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\u88DD\u7F6E\u3002</p><p>"+n.q+"</p>"+n.answers.map((e,t)=>'<button data-answer="'+t+'">'+e+"</button>").join("")+'<p id="terminal-feedback" role="status"></p><button id="terminal-back">\u8FD4\u56DE\u6230\u5834</button>',Ie("terminal").hidden=!1,Cn=!1,On=!1}function qd(){try{let n=JSON.parse(localStorage.getItem(Ud));return n&&n.version===1&&n.completed?n:{version:1,completed:{}}}catch{return{version:1,completed:{}}}}function xa(n,e=!1){let t=Ad(n);t&&(Sa(),va=!1,Pe={...t,training:e},M=wi(),M.round=t.mission.round,M.credits=400,M.phase="buy",Ut())}function dx(){if(!Pe&&M.round===3||Pe&&!Pe.training){let{judgement:n,reserve:e}=Wr(M);window.arcadeRun?.finish(Math.min(100,(Pe?M.decisionCorrect*80:n)+e))}if(M.phase="roundend",M.defuse=zn().seconds,window.dispatchEvent(new Event("arcade-game-state")),Cn=On=!1,Bn(),Vt?.stopEffects(),$t("defuse_ok"),Pe&&!Pe.training&&!window.arcadeTest&&!Ft())try{let n=qd(),e=Math.round(Zt*1e3),t=n.completed[Pe.mission.id];n.completed[Pe.mission.id]=Number.isFinite(t)?Math.min(e,t):e,localStorage.setItem(Ud,JSON.stringify(n))}catch{}Ut()}function fx(n){if(!vi.length&&!Wi)return;let e=[...si,...pt.filter(i=>!i.open)],t=[];for(let i of vi){let s=oh(i,n,e,en);if(!s)continue;t.push(s),Nr("rocket-impact"),s.direct!==null&&M.hits++;for(let o of en){if(!o.hp)continue;let a=Oa(s,o,e);a&&(o.hp=Math.max(0,o.hp-a),o.bar.scale.x=o.hp/o.maxHp,o.bar.position.x=-(1-o.bar.scale.x)*.54,ks=.13,!o.hp&&!o.rewarded&&(o.rewarded=!0,o.dying=.001,M.kills++,M.totalKills++,M.credits+=100,M.earned+=100,$t("hit_tick")))}let r=Oa(s,M,e,!0);r&&Na(M,r)}vi=vi.filter(i=>i.active),Wi??=oa(bt,{reducedMotion:Fn,onImpact:()=>$t("shield_break")}),Wi.update(vi,t,n)}function px(n){if(M.phase==="dying"){Rr+=n,It.rotation.z=Fn?0:Math.min(.65,Rr*.5),It.position.y=Math.max(.4,M.y-Rr*.7),Rr>=1.3&&(M.phase="dead",Ut());return}if(M.phase!=="playing"||vt||(Zt+=n,fx(n),Da(M)&&Ta(),M.phase!=="playing"))return;if(M.time=Math.max(0,M.time-n),M.time>0&&Zt>=Pl&&($t("bomb_beep"),Pl=Zt+.28+1.12*Math.min(1,M.time/20)),!M.time){M.feedback="\u8CA1\u52D9\u70B8\u5F48\u5012\u6578\u5B8C\u3002\u91CD\u8A66\uFF0C\u5148\u5B89\u6392\u8DEF\u7DDA\u540C\u5668\u6750\u3002",M.phase="dead",Bn(),Ut();return}for(let t in M.weaponReady)M.weaponReady[t]=Math.max(0,M.weaponReady[t]-n);if(M.cooldown=Math.max(0,M.cooldown-n),Un=Math.max(0,Un-n*.14),Pr=Math.max(0,Pr-n),$l(M,n),!vt){rn+=(Number(Pt.has("ArrowLeft"))-Number(Pt.has("ArrowRight")))*n*1.9;let t=Number(Pt.has("KeyW"))-Number(Pt.has("KeyS"))+Cd,i=Number(Pt.has("KeyD"))-Number(Pt.has("KeyA"))+Rd,s=Math.max(1,Math.hypot(t,i)),r=M.crouch?2:Pt.has("ShiftLeft")?6:M.weapon==="knife"?5:4.1;Gr(M,(-Math.sin(rn)*t+Math.cos(rn)*i)/s*r*n,(-Math.cos(rn)*t-Math.sin(rn)*i)/s*r*n,pt),M.crouch=Ir||Pt.has("KeyC")||Pt.has("ControlLeft"),(M.jumpY>0||M.vy)&&(M.vy-=12*n,M.jumpY=Math.max(0,M.jumpY+M.vy*n),M.jumpY||(M.vy=0)),M.y=(M.crouch?.93:1.65)+M.jumpY,(Cn||Pt.has("KeyX"))&&wa()}for(let t of en){if(t.hp<=0){t.dying+=n,t.mesh.rotation.z=Math.min(Math.PI/2,t.dying*2),t.mesh.position.y=-Math.min(.5,t.dying*.4),t.mesh.scale.setScalar(Math.max(.01,1-Math.max(0,t.dying-.8)));continue}t.navTime-=n;let i=Math.hypot(t.x-M.x,t.z-M.z),s=i<16&&!Qs(t.x,t.z,M.x,M.z,pt,M.crouch?.8:1.4);(s||Zt<Dd&&i<18)&&(t.alertUntil=Zt+8);let r=t.alertUntil>Zt,o;if(r){let u=Zt*.55+t.id*1.7;o=i>9?{x:M.x,z:M.z}:{x:M.x+Math.sin(u)*5,z:M.z+Math.cos(u)*5},An(o.x,o.z,.55,pt)&&(o={x:M.x,z:M.z})}else{let u=Id,f=u[t.patrol%u.length];o={x:f[0],z:f[1]},Math.hypot(t.x-o.x,t.z-o.z)<1.2&&(t.patrol=(t.patrol+3)%u.length)}t.navTime<=0&&(t.nav=Vr(t.x,t.z,o.x,o.z,pt.map(u=>({...u,open:!0}))),t.navTime=.7);let a=t.x,c=t.z,l=t.nav[0];if(l){for(let _ of pt)!_.open&&Math.hypot(_.x-t.x,_.z-t.z)<1.6&&(_.open=!0);let u=l.x-t.x,f=l.z-t.z,g=Math.hypot(u,f);if(g<.3)t.nav.shift();else{let _=Math.min(g,(1.9+M.round*.25)*kr(M.round).movement*n);An(t.x+u/g*_,t.z,.5,pt)||(t.x+=u/g*_),An(t.x,t.z+f/g*_,.5,pt)||(t.z+=f/g*_)}}t.mesh.position.set(t.x,0,t.z),t.mesh.rotation.y=Math.atan2(o.x-t.x,o.z-t.z);let h=Math.hypot(t.x-a,t.z-c);t.motion+=(Math.min(1,h/Math.max(n,.001)/1.5)-t.motion)*Math.min(1,n*13);let d=Fn?0:t.motion*.49;for(let[u,f]of t.parts.entries()){let g=Math.sin(Zt*9+u*Math.PI)*d;f.rotation.x=g,t.arms[u].rotation.x=-g*.6-(r?.16:0)}t.visor.material.color.setHex(t.reload>0?16757085:r?16356209:16768397),t.shoot-=n,t.burstClock-=n,t.reload>0?(t.reload=Math.max(0,t.reload-n),t.reload||(t.ammo=9,t.shoot=.4)):r&&s&&!Pe?.training?(t.shoot<=0&&t.burst===0&&(t.burst=Math.min(3,t.ammo)),t.burst>0&&t.burstClock<=0&&ux(t)):t.burst=0}ii.length&&vd(ii,Vs,M,zn().point,en,pt,n,Zt,(t,i)=>{i.hp=Math.max(0,i.hp-14),i.bar.scale.x=i.hp/i.maxHp,i.bar.position.x=-(1-i.bar.scale.x)*.54,i.hp||(i.dying=.01)}),Hs=Hs.filter(t=>{t.x+=t.vx*n,t.z+=t.vz*n,t.y=(t.y??1.4)+(t.vy||0)*n,t.life-=n,t.mesh.position.set(t.x,t.y,t.z);let i=t.life<=0||[...si,...pt.filter(r=>!r.open)].some(r=>Math.abs(t.x-r.x)<r.w/2+.1&&Math.abs(t.z-r.z)<r.d/2+.1&&t.y<r.h),s=(M.crouch?1.02:1.82)+M.jumpY;if(!i&&Math.hypot(t.x-M.x,t.z-M.z)<.45&&t.y>M.jumpY&&t.y<s){let r=M.defuse;Na(M,Ft()?3:Ol()?6:6+M.round*2),Ft()&&M.hp>0&&(M.defuse=r),Cr=.5,$t("hit_thud"),i=!0,M.feedback=M.hp?"\u4E2D\u5F48\uFF01\u9918\u4E0B "+M.hp+" \u751F\u547D\u503C\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002",M.hp||(Bn(),Cn=!1,Vt?.stopEffects(),Ut())}return i&&Mi(t.mesh),!i});let e=xd(Pe,M,On&&!vt,n);e==="relay"&&(M.feedback="\u5317\u9762\u8A18\u9304\u6E96\u5099\u597D\u3002\u53BB"+zn().point.name+"\uFF0C\u6309\u4F4F E \u4EA4\u63A5\u3002",On=!1),e==="complete"&&dx(),ex()}function mx(){let n=qd().completed;return'<section class="panel mission-panel"><h1>\u4EFB\u52D9\u9078\u64C7</h1><p>\u4E09\u5F35\u5730\u5716\u5404\u6709\u4E09\u500B\u4EFB\u52D9\u3002\u6BCF\u5C40\u6709\u7368\u7ACB\u5605 400 \u88DD\u5099\u9EDE\u3002</p><div class="mission-grid">'+[1,2,3].map(e=>{let t=Sl.filter(i=>i.round===e);return"<section><h2>"+t[0].map+"</h2>"+t.map(i=>'<button data-mission="'+i.id+'"><b>'+i.title+"</b><span>"+i.brief+"</span>"+(Number.isFinite(n[i.id])?"<small>\u6700\u4F73 "+(n[i.id]/1e3).toFixed(1)+" \u79D2</small>":"")+"</button>").join("")+"</section>"}).join("")+'</div><button data-action="main-menu">\u8FD4\u56DE</button></section>'}function Ut(){let n=document.body.dataset.phase;!Pe&&(M.phase==="results"||M.phase==="roundend"&&M.round===4)&&n!==M.phase&&window.arcadeRun?.complete("defence"),Fr(),Xs(),document.body.dataset.phase=M.phase,Ws.hidden=!(M.phase==="playing"&&ii.length),_a.value=Vs;let t=Ie("menu");if(t.innerHTML="",M.phase==="menu")t.innerHTML='<section class="panel"><small>FIRST PERSON \xB7 \u539F\u5275\u6A5F\u68B0\u4EBA\u8A13\u7DF4</small><h1>\u9810\u7B97\u9632\u885B\u6230<br>\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002</h1><p>\u907F\u958B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\uFF0C\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u5E33\u76EE\uFF0C\u518D\u62C6\u89E3\u70B8\u5F48\u3002</p><div class="control-guide"><span><b>\u79FB\u52D5</b> WASD\uFF0F\u5DE6\u5C4F\u6416\u687F</span><span><b>\u7784\u6E96</b> \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u62D6\u52D5</span><span><b>\u5C04\u64CA</b> \u5DE6\u9375\u6216\u6309\u4F4F X \xB7 Q \u7784\u6E96</span><span><b>\u4E92\u52D5</b> F \u67E5\u5E33 \xB7 E \u62C6\u89E3</span></div><details><summary>\u64CD\u4F5C\u8AAA\u660E</summary><p>WASD \u79FB\u52D5 \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\u8F49\u5411 \xB7 Esc \u66AB\u505C \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 Q \u7784\u6E96 \xB7 \u7A7A\u767D\u8DF3\u8E8D \xB7 C \u8E72\u4E0B \xB7 1\u20135 \u63DB\u6B66\u5668 \xB7 R \u63DB\u5F48 \xB7 F \u67E5\u5E33 \xB7 E \u958B\u9580\uFF0F\u62C6\u89E3 \xB7 P\uFF0FEsc \u66AB\u505C \xB7 V \u5168\u87A2\u5E55\u3002</p><p>\u89F8\u63A7\u677F\uFF1A\u53EF\u7528\u65B9\u5411\u9375\u8F49\u5411\u3001X \u5C04\u64CA\u3001Q \u7784\u6E96\u3002\u624B\u6A5F\uFF1A\u5DE6\u534A\u5C4F\u62D6\u52D5\u6416\u687F\u79FB\u52D5\u3001\u53F3\u534A\u5C4F\u62D6\u52D5\u7784\u6E96\uFF1B\u6309 E \u958B\u9580\uFF0C\u6309\u4F4F E \u62C6\u89E3\u3002</p></details><div class="settings"><label><input id="reduce" type="checkbox" '+(Fn?"checked":"")+'> \u6E1B\u5C11\u93E1\u982D\u52D5\u614B</label></div><div class="actions"><button data-action="begin">'+(Ft()?"\u958B\u59CB\u6838\u5C0D\u8CB8\u6B3E":"\u55AE\u4EBA\u4E09\u8F2A")+"</button>"+(Ft()?"":'<button data-action="ex">EX \u95DC \xB7 \u6A5F\u68B0\u4EBA\u570D\u653B</button><button data-action="duel">1 \u5C0D 1</button><a href="range.html">\u7121\u969C\u7919\u4E0D\u9650\u6642\u6587\u5B57\uFF0F\u6A19\u9776\u7248 \u2197</a>')+"</div></section>";else if(M.phase==="missions")t.innerHTML=mx();else if(M.phase==="buy")t.innerHTML='<section class="panel"><small>'+(M.round===4?"EX \u95DC":"ROUND "+M.round+" / 3")+" \xB7 BUY PHASE</small><h1>"+(Pe?.training?"3D \u7DF4\u7FD2\u5834":Pe?Pe.mission.map+" \xB7 "+Pe.mission.title:"\u5148\u7559\u4E0B\u4E00\u8F2A\u5605\u8CC7\u6E90\u3002")+"</h1><p>\u9918\u4E0B <b>"+M.credits+" \u91D1\u5E63</b>\u3002\u624B\u69CD\u8207\u5315\u9996\u514D\u8CBB\u3002\u6BCF\u8F2A\u6709 100 \u751F\u547D\u503C\uFF0C\u8ACB\u5229\u7528\u63A9\u9AD4\uFF1B\u5668\u6750\u53EA\u9650\u4ECA\u8F2A\u3002</p>"+(Ft()?"<p>\u5DF2\u63D0\u4F9B\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177\u3002\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u963F\u4FCA\u5605\u8CB8\u6B3E\u8CC7\u6599\u3002</p>":Pe?"<p>"+Pe.mission.brief+"</p>":"")+'<div class="gear">'+Object.entries(Hr).map(([i,s])=>"<div><b>"+s.label+"</b><small>"+{bazooka:Ys(),carbine:"24 \u767C\uFF0C\u5C04\u901F\u8F03\u5FEB",sniper:"5 \u767C\uFF0C\u55AE\u767C\u9AD8\u5A01\u529B\uFF0C\u53EF\u958B\u93E1",kit:"\u62C6\u89E3\u7531 5 \u79D2\u6E1B\u81F3 3 \u79D2"}[i]+"</small><strong>"+s.cost+' \u91D1\u5E63</strong><button data-buy="'+i+'" '+(M.purchases.includes(i)||M.credits<s.cost?"disabled":"")+">"+(M.purchases.includes(i)?"\u5DF2\u8CFC\u8CB7":"\u8CFC\u8CB7")+"</button></div>").join("")+'</div><div class="actions"><button data-action="start">\u9032\u5165\u6230\u5834</button>'+(Pe?'<button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button>':"")+"</div></section>";else if(M.phase==="paused")t.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u66AB\u505C</h1><span data-pfap-audio-slot></span><p>\u6309\u4F4F\u53F3\u9375\u62D6\u52D5\u8F49\u5411\uFF0C\u653E\u958B\u5373\u505C\u3002Esc \u66AB\u505C\u3002V \u5207\u63DB\u5168\u87A2\u5E55\u3002</p><p>\u79FB\u52D5\u3001AI\u3001\u5B50\u5F48\u3001\u63DB\u5F48\u540C\u5012\u6578\u5DF2\u505C\u3002'+Math.ceil(M.time)+" \u79D2 \xB7 "+M.ammo+' \u767C\u3002</p><div class="actions"><button data-action="resume">\u7E7C\u7E8C\u4EFB\u52D9</button><button data-action="retry">'+(M.round===4?"\u91CD\u8A66 EX \u95DC":Pe?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+"</button></div></section>";else if(M.phase==="roundend"&&Ft())t.innerHTML='<section class="panel"><h1>\u6838\u5C0D\u5B8C\u6210</h1><p>'+Ul().why+'</p><button data-action="exit">\u8FD4\u56DE\u8ABF\u67E5</button></section>';else if(M.phase==="roundend"&&Pe)t.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u5B8C\u6210</h1><p>'+Pe.mission.map+" \xB7 "+Pe.mission.title+" \xB7 "+Zt.toFixed(1)+" \u79D2</p><p>"+ri[M.round-1].why+'</p><div class="actions"><button data-action="retry">\u518D\u8A66\u4E00\u6B21</button><button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button></div></section>';else if(M.phase==="roundend"&&M.round===4)t.innerHTML='<section class="panel"><h1>EX \u95DC \xB7 \u62C6\u89E3\u5B8C\u6210</h1><p>'+Nd.why+'</p><div class="actions"><button data-action="retry">\u518D\u6230 EX \u95DC</button><button data-action="exit">\u9000\u51FA</button></div></section>';else if(M.phase==="roundend")t.innerHTML='<section class="panel"><small>FINANCIAL BOMB DEFUSED</small><h1>\u7B2C '+M.round+" \u8F2A\uFF1A\u62C6\u89E3\u5B8C\u6210\u3002</h1><p>"+ri[M.round-1].why+"</p><p>\u5236\u6B62 "+M.kills+" \u500B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\u3002\u5668\u6750\u5269\u9918 "+M.credits+' \u91D1\u5E63\uFF0C\u7559\u7540\u4E0B\u4E00\u8F2A\u3002</p><button data-action="next">'+(M.round>=3?"\u67E5\u770B\u4EFB\u52D9\u7E3D\u7D50":"\u4E0B\u4E00\u8F2A")+"</button></section>";else if(M.phase==="results"){let i=Wr(M);if(!va&&!Ft()&&!window.arcadeTest){va=!0;try{let s=JSON.parse(localStorage.getItem("website-v1-arcade")||"{}"),r=JSON.parse(localStorage.getItem("website-v1-records")||"{}");s.defence={score:i.judgement+i.reserve,completed:!0},r.defence={best:Math.max(r.defence?.best||0,i.judgement+i.reserve),plays:(r.defence?.plays||0)+1},localStorage.setItem("website-v1-arcade",JSON.stringify(s)),localStorage.setItem("website-v1-records",JSON.stringify(r))}catch{}}t.innerHTML='<section class="panel"><small>MISSION COMPLETE</small><h1>\u4FDD\u4F4F\u9700\u8981\uFF0C\u7559\u4F4E\u672A\u4F86\u3002</h1><div class="score-row"><p>\u91D1\u878D\u5224\u65B7<br><b>'+i.judgement+"\uFF0F80</b></p><p>\u8CC7\u6E90\u4FDD\u7559<br><b>"+i.reserve+"\uFF0F20</b></p><p>\u5C04\u64CA\u6E96\u78BA\u7387\uFF08\u53E6\u8A08\uFF09<br><b>"+i.accuracy+"%</b></p></div><p>\u5236\u6B62 "+M.totalKills+' \u500B\u6A5F\u68B0\u4EBA\uFF0C\u62C6\u89E3\u4E09\u679A\u865B\u69CB\u8CA1\u52D9\u70B8\u5F48\u3002\u91D1\u878D\u5224\u65B7\u53EA\u8A08\u7D42\u7AEF\u9996\u6B21\u6838\u5C0D\uFF0C\u5C04\u64CA\u6E96\u78BA\u7387\u5514\u52A0\u5165\u91D1\u878D\u5206\u6578\u3002\u5148\u4FDD\u57FA\u672C\u751F\u6D3B\u3001\u67E5\u6E05\u7E3D\u984D\u540C\u6536\u5165\u65E5\u671F\uFF0C\u518D\u70BA\u672A\u4F86\u76EE\u6A19\u9810\u7559\u8CC7\u6E90\u3002\u4E03\u65E5\u5F8C\u518D\u6AA2\u8996\u5B89\u6392\u3002</p><div class="actions"><button data-action="retry">\u518D\u73A9\u4E00\u6B21</button><button data-action="exit">\u8FD4\u56DE\u904A\u6232\u9078\u55AE</button></div></section>'}else M.phase==="dead"&&(t.innerHTML='<section class="panel"><small>RETRY / \u518D\u5B89\u6392\u8DEF\u7DDA</small><h1>'+(M.hp?"\u4ECA\u6B21\u672A\u80FD\u8D95\u53CA\u62C6\u89E3\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002\u518D\u5B89\u6392\u4F0F\u64CA\u8DEF\u7DDA\u3002")+'</h1><p>\u7528\u63A9\u9AD4\u963B\u64CB\u706B\u529B\uFF0C\u907F\u958B\u6216\u53CD\u64CA\u6A5F\u68B0\u4EBA\uFF0C\u518D\u5230\u5317\u9762\u7D42\u7AEF\u67E5\u5E33\u3002\u6210\u7E3E\u5514\u6703\u6539\u52D5\u963F\u4FCA\u5605\u6545\u4E8B\u3002</p><div class="actions"><button data-action="retry">'+(M.round===4?"\u91CD\u8A66 EX \u95DC":Pe?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+'</button><button data-action="exit">\u9000\u51FA</button></div></section>');["playing","dying"].includes(M.phase)&&(t.innerHTML=""),Vt?.mountControls()}var Tn=(n,e)=>{let t=Ie(n);window.siteLocale?window.siteLocale.write(t,e):t.textContent!==e&&(t.textContent=e)},Nn=(n,e,t)=>{n[e]!==t&&(n[e]=t)},ya=(n,e,t)=>{n.getAttribute(e)!==t&&n.setAttribute(e,t)};function Yd(){let n=Ie("hud");document.documentElement.style.setProperty("--hud-bottom",n.offsetTop+n.offsetHeight+"px")}var Qd=Ie("minimap");function gx(n){let e=Qd.getContext("2d");if(!e||!Vi)return;let t=3.5,i=r=>64+r*t;e.fillStyle="#162e2c",e.fillRect(0,0,128,128),e.fillStyle="#748783";for(let r of Vi.walls)e.fillRect(i(r.x-r.w/2),i(r.z-r.d/2),r.w*t,r.d*t);e.fillStyle="#dda767";for(let r of pt)r.open||e.fillRect(i(r.x-r.w/2),i(r.z-r.d/2),r.w*t,r.d*t);function s(r,o,a,c){e.fillStyle=a,e.beginPath(),e.arc(i(r),i(o),c,0,Math.PI*2),e.fill()}s(n.x,n.z,"#ffd277",3);for(let r of en)r.hp>0&&s(r.x,r.z,"#ff8e76",2.2);s(M.x,M.z,"#a9f5de",3),e.strokeStyle="#a9f5de",e.beginPath(),e.moveTo(i(M.x),i(M.z)),e.lineTo(i(M.x)-Math.sin(rn)*9,i(M.z)-Math.cos(rn)*9),e.stroke()}function _x(){let n=zn(),e=M.phase==="playing"&&!vt,t=e&&Fs(M,n.point);Qd.hidden=!e,e&&gx(n.point);let i=Pe?pt.find(a=>Fs(M,a)):Ua(M,pt),s=e&&!t&&(Pe?!!i:i?.type==="door");Nn(Ie("interaction-hint"),"hidden",!s),s&&Tn("interaction-hint",i.open?"[ E ] \u95DC\u9580":"[ E ] \u958B\u9580");let r=en.reduce((a,c)=>a+ +(c.hp>0),0);Tn("round",M.round===4?"EX":Pe?Vi.name:M.round+"/3"),Tn("health",M.hp+" / 100"),Nn(Ie("health-bar"),"value",M.hp),ya(Ie("health-wrap"),"data-low",String(M.hp<=25)),Tn("ammo",M.weapon==="knife"?"\u5315\u9996 \xB7 \u8FD1\u6230":et[M.weapon].label+" \xB7 \u5F48\u5323 "+M.ammo+" / \u5099\u5F48 "+M.reserves[M.weapon]+(M.reload?" \xB7 \u63DB\u5F48 "+M.reload.toFixed(1)+"s":"")+(M.weapon==="sniper"&&M.cooldown>0?" \xB7 \u62C9\u6813 "+M.cooldown.toFixed(1)+"s":"")),Tn("timer",Math.ceil(M.time)+"s"),Tn("money",M.credits+" \u91D1\u5E63");let o={check:"F \u67E5\u5E33",defuse:"\u6309\u4F4F E \u62C6\u89E3",prepare:"\u6309\u4F4F E \u6574\u7406",handoff:"\u6309\u4F4F E \u4EA4\u63A5",upload:"\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3"}[n.kind];Tn("objective",n.point.name+" \xB7 "+o+" \xB7 "+r+" \u500B\u6A5F\u68B0\u4EBA\u6D3B\u52D5\u4E2D"),Tn("notice",M.feedback),Nn(Ie("defuse"),"hidden",!t),t&&(Tn("defuse-label",M.defuse>0?o+" \xB7 "+M.defuse.toFixed(1)+" / "+n.seconds+" \u79D2":o),Nn(Ie("defuse-progress"),"max",n.seconds),Nn(Ie("defuse-progress"),"value",M.defuse)),ya(Ie("crouch"),"aria-pressed",String(M.crouch));for(let a of jA)Nn(a,"disabled",!M.owned.includes(a.dataset.weapon)),ya(a,"aria-pressed",String(M.weapon===a.dataset.weapon))}function Jd(){return M.phase==="dying"||M.phase==="playing"&&!vt}function Zd(){!document.body.dataset.webglError&&!Ma&&!Lr&&!Ur&&!document.hidden&&(Bs||Jd())&&(Ma=requestAnimationFrame(Ax))}function Xs(){!Kt||document.body.dataset.webglError||(Bs=!0,Zd())}var ga=0,Rl=1e3/60;function Ax(n){if(Ma=0,Lr||Ur||document.hidden)return;let e=bi?Math.max(0,(n-bi)/1e3):0;if(bi=n,Jd()){let o=Math.min(e,.15),a=Math.max(1,Math.ceil(o/.03));for(let l=0;l<a;l++)px(o/a);e>.15&&M.phase==="playing"&&(M.time=Math.max(0,M.time-(e-.15)));let c=Math.exp(-e*13);for(let l of en)l.chassisMaterial?.emissive.multiplyScalar(c);Cr=Math.max(0,Cr-e),ks=Math.max(0,ks-e),Dr=Dr.filter(l=>(l.life-=e,l.life>0?!0:(Mi(l.mesh),!1))),mn.userData.life>0&&(mn.userData.life-=e),mn.visible=mn.userData.life>0,pn.position.z=-.65+(!Fn&&mn.visible?.05:0),pn.rotation.x=M.reload?-Math.sin(M.reload/et[M.weapon].reload*Math.PI)*.7:M.weapon==="knife"&&M.cooldown>0?-Math.sin(M.cooldown/.6*Math.PI)*1.4:0,pn.position.y=-.32+(Fn?0:Math.sin(Zt*9)*.007)}(Bs||n>=bd)&&(_x(),bd=n+80),ya(document.body,"data-terminal",String(vt)),Nn(Ie("scope-view"),"hidden",!(gn&&M.weapon==="sniper")),Nn(Ie("hitmarker"),"hidden",ks<=0),Nn(Ie("headshot"),"hidden",Pr<=0),Nn(Ie("damage").style,"opacity",Fn?"0":String(Math.min(.65,Cr))),M.phase!=="dying"&&(It.position.set(M.x,M.y,M.z),It.rotation.set(Gs+Un,rn,0,"YXZ"));for(let o of en)o.meter.visible=o.hp>0,o.meter.visible&&(o.meter.rotation.y=Math.atan2(M.x-o.x,M.z-o.z)-o.mesh.rotation.y);let t=1-Math.pow(.8,e*60);for(let o of Nl)o.group.position.y+=((o.d.open?o.d.h+2:o.d.h/2)-o.group.position.y)*t,o.status.material.color.setHex(o.d.open?8767136:15117669);let i=zn().point;Rn.station.position.set(i.x,0,i.z);let s=M.verified?8443050:M.time<10?15960688:15578723;Rn.strip.material.color.setHex(s),Rn.lamp.material.color.setHex(s),Rn.stationSign.visible=!M.verified,Rn.verifiedSign.visible=M.verified;let r=gn?M.weapon==="sniper"?28:57:76;It.fov!==r&&(It.fov=r,It.updateProjectionMatrix()),pn.visible=!(gn&&M.weapon==="sniper"),(Bs||n>=ga-1)&&(Kt.render(bt,It),ga=ga<n-Rl||Bs?n+Rl:ga+Rl),Bs=!1,Zd()}var Ed=0,wd=0,Td=0;function Or(){if(!Kt)return;let n=_n.clientWidth,e=_n.clientHeight;if(!n||!e)return;let t=Math.min(devicePixelRatio||1,1.35,Math.sqrt(15e5/(n*e)));n===Ed&&e===wd&&t===Td||(Ed=n,wd=e,Td=t,Kt.setPixelRatio(t),Kt.setSize(n,e,!1),Kt.shadowMap.enabled=n>=900&&matchMedia("(pointer:fine)").matches,It.aspect=n/e,It.updateProjectionMatrix(),Xs())}function Kd(){Lr||(Lr=!0,Ea(),Dl?.disconnect(),Ll?.disconnect(),vi=[],Wi?.dispose(),Wi=null,cancelAnimationFrame(Ma),Pd.abort(),Pt.clear(),Vt?.stopEffects(),bt?.traverse(n=>{n.geometry?.dispose(),(n.material?Array.isArray(n.material)?n.material:[n.material]:[]).forEach(t=>{t.map?.dispose(),t.dispose()})}),Kt?.dispose(),Kt?.forceContextLoss(),Bn())}function $d(){Kd(),parent!==window?(parent.postMessage({type:"budget-defence-exit"},location.origin),parent.postMessage({type:"website-v1-back"},location.origin)):location.href="../../#play"}try{tx()}catch(n){document.body.dataset.webglError="true",document.body.dataset.phase="unavailable",Ie("pause").disabled=!0,_n.innerHTML='<section class="panel webgl-fallback"><h1>3D \u756B\u9762\u672A\u80FD\u555F\u52D5</h1><p>\u53EF\u4EE5\u8F49\u7528\u76F8\u540C\u5B78\u7FD2\u5167\u5BB9\u5605\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002</p><a href="./range.html">\u6253\u958B\u7121\u969C\u7919\u7248\u672C</a></section>',console.warn("Budget Defence WebGL unavailable",n)}je(document,"click",n=>{Xi();let e=n.target.closest("[data-action]")?.dataset.action,t=n.target.closest("[data-buy]")?.dataset.buy,i=n.target.closest("[data-weapon]")?.dataset.weapon,s=n.target.closest("[data-answer]")?.dataset.answer;i&&zd(i),t&&jl(M,t)&&($t("buy_equip"),M.feedback="\u5DF2\u8CB7 "+Hr[t].label+"\uFF0C\u53EA\u6263\u4E00\u6B21\u3002",Ut()),e==="duel"&&M.phase==="menu"&&!window.arcadeTest&&!Ft()&&md(()=>Nr("rocket-impact"),Nr,"duel"),e==="ex"&&(Pe=null,M=wi(),M.round=4,M.credits=600,M.phase="buy",Ut()),e==="begin"&&(Pe=null,M.phase="buy",Ft()&&(M.purchases=["kit"]),Ut()),e==="training"&&!Ft()&&xa("1-verify",!0),e==="missions"&&!Ft()&&(Sa(),Pe=null,M=wi(),M.phase="missions",Ut()),e==="main-menu"&&(Pe=null,M=wi(),Ut());let r=n.target.closest("[data-mission]")?.dataset.mission;if(r&&M.phase==="missions"&&xa(r),e==="start"&&rx(),e==="resume"&&Vd(),e==="retry")if(Pe)xa(Pe.mission.id,Pe.training);else{let o=M.round===4;Sa(),va=!1,M=wi(),o&&(M.round=4,M.credits=600),M.phase="buy",Ft()&&(M.purchases=["kit"]),Ut()}if(e==="next"){if(M.phase!=="roundend"||Pe||Ft())return;M.round>=3?M.phase="results":(M.round++,M.phase="buy",M.purchases=[]),Ut()}e==="exit"&&$d(),s!==void 0&&(nh(M,Number(s),Ul())?(vt=!1,Ie("terminal").hidden=!0,Pe&&zn().kind==="upload"&&(M.feedback="\u8CC7\u6599\u5DF2\u6838\u5BE6\u3002\u53BB"+zn().point.name+"\uFF0C\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3\u3002"),Xi(),_n.focus()):M.phase==="playing"&&M.checked&&!M.verified&&(vt=!1,Ie("terminal").hidden=!0,M.phase="dead",M.time=0,M.feedback="\u6838\u5BE6\u932F\u8AA4\uFF0C\u88DD\u7F6E\u5DF2\u5F15\u7206\u3002",Bn(),Ut())),n.target.id==="terminal-back"&&(vt=!1,Ie("terminal").hidden=!0,_n.focus()),(s!==void 0||n.target.id==="terminal-back")&&(bi=0,Fr(),Xs())});je(Ie("fullscreen"),"click",Wd);je(Ie("settings-open"),"click",lx);je(document,"fullscreenchange",()=>{Ie("fullscreen").textContent=document.fullscreenElement?"\u9000\u51FA\u5168\u87A2\u5E55 V":"\u5168\u87A2\u5E55 V",Ie("fullscreen").setAttribute("aria-pressed",String(!!document.fullscreenElement)),Or()});for(let n of["sensitivity","ads","volume"])je(Ie("setting-"+n),"input",e=>{Dt[n]=Number(e.target.value),Ie(""+n+"-output").textContent=n==="volume"?Math.round(Dt[n]*100)+"%":Dt[n].toFixed(2)+"\xD7",Gd()});for(let n of["invert","reduced"])je(Ie("setting-"+n),"change",e=>{Dt[n]=e.target.checked,Gd()});je(Ie("pause"),"click",qi);je(Ie("exit"),"click",$d);Ie("mute").replaceWith(Vt.controls());je(document,"change",n=>{n.target.id==="reduce"&&(Fn=n.target.checked)});je(Ie("reload"),"click",Ta);je(Ie("check"),"click",Xd);je(Ie("jump"),"click",kd);je(Ie("crouch"),"click",()=>{M.phase==="playing"&&!vt&&(Ir=!Ir)});je(Ie("scope"),"click",Bd);je(document,"keydown",n=>{if(!(n.target instanceof Element&&n.target.matches("input,select,textarea"))&&!Ie("settings-dialog").open){if(["KeyP","Escape"].includes(n.code)){n.repeat||(n.code==="KeyP"&&M.phase==="paused"?Vd():qi());return}if(n.code==="KeyV"&&!n.repeat){n.preventDefault(),Wd();return}M.phase!=="playing"||vt||(["KeyW","KeyA","KeyS","KeyD","Space","KeyE","KeyR","KeyF","KeyX","KeyQ","ArrowLeft","ArrowRight","ShiftLeft"].includes(n.code)&&n.preventDefault(),Pt.add(n.code),n.code==="Space"&&!n.repeat&&kd(),n.code==="KeyX"&&!n.repeat&&wa(),n.code==="KeyQ"&&!n.repeat&&Bd(),/^Digit[1-5]$/.test(n.code)&&zd(["pistol","carbine","sniper","knife","bazooka"][Number(n.code.slice(-1))-1]),n.code==="KeyR"&&!n.repeat&&Ta(),n.code==="KeyF"&&!n.repeat&&Xd(),n.code==="KeyE"&&!n.repeat&&jd())}});je(document,"keyup",n=>{Pt.delete(n.code),n.code==="KeyE"&&(On=!1)});function jd(){((Pe?M.verified&&Fs(M,zn().point):Ua(M,pt)?.type==="defuse")||!ix())&&(On=!0)}function xx(n,e){let t=Md(n,e,gn,Dt);rn-=t.yaw,Gs=Math.max(-1.2,Math.min(1.2,Gs-t.pitch))}var zl=Kt?.domElement??_n,ef=()=>M.phase==="playing"&&!vt&&!Ie("settings-dialog").open;je(zl,"webglcontextlost",n=>{n.preventDefault(),Ur=!0,Bn(),Pt.clear(),qi(),Tn("view-status","3D \u756B\u9762\u66AB\u505C\u3002\u7B49\u5019\u700F\u89BD\u5668\u6062\u5FA9\uFF0C\u4EA6\u53EF\u4F7F\u7528\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002")});je(zl,"webglcontextrestored",()=>{Ur=!1,bi=0,Tn("view-status","3D \u756B\u9762\u5DF2\u6062\u5FA9\u3002\u6309\u300C\u7E7C\u7E8C\u4EFB\u52D9\u300D\u8FD4\u56DE\u3002"),Xs()});Hd=aa({on:je,canvas:zl,active:ef,look:xx,stickRadius:()=>yi.offsetWidth*.3||36,walk(n,e,t,i){if(Rd=n,Cd=e,i){let s=_n.getBoundingClientRect(),r=yi.offsetWidth/2;yi.style.left=Math.max(r,Math.min(s.width/2-r,i.x-s.left))+"px",yi.style.top=Math.max(r,Math.min(s.height-r,i.y-s.top))+"px",yi.style.bottom="auto",yi.style.setProperty("--stick-x",t.x+"px"),yi.style.setProperty("--stick-y",t.y+"px")}else yi.removeAttribute("style")},fire(n){Cn=n,n&&(Xi(),wa())},clearInput(){Pt.clear(),Cn=On=gn=!1}});for(let n of document.querySelectorAll("[data-hold]")){let e=null,t=n.dataset.hold==="fire";je(n,"pointerdown",i=>{!ef()||e!==null||i.button!==0||(i.preventDefault(),n.setPointerCapture(i.pointerId),e=i.pointerId,t?(Cn=!0,Xi(),wa()):jd())});for(let i of["pointerup","pointercancel","lostpointercapture"])je(n,i,s=>{e===s.pointerId&&(e=null,t?Cn=!1:On=!1)})}je(document,"visibilitychange",()=>{document.hidden?(qi(),bi=0):Xs()});je(window,"blur",()=>{qi()});je(window,"resize",Or);je(window,"pagehide",Kd);je(window,"site-language-change",()=>{bt.traverse(n=>n.userData.localize?.()),Xs()});Dl=new ResizeObserver(Yd);Dl.observe(Ie("hud"));Ll=new ResizeObserver(Or);Ll.observe(_n);Yd();window.fpsSnapshot=()=>({...M,recoilPitch:Un,score:Wr(M),enemies:en.map(n=>({x:n.x,z:n.z,hp:n.hp,maxHp:n.maxHp,ammo:n.ammo,reload:n.reload,burst:n.burst,dying:n.dying})),bullets:Hs.length,terminalOpen:vt,squad:{order:Vs,members:ii.map(({id:n,x:e,z:t})=>({id:n,x:e,z:t}))},audio:Vt?.now()?"running":"not-started",walls:si,doors:pt.map(n=>({...n})),view:{yaw:rn,pitch:Gs,scoped:gn,locked:!!document.pointerLockElement},settings:{...Dt},fullscreen:!!document.fullscreenElement,map:Vi?.name,mission:Pe?{id:Pe.mission.id,stage:Pe.stage,target:zn()}:null,graphics:{court:document.body.dataset.court,calls:Kt?.info.render.calls||0,triangles:Kt?.info.render.triangles||0},posture:{crouch:M.crouch,jump:M.jumpY}});document.body.dataset.webglError||(Sd?xa(Sd[1]):Ut());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
