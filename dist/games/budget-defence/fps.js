(()=>{var Hl=Object.freeze([4,5,6]),kl=Object.freeze([Object.freeze({movement:1,projectile:1,health:1}),Object.freeze({movement:1.15,projectile:1.15,health:1.15}),Object.freeze({movement:1.25,projectile:1.25,health:1.3})]),Or=n=>kl[n-1]??kl[0],Ca=n=>n.ammo===0&&!n.reload&&je[n.weapon].reload>0&&n.reserves[n.weapon]>0,Pa=[{x:0,z:-18,w:36,d:1,h:5},{x:0,z:18,w:36,d:1,h:5},{x:-18,z:0,w:1,d:36,h:5},{x:18,z:0,w:1,d:36,h:5},{x:-7,z:-5,w:.65,d:14,h:3.8},{x:-7,z:7,w:.65,d:2,h:3.8},{x:-7,z:11,w:.65,d:2,h:3.8},{x:7,z:4,w:.65,d:12,h:3.8},{x:7,z:-14.25,w:.65,d:3.5,h:3.8},{x:7,z:-7.75,w:.65,d:3.5,h:3.8},{x:-3.75,z:-4,w:4.5,d:.65,h:3.8},{x:3.75,z:-4,w:4.5,d:.65,h:3.8},{x:-3,z:6,w:2.2,d:2,h:1.15},{x:3,z:6,w:2.2,d:2,h:1.15},{x:-12,z:7,w:2.5,d:2,h:1.2},{x:12,z:4,w:2,d:2,h:1.2},{x:-11,z:-8,w:2.3,d:2.3,h:1.2},{x:11,z:-10,w:2.3,d:2.3,h:1.2},{x:3,z:-11,w:2,d:2,h:1.2}],Zd=()=>[{id:"west",x:-7,z:4,w:.65,d:3.8,h:3.5,open:!1},{id:"east",x:7,z:-4,w:.65,d:3.8,h:3.5,open:!1},{id:"vault",x:0,z:-4,w:2.9,d:.65,h:3.5,open:!1},{id:"west-shortcut",x:-7,z:9,w:.65,d:1.9,h:3.5,open:!1},{id:"east-shortcut",x:7,z:-11,w:.65,d:2.9,h:3.5,open:!1}],Gl=Pa.slice(0,4),Ze=(n,e,t,i,s=3.8)=>({x:n,z:e,w:t,d:i,h:s}),Dn=(n,e,t,i,s)=>({id:n,x:e,z:t,w:i,d:s,h:3.5,open:!1});function Vi(n=1){return n===1?{name:"\u820A\u57CE\u8857\u5340",walls:Pa.map(e=>({...e})),doors:Zd()}:n===2?{name:"\u5009\u5EAB\u8FF4\u5ECA",walls:[...Gl,Ze(-14.4,4,5.2,.65),Ze(-5,4,6,.65),Ze(5,4,6,.65),Ze(14.4,4,5.2,.65),Ze(-6,-4,.65,10),Ze(6,-4,.65,10),Ze(-12.5,-9,9,.65),Ze(0,-9,10,.65),Ze(12.5,-9,9,.65),Ze(-12,9,3,2,1.15),Ze(12,8,3,2,1.15),Ze(0,9,2.5,2,1.15),Ze(-12,-3,2,3,1.2),Ze(12,-3,2,3,1.2),Ze(-3,-13,2,2,1.2),Ze(8,-14,2,2,1.2)],doors:[Dn("west-store",-10,4,3.4,.65),Dn("main-store",0,4,3.8,.65),Dn("east-store",10,4,3.4,.65),Dn("west-vault",-6.5,-9,2.7,.65),Dn("east-vault",6.5,-9,2.7,.65)]}:{name:"\u82B1\u5712\u5821\u58D8",walls:[...Gl,Ze(-9,6,.65,14),Ze(9,6,.65,14),Ze(-9,-7,.65,6),Ze(9,-7,.65,6),Ze(0,-6,.65,10),Ze(0,3,4,.65),Ze(-6.5,3,3,.65),Ze(6.5,3,3,.65),Ze(-6,-12,7,.65),Ze(6,-12,7,.65),Ze(-3,10,2,2,1.1),Ze(3,10,2,2,1.1),Ze(-5,-5,2,2,1.1),Ze(5,-6,2,2,1.1),Ze(-13,7,2.5,3,1.2),Ze(13,5,2.5,3,1.2)],doors:[Dn("left-court",-3.5,3,2.8,.65),Dn("right-court",3.5,3,2.8,.65),Dn("west-passage",-9,-2.5,.65,2.8),Dn("east-passage",9,-2.5,.65,2.8),Dn("temple-vault",0,-12,4.8,.65)]}}var si=Pa;function Vl(n=1){let e=Vi(n);return si=e.walls,e}var Wl=(n=1)=>Vi(n).doors,ri=[{q:"\u300C\u4FDD\u8B49\u56DE\u5831\uFF0C\u5148\u8F49\u8A02\u91D1\u3002\u300D\u800C\u57FA\u672C\u751F\u6D3B\u8CBB\u672A\u9810\u7559\u3002",answers:["\u62D2\u7D55\u8F49\u5E33\uFF0C\u5148\u4FDD\u57FA\u672C\u9700\u8981","\u5148\u7540\u8A02\u91D1\uFF0C\u4E4B\u5F8C\u518D\u8AD7\u751F\u6D3B\u8CBB"],right:0,why:"\u4FDD\u8B49\u56DE\u5831\u540C\u50AC\u4FC3\u8F49\u5E33\u4FC2\u8B66\u865F\u3002\u5148\u6838\u5BE6\u8CC7\u6599\u3001\u4FDD\u4F4F\u57FA\u672C\u9700\u8981\u3002"},{q:"\u4ECA\u65E5\u53EA\u6709 $50\uFF1B$600 \u4EBA\u5DE5\u4E09\u65E5\u5F8C\u5148\u5230\u3002",answers:["\u7576\u4F5C\u5DF2\u6709 $650\uFF0C\u4ECA\u65E5\u5C31\u82B1","\u53EA\u7528\u73FE\u6709\u73FE\u91D1\uFF0C\u78BA\u8A8D\u5230\u5E33\u65E5\u518D\u6392\u652F\u51FA"],right:1,why:"\u672A\u5230\u5E33\u6536\u5165\u5514\u4FC2\u4ECA\u65E5\u53EF\u7528\u73FE\u91D1\uFF1B\u5148\u5B89\u6392\u6BCF\u65E5\u9700\u8981\u540C\u7F3A\u53E3\u3002"},{q:"\u6E4A\u55AE\u514D\u904B $300\uFF1B\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\u9023\u904B\u8CBB $205\u3002",answers:["\u53EA\u8CB7\u9700\u8981\u5605\u8CA8\uFF0C\u5BE6\u4ED8 $205","\u591A\u8CB7\u672A\u9700\u8981\u5605\u5622\uFF0C\u70BA\u5497\u514D\u904B\u4ED8 $300"],right:0,why:"\u6BD4\u8F03\u6700\u5F8C\u7E3D\u984D\u3002\u5514\u70BA\u5497\u514D\u904B\u800C\u591A\u82B1 $95\u3002"}],je={pistol:{label:"\u624B\u69CD",mag:12,reserve:60,damage:24,cooldown:.42,reload:1.4,range:50},carbine:{label:"\u6B65\u69CD",mag:24,reserve:96,damage:25,cooldown:.13,reload:1.8,range:55},sniper:{label:"\u72D9\u64CA\u69CD",mag:5,reserve:20,damage:85,cooldown:1.3,reload:2.3,range:75},bazooka:{label:"\u706B\u7BAD\u7B52",mag:1,reserve:5,damage:220,splash:160,blastRadius:4.5,selfCap:50,cooldown:1.5,reload:2.5,range:55},knife:{label:"\u5315\u9996",mag:0,reserve:0,damage:60,cooldown:.6,reload:0,range:2.2}};function Xl(n){return{magazines:Object.fromEntries(n.map(e=>[e,je[e].mag])),reserves:Object.fromEntries(n.map(e=>[e,je[e].reserve]))}}function Kd(n,e){n.magazines[n.weapon]=n.ammo,n.weapon=e,n.reload=0,n.ammo=n.magazines[e]??je[e].mag,n.reserves[e]??=je[e].reserve,n.maxAmmo=je[e].mag}function ql(n){let e=je[n.weapon];return n.reload||!e.reload||n.ammo>=e.mag||!n.reserves[n.weapon]?!1:(n.reload=e.reload,!0)}function Yl(n,e){if(!n.reload||e<=0||(n.reload=Math.max(0,n.reload-e),n.reload))return;let t=Math.min(je[n.weapon].mag-n.ammo,n.reserves[n.weapon]);n.ammo+=t,n.reserves[n.weapon]-=t}var Ws=()=>`\u76F4\u64CA ${je.bazooka.damage} \xB7 \u7206\u98A8\u4E2D\u5FC3 ${je.bazooka.splash} \xB7 \u534A\u5F91 ${je.bazooka.blastRadius}m \xB7 \u5171 ${je.bazooka.mag+je.bazooka.reserve} \u767C\uFF0C\u81EA\u50B7\u4E0A\u9650 ${je.bazooka.selfCap}`,Br={bazooka:{cost:350,label:"\u706B\u7BAD\u7B52"},carbine:{cost:220,label:"\u6B65\u69CD"},sniper:{cost:300,label:"\u72D9\u64CA\u69CD"},kit:{cost:80,label:"\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177"}};function Wi(){return{phase:"menu",round:1,credits:0,earned:0,spent:0,headshots:0,weaponReady:{},purchases:[],hp:100,weapon:"pistol",owned:["pistol","knife"],...Xl(["pistol","knife"]),ammo:12,maxAmmo:12,reload:0,cooldown:0,time:95,defuse:0,verified:!1,checked:!1,decisionCorrect:0,attempts:0,kills:0,totalKills:0,shots:0,hits:0,melee:0,x:0,z:14,y:1.65,jumpY:0,vy:0,crouch:!1,feedback:"100 \u751F\u547D\u503C\u3002\u5229\u7528\u63A9\u9AD4\u3001\u5075\u5BDF\u8DEF\u7DDA\uFF0C\u518D\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002"}}function An(n,e,t=.34,i=[]){return[...si,...i.filter(s=>!s.open)].some(s=>Math.abs(n-s.x)<s.w/2+t&&Math.abs(e-s.z)<s.d/2+t)}function zr(n,e,t,i=[]){An(n.x+e,n.z,.34,i)||(n.x+=e),An(n.x,n.z+t,.34,i)||(n.z+=t)}function Xs(n,e,t,i,s=[],r=1.4){let o=Math.hypot(t-n,i-e),a=[...si,...s.filter(c=>!c.open)].filter(c=>c.h>=r);for(let c=0;c<=o;c+=.16){let l=o?c/o:0,h=n+(t-n)*l,u=e+(i-e)*l;if(a.some(d=>Math.abs(h-d.x)<d.w/2&&Math.abs(u-d.z)<d.d/2))return!0}return!1}function kr(n,e,t,i,s=[]){let r=[Math.round(n),Math.round(e)],o=[Math.round(t),Math.round(i)],a=[r],c=new Map([[r.join(),null]]),l=null;for(let u=0;u<a.length&&u<1500;u++){let d=a[u];if(Math.hypot(d[0]-o[0],d[1]-o[1])<1.5){l=d;break}for(let[p,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=[d[0]+p,d[1]+g],m=A.join();Math.abs(A[0])>16||Math.abs(A[1])>16||c.has(m)||An(A[0],A[1],.45,s)||(c.set(m,d),a.push(A))}}if(!l)return[];let h=[];for(;l&&l.join()!==r.join();)h.unshift({x:l[0],z:l[1]}),l=c.get(l.join());return h}function Ql(n,e){let t=Br[e];return n.phase!=="buy"||!t||n.purchases.includes(e)||n.credits<t.cost?!1:(n.credits-=t.cost,n.spent+=t.cost,n.purchases.push(e),!0)}function Jl(n,e){return!["playing","buy"].includes(n.phase)||!n.owned.includes(e)||n.weapon===e?!1:(Kd(n,e),n.cooldown=Math.max(.2,n.weaponReady?.[e]||0),!0)}function Zl(n){return n.phase!=="buy"?!1:(n.phase="playing",n.hp=100,n.owned=["pistol","knife",...n.purchases.filter(e=>je[e])],n.weapon=n.purchases.includes("sniper")?"sniper":n.purchases.includes("carbine")?"carbine":"pistol",Object.assign(n,Xl(n.owned)),n.maxAmmo=je[n.weapon].mag,n.ammo=n.maxAmmo,n.reload=0,n.cooldown=0,n.weaponReady={},n.time=105-n.round*10,n.defuse=0,n.verified=!1,n.checked=!1,n.attempts=0,n.kills=0,n.x=0,n.z=14,n.y=1.65,n.jumpY=0,n.vy=0,n.crouch=!1,!0)}function Ia(n,e=8){return n.phase!=="playing"||!Number.isFinite(e)||e<=0?!1:(n.hp=Math.max(0,n.hp-e),n.defuse=0,n.hp||(n.phase="dying"),!0)}function Da(n,e=[]){if(n.phase!=="playing")return null;if(Math.hypot(n.x,n.z+13)<2.7)return{type:n.verified?"defuse":"check",key:n.verified?"E":"F"};let t=e.filter(i=>Math.hypot(i.x-n.x,i.z-n.z)<2.7).sort((i,s)=>Math.hypot(i.x-n.x,i.z-n.z)-Math.hypot(s.x-n.x,s.z-n.z))[0];return t?{type:"door",id:t.id,key:"E",open:t.open}:null}function Kl(n,e,t=ri[n.round-1]){return n.phase!=="playing"||!n.checked||n.verified?!1:(n.attempts++,e===t.right?(n.verified=!0,n.attempts===1&&n.decisionCorrect++,n.feedback=t.why,!0):(n.feedback="\u518D\u6838\u5C0D\u7E3D\u984D\u3001\u9700\u8981\u540C\u5230\u5E33\u65E5\u671F\u3002"+t.why,!1))}function Gr(n){return{judgement:Math.round(n.decisionCorrect/3*80),reserve:n.earned>0?Math.round(n.credits/n.earned*20):n.spent===0?20:0,accuracy:n.shots?Math.round(n.hits/n.shots*100):0}}function $l(n,e,t=!1){if(n.phase!=="playing"||!e||e.hp<=0)return null;let i=je[n.weapon],s=t&&n.weapon!=="knife";return e.hp=Math.max(0,n.weapon==="knife"?0:e.hp-i.damage*(s?3:1)),s&&n.headshots++,!e.hp&&!e.rewarded?(e.rewarded=!0,n.kills++,n.totalKills++,n.credits+=100,n.earned+=100,{head:s,killed:!0,coins:100}):{head:s,killed:!1,coins:0}}var qs=18,Hr=.12,jl=je.bazooka.range;function eh(n,e,t,i){let s=Math.hypot(t.x,t.y,t.z);return{id:crypto.randomUUID(),owner:n,position:{...e},previousPosition:{...e},velocity:{x:t.x*qs/s,y:t.y*qs/s,z:t.z*qs/s},spawnTime:i,travelled:0,active:!0,exploded:!1}}function La(n,e,t,i){let s=0,r=1;for(let[o,a,c]of[["x",t.x-t.w/2,t.x+t.w/2],["y",t.base||0,(t.base||0)+t.h],["z",t.z-t.d/2,t.z+t.d/2]]){let l=n[o],h=e[o];if(!h){if(l<a-i||l>c+i)return 1/0;continue}let u=(a-i-l)/h,d=(c+i-l)/h;if(s=Math.max(s,Math.min(u,d)),r=Math.min(r,Math.max(u,d)),s>r)return 1/0}return s}function th(n,e,t,i){if(!n.active||e<=0)return null;let s=Math.min(jl-n.travelled,e*qs),r=Object.fromEntries(Object.entries(n.velocity).map(([h,u])=>[h,u*s/qs])),o=n.position,a=r.y<0&&o.y+r.y<=Hr?Math.max(0,(Hr-o.y)/r.y):1/0,c=null;for(let h of t)a=Math.min(a,La(o,r,h,Hr));for(let h of i){if(h.hp<=0)continue;let u=La(o,r,{x:h.x,z:h.z,w:1.1,d:.95,h:1.9},Hr);u<a&&(a=u,c=h.id)}let l=Math.min(1,a);return n.previousPosition=o,n.position={x:o.x+r.x*l,y:o.y+r.y*l,z:o.z+r.z*l},n.travelled+=s*l,!Number.isFinite(a)&&n.travelled<jl-1e-8?null:(n.active=!1,n.exploded=!0,{id:n.id,owner:n.owner,position:{...n.position},direct:c})}function Na(n,e,t,i=!1){if(!i&&e.id===n.direct)return je.bazooka.damage;let s=n.position,r={x:e.x-s.x,y:(e.y??1.05)-s.y,z:e.z-s.z},o=Math.hypot(r.x,r.y,r.z),{blastRadius:a,splash:c,selfCap:l}=je.bazooka;return o>=a||t.some(h=>La(s,r,h,0)<1)?0:Math.min(i?l:c,Math.round(c*(1-o/a)))}var $d=0,nh=1,jd=2;var Uu=1,ul=2,qn=3,gi=0,Zt=1,vn=2;var fi=0,ps=1,ih=2,sh=3,rh=4,ef=5,Pi=100,tf=101,nf=102,oh=103,ah=104,sf=200,rf=201,of=202,af=203,_c=204,xc=205,cf=206,lf=207,hf=208,uf=209,df=210,ff=211,pf=212,mf=213,gf=214,Af=0,_f=1,xf=2,yo=3,yf=4,vf=5,Mf=6,bf=7,Fu=0,Sf=1,Ef=2,pi=0,wf=1,Tf=2,Rf=3,Cf=4,Pf=5,If=6;var Ou=300,As=301,_s=302,yc=303,vc=304,jo=306,rr=1e3,Mn=1001,Mc=1002,Qt=1003,ch=1004;var Ua=1005;var an=1006,Df=1007;var or=1008;var mi=1009,Lf=1010,Nf=1011,dl=1012,Bu=1013,ui=1014,di=1015,ar=1016,zu=1017,ku=1018,Li=1020,Uf=1021,bn=1023,Ff=1024,Of=1025,Ni=1026,xs=1027,Bf=1028,Gu=1029,zf=1030,Hu=1031,Vu=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,lh=35840,hh=35841,uh=35842,dh=35843,Wu=36196,fh=37492,ph=37496,mh=37808,gh=37809,Ah=37810,_h=37811,xh=37812,yh=37813,vh=37814,Mh=37815,bh=37816,Sh=37817,Eh=37818,wh=37819,Th=37820,Rh=37821,ka=36492,Ch=36494,Ph=36495,kf=36283,Ih=36284,Dh=36285,Lh=36286;var vo=2300,Mo=2301,Ga=2302,Nh=2400,Uh=2401,Fh=2402;var Xu=3e3,Ui=3001,Gf=3200,Hf=3201,qu=0,Vf=1,cn="",At="srgb",Kn="srgb-linear",fl="display-p3",ea="display-p3-linear",bo="linear",at="srgb",So="rec709",Eo="p3";var Xi=7680;var Oh=519,Wf=512,Xf=513,qf=514,Yu=515,Yf=516,Qf=517,Jf=518,Zf=519,bc=35044;var Bh="300 es",Sc=1035,Jn=2e3,wo=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ha=Math.PI/180,Ec=180/Math.PI;function Zn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function Kf(n,e){return(n%e+e)%e}function Va(n,e,t){return(1-t)*n+t*e}function zh(n){return(n&n-1)===0&&n!==0}function wc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],A=s[0],m=s[3],f=s[6],M=s[1],_=s[4],w=s[7],C=s[2],R=s[5],T=s[8];return r[0]=o*A+a*M+c*C,r[3]=o*m+a*_+c*R,r[6]=o*f+a*w+c*T,r[1]=l*A+h*M+u*C,r[4]=l*m+h*_+u*R,r[7]=l*f+h*w+u*T,r[2]=d*A+p*M+g*C,r[5]=d*m+p*_+g*R,r[8]=d*f+p*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/g;return e[0]=u*A,e[1]=(s*l-h*i)*A,e[2]=(a*i-s*o)*A,e[3]=d*A,e[4]=(h*t-s*c)*A,e[5]=(s*r-a*t)*A,e[6]=p*A,e[7]=(i*c-l*t)*A,e[8]=(o*t-i*r)*A,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Qe;function Qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $f(){let n=To("canvas");return n.style.display="block",n}var kh={};function er(n){n in kh||(kh[n]=!0,console.warn(n))}var Gh=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hh=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[Kn]:{transfer:bo,primaries:So,toReference:n=>n,fromReference:n=>n},[At]:{transfer:at,primaries:So,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ea]:{transfer:bo,primaries:Eo,toReference:n=>n.applyMatrix3(Hh),fromReference:n=>n.applyMatrix3(Gh)},[fl]:{transfer:at,primaries:Eo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hh),fromReference:n=>n.applyMatrix3(Gh).convertLinearToSRGB()}},jf=new Set([Kn,ea]),et={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!jf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Vr[e].toReference,s=Vr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vr[n].primaries},getTransfer:function(n){return n===cn?bo:Vr[n].transfer}};function ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qi,Ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=To("canvas")),qi.width=e.width,qi.height=e.height;let i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ms(t[i]/255)*255):t[i]=ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ep=0,Co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ro.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,ln=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Mn,s=Mn,r=an,o=or,a=bn,c=mi,l=n.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Zn(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ui?At:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Ui:Xu}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ui?At:cn}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ou;ln.DEFAULT_ANISOTROPY=1;var It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],A=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+A)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,w=(p+1)/2,C=(f+1)/2,R=(h+d)/4,T=(u+A)/4,U=(g+m)/4;return _>w&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=T/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=U/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-A)*(u-A)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-A)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends Ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ui?At:cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Tc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Po=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rc=class extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],A=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=A;return}if(u!==A||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*A,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),R=Math.atan2(C,f*M);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let w=a*M;if(c=c*m+d*w,l=l*m+p*w,h=h*m+g*w,u=u*m+A*w,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya=new I,Vh=new _i,Fi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Xr.subVectors(this.max,Ys),Yi.subVectors(e.a,Ys),Qi.subVectors(e.b,Ys),Ji.subVectors(e.c,Ys),oi.subVectors(Qi,Yi),ai.subVectors(Ji,Qi),Ei.subVectors(Yi,Ji);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ei.z,Ei.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ei.z,0,-Ei.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ei.y,Ei.x,0];return!Qa(t,Yi,Qi,Ji,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Yi,Qi,Ji,Xr))?!1:(qr.crossVectors(oi,ai),t=[qr.x,qr.y,qr.z],Qa(t,Yi,Qi,Ji,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,Wr=new Fi,Yi=new I,Qi=new I,Ji=new I,oi=new I,ai=new I,Ei=new I,Ys=new I,Xr=new I,qr=new I,wi=new I;function Qa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var np=new Fi,Qs=new I,Ja=new I,ys=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):np.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Ja)),this.expandByPoint(Qs.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new I,Za=new I,Yr=new I,ci=new I,Ka=new I,Qr=new I,$a=new I,cr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Za.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Za);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=ci.dot(this.direction),c=-ci.dot(Yr),l=ci.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let A=1/h;u*=A,d*=A,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Za).addScaledVector(Yr,d),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,s,r){Ka.subVectors(t,e),Qr.subVectors(i,e),$a.crossVectors(Ka,Qr);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let c=a*this.direction.dot(Qr.crossVectors(ci,Qr));if(c<0)return null;let l=a*this.direction.dot(Ka.cross(ci));if(l<0||c+l>o)return null;let h=-a*ci.dot($a);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,p,g,A,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,A,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,p,g,A,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=A,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,A=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-A*l,t[9]=-a*c,t[2]=A-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,A=l*u;t[0]=d+A*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=A+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,A=l*u;t[0]=d-A*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=A-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,A=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+A,t[1]=c*u,t[5]=A*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,A=a*l;t[0]=c*h,t[4]=A-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-A*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,A=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+A,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=A*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,sp)}lookAt(e,t,i){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),li.crossVectors(i,jt),li.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),li.crossVectors(i,jt)),li.normalize(),Jr.crossVectors(jt,li),s[0]=li.x,s[4]=Jr.x,s[8]=jt.x,s[1]=li.y,s[5]=Jr.y,s[9]=jt.y,s[2]=li.z,s[6]=Jr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],A=i[6],m=i[10],f=i[14],M=i[3],_=i[7],w=i[11],C=i[15],R=s[0],T=s[4],U=s[8],v=s[12],b=s[1],F=s[5],V=s[9],ie=s[13],D=s[2],B=s[6],G=s[10],K=s[14],Z=s[3],X=s[7],te=s[11],ne=s[15];return r[0]=o*R+a*b+c*D+l*Z,r[4]=o*T+a*F+c*B+l*X,r[8]=o*U+a*V+c*G+l*te,r[12]=o*v+a*ie+c*K+l*ne,r[1]=h*R+u*b+d*D+p*Z,r[5]=h*T+u*F+d*B+p*X,r[9]=h*U+u*V+d*G+p*te,r[13]=h*v+u*ie+d*K+p*ne,r[2]=g*R+A*b+m*D+f*Z,r[6]=g*T+A*F+m*B+f*X,r[10]=g*U+A*V+m*G+f*te,r[14]=g*v+A*ie+m*K+f*ne,r[3]=M*R+_*b+w*D+C*Z,r[7]=M*T+_*F+w*B+C*X,r[11]=M*U+_*V+w*G+C*te,r[15]=M*v+_*ie+w*K+C*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],A=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+A*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],A=e[13],m=e[14],f=e[15],M=u*m*l-A*d*l+A*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,w=h*A*l-g*u*l+g*a*p-o*A*p-h*a*f+o*u*f,C=g*u*c-h*A*c-g*a*d+o*A*d+h*a*m-o*u*m,R=t*M+i*_+s*w+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=M*T,e[1]=(A*d*r-u*m*r-A*s*p+i*m*p+u*s*f-i*d*f)*T,e[2]=(a*m*r-A*c*r+A*s*l-i*m*l-a*s*f+i*c*f)*T,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*T,e[4]=_*T,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*T,e[8]=w*T,e[9]=(g*u*r-h*A*r-g*i*p+t*A*p+h*i*f-t*u*f)*T,e[10]=(o*A*r-g*a*r+g*i*l-t*A*l-o*i*f+t*a*f)*T,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(h*A*s-g*u*s+g*i*d-t*A*d-h*i*m+t*u*m)*T,e[14]=(g*a*s-o*A*s-g*i*c+t*A*c+o*i*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,A=o*h,m=o*u,f=a*u,M=c*l,_=c*h,w=c*u,C=i.x,R=i.y,T=i.z;return s[0]=(1-(A+f))*C,s[1]=(p+w)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(d+f))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+_)*T,s[9]=(m-M)*T,s[10]=(1-(d+A))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);let l=1/r,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Jn){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===Jn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,p=(i+s)*h,g,A;if(a===Jn)g=(o+r)*u,A=-2*u;else if(a===wo)g=r*u,A=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=A,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zi=new I,xn=new xt,ip=new I(0,0,0),sp=new I(1,1,1),li=new I,Jr=new I,jt=new I,Wh=new xt,Xh=new _i,Io=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Io.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rp=0,qh=new I,Ki=new _i,Vn=new xt,Zr=new I,Js=new I,op=new I,ap=new _i,Yh=new I(1,0,0),Qh=new I(0,1,0),Jh=new I(0,0,1),cp={type:"added"},lp={type:"removed"},Ut=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Io,i=new _i,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Qe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Js,Zr,this.up):Vn.lookAt(Zr,Js,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Vn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new I,Wn=new I,ja=new I,Xn=new I,$i=new I,ji=new I,Zh=new I,ec=new I,tc=new I,nc=new I,Kr=!1,Di=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yn.subVectors(s,t),Wn.subVectors(i,t),ja.subVectors(e,t);let o=yn.dot(yn),a=yn.dot(Wn),c=yn.dot(ja),l=Wn.dot(Wn),h=Wn.dot(ja),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,i,s,r,o,a,c){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static isFrontFacing(e,t,i,s){return yn.subVectors(i,t),Wn.subVectors(e,t),yn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,i),ji.subVectors(r,i),ec.subVectors(e,i);let c=$i.dot(ec),l=ji.dot(ec);if(c<=0&&l<=0)return t.copy(i);tc.subVectors(e,s);let h=$i.dot(tc),u=ji.dot(tc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector($i,o);nc.subVectors(e,r);let p=$i.dot(nc),g=ji.dot(nc);if(g>=0&&p<=g)return t.copy(r);let A=p*l-c*g;if(A<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ji,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Zh,a);let f=1/(m+A+d);return o=A*f,a=d*f,t.copy(i).addScaledVector($i,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Kf(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ic(o,r,e+1/3),this.g=ic(o,r,e),this.b=ic(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Ju[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(kt(zt.r*255,0,255))*65536+Math.round(kt(zt.g*255,0,255))*256+Math.round(kt(zt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=At){et.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL($r);let i=Va(hi.h,$r.h,t),s=Va(hi.s,$r.s,t),r=Va(hi.l,$r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new ke;ke.NAMES=Ju;var hp=0,jn=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=ps,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new I,jr=new ae,yt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}};var Do=class extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Lo=class extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var up=0,on=new xt,sc=new Ut,es=new I,en=new Fi,Zs=new Fi,Pt=new I,vt=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qu(e)?Lo:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(en.min,Zs.min),en.expandByPoint(Pt),Pt.addVectors(en.max,Zs.max),en.expandByPoint(Pt)):(en.expandByPoint(Zs.min),en.expandByPoint(Zs.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(e,l),Pt.add(es)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new I,h[b]=new I;let u=new I,d=new I,p=new I,g=new ae,A=new ae,m=new ae,f=new I,M=new I;function _(b,F,V){u.fromArray(s,b*3),d.fromArray(s,F*3),p.fromArray(s,V*3),g.fromArray(o,b*2),A.fromArray(o,F*2),m.fromArray(o,V*2),d.sub(u),p.sub(u),A.sub(g),m.sub(g);let ie=1/(A.x*m.y-m.x*A.y);isFinite(ie)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-A.y).multiplyScalar(ie),M.copy(p).multiplyScalar(A.x).addScaledVector(d,-m.x).multiplyScalar(ie),l[b].add(f),l[F].add(f),l[V].add(f),h[b].add(M),h[F].add(M),h[V].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,F=w.length;b<F;++b){let V=w[b],ie=V.start,D=V.count;for(let B=ie,G=ie+D;B<G;B+=3)_(i[B+0],i[B+1],i[B+2])}let C=new I,R=new I,T=new I,U=new I;function v(b){T.fromArray(r,b*3),U.copy(T);let F=l[b];C.copy(F),C.sub(T.multiplyScalar(T.dot(F))).normalize(),R.crossVectors(U,F);let ie=R.dot(h[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=ie}for(let b=0,F=w.length;b<F;++b){let V=w[b],ie=V.start,D=V.count;for(let B=ie,G=ie+D;B<G;B+=3)v(i[B+0]),v(i[B+1]),v(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),A=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,A),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(A,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let A=0,m=c.length;A<m;A++){a.isInterleavedBufferAttribute?p=c[A]*a.data.stride+a.offset:p=c[A]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new xt,Ti=new cr,eo=new ys,$h=new I,ts=new I,ns=new I,is=new I,rc=new I,to=new I,no=new ae,io=new ae,so=new ae,jh=new I,eu=new I,tu=new I,ro=new I,oo=new I,_t=class extends Ut{constructor(e=new vt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(rc.fromBufferAttribute(u,e),o?to.addScaledVector(rc,h):to.addScaledVector(rc.sub(t),h))}t.add(to)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(eo.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(eo,$h)===null||Ti.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=d.length;g<A;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,C=_;w<C;w+=3){let R=a.getX(w),T=a.getX(w+1),U=a.getX(w+2);s=ao(this,f,e,i,l,h,u,R,T,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),A=Math.min(a.count,p.start+p.count);for(let m=g,f=A;m<f;m+=3){let M=a.getX(m),_=a.getX(m+1),w=a.getX(m+2);s=ao(this,o,e,i,l,h,u,M,_,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,A=d.length;g<A;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=M,C=_;w<C;w+=3){let R=w,T=w+1,U=w+2;s=ao(this,f,e,i,l,h,u,R,T,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),A=Math.min(c.count,p.start+p.count);for(let m=g,f=A;m<f;m+=3){let M=m,_=m+1,w=m+2;s=ao(this,o,e,i,l,h,u,M,_,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dp(n,e,t,i,s,r,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===gi,a),c===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(oo);return l<t.near||l>t.far?null:{distance:l,point:oo.clone(),object:n}}function ao(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ts),n.getVertexPosition(c,ns),n.getVertexPosition(l,is);let h=dp(n,e,t,i,ts,ns,is,ro);if(h){s&&(no.fromBufferAttribute(s,a),io.fromBufferAttribute(s,c),so.fromBufferAttribute(s,l),h.uv=Di.getInterpolation(ro,ts,ns,is,no,io,so,new ae)),r&&(no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,c),so.fromBufferAttribute(r,l),h.uv1=Di.getInterpolation(ro,ts,ns,is,no,io,so,new ae),h.uv2=h.uv1),o&&(jh.fromBufferAttribute(o,a),eu.fromBufferAttribute(o,c),tu.fromBufferAttribute(o,l),h.normal=Di.getInterpolation(ro,ts,ns,is,jh,eu,tu,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};Di.getNormal(ts,ns,is,u.normal),h.face=u}return h}var hn=class n extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(A,m,f,M,_,w,C,R,T,U,v){let b=w/T,F=C/U,V=w/2,ie=C/2,D=R/2,B=T+1,G=U+1,K=0,Z=0,X=new I;for(let te=0;te<G;te++){let ne=te*F-ie;for(let he=0;he<B;he++){let W=he*b-V;X[A]=W*M,X[m]=ne*_,X[f]=D,l.push(X.x,X.y,X.z),X[A]=0,X[m]=0,X[f]=R>0?1:-1,h.push(X.x,X.y,X.z),u.push(he/T),u.push(1-te/U),K+=1}}for(let te=0;te<U;te++)for(let ne=0;ne<T;ne++){let he=d+ne+B*te,W=d+ne+B*(te+1),ee=d+(ne+1)+B*(te+1),fe=d+(ne+1)+B*te;c.push(he,W,fe),c.push(W,ee,fe),Z+=6}a.addGroup(p,Z,v),p+=Z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let s in i)e[s]=i[s]}return e}function fp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zu(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}var pp={clone:vs,merge:Yt},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},No=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nt=class extends No{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ec*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=-90,rs=1,Cc=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Nt(ss,rs,e,t);r.layers=this.layers,this.add(r);let o=new Nt(ss,rs,e,t);o.layers=this.layers,this.add(o);let a=new Nt(ss,rs,e,t);a.layers=this.layers,this.add(a);let c=new Nt(ss,rs,e,t);c.layers=this.layers,this.add(c);let l=new Nt(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Uo=class extends ln{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pc=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ui?At:cn),this.texture=new Uo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:fi});r.uniforms.tEquirect.value=t;let o=new _t(s,r),a=t.minFilter;return t.minFilter===or&&(t.minFilter=an),new Cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},oc=new I,Ap=new I,_p=new Qe,Yn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=oc.subVectors(i,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(oc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_p.getNormalMatrix(e),s=this.coplanarPoint(oc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new ys,co=new I,hr=class{constructor(e=new Yn,t=new Yn,i=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],A=s[10],m=s[11],f=s[12],M=s[13],_=s[14],w=s[15];if(i[0].setComponents(c-r,d-l,m-p,w-f).normalize(),i[1].setComponents(c+r,d+l,m+p,w+f).normalize(),i[2].setComponents(c+o,d+h,m+g,w+M).normalize(),i[3].setComponents(c-o,d-h,m-g,w-M).normalize(),i[4].setComponents(c-a,d-u,m-A,w-_).normalize(),t===Jn)i[5].setComponents(c+a,d+u,m+A,w+_).normalize();else if(t===wo)i[5].setComponents(a,u,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ku(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let A;if(u instanceof Float32Array)A=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)A=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)A=n.SHORT;else if(u instanceof Uint32Array)A=n.UNSIGNED_INT;else if(u instanceof Int32Array)A=n.INT;else if(u instanceof Int8Array)A=n.BYTE;else if(u instanceof Uint8Array)A=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)A=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:A,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let A=0,m=g.length;A<m;A++){let f=g[A];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ur=class n extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],A=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let _=0;_<l;_++){let w=_*u-r;g.push(w,-M,0),A.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){let _=M+l*f,w=M+l*(f+1),C=M+1+l*(f+1),R=M+1+l*f;p.push(_,w,R),p.push(w,C,R)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(A,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`
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
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
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
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sg=`float getShadowMask() {
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
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:yp,alphahash_pars_fragment:vp,alphamap_fragment:Mp,alphamap_pars_fragment:bp,alphatest_fragment:Sp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Tp,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Pp,beginnormal_vertex:Ip,bsdfs:Dp,iridescence_fragment:Lp,bumpmap_pars_fragment:Np,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Bp,color_fragment:zp,color_pars_fragment:kp,color_pars_vertex:Gp,color_vertex:Hp,common:Vp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:Qp,emissivemap_pars_fragment:Jp,colorspace_fragment:Zp,colorspace_pars_fragment:Kp,envmap_fragment:$p,envmap_common_pars_fragment:jp,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:om,gradientmap_pars_fragment:am,lightmap_fragment:cm,lightmap_pars_fragment:lm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:Am,lights_physical_fragment:_m,lights_physical_pars_fragment:xm,lights_fragment_begin:ym,lights_fragment_maps:vm,lights_fragment_end:Mm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:wm,map_fragment:Tm,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Dm,morphcolor_vertex:Lm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:Om,normal_fragment_maps:Bm,normal_pars_fragment:zm,normal_pars_vertex:km,normal_vertex:Gm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Qm,premultiplied_alpha_fragment:Jm,project_vertex:Zm,dithering_fragment:Km,dithering_pars_fragment:$m,roughnessmap_fragment:jm,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:og,skinning_vertex:ag,skinnormal_vertex:cg,specularmap_fragment:lg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:dg,transmission_fragment:fg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:Ag,worldpos_vertex:_g,background_vert:xg,background_frag:yg,backgroundCube_vert:vg,backgroundCube_frag:Mg,cube_vert:bg,cube_frag:Sg,depth_vert:Eg,depth_frag:wg,distanceRGBA_vert:Tg,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Pg,linedashed_vert:Ig,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Fg,meshmatcap_vert:Og,meshmatcap_frag:Bg,meshnormal_vert:zg,meshnormal_frag:kg,meshphong_vert:Gg,meshphong_frag:Hg,meshphysical_vert:Vg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:Qg,shadow_vert:Jg,shadow_frag:Zg,sprite_vert:Kg,sprite_frag:$g},de={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ln={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ln.physical={uniforms:Yt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var lo={r:0,b:0,g:0};function jg(n,e,t,i,s,r,o){let a=new ke(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let M=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?A(a,c):_&&_.isColor&&(A(_,1),M=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jo)?(h===void 0&&(h=new _t(new hn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:vs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=et.getTransfer(_.colorSpace)!==at,(u!==_||d!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new _t(new ur(2,2),new ei({name:"BackgroundMaterial",uniforms:vs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=et.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function A(m,f){m.getRGB(lo,Zu(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,A(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,A(a,c)},render:g}}function e0(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(D,B,G,K,Z){let X=!1;if(o){let te=A(K,G,B);l!==te&&(l=te,p(l.object)),X=f(D,K,G,Z),X&&M(D,K,G,Z)}else{let te=B.wireframe===!0;(l.geometry!==K.id||l.program!==G.id||l.wireframe!==te)&&(l.geometry=K.id,l.program=G.id,l.wireframe=te,X=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,U(D,B,G,K),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function A(D,B,G){let K=G.wireframe===!0,Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let X=Z[B.id];X===void 0&&(X={},Z[B.id]=X);let te=X[K];return te===void 0&&(te=m(d()),X[K]=te),te}function m(D){let B=[],G=[],K=[];for(let Z=0;Z<s;Z++)B[Z]=0,G[Z]=0,K[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:K,object:D,attributes:{},index:null}}function f(D,B,G,K){let Z=l.attributes,X=B.attributes,te=0,ne=G.getAttributes();for(let he in ne)if(ne[he].location>=0){let ee=Z[he],fe=X[he];if(fe===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ee===void 0||ee.attribute!==fe||fe&&ee.data!==fe.data)return!0;te++}return l.attributesNum!==te||l.index!==K}function M(D,B,G,K){let Z={},X=B.attributes,te=0,ne=G.getAttributes();for(let he in ne)if(ne[he].location>=0){let ee=X[he];ee===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let fe={};fe.attribute=ee,ee&&ee.data&&(fe.data=ee.data),Z[he]=fe,te++}l.attributes=Z,l.attributesNum=te,l.index=K}function _(){let D=l.newAttributes;for(let B=0,G=D.length;B<G;B++)D[B]=0}function w(D){C(D,0)}function C(D,B){let G=l.newAttributes,K=l.enabledAttributes,Z=l.attributeDivisors;G[D]=1,K[D]===0&&(n.enableVertexAttribArray(D),K[D]=1),Z[D]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),Z[D]=B)}function R(){let D=l.newAttributes,B=l.enabledAttributes;for(let G=0,K=B.length;G<K;G++)B[G]!==D[G]&&(n.disableVertexAttribArray(G),B[G]=0)}function T(D,B,G,K,Z,X,te){te===!0?n.vertexAttribIPointer(D,B,G,Z,X):n.vertexAttribPointer(D,B,G,K,Z,X)}function U(D,B,G,K){if(i.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Z=K.attributes,X=G.getAttributes(),te=B.defaultAttributeValues;for(let ne in X){let he=X[ne];if(he.location>=0){let W=Z[ne];if(W===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let ee=W.normalized,fe=W.itemSize,Me=t.get(W);if(Me===void 0)continue;let Ae=Me.buffer,Re=Me.type,De=Me.bytesPerElement,be=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||W.gpuType===Bu);if(W.isInterleavedBufferAttribute){let Fe=W.data,P=Fe.stride,ce=W.offset;if(Fe.isInstancedInterleavedBuffer){for(let Q=0;Q<he.locationSize;Q++)C(he.location+Q,Fe.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Q=0;Q<he.locationSize;Q++)w(he.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Q=0;Q<he.locationSize;Q++)T(he.location+Q,fe/he.locationSize,Re,ee,P*De,(ce+fe/he.locationSize*Q)*De,be)}else{if(W.isInstancedBufferAttribute){for(let Fe=0;Fe<he.locationSize;Fe++)C(he.location+Fe,W.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Fe=0;Fe<he.locationSize;Fe++)w(he.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Fe=0;Fe<he.locationSize;Fe++)T(he.location+Fe,fe/he.locationSize,Re,ee,fe*De,fe/he.locationSize*Fe*De,be)}}else if(te!==void 0){let ee=te[ne];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(he.location,ee);break;case 3:n.vertexAttrib3fv(he.location,ee);break;case 4:n.vertexAttrib4fv(he.location,ee);break;default:n.vertexAttrib1fv(he.location,ee)}}}}R()}function v(){V();for(let D in a){let B=a[D];for(let G in B){let K=B[G];for(let Z in K)g(K[Z].object),delete K[Z];delete B[G]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;let B=a[D.id];for(let G in B){let K=B[G];for(let Z in K)g(K[Z].object),delete K[Z];delete B[G]}delete a[D.id]}function F(D){for(let B in a){let G=a[B];if(G[D.id]===void 0)continue;let K=G[D.id];for(let Z in K)g(K[Z].object),delete K[Z];delete G[D.id]}}function V(){ie(),h=!0,l!==c&&(l=c,p(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:ie,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:w,disableUnusedAttributes:R}}function t0(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let A=0;A<d;A++)g+=u[A];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function n0(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),A=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,w=o||e.has("OES_texture_float"),C=_&&w,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:A,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:R}}function i0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Yn,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,A=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,_=M*4,w=f.clippingState||null;c.value=w,w=h(g,d,_,p);for(let C=0;C!==_;++C)w[C]=t[C];f.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let A=u!==null?u.length:0,m=null;if(A!==0){if(m=c.value,g!==!0||m===null){let f=p+A*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,w=p;_!==A;++_,w+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}function s0(n){let e=new WeakMap;function t(o,a){return a===yc?o.mapping=As:a===vc&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yc||a===vc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Pc(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Fo=class extends No{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=4,nu=[.125,.215,.35,.446,.526,.582],Ii=20,ac=new Fo,iu=new ke,cc=null,lc=0,hc=0,Ci=(1+Math.sqrt(5))/2,os=1/Ci,su=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ci,os),new I(0,Ci,-os),new I(os,0,Ci),new I(-os,0,Ci),new I(Ci,os,0),new I(-Ci,os,0)],Oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,hc),e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:ar,format:bn,colorSpace:Kn,depthBuffer:!1},s=ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r0(r)),this._blurMaterial=o0(r,e,t)}return s}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,i,s){let a=new Nt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(iu),h.toneMapping=pi,h.autoClear=!1;let p=new Gt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new _t(new hn,p),A=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,A=!0):(p.color.copy(iu),A=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;ho(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),A&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===As||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ho(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ac)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=su[(s-1)%su.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),A=r/g,m=isFinite(r)?1+Math.floor(h*A):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let f=[],M=0;for(let T=0;T<Ii;++T){let U=T/A,v=Math.exp(-U*U/2);f.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let w=this._sizeLods[s],C=3*w*(s>_-us?s-_+us:0),R=4*(this._cubeSize-w);ho(t,C,R,3*w,2*w),c.setRenderTarget(t),c.render(u,ac)}};function r0(n){let e=[],t=[],i=[],s=n,r=n-us+1+nu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-us?c=nu[o-n+us-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,A=3,m=2,f=1,M=new Float32Array(A*g*p),_=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let R=0;R<p;R++){let T=R%3*2/3-1,U=R>2?0:-1,v=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];M.set(v,A*g*R),_.set(d,m*g*R);let b=[R,R,R,R,R,R];w.set(b,f*g*R)}let C=new vt;C.setAttribute("position",new yt(M,A)),C.setAttribute("uv",new yt(_,m)),C.setAttribute("faceIndex",new yt(w,f)),e.push(C),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ru(n,e,t){let i=new $n(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function o0(n,e,t){let i=new Float32Array(Ii),s=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ou(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function au(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function a0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===yc||c===vc,h=c===As||c===_s;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Oo(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Oo(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function c0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function l0(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let A=d.morphAttributes[g];for(let m=0,f=A.length;m<f;m++)e.remove(A[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let A=p[g];for(let m=0,f=A.length;m<f;m++)e.update(A[m],n.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,A=0;if(p!==null){let M=p.array;A=p.version;for(let _=0,w=M.length;_<w;_+=3){let C=M[_+0],R=M[_+1],T=M[_+2];d.push(C,R,R,T,T,C)}}else if(g!==void 0){let M=g.array;A=g.version;for(let _=0,w=M.length/3-1;_<w;_+=3){let C=_+0,R=_+1,T=_+2;d.push(C,R,R,T,T,C)}}else return;let m=new(Qu(d)?Lo:Do)(d,1);m.version=A;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function h0(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,A){if(A===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,A),t.update(g,r,A)}function d(p,g,A){if(A===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<A;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,A);let f=0;for(let M=0;M<A;M++)f+=g[M];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function u0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d0(n,e){return n[0]-e[0]}function f0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function p0(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new It,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,A=r.get(h);if(A===void 0||A.count!==g){let D=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",D)};A!==void 0&&A.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],U=0;M===!0&&(U=1),_===!0&&(U=2),w===!0&&(U=3);let v=h.attributes.position.count*U,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let F=new Float32Array(v*b*4*g),V=new Po(F,v,b,g);V.type=di,V.needsUpdate=!0;let ie=U*4;for(let B=0;B<g;B++){let G=C[B],K=R[B],Z=T[B],X=v*b*4*B;for(let te=0;te<G.count;te++){let ne=te*ie;M===!0&&(o.fromBufferAttribute(G,te),F[X+ne+0]=o.x,F[X+ne+1]=o.y,F[X+ne+2]=o.z,F[X+ne+3]=0),_===!0&&(o.fromBufferAttribute(K,te),F[X+ne+4]=o.x,F[X+ne+5]=o.y,F[X+ne+6]=o.z,F[X+ne+7]=0),w===!0&&(o.fromBufferAttribute(Z,te),F[X+ne+8]=o.x,F[X+ne+9]=o.y,F[X+ne+10]=o.z,F[X+ne+11]=Z.itemSize===4?o.w:1)}}A={count:g,texture:V,size:new ae(v,b)},r.set(h,A),h.addEventListener("dispose",D)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",A.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",A.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<p;_++){let w=g[_];w[0]=_,w[1]=d[_]}g.sort(f0);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(d0);let A=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let w=a[_],C=w[0],R=w[1];C!==Number.MAX_SAFE_INTEGER&&R?(A&&h.getAttribute("morphTarget"+_)!==A[C]&&h.setAttribute("morphTarget"+_,A[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=R,f+=R):(A&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function m0(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Bo=class extends ln{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ni&&(i=ui),i===void 0&&h===xs&&(i=Li),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$u=new ln,ju=new Bo(1,1);ju.compareFunction=Yu;var ed=new Po,td=new Rc,nd=new Uo,cu=[],lu=[],hu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function Cs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ta(n,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function _0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function x0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function y0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;du.set(i),n.uniformMatrix2fv(this.addr,!1,du),Tt(t,i)}}function v0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),Tt(t,i)}}function M0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,i))return;hu.set(i),n.uniformMatrix4fv(this.addr,!1,hu),Tt(t,i)}}function b0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function E0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function w0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function T0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function C0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function P0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function I0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ju:$u;t.setTexture2D(e||r,s)}function D0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||td,s)}function L0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nd,s)}function N0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ed,s)}function U0(n){switch(n){case 5126:return g0;case 35664:return A0;case 35665:return _0;case 35666:return x0;case 35674:return y0;case 35675:return v0;case 35676:return M0;case 5124:case 35670:return b0;case 35667:case 35671:return S0;case 35668:case 35672:return E0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(n,e){n.uniform1fv(this.addr,e)}function O0(n,e){let t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function B0(n,e){let t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function z0(n,e){let t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function k0(n,e){let t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G0(n,e){let t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H0(n,e){let t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V0(n,e){n.uniform1iv(this.addr,e)}function W0(n,e){n.uniform2iv(this.addr,e)}function X0(n,e){n.uniform3iv(this.addr,e)}function q0(n,e){n.uniform4iv(this.addr,e)}function Y0(n,e){n.uniform1uiv(this.addr,e)}function Q0(n,e){n.uniform2uiv(this.addr,e)}function J0(n,e){n.uniform3uiv(this.addr,e)}function Z0(n,e){n.uniform4uiv(this.addr,e)}function K0(n,e,t){let i=this.cache,s=e.length,r=ta(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$u,r[o])}function $0(n,e,t){let i=this.cache,s=e.length,r=ta(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||td,r[o])}function j0(n,e,t){let i=this.cache,s=e.length,r=ta(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nd,r[o])}function eA(n,e,t){let i=this.cache,s=e.length,r=ta(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ed,r[o])}function tA(n){switch(n){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return G0;case 35676:return H0;case 5124:case 35670:return V0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Q0;case 36295:return J0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return eA}}var Ic=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U0(t.type)}},Dc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tA(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function nA(n,e,t){let i=n.name,s=i.length;for(uc.lastIndex=0;;){let r=uc.exec(i),o=uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fu(t,l===void 0?new Ic(a,n,e):new Dc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Lc(a),fu(t,u)),t=u}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nA(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function pu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iA=37297,sA=0;function rA(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function oA(n){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n),i;switch(e===t?i="":e===Eo&&t===So?i="LinearDisplayP3ToLinearSRGB":e===So&&t===Eo&&(i="LinearSRGBToLinearDisplayP3"),n){case Kn:case ea:return[i,"LinearTransferOETF"];case At:case fl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function mu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+rA(n.getShaderSource(e),o)}else return s}function aA(n,e){let t=oA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cA(n,e){let t;switch(e){case wf:t="Linear";break;case Tf:t="Reinhard";break;case Rf:t="OptimizedCineon";break;case Cf:t="ACESFilmic";break;case If:t="AgX";break;case Pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function hA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function uA(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dA(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ds(n){return n!==""}function gu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(fA,mA)}var pA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mA(n,e){let t=Ve[e];if(t===void 0){let i=pA.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}var gA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(n){return n.replace(gA,AA)}function AA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _A(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function xA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case _s:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yA(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===_s&&(e="ENVMAP_MODE_REFRACTION"),e}function vA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function MA(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bA(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=_A(t),l=xA(t),h=yA(t),u=vA(t),d=MA(t),p=t.isWebGL2?"":lA(t),g=hA(t),A=uA(r),m=s.createProgram(),f,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ds).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ds).join(`
`),M.length>0&&(M+=`
`)):(f=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),M=[p,xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==pi?cA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,aA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Nc(o),o=gu(o,t),o=Au(o,t),a=Nc(a),a=gu(a,t),a=Au(a,t),o=_u(o),a=_u(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let w=_+f+o,C=_+M+a,R=pu(s,s.VERTEX_SHADER,w),T=pu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,R),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(V){if(n.debug.checkShaderErrors){let ie=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(T).trim(),G=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,T);else{let Z=mu(s,R,"vertex"),X=mu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+Z+`
`+X)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||B==="")&&(K=!1);K&&(V.diagnostics={runnable:G,programLog:ie,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:M}})}s.deleteShader(R),s.deleteShader(T),v=new gs(s,m),b=dA(s,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,iA)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}var SA=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fc(e),t.set(e,i)),i}},Fc=class{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}};function EA(n,e,t,i,s,r,o){let a=new lr,c=new Uc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(v){return v===0?"uv":`uv${v}`}function m(v,b,F,V,ie){let D=V.fog,B=ie.geometry,G=v.isMeshStandardMaterial?V.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),Z=K&&K.mapping===jo?K.image.height:null,X=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=te!==void 0?te.length:0,he=0;B.morphAttributes.position!==void 0&&(he=1),B.morphAttributes.normal!==void 0&&(he=2),B.morphAttributes.color!==void 0&&(he=3);let W,ee,fe,Me;if(X){let Wt=Ln[X];W=Wt.vertexShader,ee=Wt.fragmentShader}else W=v.vertexShader,ee=v.fragmentShader,c.update(v),fe=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);let Ae=n.getRenderTarget(),Re=ie.isInstancedMesh===!0,De=ie.isBatchedMesh===!0,be=!!v.map,Fe=!!v.matcap,P=!!K,ce=!!v.aoMap,Q=!!v.lightMap,oe=!!v.bumpMap,Y=!!v.normalMap,Se=!!v.displacementMap,ge=!!v.emissiveMap,x=!!v.metalnessMap,y=!!v.roughnessMap,N=v.anisotropy>0,$=v.clearcoat>0,q=v.iridescence>0,J=v.sheen>0,ye=v.transmission>0,se=N&&!!v.anisotropyMap,le=$&&!!v.clearcoatMap,Ee=$&&!!v.clearcoatNormalMap,Le=$&&!!v.clearcoatRoughnessMap,j=q&&!!v.iridescenceMap,We=q&&!!v.iridescenceThicknessMap,ze=J&&!!v.sheenColorMap,Pe=J&&!!v.sheenRoughnessMap,ve=!!v.specularMap,re=!!v.specularColorMap,Ne=!!v.specularIntensityMap,Ke=ye&&!!v.transmissionMap,pt=ye&&!!v.thicknessMap,qe=!!v.gradientMap,ue=!!v.alphaMap,L=v.alphaTest>0,pe=!!v.alphaHash,me=!!v.extensions,Oe=!!B.attributes.uv1,Ie=!!B.attributes.uv2,st=!!B.attributes.uv3,rt=pi;return v.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:ee,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:De,instancing:Re,instancingColor:Re&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Kn,map:be,matcap:Fe,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:Q,bumpMap:oe,normalMap:Y,displacementMap:d&&Se,emissiveMap:ge,normalMapObjectSpace:Y&&v.normalMapType===Vf,normalMapTangentSpace:Y&&v.normalMapType===qu,metalnessMap:x,roughnessMap:y,anisotropy:N,anisotropyMap:se,clearcoat:$,clearcoatMap:le,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Le,iridescence:q,iridescenceMap:j,iridescenceThicknessMap:We,sheen:J,sheenColorMap:ze,sheenRoughnessMap:Pe,specularMap:ve,specularColorMap:re,specularIntensityMap:Ne,transmission:ye,transmissionMap:Ke,thicknessMap:pt,gradientMap:qe,opaque:v.transparent===!1&&v.blending===ps,alphaMap:ue,alphaTest:L,alphaHash:pe,combine:v.combine,mapUv:be&&A(v.map.channel),aoMapUv:ce&&A(v.aoMap.channel),lightMapUv:Q&&A(v.lightMap.channel),bumpMapUv:oe&&A(v.bumpMap.channel),normalMapUv:Y&&A(v.normalMap.channel),displacementMapUv:Se&&A(v.displacementMap.channel),emissiveMapUv:ge&&A(v.emissiveMap.channel),metalnessMapUv:x&&A(v.metalnessMap.channel),roughnessMapUv:y&&A(v.roughnessMap.channel),anisotropyMapUv:se&&A(v.anisotropyMap.channel),clearcoatMapUv:le&&A(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&A(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&A(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&A(v.iridescenceMap.channel),iridescenceThicknessMapUv:We&&A(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&A(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&A(v.sheenRoughnessMap.channel),specularMapUv:ve&&A(v.specularMap.channel),specularColorMapUv:re&&A(v.specularColorMap.channel),specularIntensityMapUv:Ne&&A(v.specularIntensityMap.channel),transmissionMapUv:Ke&&A(v.transmissionMap.channel),thicknessMapUv:pt&&A(v.thicknessMap.channel),alphaMapUv:ue&&A(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Y||N),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ie,vertexUv3s:st,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(be||ue),fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===Zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:me&&v.extensions.derivatives===!0,extensionFragDepth:me&&v.extensions.fragDepth===!0,extensionDrawBuffers:me&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(M(b,v),_(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function _(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function w(v){let b=g[v.type],F;if(b){let V=Ln[b];F=pp.clone(V.uniforms)}else F=v.uniforms;return F}function C(v,b){let F;for(let V=0,ie=l.length;V<ie;V++){let D=l[V];if(D.cacheKey===b){F=D,++F.usedTimes;break}}return F===void 0&&(F=new bA(n,b,v,r),l.push(F)),F}function R(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:U}}function wA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function TA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,A,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:A,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=A,f.group=m),e++,f}function a(u,d,p,g,A,m){let f=o(u,d,p,g,A,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,A,m){let f=o(u,d,p,g,A,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||TA),i.length>1&&i.sort(d||yu),s.length>1&&s.sort(d||yu)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function RA(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new vu,n.set(i,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function PA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var IA=0;function DA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LA(n,e){let t=new CA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new xt,a=new xt;function c(h,u){let d=0,p=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let A=0,m=0,f=0,M=0,_=0,w=0,C=0,R=0,T=0,U=0,v=0;h.sort(DA);let b=u===!0?Math.PI:1;for(let V=0,ie=h.length;V<ie;V++){let D=h[V],B=D.color,G=D.intensity,K=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*G*b,p+=B.g*G*b,g+=B.b*G*b;else if(D.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(D.sh.coefficients[X],G);v++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){let te=D.shadow,ne=i.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,s.directionalShadow[A]=ne,s.directionalShadowMap[A]=Z,s.directionalShadowMatrix[A]=D.shadow.matrix,w++}s.directional[A]=X,A++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(G*b),X.distance=K,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,s.spot[f]=X;let te=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,te.updateMatrices(D),D.castShadow&&U++),s.spotLightMatrix[f]=te.matrix,D.castShadow){let ne=i.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,s.spotShadow[f]=ne,s.spotShadowMap[f]=Z,R++}f++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),s.rectArea[M]=X,M++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*b),X.distance=D.distance,X.decay=D.decay,D.castShadow){let te=D.shadow,ne=i.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,s.pointShadow[m]=ne,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=X,m++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(G*b),X.groundColor.copy(D.groundColor).multiplyScalar(G*b),s.hemi[_]=X,_++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==A||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==M||F.hemiLength!==_||F.numDirectionalShadows!==w||F.numPointShadows!==C||F.numSpotShadows!==R||F.numSpotMaps!==T||F.numLightProbes!==v)&&(s.directional.length=A,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+T-U,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=v,F.directionalLength=A,F.pointLength=m,F.spotLength=f,F.rectAreaLength=M,F.hemiLength=_,F.numDirectionalShadows=w,F.numPointShadows=C,F.numSpotShadows=R,F.numSpotMaps=T,F.numLightProbes=v,s.version=IA++)}function l(h,u){let d=0,p=0,g=0,A=0,m=0,f=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let w=h[M];if(w.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let C=s.rectArea[A];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),A++}else if(w.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Mu(n,e){let t=new LA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function NA(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Mu(n,e),t.set(r,[c])):o>=a.length?(c=new Mu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Oc=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
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
}`;function OA(n,e,t){let i=new hr,s=new ae,r=new ae,o=new It,a=new Oc({depthPacking:Hf}),c=new Bc,l={},h=t.maxTextureSize,u={[gi]:Zt,[Zt]:gi,[vn]:vn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:UA,fragmentShader:FA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let f=this.type;this.render=function(R,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(fi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let ie=f!==qn&&this.type===qn,D=f===qn&&this.type!==qn;for(let B=0,G=R.length;B<G;B++){let K=R[B],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let X=Z.getFrameExtents();if(s.multiply(X),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,Z.mapSize.y=r.y)),Z.map===null||ie===!0||D===!0){let ne=this.type!==qn?{minFilter:Qt,magFilter:Qt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new $n(s.x,s.y,ne),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let te=Z.getViewportCount();for(let ne=0;ne<te;ne++){let he=Z.getViewport(ne);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),V.viewport(o),Z.updateMatrices(K,ne),i=Z.getFrustum(),w(T,U,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===qn&&M(Z,U),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,b,F)};function M(R,T){let U=e.update(A);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,U,d,A,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,U,p,A,null)}function _(R,T,U,v){let b=null,F=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let V=b.uuid,ie=T.uuid,D=l[V];D===void 0&&(D={},l[V]=D);let B=D[ie];B===void 0&&(B=b.clone(),D[ie]=B,T.addEventListener("dispose",C)),b=B}if(b.visible=T.visible,b.wireframe=T.wireframe,v===qn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=n.properties.get(b);V.light=U}return b}function w(R,T,U,v,b){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let ie=e.update(R),D=R.material;if(Array.isArray(D)){let B=ie.groups;for(let G=0,K=B.length;G<K;G++){let Z=B[G],X=D[Z.materialIndex];if(X&&X.visible){let te=_(R,X,v,b);R.onBeforeShadow(n,R,T,U,ie,te,Z),n.renderBufferDirect(U,null,ie,te,R,Z),R.onAfterShadow(n,R,T,U,ie,te,Z)}}}else if(D.visible){let B=_(R,D,v,b);R.onBeforeShadow(n,R,T,U,ie,B,null),n.renderBufferDirect(U,null,ie,B,R,null),R.onAfterShadow(n,R,T,U,ie,B,null)}}let V=R.children;for(let ie=0,D=V.length;ie<D;ie++)w(V[ie],T,U,v,b)}function C(R){R.target.removeEventListener("dispose",C);for(let U in l){let v=l[U],b=R.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function BA(n,e,t){let i=t.isWebGL2;function s(){let L=!1,pe=new It,me=null,Oe=new It(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!L&&(n.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){L=Ie},setClear:function(Ie,st,rt,Rt,Wt){Wt===!0&&(Ie*=Rt,st*=Rt,rt*=Rt),pe.set(Ie,st,rt,Rt),Oe.equals(pe)===!1&&(n.clearColor(Ie,st,rt,Rt),Oe.copy(pe))},reset:function(){L=!1,me=null,Oe.set(-1,0,0,0)}}}function r(){let L=!1,pe=null,me=null,Oe=null;return{setTest:function(Ie){Ie?De(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Ie){pe!==Ie&&!L&&(n.depthMask(Ie),pe=Ie)},setFunc:function(Ie){if(me!==Ie){switch(Ie){case Af:n.depthFunc(n.NEVER);break;case _f:n.depthFunc(n.ALWAYS);break;case xf:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case yf:n.depthFunc(n.EQUAL);break;case vf:n.depthFunc(n.GEQUAL);break;case Mf:n.depthFunc(n.GREATER);break;case bf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ie}},setLocked:function(Ie){L=Ie},setClear:function(Ie){Oe!==Ie&&(n.clearDepth(Ie),Oe=Ie)},reset:function(){L=!1,pe=null,me=null,Oe=null}}}function o(){let L=!1,pe=null,me=null,Oe=null,Ie=null,st=null,rt=null,Rt=null,Wt=null;return{setTest:function(ot){L||(ot?De(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!L&&(n.stencilMask(ot),pe=ot)},setFunc:function(ot,Xt,In){(me!==ot||Oe!==Xt||Ie!==In)&&(n.stencilFunc(ot,Xt,In),me=ot,Oe=Xt,Ie=In)},setOp:function(ot,Xt,In){(st!==ot||rt!==Xt||Rt!==In)&&(n.stencilOp(ot,Xt,In),st=ot,rt=Xt,Rt=In)},setLocked:function(ot){L=ot},setClear:function(ot){Wt!==ot&&(n.clearStencil(ot),Wt=ot)},reset:function(){L=!1,pe=null,me=null,Oe=null,Ie=null,st=null,rt=null,Rt=null,Wt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,A=[],m=null,f=!1,M=null,_=null,w=null,C=null,R=null,T=null,U=null,v=new ke(0,0,0),b=0,F=!1,V=null,ie=null,D=null,B=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=X>=2);let ne=null,he={},W=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),fe=new It().fromArray(W),Me=new It().fromArray(ee);function Ae(L,pe,me,Oe){let Ie=new Uint8Array(4),st=n.createTexture();n.bindTexture(L,st),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<me;rt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(pe+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return st}let Re={};Re[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(yo),ge(!1),x(nh),De(n.CULL_FACE),Y(fi);function De(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function be(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Fe(L,pe){return p[L]!==pe?(n.bindFramebuffer(L,pe),p[L]=pe,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=pe),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function P(L,pe){let me=A,Oe=!1;if(L)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),L.isWebGLMultipleRenderTargets){let Ie=L.texture;if(me.length!==Ie.length||me[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=Ie.length;st<rt;st++)me[st]=n.COLOR_ATTACHMENT0+st;me.length=Ie.length,Oe=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,Oe=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ce(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let Q={[Pi]:n.FUNC_ADD,[tf]:n.FUNC_SUBTRACT,[nf]:n.FUNC_REVERSE_SUBTRACT};if(i)Q[oh]=n.MIN,Q[ah]=n.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Q[oh]=L.MIN_EXT,Q[ah]=L.MAX_EXT)}let oe={[sf]:n.ZERO,[rf]:n.ONE,[of]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[df]:n.SRC_ALPHA_SATURATE,[hf]:n.DST_COLOR,[cf]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[uf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[ff]:n.CONSTANT_COLOR,[pf]:n.ONE_MINUS_CONSTANT_COLOR,[mf]:n.CONSTANT_ALPHA,[gf]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(L,pe,me,Oe,Ie,st,rt,Rt,Wt,ot){if(L===fi){f===!0&&(be(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),L!==ef){if(L!==M||ot!==F){if((_!==Pi||R!==Pi)&&(n.blendEquation(n.FUNC_ADD),_=Pi,R=Pi),ot)switch(L){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,C=null,T=null,U=null,v.set(0,0,0),b=0,M=L,F=ot}return}Ie=Ie||pe,st=st||me,rt=rt||Oe,(pe!==_||Ie!==R)&&(n.blendEquationSeparate(Q[pe],Q[Ie]),_=pe,R=Ie),(me!==w||Oe!==C||st!==T||rt!==U)&&(n.blendFuncSeparate(oe[me],oe[Oe],oe[st],oe[rt]),w=me,C=Oe,T=st,U=rt),(Rt.equals(v)===!1||Wt!==b)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Wt),v.copy(Rt),b=Wt),M=L,F=!1}function Se(L,pe){L.side===vn?be(n.CULL_FACE):De(n.CULL_FACE);let me=L.side===Zt;pe&&(me=!me),ge(me),L.blending===ps&&L.transparent===!1?Y(fi):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let Oe=L.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(L){V!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),V=L)}function x(L){L!==$d?(De(n.CULL_FACE),L!==ie&&(L===nh?n.cullFace(n.BACK):L===jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),ie=L}function y(L){L!==D&&(Z&&n.lineWidth(L),D=L)}function N(L,pe,me){L?(De(n.POLYGON_OFFSET_FILL),(B!==pe||G!==me)&&(n.polygonOffset(pe,me),B=pe,G=me)):be(n.POLYGON_OFFSET_FILL)}function $(L){L?De(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function q(L){L===void 0&&(L=n.TEXTURE0+K-1),ne!==L&&(n.activeTexture(L),ne=L)}function J(L,pe,me){me===void 0&&(ne===null?me=n.TEXTURE0+K-1:me=ne);let Oe=he[me];Oe===void 0&&(Oe={type:void 0,texture:void 0},he[me]=Oe),(Oe.type!==L||Oe.texture!==pe)&&(ne!==me&&(n.activeTexture(me),ne=me),n.bindTexture(L,pe||Re[L]),Oe.type=L,Oe.texture=pe)}function ye(){let L=he[ne];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){fe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function Ke(L){Me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function pt(L,pe){let me=u.get(pe);me===void 0&&(me=new WeakMap,u.set(pe,me));let Oe=me.get(L);Oe===void 0&&(Oe=n.getUniformBlockIndex(pe,L.name),me.set(L,Oe))}function qe(L,pe){let Oe=u.get(pe).get(L);h.get(pe)!==Oe&&(n.uniformBlockBinding(pe,Oe,L.__bindingPointIndex),h.set(pe,Oe))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ne=null,he={},p={},g=new WeakMap,A=[],m=null,f=!1,M=null,_=null,w=null,C=null,R=null,T=null,U=null,v=new ke(0,0,0),b=0,F=!1,V=null,ie=null,D=null,B=null,G=null,fe.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:be,bindFramebuffer:Fe,drawBuffers:P,useProgram:ce,setBlending:Y,setMaterial:Se,setFlipSided:ge,setCullFace:x,setLineWidth:y,setPolygonOffset:N,setScissorTest:$,activeTexture:q,bindTexture:J,unbindTexture:ye,compressedTexImage2D:se,compressedTexImage3D:le,texImage2D:ve,texImage3D:re,updateUBOMapping:pt,uniformBlockBinding:qe,texStorage2D:ze,texStorage3D:Pe,texSubImage2D:Ee,texSubImage3D:Le,compressedTexSubImage2D:j,compressedTexSubImage3D:We,scissor:Ne,viewport:Ke,reset:ue}}function zA(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,y){return p?new OffscreenCanvas(x,y):To("canvas")}function A(x,y,N,$){let q=1;if((x.width>$||x.height>$)&&(q=$/Math.max(x.width,x.height)),q<1||y===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){let J=y?wc:Math.floor,ye=J(q*x.width),se=J(q*x.height);u===void 0&&(u=g(ye,se));let le=N?g(ye,se):u;return le.width=ye,le.height=se,le.getContext("2d").drawImage(x,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+ye+"x"+se+")."),le}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function m(x){return zh(x.width)&&zh(x.height)}function f(x){return a?!1:x.wrapS!==Mn||x.wrapT!==Mn||x.minFilter!==Qt&&x.minFilter!==an}function M(x,y){return x.generateMipmaps&&y&&x.minFilter!==Qt&&x.minFilter!==an}function _(x){n.generateMipmap(x)}function w(x,y,N,$,q=!1){if(a===!1)return y;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J=y;if(y===n.RED&&(N===n.FLOAT&&(J=n.R32F),N===n.HALF_FLOAT&&(J=n.R16F),N===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.R8UI),N===n.UNSIGNED_SHORT&&(J=n.R16UI),N===n.UNSIGNED_INT&&(J=n.R32UI),N===n.BYTE&&(J=n.R8I),N===n.SHORT&&(J=n.R16I),N===n.INT&&(J=n.R32I)),y===n.RG&&(N===n.FLOAT&&(J=n.RG32F),N===n.HALF_FLOAT&&(J=n.RG16F),N===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RGBA){let ye=q?bo:et.getTransfer($);N===n.FLOAT&&(J=n.RGBA32F),N===n.HALF_FLOAT&&(J=n.RGBA16F),N===n.UNSIGNED_BYTE&&(J=ye===at?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(x,y,N){return M(x,N)===!0||x.isFramebufferTexture&&x.minFilter!==Qt&&x.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?y.mipmaps.length:1}function R(x){return x===Qt||x===ch||x===Ua?n.NEAREST:n.LINEAR}function T(x){let y=x.target;y.removeEventListener("dispose",T),v(y),y.isVideoTexture&&h.delete(y)}function U(x){let y=x.target;y.removeEventListener("dispose",U),F(y)}function v(x){let y=i.get(x);if(y.__webglInit===void 0)return;let N=x.source,$=d.get(N);if($){let q=$[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(x),Object.keys($).length===0&&d.delete(N)}i.remove(x)}function b(x){let y=i.get(x);n.deleteTexture(y.__webglTexture);let N=x.source,$=d.get(N);delete $[y.__cacheKey],o.memory.textures--}function F(x){let y=x.texture,N=i.get(x),$=i.get(y);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(N.__webglFramebuffer[q]))for(let J=0;J<N.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(N.__webglFramebuffer[q][J]);else n.deleteFramebuffer(N.__webglFramebuffer[q]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[q])}else{if(Array.isArray(N.__webglFramebuffer))for(let q=0;q<N.__webglFramebuffer.length;q++)n.deleteFramebuffer(N.__webglFramebuffer[q]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let q=0;q<N.__webglColorRenderbuffer.length;q++)N.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[q]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let q=0,J=y.length;q<J;q++){let ye=i.get(y[q]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(y[q])}i.remove(y),i.remove(x)}let V=0;function ie(){V=0}function D(){let x=V;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),V+=1,x}function B(x){let y=[];return y.push(x.wrapS),y.push(x.wrapT),y.push(x.wrapR||0),y.push(x.magFilter),y.push(x.minFilter),y.push(x.anisotropy),y.push(x.internalFormat),y.push(x.format),y.push(x.type),y.push(x.generateMipmaps),y.push(x.premultiplyAlpha),y.push(x.flipY),y.push(x.unpackAlignment),y.push(x.colorSpace),y.join()}function G(x,y){let N=i.get(x);if(x.isVideoTexture&&Se(x),x.isRenderTargetTexture===!1&&x.version>0&&N.__version!==x.version){let $=x.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(N,x,y);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function K(x,y){let N=i.get(x);if(x.version>0&&N.__version!==x.version){fe(N,x,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function Z(x,y){let N=i.get(x);if(x.version>0&&N.__version!==x.version){fe(N,x,y);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function X(x,y){let N=i.get(x);if(x.version>0&&N.__version!==x.version){Me(N,x,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}let te={[rr]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Mc]:n.MIRRORED_REPEAT},ne={[Qt]:n.NEAREST,[ch]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Df]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},he={[Wf]:n.NEVER,[Zf]:n.ALWAYS,[Xf]:n.LESS,[Yu]:n.LEQUAL,[qf]:n.EQUAL,[Jf]:n.GEQUAL,[Yf]:n.GREATER,[Qf]:n.NOTEQUAL};function W(x,y,N){if(N?(n.texParameteri(x,n.TEXTURE_WRAP_S,te[y.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,te[y.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,te[y.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ne[y.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ne[y.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Mn||y.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,R(y.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Qt&&y.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,he[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Qt||y.minFilter!==Ua&&y.minFilter!==or||y.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(x,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ee(x,y){let N=!1;x.__webglInit===void 0&&(x.__webglInit=!0,y.addEventListener("dispose",T));let $=y.source,q=d.get($);q===void 0&&(q={},d.set($,q));let J=B(y);if(J!==x.__cacheKey){q[J]===void 0&&(q[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[J].usedTimes++;let ye=q[x.__cacheKey];ye!==void 0&&(q[x.__cacheKey].usedTimes--,ye.usedTimes===0&&b(y)),x.__cacheKey=J,x.__webglTexture=q[J].texture}return N}function fe(x,y,N){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);let q=ee(x,y),J=y.source;t.bindTexture($,x.__webglTexture,n.TEXTURE0+N);let ye=i.get(J);if(J.version!==ye.__version||q===!0){t.activeTexture(n.TEXTURE0+N);let se=et.getPrimaries(et.workingColorSpace),le=y.colorSpace===cn?null:et.getPrimaries(y.colorSpace),Ee=y.colorSpace===cn||se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Le=f(y)&&m(y.image)===!1,j=A(y.image,Le,!1,s.maxTextureSize);j=ge(y,j);let We=m(j)||a,ze=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type),ve=w(y.internalFormat,ze,Pe,y.colorSpace,y.isVideoTexture);W($,y,We);let re,Ne=y.mipmaps,Ke=a&&y.isVideoTexture!==!0&&ve!==Wu,pt=ye.__version===void 0||q===!0,qe=C(y,j,We);if(y.isDepthTexture)ve=n.DEPTH_COMPONENT,a?y.type===di?ve=n.DEPTH_COMPONENT32F:y.type===ui?ve=n.DEPTH_COMPONENT24:y.type===Li?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:y.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ni&&ve===n.DEPTH_COMPONENT&&y.type!==dl&&y.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ui,Pe=r.convert(y.type)),y.format===xs&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,y.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Li,Pe=r.convert(y.type))),pt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,ve,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ve,j.width,j.height,0,ze,Pe,null));else if(y.isDataTexture)if(Ne.length>0&&We){Ke&&pt&&t.texStorage2D(n.TEXTURE_2D,qe,ve,Ne[0].width,Ne[0].height);for(let ue=0,L=Ne.length;ue<L;ue++)re=Ne[ue],Ke?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,re.width,re.height,ze,Pe,re.data):t.texImage2D(n.TEXTURE_2D,ue,ve,re.width,re.height,0,ze,Pe,re.data);y.generateMipmaps=!1}else Ke?(pt&&t.texStorage2D(n.TEXTURE_2D,qe,ve,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,ze,Pe,j.data)):t.texImage2D(n.TEXTURE_2D,0,ve,j.width,j.height,0,ze,Pe,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,ve,Ne[0].width,Ne[0].height,j.depth);for(let ue=0,L=Ne.length;ue<L;ue++)re=Ne[ue],y.format!==bn?ze!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,re.width,re.height,j.depth,ze,re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,ve,re.width,re.height,j.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,re.width,re.height,j.depth,ze,Pe,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,ve,re.width,re.height,j.depth,0,ze,Pe,re.data)}else{Ke&&pt&&t.texStorage2D(n.TEXTURE_2D,qe,ve,Ne[0].width,Ne[0].height);for(let ue=0,L=Ne.length;ue<L;ue++)re=Ne[ue],y.format!==bn?ze!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,re.width,re.height,ze,re.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,ve,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,re.width,re.height,ze,Pe,re.data):t.texImage2D(n.TEXTURE_2D,ue,ve,re.width,re.height,0,ze,Pe,re.data)}else if(y.isDataArrayTexture)Ke?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,ve,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ze,Pe,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,j.width,j.height,j.depth,0,ze,Pe,j.data);else if(y.isData3DTexture)Ke?(pt&&t.texStorage3D(n.TEXTURE_3D,qe,ve,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ze,Pe,j.data)):t.texImage3D(n.TEXTURE_3D,0,ve,j.width,j.height,j.depth,0,ze,Pe,j.data);else if(y.isFramebufferTexture){if(pt)if(Ke)t.texStorage2D(n.TEXTURE_2D,qe,ve,j.width,j.height);else{let ue=j.width,L=j.height;for(let pe=0;pe<qe;pe++)t.texImage2D(n.TEXTURE_2D,pe,ve,ue,L,0,ze,Pe,null),ue>>=1,L>>=1}}else if(Ne.length>0&&We){Ke&&pt&&t.texStorage2D(n.TEXTURE_2D,qe,ve,Ne[0].width,Ne[0].height);for(let ue=0,L=Ne.length;ue<L;ue++)re=Ne[ue],Ke?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ze,Pe,re):t.texImage2D(n.TEXTURE_2D,ue,ve,ze,Pe,re);y.generateMipmaps=!1}else Ke?(pt&&t.texStorage2D(n.TEXTURE_2D,qe,ve,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Pe,j)):t.texImage2D(n.TEXTURE_2D,0,ve,ze,Pe,j);M(y,We)&&_($),ye.__version=J.version,y.onUpdate&&y.onUpdate(y)}x.__version=y.version}function Me(x,y,N){if(y.image.length!==6)return;let $=ee(x,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+N);let J=i.get(q);if(q.version!==J.__version||$===!0){t.activeTexture(n.TEXTURE0+N);let ye=et.getPrimaries(et.workingColorSpace),se=y.colorSpace===cn?null:et.getPrimaries(y.colorSpace),le=y.colorSpace===cn||ye===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,Le=y.image[0]&&y.image[0].isDataTexture,j=[];for(let ue=0;ue<6;ue++)!Ee&&!Le?j[ue]=A(y.image[ue],!1,!0,s.maxCubemapSize):j[ue]=Le?y.image[ue].image:y.image[ue],j[ue]=ge(y,j[ue]);let We=j[0],ze=m(We)||a,Pe=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),re=w(y.internalFormat,Pe,ve,y.colorSpace),Ne=a&&y.isVideoTexture!==!0,Ke=J.__version===void 0||$===!0,pt=C(y,We,ze);W(n.TEXTURE_CUBE_MAP,y,ze);let qe;if(Ee){Ne&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,re,We.width,We.height);for(let ue=0;ue<6;ue++){qe=j[ue].mipmaps;for(let L=0;L<qe.length;L++){let pe=qe[L];y.format!==bn?Pe!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,pe.width,pe.height,Pe,ve,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,re,pe.width,pe.height,0,Pe,ve,pe.data)}}}else{qe=y.mipmaps,Ne&&Ke&&(qe.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,re,j[0].width,j[0].height));for(let ue=0;ue<6;ue++)if(Le){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,j[ue].width,j[ue].height,Pe,ve,j[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,re,j[ue].width,j[ue].height,0,Pe,ve,j[ue].data);for(let L=0;L<qe.length;L++){let me=qe[L].image[ue].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,me.width,me.height,Pe,ve,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,re,me.width,me.height,0,Pe,ve,me.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,ve,j[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,re,Pe,ve,j[ue]);for(let L=0;L<qe.length;L++){let pe=qe[L];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,Pe,ve,pe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,re,Pe,ve,pe.image[ue])}}}M(y,ze)&&_(n.TEXTURE_CUBE_MAP),J.__version=q.version,y.onUpdate&&y.onUpdate(y)}x.__version=y.version}function Ae(x,y,N,$,q,J){let ye=r.convert(N.format,N.colorSpace),se=r.convert(N.type),le=w(N.internalFormat,ye,se,N.colorSpace);if(!i.get(y).__hasExternalTextures){let Le=Math.max(1,y.width>>J),j=Math.max(1,y.height>>J);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,J,le,Le,j,y.depth,0,ye,se,null):t.texImage2D(q,J,le,Le,j,0,ye,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),Y(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,q,i.get(N).__webglTexture,0,oe(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,q,i.get(N).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(x,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,x),y.depthBuffer&&!y.stencilBuffer){let $=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||Y(y)){let q=y.depthTexture;q&&q.isDepthTexture&&(q.type===di?$=n.DEPTH_COMPONENT32F:q.type===ui&&($=n.DEPTH_COMPONENT24));let J=oe(y);Y(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,$,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,$,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(y.depthBuffer&&y.stencilBuffer){let $=oe(y);N&&Y(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,y.width,y.height):Y(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{let $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let q=0;q<$.length;q++){let J=$[q],ye=r.convert(J.format,J.colorSpace),se=r.convert(J.type),le=w(J.internalFormat,ye,se,J.colorSpace),Ee=oe(y);N&&Y(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,le,y.width,y.height):Y(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(x,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let $=i.get(y.depthTexture).__webglTexture,q=oe(y);if(y.depthTexture.format===Ni)Y(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(y.depthTexture.format===xs)Y(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function be(x){let y=i.get(x),N=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");De(y.__webglFramebuffer,x)}else if(N){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=n.createRenderbuffer(),Re(y.__webglDepthbuffer[$],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Re(y.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(x,y,N){let $=i.get(x);y!==void 0&&Ae($.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&be(x)}function P(x){let y=x.texture,N=i.get(x),$=i.get(y);x.addEventListener("dispose",U),x.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,o.memory.textures++);let q=x.isWebGLCubeRenderTarget===!0,J=x.isWebGLMultipleRenderTargets===!0,ye=m(x)||a;if(q){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let le=0;le<y.mipmaps.length;le++)N.__webglFramebuffer[se][le]=n.createFramebuffer()}else N.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)N.__webglFramebuffer[se]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(J)if(s.drawBuffers){let se=x.texture;for(let le=0,Ee=se.length;le<Ee;le++){let Le=i.get(se[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&Y(x)===!1){let se=J?y:[y];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<se.length;le++){let Ee=se[le];N.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[le]);let Le=r.convert(Ee.format,Ee.colorSpace),j=r.convert(Ee.type),We=w(Ee.internalFormat,Le,j,Ee.colorSpace,x.isXRRenderTarget===!0),ze=oe(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,We,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,N.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(N.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),W(n.TEXTURE_CUBE_MAP,y,ye);for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)Ae(N.__webglFramebuffer[se][le],x,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else Ae(N.__webglFramebuffer[se],x,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);M(y,ye)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){let se=x.texture;for(let le=0,Ee=se.length;le<Ee;le++){let Le=se[le],j=i.get(Le);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),W(n.TEXTURE_2D,Le,ye),Ae(N.__webglFramebuffer,x,Le,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),M(Le,ye)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?se=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,$.__webglTexture),W(se,y,ye),a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)Ae(N.__webglFramebuffer[le],x,y,n.COLOR_ATTACHMENT0,se,le);else Ae(N.__webglFramebuffer,x,y,n.COLOR_ATTACHMENT0,se,0);M(y,ye)&&_(se),t.unbindTexture()}x.depthBuffer&&be(x)}function ce(x){let y=m(x)||a,N=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let $=0,q=N.length;$<q;$++){let J=N[$];if(M(J,y)){let ye=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(J).__webglTexture;t.bindTexture(ye,se),_(ye),t.unbindTexture()}}}function Q(x){if(a&&x.samples>0&&Y(x)===!1){let y=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],N=x.width,$=x.height,q=n.COLOR_BUFFER_BIT,J=[],ye=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(x),le=x.isWebGLMultipleRenderTargets===!0;if(le)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){J.push(n.COLOR_ATTACHMENT0+Ee),x.depthBuffer&&J.push(ye);let Le=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Le===!1&&(x.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),Le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),le){let j=i.get(y[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let Le=i.get(y[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function oe(x){return Math.min(s.maxSamples,x.samples)}function Y(x){let y=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(x){let y=o.render.frame;h.get(x)!==y&&(h.set(x,y),x.update())}function ge(x,y){let N=x.colorSpace,$=x.format,q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Sc||N!==Kn&&N!==cn&&(et.getTransfer(N)===at?a===!1?e.has("EXT_sRGB")===!0&&$===bn?(x.format=Sc,x.minFilter=an,x.generateMipmaps=!1):y=Ro.sRGBToLinear(y):($!==bn||q!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=Fe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Y}function kA(n,e,t){let i=t.isWebGL2;function s(r,o=cn){let a,c=et.getTransfer(o);if(r===mi)return n.UNSIGNED_BYTE;if(r===zu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ku)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Lf)return n.BYTE;if(r===Nf)return n.SHORT;if(r===dl)return n.UNSIGNED_SHORT;if(r===Bu)return n.INT;if(r===ui)return n.UNSIGNED_INT;if(r===di)return n.FLOAT;if(r===ar)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Uf)return n.ALPHA;if(r===bn)return n.RGBA;if(r===Ff)return n.LUMINANCE;if(r===Of)return n.LUMINANCE_ALPHA;if(r===Ni)return n.DEPTH_COMPONENT;if(r===xs)return n.DEPTH_STENCIL;if(r===Sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Bf)return n.RED;if(r===Gu)return n.RED_INTEGER;if(r===zf)return n.RG;if(r===Hu)return n.RG_INTEGER;if(r===Vu)return n.RGBA_INTEGER;if(r===Fa||r===Oa||r===Ba||r===za)if(c===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lh||r===hh||r===uh||r===dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===lh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fh||r===ph)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fh)return c===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ph)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mh||r===gh||r===Ah||r===_h||r===xh||r===yh||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th||r===Rh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ah)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rh)return c===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ka||r===Ch||r===Ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ka)return c===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kf||r===Ih||r===Dh||r===Lh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var zc=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},GA={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let A of e.hand.values()){let m=t.getJointPose(A,i),f=this._getHandJoint(l,A);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},kc=class extends Ai{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,A=t.getContextAttributes(),m=null,f=null,M=[],_=[],w=new ae,C=null,R=new Nt;R.layers.enable(1),R.viewport=new It;let T=new Nt;T.layers.enable(2),T.viewport=new It;let U=[R,T],v=new zc;v.layers.enable(1),v.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=M[W];return ee===void 0&&(ee=new tr,M[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=M[W];return ee===void 0&&(ee=new tr,M[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=M[W];return ee===void 0&&(ee=new tr,M[W]=ee),ee.getHandSpace()};function V(W){let ee=_.indexOf(W.inputSource);if(ee===-1)return;let fe=M[ee];fe!==void 0&&(fe.update(W.inputSource,W.frame,l||o),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function ie(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",D);for(let W=0;W<M.length;W++){let ee=_[W];ee!==null&&(_[W]=null,M[W].disconnect(ee))}b=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",D),A.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?A.antialias:!0,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new $n(p.framebufferWidth,p.framebufferHeight,{format:bn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil})}else{let ee=null,fe=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=A.stencil?xs:Ni,fe=A.stencil?Li:ui);let Ae={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new $n(d.textureWidth,d.textureHeight,{format:bn,type:mi,depthTexture:new Bo(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0});let Re=e.properties.get(f);Re.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(W){for(let ee=0;ee<W.removed.length;ee++){let fe=W.removed[ee],Me=_.indexOf(fe);Me>=0&&(_[Me]=null,M[Me].disconnect(fe))}for(let ee=0;ee<W.added.length;ee++){let fe=W.added[ee],Me=_.indexOf(fe);if(Me===-1){for(let Re=0;Re<M.length;Re++)if(Re>=_.length){_.push(fe),Me=Re;break}else if(_[Re]===null){_[Re]=fe,Me=Re;break}if(Me===-1)break}let Ae=M[Me];Ae&&Ae.connect(fe)}}let B=new I,G=new I;function K(W,ee,fe){B.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);let Me=B.distanceTo(G),Ae=ee.projectionMatrix.elements,Re=fe.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),be=Ae[14]/(Ae[10]+1),Fe=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],ce=(Ae[8]-1)/Ae[0],Q=(Re[8]+1)/Re[0],oe=De*ce,Y=De*Q,Se=Me/(-ce+Q),ge=Se*-ce;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(Se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let x=De+Se,y=be+Se,N=oe-ge,$=Y+(Me-ge),q=Fe*be/y*x,J=P*be/y*x;W.projectionMatrix.makePerspective(N,$,q,J,x,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Z(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.near=T.near=R.near=W.near,v.far=T.far=R.far=W.far,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far);let ee=W.parent,fe=v.cameras;Z(v,ee);for(let Me=0;Me<fe.length;Me++)Z(fe[Me],ee);fe.length===2?K(v,R,T):v.projectionMatrix.copy(R.projectionMatrix),X(W,v,ee)};function X(W,ee,fe){fe===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ec*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let te=null;function ne(W,ee){if(h=ee.getViewerPose(l||o),g=ee,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Me=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let Ae=0;Ae<fe.length;Ae++){let Re=fe[Ae],De=null;if(p!==null)De=p.getViewport(Re);else{let Fe=u.getViewSubImage(d,Re);De=Fe.viewport,Ae===0&&(e.setRenderTargetTextures(f,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(f))}let be=U[Ae];be===void 0&&(be=new Nt,be.layers.enable(Ae),be.viewport=new It,U[Ae]=be),be.matrix.fromArray(Re.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Re.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),Ae===0&&(v.matrix.copy(be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(be)}}for(let fe=0;fe<M.length;fe++){let Me=_[fe],Ae=M[fe];Me!==null&&Ae!==void 0&&Ae.update(Me,ee,l||o)}te&&te(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let he=new Ku;he.setAnimationLoop(ne),this.setAnimationLoop=function(W){te=W},this.dispose=function(){}}};function HA(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),A(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function A(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VA(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let w=_.program;i.uniformBlockBinding(M,w)}function l(M,_){let w=s[M.id];w===void 0&&(g(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",m));let C=_.program;i.updateUBOMapping(M,C);let R=e.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function h(M){let _=u();M.__bindingPointIndex=_;let w=n.createBuffer(),C=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,w),w}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],w=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,T=w.length;R<T;R++){let U=Array.isArray(w[R])?w[R]:[w[R]];for(let v=0,b=U.length;v<b;v++){let F=U[v];if(p(F,R,v,C)===!0){let V=F.__offset,ie=Array.isArray(F.value)?F.value:[F.value],D=0;for(let B=0;B<ie.length;B++){let G=ie[B],K=A(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,V+D,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,_,w,C){let R=M.value,T=_+"_"+w;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{let U=C[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(M){let _=M.uniforms,w=0,C=16;for(let T=0,U=_.length;T<U;T++){let v=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,F=v.length;b<F;b++){let V=v[b],ie=Array.isArray(V.value)?V.value:[V.value];for(let D=0,B=ie.length;D<B;D++){let G=ie[D],K=A(G),Z=w%C;Z!==0&&C-Z<K.boundary&&(w+=C-Z),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=K.storage}}}let R=w%C;return R>0&&(w+=C-R),M.__size=w,M.__cache={},this}function A(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Oi=class{constructor(e={}){let{canvas:t=$f(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),A=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;let _=this,w=!1,C=0,R=0,T=null,U=-1,v=null,b=new It,F=new It,V=null,ie=new ke(0),D=0,B=t.width,G=t.height,K=1,Z=null,X=null,te=new It(0,0,B,G),ne=new It(0,0,B,G),he=!1,W=new hr,ee=!1,fe=!1,Me=null,Ae=new xt,Re=new ae,De=new I,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return T===null?K:1}let P=i;function ce(S,O){for(let k=0;k<S.length;k++){let H=S[k],z=t.getContext(H,O);if(z!==null)return z}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){let O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),P=ce(O,S),P===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Q,oe,Y,Se,ge,x,y,N,$,q,J,ye,se,le,Ee,Le,j,We,ze,Pe,ve,re,Ne,Ke;function pt(){Q=new c0(P),oe=new n0(P,Q,e),Q.init(oe),re=new kA(P,Q,oe),Y=new BA(P,Q,oe),Se=new u0(P),ge=new wA,x=new zA(P,Q,Y,ge,oe,re,Se),y=new s0(_),N=new a0(_),$=new xp(P,oe),Ne=new e0(P,Q,$,oe),q=new l0(P,$,Se,Ne),J=new m0(P,q,$,Se),ze=new p0(P,oe,x),Le=new i0(ge),ye=new EA(_,y,N,Q,oe,Ne,Le),se=new HA(_,ge),le=new RA,Ee=new NA(Q,oe),We=new jg(_,y,N,Y,J,d,c),j=new OA(_,J,oe),Ke=new VA(P,Se,oe,Y),Pe=new t0(P,Q,Se,oe),ve=new h0(P,Q,Se,oe),Se.programs=ye.programs,_.capabilities=oe,_.extensions=Q,_.properties=ge,_.renderLists=le,_.shadowMap=j,_.state=Y,_.info=Se}pt();let qe=new kc(_,P);this.xr=qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(B,G,!1))},this.getSize=function(S){return S.set(B,G)},this.setSize=function(S,O,k=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,G=O,t.width=Math.floor(S*K),t.height=Math.floor(O*K),k===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(B*K,G*K).floor()},this.setDrawingBufferSize=function(S,O,k){B=S,G=O,K=k,t.width=Math.floor(S*k),t.height=Math.floor(O*k),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,O,k,H){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,O,k,H),Y.viewport(b.copy(te).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,O,k,H){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,O,k,H),Y.scissor(F.copy(ne).multiplyScalar(K).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){Y.setScissorTest(he=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(S=!0,O=!0,k=!0){let H=0;if(S){let z=!1;if(T!==null){let _e=T.texture.format;z=_e===Vu||_e===Hu||_e===Gu}if(z){let _e=T.texture.type,we=_e===mi||_e===ui||_e===dl||_e===Li||_e===zu||_e===ku,Ue=We.getClearColor(),Be=We.getClearAlpha(),Xe=Ue.r,Ge=Ue.g,He=Ue.b;we?(p[0]=Xe,p[1]=Ge,p[2]=He,p[3]=Be,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Xe,g[1]=Ge,g[2]=He,g[3]=Be,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),le.dispose(),Ee.dispose(),ge.dispose(),y.dispose(),N.dispose(),J.dispose(),Ne.dispose(),Ke.dispose(),ye.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Wt),qe.removeEventListener("sessionend",ot),Me&&(Me.dispose(),Me=null),Xt.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=Se.autoReset,O=j.enabled,k=j.autoUpdate,H=j.needsUpdate,z=j.type;pt(),Se.autoReset=S,j.enabled=O,j.autoUpdate=k,j.needsUpdate=H,j.type=z}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function me(S){let O=S.target;O.removeEventListener("dispose",me),Oe(O)}function Oe(S){Ie(S),ge.remove(S)}function Ie(S){let O=ge.get(S).programs;O!==void 0&&(O.forEach(function(k){ye.releaseProgram(k)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,k,H,z,_e){O===null&&(O=be);let we=z.isMesh&&z.matrixWorld.determinant()<0,Ue=qd(S,O,k,H,z);Y.setMaterial(H,we);let Be=k.index,Xe=1;if(H.wireframe===!0){if(Be=q.getWireframeAttribute(k),Be===void 0)return;Xe=2}let Ge=k.drawRange,He=k.attributes.position,gt=Ge.start*Xe,$t=(Ge.start+Ge.count)*Xe;_e!==null&&(gt=Math.max(gt,_e.start*Xe),$t=Math.min($t,(_e.start+_e.count)*Xe)),Be!==null?(gt=Math.max(gt,0),$t=Math.min($t,Be.count)):He!=null&&(gt=Math.max(gt,0),$t=Math.min($t,He.count));let Ct=$t-gt;if(Ct<0||Ct===1/0)return;Ne.setup(z,H,Ue,k,Be);let kn,dt=Pe;if(Be!==null&&(kn=$.get(Be),dt=ve,dt.setIndex(kn)),z.isMesh)H.wireframe===!0?(Y.setLineWidth(H.wireframeLinewidth*Fe()),dt.setMode(P.LINES)):dt.setMode(P.TRIANGLES);else if(z.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),Y.setLineWidth(Ye*Fe()),z.isLineSegments?dt.setMode(P.LINES):z.isLineLoop?dt.setMode(P.LINE_LOOP):dt.setMode(P.LINE_STRIP)}else z.isPoints?dt.setMode(P.POINTS):z.isSprite&&dt.setMode(P.TRIANGLES);if(z.isBatchedMesh)dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)dt.renderInstances(gt,Ct,z.count);else if(k.isInstancedBufferGeometry){let Ye=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ea=Math.min(k.instanceCount,Ye);dt.renderInstances(gt,Ct,Ea)}else dt.render(gt,Ct)};function st(S,O,k){S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=Zt,S.needsUpdate=!0,Fr(S,O,k),S.side=gi,S.needsUpdate=!0,Fr(S,O,k),S.side=vn):Fr(S,O,k)}this.compile=function(S,O,k=null){k===null&&(k=S),m=Ee.get(k),m.init(),M.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),S!==k&&S.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(_._useLegacyLights);let H=new Set;return S.traverse(function(z){let _e=z.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){let Ue=_e[we];st(Ue,k,z),H.add(Ue)}else st(_e,k,z),H.add(_e)}),M.pop(),m=null,H},this.compileAsync=function(S,O,k=null){let H=this.compile(S,O,k);return new Promise(z=>{function _e(){if(H.forEach(function(we){ge.get(we).currentProgram.isReady()&&H.delete(we)}),H.size===0){z(S);return}setTimeout(_e,10)}Q.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let rt=null;function Rt(S){rt&&rt(S)}function Wt(){Xt.stop()}function ot(){Xt.start()}let Xt=new Ku;Xt.setAnimationLoop(Rt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(S){rt=S,qe.setAnimationLoop(S),S===null?Xt.stop():Xt.start()},qe.addEventListener("sessionstart",Wt),qe.addEventListener("sessionend",ot),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(O),O=qe.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,O,T),m=Ee.get(S,M.length),m.init(),M.push(m),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,ee=Le.init(this.clippingPlanes,fe),A=le.get(S,f.length),A.init(),f.push(A),In(S,O,0,_.sortObjects),A.finish(),_.sortObjects===!0&&A.sort(Z,X),this.info.render.frame++,ee===!0&&Le.beginShadows();let k=m.state.shadowsArray;if(j.render(k,S,O),ee===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(A,S),m.setupLights(_._useLegacyLights),O.isArrayCamera){let H=O.cameras;for(let z=0,_e=H.length;z<_e;z++){let we=H[z];Nl(A,S,we,we.viewport)}}else Nl(A,S,O);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(_,S,O),Ne.resetDefaultState(),U=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?A=f[f.length-1]:A=null};function In(S,O,k,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){H&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ae);let we=J.update(S),Ue=S.material;Ue.visible&&A.push(S,we,Ue,k,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){let we=J.update(S),Ue=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),De.copy(we.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ue)){let Be=we.groups;for(let Xe=0,Ge=Be.length;Xe<Ge;Xe++){let He=Be[Xe],gt=Ue[He.materialIndex];gt&&gt.visible&&A.push(S,we,gt,k,De.z,He)}}else Ue.visible&&A.push(S,we,Ue,k,De.z,null)}}let _e=S.children;for(let we=0,Ue=_e.length;we<Ue;we++)In(_e[we],O,k,H)}function Nl(S,O,k,H){let z=S.opaque,_e=S.transmissive,we=S.transparent;m.setupLightsView(k),ee===!0&&Le.setGlobalState(_.clippingPlanes,k),_e.length>0&&Xd(z,_e,O,k),H&&Y.viewport(b.copy(H)),z.length>0&&Ur(z,O,k),_e.length>0&&Ur(_e,O,k),we.length>0&&Ur(we,O,k),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Xd(S,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let _e=oe.isWebGL2;Me===null&&(Me=new $n(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?ar:mi,minFilter:or,samples:_e?4:0})),_.getDrawingBufferSize(Re),_e?Me.setSize(Re.x,Re.y):Me.setSize(wc(Re.x),wc(Re.y));let we=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(ie),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();let Ue=_.toneMapping;_.toneMapping=pi,Ur(S,k,H),x.updateMultisampleRenderTarget(Me),x.updateRenderTargetMipmap(Me);let Be=!1;for(let Xe=0,Ge=O.length;Xe<Ge;Xe++){let He=O[Xe],gt=He.object,$t=He.geometry,Ct=He.material,kn=He.group;if(Ct.side===vn&&gt.layers.test(H.layers)){let dt=Ct.side;Ct.side=Zt,Ct.needsUpdate=!0,Ul(gt,k,H,$t,Ct,kn),Ct.side=dt,Ct.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(Me),x.updateRenderTargetMipmap(Me)),_.setRenderTarget(we),_.setClearColor(ie,D),_.toneMapping=Ue}function Ur(S,O,k){let H=O.isScene===!0?O.overrideMaterial:null;for(let z=0,_e=S.length;z<_e;z++){let we=S[z],Ue=we.object,Be=we.geometry,Xe=H===null?we.material:H,Ge=we.group;Ue.layers.test(k.layers)&&Ul(Ue,O,k,Be,Xe,Ge)}}function Ul(S,O,k,H,z,_e){S.onBeforeRender(_,O,k,H,z,_e),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(_,O,k,H,S,_e),z.transparent===!0&&z.side===vn&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,_.renderBufferDirect(k,O,H,z,S,_e),z.side=gi,z.needsUpdate=!0,_.renderBufferDirect(k,O,H,z,S,_e),z.side=vn):_.renderBufferDirect(k,O,H,z,S,_e),S.onAfterRender(_,O,k,H,z,_e)}function Fr(S,O,k){O.isScene!==!0&&(O=be);let H=ge.get(S),z=m.state.lights,_e=m.state.shadowsArray,we=z.state.version,Ue=ye.getParameters(S,z.state,_e,O,k),Be=ye.getProgramCacheKey(Ue),Xe=H.programs;H.environment=S.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(S.isMeshStandardMaterial?N:y).get(S.envMap||H.environment),Xe===void 0&&(S.addEventListener("dispose",me),Xe=new Map,H.programs=Xe);let Ge=Xe.get(Be);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===we)return Ol(S,Ue),Ge}else Ue.uniforms=ye.getUniforms(S),S.onBuild(k,Ue,_),S.onBeforeCompile(Ue,_),Ge=ye.acquireProgram(Ue,Be),Xe.set(Be,Ge),H.uniforms=Ue.uniforms;let He=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Le.uniform),Ol(S,Ue),H.needsLights=Qd(S),H.lightsStateVersion=we,H.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Fl(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ol(S,O){let k=ge.get(S);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function qd(S,O,k,H,z){O.isScene!==!0&&(O=be),x.resetTextureUnits();let _e=O.fog,we=H.isMeshStandardMaterial?O.environment:null,Ue=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kn,Be=(H.isMeshStandardMaterial?N:y).get(H.envMap||we),Xe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),He=!!k.morphAttributes.position,gt=!!k.morphAttributes.normal,$t=!!k.morphAttributes.color,Ct=pi;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=_.toneMapping);let kn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,dt=kn!==void 0?kn.length:0,Ye=ge.get(H),Ea=m.state.lights;if(ee===!0&&(fe===!0||S!==v)){let rn=S===v&&H.id===U;Le.setState(H,S,rn)}let mt=!1;H.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ea.state.version||Ye.outputColorSpace!==Ue||z.isBatchedMesh&&Ye.batching===!1||!z.isBatchedMesh&&Ye.batching===!0||z.isInstancedMesh&&Ye.instancing===!1||!z.isInstancedMesh&&Ye.instancing===!0||z.isSkinnedMesh&&Ye.skinning===!1||!z.isSkinnedMesh&&Ye.skinning===!0||z.isInstancedMesh&&Ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ye.instancingColor===!1&&z.instanceColor!==null||Ye.envMap!==Be||H.fog===!0&&Ye.fog!==_e||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Le.numPlanes||Ye.numIntersection!==Le.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Ge||Ye.morphTargets!==He||Ye.morphNormals!==gt||Ye.morphColors!==$t||Ye.toneMapping!==Ct||oe.isWebGL2===!0&&Ye.morphTargetsCount!==dt)&&(mt=!0):(mt=!0,Ye.__version=H.version);let bi=Ye.currentProgram;mt===!0&&(bi=Fr(H,O,z));let Bl=!1,Vs=!1,wa=!1,Ot=bi.getUniforms(),Si=Ye.uniforms;if(Y.useProgram(bi.program)&&(Bl=!0,Vs=!0,wa=!0),H.id!==U&&(U=H.id,Vs=!0),Bl||v!==S){Ot.setValue(P,"projectionMatrix",S.projectionMatrix),Ot.setValue(P,"viewMatrix",S.matrixWorldInverse);let rn=Ot.map.cameraPosition;rn!==void 0&&rn.setValue(P,De.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&Ot.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ot.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Vs=!0,wa=!0)}if(z.isSkinnedMesh){Ot.setOptional(P,z,"bindMatrix"),Ot.setOptional(P,z,"bindMatrixInverse");let rn=z.skeleton;rn&&(oe.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Ot.setValue(P,"boneTexture",rn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ot.setOptional(P,z,"batchingTexture"),Ot.setValue(P,"batchingTexture",z._matricesTexture,x));let Ta=k.morphAttributes;if((Ta.position!==void 0||Ta.normal!==void 0||Ta.color!==void 0&&oe.isWebGL2===!0)&&ze.update(z,k,bi),(Vs||Ye.receiveShadow!==z.receiveShadow)&&(Ye.receiveShadow=z.receiveShadow,Ot.setValue(P,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Si.envMap.value=Be,Si.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Vs&&(Ot.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&Yd(Si,wa),_e&&H.fog===!0&&se.refreshFogUniforms(Si,_e),se.refreshMaterialUniforms(Si,H,K,G,Me),gs.upload(P,Fl(Ye),Si,x)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gs.upload(P,Fl(Ye),Si,x),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ot.setValue(P,"center",z.center),Ot.setValue(P,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(P,"normalMatrix",z.normalMatrix),Ot.setValue(P,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let rn=H.uniformsGroups;for(let Ra=0,Jd=rn.length;Ra<Jd;Ra++)if(oe.isWebGL2){let zl=rn[Ra];Ke.update(zl,bi),Ke.bind(zl,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Yd(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,O,k){ge.get(S.texture).__webglTexture=O,ge.get(S.depthTexture).__webglTexture=k;let H=ge.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,O){let k=ge.get(S);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,k=0){T=S,C=O,R=k;let H=!0,z=null,_e=!1,we=!1;if(S){let Be=ge.get(S);Be.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(P.FRAMEBUFFER,null),H=!1):Be.__webglFramebuffer===void 0?x.setupRenderTarget(S):Be.__hasExternalTextures&&x.rebindTextures(S,ge.get(S.texture).__webglTexture,ge.get(S.depthTexture).__webglTexture);let Xe=S.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);let Ge=ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?z=Ge[O][k]:z=Ge[O],_e=!0):oe.isWebGL2&&S.samples>0&&x.useMultisampledRTT(S)===!1?z=ge.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[k]:z=Ge,b.copy(S.viewport),F.copy(S.scissor),V=S.scissorTest}else b.copy(te).multiplyScalar(K).floor(),F.copy(ne).multiplyScalar(K).floor(),V=he;if(Y.bindFramebuffer(P.FRAMEBUFFER,z)&&oe.drawBuffers&&H&&Y.drawBuffers(S,z),Y.viewport(b),Y.scissor(F),Y.setScissorTest(V),_e){let Be=ge.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Be.__webglTexture,k)}else if(we){let Be=ge.get(S.texture),Xe=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,k||0,Xe)}U=-1},this.readRenderTargetPixels=function(S,O,k,H,z,_e,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){Y.bindFramebuffer(P.FRAMEBUFFER,Ue);try{let Be=S.texture,Xe=Be.format,Ge=Be.type;if(Xe!==bn&&re.convert(Xe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let He=Ge===ar&&(Q.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ge!==mi&&re.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===di&&(oe.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&k>=0&&k<=S.height-z&&P.readPixels(O,k,H,z,re.convert(Xe),re.convert(Ge),_e)}finally{let Be=T!==null?ge.get(T).__webglFramebuffer:null;Y.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(S,O,k=0){let H=Math.pow(2,-k),z=Math.floor(O.image.width*H),_e=Math.floor(O.image.height*H);x.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,S.x,S.y,z,_e),Y.unbindTexture()},this.copyTextureToTexture=function(S,O,k,H=0){let z=O.image.width,_e=O.image.height,we=re.convert(k.format),Ue=re.convert(k.type);x.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,S.x,S.y,z,_e,we,Ue,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,H,S.x,S.y,we,Ue,O.image),H===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(S,O,k,H,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _e=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,Ue=S.max.z-S.min.z+1,Be=re.convert(H.format),Xe=re.convert(H.type),Ge;if(H.isData3DTexture)x.setTexture3D(H,0),Ge=P.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)x.setTexture2DArray(H,0),Ge=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let He=P.getParameter(P.UNPACK_ROW_LENGTH),gt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$t=P.getParameter(P.UNPACK_SKIP_PIXELS),Ct=P.getParameter(P.UNPACK_SKIP_ROWS),kn=P.getParameter(P.UNPACK_SKIP_IMAGES),dt=k.isCompressedTexture?k.mipmaps[z]:k.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?P.texSubImage3D(Ge,z,O.x,O.y,O.z,_e,we,Ue,Be,Xe,dt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ge,z,O.x,O.y,O.z,_e,we,Ue,Be,dt.data)):P.texSubImage3D(Ge,z,O.x,O.y,O.z,_e,we,Ue,Be,Xe,dt),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kn),z===0&&H.generateMipmaps&&P.generateMipmap(Ge),Y.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),Y.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,Y.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===fl?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Ui:Xu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ui?At:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gc=class extends Oi{};Gc.prototype.isWebGL1Renderer=!0;var Ms=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},zo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new I,dr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},as,Ks=new I,cs=new I,ls=new I,hs=new ae,$s=new ae,id=new xt,uo=new I,js=new I,fo=new I,bu=new ae,dc=new ae,Su=new ae,ko=class extends Ut{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zo(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new dr(i,3,0,!1)),as.setAttribute("uv",new dr(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;po(uo.set(-.5,-.5,0),ls,o,cs,s,r),po(js.set(.5,-.5,0),ls,o,cs,s,r),po(fo.set(.5,.5,0),ls,o,cs,s,r),bu.set(0,0),dc.set(1,0),Su.set(1,1);let a=e.ray.intersectTriangle(uo,js,fo,!1,Ks);if(a===null&&(po(js.set(-.5,.5,0),ls,o,cs,s,r),dc.set(0,1),a=e.ray.intersectTriangle(uo,fo,js,!1,Ks),a===null))return;let c=e.ray.origin.distanceTo(Ks);c<e.near||c>e.far||t.push({distance:c,point:Ks.clone(),uv:Di.getInterpolation(Ks,uo,js,fo,bu,dc,Su,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function po(n,e,t,i,s,r){hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($s.x=r*hs.x-s*hs.y,$s.y=s*hs.x+r*hs.y):$s.copy(hs),n.copy(e),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4(id)}var pr=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eu=new I,wu=new I,Tu=new xt,fc=new cr,mo=new ys,Go=class extends Ut{constructor(e=new vt,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Eu.fromBufferAttribute(t,s-1),wu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Eu.distanceTo(wu);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Tu.copy(s).invert(),fc.copy(e.ray).applyMatrix4(Tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,h=new I,u=new I,d=new I,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let _=f,w=M-1;_<w;_+=p){let C=g.getX(_),R=g.getX(_+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,R),fc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let _=f,w=M-1;_<w;_+=p){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),fc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Ss=class extends ln{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,c=new xt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends un{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new ae,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hc=class extends mr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ml(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var go=new I,pc=new ml,mc=new ml,gc=new ml,Vc=class extends un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),l=go);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),A=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);A<1e-4&&(A=1),g<1e-4&&(g=A),m<1e-4&&(m=A),pc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,A,m),mc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,A,m),gc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,A,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),mc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),gc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(pc.calc(c),mc.calc(c),gc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function WA(n,e){let t=1-n;return t*t*e}function XA(n,e){return 2*(1-n)*n*e}function qA(n,e){return n*n*e}function nr(n,e,t,i){return WA(n,e)+XA(n,t)+qA(n,i)}function YA(n,e){let t=1-n;return t*t*t*e}function QA(n,e){let t=1-n;return 3*t*t*n*e}function JA(n,e){return 3*(1-n)*n*n*e}function ZA(n,e){return n*n*n*e}function ir(n,e,t,i,s){return YA(n,e)+QA(n,t)+JA(n,i)+ZA(n,s)}var Ho=class extends un{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wc=class extends un{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vo=class extends un{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends un{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qc=class extends un{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ru(a,c.x,l.x,h.x,u.x),Ru(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Yc=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Vc,CubicBezierCurve:Ho,CubicBezierCurve3:Wc,EllipseCurve:mr,LineCurve:Vo,LineCurve3:Xc,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:qc,SplineCurve:Xo}),Qc=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Yc[s.type]().fromJSON(s))}return this}},qo=class extends Qc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Vo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Wo(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ho(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new mr(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Yo=class n extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,A=[],m=i/2,f=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function M(){let w=new I,C=new I,R=0,T=(t-e)/i;for(let U=0;U<=r;U++){let v=[],b=U/r,F=b*(t-e)+e;for(let V=0;V<=s;V++){let ie=V/s,D=ie*c+a,B=Math.sin(D),G=Math.cos(D);C.x=F*B,C.y=-b*i+m,C.z=F*G,u.push(C.x,C.y,C.z),w.set(B,T,G).normalize(),d.push(w.x,w.y,w.z),p.push(ie,1-b),v.push(g++)}A.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let b=A[v][U],F=A[v+1][U],V=A[v+1][U+1],ie=A[v][U+1];h.push(b,F,ie),h.push(F,V,ie),R+=6}l.addGroup(f,R,0),f+=R}function _(w){let C=g,R=new ae,T=new I,U=0,v=w===!0?e:t,b=w===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;let F=g;for(let V=0;V<=s;V++){let D=V/s*c+a,B=Math.cos(D),G=Math.sin(D);T.x=v*G,T.y=m*b,T.z=v*B,u.push(T.x,T.y,T.z),d.push(0,b,0),R.x=B*.5+.5,R.y=G*.5*b+.5,p.push(R.x,R.y),g++}for(let V=0;V<s;V++){let ie=C+V,D=F+V;w===!0?h.push(D,D+1,ie):h.push(D+1,D,ie),U+=3}l.addGroup(f,U,w===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jc=class n extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new I,w=new I,C=new I;for(let R=0;R<t.length;R+=3)p(t[R+0],_),p(t[R+1],w),p(t[R+2],C),c(_,w,C,M)}function c(M,_,w,C){let R=C+1,T=[];for(let U=0;U<=R;U++){T[U]=[];let v=M.clone().lerp(w,U/R),b=_.clone().lerp(w,U/R),F=R-U;for(let V=0;V<=F;V++)V===0&&U===R?T[U][V]=v:T[U][V]=v.clone().lerp(b,V/F)}for(let U=0;U<R;U++)for(let v=0;v<2*(R-U)-1;v++){let b=Math.floor(v/2);v%2===0?(d(T[U][b+1]),d(T[U+1][b]),d(T[U][b])):(d(T[U][b+1]),d(T[U+1][b+1]),d(T[U+1][b]))}}function l(M){let _=new I;for(let w=0;w<r.length;w+=3)_.x=r[w+0],_.y=r[w+1],_.z=r[w+2],_.normalize().multiplyScalar(M),r[w+0]=_.x,r[w+1]=_.y,r[w+2]=_.z}function h(){let M=new I;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let w=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;o.push(w,1-C)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let _=o[M+0],w=o[M+2],C=o[M+4],R=Math.max(_,w,C),T=Math.min(_,w,C);R>.9&&T<.1&&(_<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,_){let w=M*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function g(){let M=new I,_=new I,w=new I,C=new I,R=new ae,T=new ae,U=new ae;for(let v=0,b=0;v<r.length;v+=9,b+=6){M.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),w.set(r[v+6],r[v+7],r[v+8]),R.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),C.copy(M).add(_).add(w).divideScalar(3);let F=m(C);A(R,b+0,M,F),A(T,b+2,_,F),A(U,b+4,w,F)}}function A(M,_,w,C){C<0&&M.x===1&&(o[_]=M.x-1),w.x===0&&w.z===0&&(o[_]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var gr=class extends qo{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new qo().fromJSON(s))}return this}},KA={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=sd(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(i&&(r=n_(n,e,r,t)),n.length>80*t){a=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Ar(r,o,t,a,c,p,0),o}};function sd(n,e,t,i,s){let r,o;if(s===f_(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Cu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Cu(r,n[r],n[r+1],o);return o&&na(o,o.next)&&(xr(o),o=o.next),o}function Bi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(na(t,t.next)||ft(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ar(n,e,t,i,s,r,o){if(!n)return;!o&&r&&a_(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?jA(n,i,s,r):$A(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),xr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=e_(Bi(n),e,t),Ar(n,e,t,i,s,r,2)):o===2&&t_(n,e,t,i,s,r):Ar(Bi(n),e,t,i,s,r,1);break}}}function $A(n){let e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&fs(s,a,r,c,o,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jA(n,e,t,i){let s=n.prev,r=n,o=n.next;if(ft(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,A=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Zc(p,g,e,t,i),M=Zc(A,m,e,t,i),_=n.prevZ,w=n.nextZ;for(;_&&_.z>=f&&w&&w.z<=M;){if(_.x>=p&&_.x<=A&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fs(a,h,c,u,l,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=A&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fs(a,h,c,u,l,d,w.x,w.y)&&ft(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=A&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fs(a,h,c,u,l,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=M;){if(w.x>=p&&w.x<=A&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fs(a,h,c,u,l,d,w.x,w.y)&&ft(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function e_(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!na(s,r)&&rd(s,i,i.next,r)&&_r(s,r)&&_r(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),xr(i),xr(i.next),i=n=r),i=i.next}while(i!==n);return Bi(i)}function t_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let c=od(o,a);o=Bi(o,o.next),c=Bi(c,c.next),Ar(o,e,t,i,s,r,0),Ar(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function n_(n,e,t,i){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=sd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(l_(l));for(s.sort(i_),r=0;r<s.length;r++)t=s_(s[r],t);return t}function i_(n,e){return n.x-e.x}function s_(n,e){let t=r_(n,e);if(!t)return e;let i=od(t,n);return Bi(i,i.next),Bi(t,t.next)}function r_(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&fs(o<l?r:i,o,c,l,o<l?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),_r(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&o_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function o_(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function a_(n,e,t,i){let s=n;do s.z===0&&(s.z=Zc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,c_(s)}function c_(n){let e,t,i,s,r,o,a,c,l=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(o>1);return n}function Zc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function l_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function h_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!u_(n,e)&&(_r(n,e)&&_r(e,n)&&d_(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||na(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function na(n,e){return n.x===e.x&&n.y===e.y}function rd(n,e,t,i){let s=_o(ft(n,e,t)),r=_o(ft(n,e,i)),o=_o(ft(t,i,n)),a=_o(ft(t,i,e));return!!(s!==r&&o!==a||s===0&&Ao(n,t,e)||r===0&&Ao(n,i,e)||o===0&&Ao(t,n,i)||a===0&&Ao(t,e,i))}function Ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _o(n){return n>0?1:n<0?-1:0}function u_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _r(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function d_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function od(n,e){let t=new Kc(n.i,n.x,n.y),i=new Kc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Cu(n,e,t,i){let s=new Kc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var sr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Pu(e),Iu(i,e);let o=e.length;t.forEach(Pu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Iu(i,t[c]);let a=KA.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Pu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Iu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Qo=class n extends vt{constructor(e=new gr([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:p_,_,w=!1,C,R,T,U;f&&(_=f.getSpacedPoints(h),w=!0,d=!1,C=f.computeFrenetFrames(h,!1),R=new I,T=new I,U=new I),d||(m=0,p=0,g=0,A=0);let v=a.extractPoints(l),b=v.shape,F=v.holes;if(!sr.isClockWise(b)){b=b.reverse();for(let P=0,ce=F.length;P<ce;P++){let Q=F[P];sr.isClockWise(Q)&&(F[P]=Q.reverse())}}let ie=sr.triangulateShape(b,F),D=b;for(let P=0,ce=F.length;P<ce;P++){let Q=F[P];b=b.concat(Q)}function B(P,ce,Q){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ce,Q)}let G=b.length,K=ie.length;function Z(P,ce,Q){let oe,Y,Se,ge=P.x-ce.x,x=P.y-ce.y,y=Q.x-P.x,N=Q.y-P.y,$=ge*ge+x*x,q=ge*N-x*y;if(Math.abs(q)>Number.EPSILON){let J=Math.sqrt($),ye=Math.sqrt(y*y+N*N),se=ce.x-x/J,le=ce.y+ge/J,Ee=Q.x-N/ye,Le=Q.y+y/ye,j=((Ee-se)*N-(Le-le)*y)/(ge*N-x*y);oe=se+ge*j-P.x,Y=le+x*j-P.y;let We=oe*oe+Y*Y;if(We<=2)return new ae(oe,Y);Se=Math.sqrt(We/2)}else{let J=!1;ge>Number.EPSILON?y>Number.EPSILON&&(J=!0):ge<-Number.EPSILON?y<-Number.EPSILON&&(J=!0):Math.sign(x)===Math.sign(N)&&(J=!0),J?(oe=-x,Y=ge,Se=Math.sqrt($)):(oe=ge,Y=x,Se=Math.sqrt($/2))}return new ae(oe/Se,Y/Se)}let X=[];for(let P=0,ce=D.length,Q=ce-1,oe=P+1;P<ce;P++,Q++,oe++)Q===ce&&(Q=0),oe===ce&&(oe=0),X[P]=Z(D[P],D[Q],D[oe]);let te=[],ne,he=X.concat();for(let P=0,ce=F.length;P<ce;P++){let Q=F[P];ne=[];for(let oe=0,Y=Q.length,Se=Y-1,ge=oe+1;oe<Y;oe++,Se++,ge++)Se===Y&&(Se=0),ge===Y&&(ge=0),ne[oe]=Z(Q[oe],Q[Se],Q[ge]);te.push(ne),he=he.concat(ne)}for(let P=0;P<m;P++){let ce=P/m,Q=p*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+A;for(let Y=0,Se=D.length;Y<Se;Y++){let ge=B(D[Y],X[Y],oe);Ae(ge.x,ge.y,-Q)}for(let Y=0,Se=F.length;Y<Se;Y++){let ge=F[Y];ne=te[Y];for(let x=0,y=ge.length;x<y;x++){let N=B(ge[x],ne[x],oe);Ae(N.x,N.y,-Q)}}}let W=g+A;for(let P=0;P<G;P++){let ce=d?B(b[P],he[P],W):b[P];w?(T.copy(C.normals[0]).multiplyScalar(ce.x),R.copy(C.binormals[0]).multiplyScalar(ce.y),U.copy(_[0]).add(T).add(R),Ae(U.x,U.y,U.z)):Ae(ce.x,ce.y,0)}for(let P=1;P<=h;P++)for(let ce=0;ce<G;ce++){let Q=d?B(b[ce],he[ce],W):b[ce];w?(T.copy(C.normals[P]).multiplyScalar(Q.x),R.copy(C.binormals[P]).multiplyScalar(Q.y),U.copy(_[P]).add(T).add(R),Ae(U.x,U.y,U.z)):Ae(Q.x,Q.y,u/h*P)}for(let P=m-1;P>=0;P--){let ce=P/m,Q=p*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+A;for(let Y=0,Se=D.length;Y<Se;Y++){let ge=B(D[Y],X[Y],oe);Ae(ge.x,ge.y,u+Q)}for(let Y=0,Se=F.length;Y<Se;Y++){let ge=F[Y];ne=te[Y];for(let x=0,y=ge.length;x<y;x++){let N=B(ge[x],ne[x],oe);w?Ae(N.x,N.y+_[h-1].y,_[h-1].x+Q):Ae(N.x,N.y,u+Q)}}}ee(),fe();function ee(){let P=s.length/3;if(d){let ce=0,Q=G*ce;for(let oe=0;oe<K;oe++){let Y=ie[oe];Re(Y[2]+Q,Y[1]+Q,Y[0]+Q)}ce=h+m*2,Q=G*ce;for(let oe=0;oe<K;oe++){let Y=ie[oe];Re(Y[0]+Q,Y[1]+Q,Y[2]+Q)}}else{for(let ce=0;ce<K;ce++){let Q=ie[ce];Re(Q[2],Q[1],Q[0])}for(let ce=0;ce<K;ce++){let Q=ie[ce];Re(Q[0]+G*h,Q[1]+G*h,Q[2]+G*h)}}i.addGroup(P,s.length/3-P,0)}function fe(){let P=s.length/3,ce=0;Me(D,ce),ce+=D.length;for(let Q=0,oe=F.length;Q<oe;Q++){let Y=F[Q];Me(Y,ce),ce+=Y.length}i.addGroup(P,s.length/3-P,1)}function Me(P,ce){let Q=P.length;for(;--Q>=0;){let oe=Q,Y=Q-1;Y<0&&(Y=P.length-1);for(let Se=0,ge=h+m*2;Se<ge;Se++){let x=G*Se,y=G*(Se+1),N=ce+oe+x,$=ce+Y+x,q=ce+Y+y,J=ce+oe+y;De(N,$,q,J)}}}function Ae(P,ce,Q){c.push(P),c.push(ce),c.push(Q)}function Re(P,ce,Q){be(P),be(ce),be(Q);let oe=s.length/3,Y=M.generateTopUV(i,s,oe-3,oe-2,oe-1);Fe(Y[0]),Fe(Y[1]),Fe(Y[2])}function De(P,ce,Q,oe){be(P),be(ce),be(oe),be(ce),be(Q),be(oe);let Y=s.length/3,Se=M.generateSideWallUV(i,s,Y-6,Y-3,Y-2,Y-1);Fe(Se[0]),Fe(Se[1]),Fe(Se[3]),Fe(Se[1]),Fe(Se[2]),Fe(Se[3])}function be(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function Fe(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return m_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yc[s.type]().fromJSON(s)),new n(i,e.options)}},p_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],A=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(d,1-g),new ae(A,1-f)]:[new ae(a,1-c),new ae(h,1-u),new ae(p,1-g),new ae(m,1-f)]}};function m_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jo=class n extends vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,p=new I,g=new ae;for(let A=0;A<=s;A++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let A=0;A<s;A++){let m=A*(i+1);for(let f=0;f<i;f++){let M=f+m,_=M,w=M+i+1,C=M+i+2,R=M+1;a.push(_,w,R),a.push(w,C,R)}}this.setIndex(a),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Es=class n extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,p=[],g=[],A=[],m=[];for(let f=0;f<=i;f++){let M=[],_=f/i,w=0;f===0&&o===0?w=.5/t:f===i&&c===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){let R=C/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),A.push(d.x,d.y,d.z),m.push(R+w,1-_),M.push(l++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let _=h[f][M+1],w=h[f][M],C=h[f+1][M],R=h[f+1][M+1];(f!==0||o>0)&&p.push(_,w,R),(f!==i-1||c<Math.PI)&&p.push(w,C,R)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(A,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Zo=class n extends Jc{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var xi=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function xo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function g_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$c=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=e,a=2*t-i;break;case Fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Uh:o=e,c=2*i-t;break;case Fh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),A=g*g,m=A*g,f=-d*m+2*d*A-d*g,M=(1+d)*m+(-1.5-2*d)*A+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*A+.5*g,w=p*m-p*A;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+M*o[l+C]+_*o[c+C]+w*o[u+C];return r}},jc=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},el=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $c(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&g_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let A=t[u+g];if(A!==t[d+g]||A!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Mo;var zi=class extends Sn{};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=vo;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Sn{};tl.prototype.ValueTypeName="color";var nl=class extends Sn{};nl.prototype.ValueTypeName="number";var il=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)_i.slerpFlat(r,0,o,l-a,o,l,c);return r}},yr=class extends Sn{InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=Mo;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Sn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=vo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Sn{};sl.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},A_=new rl,ol=class{constructor(e){this.manager=e!==void 0?e:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ko=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ts=class extends Ko{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ac=new xt,Du=new I,Lu=new I,al=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var cl=class extends al{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var gl="\\[\\]\\.:\\/",__=new RegExp("["+gl+"]","g"),Al="[^"+gl+"]",x_="[^"+gl.replace("\\.","")+"]",y_=/((?:WC+[\/:])*)/.source.replace("WC",Al),v_=/(WCOD+)?/.source.replace("WCOD",x_),M_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),b_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),S_=new RegExp("^"+y_+v_+M_+b_+"$"),E_=["material","materials","bones","map"],ll=class{constructor(e,t,i){let s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(__,"")}static parseTrackName(e){let t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=ll;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hx=new Float32Array(1);var $o=class{constructor(e,t,i=0,s=1/0){this.ray=new cr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return hl(e,this,i,t),i.sort(Nu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)hl(e[s],this,i,t);return i.sort(Nu),i}};function Nu(n,e){return n.distance-e.distance}function hl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)hl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function ia(n,{reducedMotion:e=!1,onImpact:t}={}){let i=new Map,s=new Map,r=new Set,o=new ti(.105,.42,10);o.rotateX(Math.PI/2);let a=new ti(.075,.28,8);a.rotateX(-Math.PI/2);let c=new Jo(.15,.2,24),l=new Zo(.08),h=new xi({color:"#b86436",metalness:.5,roughness:.4}),u=new Gt({color:"#ffd374"}),d=new Gt({color:"#ffd38a",transparent:!0,side:vn,depthWrite:!1}),p=new Gt({color:"#efa65a",transparent:!0});function g(f,M){f.position.set(M.x,M.y,M.z)}function A(f,M,_){let w=new Set;for(let C of f){w.add(C.id);let R=i.get(C.id);if(!R){R=new ht,R.add(new _t(o,h));let v=new _t(a,u);v.position.z=.3,R.add(v),n.add(R),i.set(C.id,R)}g(R,C.position);let T=C.velocity,U=new I(T.x,T.y,T.z);U.lengthSq()&&R.quaternion.setFromUnitVectors(new I(0,0,-1),U.normalize())}for(let[C,R]of i)w.has(C)||(n.remove(R),i.delete(C));for(let C of M){if(r.has(C.id))continue;r.add(C.id);let R=new ht,T=d.clone(),U=new _t(c,T);if(R.add(U),!e)for(let v=0;v<6;v++){let b=new _t(l,p.clone());b.userData.direction=new I(Math.cos(v*Math.PI/3),.35+v%2*.3,Math.sin(v*Math.PI/3)),R.add(b)}g(R,C.position),n.add(R),s.set(C.id,{group:R,age:0}),t?.(C)}for(let[C,R]of s){R.age+=Math.max(0,_);let T=Math.min(1,R.age/.55);R.group.children[0].scale.setScalar(1+T*6),R.group.children[0].material.opacity=.85*(1-T);for(let U of R.group.children.slice(1))U.position.copy(U.userData.direction).multiplyScalar(T*1.4),U.material.opacity=1-T;if(T>=1){n.remove(R.group);for(let U of R.group.children)U.material.dispose();s.delete(C)}}}function m(){for(let f of i.values())n.remove(f);for(let f of s.values()){n.remove(f.group);for(let M of f.group.children)M.material.dispose()}i.clear(),s.clear(),r.clear();for(let f of[o,a,c,l,h,u,d,p])f.dispose()}return{update:A,dispose:m}}function sa({on:n,canvas:e,active:t,look:i,fire:s,clearInput:r}){let o=null,a=null;function c(){o=a=null,r()}n(e,"contextmenu",l=>l.preventDefault()),n(e,"mousedown",l=>{!t()||l.button!==0&&l.button!==2||(l.preventDefault(),e.focus({preventScroll:!0}),l.button===0?s(!0):o={x:l.clientX,y:l.clientY})}),n(window,"mousemove",l=>{if(!(!t()||!o)){if(!(l.buttons&2)){o=null;return}i(l.clientX-o.x,l.clientY-o.y),o.x=l.clientX,o.y=l.clientY}}),n(window,"mouseup",l=>{l.button===0&&s(!1),l.button===2&&(o=null)}),n(e,"pointerdown",l=>{!t()||l.pointerType==="mouse"||a||(l.preventDefault(),e.setPointerCapture(l.pointerId),a={id:l.pointerId,x:l.clientX,y:l.clientY})}),n(window,"pointermove",l=>{!t()||a?.id!==l.pointerId||(i((l.clientX-a.x)*2.2,(l.clientY-a.y)*2.2),a.x=l.clientX,a.y=l.clientY)});for(let l of["pointerup","pointercancel","lostpointercapture"])n(e,l,h=>{a?.id===h.pointerId&&(a=null)});return{clear:c}}function cd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new vt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ad(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let A=0;A<o[h].length;++A)p.push(o[h][A][d]);let g=ad(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ad(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new yt(o,t,i);return s!==void 0&&(c.gpuType=s),c}var Mr=new I;function dn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Mr.copy(e),Mr[i]=0,Mr.normalize();let l=.5*o/(o+a),h=1-Mr.angleTo(n)/c;return Math.sign(Mr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Ps=class extends hn{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new I,A=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*A,c.y-=Math.sign(c.y)*A,c.z-=Math.sign(c.z)*A,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=dn(g,c,"z","y",r,i),d[f+1]=1-dn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-dn(g,c,"z","y",r,i),d[f+1]=1-dn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-dn(g,c,"x","z",r,e),d[f+1]=dn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-dn(g,c,"x","z",r,e),d[f+1]=1-dn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-dn(g,c,"x","y",r,e),d[f+1]=1-dn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=dn(g,c,"x","y",r,e),d[f+1]=1-dn(g,c,"y","x",r,t);break}}};var ld={station:["2f4zG80EcgAzG5oF2f5mGpoF2f4zG80E2f5mGpoFP/0zG5oF7wPXGZoFKwIzG5oF7wMzGz0EtAUzG5oF7wPXGZoF7wMzGz0EAAczA5oFVwXXAZoFVwUzAz0EVwXXAZoFrgMzA5oFVwUzAz0E9wTXGWb61wYzG2b69wQzG8P7FgMzG2b69wTXGWb69wQzG8P71fszA2b6jf7XAWb6jf4zA8P7jf7XAWb6RQEzA2b6jf4zA8P7APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAGb6zfQzA2b6APQAADP7APQzAzP7APQAAM0EAPQzA80EzfQAAJoFzfQzA5oFzfQAGGb6zfQzG2b6APQAGDP7APQzGzP7APQAGM0EAPQzG80EzfQAGJoFzfQzG5oFAPQAGDP7APQzGzP7APQAGM0EAPQzG80EcgAzG5oFKwIzG5oF2f5mGpoF7wPXGZoFzfQzG5oFP/0zG5oFzfQAGJoFMwsAGJoFMwszG5oFtAUzG5oFAAwzA80EAAwAAM0EMwszA5oFMwsAAJoFAAwzAzP7AAwzA80EMwszA2b6MwszA5oFZgozAwD8RQEzA2b6jf4zA8P7ZgozAwAEAAczA5oFVwUzAz0EmvUzAwD81fszA2b6mvUzAwAEzfQzA2b6rgMzA5oFzfQzA5oFAPQzAzP7APQzA80EzfQAAGb6MwsAAGb6zfQzA2b6jf7XAWb61fszA2b6MwszA2b6RQEzA2b6AAwzAzP7AAwAADP7AAwzA80EAAwAAM0EAAwzG80EAAwAGM0EMwszG5oFMwsAGJoFAAwzGzP7AAwAGDP7AAwzG80EAAwAGM0EAAwzGzP7AAwzG80EMwszG2b6MwszG5oF1wYzG2b6tAUzG5oF9wQzG8P77wMzGz0EFgMzG2b6KwIzG5oFzfQzG2b6cgAzG5oF2f4zG80EP/0zG5oFzfQzG5oFAPQzGzP7APQzG80EMwszG2b6MwsAGGb6AAwzGzP7AAwAGDP7AAwAGM0EAAwAGDP7MwsAGJoFMwsAGGb6ZgoAGAAEzfQAGJoFZgoAGAD8mvUAGAAEzfQAGGb6mvUAGAD8APQAGM0EAPQAGDP7zfQAGGb6MwsAGGb6zfQzG2b69wTXGWb6FgMzG2b6MwszG2b61wYzG2b6AAwAAM0EAAwAADP7MwsAAJoFMwsAAGb6zfQAAJoFzfQAAGb6APQAAM0EAPQAADP7MwszA2b6MwsAAGb6AAwzAzP7AAwAADP7AAczA5oFMwszA5oFVwXXAZoFMwsAAJoFzfQAAJoFzfQzA5oFrgMzA5oFmvUzAwD8mvUAGAD8mvUzAwAEmvUAGAAEZgoAGAD8ZgozAwD8ZgoAGAAEZgozAwAEmvUzAwD8ZgozAwD8mvUAGAD8ZgoAGAD8ZgoAGAD8ZgoAGAAEmvUAGAD8mvUAGAAEZgozAwAEmvUzAwAEZgoAGAAEmvUAGAAEOQQuBgAEOQTrBwAEnAQuBoEEnATrB4EEsQYuBoEEnAQuBoEEsQbrB4EEnATrB4EEEwcuBgAEOQQuBgAEsQYuBoEEnAQuBoEEEwfrBwAEEwcuBgAEsQbrB4EEsQYuBoEEEwfrBwAEsQbrB4EEOQTrBwAEnATrB4EE+ffECAAE+feACgAEW/jECIEEW/iACoEEcPrECIEEW/jECIEEcPqACoEEW/iACoEE0vrECAAE+ffECAAEcPrECIEEW/jECIEE0vqACgAE0vrECAAEcPqACoEEcPrECIEE0vqACgAEcPqACoEE+feACgAEW/iACoEE5PlOCwAE5PkKDQAERvpOC4EERvoKDYEEW/xOC4EERvpOC4EEW/wKDYEERvoKDYEEvfxOCwAE5PlOCwAEW/xOC4EERvpOC4EEvfwKDQAEvfxOCwAEW/wKDYEEW/xOC4EEvfwKDQAEW/wKDYEE5PkKDQAERvoKDYEErAEIFAAErAHFFQAEDgIIFIEEDgLFFYEEIwQIFIEEDgIIFIEEIwTFFYEEDgLFFYEEhQQIFAAErAEIFAAEIwQIFIEEDgIIFIEEhQTFFQAEhQQIFAAEIwTFFYEEIwQIFIEEhQTFFQAEIwTFFYEErAHFFQAEDgLFFYEEaP6UBwD8aP5RCQD8Bv6UB3/7Bv5RCX/78fuUB3/7Bv6UB3/78ftRCX/7Bv5RCX/7j/uUBwD8aP6UBwD88fuUB3/7Bv6UB3/7j/tRCQD8j/uUBwD88ftRCX/78fuUB3/7j/tRCQD88ftRCX/7aP5RCQD8Bv5RCX/7ffwkCgD8ffzgCwD8G/wkCn/7G/zgC3/7BfokCn/7G/wkCn/7BfrgC3/7G/zgC3/7o/kkCgD8ffwkCgD8BfokCn/7G/wkCn/7o/ngCwD8o/kkCgD8BfrgC3/7BfokCn/7o/ngCwD8BfrgC3/7ffzgCwD8G/zgC3/7ega4EQD8egZ1EwD8GAa4EX/7GAZ1E3/7AwS4EX/7GAa4EX/7AwR1E3/7GAZ1E3/7oQO4EQD8ega4EQD8AwS4EX/7GAa4EX/7oQN1EwD8oQO4EQD8AwR1E3/7AwS4EX/7oQN1EwD8AwR1E3/7egZ1EwD8GAZ1E3/7ZgrPCIwAZgqLCowA5wrPCCoA5wqLCioA5wrPCBT+5wrPCCoA5wqLChT+5wqLCioAZgrPCLL9ZgrPCIwA5wrPCBT+5wrPCCoAZgqLCrL9ZgrPCLL95wqLChT+5wrPCBT+ZgqLCrL95wqLChT+ZgqLCowA5wqLCioAmvXWEfL+mvWTE/L+GfXWEVT/GfWTE1T/GfXWEWkBGfXWEVT/GfWTE2kBGfWTE1T/mvXWEcsBmvXWEfL+GfXWEWkBGfXWEVT/mvWTE8sBmvXWEcsBGfWTE2kBGfXWEWkBmvWTE8sBGfWTE2kBmvWTE/L+GfWTE1T/","AACCWoJaVtVVVVVVAACCWoJaAACCWoJaAACCWoJaqipVVVVVAACCWoJaKT2CT4JPAACCWoJa18KCT4JPAACCWoJaAACCWoJa0b9OTk5OAACCWoJaAACCWoJaAACCWoJaL0BOTk5OAACCWoJaAACCWn6losWMUHSvAACCWn6lXjqMUHSvAACCWn6lAACCWn6lqipVVauqAACCWn6lAACCWn6lAACCWn6lVtVVVauqAACCWn6lv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2Bc8AAL+JBc8AAL+Jv4kAAAXPv4kAAAXPv4kAAPswv4kAAPswBc8AAEF2Bc8AAEF2v4kAAAXPv4kAAAXPv4kAAPswv4kAAPswAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/Bc8AAEF2AAAAAP9/Bc8AAEF2+zAAAEF2+zAAAEF2AAAAAP9/QXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAQXYAAAXPQXYAAAXPQXYAAPswQXYAAPswQXYAAPswQXYAAPsw+zAAAEF2+zAAAEF2QXYAAAXPQXYAAAXPQXYAAPswQXYAAPswAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAABc8AAL+J+zAAAL+JBc8AAL+JAAAAAAGAAAAAAAGA+zAAAL+JAAAAAAGAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAAAAABgAAA+zAAAL+J+zAAAL+JQXYAAAXPQXYAAAXPAAAAAP9/+zAAAEF2AAAAAP9/+zAAAEF2Bc8AAEF2Bc8AAEF2AAAAAP9/AYAAAAAAAYAAAAAAAYAAAAAAAYAAAAAA/38AAAAA/38AAAAA/38AAAAA/38AAAAAAAAAAAGAAAAAAAGAAAAAAAGAAAAAAAGAAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAAAAAAP9/AAAAAP9/AAAAAP9/AAAAAP9/GJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAGJoAAHNNGJoAAHNNIMcAAKpyIMcAAKpy4DgAAKpyIMcAAKpy4DgAAKpyIMcAAKpyAAABgAAAAAABgAAAAAABgAAAAAABgAAA6GUAAHNN6GUAAHNN4DgAAKpy4DgAAKpyAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA6GUAAI2y6GUAAI2y4DgAAFaN4DgAAFaNIMcAAFaN4DgAAFaNIMcAAFaN4DgAAFaNAAABgAAAAAABgAAAAAABgAAAAAABgAAAGJoAAI2yGJoAAI2yIMcAAFaNIMcAAFaNAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAc00AAOhlc00AAOhlqnIAAOA4qnIAAOA4qnIAACDHqnIAAOA4qnIAACDHqnIAAOA4AAABgAAAAAABgAAAAAABgAAAAAABgAAAc00AABiac00AABiaqnIAACDHqnIAACDHAAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAAjbIAABiajbIAABiaVo0AACDHVo0AACDHVo0AAOA4Vo0AACDHVo0AAOA4Vo0AACDHAAABgAAAAAABgAAAAAABgAAAAAABgAAAjbIAAOhljbIAAOhlVo0AAOA4Vo0AAOA4AAD/fwAAAAD/fwAAAAD/fwAAAAD/fwAA","OD1VOD1VNzxUOD1VNzxUOD1VNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzNjtUOD1VOD1VOD1VNjtUOD1VHSAzHB8yHSAzHB8yHSAzHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzGh4wHSAzNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VNzxUNjtUOD1VOD1VNDlQNDlQOD1VOD1VHSAzGh4wHSAzGh4wHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzHSAzGh4wGh4wHSAzHB8yHSAzHSAzHSAzHSAzGh4wHSAzGh4wOD1VNDlQOD1VNDlQOD1VNDlQOD1VNDlQOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VOD1VNDlQOD1VNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQNDlQOD1VNjtUOD1VOD1VOD1VGh4wGh4wGh4wGh4wGh4wGh4wGh4wGh4wHSAzGh4wHSAzGh4wHSAzHSAzHB8yGh4wGh4wHSAzHSAzrwsM6x8NrwsM6x8N6x8NrwsM6x8NrwsMrwsMrwsM6x8N6x8N6x8N6x8N6x8N6x8NrwsMrwsM6x8N6x8NuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsNuA4M3hsNuA4M3hsNuA4MuA4M3hsN3hsNuA4MuA4MuA4MuA4M3hsNuA4M3hsNuA4M3hsN3hsN3hsN3hsN","AgABAAAABQAEAAMACAAHAAYACwAKAAkADgANAAwAEQAQAA8AFAATABIAFwAWABUAGgAZABgAHQAcABsAIAAfAB4AHwAgACEAJAAjACIAIwAkACUAKAAnACYAJwAoACkALAArACoAKwAsAC0AMAAvAC4ALwAwADEANAAzADIAMwA0ADUAOAA3ADYANwA4ADkAOgA5ADgAOgA4ADsAOQA6ADwAPQA5ADwAOQA9AD4AOQA+AD8AQgBBAEAAQQBCAEMARgBFAEQARQBGAEcARwBGAEgASABGAEkASABJAEoASwBHAEgARwBLAEwATABLAE0ASABKAE4ATgBKAE8ATQBLAFAATgBPAFEATgBRAFAATQBQAFIAUgBQAFMAUwBQAFEAUwBRAFQAUwBUAFUAWABXAFYAVwBYAFkAWQBYAFoAWQBbAFcAWwBZAFwAXwBeAF0AXgBfAGAAYwBiAGEAYgBjAGQAZwBmAGUAZgBnAGgAawBqAGkAagBrAGwAbABrAG0AbABtAG4AbgBtAG8AbgBvAHAAcABvAHEAcABxAHIAcgBxAHMAcgBzAHQAdABzAHUAdQBzAHYAdgBzAHcAdwBzAHgAdwB4AHkAfAB7AHoAewB8AH0AgAB/AH4AfwCAAIEAgQCAAIIAggCAAIMAhACBAIIAggCDAIUAgQCEAIYAhQCDAIcAhgCEAIcAhgCHAIMAhgCDAIgAhgCIAIkAjACLAIoAiwCMAI0AjQCMAI4AjQCPAIsAjwCNAJAAkwCSAJEAkgCTAJQAlACTAJUAlACVAJYAlgCVAJcAlgCXAJgAmwCaAJkAmgCbAJwAnwCeAJ0AnwCgAJ4AoACfAKEAnwCiAKEAogCfAKMApgClAKQApQCmAKcAqgCpAKgAqQCqAKsArgCtAKwArQCuAK8AsgCxALAAsQCyALMAtgC1ALQAtQC2ALcAugC5ALgAuQC6ALsAvgC9ALwAvQC+AL8AwgDBAMAAwQDCAMMAxgDFAMQAxQDGAMcAygDJAMgAyQDKAMsAzgDNAMwAzQDOAM8A0gDRANAA0QDSANMA1gDVANQA1QDWANcA2gDZANgA2QDaANsA3gDdANwA3QDeAN8A4gDhAOAA4QDiAOMA5gDlAOQA5QDmAOcA6gDpAOgA6QDqAOsA7gDtAOwA7QDuAO8A8gDxAPAA8QDyAPMA9gD1APQA9QD2APcA+gD5APgA+QD6APsA/gD9APwA/QD+AP8AAgEBAQABAQECAQMBBgEFAQQBBQEGAQcBCgEJAQgBCQEKAQsBDgENAQwBDQEOAQ8BEgERARABEQESARMBFgEVARQBFQEWARcBGgEZARgBGQEaARsBHgEdARwBHQEeAR8BIgEhASABIQEiASMBJgElASQBJQEmAScBKgEpASgBKQEqASsBLgEtASwBLQEuAS8BMgExATABMQEyATMBNgE1ATQBNQE2ATcBOgE5ATgBOQE6ATsBPgE9ATwBPQE+AT8BQgFBAUABQQFCAUMBRgFFAUQBRQFGAUcBSgFJAUgBSQFKAUsBTgFNAUwBTQFOAU8BUgFRAVABUQFSAVMBVgFVAVQBVQFWAVcBWgFZAVgBWQFaAVsBXgFdAVwBXQFeAV8BYgFhAWABYQFiAWMBZgFlAWQBZQFmAWcBagFpAWgBaQFqAWsB"]};var oa={sky:"#cadcde",fog:"#c8d5ca",floor:"#a69780",wall:"#c7a27d",inlay:"#87765c",trim:"#efe0be",edge:"#ab7e62",cover:"#a48762",door:"#50726b",cold:"#465750",bright:"#ffe3b6",landmark:"#477b70"},aa={sky:"#c1d3de",fog:"#b5c5c5",floor:"#8f9b9c",wall:"#849c9d",inlay:"#405c67",trim:"#d6bf89",edge:"#687f89",cover:"#93896b",door:"#4e6b77",cold:"#453f35",bright:"#f0edda",landmark:"#b07c40"},xl={sky:"#d2dace",fog:"#c9d3bc",floor:"#90967d",wall:"#abb191",inlay:"#747c62",trim:"#e0d6b2",edge:"#8c9c76",cover:"#827a58",door:"#686f53",cold:"#4a594d",bright:"#fff4cc",landmark:"#955a40"},w_=[oa,aa,xl];function T_(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ss(i);return s.colorSpace=At,s.wrapS=s.wrapT=rr,s.anisotropy=4,s}function ra(n,e){return T_(256,256,t=>{t.fillStyle=n[e],t.fillRect(0,0,256,256);let i=62431,s=()=>(i=i*1664525+1013904223>>>0,i/4294967296),r="rgba(40,44,38,.32)",o="rgba(255,245,219,.27)";if(e==="door"||e==="wall"&&n===aa){for(let a=0;a<256;a+=16){let c=t.createLinearGradient(a,0,a+16,0);c.addColorStop(0,r),c.addColorStop(.27,o),c.addColorStop(.56,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(a,0,16,256)}t.fillStyle=n.inlay,t.fillRect(0,0,256,8),t.fillRect(0,244,256,12),e==="door"&&(t.fillStyle=n.trim,t.fillRect(18,121,220,2),t.fillRect(18,156,220,2),t.strokeStyle=n.inlay,t.lineWidth=8,t.strokeRect(15,15,226,226))}else{let a=e==="cover"?32:e==="wall"?42:64;for(let c=0;c<256;c+=a){let l=Math.floor(c/a)%2?32:0;if(t.fillStyle=r,t.fillRect(0,c,256,3),t.fillStyle=o,t.fillRect(0,c+3,256,2),e!=="cover")for(let h=l;h<256;h+=64)t.fillStyle=r,t.fillRect(h,c,2,a),t.fillStyle=o,t.fillRect(h+2,c+3,1,a-4)}if(e==="cover"){t.fillStyle=n.inlay,t.fillRect(16,0,13,256),t.fillRect(227,0,13,256);for(let c of[20,231])for(let l of[19,79,150,228])t.fillStyle=o,t.fillRect(c,l,5,5)}}for(let a=0;a<860;a++){let c=s()*256,l=s()*256;t.fillStyle=s()>.58?"rgba(255,250,221,.075)":"rgba(40,34,28,.11)",t.fillRect(c,l,(1+s()*2)*(e==="cover"?3:1),1+s()*2)}if(n===xl&&e==="wall"){let a=t.createLinearGradient(0,256,0,158);a.addColorStop(0,"#54684650"),a.addColorStop(1,"#54684600"),t.fillStyle=a,t.fillRect(0,158,256,98)}})}function Ht(n,e={}){return new xi({color:n,roughness:.84,...e})}function Je(n,e,t,i,s,r){return new hn(n,e,t).translate(i,s,r)}function Jt(n,e,t,i=!0,s=!0){let r=new _t(n,e);return r.castShadow=i,r.receiveShadow=s,t.add(r),r}function br(n){if(n.length===1)return n[0];let t=n.some(s=>!s.index)?n.map(s=>s.index?s.toNonIndexed():s):n,i=cd(t);return new Set([...n,...t]).forEach(s=>s.dispose()),i}function R_(n){let e=new Map;return{add(t,i){e.has(i)||e.set(i,[]),e.get(i).push(t)},finish(){for(let[t,i]of e)Jt(br(i),t,n)}}}function C_(n,e,t){let i=n.getAttribute("uv");for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*e,i.getY(s)*t);return n}var _l=new Map;function P_(n){if(!_l.has(n)){let[r,o,a,c]=ld[n].map(l=>Uint8Array.from(atob(l),h=>h.charCodeAt(0)));_l.set(n,{positions:Float32Array.from(new Int16Array(r.buffer),l=>l/4096),normals:new Int16Array(o.buffer),colors:a,indices:new Uint16Array(c.buffer)})}let{positions:e,normals:t,colors:i,indices:s}=_l.get(n);return new vt().setAttribute("position",new yt(e.slice(),3)).setAttribute("normal",new yt(t.slice(),3,!0)).setAttribute("color",new yt(i,3,!0)).setIndex(new yt(s,1))}function I_(n,e,t){return n.w>=n.d?[n.x+e,n.z+t*Math.sign(-n.z||1)]:[n.x+t*Math.sign(-n.x||1),n.z+e]}function D_(n,e,t,i,s,r){let o=e.w>=e.d,a=Math.max(e.w,e.d),c=Math.min(e.w,e.d),l=(h,u,d,p,g,A,m)=>{let[f,M]=I_(e,h,d);n.add(Je(o?p:A,g,o?A:p,f,u,M),m)};if(!s){l(0,e.h-.07,0,a+.035,.08,c+.03,i.trim),l(0,.08,0,a+.035,.09,c+.03,i.inlay);for(let h of[-a*.34,a*.34])l(h,e.h*.51,c*.49,.09,e.h*.8,.042,i.inlay);return}if(l(0,e.h-.07,0,a+.045,.13,c+.045,i.trim),l(0,.29,0,a,.52,c+.04,i.inlay),l(0,.58,0,a,.07,c+.06,i.trim),t===aa)for(let h=-a/2+.14;h<a/2;h+=5)l(h,(e.h+.6)/2,c*.5,.13,e.h-.6,.07,i.inlay),l(h,e.h-.34,c*.54,.42,.14,.065,i.landmark);else if(t===oa)for(let h=-a/2+1.35;h<a/2-.75;h+=3.2){l(h,e.h-1.05,c*.5,.91,1.16,.064,i.trim),l(h,e.h-1.05,c*.54,.71,.9,.06,i.inlay);for(let u=0;u<4;u++)l(h,e.h-.75-u*.18,c*.57,.66,.033,.045,i.edge);l(h,e.h-1.63,c*.55,1.02,.08,.14,i.trim)}else if(r)for(let h=-a/2+.55;h<a/2;h+=1.55)l(h,e.h+.25,0,.62,.5,c,i.edge)}function L_(n,e){for(let s=0;s<7;s++){let r=-19+s*6.25,o=[7,10,8,13,10,8,7][s];n.add(Je(5.95,o,4,r,o/2,-21.3),e.edge),n.add(Je(6.2,.25,4.1,r,o,-21.3),e.trim);for(let a of[-1.6,0,1.6])s===3&&a===0||(n.add(Je(.72,1.23,.04,r+a,o-1.4,-19.29),e.inlay),n.add(Je(1.04,.12,.15,r+a,o-2.04,-19.22),e.trim))}let t=new Nn(.72,.72,.15,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.25),i=new Nn(.6,.6,.16,24).rotateX(Math.PI/2).translate(-.25,11.25,-19.19);n.add(t,e.inlay),n.add(i,e.trim),n.add(Je(.43,.075,.04,-.09,11.25,-19.08),e.inlay),n.add(Je(.075,.33,.04,-.25,11.4,-19.08),e.inlay)}function N_(n,e){for(let t of[-14,0,14]){let i=t===0,s=i?9.4:7.4;n.add(Je(13.45,s,5,t,s/2,-22),e.edge),n.add(Je(13.65,.3,5.2,t,s,-22),e.inlay),n.add(Je(11,.34,.08,t,s-1.15,-19.46),e.landmark);for(let r of[-4,-2,0,2,4])n.add(Je(1.33,.76,.1,t+r,s-.57,-19.45),e.trim);if(i){n.add(Je(9.8,1.45,2.6,t,s+.69,-22),e.edge),n.add(Je(10.05,.2,2.85,t,s+1.46,-22),e.inlay);for(let r of[-3.5,3.5])n.add(new Nn(.32,.43,2,12).translate(t+r,s+2.1,-22),e.inlay)}}}function U_(n,e){n.add(Je(38.5,6.7,4,0,3.35,-23),e.edge),n.add(Je(38.5,.17,4.1,0,6.62,-23),e.trim);for(let t=-17.8;t<18.8;t+=1.65)n.add(Je(.76,.59,1.18,t,6.96,-21.5),e.edge);for(let t of[-12.7,0,12.7]){let i=t===0?11.5:9;n.add(new Nn(2.35,2.58,i,14).translate(t,i/2,-22),e.edge),n.add(new Nn(2.5,2.43,.25,14).translate(t,i-.48,-22),e.trim),n.add(new ti(2.65,2.8,14).translate(t,i+1.33,-22),e.landmark),n.add(Je(.53,1.18,.075,t,i-1.55,-19.62),e.inlay),n.add(Je(.83,.11,.16,t,i-2.16,-19.55),e.trim)}}function F_(n,e,t,i){t===oa&&L_(n,i),t===aa&&N_(n,i),t===xl&&U_(n,i);for(let s of[-1,1]){let r=P_("station").scale(.95,1.45,.95).translate(s*2.5,4.92,-18.3);Jt(r,Ht(t.trim,{vertexColors:!0}),e,!1)}}function ca(n,e,t,i){let s=w_[i-1]??oa,r=R_(n),o=Object.fromEntries(["trim","inlay","edge","landmark"].map(T=>[T,Ht(s[T])])),a=ra(s,"floor");a.repeat.set(10,10),Jt(new ur(38,38).rotateX(-Math.PI/2),Ht("#fff8ed",{map:a}),n,!1);let c=Ht(s.landmark);for(let T of[-1,1])for(let U=12;U>=-12;U-=2.4)r.add(Je(.086,.009,1.5,T*1.15,.006,U),c);let l=Ht("#ffffff",{map:ra(s,"wall")}),h=Ht("#ffffff",{map:ra(s,"cover")}),u=Ht("#ffffff"),d=e.map((T,U)=>{let v=T.h>=1.5,b=Math.max(1,Math.round(Math.max(T.w,T.d)/3.7)),F=C_(Je(T.w,T.h,T.d,T.x,T.h*.5,T.z),b,1);r.add(F,v?l:h),D_(r,T,s,o,v,U<4);let V=Jt(Je(T.w,T.h,T.d,T.x,T.h*.5,T.z),u,n,!1,!1);return V.visible=!1,V}),p=Ht("#ffffff",{map:ra(s,"door")}),g=t.map(T=>{let U=new ht;U.position.set(T.x,T.h/2,T.z),n.add(U);let v=Jt(new hn(T.w,T.h,T.d),p,U),b=T.w>T.d,F=[Je(T.w+.035,.11,T.d+.035,0,-T.h/2+.12,0),Je(T.w+.035,.07,T.d+.035,0,T.h/2-.15,0)];for(let ie of[-1,1])F.push(Je(b?.08:T.w+.03,T.h-.18,b?T.d+.03:.08,b?ie*(T.w/2-.16):0,0,b?0:ie*(T.d/2-.16)));Jt(br(F),o.trim,U);let V=Jt(Je(b?.24:T.w+.04,.075,b?T.d+.04:.24,0,.8,0),new Gt({color:"#e6ad65"}),U,!1,!1);return{d:T,mesh:v,group:U,status:V}}),A=new ht;A.position.set(0,0,-13),n.add(A);let m=Ht("#435c60",{metalness:.38,roughness:.58}),f=[Je(1.48,.09,1.06,0,.05,0),new Ps(1.3,.62,.88,2,.055).translate(0,.37,0),Je(1.15,.065,.72,0,.74,0),Je(.12,.13,1,0,.12,0)];Jt(br(f),m,A);let M=Jt(new Ps(.67,.18,.075,2,.02).translate(0,.43,.46),Ht("#d2a35f",{metalness:.4}),A);M.name="device-case";let _=Jt(Je(.66,.076,.43,0,.802,0),Ht("#213238",{metalness:.36}),A);_.rotation.x=.025;let w=Jt(Je(.54,.024,.36,0,.85,.015),new Gt({color:"#edb663"}),A,!1,!1),C=Jt(new Es(.044,10,6).translate(.31,.56,.457),new Gt({color:"#edb663"}),A,!1,!1),R=Jt(new Yo(1.17,36).rotateX(-Math.PI/2),Ht(s.trim,{transparent:!0,opacity:.22,depthWrite:!1}),A,!1,!1);return R.position.y=.012,F_(r,n,s,o),r.finish(),{theme:s,wallRays:d,doorViews:g,station:A,strip:w,lamp:C}}function xe(n,e,t,i,s=0,r=0,o=0){return new Ps(n,e,t,1,i).translate(s,r,o)}function ct(n,e,t,i,s,r="z",o=12){let a=new Nn(n,n,e,o);return r==="z"&&a.rotateX(Math.PI/2),r==="x"&&a.rotateZ(Math.PI/2),a.translate(t,i,s)}function Is(n,e,t){let i=t.map(([s,r])=>{let o=new ke(r),a=new Float32Array(s.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return s.setAttribute("color",new yt(a,3)),s});return Jt(br(i),e,n,!1,!1)}function Ds(n,e){let t="#38434a",i="#788287",s="#abb3ae",r="#282d30",o=["#d8904a","#b88560","#ccaa65"][e%3],a=Ht(["#d39864","#b99070","#d2aa71"][e%3],{vertexColors:!0,metalness:.32,roughness:.53,emissive:"#000000"}),c=Ht("#ffffff",{vertexColors:!0,metalness:.3,roughness:.61}),l=[[xe(.63,.47,.36,.063,0,1.17,-.013),"#ded9c6"],[xe(.42,.21,.28,.029,0,.79,-.02),"#8a989c"],[xe(.45,.33,.37,.054,0,1.68,-.003),"#d8d4c2"],[xe(.34,.08,.28,.024,0,1.864,-.018),"#e7dbbd"],[xe(.43,.19,.08,.034,0,1.2,.176),"#bebcb3"]],h=[[xe(.41,.21,.08,.038,0,1.69,.172),t],[xe(.33,.132,.037,.021,0,1.7,.214),"#263436"],[xe(.25,.069,.075,.019,0,1.574,.166),i],[ct(.108,.108,0,1.47,-.02,"y"),i],[xe(.36,.23,.33,.045,0,.92,0),r],[xe(.32,.29,.15,.035,0,1.27,-.22),t],[xe(.27,.055,.05,.012,0,1.02,.174),t],[xe(.18,.072,.036,.013,0,1.2,.223),"#252f31"]];for(let g of[-1,1]){l.push([xe(.057,.11,.3,.014,g*.219,1.756,-.01),"#8b9294"]),h.push([ct(.037,.026,g*.223,1.69,.171,"x"),i]),h.push([ct(.018,.016,g*.257,1.24,.183),"#c2c2b5"]);for(let A=0;A<4;A++)h.push([Je(.084,.012,.046,g*.103,1.18+A*.032,-.298),"#151f22"])}Is(n,a,l),Is(n,c,h);let u=Jt(br([xe(.162,.057,.025,.012,0,1.7,.238),ct(.029,.019,-.118,1.7,.235),ct(.029,.019,.118,1.7,.235),xe(.1,.023,.017,.006,0,1.2,.247)]),new Gt({color:"#ffc277"}),n,!1,!1),d=[],p=[];for(let g of[-1,1]){let A=new ht;A.position.set(g*.214,.74,0),n.add(A),Is(A,c,[[xe(.196,.27,.27,.031,0,-.11,-.039),s],[ct(.093,.235,0,-.31,.023,"x"),t],[ct(.058,.022,g*.123,-.31,.023,"x"),i],[ct(.039,.26,g*.041,-.448,-.065,"y"),i],[xe(.15,.26,.156,.026,0,-.455,.04),t],[xe(.165,.2,.086,.024,0,-.435,.133),o],[xe(.21,.135,.37,.028,0,-.639,.047),i],[xe(.23,.056,.385,.016,0,-.711,.05),r],[xe(.167,.078,.125,.015,0,-.628,.207),s]]),d.push(A);let m=new ht;n.add(m),m.position.set(g*.393,1.4,-.01),m.rotation.z=g*.1,Is(m,c,[[ct(.1,.16,0,-.04,-.017,"x"),r],[xe(.215,.157,.281,.04,g*.032,-.007,.014),s],[xe(.068,.103,.176,.016,g*.124,-.02,.027),o],[xe(.128,.2,.149,.022,0,-.17,-.013),t],[ct(.068,.171,0,-.26,.017,"x"),i],[xe(.167,.206,.205,.034,0,-.373,.047),t],[xe(.124,.143,.048,.017,0,-.38,.16),i],[xe(.127,.108,.136,.02,0,-.514,.065),r]]),p.push(m)}return{legs:d,arms:p,chassis:a,visor:u}}function O_(n,e){let t="#49575a",i="#70766b",s="#303936",r=Ht("#ffffff",{vertexColors:!0,roughness:.82}),o=[[xe(.16,.15,.48,.049,.056,-.22,.24).rotateZ(.21),t],[xe(.17,.153,.092,.027,.046,-.2,.095),i],[xe(.157,.167,.179,.048,.031,-.137,.056),s],[xe(.105,.064,.102,.022,-.056,-.104,.051).rotateZ(.13),"#4d5b55"],[xe(.087,.031,.094,.012,.039,-.116,-.045),"#495853"],[xe(.093,.026,.083,.011,.04,-.152,-.043),"#495853"]];if((e==="carbine"||e==="sniper"||e==="bazooka")&&o.push([xe(.19,.17,.4,.049,-.102,-.214,-.24).rotateZ(-.13),t],[xe(.175,.117,.111,.026,-.055,-.145,-.447),i],[xe(.162,.096,.162,.035,-.024,-.095,-.48),s],[xe(.048,.074,.131,.021,-.093,-.056,-.49),"#495853"]),e==="knife")for(let[a]of o)a.translate(0,.066,.037);Is(n,r,o)}function la(n,e){let t="#647277",i="#434e53",s="#283237",r="#797f72",o="#a89065",a="#cfb581",c=Ht("#ffffff",{vertexColors:!0,metalness:.37,roughness:.44}),l=[],h;if(e==="knife"){let u=new gr;u.moveTo(-.07,.085),u.lineTo(.063,.085),u.lineTo(.06,-.22),u.quadraticCurveTo(.046,-.48,-.055,-.58),u.lineTo(-.07,-.3),u.closePath();let d=new Qo(u,{depth:.016,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:8}).rotateX(Math.PI/2).translate(0,.052,-.14);l.push([d,"#bfcbc9"],[xe(.058,.011,.32,.005,.015,.055,-.307),"#8f9d9e"],[xe(.185,.054,.067,.014,0,.04,-.081),i],[xe(.112,.088,.304,.029,0,.032,.104),s]);for(let p=0;p<6;p++)l.push([xe(.121,.095,.025,.008,0,.032,-.006+p*.042),i]);h={x:0,y:.052,z:-.72}}else if(e==="bazooka"){l.push([ct(.102,.64,0,.027,-.28,"z",18),r],[ct(.113,.052,0,.027,-.588,"z",18),i],[ct(.108,.071,0,.027,.058,"z",18),i],[ct(.081,.013,0,.027,-.619),s],[xe(.181,.088,.198,.019,0,-.095,-.22),s],[xe(.206,.06,.324,.017,0,.138,-.24),t],[xe(.096,.079,.121,.016,0,.181,-.1),i],[xe(.057,.026,.012,.006,0,.184,-.034),"#587c77"]);for(let u of[-.519,-.42,-.04])l.push([ct(.106,.026,0,.027,u,"z",18),u===-.42?o:t]);h={x:0,y:.027,z:-.658}}else if(e==="pistol"){l.push([xe(.131,.1,.41,.023,0,.073,-.183),t],[xe(.119,.057,.355,.015,0,.119,-.16),i],[xe(.119,.068,.365,.014,0,.008,-.135),s],[xe(.107,.181,.115,.024,0,-.079,.036).rotateX(-.14),i],[xe(.123,.035,.141,.011,0,-.167,.049),s],[ct(.038,.027,0,.066,-.393),i],[ct(.023,.019,0,.066,-.412),s],[xe(.11,.023,.115,.006,.016,.121,-.17),"#939b9a"],[xe(.095,.028,.043,.006,0,.149,.004),s],[xe(.047,.033,.04,.006,0,.149,-.35),s],[xe(.027,.01,.026,.004,0,.168,-.348),a],[xe(.081,.031,.092,.006,0,-.04,-.183),i]);for(let u=0;u<6;u++){let d=-.017-u*.024;l.push([Je(.132,.056,.009,0,.082,d).rotateX(.016),s])}h={x:0,y:.066,z:-.438}}else{let u=e==="sniper",d=u?-.855:-.708;l.push([xe(.154,.138,.409,.023,0,.067,-.109),t],[xe(.125,.092,.242,.019,0,.024,.204),i],[xe(.154,.065,.231,.017,0,.084,.264),s],[xe(.151,.172,.143,.019,0,-.085,-.215).rotateX(-.09),s],[xe(.131,.027,.324,.008,0,.147,-.202),s],[xe(.149,.113,.318,.015,0,.072,-.464),u?r:i],[ct(.026,u?.26:.13,0,.071,d+.083),t],[ct(.039,.067,0,.071,d),i],[ct(.025,.009,0,.071,d-.037),s]);for(let p=0;p<7;p++)l.push([xe(.141,.015,.025,.003,0,.161,-.079-p*.039),i]),l.push([Je(.152,.035,.014,0,.064,-.338-p*.042),s]);u?l.push([xe(.064,.071,.227,.012,0,.172,-.25),i],[ct(.051,.251,0,.233,-.218),s],[ct(.069,.103,0,.233,-.382),i],[ct(.061,.072,0,.233,-.059),i],[ct(.044,.008,0,.233,-.02),"#497d79"],[ct(.041,.034,0,.293,-.2,"y"),t]):l.push([xe(.069,.052,.088,.012,0,.183,-.089),s],[xe(.061,.067,.054,.01,0,.169,-.57),i],[xe(.02,.016,.025,.004,0,.21,-.57),a],[xe(.024,.059,.114,.006,.081,.071,-.081),o]),h={x:0,y:.071,z:d-.067}}return O_(n,e),Is(n,c,l),h}function hd(n,e=()=>{}){let t=["localhost","127.0.0.1"].includes(location.hostname),i=t?"ws://127.0.0.1:8791/rooms":document.querySelector("meta[name=coop-endpoint]")?.content,s=document.createElement("dialog");s.style.cssText="width:min(960px,96vw);max-height:96dvh;background:#173a32;color:#fff6da;padding:12px;overflow:auto",s.innerHTML='<h2>\u5169\u4EBA\u5408\u4F5C \xB7 \u820A\u57CE\u8857\u5340</h2><p role="status"></p><div class="room-controls"><label>\u540D\u7A31 <input maxlength="20" value="\u73A9\u5BB6"></label> <button data-create>\u5EFA\u7ACB\u623F\u9593</button> <label>\u623F\u9593\u78BC <input maxlength="8"></label> <button data-join>\u52A0\u5165</button> <button data-resume hidden>\u91CD\u65B0\u9023\u7DDA</button></div><button data-match-resume hidden>\u7E7C\u7E8C\u64CD\u4F5C</button><button data-ready hidden>\u6E96\u5099\uFF0F\u518D\u6230</button> <button data-exit>\u96E2\u958B\u623F\u9593</button><div data-field hidden><canvas tabindex="0" style="display:block;width:100%;height:min(52vh,450px);touch-action:none"></canvas><p>WASD \u79FB\u52D5 \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u2190\uFF0F\u2192 \u8F49\u5411 \xB7 Q \u7784\u6E96 \xB7 R \u63DB\u5F48 \xB7 E \u958B\u9580\uFF0F\u9577\u6309\u62C6\u89E3 \xB7 F \u67E5\u5E33</p><button data-buy-rocket>\u8CFC\u8CB7\u706B\u7BAD\u7B52 \xB7 350</button><button data-reload>\u63DB\u5F48 R</button><button data-equip>\u5207\u63DB\u6B66\u5668</button><div data-offer hidden></div></div>',s.querySelector("[data-buy-rocket]").title=Ws(),s.querySelector("[data-buy-rocket]").insertAdjacentText("afterend"," "+Ws()+" "),document.body.append(s),s.showModal();let r=x=>s.querySelector(x),o=r("[role=status]"),a=r("canvas"),c=s.querySelectorAll("input"),l=new AbortController,h=(x,y,N)=>x.addEventListener(y,N,{signal:l.signal}),u,d,p,g,A=0,m,f,M,_,w,C,R=!1,T=!1,U=0,v=0,b=0,F=null,V=!1,ie=!1,D=new Set,B=new Map,G=x=>{u?.readyState===1&&u.send(JSON.stringify({v:3,seq:++A,...x}))},K,Z=()=>{D.clear(),R=T=!1,U=0,ne()},X=()=>K?K.clear():Z(),te=()=>m?.phase==="playing"&&!V&&r("[data-offer]").hidden&&m.players.some(x=>x.id===d&&x.hp);function ne(){let x=te();G({type:"input",f:x?Number(D.has("KeyW"))-Number(D.has("KeyS")):0,r:x?Number(D.has("KeyD"))-Number(D.has("KeyA")):0,fire:x&&(R||D.has("KeyX")||performance.now()<U),use:x&&D.has("KeyE"),yaw:v,pitch:b})}let he,W,ee,fe=new Map,Me=0,Ae=0,Re=[],De=0;function be(x){let y=Math.min(1,(x-Me)/100),N=m.projectiles.map($=>{let q=fe.get($.id)?.position||$.previousPosition,J=$.position;return{...$,position:{x:q.x+(J.x-q.x)*y,y:q.y+(J.y-q.y)*y,z:q.z+(J.z-q.z)*y}}});ee.update(N,Re.splice(0),Math.min(.1,(x-Ae)/1e3)),Ae=x}let Fe=new I,P=matchMedia("(prefers-reduced-motion: reduce)");function ce(x,y,N,$,q,J,ye){let se=B.get(x);if(!se){let ve=new ht;ve.position.set(y,0,N),M.add(ve);let re=Ds(ve,$);ye&&(re.chassis.color.setHex(5674136),re.visor.material.color.setHex(10092530)),se={root:ve,art:re},B.set(x,se)}let{root:le,art:Ee}=se;if(le.visible=q,!q)return;let Le=y-le.position.x,j=N-le.position.z;le.position.x+=Le*.35,le.position.z+=j*.35;let We=Math.hypot(Le,j);J!=null?le.rotation.y=Math.PI+J:We>.005&&(le.rotation.y=Math.atan2(Le,j));let ze=P.matches?0:Math.min(.42,We*3),Pe=performance.now()/114;for(let[ve,re]of Ee.legs.entries()){let Ne=Math.sin(Pe+ve*Math.PI)*ze;re.rotation.x=Ne,Ee.arms[ve].rotation.x=-Ne*.6}}function Q(){f=new Oi({canvas:a,antialias:matchMedia("(pointer:fine)").matches}),M=new bs,_=new Nt(72,1,.08,65),M.add(_);let x=Vi(1),y=ca(M,x.walls,x.doors,1),{theme:N,doorViews:$}=y;M.background=new ke(N.sky),M.fog=new Ms(N.fog,27,61),M.add(new Ts("#fff0d1",N.cold,1.85));let q=new Rs(N.bright,2.05);q.position.set(6,15,8),M.add(q);let J=new Map($.map(le=>[le.d.id,le])),ye=performance.now(),se=(le=performance.now())=>{let Ee=Math.min(.05,(le-ye)/1e3);ye=le,te()&&(v+=(Number(D.has("ArrowLeft"))-Number(D.has("ArrowRight")))*Ee*1.9);let Le=T?54:72;if(_.fov!==Le&&(_.fov=Le,_.updateProjectionMatrix()),w=requestAnimationFrame(se),!m||!a.clientWidth)return;let j=m.players.find(re=>re.id===d),We=j?.hp?j:m.players.find(re=>re.hp)||j;if(!We)return;let ze=a.clientWidth,Pe=a.clientHeight;(a.width!==ze||a.height!==Pe)&&(f.setSize(ze,Pe,!1),_.aspect=ze/Pe,_.updateProjectionMatrix()),Fe.set(We.x,1.55,We.z),F||(F=Fe.clone()),F.lerp(Fe,.34),_.position.copy(F),De=Math.max(0,De-.009),_.rotation.set(b+De,v,0,"YXZ");for(let re of m.doors){let Ne=J.get(re.id);Ne&&(Ne.group.position.y+=((re.open?re.h+2:re.h/2)-Ne.group.position.y)*.25,Ne.status.material.color.setHex(re.open?8767136:15117669))}let ve=m.verified?8443050:m.time<10?15960688:15578723;y.strip.material.color.setHex(ve),y.lamp.material.color.setHex(ve);for(let re of m.bots)ce("b"+re.id,re.x,re.z,re.id,re.hp>0,null,!1);for(let re of m.players)ce(re.id,re.x,re.z,1,re.id!==We.id&&re.hp>0,re.yaw,!0);j?.weapon!==W&&(he&&(_.remove(he),he.traverse(re=>{re.geometry?.dispose(),re.material?.dispose()})),W=j?.weapon,he=new ht,he.position.set(.34,-.33,-.65),he.scale.setScalar(.74),_.add(he),la(he,W||"pistol")),ee&&be(performance.now()),f.render(M,_)};se()}function oe(){let x=m.players.find(y=>y.id===d);x&&(o.textContent="\u623F\u9593 "+p+" \xB7 "+m.players.map(y=>y.name+" "+y.hp+" HP"+(y.online?y.ready?"\uFF08\u5DF2\u6E96\u5099\uFF09":"":"\uFF08\u96E2\u7DDA\uFF09")).join(" \uFF0F ")+" \xB7 "+(m.phase==="playing"?Math.ceil(m.time)+" \u79D2 \xB7 \u5F48\u5323 "+x.ammo+" / \u5099\u5F48 "+x.reserve+(x.reload?" \xB7 \u63DB\u5F48 "+x.reload.toFixed(1)+"s":"")+" \xB7 "+(m.verified?"\u5DF2\u6838\u5BE6":"\u5230\u5317\u9762\u67E5\u5E33")+" \xB7 \u62C6\u89E3 "+m.progress.toFixed(1)+"/5 \u79D2"+(V?" \xB7 \u9078\u55AE\u958B\u555F\uFF0C\u5408\u4F5C\u5C0D\u5C40\u7E7C\u7E8C":""):m.result||"\u7B49\u5019\u5169\u4EBA\u6E96\u5099"),r("[data-buy-rocket]").disabled=!x.hp||x.launcher||x.credits<350,r("[data-reload]").disabled=!x.hp||x.reload>0||!x.reserve||x.ammo>=je[x.weapon].mag,r("[data-equip]").disabled=!x.hp||!x.launcher,m.phase==="playing"&&(o.textContent+=" \xB7 \u88DD\u5099\u9EDE "+x.credits+" \xB7 "+(x.weapon==="bazooka"?"\u706B\u7BAD\u7B52":"\u624B\u69CD")),r("[data-match-resume]").hidden=m.phase!=="playing"||!V,r("[data-ready]").hidden=m.phase==="playing",r("[data-ready]").disabled=x.ready,r("[data-field]").hidden=m.phase!=="playing",r("[data-offer]").hidden=!(m.phase==="playing"&&x.hp&&x.checked&&!m.verified&&Math.hypot(x.x,x.z+13)<2.7),m.phase==="playing"&&!f&&Q())}function Y(x){if(u&&u.readyState<2)return;let y;try{y=JSON.parse(sessionStorage.getItem("coop-room-session"))}catch{}let N=new URL(i);N.searchParams.set("action",x),x!=="create"&&N.searchParams.set("code",x==="reconnect"?y?.code:c[1].value.trim().toUpperCase()),u=new WebSocket(t?i:N),o.textContent="\u9023\u7DDA\u4E2D\u2026",u.onopen=()=>G({type:x,code:x==="reconnect"?y?.code:c[1].value.trim().toUpperCase(),token:x==="reconnect"?y?.token:void 0,name:c[0].value}),u.onmessage=$=>{let q=JSON.parse($.data);if(q.v!==3){o.textContent="\u5408\u4F5C\u7248\u672C\u4E0D\u540C\uFF0C\u8ACB\u66F4\u65B0\u904A\u6232\u540C\u623F\u9593\u4F3A\u670D\u5668\u3002",u.close();return}if(q.type==="joined"){({id:d,code:p,token:g}=q);try{sessionStorage.setItem("coop-room-session",JSON.stringify({code:p,token:g}))}catch{}r(".room-controls").hidden=!0;return}if(q.type==="state"){let J=m?.round!==q.round;if(!J&&q.phase==="playing")for(let se of q.players){let le=m.players.find(Ee=>Ee.id===se.id);se.shot&&le&&se.shot>(le.shot??0)&&["pistol","bazooka"].includes(se.shotWeapon)&&(e("shot-"+se.shotWeapon),se.id===d&&se.shotWeapon==="pistol"&&(De=Math.min(.19,De+.043)),se.shotWeapon==="bazooka"&&e("rocket-flight")),se.id===d&&se.reload>0&&le&&!le.reload&&e("reload")}fe=new Map((J?[]:m.projectiles).map(se=>[se.id,se])),(J||q.phase!=="playing")&&(ee?.dispose(),ee=null,Re=[]);let ye=te();m=q,Me=performance.now(),oe(),ye&&!te()&&X(),m.phase==="playing"&&(ee??=ia(M,{reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,onImpact:n}),Re.push(...q.impacts))}else q.type==="error"&&(o.textContent=q.message)},u.onerror=()=>o.textContent="\u623F\u9593\u4F3A\u670D\u5668\u672A\u80FD\u9023\u7DDA\u3002",u.onclose=()=>{ie||(X(),r("[data-field]").hidden=r("[data-ready]").hidden=!0,r(".room-controls").hidden=!1,r("[data-resume]").hidden=!g,o.textContent+=" \xB7 \u9023\u7DDA\u5DF2\u95DC\u9589")}}function Se(){X(),ie=!0,clearInterval(C),cancelAnimationFrame(w),l.abort(),ee?.dispose(),u?.close(),M?.traverse(x=>{x.geometry?.dispose(),x.material?.map?.dispose(),x.material?.dispose()}),f?.dispose(),f?.forceContextLoss(),s.remove()}if(r("[data-exit]").onclick=Se,r("[data-match-resume]").onclick=()=>{V=!1,X(),m&&oe(),a.focus()},h(s,"cancel",x=>{x.preventDefault(),V=!0,X(),m&&oe()}),h(window,"pagehide",Se),window.offlineEdition||!i){r(".room-controls").hidden=!0,o.textContent=window.offlineEdition?"\u96E2\u7DDA\u7248\u53EF\u73A9\u55AE\u4EBA\uFF1B\u5408\u4F5C\u9700\u8981\u7DB2\u7D61\u3002":"\u516C\u958B\u5408\u4F5C\u4F3A\u670D\u5668\u5C1A\u672A\u9023\u63A5\u3002";return}try{r("[data-resume]").hidden=!sessionStorage.getItem("coop-room-session")}catch{}r("[data-create]").onclick=()=>Y("create"),r("[data-join]").onclick=()=>Y("join"),r("[data-resume]").onclick=()=>Y("reconnect"),r("[data-ready]").onclick=()=>G({type:"ready"}),r("[data-buy-rocket]").onclick=()=>{G({type:"buy",item:"bazooka"}),G({type:"equip",weapon:"bazooka"}),a.focus()},r("[data-reload]").onclick=()=>{G({type:"reload"}),a.focus()},r("[data-equip]").onclick=()=>{G({type:"equip",weapon:m.players.find(x=>x.id===d)?.weapon==="bazooka"?"pistol":"bazooka"}),a.focus()};let ge=r("[data-offer]");ge.textContent=ri[0].q+" \u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\uFF0C\u5168\u968A\u4EFB\u52D9\u5931\u6557\u3002",ri[0].answers.forEach((x,y)=>{let N=document.createElement("button");N.textContent=x,N.onclick=()=>G({type:"answer",answer:y}),ge.append(N)}),K=sa({on:h,canvas:a,active:te,look(x,y){let N=T?.0018:.003;v-=x*N,b=Math.max(-1.2,Math.min(1.2,b-y*N))},fire(x){R=x,x&&(U=performance.now()+70,ne())},clearInput:Z}),h(s,"keydown",x=>{if(!te()||x.target.matches("input,select,textarea")||!["KeyW","KeyA","KeyS","KeyD","KeyX","KeyQ","KeyE","KeyF","KeyR","ArrowLeft","ArrowRight"].includes(x.code)||(x.preventDefault(),D.add(x.code),x.repeat))return;x.code==="KeyX"&&(U=performance.now()+70,ne()),x.code==="KeyQ"&&(T=!T);let y={KeyE:"door",KeyF:"check",KeyR:"reload"}[x.code];y&&G({type:y})}),h(window,"keyup",x=>D.delete(x.code)),h(window,"blur",X),h(document,"visibilitychange",()=>{document.hidden&&X()}),C=setInterval(()=>{m?.phase==="playing"&&ne()},75),o.textContent="\u5EFA\u7ACB\u623F\u9593\u5F8C\uFF0C\u5C07\u516B\u4F4D\u623F\u9593\u78BC\u4EA4\u7540\u968A\u53CB\u3002"}function ud(n){return globalThis.siteLocale?.text(n)??n}var yl=Object.freeze({x:0,z:-13,name:"\u5317\u9762\u7D42\u7AEF"}),dd=Object.freeze({q:"\u963F\u4FCA\u8AD7\u4F4F\u501F HK$20,000 \u66AB\u6642\u9084\u820A\u5361\u6578\u3002\u78BA\u8A8D\u4E4B\u524D\u61C9\u8A72\u9EDE\u505A\uFF1F",answers:["\u66AB\u505C\u78BA\u8A8D\uFF0C\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB","\u5148\u501F\u65B0\u9322\u66AB\u6642\u9084\u820A\u5361\u6578"],right:0,why:"\u66AB\u505C\u64B3\u78BA\u8A8D\u3002\u6838\u5C0D\u7E3D\u9084\u6B3E\u3001\u5230\u671F\u65E5\u540C\u624B\u7E8C\u8CBB\uFF0C\u518D\u540C\u963F\u4FCA\u4E00\u9F4A\u67E5\u6E05\u695A\u820A\u6B20\u6B3E\u3002"}),B_=[{x:-12,z:-13,name:"\u897F\u5DF7\u63A5\u6536\u7AD9"},{x:12,z:-13,name:"\u6771\u5074\u8CA8\u53F0"},{x:13,z:-14,name:"\u6771\u5317\u77AD\u671B\u53F0"}],z_=[{id:"verify",title:"\u6838\u5C0D\u53CA\u62C6\u89E3",brief:"\u53BB\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u8CC7\u6599\uFF0C\u6309\u4F4F E \u62C6\u89E3\u3002"},{id:"dispatch",title:"\u96D9\u7AD9\u63A5\u529B",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\u4E26\u6309\u4F4F E \u6574\u7406\u8A18\u9304\uFF0C\u518D\u53BB\u63A5\u6536\u7AD9\u6309\u4F4F E \u4EA4\u63A5\u3002"},{id:"hold",title:"\u5B88\u4F4F\u4E0A\u50B3\u9EDE",brief:"\u6838\u5BE6\u5317\u9762\u7D42\u7AEF\uFF0C\u518D\u53BB\u6307\u5B9A\u5730\u9EDE\u7559\u55BA\u7BC4\u570D\u5167\u76F4\u81F3\u4E0A\u50B3\u5B8C\u6210\u3002"}],vl=B_.flatMap((n,e)=>z_.map(t=>({...t,id:e+1+"-"+t.id,mode:t.id,round:e+1,map:Vi(e+1).name,second:n})));function fd(n){let e=vl.find(t=>t.id===n);return e?{mission:e,stage:0,complete:!1}:null}function Ml(n,e,t=!1){let i=n?.stage??0,s=n?.mission.mode??"verify";return e?s==="hold"?{point:n.mission.second,kind:"upload",seconds:8}:s==="dispatch"?i===0?{point:yl,kind:"prepare",seconds:t?2:3}:{point:n.mission.second,kind:"handoff",seconds:4}:{point:yl,kind:"defuse",seconds:t?3:5}:{point:yl,kind:"check",seconds:t?3:5}}function Ls(n,e,t=2.7){return Math.hypot(n.x-e.x,n.z-e.z)<t}function pd(n,e,t,i){if(n?.complete)return null;let s=Ml(n,e.verified,e.purchases.includes("kit"));return e.phase!=="playing"||s.kind==="check"||!Ls(e,s.point)||!t&&s.kind!=="upload"?(e.defuse=0,null):(e.defuse=Math.min(s.seconds,e.defuse+i),e.defuse+1e-9<s.seconds?null:n?.mission.mode==="dispatch"&&n.stage===0?(n.stage=1,e.defuse=0,"relay"):(n&&(n.complete=!0),"complete"))}var ha={follow:"\u8DDF\u96A8",hold:"\u5B88\u4F4D",cover:"\u63A9\u8B77",advance:"\u7A81\u7834"};function md(n,e){return[[-1.4,15.6],[1.6,15.2],[0,16.5]].map(([t,i],s)=>{let r=new ht,o=Ds(r,s);return r.position.set(t,0,i),o.chassis.color.set("#397c73"),o.visor.material.color.set("#abf4d5"),n.add(r),{id:s,x:t,z:i,mesh:r,art:o,plan:[],refresh:s*.2,action:1+s*.3,open:!An(t,i,.33,e)}})}function gd(n,e,t,i,s,r,o,a,c){for(let l of n){if(!l.open)continue;let h=e==="advance"?i:e==="follow"?{x:t.x+(l.id-1)*1.16,z:Math.min(16.5,t.z+1.7+l.id*.5)}:null;if(l.refresh-=o,h&&l.refresh<=0){l.refresh=.9+l.id*.11;let p=Math.hypot(l.x-h.x,l.z-h.z);l.plan=p<1.2?[]:Xs(l.x,l.z,h.x,h.z,r)?kr(l.x,l.z,h.x,h.z,r):[h]}let u=h&&l.plan[0];if(u){let p=u.x-l.x,g=u.z-l.z,A=Math.hypot(p,g);if(A<.45)l.plan.shift();else{let m=Math.min(2.8*o,A)/A;zr(l,p*m,g*m,r),l.mesh.position.set(l.x,0,l.z),l.mesh.rotation.y=Math.atan2(p,g)}}for(let[p,g]of l.art.legs.entries())g.rotation.x=u?Math.sin(a*9+p*Math.PI)*.34:0;if(l.action-=o,l.action>0||!["cover","advance"].includes(e))continue;l.action=1.7+l.id*.12;let d=s.find(p=>p.hp>0&&Math.hypot(l.x-p.x,l.z-p.z)<10&&!Xs(l.x,l.z,p.x,p.z,r));d&&c(l,d)}}function k_(n={}){n=n&&typeof n=="object"?n:{};let e=(t,i,s,r)=>Number.isFinite(t)?Math.min(s,Math.max(i,t)):r;return{sensitivity:e(n.sensitivity,.25,3,1),ads:e(n.ads,.2,1.5,.45),volume:e(n.volume,0,1,.65),invert:n.invert===!0,camera:"free",reduced:n.reduced===!0}}function bl(n,e={}){return k_(n??e)}function Ad(n,e,t,i){let s=.0022*i.sensitivity*(t?i.ads:1),r=Number.isFinite(n)?n:0,o=Number.isFinite(e)?e:0;return{yaw:r*s,pitch:o*s*(i.invert?-1:1)}}var Sl=new Map,Te=n=>{if(!Sl.has(n)){let e=document.getElementById(n);return e&&Sl.set(n,e),e}return Sl.get(n)},ni=Te("world"),bd=new AbortController,ut=new Set,ua=new $o,Gs=document.createElement("label");Gs.id="squad-control";Gs.hidden=!0;Gs.innerHTML='\u5C0F\u968A <select aria-label="\u5C0F\u968A\u6307\u4EE4">'+Object.entries(ha).map(([n,e])=>'<option value="'+n+'">'+e+"</option>").join("")+"</select>";document.body.append(Gs);var pa=Gs.querySelector("select"),G_=[...document.querySelectorAll("[data-weapon]")],Tl=null,Rl=null,_d=0,Us=!0,Lr=!1,Sd=[],Ns=null,wr=null,Tn=null,wl=null,En=null,Tr=null,Lt=null;try{let n=localStorage.getItem("fps-preferences-v2"),e=localStorage.getItem("fps-preferences-v1");Lt=bl(n?JSON.parse(n):null,JSON.parse(e||"{}"))}catch{Lt=bl(null)}var Fn=0,Cr=0,Mt=Wl(),Cl=[],mn=!1,Pr=!1,Ed=0,_a=!1,E=Wi(),Kt,Et,Dt,fn,pn,tn=0,Mi=0,xa=0,sn=[],Os=[],Ir=[],wd=[],Rn=0,Bs=0,Pn=!1,gn=!1,nn=!1,On=Lt.reduced||matchMedia("(prefers-reduced-motion:reduce)").matches,nt=null,ya=0,Sr=0,Rr=0,Fs=0,Er=0,va=!1,bt=!1,Ce=null,xd=/^mission-([1-3]-(?:verify|dispatch|hold))$/.exec(window.arcadeTest?.target??""),ii=[],zs="follow",Ft=()=>window.arcadeStory?.id==="verify",Pl=()=>Ft()?dd:ri[E.round-1],Td="fps-missions-v1",Bn=()=>Ml(Ce,E.verified,E.purchases.includes("kit")),$e=(n,e,t,i={})=>n.addEventListener(e,t,{...i,signal:bd.signal});$e(pa,"change",()=>{if(!(E.phase!=="playing"||!ii.length||!Object.hasOwn(ha,pa.value))){zs=pa.value;for(let n of ii)n.refresh=0;E.feedback="\u5C0F\u968A\u6307\u4EE4 \xB7 "+ha[zs],ni.focus()}});function Cn(n,e=.1,t=.06,i="sine"){if(nn||!nt||nt.state!=="running")return;let s=nt.createOscillator(),r=nt.createGain();s.type=i,s.frequency.setValueAtTime(n,nt.currentTime),s.frequency.exponentialRampToValueAtTime(Math.max(30,n*.4),nt.currentTime+e),r.gain.setValueAtTime(t,nt.currentTime),r.gain.exponentialRampToValueAtTime(.001,nt.currentTime+e),s.connect(r),r.connect(Tr||nt.destination),s.onended=()=>{s.disconnect(),r.disconnect()},s.start(),s.stop(nt.currentTime+e)}function ks(){if(!nn&&!document.hidden&&window.gameAudio?.resume(),!(nn||!["menu","buy","playing"].includes(E.phase)))try{nt||(nt=new AudioContext,Tr=nt.createGain(),Tr.gain.value=Lt.volume,Tr.connect(nt.destination)),nt.resume().catch(()=>{}),ya=nt.currentTime}catch{}}function H_(){if(!(!nt||nn||E.phase!=="playing")&&nt.currentTime>=ya){let n=[110,98,130.81,87.31][Math.floor(Sr/16)%4];Cn(n*(Sr%2?2:1),.14,.025,"triangle"),Sr%4===0&&Cn(58,.12,.07),Sr%4===2&&Cn(800,.03,.012,"square"),Sr++,ya=nt.currentTime+.2}}function da(n,e,t,i,s=0,r=0,o=0,a=Et){let c=new _t(new hn(n,e,t),new xi({color:i,roughness:.85}));return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a.add(c),c}function ma(n,e="#254f48"){let t=document.createElement("canvas");t.width=512,t.height=128;let i=t.getContext("2d"),s=new Ss(t),r=new ko(new fr({map:s}));return r.userData.localize=()=>{i.fillStyle=e,i.fillRect(0,0,512,128),i.strokeStyle="#e9d59e",i.lineWidth=6,i.strokeRect(6,6,500,116),i.fillStyle="#fff4d5",i.textAlign="center",i.textBaseline="middle",i.font="bold 37px Microsoft JhengHei,sans-serif",i.fillText(ud(n),256,65,475),s.needsUpdate=!0},r.userData.localize(),r.scale.set(4.2,1.05,1),r}function V_(){Et=new bs,Et.fog=new Ms,Dt=new Nt(76,1,.05,100),Dt.rotation.order="YXZ",Et.add(Dt),Kt=new Oi({antialias:matchMedia("(pointer:fine)").matches,powerPreference:"high-performance"}),Kt.outputColorSpace=At,Kt.shadowMap.type=ul,ni.append(Kt.domElement),wl=new Ts("#fff0d1","#4d6d59",1.85),Et.add(wl),En=new Rs("#ffe3b6",2.05),En.position.set(6,15,8),En.castShadow=!0,En.shadow.mapSize.set(512,512),En.shadow.camera.left=-23,En.shadow.camera.right=23,En.shadow.camera.top=23,En.shadow.camera.bottom=-23,En.shadow.normalBias=.03,Et.add(En),Rd(),Il(),Nr()}function Rd(){Ns&&vi(Ns),wr=Vl(E.round),Mt=wr.doors,Ns=new ht,Et.add(Ns),Tn=ca(Ns,si,Mt,E.round);let{theme:n,station:e}=Tn;wd=Tn.wallRays,Cl=Tn.doorViews,Et.background=new ke(n.sky),Et.fog.color.set(n.fog),Et.fog.near=27,Et.fog.far=64,En.color.set(n.bright),wl.groundColor.set(n.cold),document.body.dataset.court=String(E.round);let t=ma("\u5317\u9762\u7D42\u7AEF \xB7 \u67E5\u5E33 F","#264745");t.position.set(0,1.55,0),t.scale.set(2.6,.65,1),e.add(t);let i=ma("\u5DF2\u6838\u5BE6 \xB7 \u4F9D\u7167\u756B\u9762\u6307\u793A","#264745");i.position.copy(t.position),i.scale.copy(t.scale),i.visible=!1,e.add(i),Tn.stationSign=t,Tn.verifiedSign=i;let s=ma(wr.name,"#374d50");s.position.set(0,4,17.3),Ns.add(s)}function Il(){fn&&vi(fn),fn=new ht,Dt.add(fn),fn.position.set(.34,-.33,-.65),fn.scale.setScalar(.74);let n=la(fn,E.weapon);pn=new _t(new ti(.07,.17,7),new Gt({color:"#ffe5a3"})),pn.rotation.x=-Math.PI/2,pn.position.set(n.x,n.y,n.z),pn.visible=!1,fn.add(pn)}function Cd(n){Jl(E,n)&&(mn=!1,Il(),E.feedback=je[n].label)}function W_(){return E.weapon!=="knife"&&(E.weapon!=="sniper"||E.cooldown<=0)}function Pd(){E.phase==="playing"&&!bt&&W_()&&(mn=!mn)}function Id(){E.phase==="playing"&&!bt&&E.jumpY===0&&(E.vy=5.3,Pr=!1,E.crouch=!1)}function Dd(){if(E.phase!=="playing"||bt)return!1;let n=Mt.filter(e=>Math.hypot(e.x-E.x,e.z-E.z)<2.7).sort((e,t)=>Math.hypot(e.x-E.x,e.z-E.z)-Math.hypot(t.x-E.x,t.z-E.z))[0];return n?n.open&&Math.abs(E.x-n.x)<n.w/2+.45&&Math.abs(E.z-n.z)<n.d/2+.45?(E.feedback="\u5148\u96E2\u958B\u9580\u6846\uFF0C\u518D\u95DC\u9580\u3002",!0):(n.open=!n.open,sn.forEach(e=>e.navTime=0),E.feedback=n.open?"\u9580\u5DF2\u958B\uFF1B\u7559\u610F\u9580\u5F8C\u3002":"\u9580\u5DF2\u95DC\u3002",Cn(140,.16,.04),!0):!1}function vi(n){n.traverse(e=>{e.geometry?.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i.map?.dispose(),i.dispose()})}),n.removeFromParent()}var yi=[],Gi;function Ma(){yi=[],Gi?.dispose(),Gi=null,sn.forEach(n=>vi(n.mesh)),sn=[],ii.forEach(n=>vi(n.mesh)),ii=[],Os.forEach(n=>vi(n.mesh)),Os=[],Ir.forEach(n=>vi(n.mesh)),Ir=[],bt=!1,Te("terminal").hidden=!0,Rr=Fs=0,Pn=gn=!1,ut.clear()}function X_(n,e,t){let i=new ht;i.position.set(n,0,e),Et.add(i);let s=Dl()?59:90+(E.round-1)*10,r={mesh:i,x:n,z:e,hp:s,maxHp:s,rewarded:!1,dying:0,nav:[],navTime:t*.05,patrol:t,shoot:2+t*.3,ammo:9,reload:0,burst:0,burstClock:0,alertUntil:0,origin:{x:n,z:e},id:t},o=Ds(i,t);r.parts=o.legs,r.arms=o.arms,r.chassisMaterial=o.chassis,r.visor=o.visor,r.motion=0;let a=da(.75,.75,.5,"#fff",0,1.05,0,i),c=da(.65,.45,.5,"#fff",0,1.7,0,i);a.visible=c.visible=!1,a.userData.enemy=r,c.userData.enemy=r,c.userData.head=!0;let l=ma(["\u4FE1\u7528\u5361\u8D85\u652F","\u60C5\u7DD2\u8AB2\u91D1","\u5206\u671F\u758A\u52A0","\u6E4A\u55AE\u885D\u52D5","\u6700\u4F4E\u9084\u6B3E"][t%5],"#3c4648");l.position.y=2.44,l.scale.set(1.92,.48,1),i.add(l);let h=new ht;return h.position.y=2.16,i.add(h),r.meter=h,da(1.15,.12,.05,"#273535",0,0,0,h),r.bar=da(1.08,.08,.06,"#a9d975",0,0,.04,h),r}function q_(){if(!Y_())return;let n=/^round-([1-3])$/.exec(window.arcadeTest?.target??"");n&&!Ce&&(E.round=Number(n[1])),Q_()}function Y_(){return E.phase==="buy"}function Q_(){if(!Zl(E))return;(E.round===1||Ce)&&window.arcadeRun?.start("defence",Ce?.training?null:Ce?.mission.id??"quick"),Ma(),Rd(),Mi=performance.now(),Rn=0,Bs=0,tn=0,Er=0,mn=!1,Pr=!1,Fn=0,Mt.forEach(e=>e.open=!1),Il();let n=J_();Sd=n;for(let e=0;e<(Ft()?2:Hl[E.round-1]);e++){let t=X_(...n[e],e);t.maxHp=Math.ceil(t.maxHp*Or(E.round).health),t.hp=t.maxHp,sn.push(t)}zs="follow",Ce?.training?E.time=180:Ce&&(ii=md(Et,Mt)),E.feedback=Ce?.training?"\u7DF4\u7FD2\u5834 \xB7 \u6A5F\u68B0\u9776\u5514\u6703\u9084\u64CA\u3002\u53EF\u4EE5\u7DF4\u7FD2\u79FB\u52D5\u3001\u958B\u9580\u3001\u67E5\u5E33\u540C\u62C6\u89E3\u3002":Ce?Ce.mission.brief:"100 \u751F\u547D\u503C \xB7 \u5229\u7528\u63A9\u9AD4\u5230\u5317\u9762\u67E5\u5E33\u62C6\u5F48\uFF0C\u6BCB\u9808\u6D88\u6EC5\u6240\u6709\u6575\u4EBA\u3002",ks(),Vt(),ni.focus()}function J_(){let n=[[-12,5],[12,0],[-11,-11],[11,-13],[3,-14],[-13,-1],[13,10]];for(let e of[-14,-9,-3,3,9])for(let t of[-14,-10,-5,0,5,10,14])!An(t,e,.55,Mt)&&Math.hypot(t,e-14)>8&&n.every(i=>Math.hypot(t-i[0],e-i[1])>2.5)&&n.push([t,e]);return n.filter(([e,t])=>!An(e,t,.55,Mt))}var Ld;function zn(){Ld?.clear(),Pn=!1,mn=!1}function Dl(){return E.round===1&&!Ce&&!Ft()&&!window.arcadeTest}function ba(){if(E.phase!=="playing"||bt||E.reload>0||E.cooldown>0)return;let n=je[E.weapon],e=E.weapon==="knife";if(!e&&E.ammo<=0){Ca(E)?Sa():(E.feedback="\u5099\u5F48\u7528\u76E1\uFF0C\u8ACB\u5207\u63DB\u6B66\u5668\u3002",Cn(100,.04,.025));return}if(e?E.melee++:(E.ammo--,E.shots++),E.cooldown=n.cooldown,E.weaponReady[E.weapon]=n.cooldown,Ed=tn+(e?.1:1),pn.visible=!e,pn.userData.life=e?0:.065,e?Cn(500,.14,.045):Dr("shot-"+E.weapon),Dt.position.set(E.x,E.y,E.z),Dt.rotation.set(Bs+Fn,Rn,0,"YXZ"),Et.updateMatrixWorld(!0),ua.setFromCamera(new ae,Dt),E.weapon==="bazooka"){let r={x:E.x,y:E.y,z:E.z};Dr("rocket-flight"),yi.push(eh("solo",r,ua.ray.direction,tn));return}let t=[...wd,...Cl.filter(r=>!r.d.open).map(r=>r.mesh),...sn.filter(r=>r.hp>0).flatMap(r=>r.mesh.children.filter(o=>o.userData.enemy))],i=ua.intersectObjects(t,!1).find(r=>r.distance<=n.range),s=i?i.point:ua.ray.at(n.range,new I);if(!e){let r=new Go(new vt().setFromPoints([Dt.localToWorld(new I(.3,-.3,-.7)),s]),new pr({color:"#ffe1a0",transparent:!0,opacity:.8}));Et.add(r),Ir.push({mesh:r,life:.1})}if(i?.object.userData.enemy){let r=i.object.userData.enemy,o=$l(E,r,!!i.object.userData.head);o&&(r.chassisMaterial.emissive.setHex(10376224),e||E.hits++,Fs=.13,Cr=o.head?1.1:Cr,Cn(o.head?880:440,.08,.065,"triangle"),r.bar.scale.x=r.hp/r.maxHp,r.bar.position.x=-(1-r.hp/r.maxHp)*.54,o.killed&&(nn||window.gameAudio?.effect("kill",crypto.randomUUID()),r.dying=.001,E.feedback=(o.head?"\u7206\u982D\uFF01":"\u76EE\u6A19\u505C\u6A5F\u3002")+" +100 \u91D1\u5E63"))}E.weapon==="sniper"&&(mn=!1,E.feedback="\u9000\u93E1\u62C9\u6813\u4E2D \xB7 "+n.cooldown.toFixed(1)+"s"),E.weapon==="carbine"?(Fn=Math.min(.22,Fn+.0231),Rn+=(Math.random()-.5)*.0098):E.weapon==="pistol"&&(Fn=Math.min(.19,Fn+.043))}function Dr(n){nn||window.gameAudio?.effect(n)}function Sa(){E.phase!=="playing"||bt||!ql(E)||(E.feedback="\u63DB\u5F48\u4E2D\u2026",nn||window.gameAudio?.effect("reload",crypto.randomUUID()),Cn(300,.13,.04))}function Nd(){for(let n of["music","effects"])window.gameAudio?.volume(n,Lt.volume);nn?window.gameAudio?.pause():window.gameAudio?.resume()}function Ud(){Nd(),On=Lt.reduced,Tr?.gain.setTargetAtTime(Lt.volume,nt.currentTime,.04);try{localStorage.setItem("fps-preferences-v2",JSON.stringify(Lt))}catch{E.feedback="\u8A2D\u5B9A\u9069\u7528\u65BC\u4ECA\u6B21\u904A\u73A9\u3002"}}function Z_(){Hi(),zn();for(let n of["sensitivity","ads","volume"])Te("setting-"+n).value=Lt[n],Te(""+n+"-output").textContent=n==="volume"?Math.round(Lt[n]*100)+"%":Lt[n].toFixed(2)+"\xD7";Te("setting-invert").checked=Lt.invert,Te("setting-reduced").checked=On,Te("settings-dialog").showModal()}function K_(){Te("view-status").textContent="",E.phase="playing",Mi=performance.now(),ks(),ya=nt?.currentTime||0,Vt(),ni.focus()}function Fd(){E.phase!=="paused"||Lr||Te("settings-dialog").open||K_()}async function Od(){Te("view-status").textContent="",E.phase==="playing"&&Hi(),zn();try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen(),Nr()}catch{Te("view-status").textContent="\u700F\u89BD\u5668\u672A\u80FD\u5207\u63DB\u5168\u87A2\u5E55\u3002\u6309 V \u91CD\u8A66\uFF0C\u6216\u4EE5\u8996\u7A97\u6A21\u5F0F\u7E7C\u7E8C\u3002"}}function $_(n){let e=new _t(new Es(.1,6,6),new Gt({color:"#ff8e56"}));e.position.set(n.x,1.4,n.z),Et.add(e);let t=E.x-n.x,i=E.z-n.z,s=(E.crouch?.55:1.05)+E.jumpY-1.4,r=Math.hypot(t,i,s)||1,o=11*Or(E.round).projectile;Os.push({mesh:e,x:n.x,y:1.4,z:n.z,vx:t/r*o,vy:s/r*o,vz:i/r*o,life:4}),Cn(110,.06,.018,"triangle"),n.ammo--,n.burst--;let a=Dl()?.7:1;n.burstClock=.15/a,n.burst===0&&(n.shoot=(2.9-E.round*.2)/a),n.ammo===0&&(n.reload=2.2,n.burst=0)}function Hi(){E.phase==="playing"&&(E.phase="paused",window.gameAudio?.pause(),Pn=gn=!1,ut.clear(),zn(),nt?.suspend().catch(()=>{}),Vt())}function Bd(){if(E.phase!=="playing"||Ce&&E.verified)return;if(!Ls(E,Bn().point,3)){E.feedback="\u5148\u5230\u5317\u9762\u8CA1\u52D9\u70B8\u5F48\u65C1\u908A\uFF0C\u64B3 F \u67E5\u5E33\u3002";return}E.checked=!0,bt=!0,ut.clear(),nt?.suspend().catch(()=>{}),zn();let n=Pl();Te("terminal").innerHTML="<h2>\u5148\u67E5\u5E33\uFF0C\u5F8C\u62C6\u89E3</h2><p>\u7B54\u932F\u6703\u5373\u6642\u5F15\u7206\u88DD\u7F6E\u3002</p><p>"+n.q+"</p>"+n.answers.map((e,t)=>'<button data-answer="'+t+'">'+e+"</button>").join("")+'<p id="terminal-feedback" role="status"></p><button id="terminal-back">\u8FD4\u56DE\u6230\u5834</button>',Te("terminal").hidden=!1,Pn=!1,gn=!1}function zd(){try{let n=JSON.parse(localStorage.getItem(Td));return n&&n.version===1&&n.completed?n:{version:1,completed:{}}}catch{return{version:1,completed:{}}}}function ga(n,e=!1){let t=fd(n);t&&(Ma(),_a=!1,Ce={...t,training:e},E=Wi(),E.round=t.mission.round,E.credits=400,E.phase="buy",Vt())}function j_(){if(!Ce&&E.round===3||Ce&&!Ce.training){let{judgement:n,reserve:e}=Gr(E);window.arcadeRun?.finish(Math.min(100,(Ce?E.decisionCorrect*80:n)+e))}if(E.phase="roundend",E.defuse=Bn().seconds,window.dispatchEvent(new Event("arcade-game-state")),Pn=gn=!1,zn(),nt?.suspend().catch(()=>{}),Ce&&!Ce.training&&!window.arcadeTest&&!Ft())try{let n=zd(),e=Math.round(tn*1e3),t=n.completed[Ce.mission.id];n.completed[Ce.mission.id]=Number.isFinite(t)?Math.min(e,t):e,localStorage.setItem(Td,JSON.stringify(n))}catch{}Vt()}function ex(n){if(!yi.length&&!Gi)return;let e=[...si,...Mt.filter(i=>!i.open)],t=[];for(let i of yi){let s=th(i,n,e,sn);if(!s)continue;t.push(s),Dr("rocket-impact"),s.direct!==null&&E.hits++;for(let o of sn){if(!o.hp)continue;let a=Na(s,o,e);a&&(o.hp=Math.max(0,o.hp-a),o.bar.scale.x=o.hp/o.maxHp,o.bar.position.x=-(1-o.bar.scale.x)*.54,Fs=.13,!o.hp&&!o.rewarded&&(o.rewarded=!0,o.dying=.001,E.kills++,E.totalKills++,E.credits+=100,E.earned+=100,nn||window.gameAudio?.effect("kill",crypto.randomUUID())))}let r=Na(s,E,e,!0);r&&Ia(E,r)}yi=yi.filter(i=>i.active),Gi??=ia(Et,{reducedMotion:On,onImpact:()=>Cn(80,.18,.1,"triangle")}),Gi.update(yi,t,n)}function tx(n){if(E.phase==="dying"){Er+=n,Dt.rotation.z=On?0:Math.min(.65,Er*.5),Dt.position.y=Math.max(.4,E.y-Er*.7),Er>=1.3&&(E.phase="dead",Vt());return}if(E.phase!=="playing"||bt||(tn+=n,ex(n),Ca(E)&&Sa(),E.phase!=="playing"))return;if(E.time=Math.max(0,E.time-n),!E.time){E.feedback="\u8CA1\u52D9\u70B8\u5F48\u5012\u6578\u5B8C\u3002\u91CD\u8A66\uFF0C\u5148\u5B89\u6392\u8DEF\u7DDA\u540C\u5668\u6750\u3002",E.phase="dead",zn(),Vt();return}for(let t in E.weaponReady)E.weaponReady[t]=Math.max(0,E.weaponReady[t]-n);if(E.cooldown=Math.max(0,E.cooldown-n),Fn=Math.max(0,Fn-n*.14),Cr=Math.max(0,Cr-n),Yl(E,n),!bt){Rn+=(Number(ut.has("ArrowLeft"))-Number(ut.has("ArrowRight")))*n*1.9;let t=(ut.has("KeyW")||ut.has("forward")?1:0)-(ut.has("KeyS")||ut.has("back")?1:0),i=(ut.has("KeyD")||ut.has("right")?1:0)-(ut.has("KeyA")||ut.has("left")?1:0),s=Math.hypot(t,i)||1,r=E.crouch?2:ut.has("ShiftLeft")?6:E.weapon==="knife"?5:4.1;zr(E,(-Math.sin(Rn)*t+Math.cos(Rn)*i)/s*r*n,(-Math.cos(Rn)*t-Math.sin(Rn)*i)/s*r*n,Mt),E.crouch=Pr||ut.has("KeyC")||ut.has("ControlLeft"),(E.jumpY>0||E.vy)&&(E.vy-=12*n,E.jumpY=Math.max(0,E.jumpY+E.vy*n),E.jumpY||(E.vy=0)),E.y=(E.crouch?.93:1.65)+E.jumpY,(Pn||ut.has("KeyX"))&&ba()}for(let t of sn){if(t.hp<=0){t.dying+=n,t.mesh.rotation.z=Math.min(Math.PI/2,t.dying*2),t.mesh.position.y=-Math.min(.5,t.dying*.4),t.mesh.scale.setScalar(Math.max(.01,1-Math.max(0,t.dying-.8)));continue}t.navTime-=n;let i=Math.hypot(t.x-E.x,t.z-E.z),s=i<16&&!Xs(t.x,t.z,E.x,E.z,Mt,E.crouch?.8:1.4);(s||tn<Ed&&i<18)&&(t.alertUntil=tn+8);let r=t.alertUntil>tn,o;if(r){let d=tn*.55+t.id*1.7;o=i>9?{x:E.x,z:E.z}:{x:E.x+Math.sin(d)*5,z:E.z+Math.cos(d)*5},An(o.x,o.z,.55,Mt)&&(o={x:E.x,z:E.z})}else{let d=Sd,p=d[t.patrol%d.length];o={x:p[0],z:p[1]},Math.hypot(t.x-o.x,t.z-o.z)<1.2&&(t.patrol=(t.patrol+3)%d.length)}t.navTime<=0&&(t.nav=kr(t.x,t.z,o.x,o.z,Mt.map(d=>({...d,open:!0}))),t.navTime=.7);let a=t.x,c=t.z,l=t.nav[0];if(l){for(let A of Mt)!A.open&&Math.hypot(A.x-t.x,A.z-t.z)<1.6&&(A.open=!0);let d=l.x-t.x,p=l.z-t.z,g=Math.hypot(d,p);if(g<.3)t.nav.shift();else{let A=Math.min(g,(1.9+E.round*.25)*Or(E.round).movement*n);An(t.x+d/g*A,t.z,.5,Mt)||(t.x+=d/g*A),An(t.x,t.z+p/g*A,.5,Mt)||(t.z+=p/g*A)}}t.mesh.position.set(t.x,0,t.z),t.mesh.rotation.y=Math.atan2(o.x-t.x,o.z-t.z);let h=Math.hypot(t.x-a,t.z-c);t.motion+=(Math.min(1,h/Math.max(n,.001)/1.5)-t.motion)*Math.min(1,n*13);let u=On?0:t.motion*.49;for(let[d,p]of t.parts.entries()){let g=Math.sin(tn*9+d*Math.PI)*u;p.rotation.x=g,t.arms[d].rotation.x=-g*.6-(r?.16:0)}t.visor.material.color.setHex(t.reload>0?16757085:r?16356209:16768397),t.shoot-=n,t.burstClock-=n,t.reload>0?(t.reload=Math.max(0,t.reload-n),t.reload||(t.ammo=9,t.shoot=.4)):r&&s&&!Ce?.training?(t.shoot<=0&&t.burst===0&&(t.burst=Math.min(3,t.ammo)),t.burst>0&&t.burstClock<=0&&$_(t)):t.burst=0}ii.length&&gd(ii,zs,E,Bn().point,sn,Mt,n,tn,(t,i)=>{i.hp=Math.max(0,i.hp-14),i.bar.scale.x=i.hp/i.maxHp,i.bar.position.x=-(1-i.bar.scale.x)*.54,i.hp||(i.dying=.01)}),Os=Os.filter(t=>{t.x+=t.vx*n,t.z+=t.vz*n,t.y=(t.y??1.4)+(t.vy||0)*n,t.life-=n,t.mesh.position.set(t.x,t.y,t.z);let i=t.life<=0||[...si,...Mt.filter(r=>!r.open)].some(r=>Math.abs(t.x-r.x)<r.w/2+.1&&Math.abs(t.z-r.z)<r.d/2+.1&&t.y<r.h),s=(E.crouch?1.02:1.82)+E.jumpY;if(!i&&Math.hypot(t.x-E.x,t.z-E.z)<.45&&t.y>E.jumpY&&t.y<s){let r=E.defuse;Ia(E,Ft()?3:Dl()?6:6+E.round*2),Ft()&&E.hp>0&&(E.defuse=r),Rr=.5,Cn(85,.16,.09,"sawtooth"),i=!0,E.feedback=E.hp?"\u4E2D\u5F48\uFF01\u9918\u4E0B "+E.hp+" \u751F\u547D\u503C\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002",E.hp||(zn(),Pn=!1,nt?.suspend().catch(()=>{}),Vt())}return i&&vi(t.mesh),!i});let e=pd(Ce,E,gn&&!bt,n);e==="relay"&&(E.feedback="\u5317\u9762\u8A18\u9304\u6E96\u5099\u597D\u3002\u53BB"+Bn().point.name+"\uFF0C\u6309\u4F4F E \u4EA4\u63A5\u3002",gn=!1),e==="complete"&&j_(),H_()}function nx(){let n=zd().completed;return'<section class="panel mission-panel"><h1>\u4EFB\u52D9\u9078\u64C7</h1><p>\u4E09\u5F35\u5730\u5716\u5404\u6709\u4E09\u500B\u4EFB\u52D9\u3002\u6BCF\u5C40\u6709\u7368\u7ACB\u5605 400 \u88DD\u5099\u9EDE\u3002</p><div class="mission-grid">'+[1,2,3].map(e=>{let t=vl.filter(i=>i.round===e);return"<section><h2>"+t[0].map+"</h2>"+t.map(i=>'<button data-mission="'+i.id+'"><b>'+i.title+"</b><span>"+i.brief+"</span>"+(Number.isFinite(n[i.id])?"<small>\u6700\u4F73 "+(n[i.id]/1e3).toFixed(1)+" \u79D2</small>":"")+"</button>").join("")+"</section>"}).join("")+'</div><button data-action="main-menu">\u8FD4\u56DE</button></section>'}function Vt(){Hs(),document.body.dataset.phase=E.phase,Gs.hidden=!(E.phase==="playing"&&ii.length),pa.value=zs;let n=Te("menu");if(n.innerHTML="",E.phase==="menu")n.innerHTML='<section class="panel"><small>FIRST PERSON \xB7 \u539F\u5275\u6A5F\u68B0\u4EBA\u8A13\u7DF4</small><h1>\u9810\u7B97\u9632\u885B\u6230<br>\u62C6\u89E3\u8CA1\u52D9\u70B8\u5F48\u3002</h1><p>\u907F\u958B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\uFF0C\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u5E33\u76EE\uFF0C\u518D\u62C6\u89E3\u70B8\u5F48\u3002</p><div class="control-guide"><span><b>\u79FB\u52D5</b> WASD\uFF0F\u756B\u9762\u65B9\u5411\u63A3</span><span><b>\u7784\u6E96</b> \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\uFF0F\u89F8\u63A7\u62D6\u52D5</span><span><b>\u5C04\u64CA</b> \u5DE6\u9375\u6216\u6309\u4F4F X \xB7 Q \u7784\u6E96</span><span><b>\u4E92\u52D5</b> F \u67E5\u5E33 \xB7 E \u62C6\u89E3</span></div><details><summary>\u64CD\u4F5C\u8AAA\u660E</summary><p>WASD \u79FB\u52D5 \xB7 \u53F3\u9375\u62D6\u52D5\uFF0F\u65B9\u5411\u9375\u8F49\u5411 \xB7 Esc \u66AB\u505C \xB7 \u5DE6\u9375\uFF0FX \u5C04\u64CA \xB7 Q \u7784\u6E96 \xB7 \u7A7A\u767D\u8DF3\u8E8D \xB7 C \u8E72\u4E0B \xB7 1\u20135 \u63DB\u6B66\u5668 \xB7 R \u63DB\u5F48 \xB7 F \u67E5\u5E33 \xB7 E \u958B\u9580\uFF0F\u62C6\u89E3 \xB7 P\uFF0FEsc \u66AB\u505C \xB7 V \u5168\u87A2\u5E55\u3002</p><p>\u89F8\u63A7\u677F\uFF1A\u53EF\u7528\u65B9\u5411\u9375\u8F49\u5411\u3001X \u5C04\u64CA\u3001Q \u7784\u6E96\u3002\u624B\u6A5F\uFF1A\u5DE6\u4E0B\u65B9\u5411\u63A3\u79FB\u52D5\u3001\u53F3\u908A\u62D6\u52D5\u7784\u6E96\u3001\u53F3\u4E0B\u5C04\u64CA\u3002</p></details><div class="settings"><label><input id="reduce" type="checkbox" '+(On?"checked":"")+'> \u6E1B\u5C11\u93E1\u982D\u52D5\u614B</label></div><div class="actions"><button data-action="begin">'+(Ft()?"\u958B\u59CB\u6838\u5C0D\u8CB8\u6B3E":"\u5FEB\u901F\u4E09\u8F2A")+"</button>"+(Ft()?"":'<button data-action="missions">\u4EFB\u52D9\u9078\u64C7</button><button data-action="training">3D \u7DF4\u7FD2\u5834</button><button data-action="coop">\u5169\u4EBA\u5408\u4F5C</button><a href="range.html">\u7121\u969C\u7919\u4E0D\u9650\u6642\u6587\u5B57\uFF0F\u6A19\u9776\u7248 \u2197</a>')+"</div></section>";else if(E.phase==="missions")n.innerHTML=nx();else if(E.phase==="buy")n.innerHTML='<section class="panel"><small>ROUND '+E.round+" / 3 \xB7 BUY PHASE</small><h1>"+(Ce?.training?"3D \u7DF4\u7FD2\u5834":Ce?Ce.mission.map+" \xB7 "+Ce.mission.title:"\u5148\u7559\u4E0B\u4E00\u8F2A\u5605\u8CC7\u6E90\u3002")+"</h1><p>\u9918\u4E0B <b>"+E.credits+" \u91D1\u5E63</b>\u3002\u624B\u69CD\u8207\u5315\u9996\u514D\u8CBB\u3002\u6BCF\u8F2A\u6709 100 \u751F\u547D\u503C\uFF0C\u8ACB\u5229\u7528\u63A9\u9AD4\uFF1B\u5668\u6750\u53EA\u9650\u4ECA\u8F2A\u3002</p>"+(Ft()?"<p>\u5DF2\u63D0\u4F9B\u5FEB\u901F\u62C6\u89E3\u5DE5\u5177\u3002\u5230\u5317\u9762\u7D42\u7AEF\u6838\u5C0D\u963F\u4FCA\u5605\u8CB8\u6B3E\u8CC7\u6599\u3002</p>":Ce?"<p>"+Ce.mission.brief+"</p>":"")+'<div class="gear">'+Object.entries(Br).map(([e,t])=>"<div><b>"+t.label+"</b><small>"+{bazooka:Ws(),carbine:"24 \u767C\uFF0C\u5C04\u901F\u8F03\u5FEB",sniper:"5 \u767C\uFF0C\u55AE\u767C\u9AD8\u5A01\u529B\uFF0C\u53EF\u958B\u93E1",kit:"\u62C6\u89E3\u7531 5 \u79D2\u6E1B\u81F3 3 \u79D2"}[e]+"</small><strong>"+t.cost+' \u91D1\u5E63</strong><button data-buy="'+e+'" '+(E.purchases.includes(e)||E.credits<t.cost?"disabled":"")+">"+(E.purchases.includes(e)?"\u5DF2\u8CFC\u8CB7":"\u8CFC\u8CB7")+"</button></div>").join("")+'</div><div class="actions"><button data-action="start">\u9032\u5165\u6230\u5834</button>'+(Ce?'<button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button>':"")+"</div></section>";else if(E.phase==="paused")n.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u66AB\u505C</h1><p>\u6309\u4F4F\u53F3\u9375\u62D6\u52D5\u8F49\u5411\uFF0C\u653E\u958B\u5373\u505C\u3002Esc \u66AB\u505C\u3002V \u5207\u63DB\u5168\u87A2\u5E55\u3002</p><p>\u79FB\u52D5\u3001AI\u3001\u5B50\u5F48\u3001\u63DB\u5F48\u540C\u5012\u6578\u5DF2\u505C\u3002'+Math.ceil(E.time)+" \u79D2 \xB7 "+E.ammo+' \u767C\u3002</p><div class="actions"><button data-action="resume">\u7E7C\u7E8C\u4EFB\u52D9</button><button data-action="retry">'+(Ce?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+"</button></div></section>";else if(E.phase==="roundend"&&Ft())n.innerHTML='<section class="panel"><h1>\u6838\u5C0D\u5B8C\u6210</h1><p>'+Pl().why+'</p><button data-action="exit">\u8FD4\u56DE\u8ABF\u67E5</button></section>';else if(E.phase==="roundend"&&Ce)n.innerHTML='<section class="panel"><h1>\u4EFB\u52D9\u5B8C\u6210</h1><p>'+Ce.mission.map+" \xB7 "+Ce.mission.title+" \xB7 "+tn.toFixed(1)+" \u79D2</p><p>"+ri[E.round-1].why+'</p><div class="actions"><button data-action="retry">\u518D\u8A66\u4E00\u6B21</button><button data-action="missions">\u8FD4\u56DE\u9078\u95DC</button></div></section>';else if(E.phase==="roundend")n.innerHTML='<section class="panel"><small>FINANCIAL BOMB DEFUSED</small><h1>\u7B2C '+E.round+" \u8F2A\uFF1A\u62C6\u89E3\u5B8C\u6210\u3002</h1><p>"+ri[E.round-1].why+"</p><p>\u5236\u6B62 "+E.kills+" \u500B\u6D88\u8CBB\u58DE\u7FD2\u6163\u6A5F\u68B0\u4EBA\u3002\u5668\u6750\u5269\u9918 "+E.credits+' \u91D1\u5E63\uFF0C\u7559\u7540\u4E0B\u4E00\u8F2A\u3002</p><button data-action="next">'+(E.round===3?"\u67E5\u770B\u4EFB\u52D9\u7E3D\u7D50":"\u4E0B\u4E00\u8F2A")+"</button></section>";else if(E.phase==="results"){let e=Gr(E);if(!_a&&!Ft()&&!window.arcadeTest){_a=!0;try{let t=JSON.parse(localStorage.getItem("website-v1-arcade")||"{}"),i=JSON.parse(localStorage.getItem("website-v1-records")||"{}");t.defence={score:e.judgement+e.reserve,completed:!0},i.defence={best:Math.max(i.defence?.best||0,e.judgement+e.reserve),plays:(i.defence?.plays||0)+1},localStorage.setItem("website-v1-arcade",JSON.stringify(t)),localStorage.setItem("website-v1-records",JSON.stringify(i))}catch{}}n.innerHTML='<section class="panel"><small>MISSION COMPLETE</small><h1>\u4FDD\u4F4F\u9700\u8981\uFF0C\u7559\u4F4E\u672A\u4F86\u3002</h1><div class="score-row"><p>\u91D1\u878D\u5224\u65B7<br><b>'+e.judgement+"\uFF0F80</b></p><p>\u8CC7\u6E90\u4FDD\u7559<br><b>"+e.reserve+"\uFF0F20</b></p><p>\u5C04\u64CA\u6E96\u78BA\u7387\uFF08\u53E6\u8A08\uFF09<br><b>"+e.accuracy+"%</b></p></div><p>\u5236\u6B62 "+E.totalKills+' \u500B\u6A5F\u68B0\u4EBA\uFF0C\u62C6\u89E3\u4E09\u679A\u865B\u69CB\u8CA1\u52D9\u70B8\u5F48\u3002\u91D1\u878D\u5224\u65B7\u53EA\u8A08\u7D42\u7AEF\u9996\u6B21\u6838\u5C0D\uFF0C\u5C04\u64CA\u6E96\u78BA\u7387\u5514\u52A0\u5165\u91D1\u878D\u5206\u6578\u3002\u5148\u4FDD\u57FA\u672C\u751F\u6D3B\u3001\u67E5\u6E05\u7E3D\u984D\u540C\u6536\u5165\u65E5\u671F\uFF0C\u518D\u70BA\u672A\u4F86\u76EE\u6A19\u9810\u7559\u8CC7\u6E90\u3002\u4E03\u65E5\u5F8C\u518D\u6AA2\u8996\u5B89\u6392\u3002</p><div class="actions"><button data-action="retry">\u518D\u73A9\u4E00\u6B21</button><button data-action="exit">\u8FD4\u56DE\u904A\u6232\u9078\u55AE</button></div></section>'}else E.phase==="dead"&&(n.innerHTML='<section class="panel"><small>RETRY / \u518D\u5B89\u6392\u8DEF\u7DDA</small><h1>'+(E.hp?"\u4ECA\u6B21\u672A\u80FD\u8D95\u53CA\u62C6\u89E3\u3002":"\u751F\u547D\u503C\u6B78\u96F6\u3002\u518D\u5B89\u6392\u4F0F\u64CA\u8DEF\u7DDA\u3002")+'</h1><p>\u7528\u63A9\u9AD4\u963B\u64CB\u706B\u529B\uFF0C\u907F\u958B\u6216\u53CD\u64CA\u6A5F\u68B0\u4EBA\uFF0C\u518D\u5230\u5317\u9762\u7D42\u7AEF\u67E5\u5E33\u3002\u6210\u7E3E\u5514\u6703\u6539\u52D5\u963F\u4FCA\u5605\u6545\u4E8B\u3002</p><div class="actions"><button data-action="retry">'+(Ce?"\u91CD\u8A66\u4EFB\u52D9":"\u7531\u7B2C\u4E00\u8F2A\u91CD\u8A66")+'</button><button data-action="exit">\u9000\u51FA</button></div></section>');["playing","dying"].includes(E.phase)&&(n.innerHTML="")}var wn=(n,e)=>{let t=Te(n);window.siteLocale?window.siteLocale.write(t,e):t.textContent!==e&&(t.textContent=e)},Un=(n,e,t)=>{n[e]!==t&&(n[e]=t)},Aa=(n,e,t)=>{n.getAttribute(e)!==t&&n.setAttribute(e,t)};function kd(){let n=Te("hud");document.documentElement.style.setProperty("--hud-bottom",n.offsetTop+n.offsetHeight+"px")}function ix(){let n=Bn(),e=E.phase==="playing"&&!bt,t=e&&Ls(E,n.point),i=Ce?Mt.find(a=>Ls(E,a)):Da(E,Mt),s=e&&!t&&(Ce?!!i:i?.type==="door");Un(Te("interaction-hint"),"hidden",!s),s&&wn("interaction-hint",i.open?"[ E ] \u95DC\u9580":"[ E ] \u958B\u9580");let r=sn.reduce((a,c)=>a+ +(c.hp>0),0);wn("round",Ce?wr.name:E.round+"/3"),wn("health",E.hp+" / 100"),Un(Te("health-bar"),"value",E.hp),Aa(Te("health-wrap"),"data-low",String(E.hp<=25)),wn("ammo",E.weapon==="knife"?"\u5315\u9996 \xB7 \u8FD1\u6230":je[E.weapon].label+" \xB7 \u5F48\u5323 "+E.ammo+" / \u5099\u5F48 "+E.reserves[E.weapon]+(E.reload?" \xB7 \u63DB\u5F48 "+E.reload.toFixed(1)+"s":"")+(E.weapon==="sniper"&&E.cooldown>0?" \xB7 \u62C9\u6813 "+E.cooldown.toFixed(1)+"s":"")),wn("timer",Math.ceil(E.time)+"s"),wn("money",E.credits+" \u91D1\u5E63");let o={check:"F \u67E5\u5E33",defuse:"\u6309\u4F4F E \u62C6\u89E3",prepare:"\u6309\u4F4F E \u6574\u7406",handoff:"\u6309\u4F4F E \u4EA4\u63A5",upload:"\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3"}[n.kind];wn("objective",n.point.name+" \xB7 "+o+" \xB7 "+r+" \u500B\u6A5F\u68B0\u4EBA\u6D3B\u52D5\u4E2D"),wn("notice",E.feedback),Un(Te("defuse"),"hidden",!t),t&&(wn("defuse-label",E.defuse>0?o+" \xB7 "+E.defuse.toFixed(1)+" / "+n.seconds+" \u79D2":o),Un(Te("defuse-progress"),"max",n.seconds),Un(Te("defuse-progress"),"value",E.defuse)),Aa(Te("crouch"),"aria-pressed",String(E.crouch));for(let a of G_)Un(a,"disabled",!E.owned.includes(a.dataset.weapon)),Aa(a,"aria-pressed",String(E.weapon===a.dataset.weapon))}function Gd(){return E.phase==="dying"||E.phase==="playing"&&!bt}function Hd(){!xa&&!va&&!Lr&&!document.hidden&&(Us||Gd())&&(xa=requestAnimationFrame(sx))}function Hs(){Us=!0,Hd()}var fa=0,El=1e3/60;function sx(n){if(xa=0,va||Lr||document.hidden)return;let e=Mi?Math.max(0,(n-Mi)/1e3):0;if(Mi=n,Gd()){let o=Math.min(e,.15),a=Math.max(1,Math.ceil(o/.03));for(let l=0;l<a;l++)tx(o/a);e>.15&&E.phase==="playing"&&(E.time=Math.max(0,E.time-(e-.15)));let c=Math.exp(-e*13);for(let l of sn)l.chassisMaterial?.emissive.multiplyScalar(c);Rr=Math.max(0,Rr-e),Fs=Math.max(0,Fs-e),Ir=Ir.filter(l=>(l.life-=e,l.life>0?!0:(vi(l.mesh),!1))),pn.userData.life>0&&(pn.userData.life-=e),pn.visible=pn.userData.life>0,fn.position.z=-.65+(!On&&pn.visible?.05:0),fn.rotation.x=E.reload?-Math.sin(E.reload/je[E.weapon].reload*Math.PI)*.7:E.weapon==="knife"&&E.cooldown>0?-Math.sin(E.cooldown/.6*Math.PI)*1.4:0,fn.position.y=-.32+(On?0:Math.sin(tn*9)*.007)}(Us||n>=_d)&&(ix(),_d=n+80),Aa(document.body,"data-terminal",String(bt)),Un(Te("scope-view"),"hidden",!(mn&&E.weapon==="sniper")),Un(Te("hitmarker"),"hidden",Fs<=0),Un(Te("headshot"),"hidden",Cr<=0),Un(Te("damage").style,"opacity",On?"0":String(Math.min(.65,Rr))),E.phase!=="dying"&&(Dt.position.set(E.x,E.y,E.z),Dt.rotation.set(Bs+Fn,Rn,0,"YXZ"));for(let o of sn)o.meter.visible=o.hp>0,o.meter.visible&&(o.meter.rotation.y=Math.atan2(E.x-o.x,E.z-o.z)-o.mesh.rotation.y);let t=1-Math.pow(.8,e*60);for(let o of Cl)o.group.position.y+=((o.d.open?o.d.h+2:o.d.h/2)-o.group.position.y)*t,o.status.material.color.setHex(o.d.open?8767136:15117669);let i=Bn().point;Tn.station.position.set(i.x,0,i.z);let s=E.verified?8443050:E.time<10?15960688:15578723;Tn.strip.material.color.setHex(s),Tn.lamp.material.color.setHex(s),Tn.stationSign.visible=!E.verified,Tn.verifiedSign.visible=E.verified;let r=mn?E.weapon==="sniper"?28:57:76;Dt.fov!==r&&(Dt.fov=r,Dt.updateProjectionMatrix()),fn.visible=!(mn&&E.weapon==="sniper"),(Us||n>=fa-1)&&(Kt.render(Et,Dt),fa=fa<n-El||Us?n+El:fa+El),Us=!1,Hd()}var yd=0,vd=0,Md=0;function Nr(){if(!Kt)return;let n=ni.clientWidth,e=ni.clientHeight;if(!n||!e)return;let t=Math.min(devicePixelRatio||1,1.35,Math.sqrt(15e5/(n*e)));n===yd&&e===vd&&t===Md||(yd=n,vd=e,Md=t,Kt.setPixelRatio(t),Kt.setSize(n,e,!1),Kt.shadowMap.enabled=n>=900&&matchMedia("(pointer:fine)").matches,Dt.aspect=n/e,Dt.updateProjectionMatrix(),Hs())}function Vd(){va||(va=!0,Tl?.disconnect(),Rl?.disconnect(),yi=[],Gi?.dispose(),Gi=null,cancelAnimationFrame(xa),bd.abort(),ut.clear(),nt?.close().catch(()=>{}),Et?.traverse(n=>{n.geometry?.dispose(),(n.material?Array.isArray(n.material)?n.material:[n.material]:[]).forEach(t=>{t.map?.dispose(),t.dispose()})}),Kt?.dispose(),Kt?.forceContextLoss(),zn())}function Wd(){Vd(),parent!==window?(parent.postMessage({type:"budget-defence-exit"},location.origin),parent.postMessage({type:"website-v1-back"},location.origin)):location.href="../../#play"}try{V_()}catch(n){throw Te("menu").innerHTML='<section class="panel"><h1>3D \u756B\u9762\u672A\u80FD\u555F\u52D5</h1><p>\u53EF\u4EE5\u8F49\u7528\u76F8\u540C\u5B78\u7FD2\u5167\u5BB9\u5605\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002</p><a href="range.html">\u6253\u958B\u7121\u969C\u7919\u7248\u672C</a></section>',n}$e(document,"click",n=>{ks();let e=n.target.closest("[data-action]")?.dataset.action,t=n.target.closest("[data-buy]")?.dataset.buy,i=n.target.closest("[data-weapon]")?.dataset.weapon,s=n.target.closest("[data-answer]")?.dataset.answer;i&&Cd(i),t&&Ql(E,t)&&(E.feedback="\u5DF2\u8CB7 "+Br[t].label+"\uFF0C\u53EA\u6263\u4E00\u6B21\u3002",Vt()),e==="coop"&&E.phase==="menu"&&!window.arcadeTest&&!Ft()&&hd(()=>Dr("rocket-impact"),Dr),e==="begin"&&(Ce=null,E.phase="buy",Ft()&&(E.purchases=["kit"]),Vt()),e==="training"&&!Ft()&&ga("1-verify",!0),e==="missions"&&!Ft()&&(Ma(),Ce=null,E=Wi(),E.phase="missions",Vt()),e==="main-menu"&&(Ce=null,E=Wi(),Vt());let r=n.target.closest("[data-mission]")?.dataset.mission;if(r&&E.phase==="missions"&&ga(r),e==="start"&&q_(),e==="resume"&&Fd(),e==="retry"&&(Ce?ga(Ce.mission.id,Ce.training):(Ma(),_a=!1,E=Wi(),E.phase="buy",Ft()&&(E.purchases=["kit"]),Vt())),e==="next"){if(E.phase!=="roundend"||Ce||Ft())return;E.round===3?E.phase="results":(E.round++,E.phase="buy",E.purchases=[]),Vt()}e==="exit"&&Wd(),s!==void 0&&(Kl(E,Number(s),Pl())?(bt=!1,Te("terminal").hidden=!0,Ce&&Bn().kind==="upload"&&(E.feedback="\u8CC7\u6599\u5DF2\u6838\u5BE6\u3002\u53BB"+Bn().point.name+"\uFF0C\u7559\u55BA\u7BC4\u570D\u5167\u4E0A\u50B3\u3002"),ks(),ni.focus()):E.phase==="playing"&&E.checked&&!E.verified&&(bt=!1,Te("terminal").hidden=!0,E.phase="dead",E.time=0,E.feedback="\u6838\u5BE6\u932F\u8AA4\uFF0C\u88DD\u7F6E\u5DF2\u5F15\u7206\u3002",zn(),Vt())),n.target.id==="terminal-back"&&(bt=!1,Te("terminal").hidden=!0,ni.focus()),(s!==void 0||n.target.id==="terminal-back")&&(Mi=0,Hs())});$e(Te("fullscreen"),"click",Od);$e(Te("settings-open"),"click",Z_);$e(document,"fullscreenchange",()=>{Te("fullscreen").textContent=document.fullscreenElement?"\u9000\u51FA\u5168\u87A2\u5E55 V":"\u5168\u87A2\u5E55 V",Te("fullscreen").setAttribute("aria-pressed",String(!!document.fullscreenElement)),Nr()});for(let n of["sensitivity","ads","volume"])$e(Te("setting-"+n),"input",e=>{Lt[n]=Number(e.target.value),Te(""+n+"-output").textContent=n==="volume"?Math.round(Lt[n]*100)+"%":Lt[n].toFixed(2)+"\xD7",Ud()});for(let n of["invert","reduced"])$e(Te("setting-"+n),"change",e=>{Lt[n]=e.target.checked,Ud()});$e(Te("pause"),"click",Hi);$e(Te("exit"),"click",Wd);$e(Te("mute"),"click",()=>{nn=!nn,Nd(),Te("mute").textContent=nn?"\u266B \u8072\u97F3\uFF1A\u95DC":"\u266B \u8072\u97F3\uFF1A\u958B",nn?nt?.suspend().catch(()=>{}):ks()});$e(document,"change",n=>{n.target.id==="reduce"&&(On=n.target.checked)});$e(Te("reload"),"click",Sa);$e(Te("check"),"click",Bd);$e(Te("jump"),"click",Id);$e(Te("crouch"),"click",()=>{E.phase==="playing"&&!bt&&(Pr=!Pr)});$e(Te("door"),"click",Dd);$e(Te("scope"),"click",Pd);$e(document,"keydown",n=>{if(!(n.target instanceof Element&&n.target.matches("input,select,textarea"))&&!Te("settings-dialog").open){if(["KeyP","Escape"].includes(n.code)){n.repeat||(n.code==="KeyP"&&E.phase==="paused"?Fd():Hi());return}if(n.code==="KeyV"&&!n.repeat){n.preventDefault(),Od();return}E.phase!=="playing"||bt||(["KeyW","KeyA","KeyS","KeyD","Space","KeyE","KeyR","KeyF","KeyX","KeyQ","ArrowLeft","ArrowRight","ShiftLeft"].includes(n.code)&&n.preventDefault(),ut.add(n.code),n.code==="Space"&&!n.repeat&&Id(),n.code==="KeyX"&&!n.repeat&&ba(),n.code==="KeyQ"&&!n.repeat&&Pd(),/^Digit[1-5]$/.test(n.code)&&Cd(["pistol","carbine","sniper","knife","bazooka"][Number(n.code.slice(-1))-1]),n.code==="KeyR"&&!n.repeat&&Sa(),n.code==="KeyF"&&!n.repeat&&Bd(),n.code==="KeyE"&&!n.repeat&&((Ce?E.verified&&Ls(E,Bn().point):Da(E,Mt)?.type==="defuse")?gn=!0:Dd()||(gn=!0)))}});$e(document,"keyup",n=>{ut.delete(n.code),n.code==="KeyE"&&(gn=!1)});function rx(n,e){let t=Ad(n,e,mn,Lt);Rn-=t.yaw,Bs=Math.max(-1.2,Math.min(1.2,Bs-t.pitch))}var Ll=Kt.domElement,ox=()=>E.phase==="playing"&&!bt&&!Te("settings-dialog").open;$e(Ll,"webglcontextlost",n=>{n.preventDefault(),Lr=!0,zn(),ut.clear(),Hi(),wn("view-status","3D \u756B\u9762\u66AB\u505C\u3002\u7B49\u5019\u700F\u89BD\u5668\u6062\u5FA9\uFF0C\u4EA6\u53EF\u4F7F\u7528\u4E0D\u9650\u6642\u6A19\u9776\u7248\u3002")});$e(Ll,"webglcontextrestored",()=>{Lr=!1,Mi=0,wn("view-status","3D \u756B\u9762\u5DF2\u6062\u5FA9\u3002\u6309\u300C\u7E7C\u7E8C\u4EFB\u52D9\u300D\u8FD4\u56DE\u3002"),Hs()});Ld=sa({on:$e,canvas:Ll,active:ox,look:rx,fire(n){Pn=n,n&&(ks(),ba())},clearInput(){ut.clear(),Pn=gn=mn=!1}});document.querySelectorAll("[data-hold]").forEach(n=>{let e=n.dataset.hold;$e(n,"pointerdown",t=>{E.phase!=="playing"||bt||(t.preventDefault(),n.setPointerCapture(t.pointerId),e==="fire"?(Pn=!0,ba()):e==="defuse"?gn=!0:ut.add(e))});for(let t of["pointerup","pointercancel","lostpointercapture"])$e(n,t,()=>{ut.delete(e),e==="fire"&&(Pn=!1),e==="defuse"&&(gn=!1)})});$e(document,"visibilitychange",()=>{document.hidden?(Hi(),Mi=0):Hs()});$e(window,"blur",()=>{Hi()});$e(window,"resize",Nr);$e(window,"pagehide",Vd);$e(window,"site-language-change",()=>{Et.traverse(n=>n.userData.localize?.()),Hs()});Tl=new ResizeObserver(kd);Tl.observe(Te("hud"));Rl=new ResizeObserver(Nr);Rl.observe(ni);kd();window.fpsSnapshot=()=>({...E,recoilPitch:Fn,score:Gr(E),enemies:sn.map(n=>({x:n.x,z:n.z,hp:n.hp,maxHp:n.maxHp,ammo:n.ammo,reload:n.reload,burst:n.burst,dying:n.dying})),bullets:Os.length,terminalOpen:bt,squad:{order:zs,members:ii.map(({id:n,x:e,z:t})=>({id:n,x:e,z:t}))},audio:nt?.state||"not-started",walls:si,doors:Mt.map(n=>({...n})),view:{yaw:Rn,pitch:Bs,scoped:mn,locked:!!document.pointerLockElement},settings:{...Lt},fullscreen:!!document.fullscreenElement,map:wr?.name,mission:Ce?{id:Ce.mission.id,stage:Ce.stage,target:Bn()}:null,graphics:{court:document.body.dataset.court,calls:Kt?.info.render.calls||0,triangles:Kt?.info.render.triangles||0},posture:{crouch:E.crouch,jump:E.jumpY}});xd?ga(xd[1]):Vt();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
