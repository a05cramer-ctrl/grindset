(()=>{var Sd=0,kh=1,wd=2;var Yu=1,Bc=2,ii=3,Ri=0,cn=1,si=2,Ti=0,Ds=1,zh=2,Hh=3,Vh=4,Ed=5,qi=100,Td=101,Ad=102,Rd=103,Cd=104,Id=200,Pd=201,Ld=202,Dd=203,dl=204,pl=205,Ud=206,Nd=207,Fd=208,Od=209,Bd=210,kd=211,zd=212,Hd=213,Vd=214,ml=0,gl=1,_l=2,Os=3,xl=4,vl=5,yl=6,Ml=7,kc=0,Gd=1,Wd=2,Ai=0,Xd=1,$d=2,Yd=3,qd=4,Zd=5,Jd=6,Kd=7;var qu=300,Bs=301,ks=302,bl=303,Sl=304,ua=306,wl=1e3,Ki=1001,El=1002,Pn=1003,jd=1004;var so=1005;var Hn=1006,Da=1007;var ji=1008;var li=1009,Zu=1010,Ju=1011,xr=1012,zc=1013,Qi=1014,ri=1015,Dr=1016,Hc=1017,Vc=1018,zs=1020,Ku=35902,ju=1021,Qu=1022,In=1023,tf=1024,ef=1025,Us=1026,Hs=1027,nf=1028,Gc=1029,sf=1030,Wc=1031;var Xc=1033,Io=33776,Po=33777,Lo=33778,Do=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Dl=37808,Ul=37809,Nl=37810,Fl=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,$l=37821,Uo=36492,Yl=36494,ql=36495,rf=36283,Zl=36284,Jl=36285,Kl=36286;var No=2300,jl=2301,Ua=2302,Gh=2400,Wh=2401,Xh=2402;var Qd=3200,tp=3201;var of=0,ep=1,Ei="",qe="srgb",Xs="srgb-linear",fa="linear",de="srgb";var _s=7680;var $h=519,np=512,ip=513,sp=514,af=515,rp=516,op=517,ap=518,lp=519,Yh=35044;var qh="300 es",oi=2e3,Fo=2001,Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Na=Math.PI/180,Ql=180/Math.PI;function $s(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function Ze(n,t,e){return Math.max(t,Math.min(e,n))}function cp(n,t){return(n%t+t)%t}function Fa(n,t,e){return(1-e)*n+e*t}function ar(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ct=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],w=s[1],b=s[4],x=s[7],U=s[2],R=s[5],I=s[8];return r[0]=o*_+a*w+l*U,r[3]=o*m+a*b+l*R,r[6]=o*p+a*x+l*I,r[1]=c*_+h*w+u*U,r[4]=c*m+h*b+u*R,r[7]=c*p+h*x+u*I,r[2]=f*_+d*w+g*U,r[5]=f*m+d*b+g*R,r[8]=f*p+d*x+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Oa=new $t;function lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hp(){let n=Oo("canvas");return n.style.display="block",n}var Zh={};function fr(n){n in Zh||(Zh[n]=!0,console.warn(n))}function up(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function fp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=ai(n.r),n.g=ai(n.g),n.b=ai(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Ns(n.r),n.g=Ns(n.g),n.b=Ns(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ei?fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Jh=[.64,.33,.3,.6,.15,.06],Kh=[.2126,.7152,.0722],jh=[.3127,.329],Qh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Xs]:{primaries:Jh,whitePoint:jh,transfer:fa,toXYZ:Qh,fromXYZ:tu,luminanceCoefficients:Kh,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:Jh,whitePoint:jh,transfer:de,toXYZ:Qh,fromXYZ:tu,luminanceCoefficients:Kh,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});var xs,tc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Oo("canvas")),xs.width=t.width,xs.height=t.height;let i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ai(e[i]/255)*255):e[i]=ai(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,Bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mp=0,gn=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ki,s=Ki,r=Hn,o=ji,a=In,l=li,c=n.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=$s(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wl:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wl:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=qu;gn.DEFAULT_ANISOTROPY=1;var Ie=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,x=(d+1)/2,U=(p+1)/2,R=(h+f)/4,I=(u+_)/4,P=(g+m)/4;return b>x&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=I/i):x>U?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=P/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=I/r,s=P/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ec=class extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends ec{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ko=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nc=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let U=Math.sqrt(b),R=Math.atan2(U,p*w);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}let x=a*w;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new L,eu=new Ii,ts=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),oo.subVectors(this.max,lr),vs.subVectors(t.a,lr),ys.subVectors(t.b,lr),Ms.subVectors(t.c,lr),vi.subVectors(ys,vs),yi.subVectors(Ms,ys),Hi.subVectors(vs,Ms);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!za(e,vs,ys,Ms,oo)||(e=[1,0,0,0,1,0,0,0,1],!za(e,vs,ys,Ms,oo))?!1:(ao.crossVectors(vi,yi),e=[ao.x,ao.y,ao.z],za(e,vs,ys,Ms,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,ro=new ts,vs=new L,ys=new L,Ms=new L,vi=new L,yi=new L,Hi=new L,lr=new L,oo=new L,ao=new L,Vi=new L;function za(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Vi.fromArray(n,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gp=new ts,cr=new L,Ha=new L,vr=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Ha)),this.expandByPoint(cr.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new L,Va=new L,lo=new L,Mi=new L,Ga=new L,co=new L,Wa=new L,zo=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Va.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Va);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=Mi.dot(this.direction),l=-Mi.dot(lo),c=Mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Va).addScaledVector(lo,f),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){Ga.subVectors(e,t),co.subVectors(i,t),Wa.crossVectors(Ga,co);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);let l=a*this.direction.dot(co.crossVectors(Mi,co));if(l<0)return null;let c=a*this.direction.dot(Ga.cross(Mi));if(c<0||l+c>o)return null;let h=-a*Mi.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,i){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),bi.crossVectors(i,pn),bi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),bi.crossVectors(i,pn)),bi.normalize(),ho.crossVectors(pn,bi),s[0]=bi.x,s[4]=ho.x,s[8]=pn.x,s[1]=bi.y,s[5]=ho.y,s[9]=pn.y,s[2]=bi.z,s[6]=ho.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],b=i[7],x=i[11],U=i[15],R=s[0],I=s[4],P=s[8],S=s[12],y=s[1],C=s[5],V=s[9],B=s[13],G=s[2],J=s[6],W=s[10],it=s[14],X=s[3],ht=s[7],xt=s[11],Tt=s[15];return r[0]=o*R+a*y+l*G+c*X,r[4]=o*I+a*C+l*J+c*ht,r[8]=o*P+a*V+l*W+c*xt,r[12]=o*S+a*B+l*it+c*Tt,r[1]=h*R+u*y+f*G+d*X,r[5]=h*I+u*C+f*J+d*ht,r[9]=h*P+u*V+f*W+d*xt,r[13]=h*S+u*B+f*it+d*Tt,r[2]=g*R+_*y+m*G+p*X,r[6]=g*I+_*C+m*J+p*ht,r[10]=g*P+_*V+m*W+p*xt,r[14]=g*S+_*B+m*it+p*Tt,r[3]=w*R+b*y+x*G+U*X,r[7]=w*I+b*C+x*J+U*ht,r[11]=w*P+b*V+x*W+U*xt,r[15]=w*S+b*B+x*it+U*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,b=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,U=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,R=e*w+i*b+s*x+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=w*I,t[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*I,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*I,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*I,t[4]=b*I,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*I,t[8]=x*I,t[9]=(g*u*r-h*_*r-g*i*d+e*_*d+h*i*p-e*u*p)*I,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*I,t[12]=U*I,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*I,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=l*c,b=l*h,x=l*u,U=i.x,R=i.y,I=i.z;return s[0]=(1-(_+p))*U,s[1]=(d+x)*U,s[2]=(g-b)*U,s[3]=0,s[4]=(d-x)*R,s[5]=(1-(f+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+b)*I,s[9]=(m-w)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/o,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=oi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,g;if(a===oi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=oi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,g,_;if(a===oi)g=(o+r)*u,_=-2*u;else if(a===Fo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},bs=new L,An=new ve,_p=new L(0,0,0),xp=new L(1,1,1),bi=new L,ho=new L,pn=new L,nu=new ve,iu=new Ii,Vn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,su=new L,Ss=new Ii,ti=new ve,uo=new L,hr=new L,yp=new L,Mp=new Ii,ru=new L(1,0,0),ou=new L(0,1,0),au=new L(0,0,1),lu={type:"added"},bp={type:"removed"},ws={type:"childadded",child:null},Xa={type:"childremoved",child:null},sn=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new Vn,i=new Ii,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?uo.copy(t):uo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(hr,uo,this.up):ti.lookAt(uo,hr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ti),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};sn.DEFAULT_UP=new L(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new L,ei=new L,$a=new L,ni=new L,Es=new L,Ts=new L,cu=new L,Ya=new L,qa=new L,Za=new L,Ja=new Ie,Ka=new Ie,ja=new Ie,Zi=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Rn.subVectors(s,e),ei.subVectors(i,e),$a.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ei),l=Rn.dot($a),c=ei.dot(ei),h=ei.dot($a),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ja.setScalar(0),Ka.setScalar(0),ja.setScalar(0),Ja.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,i),ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ja,r.x),o.addScaledVector(Ka,r.y),o.addScaledVector(ja,r.z),o}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),ei.subVectors(t,e),Rn.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,i),Ts.subVectors(r,i),Ya.subVectors(t,i);let l=Es.dot(Ya),c=Ts.dot(Ya);if(l<=0&&c<=0)return e.copy(i);qa.subVectors(t,s);let h=Es.dot(qa),u=Ts.dot(qa);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Es,o);Za.subVectors(t,r);let d=Es.dot(Za),g=Ts.dot(Za);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ts,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return cu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(cu,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=cp(t,1),e=Ze(e,0,1),i=Ze(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Qa(o,r,t+1/3),this.g=Qa(o,r,t),this.b=Qa(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=cf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ie.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ze(Ye.r*255,0,255))*65536+Math.round(Ze(Ye.g*255,0,255))*256+Math.round(Ze(Ye.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ye.copy(this),e);let i=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=qe){ie.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,i=Ye.g,s=Ye.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(fo);let i=Fa(Si.h,fo.h,e),s=Fa(Si.s,fo.s,e),r=Fa(Si.l,fo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Jt;Jt.NAMES=cf;var Sp=0,es=class extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=$s(),this.name="",this.blending=Ds,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ns=class extends es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new L,po=new ct,hn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ar(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yh&&(t.usage=this.usage),t}};var Ho=class extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vo=class extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}},wp=0,yn=new ve,tl=new sn,As=new L,mn=new ts,ur=new ts,ze=new L,Ge=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?Vo:Ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(mn.min,ur.min),mn.expandByPoint(ze),ze.addVectors(mn.max,ur.max),mn.expandByPoint(ze)):(mn.expandByPoint(ur.min),mn.expandByPoint(ur.max))}mn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(t,c),ze.add(As)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new L,l[P]=new L;let c=new L,h=new L,u=new L,f=new ct,d=new ct,g=new ct,_=new L,m=new L;function p(P,S,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[y].add(_),l[P].add(m),l[S].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){let y=w[P],C=y.start,V=y.count;for(let B=C,G=C+V;B<G;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let b=new L,x=new L,U=new L,R=new L;function I(P){U.fromBufferAttribute(s,P),R.copy(U);let S=a[P];b.copy(S),b.sub(U.multiplyScalar(U.dot(S))).normalize(),x.crossVectors(R,S);let C=x.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,C)}for(let P=0,S=w.length;P<S;++P){let y=w[P],C=y.start,V=y.count;for(let B=C,G=C+V;B<G;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new hn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new ve,Gi=new zo,mo=new vr,uu=new L,go=new L,_o=new L,xo=new L,el=new L,vo=new L,fu=new L,yo=new L,Pe=class extends sn{constructor(t=new Ge,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(el.fromBufferAttribute(u,t),o?vo.addScaledVector(el,h):vo.addScaledVector(el.sub(e),h))}e.add(vo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(mo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(mo,uu)===null||Gi.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(hu.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(hu),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,U=b;x<U;x+=3){let R=a.getX(x),I=a.getX(x+1),P=a.getX(x+2);s=Mo(this,p,t,i,c,h,u,R,I,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Mo(this,o,t,i,c,h,u,w,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=w,U=b;x<U;x+=3){let R=x,I=x+1,P=x+2;s=Mo(this,p,t,i,c,h,u,R,I,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let w=m,b=m+1,x=m+2;s=Mo(this,o,t,i,c,h,u,w,b,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ep(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ri,a),l===null)return null;yo.copy(a),yo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:n}}function Mo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,go),n.getVertexPosition(l,_o),n.getVertexPosition(c,xo);let h=Ep(n,t,e,i,go,_o,xo,fu);if(h){let u=new L;Zi.getBarycoord(fu,go,_o,xo,u),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Zi.getNormal(go,_o,xo,f.normal),h.face=f,h.barycoord=u}return h}var hi=class n extends Ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(_,m,p,w,b,x,U,R,I,P,S){let y=x/I,C=U/P,V=x/2,B=U/2,G=R/2,J=I+1,W=P+1,it=0,X=0,ht=new L;for(let xt=0;xt<W;xt++){let Tt=xt*C-B;for(let Gt=0;Gt<J;Gt++){let le=Gt*y-V;ht[_]=le*w,ht[m]=Tt*b,ht[p]=G,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=R>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Gt/I),u.push(1-xt/P),it+=1}}for(let xt=0;xt<P;xt++)for(let Tt=0;Tt<I;Tt++){let Gt=f+Tt+J*xt,le=f+Tt+J*(xt+1),Z=f+(Tt+1)+J*(xt+1),rt=f+(Tt+1)+J*xt;l.push(Gt,le,rt),l.push(le,Z,rt),X+=6}a.addGroup(d,X,S),d+=X,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){let t={};for(let e=0;e<n.length;e++){let i=Vs(n[e]);for(let s in i)t[s]=i[s]}return t}function Tp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Ap={clone:Vs,merge:nn},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Go=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new L,du=new ct,pu=new ct,Je=class extends Go{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ql*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,du,pu),e.subVectors(pu,du)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Na*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Rs=-90,Cs=1,ic=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new Je(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let o=new Je(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let a=new Je(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let l=new Je(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new Je(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wo=class extends gn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Bs,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sc=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ti});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Hn),new ic(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},nl=new L,Ip=new L,Pp=new $t,Cn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=nl.subVectors(i,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pp.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new vr,bo=new L,Mr=class{constructor(t=new Cn,e=new Cn,i=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],b=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,m-d,x-p).normalize(),i[1].setComponents(l+r,f+c,m+d,x+p).normalize(),i[2].setComponents(l+o,f+h,m+g,x+w).normalize(),i[3].setComponents(l-o,f-h,m-g,x-w).normalize(),i[4].setComponents(l-a,f-u,m-_,x-b).normalize(),e===oi)i[5].setComponents(l+a,f+u,m+_,x+b).normalize();else if(e===Fo)i[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var is=class n extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let w=p*f-o;for(let b=0;b<c;b++){let x=b*u-r;g.push(x,-w,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let b=w+c*p,x=w+c*(p+1),U=w+1+c*(p+1),R=w+1+c*p;d.push(b,x,R),d.push(x,U,R)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$p=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	float dispersion;
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
}`,Lm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
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
	#include <morphinstance_vertex>
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
}`,Hg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Yg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
}`,Zg=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jg=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Kg=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Qg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,e0=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,n0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,i0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,s0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,r0=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,o0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,a0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,u0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qt={alphahash_fragment:Dp,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Fp,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:kp,aomap_pars_fragment:zp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:$p,bumpmap_pars_fragment:Yp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Kp,color_fragment:jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:fm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Em,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:xm,fog_pars_fragment:vm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Mm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Sm,lights_pars_begin:wm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Im,lights_physical_pars_fragment:Pm,lights_fragment_begin:Lm,lights_fragment_maps:Dm,lights_fragment_end:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Bm,map_fragment:km,map_pars_fragment:zm,map_particle_fragment:Hm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:$m,morphnormal_vertex:Ym,morphtarget_pars_vertex:qm,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:Km,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:tg,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:fg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:_g,skinbase_vertex:xg,skinning_pars_vertex:vg,skinning_vertex:yg,skinnormal_vertex:Mg,specularmap_fragment:bg,specularmap_pars_fragment:Sg,tonemapping_fragment:wg,tonemapping_pars_fragment:Eg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Ig,worldpos_vertex:Pg,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ug,backgroundCube_frag:Ng,cube_vert:Fg,cube_frag:Og,depth_vert:Bg,depth_frag:kg,distanceRGBA_vert:zg,distanceRGBA_frag:Hg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:$g,meshbasic_frag:Yg,meshlambert_vert:qg,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:Kg,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},ut={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},zn={basic:{uniforms:nn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:nn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:nn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:nn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:nn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:nn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:nn([ut.points,ut.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:nn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:nn([ut.common,ut.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:nn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:nn([ut.sprite,ut.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:nn([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:nn([ut.lights,ut.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var So={r:0,b:0,g:0},Xi=new Vn,f0=new ve;function d0(n,t,e,i,s,r,o){let a=new Jt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function _(w){let b=!1,x=g(w);x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,b){let x=g(b);x&&(x.isCubeTexture||x.mapping===ua)?(h===void 0&&(h=new Pe(new hi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Vs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(b.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(Xi)),h.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(u!==x||f!==x.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pe(new is(2,2),new Gn({name:"BackgroundMaterial",uniforms:Vs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(So,hf(n)),i.buffers.color.setClear(So.r,So.g,So.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:m}}function p0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(y,C,V,B,G){let J=!1,W=u(B,V,C);r!==W&&(r=W,c(r.object)),J=d(y,B,V,G),J&&g(y,B,V,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(y,C,V,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,C,V){let B=V.wireframe===!0,G=i[y.id];G===void 0&&(G={},i[y.id]=G);let J=G[C.id];J===void 0&&(J={},G[C.id]=J);let W=J[B];return W===void 0&&(W=f(l()),J[B]=W),W}function f(y){let C=[],V=[],B=[];for(let G=0;G<e;G++)C[G]=0,V[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,C,V,B){let G=r.attributes,J=C.attributes,W=0,it=V.getAttributes();for(let X in it)if(it[X].location>=0){let xt=G[X],Tt=J[X];if(Tt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),xt===void 0||xt.attribute!==Tt||Tt&&xt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(y,C,V,B){let G={},J=C.attributes,W=0,it=V.getAttributes();for(let X in it)if(it[X].location>=0){let xt=J[X];xt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor));let Tt={};Tt.attribute=xt,xt&&xt.data&&(Tt.data=xt.data),G[X]=Tt,W++}r.attributes=G,r.attributesNum=W,r.index=B}function _(){let y=r.newAttributes;for(let C=0,V=y.length;C<V;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let V=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;V[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),G[y]!==C&&(n.vertexAttribDivisor(y,C),G[y]=C)}function w(){let y=r.newAttributes,C=r.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==y[V]&&(n.disableVertexAttribArray(V),C[V]=0)}function b(y,C,V,B,G,J,W){W===!0?n.vertexAttribIPointer(y,C,V,G,J):n.vertexAttribPointer(y,C,V,B,G,J)}function x(y,C,V,B){_();let G=B.attributes,J=V.getAttributes(),W=C.defaultAttributeValues;for(let it in J){let X=J[it];if(X.location>=0){let ht=G[it];if(ht===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let xt=ht.normalized,Tt=ht.itemSize,Gt=t.get(ht);if(Gt===void 0)continue;let le=Gt.buffer,Z=Gt.type,rt=Gt.bytesPerElement,At=Z===n.INT||Z===n.UNSIGNED_INT||ht.gpuType===zc;if(ht.isInterleavedBufferAttribute){let at=ht.data,Nt=at.stride,Ht=ht.offset;if(at.isInstancedInterleavedBuffer){for(let Bt=0;Bt<X.locationSize;Bt++)p(X.location+Bt,at.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Bt=0;Bt<X.locationSize;Bt++)m(X.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Bt=0;Bt<X.locationSize;Bt++)b(X.location+Bt,Tt/X.locationSize,Z,xt,Nt*rt,(Ht+Tt/X.locationSize*Bt)*rt,At)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)p(X.location+at,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<X.locationSize;at++)m(X.location+at);n.bindBuffer(n.ARRAY_BUFFER,le);for(let at=0;at<X.locationSize;at++)b(X.location+at,Tt/X.locationSize,Z,xt,Tt*rt,Tt/X.locationSize*at*rt,At)}}else if(W!==void 0){let xt=W[it];if(xt!==void 0)switch(xt.length){case 2:n.vertexAttrib2fv(X.location,xt);break;case 3:n.vertexAttrib3fv(X.location,xt);break;case 4:n.vertexAttrib4fv(X.location,xt);break;default:n.vertexAttrib1fv(X.location,xt)}}}}w()}function U(){P();for(let y in i){let C=i[y];for(let V in C){let B=C[V];for(let G in B)h(B[G].object),delete B[G];delete C[V]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;let C=i[y.id];for(let V in C){let B=C[V];for(let G in B)h(B[G].object),delete B[G];delete C[V]}delete i[y.id]}function I(y){for(let C in i){let V=i[C];if(V[y.id]===void 0)continue;let B=V[y.id];for(let G in B)h(B[G].object),delete B[G];delete V[y.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function m0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function g0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==In&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===Dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==li&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ri&&!P)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:U,maxSamples:R}}function _0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Cn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:i,b=w*4,x=p.clippingState||null;l.value=x,x=h(g,f,b,d);for(let U=0;U!==b;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==_;++b,x+=4)o.copy(u[b]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function x0(n){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=Bs:a===Sl&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===bl||a===Sl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Xo=class extends Go{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ps=4,mu=[.125,.215,.35,.446,.526,.582],Ji=20,il=new Xo,gu=new Jt,sl=null,rl=0,ol=0,al=!1,Yi=(1+Math.sqrt(5))/2,Is=1/Yi,_u=[new L(-Yi,Is,0),new L(Yi,Is,0),new L(-Is,0,Yi),new L(Is,0,Yi),new L(0,Yi,-Is),new L(0,Yi,Is),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],$o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Dr,format:In,colorSpace:Xs,depthBuffer:!1},s=xu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,i,s){let a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gu),h.toneMapping=Ai,h.autoClear=!1;let d=new ns({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Pe(new hi,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(gu),_=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;wo(s,w*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Bs||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,il)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(s-r-1)%_u.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],w=0;for(let I=0;I<Ji;++I){let P=I/_,S=Math.exp(-P*P/2);p.push(S),I===0?w+=S:I<m&&(w+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let x=this._sizeLods[s],U=3*x*(s>b-Ps?s-b+Ps:0),R=4*(this._cubeSize-x);wo(e,U,R,3*x,2*x),l.setRenderTarget(e),l.render(u,il)}};function v0(n){let t=[],e=[],i=[],s=n,r=n-Ps+1+mu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ps?l=mu[o-n+Ps-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),b=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let R=0;R<d;R++){let I=R%3*2/3-1,P=R>2?0:-1,S=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];w.set(S,_*g*R),b.set(f,m*g*R);let y=[R,R,R,R,R,R];x.set(y,p*g*R)}let U=new Ge;U.setAttribute("position",new hn(w,_)),U.setAttribute("uv",new hn(b,m)),U.setAttribute("faceIndex",new hn(x,p)),t.push(U),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xu(n,t,e){let i=new ci(n,t,e);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function y0(n,t,e){let i=new Float32Array(Ji),s=new L(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function yu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function M0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===bl||l===Sl,h=l===Bs||l===ks;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $o(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new $o(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function b0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S0(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let w=d.array;_=d.version;for(let b=0,x=w.length;b<x;b+=3){let U=w[b+0],R=w[b+1],I=w[b+2];f.push(U,R,R,I,I,U)}}else if(g!==void 0){let w=g.array;_=g.version;for(let b=0,x=w.length/3-1;b<x;b+=3){let U=b+0,R=b+1,I=b+2;f.push(U,R,R,I,I,U)}}else return;let m=new(lf(f)?Vo:Ho)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function w0(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function T0(n,t,e){let i=new WeakMap,s=new Ie;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*U*4*u),I=new ko(R,x,U,u);I.type=ri,I.needsUpdate=!0;let P=b*4;for(let y=0;y<u;y++){let C=m[y],V=p[y],B=w[y],G=x*U*4*y;for(let J=0;J<C.count;J++){let W=J*P;d===!0&&(s.fromBufferAttribute(C,J),R[G+W+0]=s.x,R[G+W+1]=s.y,R[G+W+2]=s.z,R[G+W+3]=0),g===!0&&(s.fromBufferAttribute(V,J),R[G+W+4]=s.x,R[G+W+5]=s.y,R[G+W+6]=s.z,R[G+W+7]=0),_===!0&&(s.fromBufferAttribute(B,J),R[G+W+8]=s.x,R[G+W+9]=s.y,R[G+W+10]=s.z,R[G+W+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new ct(x,U)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function A0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Yo=class extends gn{constructor(t,e,i,s,r,o,a,l,c,h=Us){if(h!==Us&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Us&&(i=Qi),i===void 0&&h===Hs&&(i=zs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ff=new gn,Mu=new Yo(1,1),df=new ko,pf=new nc,mf=new Wo,bu=[],Su=[],wu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function Ys(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function da(n,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function R0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function C0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function L0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),Oe(e,i)}}function D0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Oe(e,i)}}function U0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),Oe(e,i)}}function N0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function O0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function k0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function H0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function G0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mu.compareFunction=af,r=Mu):r=ff,e.setTexture2D(t||r,s)}function W0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pf,s)}function X0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||mf,s)}function $0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||df,s)}function Y0(n){switch(n){case 5126:return R0;case 35664:return C0;case 35665:return I0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return z0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return $0}}function q0(n,t){n.uniform1fv(this.addr,t)}function Z0(n,t){let e=Ys(t,this.size,2);n.uniform2fv(this.addr,e)}function J0(n,t){let e=Ys(t,this.size,3);n.uniform3fv(this.addr,e)}function K0(n,t){let e=Ys(t,this.size,4);n.uniform4fv(this.addr,e)}function j0(n,t){let e=Ys(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Q0(n,t){let e=Ys(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function t_(n,t){let e=Ys(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function e_(n,t){n.uniform1iv(this.addr,t)}function n_(n,t){n.uniform2iv(this.addr,t)}function i_(n,t){n.uniform3iv(this.addr,t)}function s_(n,t){n.uniform4iv(this.addr,t)}function r_(n,t){n.uniform1uiv(this.addr,t)}function o_(n,t){n.uniform2uiv(this.addr,t)}function a_(n,t){n.uniform3uiv(this.addr,t)}function l_(n,t){n.uniform4uiv(this.addr,t)}function c_(n,t,e){let i=this.cache,s=t.length,r=da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ff,r[o])}function h_(n,t,e){let i=this.cache,s=t.length,r=da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pf,r[o])}function u_(n,t,e){let i=this.cache,s=t.length,r=da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mf,r[o])}function f_(n,t,e){let i=this.cache,s=t.length,r=da(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function d_(n){switch(n){case 5126:return q0;case 35664:return Z0;case 35665:return J0;case 35666:return K0;case 35674:return j0;case 35675:return Q0;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}var rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}},oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}},ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ll=/(\w+)(\])?(\[|\.)?/g;function Au(n,t){n.seq.push(t),n.map[t.id]=t}function p_(n,t,e){let i=n.name,s=i.length;for(ll.lastIndex=0;;){let r=ll.exec(i),o=ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Au(e,c===void 0?new rc(a,n,t):new oc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ac(a),Au(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);p_(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Ru(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var m_=37297,g_=0;function __(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Cu=new $t;function x_(n){ie._getMatrix(Cu,ie.workingColorSpace,n);let t=`mat3( ${Cu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case fa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Iu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+__(n.getShaderSource(t),o)}else return s}function v_(n,t){let e=x_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function y_(n,t){let e;switch(t){case Xd:e="Linear";break;case $d:e="Reinhard";break;case Yd:e="Cineon";break;case qd:e="ACESFilmic";break;case Jd:e="AgX";break;case Kd:e="Neutral";break;case Zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Eo=new L;function M_(){ie.getLuminanceCoefficients(Eo);let n=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function S_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function w_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function dr(n){return n!==""}function Pu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(E_,A_)}var T_=new Map;function A_(n,t){let e=qt[t];if(e===void 0){let i=T_.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(R_,C_)}function C_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function I_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case ks:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ks&&(t="ENVMAP_MODE_REFRACTION"),t}function D_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Gd:t="ENVMAP_BLENDING_MIX";break;case Wd:t="ENVMAP_BLENDING_ADD";break}return t}function U_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function N_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=I_(e),c=P_(e),h=L_(e),u=D_(e),f=U_(e),d=b_(e),g=S_(r),_=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=lc(o),o=Pu(o,e),o=Lu(o,e),a=lc(a),a=Pu(a,e),a=Lu(a,e),o=Du(o),a=Du(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+o,x=w+p+a,U=Ru(s,s.VERTEX_SHADER,b),R=Ru(s,s.FRAGMENT_SHADER,x);s.attachShader(_,U),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(C){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(U).trim(),G=s.getShaderInfoLog(R).trim(),J=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,R);else{let it=Iu(s,U,"vertex"),X=Iu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+it+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||G==="")&&(W=!1);W&&(C.diagnostics={runnable:J,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(U),s.deleteShader(R),P=new Fs(s,_),S=w_(s,_)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,m_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}var F_=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new hc(t),e.set(t,i)),i}},hc=class{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}};function O_(n,t,e,i,s,r,o){let a=new yr,l=new cc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,V,B){let G=V.fog,J=B.geometry,W=S.isMeshStandardMaterial?V.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),X=it&&it.mapping===ua?it.image.height:null,ht=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let xt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tt=xt!==void 0?xt.length:0,Gt=0;J.morphAttributes.position!==void 0&&(Gt=1),J.morphAttributes.normal!==void 0&&(Gt=2),J.morphAttributes.color!==void 0&&(Gt=3);let le,Z,rt,At;if(ht){let fe=zn[ht];le=fe.vertexShader,Z=fe.fragmentShader}else le=S.vertexShader,Z=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),At=l.getFragmentShaderID(S);let at=n.getRenderTarget(),Nt=n.state.buffers.depth.getReversed(),Ht=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,ne=!!S.map,j=!!S.matcap,st=!!it,A=!!S.aoMap,Lt=!!S.lightMap,tt=!!S.bumpMap,St=!!S.normalMap,lt=!!S.displacementMap,Ft=!!S.emissiveMap,Mt=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,Y=S.dispersion>0,Q=S.iridescence>0,q=S.sheen>0,Rt=S.transmission>0,dt=v&&!!S.anisotropyMap,bt=O&&!!S.clearcoatMap,Qt=O&&!!S.clearcoatNormalMap,nt=O&&!!S.clearcoatRoughnessMap,wt=Q&&!!S.iridescenceMap,Ot=Q&&!!S.iridescenceThicknessMap,kt=q&&!!S.sheenColorMap,Et=q&&!!S.sheenRoughnessMap,ee=!!S.specularMap,Yt=!!S.specularColorMap,_e=!!S.specularIntensityMap,D=Rt&&!!S.transmissionMap,pt=Rt&&!!S.thicknessMap,$=!!S.gradientMap,K=!!S.alphaMap,_t=S.alphaTest>0,mt=!!S.alphaHash,Wt=!!S.extensions,Ce=Ai;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ce=n.toneMapping);let Xe={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:Z,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&B.instanceColor!==null,instancingMorph:Ht&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Xs,alphaToCoverage:!!S.alphaToCoverage,map:ne,matcap:j,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:X,aoMap:A,lightMap:Lt,bumpMap:tt,normalMap:St,displacementMap:f&&lt,emissiveMap:Ft,normalMapObjectSpace:St&&S.normalMapType===ep,normalMapTangentSpace:St&&S.normalMapType===of,metalnessMap:Mt,roughnessMap:E,anisotropy:v,anisotropyMap:dt,clearcoat:O,clearcoatMap:bt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:Q,iridescenceMap:wt,iridescenceThicknessMap:Ot,sheen:q,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:ee,specularColorMap:Yt,specularIntensityMap:_e,transmission:Rt,transmissionMap:D,thicknessMap:pt,gradientMap:$,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:_t,alphaHash:mt,combine:S.combine,mapUv:ne&&_(S.map.channel),aoMapUv:A&&_(S.aoMap.channel),lightMapUv:Lt&&_(S.lightMap.channel),bumpMapUv:tt&&_(S.bumpMap.channel),normalMapUv:St&&_(S.normalMap.channel),displacementMapUv:lt&&_(S.displacementMap.channel),emissiveMapUv:Ft&&_(S.emissiveMap.channel),metalnessMapUv:Mt&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(S.sheenRoughnessMap.channel),specularMapUv:ee&&_(S.specularMap.channel),specularColorMapUv:Yt&&_(S.specularColorMap.channel),specularIntensityMapUv:_e&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(St||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(ne||K),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:Ft&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&S.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(y,S),b(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function w(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=g[S.type],C;if(y){let V=zn[y];C=Ap.clone(V.uniforms)}else C=S.uniforms;return C}function U(S,y){let C;for(let V=0,B=h.length;V<B;V++){let G=h[V];if(G.cacheKey===y){C=G,++C.usedTimes;break}}return C===void 0&&(C=new N_(n,y,S,r),h.push(C)),C}function R(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:P}}function B_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function k_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Fu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||k_),i.length>1&&i.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function z_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Fu,n.set(i,[o])):s>=r.length?(o=new Fu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function H_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Jt};break;case"SpotLight":e={position:new L,direction:new L,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function V_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var G_=0;function W_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function X_(n){let t=new H_,e=V_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new ve,o=new ve;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,b=0,x=0,U=0,R=0,I=0;c.sort(W_);for(let S=0,y=c.length;S<y;S++){let C=c[S],V=C.color,B=C.intensity,G=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*B,u+=V.g*B,f+=V.b*B;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],B);I++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,X=e.get(C);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=C.shadow.matrix,w++}i.directional[d]=W,d++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(V).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[_]=W;let it=C.shadow;if(C.map&&(i.spotLightMap[U]=C.map,U++,it.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[_]=it.matrix,C.castShadow){let X=e.get(C);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=J,x++}_++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(V).multiplyScalar(B),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let it=C.shadow,X=e.get(C);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=W,g++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(B),W.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==U||P.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=U,P.numLightProbes=I,i.version=G_++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let b=c[p];if(b.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ou(n){let t=new X_(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ou(n),t.set(s,[a])):r>=o.length?(a=new Ou(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var uc=class extends es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`;function Z_(n,t,e){let i=new Mr,s=new ct,r=new ct,o=new Ie,a=new uc({depthPacking:tp}),l=new fc,c={},h=e.maxTextureSize,u={[Ri]:cn,[cn]:Ri,[si]:si},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Y_,fragmentShader:q_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let p=this.type;this.render=function(R,I,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ti),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=p!==ii&&this.type===ii,G=p===ii&&this.type!==ii;for(let J=0,W=R.length;J<W;J++){let it=R[J],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||B===!0||G===!0){let Tt=this.type!==ii?{minFilter:Pn,magFilter:Pn}:{};X.map!==null&&X.map.dispose(),X.map=new ci(s.x,s.y,Tt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let xt=X.getViewportCount();for(let Tt=0;Tt<xt;Tt++){let Gt=X.getViewport(Tt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),V.viewport(o),X.updateMatrices(it,Tt),i=X.getFrustum(),x(I,P,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===ii&&w(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,C)};function w(R,I){let P=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,P,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,P,d,_,null)}function b(R,I,P,S){let y=null,C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let V=y.uuid,B=I.uuid,G=c[V];G===void 0&&(G={},c[V]=G);let J=G[B];J===void 0&&(J=y.clone(),G[B]=J,I.addEventListener("dispose",U)),y=J}if(y.visible=I.visible,y.wireframe=I.wireframe,S===ii?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:u[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=n.properties.get(y);V.light=P}return y}function x(R,I,P,S,y){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ii)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let B=t.update(R),G=R.material;if(Array.isArray(G)){let J=B.groups;for(let W=0,it=J.length;W<it;W++){let X=J[W],ht=G[X.materialIndex];if(ht&&ht.visible){let xt=b(R,ht,S,y);R.onBeforeShadow(n,R,I,P,B,xt,X),n.renderBufferDirect(P,null,B,xt,R,X),R.onAfterShadow(n,R,I,P,B,xt,X)}}}else if(G.visible){let J=b(R,G,S,y);R.onBeforeShadow(n,R,I,P,B,J,null),n.renderBufferDirect(P,null,B,J,R,null),R.onAfterShadow(n,R,I,P,B,J,null)}}let V=R.children;for(let B=0,G=V.length;B<G;B++)x(V[B],I,P,S,y)}function U(R){R.target.removeEventListener("dispose",U);for(let P in c){let S=c[P],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var J_={[ml]:gl,[_l]:yl,[xl]:Ml,[Os]:vl,[gl]:ml,[yl]:_l,[Ml]:xl,[vl]:Os};function K_(n,t){function e(){let D=!1,pt=new Ie,$=null,K=new Ie(0,0,0,0);return{setMask:function(_t){$!==_t&&!D&&(n.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){D=_t},setClear:function(_t,mt,Wt,Ce,Xe){Xe===!0&&(_t*=Ce,mt*=Ce,Wt*=Ce),pt.set(_t,mt,Wt,Ce),K.equals(pt)===!1&&(n.clearColor(_t,mt,Wt,Ce),K.copy(pt))},reset:function(){D=!1,$=null,K.set(-1,0,0,0)}}}function i(){let D=!1,pt=!1,$=null,K=null,_t=null;return{setReversed:function(mt){if(pt!==mt){let Wt=t.get("EXT_clip_control");pt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let Ce=_t;_t=null,this.setClear(Ce)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?at(n.DEPTH_TEST):Nt(n.DEPTH_TEST)},setMask:function(mt){$!==mt&&!D&&(n.depthMask(mt),$=mt)},setFunc:function(mt){if(pt&&(mt=J_[mt]),K!==mt){switch(mt){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case xl:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case yl:n.depthFunc(n.GREATER);break;case Ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=mt}},setLocked:function(mt){D=mt},setClear:function(mt){_t!==mt&&(pt&&(mt=1-mt),n.clearDepth(mt),_t=mt)},reset:function(){D=!1,$=null,K=null,_t=null,pt=!1}}}function s(){let D=!1,pt=null,$=null,K=null,_t=null,mt=null,Wt=null,Ce=null,Xe=null;return{setTest:function(fe){D||(fe?at(n.STENCIL_TEST):Nt(n.STENCIL_TEST))},setMask:function(fe){pt!==fe&&!D&&(n.stencilMask(fe),pt=fe)},setFunc:function(fe,wn,Jn){($!==fe||K!==wn||_t!==Jn)&&(n.stencilFunc(fe,wn,Jn),$=fe,K=wn,_t=Jn)},setOp:function(fe,wn,Jn){(mt!==fe||Wt!==wn||Ce!==Jn)&&(n.stencilOp(fe,wn,Jn),mt=fe,Wt=wn,Ce=Jn)},setLocked:function(fe){D=fe},setClear:function(fe){Xe!==fe&&(n.clearStencil(fe),Xe=fe)},reset:function(){D=!1,pt=null,$=null,K=null,_t=null,mt=null,Wt=null,Ce=null,Xe=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,b=null,x=null,U=null,R=null,I=new Jt(0,0,0),P=0,S=!1,y=null,C=null,V=null,B=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=it>=2);let ht=null,xt={},Tt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),le=new Ie().fromArray(Tt),Z=new Ie().fromArray(Gt);function rt(D,pt,$,K){let _t=new Uint8Array(4),mt=n.createTexture();n.bindTexture(D,mt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<$;Wt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(pt+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return mt}let At={};At[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(n.DEPTH_TEST),o.setFunc(Os),tt(!1),St(kh),at(n.CULL_FACE),A(Ti);function at(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Nt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ht(D,pt){return u[D]!==pt?(n.bindFramebuffer(D,pt),u[D]=pt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Bt(D,pt){let $=d,K=!1;if(D){$=f.get(pt),$===void 0&&($=[],f.set(pt,$));let _t=D.textures;if($.length!==_t.length||$[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Wt=_t.length;mt<Wt;mt++)$[mt]=n.COLOR_ATTACHMENT0+mt;$.length=_t.length,K=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,K=!0);K&&n.drawBuffers($)}function ne(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let j={[qi]:n.FUNC_ADD,[Td]:n.FUNC_SUBTRACT,[Ad]:n.FUNC_REVERSE_SUBTRACT};j[Rd]=n.MIN,j[Cd]=n.MAX;let st={[Id]:n.ZERO,[Pd]:n.ONE,[Ld]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[Bd]:n.SRC_ALPHA_SATURATE,[Fd]:n.DST_COLOR,[Ud]:n.DST_ALPHA,[Dd]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[Od]:n.ONE_MINUS_DST_COLOR,[Nd]:n.ONE_MINUS_DST_ALPHA,[kd]:n.CONSTANT_COLOR,[zd]:n.ONE_MINUS_CONSTANT_COLOR,[Hd]:n.CONSTANT_ALPHA,[Vd]:n.ONE_MINUS_CONSTANT_ALPHA};function A(D,pt,$,K,_t,mt,Wt,Ce,Xe,fe){if(D===Ti){_===!0&&(Nt(n.BLEND),_=!1);return}if(_===!1&&(at(n.BLEND),_=!0),D!==Ed){if(D!==m||fe!==S){if((p!==qi||x!==qi)&&(n.blendEquation(n.FUNC_ADD),p=qi,x=qi),fe)switch(D){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,b=null,U=null,R=null,I.set(0,0,0),P=0,m=D,S=fe}return}_t=_t||pt,mt=mt||$,Wt=Wt||K,(pt!==p||_t!==x)&&(n.blendEquationSeparate(j[pt],j[_t]),p=pt,x=_t),($!==w||K!==b||mt!==U||Wt!==R)&&(n.blendFuncSeparate(st[$],st[K],st[mt],st[Wt]),w=$,b=K,U=mt,R=Wt),(Ce.equals(I)===!1||Xe!==P)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Xe),I.copy(Ce),P=Xe),m=D,S=!1}function Lt(D,pt){D.side===si?Nt(n.CULL_FACE):at(n.CULL_FACE);let $=D.side===cn;pt&&($=!$),tt($),D.blending===Ds&&D.transparent===!1?A(Ti):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):Nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function St(D){D!==Sd?(at(n.CULL_FACE),D!==C&&(D===kh?n.cullFace(n.BACK):D===wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Nt(n.CULL_FACE),C=D}function lt(D){D!==V&&(W&&n.lineWidth(D),V=D)}function Ft(D,pt,$){D?(at(n.POLYGON_OFFSET_FILL),(B!==pt||G!==$)&&(n.polygonOffset(pt,$),B=pt,G=$)):Nt(n.POLYGON_OFFSET_FILL)}function Mt(D){D?at(n.SCISSOR_TEST):Nt(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+J-1),ht!==D&&(n.activeTexture(D),ht=D)}function v(D,pt,$){$===void 0&&(ht===null?$=n.TEXTURE0+J-1:$=ht);let K=xt[$];K===void 0&&(K={type:void 0,texture:void 0},xt[$]=K),(K.type!==D||K.texture!==pt)&&(ht!==$&&(n.activeTexture($),ht=$),n.bindTexture(D,pt||At[D]),K.type=D,K.texture=pt)}function O(){let D=xt[ht];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(D){le.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function Et(D){Z.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function ee(D,pt){let $=c.get(pt);$===void 0&&($=new WeakMap,c.set(pt,$));let K=$.get(D);K===void 0&&(K=n.getUniformBlockIndex(pt,D.name),$.set(D,K))}function Yt(D,pt){let K=c.get(pt).get(D);l.get(pt)!==K&&(n.uniformBlockBinding(pt,K,D.__bindingPointIndex),l.set(pt,K))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ht=null,xt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,b=null,x=null,U=null,R=null,I=new Jt(0,0,0),P=0,S=!1,y=null,C=null,V=null,B=null,G=null,le.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Nt,bindFramebuffer:Ht,drawBuffers:Bt,useProgram:ne,setBlending:A,setMaterial:Lt,setFlipSided:tt,setCullFace:St,setLineWidth:lt,setPolygonOffset:Ft,setScissorTest:Mt,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:wt,texImage3D:Ot,updateUBOMapping:ee,uniformBlockBinding:Yt,texStorage2D:Qt,texStorage3D:nt,texSubImage2D:q,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:kt,viewport:Et,reset:_e}}function Bu(n,t,e,i){let s=j_(i);switch(e){case ju:return n*t;case tf:return n*t;case ef:return n*t*2;case nf:return n*t/s.components*s.byteLength;case Gc:return n*t/s.components*s.byteLength;case sf:return n*t*2/s.components*s.byteLength;case Wc:return n*t*2/s.components*s.byteLength;case Qu:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case Xc:return n*t*4/s.components*s.byteLength;case Io:case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(n,16)*Math.max(t,8)/4;case Tl:case Rl:return Math.max(n,8)*Math.max(t,8)/2;case Il:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Yl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rf:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j_(n){switch(n){case li:case Zu:return{byteLength:1,components:1};case xr:case Ju:case Dr:return{byteLength:2,components:1};case Hc:case Vc:return{byteLength:2,components:4};case Qi:case zc:case ri:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Q_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return d?new OffscreenCanvas(E,v):Oo("canvas")}function _(E,v,O){let Y=1,Q=Mt(E);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let q=Math.floor(Y*Q.width),Rt=Math.floor(Y*Q.height);u===void 0&&(u=g(q,Rt));let dt=v?g(q,Rt):u;return dt.width=q,dt.height=Rt,dt.getContext("2d").drawImage(E,0,0,q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Rt+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,v,O,Y,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),v===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){let Rt=Q?fa:ie.getTransfer(Y);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Rt===de?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(E,v){let O;return E?v===null||v===Qi||v===zs?O=n.DEPTH24_STENCIL8:v===ri?O=n.DEPTH32F_STENCIL8:v===xr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Qi||v===zs?O=n.DEPTH_COMPONENT24:v===ri?O=n.DEPTH_COMPONENT32F:v===xr&&(O=n.DEPTH_COMPONENT16),O}function U(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pn&&E.minFilter!==Hn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){let v=E.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&h.delete(v)}function I(E){let v=E.target;v.removeEventListener("dispose",I),y(v)}function P(E){let v=i.get(E);if(v.__webglInit===void 0)return;let O=E.source,Y=f.get(O);if(Y){let Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(E),Object.keys(Y).length===0&&f.delete(O)}i.remove(E)}function S(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let O=E.source,Y=f.get(O);delete Y[v.__cacheKey],o.memory.textures--}function y(E){let v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let Y=0,Q=O.length;Y<Q;Y++){let q=i.get(O[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(E)}let C=0;function V(){C=0}function B(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function G(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function J(E,v){let O=i.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,E,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function W(E,v){let O=i.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function it(E,v){let O=i.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function X(E,v){let O=i.get(E);if(E.version>0&&O.__version!==E.version){rt(O,E,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let ht={[wl]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},xt={[Pn]:n.NEAREST,[jd]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Tt={[np]:n.NEVER,[lp]:n.ALWAYS,[ip]:n.LESS,[af]:n.LEQUAL,[sp]:n.EQUAL,[ap]:n.GEQUAL,[rp]:n.GREATER,[op]:n.NOTEQUAL};function Gt(E,v){if(v.type===ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Hn||v.magFilter===Da||v.magFilter===so||v.magFilter===ji||v.minFilter===Hn||v.minFilter===Da||v.minFilter===so||v.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ht[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ht[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ht[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,xt[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==so&&v.minFilter!==ji||v.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function le(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));let Y=v.source,Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));let q=G(v);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[q].usedTimes++;let Rt=Q[E.__cacheKey];Rt!==void 0&&(Q[E.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(v)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return O}function Z(E,v,O){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);let Q=le(E,v),q=v.source;e.bindTexture(Y,E.__webglTexture,n.TEXTURE0+O);let Rt=i.get(q);if(q.version!==Rt.__version||Q===!0){e.activeTexture(n.TEXTURE0+O);let dt=ie.getPrimaries(ie.workingColorSpace),bt=v.colorSpace===Ei?null:ie.getPrimaries(v.colorSpace),Qt=v.colorSpace===Ei||dt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let nt=_(v.image,!1,s.maxTextureSize);nt=Ft(v,nt);let wt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type),kt=b(v.internalFormat,wt,Ot,v.colorSpace,v.isVideoTexture);Gt(Y,v);let Et,ee=v.mipmaps,Yt=v.isVideoTexture!==!0,_e=Rt.__version===void 0||Q===!0,D=q.dataReady,pt=U(v,nt);if(v.isDepthTexture)kt=x(v.format===Hs,v.type),_e&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,kt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,kt,nt.width,nt.height,0,wt,Ot,null));else if(v.isDataTexture)if(ee.length>0){Yt&&_e&&e.texStorage2D(n.TEXTURE_2D,pt,kt,ee[0].width,ee[0].height);for(let $=0,K=ee.length;$<K;$++)Et=ee[$],Yt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,$,kt,Et.width,Et.height,0,wt,Ot,Et.data);v.generateMipmaps=!1}else Yt?(_e&&e.texStorage2D(n.TEXTURE_2D,pt,kt,nt.width,nt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,wt,Ot,nt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,nt.width,nt.height,0,wt,Ot,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,kt,ee[0].width,ee[0].height,nt.depth);for(let $=0,K=ee.length;$<K;$++)if(Et=ee[$],v.format!==In)if(wt!==null)if(Yt){if(D)if(v.layerUpdates.size>0){let _t=Bu(Et.width,Et.height,v.format,v.type);for(let mt of v.layerUpdates){let Wt=Et.data.subarray(mt*_t/Et.data.BYTES_PER_ELEMENT,(mt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,mt,Et.width,Et.height,1,wt,Wt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,nt.depth,wt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,kt,Et.width,Et.height,nt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,nt.depth,wt,Ot,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,kt,Et.width,Et.height,nt.depth,0,wt,Ot,Et.data)}else{Yt&&_e&&e.texStorage2D(n.TEXTURE_2D,pt,kt,ee[0].width,ee[0].height);for(let $=0,K=ee.length;$<K;$++)Et=ee[$],v.format!==In?wt!==null?Yt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,$,kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,$,kt,Et.width,Et.height,0,wt,Ot,Et.data)}else if(v.isDataArrayTexture)if(Yt){if(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,kt,nt.width,nt.height,nt.depth),D)if(v.layerUpdates.size>0){let $=Bu(nt.width,nt.height,v.format,v.type);for(let K of v.layerUpdates){let _t=nt.data.subarray(K*$/nt.data.BYTES_PER_ELEMENT,(K+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,wt,Ot,_t)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,wt,Ot,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,nt.width,nt.height,nt.depth,0,wt,Ot,nt.data);else if(v.isData3DTexture)Yt?(_e&&e.texStorage3D(n.TEXTURE_3D,pt,kt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,wt,Ot,nt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,nt.width,nt.height,nt.depth,0,wt,Ot,nt.data);else if(v.isFramebufferTexture){if(_e)if(Yt)e.texStorage2D(n.TEXTURE_2D,pt,kt,nt.width,nt.height);else{let $=nt.width,K=nt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(n.TEXTURE_2D,_t,kt,$,K,0,wt,Ot,null),$>>=1,K>>=1}}else if(ee.length>0){if(Yt&&_e){let $=Mt(ee[0]);e.texStorage2D(n.TEXTURE_2D,pt,kt,$.width,$.height)}for(let $=0,K=ee.length;$<K;$++)Et=ee[$],Yt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,wt,Ot,Et):e.texImage2D(n.TEXTURE_2D,$,kt,wt,Ot,Et);v.generateMipmaps=!1}else if(Yt){if(_e){let $=Mt(nt);e.texStorage2D(n.TEXTURE_2D,pt,kt,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Ot,nt)}else e.texImage2D(n.TEXTURE_2D,0,kt,wt,Ot,nt);m(v)&&p(Y),Rt.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function rt(E,v,O){if(v.image.length!==6)return;let Y=le(E,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);let q=i.get(Q);if(Q.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+O);let Rt=ie.getPrimaries(ie.workingColorSpace),dt=v.colorSpace===Ei?null:ie.getPrimaries(v.colorSpace),bt=v.colorSpace===Ei||Rt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Qt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let K=0;K<6;K++)!Qt&&!nt?wt[K]=_(v.image[K],!0,s.maxCubemapSize):wt[K]=nt?v.image[K].image:v.image[K],wt[K]=Ft(v,wt[K]);let Ot=wt[0],kt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),ee=b(v.internalFormat,kt,Et,v.colorSpace),Yt=v.isVideoTexture!==!0,_e=q.__version===void 0||Y===!0,D=Q.dataReady,pt=U(v,Ot);Gt(n.TEXTURE_CUBE_MAP,v);let $;if(Qt){Yt&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ee,Ot.width,Ot.height);for(let K=0;K<6;K++){$=wt[K].mipmaps;for(let _t=0;_t<$.length;_t++){let mt=$[_t];v.format!==In?kt!==null?Yt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,mt.width,mt.height,kt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,ee,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,mt.width,mt.height,kt,Et,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,ee,mt.width,mt.height,0,kt,Et,mt.data)}}}else{if($=v.mipmaps,Yt&&_e){$.length>0&&pt++;let K=Mt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ee,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt[K].width,wt[K].height,kt,Et,wt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,wt[K].width,wt[K].height,0,kt,Et,wt[K].data);for(let _t=0;_t<$.length;_t++){let Wt=$[_t].image[K].image;Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Wt.width,Wt.height,kt,Et,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,ee,Wt.width,Wt.height,0,kt,Et,Wt.data)}}else{Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,kt,Et,wt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,kt,Et,wt[K]);for(let _t=0;_t<$.length;_t++){let mt=$[_t];Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,kt,Et,mt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,ee,kt,Et,mt.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function At(E,v,O,Y,Q,q){let Rt=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),bt=b(O.internalFormat,Rt,dt,O.colorSpace),Qt=i.get(v),nt=i.get(O);if(nt.__renderTarget=v,!Qt.__hasExternalTextures){let wt=Math.max(1,v.width>>q),Ot=Math.max(1,v.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,bt,wt,Ot,v.depth,0,Rt,dt,null):e.texImage2D(Q,q,bt,wt,Ot,0,Rt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),St(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,nt.__webglTexture,0,tt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,nt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(E,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(v.stencilBuffer,Q),Rt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=tt(v);St(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,q,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,E)}else{let Y=v.textures;for(let Q=0;Q<Y.length;Q++){let q=Y[Q],Rt=r.convert(q.format,q.colorSpace),dt=r.convert(q.type),bt=b(q.internalFormat,Rt,dt,q.colorSpace),Qt=tt(v);O&&St(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,bt,v.width,v.height):St(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,bt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,bt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let Q=Y.__webglTexture,q=tt(v);if(v.depthTexture.format===Us)St(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Hs)St(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ht(E){let v=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Nt(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),at(v.__webglDepthbuffer[Y],E,!1);else{let Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),at(v.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(E,v,O){let Y=i.get(E);v!==void 0&&At(Y.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ht(E)}function ne(E){let v=E.texture,O=i.get(E),Y=i.get(v);E.addEventListener("dispose",I);let Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let bt=0;bt<v.mipmaps.length;bt++)O.__webglFramebuffer[dt][bt]=n.createFramebuffer()}else O.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)O.__webglFramebuffer[dt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let dt=0,bt=Q.length;dt<bt;dt++){let Qt=i.get(Q[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&St(E)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){let bt=Q[dt];O.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);let Qt=r.convert(bt.format,bt.colorSpace),nt=r.convert(bt.type),wt=b(bt.internalFormat,Qt,nt,bt.colorSpace,E.isXRRenderTarget===!0),Ot=tt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,wt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),at(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)At(O.__webglFramebuffer[dt][bt],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else At(O.__webglFramebuffer[dt],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,bt=Q.length;dt<bt;dt++){let Qt=Q[dt],nt=i.get(Qt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Gt(n.TEXTURE_2D,Qt),At(O.__webglFramebuffer,E,Qt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(Qt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Gt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)At(O.__webglFramebuffer[bt],E,v,n.COLOR_ATTACHMENT0,dt,bt);else At(O.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&p(dt),e.unbindTexture()}E.depthBuffer&&Ht(E)}function j(E){let v=E.textures;for(let O=0,Y=v.length;O<Y;O++){let Q=v[O];if(m(Q)){let q=w(E),Rt=i.get(Q).__webglTexture;e.bindTexture(q,Rt),p(q),e.unbindTexture()}}}let st=[],A=[];function Lt(E){if(E.samples>0){if(St(E)===!1){let v=E.textures,O=E.width,Y=E.height,Q=n.COLOR_BUFFER_BIT,q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(E),dt=v.length>1;if(dt)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);let Qt=i.get(v[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,n.NEAREST),l===!0&&(st.length=0,A.length=0,st.push(n.COLOR_ATTACHMENT0+bt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(st.push(q),A.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);let Qt=i.get(v[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function tt(E){return Math.min(s.maxSamples,E.samples)}function St(E){let v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function lt(E){let v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Ft(E,v){let O=E.colorSpace,Y=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Xs&&O!==Ei&&(ie.getTransfer(O)===de?(Y!==In||Q!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=X,this.rebindTextures=Bt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=At,this.useMultisampledRTT=St}function tx(n,t){function e(i,s=Ei){let r,o=ie.getTransfer(s);if(i===li)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ku)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zu)return n.BYTE;if(i===Ju)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===Dr)return n.HALF_FLOAT;if(i===ju)return n.ALPHA;if(i===Qu)return n.RGB;if(i===In)return n.RGBA;if(i===tf)return n.LUMINANCE;if(i===ef)return n.LUMINANCE_ALPHA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Hs)return n.DEPTH_STENCIL;if(i===nf)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===sf)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Xc)return n.RGBA_INTEGER;if(i===Io||i===Po||i===Lo||i===Do)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===Rl||i===Cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Pl||i===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Pl)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Yl||i===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Uo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rf||i===Zl||i===Jl||i===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var dc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ex={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new gn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Gn({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mc=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new pc,m=e.getContextAttributes(),p=null,w=null,b=[],x=[],U=new ct,R=null,I=new Je;I.viewport=new Ie;let P=new Je;P.viewport=new Ie;let S=[I,P],y=new dc,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=b[Z];return rt===void 0&&(rt=new pr,b[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=b[Z];return rt===void 0&&(rt=new pr,b[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=b[Z];return rt===void 0&&(rt=new pr,b[Z]=rt),rt.getHandSpace()};function B(Z){let rt=x.indexOf(Z.inputSource);if(rt===-1)return;let At=b[rt];At!==void 0&&(At.update(Z.inputSource,Z.frame,c||o),At.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<b.length;Z++){let rt=x[Z];rt!==null&&(x[Z]=null,b[Z].disconnect(rt))}C=null,V=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,w=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new ci(d.framebufferWidth,d.framebufferHeight,{format:In,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,At=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Hs:Us,At=m.stencil?zs:Qi);let Nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ci(f.textureWidth,f.textureHeight,{format:In,type:li,depthTexture:new Yo(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Z){for(let rt=0;rt<Z.removed.length;rt++){let At=Z.removed[rt],at=x.indexOf(At);at>=0&&(x[at]=null,b[at].disconnect(At))}for(let rt=0;rt<Z.added.length;rt++){let At=Z.added[rt],at=x.indexOf(At);if(at===-1){for(let Ht=0;Ht<b.length;Ht++)if(Ht>=x.length){x.push(At),at=Ht;break}else if(x[Ht]===null){x[Ht]=At,at=Ht;break}if(at===-1)break}let Nt=b[at];Nt&&Nt.connect(At)}}let W=new L,it=new L;function X(Z,rt,At){W.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(At.matrixWorld);let at=W.distanceTo(it),Nt=rt.projectionMatrix.elements,Ht=At.projectionMatrix.elements,Bt=Nt[14]/(Nt[10]-1),ne=Nt[14]/(Nt[10]+1),j=(Nt[9]+1)/Nt[5],st=(Nt[9]-1)/Nt[5],A=(Nt[8]-1)/Nt[0],Lt=(Ht[8]+1)/Ht[0],tt=Bt*A,St=Bt*Lt,lt=at/(-A+Lt),Ft=lt*-A;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ft),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Mt=Bt+lt,E=ne+lt,v=tt-Ft,O=St+(at-Ft),Y=j*ne/E*Mt,Q=st*ne/E*Mt;Z.projectionMatrix.makePerspective(v,O,Y,Q,Mt,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ht(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,At=Z.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(At=_.depthFar)),y.near=P.near=I.near=rt,y.far=P.far=I.far=At,(C!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far),I.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,y.layers.mask=I.layers.mask|P.layers.mask;let at=Z.parent,Nt=y.cameras;ht(y,at);for(let Ht=0;Ht<Nt.length;Ht++)ht(Nt[Ht],at);Nt.length===2?X(y,I,P):y.projectionMatrix.copy(I.projectionMatrix),xt(Z,y,at)};function xt(Z,rt,At){At===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(At.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ql*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Tt=null;function Gt(Z,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){let At=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let at=!1;At.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Ht=0;Ht<At.length;Ht++){let Bt=At[Ht],ne=null;if(d!==null)ne=d.getViewport(Bt);else{let st=u.getViewSubImage(f,Bt);ne=st.viewport,Ht===0&&(t.setRenderTargetTextures(w,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(w))}let j=S[Ht];j===void 0&&(j=new Je,j.layers.enable(Ht),j.viewport=new Ie,S[Ht]=j),j.matrix.fromArray(Bt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Bt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),Ht===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(j)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Ht=u.getDepthInformation(At[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let At=0;At<b.length;At++){let at=x[At],Nt=b[At];at!==null&&Nt!==void 0&&Nt.update(at,rt,c||o)}Tt&&Tt(Z,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let le=new uf;le.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){Tt=Z},this.dispose=function(){}}},$i=new Vn,sx=new ve;function rx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),b=w.envMap,x=w.envMapRotation;b&&(m.envMap.value=b,$i.copy(x),$i.x*=-1,$i.y*=-1,$i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler($i)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ox(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let x=b.program;i.uniformBlockBinding(w,x)}function c(w,b){let x=s[w.id];x===void 0&&(g(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",m));let U=b.program;i.updateUBOMapping(w,U);let R=t.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function h(w){let b=u();w.__bindingPointIndex=b;let x=n.createBuffer(),U=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=s[w.id],x=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,I=x.length;R<I;R++){let P=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,y=P.length;S<y;S++){let C=P[S];if(d(C,R,S,U)===!0){let V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],G=0;for(let J=0;J<B.length;J++){let W=B[J],it=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+G,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,G),G+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,b,x,U){let R=w.value,I=b+"_"+x;if(U[I]===void 0)return typeof R=="number"||typeof R=="boolean"?U[I]=R:U[I]=R.clone(),!0;{let P=U[I];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return U[I]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(w){let b=w.uniforms,x=0,U=16;for(let I=0,P=b.length;I<P;I++){let S=Array.isArray(b[I])?b[I]:[b[I]];for(let y=0,C=S.length;y<C;y++){let V=S[y],B=Array.isArray(V.value)?V.value:[V.value];for(let G=0,J=B.length;G<J;G++){let W=B[G],it=_(W),X=x%U,ht=X%it.boundary,xt=X+ht;x+=ht,xt!==0&&U-xt<it.storage&&(x+=U-xt),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=it.storage}}}let R=x%U;return R>0&&(x+=U-R),w.__size=x,w.__cache={},this}function _(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var br=class{constructor(t={}){let{canvas:e=hp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Ai,this.toneMappingExposure=1;let x=this,U=!1,R=0,I=0,P=null,S=-1,y=null,C=new Ie,V=new Ie,B=null,G=new Jt(0),J=0,W=e.width,it=e.height,X=1,ht=null,xt=null,Tt=new Ie(0,0,W,it),Gt=new Ie(0,0,W,it),le=!1,Z=new Mr,rt=!1,At=!1,at=new ve,Nt=new ve,Ht=new L,Bt=new Ie,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function st(){return P===null?X:1}let A=i;function Lt(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),A===null){let N="webgl2";if(A=Lt(N,M),A===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let tt,St,lt,Ft,Mt,E,v,O,Y,Q,q,Rt,dt,bt,Qt,nt,wt,Ot,kt,Et,ee,Yt,_e,D;function pt(){tt=new b0(A),tt.init(),Yt=new tx(A,tt),St=new g0(A,tt,t,Yt),lt=new K_(A,tt),St.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Ft=new E0(A),Mt=new B_,E=new Q_(A,tt,lt,Mt,St,Yt,Ft),v=new x0(x),O=new M0(x),Y=new Lp(A),_e=new p0(A,Y),Q=new S0(A,Y,Ft,_e),q=new A0(A,Q,Y,Ft),kt=new T0(A,St,E),nt=new _0(Mt),Rt=new O_(x,v,O,tt,St,_e,nt),dt=new rx(x,Mt),bt=new z_,Qt=new $_(tt),Ot=new d0(x,v,O,lt,q,d,l),wt=new Z_(x,q,St),D=new ox(A,Ft,St,lt),Et=new m0(A,tt,Ft),ee=new w0(A,tt,Ft),Ft.programs=Rt.programs,x.capabilities=St,x.extensions=tt,x.properties=Mt,x.renderLists=bt,x.shadowMap=wt,x.state=lt,x.info=Ft}pt();let $=new mc(x,A);this.xr=$,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(W,it,!1))},this.getSize=function(M){return M.set(W,it)},this.setSize=function(M,N,k=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,it=N,e.width=Math.floor(M*X),e.height=Math.floor(N*X),k===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(W*X,it*X).floor()},this.setDrawingBufferSize=function(M,N,k){W=M,it=N,X=k,e.width=Math.floor(M*k),e.height=Math.floor(N*k),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,N,k,z){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,N,k,z),lt.viewport(C.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,N,k,z){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,N,k,z),lt.scissor(V.copy(Gt).multiplyScalar(X).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){lt.setScissorTest(le=M)},this.setOpaqueSort=function(M){ht=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(M=!0,N=!0,k=!0){let z=0;if(M){let F=!1;if(P!==null){let ot=P.texture.format;F=ot===Xc||ot===Wc||ot===Gc}if(F){let ot=P.texture.type,gt=ot===li||ot===Qi||ot===xr||ot===zs||ot===Hc||ot===Vc,Ct=Ot.getClearColor(),It=Ot.getClearAlpha(),Vt=Ct.r,Xt=Ct.g,Pt=Ct.b;gt?(g[0]=Vt,g[1]=Xt,g[2]=Pt,g[3]=It,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Vt,_[1]=Xt,_[2]=Pt,_[3]=It,A.clearBufferiv(A.COLOR,0,_))}else z|=A.COLOR_BUFFER_BIT}N&&(z|=A.DEPTH_BUFFER_BIT),k&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),bt.dispose(),Qt.dispose(),Mt.dispose(),v.dispose(),O.dispose(),q.dispose(),_e.dispose(),D.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ph),$.removeEventListener("sessionend",Lh),zi.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let M=Ft.autoReset,N=wt.enabled,k=wt.autoUpdate,z=wt.needsUpdate,F=wt.type;pt(),Ft.autoReset=M,wt.enabled=N,wt.autoUpdate=k,wt.needsUpdate=z,wt.type=F}function mt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Wt(M){let N=M.target;N.removeEventListener("dispose",Wt),Ce(N)}function Ce(M){Xe(M),Mt.remove(M)}function Xe(M){let N=Mt.get(M).programs;N!==void 0&&(N.forEach(function(k){Rt.releaseProgram(k)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,k,z,F,ot){N===null&&(N=ne);let gt=F.isMesh&&F.matrixWorld.determinant()<0,Ct=yd(M,N,k,z,F);lt.setMaterial(z,gt);let It=k.index,Vt=1;if(z.wireframe===!0){if(It=Q.getWireframeAttribute(k),It===void 0)return;Vt=2}let Xt=k.drawRange,Pt=k.attributes.position,re=Xt.start*Vt,xe=(Xt.start+Xt.count)*Vt;ot!==null&&(re=Math.max(re,ot.start*Vt),xe=Math.min(xe,(ot.start+ot.count)*Vt)),It!==null?(re=Math.max(re,0),xe=Math.min(xe,It.count)):Pt!=null&&(re=Math.max(re,0),xe=Math.min(xe,Pt.count));let Me=xe-re;if(Me<0||Me===1/0)return;_e.setup(F,z,Ct,k,It);let an,ce=Et;if(It!==null&&(an=Y.get(It),ce=ee,ce.setIndex(an)),F.isMesh)z.wireframe===!0?(lt.setLineWidth(z.wireframeLinewidth*st()),ce.setMode(A.LINES)):ce.setMode(A.TRIANGLES);else if(F.isLine){let Ut=z.linewidth;Ut===void 0&&(Ut=1),lt.setLineWidth(Ut*st()),F.isLineSegments?ce.setMode(A.LINES):F.isLineLoop?ce.setMode(A.LINE_LOOP):ce.setMode(A.LINE_STRIP)}else F.isPoints?ce.setMode(A.POINTS):F.isSprite&&ce.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ut=F._multiDrawStarts,Kn=F._multiDrawCounts,he=F._multiDrawCount,En=It?Y.get(It).bytesPerElement:1,gs=Mt.get(z).currentProgram.getUniforms();for(let dn=0;dn<he;dn++)gs.setValue(A,"_gl_DrawID",dn),ce.render(Ut[dn]/En,Kn[dn])}else if(F.isInstancedMesh)ce.renderInstances(re,Me,F.count);else if(k.isInstancedBufferGeometry){let Ut=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Kn=Math.min(k.instanceCount,Ut);ce.renderInstances(re,Me,Kn)}else ce.render(re,Me)};function fe(M,N,k){M.transparent===!0&&M.side===si&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,io(M,N,k),M.side=Ri,M.needsUpdate=!0,io(M,N,k),M.side=si):io(M,N,k)}this.compile=function(M,N,k=null){k===null&&(k=M),p=Qt.get(k),p.init(N),b.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==k&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let z=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ot=F.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){let Ct=ot[gt];fe(Ct,k,F),z.add(Ct)}else fe(ot,k,F),z.add(ot)}),b.pop(),p=null,z},this.compileAsync=function(M,N,k=null){let z=this.compile(M,N,k);return new Promise(F=>{function ot(){if(z.forEach(function(gt){Mt.get(gt).currentProgram.isReady()&&z.delete(gt)}),z.size===0){F(M);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let wn=null;function Jn(M){wn&&wn(M)}function Ph(){zi.stop()}function Lh(){zi.start()}let zi=new uf;zi.setAnimationLoop(Jn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(M){wn=M,$.setAnimationLoop(M),M===null?zi.stop():zi.start()},$.addEventListener("sessionstart",Ph),$.addEventListener("sessionend",Lh),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,P),p=Qt.get(M,b.length),p.init(N),b.push(p),Nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Nt),At=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,At),m=bt.get(M,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&La(ot,N,-1/0,x.sortObjects)}La(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,xt),j=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,j&&Ot.addToRenderList(m,M),this.info.render.frame++,rt===!0&&nt.beginShadows();let k=p.state.shadowsArray;wt.render(k,M,N),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ot=N.cameras;if(F.length>0)for(let gt=0,Ct=ot.length;gt<Ct;gt++){let It=ot[gt];Uh(z,F,M,It)}j&&Ot.render(M);for(let gt=0,Ct=ot.length;gt<Ct;gt++){let It=ot[gt];Dh(m,M,It,It.viewport)}}else F.length>0&&Uh(z,F,M,N),j&&Ot.render(M),Dh(m,M,N);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(x,M,N),_e.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],rt===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function La(M,N,k,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){z&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Nt);let gt=q.update(M),Ct=M.material;Ct.visible&&m.push(M,gt,Ct,k,Bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){let gt=q.update(M),Ct=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Bt.copy(gt.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ct)){let It=gt.groups;for(let Vt=0,Xt=It.length;Vt<Xt;Vt++){let Pt=It[Vt],re=Ct[Pt.materialIndex];re&&re.visible&&m.push(M,gt,re,k,Bt.z,Pt)}}else Ct.visible&&m.push(M,gt,Ct,k,Bt.z,null)}}let ot=M.children;for(let gt=0,Ct=ot.length;gt<Ct;gt++)La(ot[gt],N,k,z)}function Dh(M,N,k,z){let F=M.opaque,ot=M.transmissive,gt=M.transparent;p.setupLightsView(k),rt===!0&&nt.setGlobalState(x.clippingPlanes,k),z&&lt.viewport(C.copy(z)),F.length>0&&no(F,N,k),ot.length>0&&no(ot,N,k),gt.length>0&&no(gt,N,k),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Uh(M,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ci(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Dr:li,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let ot=p.state.transmissionRenderTarget[z.id],gt=z.viewport||C;ot.setSize(gt.z,gt.w);let Ct=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),j&&Ot.render(k);let It=x.toneMapping;x.toneMapping=Ai;let Vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),rt===!0&&nt.setGlobalState(x.clippingPlanes,z),no(M,k,z),E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pt=0,re=N.length;Pt<re;Pt++){let xe=N[Pt],Me=xe.object,an=xe.geometry,ce=xe.material,Ut=xe.group;if(ce.side===si&&Me.layers.test(z.layers)){let Kn=ce.side;ce.side=cn,ce.needsUpdate=!0,Nh(Me,k,z,an,ce,Ut),ce.side=Kn,ce.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(ot),E.updateRenderTargetMipmap(ot))}x.setRenderTarget(Ct),x.setClearColor(G,J),Vt!==void 0&&(z.viewport=Vt),x.toneMapping=It}function no(M,N,k){let z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=M.length;F<ot;F++){let gt=M[F],Ct=gt.object,It=gt.geometry,Vt=z===null?gt.material:z,Xt=gt.group;Ct.layers.test(k.layers)&&Nh(Ct,N,k,It,Vt,Xt)}}function Nh(M,N,k,z,F,ot){M.onBeforeRender(x,N,k,z,F,ot),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,N,k,z,M,ot),F.transparent===!0&&F.side===si&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,x.renderBufferDirect(k,N,z,F,M,ot),F.side=Ri,F.needsUpdate=!0,x.renderBufferDirect(k,N,z,F,M,ot),F.side=si):x.renderBufferDirect(k,N,z,F,M,ot),M.onAfterRender(x,N,k,z,F,ot)}function io(M,N,k){N.isScene!==!0&&(N=ne);let z=Mt.get(M),F=p.state.lights,ot=p.state.shadowsArray,gt=F.state.version,Ct=Rt.getParameters(M,F.state,ot,N,k),It=Rt.getProgramCacheKey(Ct),Vt=z.programs;z.environment=M.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Vt===void 0&&(M.addEventListener("dispose",Wt),Vt=new Map,z.programs=Vt);let Xt=Vt.get(It);if(Xt!==void 0){if(z.currentProgram===Xt&&z.lightsStateVersion===gt)return Oh(M,Ct),Xt}else Ct.uniforms=Rt.getUniforms(M),M.onBeforeCompile(Ct,x),Xt=Rt.acquireProgram(Ct,It),Vt.set(It,Xt),z.uniforms=Ct.uniforms;let Pt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=nt.uniform),Oh(M,Ct),z.needsLights=bd(M),z.lightsStateVersion=gt,z.needsLights&&(Pt.ambientLightColor.value=F.state.ambient,Pt.lightProbe.value=F.state.probe,Pt.directionalLights.value=F.state.directional,Pt.directionalLightShadows.value=F.state.directionalShadow,Pt.spotLights.value=F.state.spot,Pt.spotLightShadows.value=F.state.spotShadow,Pt.rectAreaLights.value=F.state.rectArea,Pt.ltc_1.value=F.state.rectAreaLTC1,Pt.ltc_2.value=F.state.rectAreaLTC2,Pt.pointLights.value=F.state.point,Pt.pointLightShadows.value=F.state.pointShadow,Pt.hemisphereLights.value=F.state.hemi,Pt.directionalShadowMap.value=F.state.directionalShadowMap,Pt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pt.spotShadowMap.value=F.state.spotShadowMap,Pt.spotLightMatrix.value=F.state.spotLightMatrix,Pt.spotLightMap.value=F.state.spotLightMap,Pt.pointShadowMap.value=F.state.pointShadowMap,Pt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Xt,z.uniformsList=null,Xt}function Fh(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Fs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Oh(M,N){let k=Mt.get(M);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function yd(M,N,k,z,F){N.isScene!==!0&&(N=ne),E.resetTextureUnits();let ot=N.fog,gt=z.isMeshStandardMaterial?N.environment:null,Ct=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xs,It=(z.isMeshStandardMaterial?O:v).get(z.envMap||gt),Vt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,xe=!!k.morphAttributes.color,Me=Ai;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=x.toneMapping);let an=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=an!==void 0?an.length:0,Ut=Mt.get(z),Kn=p.state.lights;if(rt===!0&&(At===!0||M!==y)){let vn=M===y&&z.id===S;nt.setState(z,M,vn)}let he=!1;z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Kn.state.version||Ut.outputColorSpace!==Ct||F.isBatchedMesh&&Ut.batching===!1||!F.isBatchedMesh&&Ut.batching===!0||F.isBatchedMesh&&Ut.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ut.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ut.instancing===!1||!F.isInstancedMesh&&Ut.instancing===!0||F.isSkinnedMesh&&Ut.skinning===!1||!F.isSkinnedMesh&&Ut.skinning===!0||F.isInstancedMesh&&Ut.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ut.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ut.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ut.instancingMorph===!1&&F.morphTexture!==null||Ut.envMap!==It||z.fog===!0&&Ut.fog!==ot||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==nt.numPlanes||Ut.numIntersection!==nt.numIntersection)||Ut.vertexAlphas!==Vt||Ut.vertexTangents!==Xt||Ut.morphTargets!==Pt||Ut.morphNormals!==re||Ut.morphColors!==xe||Ut.toneMapping!==Me||Ut.morphTargetsCount!==ce)&&(he=!0):(he=!0,Ut.__version=z.version);let En=Ut.currentProgram;he===!0&&(En=io(z,N,F));let gs=!1,dn=!1,rr=!1,be=En.getUniforms(),kn=Ut.uniforms;if(lt.useProgram(En.program)&&(gs=!0,dn=!0,rr=!0),z.id!==S&&(S=z.id,dn=!0),gs||y!==M){lt.buffers.depth.getReversed()?(at.copy(M.projectionMatrix),fp(at),dp(at),be.setValue(A,"projectionMatrix",at)):be.setValue(A,"projectionMatrix",M.projectionMatrix),be.setValue(A,"viewMatrix",M.matrixWorldInverse);let _i=be.map.cameraPosition;_i!==void 0&&_i.setValue(A,Ht.setFromMatrixPosition(M.matrixWorld)),St.logarithmicDepthBuffer&&be.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&be.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,dn=!0,rr=!0)}if(F.isSkinnedMesh){be.setOptional(A,F,"bindMatrix"),be.setOptional(A,F,"bindMatrixInverse");let vn=F.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),be.setValue(A,"boneTexture",vn.boneTexture,E))}F.isBatchedMesh&&(be.setOptional(A,F,"batchingTexture"),be.setValue(A,"batchingTexture",F._matricesTexture,E),be.setOptional(A,F,"batchingIdTexture"),be.setValue(A,"batchingIdTexture",F._indirectTexture,E),be.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(A,"batchingColorTexture",F._colorsTexture,E));let or=k.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&kt.update(F,k,En),(dn||Ut.receiveShadow!==F.receiveShadow)&&(Ut.receiveShadow=F.receiveShadow,be.setValue(A,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(kn.envMap.value=It,kn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(kn.envMapIntensity.value=N.environmentIntensity),dn&&(be.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Md(kn,rr),ot&&z.fog===!0&&dt.refreshFogUniforms(kn,ot),dt.refreshMaterialUniforms(kn,z,X,it,p.state.transmissionRenderTarget[M.id]),Fs.upload(A,Fh(Ut),kn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Fs.upload(A,Fh(Ut),kn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&be.setValue(A,"center",F.center),be.setValue(A,"modelViewMatrix",F.modelViewMatrix),be.setValue(A,"normalMatrix",F.normalMatrix),be.setValue(A,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let vn=z.uniformsGroups;for(let _i=0,xi=vn.length;_i<xi;_i++){let Bh=vn[_i];D.update(Bh,En),D.bind(Bh,En)}}return En}function Md(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function bd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,N,k){Mt.get(M.texture).__webglTexture=N,Mt.get(M.depthTexture).__webglTexture=k;let z=Mt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){let k=Mt.get(M);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,k=0){P=M,R=N,I=k;let z=!0,F=null,ot=!1,gt=!1;if(M){let It=Mt.get(M);if(It.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(It.__hasExternalTextures)E.rebindTextures(M,Mt.get(M.texture).__webglTexture,Mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Pt=M.depthTexture;if(It.__boundDepthTexture!==Pt){if(Pt!==null&&Mt.has(Pt)&&(M.width!==Pt.image.width||M.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}let Vt=M.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(gt=!0);let Xt=Mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Xt[N])?F=Xt[N][k]:F=Xt[N],ot=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?F=Mt.get(M).__webglMultisampledFramebuffer:Array.isArray(Xt)?F=Xt[k]:F=Xt,C.copy(M.viewport),V.copy(M.scissor),B=M.scissorTest}else C.copy(Tt).multiplyScalar(X).floor(),V.copy(Gt).multiplyScalar(X).floor(),B=le;if(lt.bindFramebuffer(A.FRAMEBUFFER,F)&&z&&lt.drawBuffers(M,F),lt.viewport(C),lt.scissor(V),lt.setScissorTest(B),ot){let It=Mt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,k)}else if(gt){let It=Mt.get(M.texture),Vt=N||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,It.__webglTexture,k||0,Vt)}S=-1},this.readRenderTargetPixels=function(M,N,k,z,F,ot,gt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(Ct=Ct[gt]),Ct){lt.bindFramebuffer(A.FRAMEBUFFER,Ct);try{let It=M.texture,Vt=It.format,Xt=It.type;if(!St.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&k>=0&&k<=M.height-F&&A.readPixels(N,k,z,F,Yt.convert(Vt),Yt.convert(Xt),ot)}finally{let It=P!==null?Mt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(A.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,N,k,z,F,ot,gt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(Ct=Ct[gt]),Ct){let It=M.texture,Vt=It.format,Xt=It.type;if(!St.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-z&&k>=0&&k<=M.height-F){lt.bindFramebuffer(A.FRAMEBUFFER,Ct);let Pt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Pt),A.bufferData(A.PIXEL_PACK_BUFFER,ot.byteLength,A.STREAM_READ),A.readPixels(N,k,z,F,Yt.convert(Vt),Yt.convert(Xt),0);let re=P!==null?Mt.get(P).__webglFramebuffer:null;lt.bindFramebuffer(A.FRAMEBUFFER,re);let xe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await up(A,xe,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Pt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ot),A.deleteBuffer(Pt),A.deleteSync(xe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,k=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);let z=Math.pow(2,-k),F=Math.floor(M.image.width*z),ot=Math.floor(M.image.height*z),gt=N!==null?N.x:0,Ct=N!==null?N.y:0;E.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,gt,Ct,F,ot),lt.unbindTexture()},this.copyTextureToTexture=function(M,N,k=null,z=null,F=0){M.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let ot,gt,Ct,It,Vt,Xt,Pt,re,xe,Me=M.isCompressedTexture?M.mipmaps[F]:M.image;k!==null?(ot=k.max.x-k.min.x,gt=k.max.y-k.min.y,Ct=k.isBox3?k.max.z-k.min.z:1,It=k.min.x,Vt=k.min.y,Xt=k.isBox3?k.min.z:0):(ot=Me.width,gt=Me.height,Ct=Me.depth||1,It=0,Vt=0,Xt=0),z!==null?(Pt=z.x,re=z.y,xe=z.z):(Pt=0,re=0,xe=0);let an=Yt.convert(N.format),ce=Yt.convert(N.type),Ut;N.isData3DTexture?(E.setTexture3D(N,0),Ut=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Ut=A.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Ut=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);let Kn=A.getParameter(A.UNPACK_ROW_LENGTH),he=A.getParameter(A.UNPACK_IMAGE_HEIGHT),En=A.getParameter(A.UNPACK_SKIP_PIXELS),gs=A.getParameter(A.UNPACK_SKIP_ROWS),dn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Me.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Me.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,It),A.pixelStorei(A.UNPACK_SKIP_ROWS,Vt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Xt);let rr=M.isDataArrayTexture||M.isData3DTexture,be=N.isDataArrayTexture||N.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let kn=Mt.get(M),or=Mt.get(N),vn=Mt.get(kn.__renderTarget),_i=Mt.get(or.__renderTarget);lt.bindFramebuffer(A.READ_FRAMEBUFFER,vn.__webglFramebuffer),lt.bindFramebuffer(A.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let xi=0;xi<Ct;xi++)rr&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Mt.get(M).__webglTexture,F,Xt+xi),M.isDepthTexture?(be&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Mt.get(N).__webglTexture,F,xe+xi),A.blitFramebuffer(It,Vt,ot,gt,Pt,re,ot,gt,A.DEPTH_BUFFER_BIT,A.NEAREST)):be?A.copyTexSubImage3D(Ut,F,Pt,re,xe+xi,It,Vt,ot,gt):A.copyTexSubImage2D(Ut,F,Pt,re,xe+xi,It,Vt,ot,gt);lt.bindFramebuffer(A.READ_FRAMEBUFFER,null),lt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else be?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Ut,F,Pt,re,xe,ot,gt,Ct,an,ce,Me.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Ut,F,Pt,re,xe,ot,gt,Ct,an,Me.data):A.texSubImage3D(Ut,F,Pt,re,xe,ot,gt,Ct,an,ce,Me):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,F,Pt,re,ot,gt,an,ce,Me.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,F,Pt,re,Me.width,Me.height,an,Me.data):A.texSubImage2D(A.TEXTURE_2D,F,Pt,re,ot,gt,an,ce,Me);A.pixelStorei(A.UNPACK_ROW_LENGTH,Kn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,he),A.pixelStorei(A.UNPACK_SKIP_PIXELS,En),A.pixelStorei(A.UNPACK_SKIP_ROWS,gs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,dn),F===0&&N.generateMipmaps&&A.generateMipmap(Ut),lt.unbindTexture()},this.copyTextureToTexture3D=function(M,N,k=null,z=null,F=0){return M.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,M=arguments[2],N=arguments[3],F=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,k,z,F)},this.initRenderTarget=function(M){Mt.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),lt.unbindTexture()},this.resetState=function(){R=0,I=0,P=null,lt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var qo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Zo=class extends gn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new L,s=[],r=[],o=[],a=new L,l=new ve;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ze(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends Mn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gc=class extends wr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var To=new L,cl=new Yc,hl=new Yc,ul=new Yc,_c=class extends Mn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),cl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),hl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ul.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),hl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ul.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(cl.calc(l),hl.calc(l),ul.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ku(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function ax(n,t){let e=1-n;return e*e*t}function lx(n,t){return 2*(1-n)*n*t}function cx(n,t){return n*n*t}function mr(n,t,e,i){return ax(n,t)+lx(n,e)+cx(n,i)}function hx(n,t){let e=1-n;return e*e*e*t}function ux(n,t){let e=1-n;return 3*e*e*n*t}function fx(n,t){return 3*(1-n)*n*n*t}function dx(n,t){return n*n*n*t}function gr(n,t,e,i,s){return hx(n,t)+ux(n,e)+fx(n,i)+dx(n,s)}var Jo=class extends Mn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xc=class extends Mn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends Mn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vc=class extends Mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends Mn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends Mn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(ku(a,l.x,c.x,h.x,u.x),ku(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Mc=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:_c,CubicBezierCurve:Jo,CubicBezierCurve3:xc,EllipseCurve:wr,LineCurve:Ko,LineCurve3:vc,QuadraticBezierCurve:jo,QuadraticBezierCurve3:yc,SplineCurve:Qo}),bc=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Mc[s.type]().fromJSON(s))}return this}},ta=class extends bc{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ko(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new jo(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Jo(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Qo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new wr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Gs=class n extends Ge{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function w(){let x=new L,U=new L,R=0,I=(e-t)/i;for(let P=0;P<=r;P++){let S=[],y=P/r,C=y*(e-t)+t;for(let V=0;V<=s;V++){let B=V/s,G=B*l+a,J=Math.sin(G),W=Math.cos(G);U.x=C*J,U.y=-y*i+m,U.z=C*W,u.push(U.x,U.y,U.z),x.set(J,I,W).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-y),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let y=_[S][P],C=_[S+1][P],V=_[S+1][P+1],B=_[S][P+1];(t>0||S!==0)&&(h.push(y,C,B),R+=3),(e>0||S!==r-1)&&(h.push(C,V,B),R+=3)}c.addGroup(p,R,0),p+=R}function b(x){let U=g,R=new ct,I=new L,P=0,S=x===!0?t:e,y=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;let C=g;for(let V=0;V<=s;V++){let G=V/s*l+a,J=Math.cos(G),W=Math.sin(G);I.x=S*W,I.y=m*y,I.z=S*J,u.push(I.x,I.y,I.z),f.push(0,y,0),R.x=J*.5+.5,R.y=W*.5*y+.5,d.push(R.x,R.y),g++}for(let V=0;V<s;V++){let B=U+V,G=C+V;x===!0?h.push(G,G+1,B):h.push(G+1,G,B),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class n extends Gs{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Er=class n extends Ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let b=new L,x=new L,U=new L;for(let R=0;R<e.length;R+=3)d(e[R+0],b),d(e[R+1],x),d(e[R+2],U),l(b,x,U,w)}function l(w,b,x,U){let R=U+1,I=[];for(let P=0;P<=R;P++){I[P]=[];let S=w.clone().lerp(x,P/R),y=b.clone().lerp(x,P/R),C=R-P;for(let V=0;V<=C;V++)V===0&&P===R?I[P][V]=S:I[P][V]=S.clone().lerp(y,V/C)}for(let P=0;P<R;P++)for(let S=0;S<2*(R-P)-1;S++){let y=Math.floor(S/2);S%2===0?(f(I[P][y+1]),f(I[P+1][y]),f(I[P][y])):(f(I[P][y+1]),f(I[P+1][y+1]),f(I[P+1][y]))}}function c(w){let b=new L;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(w),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let w=new L;for(let b=0;b<r.length;b+=3){w.x=r[b+0],w.y=r[b+1],w.z=r[b+2];let x=m(w)/2/Math.PI+.5,U=p(w)/Math.PI+.5;o.push(x,1-U)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){let b=o[w+0],x=o[w+2],U=o[w+4],R=Math.max(b,x,U),I=Math.min(b,x,U);R>.9&&I<.1&&(b<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),U<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,b){let x=w*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){let w=new L,b=new L,x=new L,U=new L,R=new ct,I=new ct,P=new ct;for(let S=0,y=0;S<r.length;S+=9,y+=6){w.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),R.set(o[y+0],o[y+1]),I.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),U.copy(w).add(b).add(x).divideScalar(3);let C=m(U);_(R,y+0,w,C),_(I,y+2,b,C),_(P,y+4,x,C)}}function _(w,b,x,U){U<0&&w.x===1&&(o[b]=w.x-1),x.x===0&&x.z===0&&(o[b]=U/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},na=class n extends Er{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Tr=class extends ta{constructor(t){super(t),this.uuid=$s(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ta().fromJSON(s))}return this}},px={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=gf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=vx(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ar(r,o,e,a,l,d,0),o}};function gf(n,t,e,i,s){let r,o;if(s===Ix(n,t,e,i)>0)for(r=t;r<e;r+=i)o=zu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=zu(r,n[r],n[r+1],o);return o&&pa(o,o.next)&&(Cr(o),o=o.next),o}function ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(pa(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ar(n,t,e,i,s,r,o){if(!n)return;!o&&r&&wx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?gx(n,i,s,r):mx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Cr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=_x(ss(n),t,e),Ar(n,t,e,i,s,r,2)):o===2&&xx(n,t,e,i,s,r):Ar(ss(n),t,e,i,s,r,1);break}}}function mx(n){let t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ls(s,a,r,l,o,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ae(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Sc(d,g,t,e,i),w=Sc(_,m,t,e,i),b=n.prevZ,x=n.nextZ;for(;b&&b.z>=p&&x&&x.z<=w;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ls(a,h,l,u,c,f,b.x,b.y)&&Ae(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ls(a,h,l,u,c,f,x.x,x.y)&&Ae(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ls(a,h,l,u,c,f,b.x,b.y)&&Ae(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ls(a,h,l,u,c,f,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function _x(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!pa(s,r)&&_f(s,i,i.next,r)&&Rr(s,r)&&Rr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Cr(i),Cr(i.next),i=n=r),i=i.next}while(i!==n);return ss(i)}function xx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let l=xf(o,a);o=ss(o,o.next),l=ss(l,l.next),Ar(o,t,e,i,s,r,0),Ar(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function vx(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=gf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Tx(c));for(s.sort(yx),r=0;r<s.length;r++)e=Mx(s[r],e);return e}function yx(n,t){return n.x-t.x}function Mx(n,t){let e=bx(n,t);if(!e)return t;let i=xf(e,n);return ss(i,i.next),ss(e,e.next)}function bx(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ls(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Rr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Sx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Sx(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function wx(n,t,e,i){let s=n;do s.z===0&&(s.z=Sc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Sc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Tx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ls(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Ax(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Rx(n,t)&&(Rr(n,t)&&Rr(t,n)&&Cx(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||pa(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function pa(n,t){return n.x===t.x&&n.y===t.y}function _f(n,t,e,i){let s=Ro(Ae(n,t,e)),r=Ro(Ae(n,t,i)),o=Ro(Ae(e,i,n)),a=Ro(Ae(e,i,t));return!!(s!==r&&o!==a||s===0&&Ao(n,e,t)||r===0&&Ao(n,i,t)||o===0&&Ao(e,n,i)||a===0&&Ao(e,t,i))}function Ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ro(n){return n>0?1:n<0?-1:0}function Rx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&_f(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Rr(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function Cx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xf(n,t){let e=new wc(n.i,n.x,n.y),i=new wc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function zu(n,t,e,i){let s=new wc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ix(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var _r=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Hu(t),Vu(i,t);let o=t.length;e.forEach(Hu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vu(i,e[l]);let a=px.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Vu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ia=class n extends Ge{constructor(t=new Tr([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Px,b,x=!1,U,R,I,P;p&&(b=p.getSpacedPoints(h),x=!0,f=!1,U=p.computeFrenetFrames(h,!1),R=new L,I=new L,P=new L),f||(m=0,d=0,g=0,_=0);let S=a.extractPoints(c),y=S.shape,C=S.holes;if(!_r.isClockWise(y)){y=y.reverse();for(let j=0,st=C.length;j<st;j++){let A=C[j];_r.isClockWise(A)&&(C[j]=A.reverse())}}let B=_r.triangulateShape(y,C),G=y;for(let j=0,st=C.length;j<st;j++){let A=C[j];y=y.concat(A)}function J(j,st,A){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(st,A)}let W=y.length,it=B.length;function X(j,st,A){let Lt,tt,St,lt=j.x-st.x,Ft=j.y-st.y,Mt=A.x-j.x,E=A.y-j.y,v=lt*lt+Ft*Ft,O=lt*E-Ft*Mt;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(v),Q=Math.sqrt(Mt*Mt+E*E),q=st.x-Ft/Y,Rt=st.y+lt/Y,dt=A.x-E/Q,bt=A.y+Mt/Q,Qt=((dt-q)*E-(bt-Rt)*Mt)/(lt*E-Ft*Mt);Lt=q+lt*Qt-j.x,tt=Rt+Ft*Qt-j.y;let nt=Lt*Lt+tt*tt;if(nt<=2)return new ct(Lt,tt);St=Math.sqrt(nt/2)}else{let Y=!1;lt>Number.EPSILON?Mt>Number.EPSILON&&(Y=!0):lt<-Number.EPSILON?Mt<-Number.EPSILON&&(Y=!0):Math.sign(Ft)===Math.sign(E)&&(Y=!0),Y?(Lt=-Ft,tt=lt,St=Math.sqrt(v)):(Lt=lt,tt=Ft,St=Math.sqrt(v/2))}return new ct(Lt/St,tt/St)}let ht=[];for(let j=0,st=G.length,A=st-1,Lt=j+1;j<st;j++,A++,Lt++)A===st&&(A=0),Lt===st&&(Lt=0),ht[j]=X(G[j],G[A],G[Lt]);let xt=[],Tt,Gt=ht.concat();for(let j=0,st=C.length;j<st;j++){let A=C[j];Tt=[];for(let Lt=0,tt=A.length,St=tt-1,lt=Lt+1;Lt<tt;Lt++,St++,lt++)St===tt&&(St=0),lt===tt&&(lt=0),Tt[Lt]=X(A[Lt],A[St],A[lt]);xt.push(Tt),Gt=Gt.concat(Tt)}for(let j=0;j<m;j++){let st=j/m,A=d*Math.cos(st*Math.PI/2),Lt=g*Math.sin(st*Math.PI/2)+_;for(let tt=0,St=G.length;tt<St;tt++){let lt=J(G[tt],ht[tt],Lt);at(lt.x,lt.y,-A)}for(let tt=0,St=C.length;tt<St;tt++){let lt=C[tt];Tt=xt[tt];for(let Ft=0,Mt=lt.length;Ft<Mt;Ft++){let E=J(lt[Ft],Tt[Ft],Lt);at(E.x,E.y,-A)}}}let le=g+_;for(let j=0;j<W;j++){let st=f?J(y[j],Gt[j],le):y[j];x?(I.copy(U.normals[0]).multiplyScalar(st.x),R.copy(U.binormals[0]).multiplyScalar(st.y),P.copy(b[0]).add(I).add(R),at(P.x,P.y,P.z)):at(st.x,st.y,0)}for(let j=1;j<=h;j++)for(let st=0;st<W;st++){let A=f?J(y[st],Gt[st],le):y[st];x?(I.copy(U.normals[j]).multiplyScalar(A.x),R.copy(U.binormals[j]).multiplyScalar(A.y),P.copy(b[j]).add(I).add(R),at(P.x,P.y,P.z)):at(A.x,A.y,u/h*j)}for(let j=m-1;j>=0;j--){let st=j/m,A=d*Math.cos(st*Math.PI/2),Lt=g*Math.sin(st*Math.PI/2)+_;for(let tt=0,St=G.length;tt<St;tt++){let lt=J(G[tt],ht[tt],Lt);at(lt.x,lt.y,u+A)}for(let tt=0,St=C.length;tt<St;tt++){let lt=C[tt];Tt=xt[tt];for(let Ft=0,Mt=lt.length;Ft<Mt;Ft++){let E=J(lt[Ft],Tt[Ft],Lt);x?at(E.x,E.y+b[h-1].y,b[h-1].x+A):at(E.x,E.y,u+A)}}}Z(),rt();function Z(){let j=s.length/3;if(f){let st=0,A=W*st;for(let Lt=0;Lt<it;Lt++){let tt=B[Lt];Nt(tt[2]+A,tt[1]+A,tt[0]+A)}st=h+m*2,A=W*st;for(let Lt=0;Lt<it;Lt++){let tt=B[Lt];Nt(tt[0]+A,tt[1]+A,tt[2]+A)}}else{for(let st=0;st<it;st++){let A=B[st];Nt(A[2],A[1],A[0])}for(let st=0;st<it;st++){let A=B[st];Nt(A[0]+W*h,A[1]+W*h,A[2]+W*h)}}i.addGroup(j,s.length/3-j,0)}function rt(){let j=s.length/3,st=0;At(G,st),st+=G.length;for(let A=0,Lt=C.length;A<Lt;A++){let tt=C[A];At(tt,st),st+=tt.length}i.addGroup(j,s.length/3-j,1)}function At(j,st){let A=j.length;for(;--A>=0;){let Lt=A,tt=A-1;tt<0&&(tt=j.length-1);for(let St=0,lt=h+m*2;St<lt;St++){let Ft=W*St,Mt=W*(St+1),E=st+Lt+Ft,v=st+tt+Ft,O=st+tt+Mt,Y=st+Lt+Mt;Ht(E,v,O,Y)}}}function at(j,st,A){l.push(j),l.push(st),l.push(A)}function Nt(j,st,A){Bt(j),Bt(st),Bt(A);let Lt=s.length/3,tt=w.generateTopUV(i,s,Lt-3,Lt-2,Lt-1);ne(tt[0]),ne(tt[1]),ne(tt[2])}function Ht(j,st,A,Lt){Bt(j),Bt(st),Bt(Lt),Bt(st),Bt(A),Bt(Lt);let tt=s.length/3,St=w.generateSideWallUV(i,s,tt-6,tt-3,tt-2,tt-1);ne(St[0]),ne(St[1]),ne(St[3]),ne(St[1]),ne(St[2]),ne(St[3])}function Bt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function ne(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Lx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mc[s.type]().fromJSON(s)),new n(i,t.options)}},Px={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(f,1-g),new ct(_,1-p)]:[new ct(a,1-l),new ct(h,1-u),new ct(d,1-g),new ct(m,1-p)]}};function Lx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sa=class n extends Er{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},ra=class n extends Er{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},oa=class n extends Ge{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new L,g=new ct;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let w=p+m,b=w,x=w+i+1,U=w+i+2,R=w+1;a.push(b,x,R),a.push(x,U,R)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ir=class n extends Ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let w=[],b=p/i,x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){let R=U/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(R+x,1-b),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){let b=h[p][w+1],x=h[p][w],U=h[p+1][w],R=h[p+1][w+1];(p!==0||o>0)&&d.push(b,x,R),(p!==i-1||l<Math.PI)&&d.push(x,U,R)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var aa=class n extends Ge{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ui=class extends es{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Co(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Dx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ec=class extends Ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wh:r=t,a=2*e-i;break;case Xh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:o=t,l=2*i-e;break;case Xh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let U=0;U!==a;++U)r[U]=p*o[h+U]+w*o[c+U]+b*o[l+U]+x*o[u+U];return r}},Tc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ac=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ec(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case No:e=this.InterpolantFactoryMethodDiscrete;break;case jl:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Dx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=jl;var rs=class extends Ln{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=No;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Ln{};Rc.prototype.ValueTypeName="color";var Cc=class extends Ln{};Cc.prototype.ValueTypeName="number";var Ic=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ii.slerpFlat(r,0,o,c-a,o,c,l);return r}},la=class extends Ln{InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Ln{constructor(t,e,i){super(t,e,i)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=No;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends Ln{};Pc.prototype.ValueTypeName="vector";var Lc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Ux=new Lc,Dc=class{constructor(t){this.manager=t!==void 0?t:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ca=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Pr=class extends ca{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fl=new ve,Gu=new L,Wu=new L,Uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nc=class extends Uc{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qc="\\[\\]\\.:\\/",Nx=new RegExp("["+qc+"]","g"),Zc="[^"+qc+"]",Fx="[^"+qc.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",Zc),Bx=/(WCOD+)?/.source.replace("WCOD",Fx),kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zc),zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zc),Hx=new RegExp("^"+Ox+Bx+kx+zx+"$"),Vx=["material","materials","bones","map"],Fc=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Fc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ay=new Float32Array(1);var Xu=new ve,ha=class{constructor(t,e,i=0,s=1/0){this.ray=new zo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(t,e=!0,i=[]){return Oc(t,this,i,e),i.sort($u),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,i,e);return i.sort($u),i}};function $u(n,t){return n.distance-t.distance}function Oc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Jc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ge,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=vf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=vf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function vf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new hn(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Be=window.GRIND_CFG||{},Ve="$"+(Be.TICKER||"GRIND"),te=72,Se=56;var Ma=.6,Aa=Be.MEMBER_MIN||1e4,kr=[0,0];{let n=0;for(let t=1;t<99;t++)n+=Math.floor(t+300*Math.pow(2,t/7)),kr[t+1]=Math.floor(n/4)}var Wx=n=>{let t=1;for(;t<99&&n>=kr[t+1];)t++;return t},tn={wc:{name:"Woodcutting",short:"WC",verb:"Chop down",col:"#6b8e23"},mine:{name:"Mining",short:"Mine",verb:"Mine",col:"#8a7f73"},fish:{name:"Fishing",short:"Fish",verb:"Net",col:"#3a86c8"}},pi=Object.keys(tn),zr={tree:{skill:"wc",name:"Tree",lvl:1,xp:25,item:"logs",deplete:.35,respawn:8,ex:"A tree. It is hiding logs from you."},oak:{skill:"wc",name:"Oak",lvl:15,xp:37.5,item:"oak_logs",deplete:.125,respawn:14,ex:"Thick trunk. Thicker grind."},willow:{skill:"wc",name:"Willow",lvl:30,xp:67.5,item:"willow_logs",deplete:.125,respawn:18,ex:"Everyone powerlevels here. Nobody knows why."},maple:{skill:"wc",name:"Maple",lvl:45,xp:100,item:"maple_logs",deplete:.125,respawn:30,ex:"The leaves are orange. So is your screen time."},yew:{skill:"wc",name:"Yew",lvl:60,xp:175,item:"yew_logs",deplete:.1,respawn:50,ex:"Old, dark and full of money.",mem:!0},goldtree:{skill:"wc",name:"Gold tree",lvl:80,xp:250,item:"gold_logs",deplete:.08,respawn:90,ex:"Someone planted a coin. It worked.",mem:!0},copper:{skill:"mine",name:"Copper rocks",lvl:1,xp:17.5,item:"copper_ore",deplete:1,respawn:3,ore:"#d4793a",ex:"Orange specks. Starter money."},tin:{skill:"mine",name:"Tin rocks",lvl:1,xp:17.5,item:"tin_ore",deplete:1,respawn:3,ore:"#c9c9c9",ex:"Grey specks on a grey rock. Thrilling."},iron:{skill:"mine",name:"Iron rocks",lvl:15,xp:35,item:"iron_ore",deplete:1,respawn:6,ore:"#8a4b32",ex:"Rusty. Reliable. Crowded."},silver:{skill:"mine",name:"Silver rocks",lvl:20,xp:40,item:"silver_ore",deplete:1,respawn:20,ore:"#eef3f7",ex:"Shiny enough to distract you."},coal:{skill:"mine",name:"Coal rocks",lvl:30,xp:50,item:"coal",deplete:1,respawn:15,ore:"#1c1c1c",ex:"Black gold, without the gold."},gold:{skill:"mine",name:"Gold rocks",lvl:40,xp:65,item:"gold_ore",deplete:1,respawn:30,ore:"#ffcf33",ex:"Actual gold. Try not to scream."},crystal:{skill:"mine",name:"Crystal rocks",lvl:70,xp:120,item:"crystal_ore",deplete:1,respawn:60,ore:"#6ff3ff",ex:"Humming. Probably fine.",mem:!0},grindrock:{skill:"mine",name:"GRIND rocks",lvl:85,xp:200,item:"grind_ore",deplete:1,respawn:120,ore:"#ff2ea8",ex:"The rock that named a coin.",mem:!0},shrimp:{skill:"fish",name:"Fishing spot",sub:"Net",lvl:1,xp:10,item:"raw_shrimp",ex:"Small fish. Small dreams."},trout:{skill:"fish",name:"Fishing spot",sub:"Lure",lvl:20,xp:50,item:"raw_trout",ex:"Trout jumping like your portfolio."},lobster:{skill:"fish",name:"Fishing spot",sub:"Cage",lvl:40,xp:90,item:"raw_lobster",ex:"Lobsters. Everyone wants lobsters."},swordfish:{skill:"fish",name:"Fishing spot",sub:"Harpoon",lvl:50,xp:100,item:"raw_swordfish",ex:"Pointy fish. Keep your distance."},shark:{skill:"fish",name:"Fishing spot",sub:"Harpoon",lvl:76,xp:110,item:"raw_shark",ex:"Endgame fish.",mem:!0}},et={logs:{name:"Logs",t:"res",v:5,ico:"log",col:"#9b6b3c"},oak_logs:{name:"Oak logs",t:"res",v:20,ico:"log",col:"#b9854d"},willow_logs:{name:"Willow logs",t:"res",v:35,ico:"log",col:"#a3a35a"},maple_logs:{name:"Maple logs",t:"res",v:70,ico:"log",col:"#c4652e"},yew_logs:{name:"Yew logs",t:"res",v:250,ico:"log",col:"#6e4a2d"},gold_logs:{name:"Gold logs",t:"res",v:700,ico:"log",col:"#ffcc33"},copper_ore:{name:"Copper ore",t:"res",v:5,ico:"ore",col:"#d4793a"},tin_ore:{name:"Tin ore",t:"res",v:5,ico:"ore",col:"#c9c9c9"},iron_ore:{name:"Iron ore",t:"res",v:25,ico:"ore",col:"#8a4b32"},silver_ore:{name:"Silver ore",t:"res",v:45,ico:"ore",col:"#eef3f7"},coal:{name:"Coal",t:"res",v:60,ico:"ore",col:"#222222"},gold_ore:{name:"Gold ore",t:"res",v:150,ico:"ore",col:"#ffcf33"},crystal_ore:{name:"Crystal ore",t:"res",v:400,ico:"ore",col:"#6ff3ff"},grind_ore:{name:"GRIND ore",t:"res",v:900,ico:"ore",col:"#ff2ea8"},raw_shrimp:{name:"Raw shrimp",t:"res",v:5,ico:"fish",col:"#f08a6a"},raw_trout:{name:"Raw trout",t:"res",v:30,ico:"fish",col:"#9fb07a"},raw_lobster:{name:"Raw lobster",t:"res",v:120,ico:"lob",col:"#c8452f"},raw_swordfish:{name:"Raw swordfish",t:"res",v:180,ico:"fish",col:"#8fa8c8"},raw_shark:{name:"Raw shark",t:"res",v:500,ico:"fish",col:"#6f8290"},bird_nest:{name:"Bird nest",t:"rare",v:300,ico:"nest",col:"#8a6a3a",trade:600,open:!0,ex:"Something is in there."},casket:{name:"Casket",t:"rare",v:300,ico:"box",col:"#7a5230",trade:600,open:!0,ex:"Fished out of the lake. Rattles."},sapphire:{name:"Uncut sapphire",t:"rare",v:250,ico:"gem",col:"#2f5bff",trade:500},emerald:{name:"Uncut emerald",t:"rare",v:500,ico:"gem",col:"#1fbf4a",trade:1100},ruby:{name:"Uncut ruby",t:"rare",v:1e3,ico:"gem",col:"#e0203a",trade:2400},diamond:{name:"Uncut diamond",t:"rare",v:2e3,ico:"gem",col:"#e8fbff",trade:5e3},lj_hat:{name:"Lumberjack hat",t:"wear",slot:"head",v:0,ico:"hat",col:"#7a4a2a",bonus:{wc:1},trade:9e3},lj_top:{name:"Lumberjack top",t:"wear",slot:"body",v:0,ico:"top",col:"#b83a2e",bonus:{wc:1.5},trade:12e3},pr_helm:{name:"Prospector helmet",t:"wear",slot:"head",v:0,ico:"helm",col:"#e0b12a",bonus:{mine:1},trade:9e3},pr_top:{name:"Prospector jacket",t:"wear",slot:"body",v:0,ico:"top",col:"#6b6f7a",bonus:{mine:1.5},trade:12e3},an_hat:{name:"Angler hat",t:"wear",slot:"head",v:0,ico:"hat",col:"#3a6e8a",bonus:{fish:1},trade:9e3},an_top:{name:"Angler top",t:"wear",slot:"body",v:0,ico:"top",col:"#2f5f78",bonus:{fish:1.5},trade:12e3},phat_red:{name:"Red party hat",t:"wear",slot:"head",v:0,ico:"phat",col:"#e0202a",trade:25e4},phat_blue:{name:"Blue party hat",t:"wear",slot:"head",v:0,ico:"phat",col:"#2a4bdf",trade:26e4},phat_green:{name:"Green party hat",t:"wear",slot:"head",v:0,ico:"phat",col:"#1fb33a",trade:24e4},phat_yellow:{name:"Yellow party hat",t:"wear",slot:"head",v:0,ico:"phat",col:"#f5d418",trade:23e4},phat_purple:{name:"Purple party hat",t:"wear",slot:"head",v:0,ico:"phat",col:"#8a2be2",trade:27e4},phat_white:{name:"White party hat",t:"wear",slot:"head",v:0,ico:"phat",col:"#f4f4f4",trade:4e5},goblin_crown:{name:"Goblin crown",t:"wear",slot:"head",v:0,ico:"crown",col:"#8fbf3a",trade:45e3},pet_beaver:{name:"Beaver",t:"pet",v:0,ico:"beaver",col:"#8a5a2b",trade:15e4,ex:"It chews logs for fun."},pet_golem:{name:"Rock golem",t:"pet",v:0,ico:"golem",col:"#8a8a8a",trade:15e4,ex:"Small rock. Big attitude."},pet_heron:{name:"Heron",t:"pet",v:0,ico:"heron",col:"#c8d4dc",trade:15e4,ex:"Judges your fishing."},cape_wc:{name:"Woodcutting cape",t:"wear",slot:"cape",v:0,ico:"cape",col:"#6b8e23",bonus:{wc:5},ex:"For the few who reached 99 Woodcutting."},cape_mine:{name:"Mining cape",t:"wear",slot:"cape",v:0,ico:"cape",col:"#8a7f73",bonus:{mine:5},ex:"For the few who reached 99 Mining."},cape_fish:{name:"Fishing cape",t:"wear",slot:"cape",v:0,ico:"cape",col:"#3a86c8",bonus:{fish:5},ex:"For the few who reached 99 Fishing."},grind_crown:{name:"GRIND crown",t:"wear",slot:"head",v:0,ico:"crown",col:"#ffcc00",ex_price:4e4,bonus:{wc:2,mine:2,fish:2}},grind_cape:{name:"GRIND cape",t:"wear",slot:"cape",v:0,ico:"cape",col:"#ff2ea8",ex_price:6e4,bonus:{wc:3,mine:3,fish:3}}},ch=["phat_red","phat_blue","phat_green","phat_yellow","phat_purple","phat_white"],xy=Object.keys(et).filter(n=>et[n].trade),Fi=[{name:"Bronze",lvl:1,price:0,col:"#a0673a"},{name:"Iron",lvl:10,price:250,col:"#6d6d72"},{name:"Steel",lvl:20,price:1500,col:"#b7bcc4"},{name:"Gold",lvl:35,price:12e3,col:"#ffcc33"},{name:"Diamond",lvl:50,price:9e4,col:"#8ff3ff"},{name:"GRIND",lvl:70,grind:5e4,col:"#ff2ea8"}],er={wc:"axe",mine:"pickaxe",fish:"harpoon"},tr={x2:{name:"Double XP",desc:"2x XP in every skill for 1 hour",price:5e3,dur:3600},lucky:{name:"Lucky hour",desc:"3x rare drop chance for 1 hour",price:6e3,dur:3600}},Xx=["xX_Grinder_Xx","iron_mike","lumber_larry","fishbrain","pickaxe_pat","wc_andy","b0bby_logs","goblin_slayer","maxed_mom","noob_4_life","gz_guy","yew_hunter","rock_on","lobster_lord","afk_andy","pet_hunter","coal_miner","shrimp_king","grind_gary","mr_willow","diamond_dave","gp_grabber","bankstander","skill_issue","axe_wound","ore_you_ok","reel_deal","dad_of_logs","sir_chops","minecraft_steve","phat_or_bust","zero_to_99","early_enjoyer","first_log"],$x=["degen","sol","pump","ape","chad","anon","based","moon","bag","whale","jeet","ser","fren","wagmi","gm","grind","log","ore","fish","noob","rune","phat","yew","lobby","diamond","paper","mint","rug","floor","bonk"],Yx=["_lord","boy","420","_xx","king","_99","maxi","_ape","god","lad","hands","_sol","guy","enjoyer","_eth","chad","io","_fi","bro","69"],qx=["gm degens","aped in","early to $GRINDSET","saw this on X","is this the $GRINDSET game?","wagmi","lfg","gm","is this the launch?","first!","yooo","lets goo","early","where do i start","gm grinders","how do i chop","wow its live","hi all","grind time"],Zx=["$GRINDSET to the moon","just aped 2 sol into $GRINDSET","who is holding $GRINDSET","chart looking healthy","diamond hands only","gm degens","wagmi","ngmi if you dont grind","holding 10k $GRINDSET for members","wen members area","buy the dip on willow logs","phat floor is gonna be crazy","first party hat sells for a fortune","play to earn but it actually slaps","grinding for the weekly pool","top 10 weekly gets paid in $GRINDSET","bought more $GRINDSET","CA?","dev is based","this is the one","not selling a single $GRINDSET","my bag is 50% $GRINDSET now","sold a nest for $GRINDSET lol","imagine not holding","rugged my own inventory","jeets gonna jeet","holders get members, simple","already up on my gems","the exchange is basically a dex for logs","lfg $GRINDSET","gm gm","send it"],Jx=["first log!!","where do i sell","how do i get coins","anyone found a nest yet","who gets 10 first","shop is next to the bank","buying iron axe money lol","this is so relaxing","wait the goblin king is real?","grinding till 99 no sleep","mine or fish first?","copper and tin east","shrimp spots on the lake","i love this","chat how long to 99","my inv is full already"],Kx=["anyone got the beaver yet","free stuff plz","this rock is mine","willows are packed","goblin king soon","who wants to race to 99","just got a nest!!","ez coins","bank full again","sell me ur shrimp","is the exchange up?","lol ks","wc is so relaxing","need 13m xp for 99 rip","nice pet","oaks are better xp","got my steel axe","fishing is underrated","gz all"],jx=["gz","gz!","gzz","grats","gz man"],ga={skin:["#f1c27d","#e0ac69","#c68642","#8d5524","#ffdbac","#9be58f"],hair:["#3b2412","#111111","#d9b25a","#b5401f","#e8e8e8","#6a3fb0"],top:["#b83a2e","#2f5bd6","#2e8b3e","#e0b12a","#6a3fb0","#dddddd","#222222"],legs:["#3a3a5a","#5a3a1f","#2e5a2e","#222222","#8a8a8a","#7a1f1f"]},Ra=0,Wn=1,nr=2,di=3,Qr=4,Xr=6,to=7,gh=8,Ui=9,fn=new Uint8Array(te*Se).fill(Ra),rn=new Uint8Array(te*Se),_a=new Int16Array(te*Se).fill(-1),Kt=(n,t)=>t*te+n,ds=(n,t)=>n>=0&&t>=0&&n<te&&t<Se,Kc=1337,ae=()=>(Kc=Kc*16807%2147483647,(Kc-1)/2147483646);function Ke(n,t,e,i,s){for(let r=t;r<=i;r++)for(let o=n;o<=e;o++)ds(o,r)&&(fn[Kt(o,r)]=s)}function Qx(n,t,e,i,s=1){for(let r=t;r<=i;r++)for(let o=n;o<=e;o++)ds(o,r)&&(rn[Kt(o,r)]=s)}var _h=[],xn=[],On=[],tv=[{name:"Grindhaven",x0:26,y0:16,x1:48,y1:38},{name:"Whispering Woods",x0:1,y0:1,x1:23,y1:40},{name:"East Mine",x0:50,y0:1,x1:70,y1:40},{name:"Goblin Pit",x0:30,y0:2,x1:44,y1:14},{name:"Grind Lake",x0:1,y0:41,x1:70,y1:54}],ev=(n,t)=>tv.find(e=>n>=e.x0&&n<=e.x1&&t>=e.y0&&t<=e.y1)?.name||"Grindset",Ue={x0:30,y0:2,x1:44,y1:14,gx:37,gy:14},yf={x:37.5,y:7.5},Oi={x:37.5,y:34.5};(function(){Ke(1,1,23,40,Xr),Ke(50,1,70,40,to),Ke(29,21,45,35,nr),Ke(1,41,70,42,Qr),Ke(1,43,70,54,di),Ke(24,1,25,42,di),Ke(24,27,25,28,Ui),Ke(24,11,25,11,Ui),Ke(Ue.x0,Ue.y0,Ue.x1,Ue.y1,gh),Ke(26,27,28,28,Wn),Ke(46,27,49,28,Wn),Ke(37,15,38,20,Wn),Ke(37,36,38,40,Wn),Ke(18,27,23,28,Wn),Ke(50,27,56,28,Wn),Ke(26,11,36,11,Wn);for(let o=0;o<Se;o++)for(let a=0;a<te;a++)fn[Kt(a,o)]===di&&(rn[Kt(a,o)]=1),(a===0||o===0||a===te-1||o===Se-1)&&(rn[Kt(a,o)]=1);for(let o=Ue.x0;o<=Ue.x1;o++)rn[Kt(o,Ue.y0)]=1,(o<36||o>38)&&(rn[Kt(o,Ue.y1)]=1);for(let o=Ue.y0;o<=Ue.y1;o++)rn[Kt(Ue.x0,o)]=1,rn[Kt(Ue.x1,o)]=1;let t=(o,a,l,c,h,u)=>{_h.push({name:o,x0:a,y0:l,x1:c,y1:h,style:u}),Qx(a,l,c,h)};t("Bank",29,16,35,20,"stone"),t("General Store",40,16,45,20,"wood"),t("Tool Shop",26,30,27,33,"stall");for(let o=25;o<=31;o++)for(let a=34;a<=40;a++)Math.hypot(a+.5-37.5,o+.5-28.5)<2.6&&(rn[Kt(a,o)]=1);for(let o=32;o<=33;o++)for(let a=42;a<=43;a++)rn[Kt(a,o)]=1;let e=(o,a,l,c,h,u)=>xn.push({id:o,name:a,x:l+.5,y:c+.5,role:h,look:u,face:Math.PI});e("banker","Banker",32,21,"bank",{skin:"#e0ac69",hair:"#222",top:"#3a3a8a",legs:"#222"}),e("store","Shopkeeper",42,21,"store",{skin:"#f1c27d",hair:"#8a5a2b",top:"#7a4a2a",legs:"#3a3a5a"}),e("tools","Smith Brunn",28,31,"tools",{skin:"#c68642",hair:"#111",top:"#555",legs:"#3a2a1a"}),e("ge1","Exchange clerk",37,24,"ge",{skin:"#ffdbac",hair:"#d9b25a",top:"#1f6f4a",legs:"#222"}),e("ge2","Exchange clerk",41,28,"ge",{skin:"#8d5524",hair:"#111",top:"#1f6f4a",legs:"#222"}),e("ge3","Exchange clerk",37,32,"ge",{skin:"#f1c27d",hair:"#b5401f",top:"#1f6f4a",legs:"#222"}),e("ge4","Exchange clerk",33,28,"ge",{skin:"#e0ac69",hair:"#3b2412",top:"#1f6f4a",legs:"#222"}),e("guide","Grindset Guide",35,34,"guide",{skin:"#f1c27d",hair:"#e8e8e8",top:"#6a3fb0",legs:"#3a3a5a"});for(let o of xn)rn[Kt(Math.floor(o.x),Math.floor(o.y))]=1;xn.find(o=>o.id==="guide").face=0;let i=(o,a,l)=>{if(!ds(a,l)||_a[Kt(a,l)]>=0||(zr[o].skill==="fish"?fn[Kt(a,l)]!==di:rn[Kt(a,l)])||fn[Kt(a,l)]===Wn||fn[Kt(a,l)]===Ui||fn[Kt(a,l)]===nr)return!1;for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++)if(ds(a+f,l+u)&&_a[Kt(a+f,l+u)]>=0)return!1;let h={id:On.length,type:o,x:a+.5,y:l+.5,tx:a,ty:l,up:!0,t:0,def:zr[o]};return On.push(h),_a[Kt(a,l)]=h.id,zr[o].skill!=="fish"&&(rn[Kt(a,l)]=1),!0},s=(o,a,l,c,h,u)=>{let f=0,d=0;for(;f<u&&d++<600;)i(o,a+Math.floor(ae()*(c-a+1)),l+Math.floor(ae()*(h-l+1)))&&f++};s("tree",17,3,22,39,26),s("tree",27,36,35,39,4),s("tree",46,34,48,39,3),s("oak",11,3,16,39,16);for(let o=3;o<=39;o+=3)i("willow",23,o);for(let o=3;o<=21;o+=4)i("willow",o,40);s("maple",6,3,10,39,12),s("yew",2,3,5,24,6),i("goldtree",3,32),i("goldtree",3,36),s("copper",51,22,55,38,7),s("tin",51,22,55,38,7),s("copper",51,3,55,20,3),s("tin",51,3,55,20,3),s("iron",56,10,60,38,9),s("silver",61,24,64,38,4),s("coal",60,3,65,22,8),s("gold",65,12,69,38,6),s("crystal",66,2,69,10,3),i("grindrock",69,5),i("grindrock",68,8);let r=[["shrimp",[4,7,10,13]],["trout",[16,19,22]],["lobster",[30,33,36,40]],["swordfish",[44,48,52]],["shark",[58,62,66]]];for(let[o,a]of r)for(let l of a)i(o,l,43);i("trout",25,20),i("trout",25,35)})();var Ni=(n,t)=>ds(n,t)&&!rn[Kt(n,t)];function as(n,t,e){let i=new Set(e.map(([h,u])=>Kt(h,u))),s=new Int32Array(te*Se).fill(-1),r=Kt(n,t);s[r]=r;let o=[r],a=-1;for(let h=0;h<o.length;h++){let u=o[h];if(i.has(u)){a=u;break}let f=u%te,d=u/te|0;for(let[g,_]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let m=f+g,p=d+_;if(!Ni(m,p)||g&&_&&(!Ni(f+g,d)||!Ni(f,d+_)))continue;let w=Kt(m,p);s[w]===-1&&(s[w]=u,o.push(w))}}if(a<0)return null;let l=[],c=a;for(;c!==s[c];)l.push({x:c%te+.5,y:(c/te|0)+.5}),c=s[c];return l.reverse()}function $r(n,t){let e=[];for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++)(s||i)&&Ni(n+s,t+i)&&e.push([n+s,t+i]);return e}var Re=(n,t)=>n+Math.random()*(t-n),We=(n,t)=>Math.floor(Re(n,t+1)),ge=n=>n[Math.floor(Math.random()*n.length)],Sn=n=>(n=Math.floor(n),n>=1e7?(n/1e6).toFixed(1)+"M":n>=1e5?Math.floor(n/1e3)+"K":n.toLocaleString("en-US")),pe=n=>Math.floor(n).toLocaleString("en-US"),nv=Date.now(),iv=()=>(nv++).toString(36);function sv(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function rv(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}var T={id:"me",name:"",look:{skin:0,hair:0,top:0,legs:0},xp:{wc:0,mine:0,fish:0},coins:25,grind:Be.DEMO_GRIND??25e3,inv:new Array(28).fill(null),tools:{wc:0,mine:0,fish:0},eq:{head:null,body:null,cape:null,pet:null},bank:{},boosts:{},listings:[],flags:{},tut:0,weekXp:0,bossDmg:0,kc:0,x:Oi.x,y:Oi.y,path:null,action:null,face:Math.PI,moving:!1,walkT:0},Mf=rv("grindset_rs_v1");Mf&&Object.assign(T,Mf,{path:null,action:null,x:Oi.x,y:Oi.y});function Le(){let{path:n,action:t,bubble:e,emote:i,moving:s,...r}=T;sv("grindset_rs_v1",r)}var en=(n,t)=>Wx(n.xp[t]||0),ir=n=>pi.reduce((t,e)=>t+en(n,e),0),jc=n=>pi.reduce((t,e)=>t+(n.xp[e]||0),0),zf=()=>T.grind>=Aa,xh=()=>Date.now()/1e3,Yr=n=>(T.boosts[n]||0)>xh(),Bi=()=>T.inv.filter(n=>!n).length;function sr(n){let t=T.inv.indexOf(null);return t<0?!1:(T.inv[t]=n,!0)}function Hf(n,t){return n===T?T.tools[t]:n.tools[t]}function Vf(n,t){let e=0;if(n!==T)return 1;for(let i of["head","body","cape"]){let s=T.eq[i];s&&et[s].bonus?.[t]&&(e+=et[s].bonus[t])}return 1+e/100}var ye=[],xa=[];(function(){let t=Xx.slice().sort(()=>Math.random()-.5),e=We(45,60);for(;t.length<e;){let s=ge($x)+ge(Yx)+(Math.random()<.3?We(1,99):"");t.includes(s)||t.push(s)}t.length=e,t.sort(()=>Math.random()-.5);let i=.6;t.forEach((s,r)=>{let o={wc:0,mine:0,fish:0},a={skin:We(0,5),hair:We(0,5),top:We(0,6),legs:We(0,5)};xa.push({joinAt:i,id:"b"+r,name:s,xp:o,tools:{wc:0,mine:0,fish:0},look:a,eq:{head:null,body:null,cape:null,pet:null},stash:[],pace:Re(.55,1.05),afk:0,x:Oi.x,y:Oi.y,path:null,action:null,state:"idle",t:Re(1,4),carry:0,weekXp:0,bossDmg:0,face:Math.PI,moving:!1,walkT:0,anim:0}),i+=r<20?Re(.3,1.1):r<40?Re(.8,2.5):Re(2,5)})})();var bn=[];function ov(n,t){bn.push({id:iv(),seller:n.name,sellerId:n.id,key:t,price:Math.round(et[t].trade*Re(.85,1.4)/10)*10,t:Date.now()})}var ls=[],cs={amt:0};var Ks=[],js=[],Yn={},Bn=!1,va=0;function vh(n,t,e,i=30,s=1.2){for(let r=0;r<i;r++){let o=Math.random()*Math.PI*2,a=Re(1,4);Ks.push({x:n,y:t,h:s,vx:Math.cos(o)*a,vy:Math.sin(o)*a,vh:Re(2,6),t:0,col:ge(e)})}}function Ca(n,t,e){Array.isArray(n)&&(e=t);let i=Array.isArray(n)?n:[[n,t]],s=as(Math.floor(T.x),Math.floor(T.y),i);return s?(T.path=s,T.pending=e||null,T.action=null,T.follow=null,!s.length&&e&&(T.path=null,T.pending=null,e()),!0):(Dt("I can't reach that."),!1)}function Gf(n){return n.def.skill==="fish"?$r(n.tx,n.ty).filter(([t,e])=>fn[Kt(t,e)]!==di):$r(n.tx,n.ty)}var ba=(n,t,e)=>Math.max(Math.abs(Math.floor(n.x)-t),Math.abs(Math.floor(n.y)-e))<=1;function yh(n){let t=n.def,e=t.skill;if(t.mem&&!zf()){Dt(`You need to be a member to use this. Hold ${Sn(Aa)} ${Ve} in your wallet.`,"warn");return}if(en(T,e)<t.lvl){Dt(`You need a ${tn[e].name} level of ${t.lvl} to ${e==="wc"?"chop this tree":e==="mine"?"mine this rock":"fish here"}.`,"warn");return}if(!n.up){Dt(e==="wc"?"That tree has been cut down.":"There is no ore left in this rock.");return}if(Bi()===0){Dt(`Your inventory is too full to hold any more ${et[t.item].name.toLowerCase()}.`,"warn"),ph();return}let i=()=>{ba(T,n.tx,n.ty)&&(T.action={kind:"gather",node:n},T.face=Math.atan2(n.x-T.x,n.y-T.y),Dt(e==="wc"?"You swing your axe at the tree.":e==="mine"?"You swing your pickaxe at the rock.":"You attempt to catch a fish."),va=Ma*.6)};ba(T,n.tx,n.ty)&&!T.path?i():Ca(Gf(n),i)}function hh(n){let t=()=>{T.face=Math.atan2(n.x-T.x,n.y-T.y),n.role==="guide"?Ah():n.role==="store"?Di("store"):n.role==="tools"?Di("tools"):n.role==="bank"?Di("bank"):n.role==="ge"&&Di("ge")},e=Math.floor(n.x),i=Math.floor(n.y);ba(T,e,i)&&!T.path?t():Ca($r(e,i),t)}function bf(n){let t=n.action.node,e=t.def,i=e.skill,s=n===T;if(!t.up){n.action=null,s&&Sf(t);return}if(s&&Bi()===0){Dt(`Your inventory is too full to hold any more ${et[e.item].name.toLowerCase()}.`,"warn"),n.action=null,ph();return}n.anim=1;let r=en(n,i),o=Hf(n,i),a=Math.max(.1,Math.min(.92,.26+(r-e.lvl)*.011+o*.065));if(Math.random()>a*(s?1:n.pace))return;let l=r,c=e.xp*(s&&Yr("x2")?2:1)*Vf(n,i);if(n.xp[i]=Math.min(2e8,(n.xp[i]||0)+c),n.weekXp+=c,s){sr(e.item),Vv(i,c),Dt(i==="wc"?`You get some ${et[e.item].name.toLowerCase()}.`:i==="mine"?`You manage to mine some ${et[e.item].name.toLowerCase().replace(" ore","")}.`:`You catch some ${et[e.item].name.toLowerCase().replace("raw ","")}.`),av(i,e);let h=en(T,i);h>l&&cv(i,h),T.tut===1&&Zr(2),Bi()===0&&(Dt("Your inventory is full. Sell to the Shopkeeper or use the bank.","warn"),n.action=null,ph())}else{n.carry++;let h=en(n,i);h>l&&_v(n,i,h),xv(n,i,e)}if(e.deplete&&Math.random()<e.deplete){t.up=!1,t.t=e.respawn;for(let h of[T,...ye])h.action?.node===t&&(h.action=null,h===T&&(Dt(i==="wc"?"The tree falls.":"The rock is empty."),Sf(t)))}}function Sf(n){if(Bi()===0)return;let t=null,e=9;for(let i of On)if(i!==n&&i.type===n.type&&i.up){let s=Math.hypot(i.x-T.x,i.y-T.y);s<e&&(e=s,t=i)}t&&setTimeout(()=>{!T.action&&!T.path&&yh(t)},500)}function Xn(n){sr(n)||(T.bank[n]=(T.bank[n]||0)+1,Dt(`Your ${et[n].name} was sent to your bank (inventory full).`)),ud(n)}function av(n,t){let e=(Yr("lucky")?3:1)*(1+t.lvl/45),i=Math.random;if(n==="wc"&&i()<e/180&&(Dt("A bird's nest falls out of the tree!","rare"),Xn("bird_nest")),n==="fish"&&i()<e/220&&(Dt("You fish up a casket!","rare"),Xn("casket")),n==="mine"&&i()<e/200){let s=i()<.55?"sapphire":i()<.55?"emerald":i()<.6?"ruby":"diamond";Dt(`You just found an ${et[s].name.toLowerCase()}!`,"rare"),Xn(s)}if(i()<e/1500){let s=ge({wc:["lj_hat","lj_top"],mine:["pr_helm","pr_top"],fish:["an_hat","an_top"]}[n]);Dt(`You find a piece of an outfit: ${et[s].name}!`,"rare"),Xn(s),Fn(`${T.name} received a drop: ${et[s].name}`)}if(i()<e/4e3){let s={wc:"pet_beaver",mine:"pet_golem",fish:"pet_heron"}[n];Dt("You have a funny feeling like you're being followed.","rare"),Xn(s),Fn(`${T.name} has a funny feeling like they're being followed: ${et[s].name}!`)}}function lv(n){let t=T.inv[n];if(!et[t]?.open)return;T.inv[n]=null;let e=Math.random(),i;if(e<1/150?i=ge(ch):e<1/40?i=ge(["lj_hat","lj_top","pr_helm","pr_top","an_hat","an_top"]):e<.15&&(i=ge(["sapphire","emerald","ruby","diamond"])),i)sr(i),Dt(`You open the ${et[t].name.toLowerCase()} and find: ${et[i].name}!`,"rare"),ud(i),ch.includes(i)&&Fn(`${T.name} just found a ${et[i].name}!!!`);else{let s=We(150,2500);T.coins+=s,Dt(`You open the ${et[t].name.toLowerCase()} and find ${pe(s)} coins.`)}Le(),we()}function cv(n,t){Gv(n,t),Dt(`Congratulations, you've just advanced your ${tn[n].name} level. You are now level ${t}.`,"lvl"),vh(T.x,T.y,["#ff3b30","#ffe600","#2bff88","#2f7bff","#ff2ea8","#ffffff"],60,1.6),t===99&&(Xn("cape_"+n),Fn(`${T.name} has reached level 99 ${tn[n].name}!`)),setTimeout(()=>{let e=ye.filter(i=>Math.hypot(i.x-T.x,i.y-T.y)<14);for(let i=0;i<We(1,3);i++)setTimeout(()=>Nn(ge(e.length?e:ye),ge(jx)),i*700)},900),Le()}function hv(){let n=0,t=0;if(T.inv.forEach((e,i)=>{e&&et[e].t==="res"&&(t+=et[e].v,n++,T.inv[i]=null)}),!n){Dt("You have nothing the shop wants to buy.");return}T.coins+=t,T.flags.sold=!0,Dt(`You sell ${n} item${n>1?"s":""} for ${pe(t)} coins.`),T.tut===2&&Zr(3),Le(),we()}function Wf(n){let t=T.inv[n];!t||!et[t].v||(T.inv[n]=null,T.coins+=et[t].v,T.flags.sold=!0,Dt(`You sell ${et[t].name} for ${pe(et[t].v)} coins.`),T.tut===2&&Zr(3),Le(),we())}function uv(n,t){let e=Fi[t];if(!(T.tools[n]>=t)){if(en(T,n)<e.lvl){Dt(`You need ${tn[n].name} level ${e.lvl} to use that.`,"warn");return}if(e.grind){Sa(e.grind,()=>{T.tools[n]=t,Dt(`You buy a GRIND ${er[n]}. It hums.`,"rare")});return}if(T.coins<e.price){Dt("You don't have enough coins.","warn");return}T.coins-=e.price,T.tools[n]=t,Dt(`You buy a ${e.name.toLowerCase()} ${er[n]}.`),Le(),we()}}function fv(){let n=0;T.inv.forEach((t,e)=>{t&&(T.bank[t]=(T.bank[t]||0)+1,T.inv[e]=null,n++)}),Dt(n?`You deposit ${n} item${n>1?"s":""}.`:"Your inventory is empty."),Le(),we()}function Qc(n){if(T.bank[n]){if(!sr(n)){Dt("Your inventory is full.");return}--T.bank[n]<=0&&delete T.bank[n],Le(),we()}}function wf(n){let t=T.bank[n]||0;!t||!et[n].v||(T.coins+=t*et[n].v,delete T.bank[n],Dt(`You sell ${t} ${et[n].name.toLowerCase()} from your bank for ${pe(t*et[n].v)} coins.`),Le(),we())}function Ef(n){let t=T.inv[n],e=et[t];e&&(e.t==="pet"?(T.inv[n]=T.eq.pet,T.eq.pet=t,Dt(`Your ${e.name} starts following you.`)):e.t==="wear"&&(T.inv[n]=T.eq[e.slot],T.eq[e.slot]=t),Le(),we())}function dv(n){let t=T.eq[n];if(t){if(!sr(t)){Dt("Your inventory is full.");return}T.eq[n]=null,Le(),we()}}function Sa(n,t){if(T.grind<n){Dt(`You need ${pe(n)} ${Ve}.`,"warn");return}T.grind-=n,t(),Le(),we()}var pv=180,mv=90,vt={on:!1,hp:0,max:0,t:0,next:150,hits:{},x:yf.x,y:yf.y,anim:0,flash:0};function Xf(){vt.on=!0,vt.t=mv,vt.max=vt.hp=Math.round(500+ye.length*150+[T,...ye].reduce((n,t)=>n+ir(t),0)*6),vt.hits={},Fn("The Goblin King has stormed the Goblin Pit! Everyone north!");for(let n of ye)if(Math.random()<.75){n.action=null,n.state="boss";let t=as(Math.floor(n.x),Math.floor(n.y),[[We(34,41),We(9,12)]]);t&&(n.path=t)}}function Mh(){if(!vt.on){Dt("The Goblin King is not here right now.");return}let n=()=>{T.action={kind:"boss"}};if(Math.hypot(T.x-vt.x,T.y-vt.y)<2.6&&!T.path)n();else{let t=[];for(let e=4;e<=11;e++)for(let i=34;i<=41;i++)Ni(i,e)&&Math.hypot(i+.5-vt.x,e+.5-vt.y)<2.6&&t.push([i,e]);Ca(t,n)}}function Tf(n){let t=Math.round(4+ir(n)/7+(n===T?T.tools.mine*2:4)),e=Math.random()<.22,i=e?0:We(1,t);vt.hp-=i,vt.hits[n.id]=(vt.hits[n.id]||0)+i,vt.flash=.12,(n===T||Math.random()<.35)&&js.push({dmg:i,miss:e,t:0,ox:Re(-.6,.6),oy:Re(0,1),mine:n===T}),n.anim=1,n.face=Math.atan2(vt.x-n.x,vt.y-n.y),vt.hp<=0&&$f(!0)}function $f(n){vt.on=!1,vt.next=pv;let t=Object.entries(vt.hits).sort((e,i)=>i[1]-e[1]);if(n){let e=t[0]&&[T,...ye].find(s=>s.id===t[0][0]);Fn(`The Goblin King has been defeated! Most damage: ${e?e.name:"?"}`);let i=vt.hits.me||0;if(i>0){let s=i/vt.max,r=Math.round(400+s*25e3);if(T.coins+=r,T.bossDmg+=i,T.kc++,Dt(`You loot ${pe(r)} coins from the Goblin King.`,"rare"),Math.random()<.08+s&&(Dt("You take the Goblin crown!","rare"),Xn("goblin_crown")),e===T&&Math.random()<.02){let o=ge(ch);Xn(o),Fn(`${T.name} looted a ${et[o].name} from the Goblin King!!!`)}}for(let[s,r]of t){let o=ye.find(a=>a.id===s);o&&(o.bossDmg+=r)}}else Fn("The Goblin King got bored and went home. Be faster next time.");T.action?.kind==="boss"&&(T.action=null);for(let e of ye)e.state==="boss"&&(e.state="idle",e.t=Re(0,4),e.action=null);Le()}var uh=0;function gv(n){for(uh+=n;xa.length&&xa[0].joinAt<=uh;){let t=xa.shift();t.x=Oi.x+Re(-1.5,1.5),t.y=Oi.y+Re(-.5,1),t.t=Re(2,5),ye.push(t),Dt(`${t.name} has joined the world.`),vh(t.x,t.y,["#ffffff","#ffe600","#8fd0ff"],18,1.2),Math.random()<.45&&setTimeout(()=>Nn(t,ge(qx)),Re(1200,6e3))}}function _v(n,t,e){(e%5===0||e>=20)&&Math.random()<.5&&setTimeout(()=>Nn(n,ge([`${e} ${tn[t].short.toLowerCase()}!`,`lvl ${e} ${tn[t].name.toLowerCase()} lets go`,`${e} ${tn[t].short.toLowerCase()} finally`])),300),e===99&&Fn(`${n.name} has reached level 99 ${tn[t].name}!`);let i=n.tools[t];Fi.forEach((s,r)=>{r<5&&e>=s.lvl&&r>i&&Math.random()<.6&&(i=r)}),n.tools[t]=i}function xv(n,t,e){let i=Math.random(),s=1+e.lvl/45,r=null;if(t==="wc"&&i<s/220)r="bird_nest";else if(t==="fish"&&i<s/260)r="casket";else if(t==="mine"&&i<s/240)r=Math.random()<.6?"sapphire":Math.random()<.6?"emerald":Math.random()<.7?"ruby":"diamond";else if(i<s/3e3)r=ge({wc:["lj_hat","lj_top"],mine:["pr_helm","pr_top"],fish:["an_hat","an_top"]}[t]),Fn(`${n.name} received a drop: ${et[r].name}`);else if(i<s/9e3){r={wc:"pet_beaver",mine:"pet_golem",fish:"pet_heron"}[t],Fn(`${n.name} has a funny feeling like they're being followed: ${et[r].name}!`),n.eq.pet=r;return}if(r){if(et[r].slot==="head"&&!n.eq.head&&Math.random()<.6){n.eq.head=r;return}if(et[r].slot==="body"&&!n.eq.body&&Math.random()<.6){n.eq.body=r;return}n.stash.push(r),Math.random()<.5&&Nn(n,ge([`got a ${et[r].name.toLowerCase()}!`,`${et[r].name.toLowerCase()} lets gooo`,"first rare!!"]))}}var wa=xn.find(n=>n.id==="store");function vv(n,t){if(n.state==="boss"){if(!vt.on){n.state="idle";return}if(!n.path&&Math.hypot(n.x-vt.x,n.y-vt.y)<4)n.action={kind:"boss"};else if(!n.path){let e=as(Math.floor(n.x),Math.floor(n.y),[[We(35,40),We(9,11)]]);e&&(n.path=e)}return}if(n.t-=t,n.state==="bank"&&!n.path&&(n.carry=0,n.state="idle",n.t=Re(1,4),Math.random()<.3&&Nn(n,ge(["bank full again","sold","ez money","back to the grind"]))),n.state==="gather"&&!n.action&&!n.path&&(n.t=Math.min(n.t,Re(.5,2))),!(n.t>0)){if(n.t=Re(20,50),n.action=null,n.carry>We(18,28)){n.state="bank";let e=as(Math.floor(n.x),Math.floor(n.y),$r(Math.floor(wa.x),Math.floor(wa.y)));e&&(n.path=e);return}if(Math.random()<.1){n.state="idle",n.action=null,n.t=Re(15,45);return}if(Math.random()<.88){let e=n.main&&Math.random()<.7?n.main:n.main=ge(pi),i=On.filter(l=>l.def.skill===e&&l.up&&en(n,e)>=l.def.lvl);if(!i.length)return;let s=Math.max(...i.map(l=>l.def.lvl)),r=i.filter(l=>l.def.lvl>=s-20),o=ge(r.length?r:i),a=as(Math.floor(n.x),Math.floor(n.y),Gf(o));a&&(n.path=a,n.state="gather",n.target=o)}else{let e=as(Math.floor(n.x),Math.floor(n.y),[[We(30,44),We(22,35)]]);e&&(n.path=e,n.state="wander")}}}function yv(n){n.state==="gather"&&n.target&&(n.target.up&&ba(n,n.target.tx,n.target.ty)?(n.action={kind:"gather",node:n.target},n.face=Math.atan2(n.target.x-n.x,n.target.y-n.y)):n.t=0)}function Yf(n,t,e){if(!n.path){n.moving=!1;return}if(!n.path.length){if(n.path=null,n.moving=!1,n===T){let l=T.pending;T.pending=null,l&&l()}else yv(n);return}let i=n.path[0],s=i.x-n.x,r=i.y-n.y,o=Math.hypot(s,r),a=e*t;o<=a?(n.x=i.x,n.y=i.y,n.path.shift()):(n.x+=s/o*a,n.y+=r/o*a),o>.01&&(n.face=Math.atan2(s,r)),n.moving=!0,n.walkT+=t}function Af(n,t){for(let[i,s]of[[-.28,-.28],[.28,-.28],[-.28,.28],[.28,.28]])if(!Ni(Math.floor(n+i),Math.floor(t+s)))return!0;return!1}var on=0;function Mv(n){let e=(Yn.d?1:0)-(Yn.a?1:0),i=(Yn.s?1:0)-(Yn.w?1:0),s=document.activeElement&&document.activeElement.tagName==="INPUT";if((e||i)&&!s){T.path=null,T.pending=null,T.action=null,T.follow=null;let r=Math.hypot(e,i);e/=r,i/=r;let o=Math.cos(on),a=Math.sin(on),l=e*o+i*a,c=-e*a+i*o,h=T.x+l*3.4*n,u=T.y+c*3.4*n;Af(h,T.y)||(T.x=h),Af(T.x,u)||(T.y=u),T.face=Math.atan2(l,c),T.moving=!0,T.walkT+=n}else Yf(T,n,3.4);if(T.follow&&!T.path){let r=T.follow;if(Math.hypot(r.x-T.x,r.y-T.y)>2){let o=as(Math.floor(T.x),Math.floor(T.y),$r(Math.floor(r.x),Math.floor(r.y)));o&&(T.path=o)}}}var th=6;function bv(n){if(th-=n,th>0)return;if(th=Re(5,12),bn.length>3&&Math.random()<.35){let e=We(0,bn.length-1),i=bn[e];if(i.price<et[i.key].trade*1.25){bn.splice(e,1);let s=ge(ye);ls.unshift({key:i.key,price:i.price,buyer:s.name}),cs.amt=Math.min(Be.WEEKLY_POOL_CAP||25e4,cs.amt+i.price*(Be.MARKET_FEE||.05))}}let t=ye.find(e=>e.stash.length&&Math.random()<.35);t&&ov(t,t.stash.shift());for(let e of[...T.listings]){let i=et[e.key].trade,s=Math.max(.03,Math.min(.7,1.4-e.price/i)*.5);if(Math.random()<s){T.listings=T.listings.filter(a=>a!==e);let r=Math.round(e.price*(Be.MARKET_FEE||.05));T.grind+=e.price-r,T.soldAny=!0,cs.amt=Math.min(Be.WEEKLY_POOL_CAP||25e4,cs.amt+r);let o=ge(ye);Dt(`Grind Exchange: ${o.name} bought your ${et[e.key].name} for ${pe(e.price)} ${Ve}. You got ${pe(e.price-r)} after the 5% fee.`,"rare"),ls.unshift({key:e.key,price:e.price,buyer:o.name}),Le(),we()}}ls.length=Math.min(ls.length,14)}var eh=3;function Sv(n){if(eh-=n,eh>0||!ye.length)return;eh=Re(1.2,3.5)*Math.max(1,12/ye.length);let t=Math.random();Nn(ge(ye),ge(t<.45?Zx:uh<300||t<.6?Jx:Kx))}function Nn(n,t){n&&(n.bubble=t,n.bubbleT=4,Th(n.name,t,n===T?"me":"pub"))}function qf(){T.action?.kind==="gather"?bf(T):T.action?.kind==="boss"&&(vt.on&&Math.hypot(T.x-vt.x,T.y-vt.y)<2.8?Tf(T):T.action=null);for(let n of ye)n.action?.kind==="gather"?bf(n):n.action?.kind==="boss"&&vt.on&&Math.random()<.6&&Tf(n);for(let n of On)n.up||(n.t-=Ma,n.t<=0&&(n.up=!0))}var ms=document.getElementById("world"),fh=document.getElementById("overlay"),ft=fh.getContext("2d"),Qs=1,Un=0,$n=0,ps=new br({canvas:ms,antialias:!0,powerPreference:"high-performance"});ps.shadowMap.enabled=!0;ps.shadowMap.type=Bc;ps.outputColorSpace=qe;var me=new Sr,Zf=new Jt("#9cc8e8");me.background=Zf;me.fog=new qo(Zf,24,46);var fs=new Je(40,1,.3,150),Zt={x:T.x,z:T.y,dist:15,pitch:.92};function Jf(){Un=innerWidth,$n=innerHeight,Qs=Math.min(Un<720?1.5:2,devicePixelRatio||1),ps.setPixelRatio(Qs),ps.setSize(Un,$n,!1),fh.width=Un*Qs,fh.height=$n*Qs,fs.aspect=Un/$n,fs.updateProjectionMatrix(),Un/$n<.8&&(Zt.dist=Math.max(Zt.dist,19))}addEventListener("resize",Jf);Jf();var wv=new Pr("#fff3d6","#4a5a3a",1.25);me.add(wv);var mi=new Lr("#fff1d0",2);mi.castShadow=!0;mi.shadow.mapSize.set(2048,2048);Object.assign(mi.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:70});mi.shadow.bias=-6e-4;mi.shadow.normalBias=.03;me.add(mi,mi.target);var Rf={};function Kf(n,t={}){let e=n+JSON.stringify(t);return Rf[e]||(Rf[e]=new ui({color:n,flatShading:!0,...t}))}function H(n,t,e,i,s={}){let r=new Pe(n,typeof t=="string"?Kf(t,s.mat||{}):t);return i&&r.position.set(i[0],i[1],i[2]),s.rot&&r.rotation.set(s.rot[0],s.rot[1],s.rot[2]),s.scale&&r.scale.set(...s.scale),r.castShadow=s.shadow!==!1,r.receiveShadow=s.recv!==!1,e&&e.add(r),r}var Cf={},gi=(n,t)=>Cf[n]||(Cf[n]=t()),zt=(n,t,e)=>gi(`b${n},${t},${e}`,()=>new hi(n,t,e)),jt=(n,t,e,i=6)=>gi(`c${n},${t},${e},${i}`,()=>new Gs(n,t,e,i)),ke=(n,t,e=6)=>gi(`k${n},${t},${e}`,()=>new ea(n,t,e)),_n=(n,t=0)=>gi(`i${n},${t}`,()=>new sa(n,t)),Zn=n=>gi(`d${n}`,()=>new na(n,0)),qr=n=>gi(`o${n}`,()=>new ra(n,0)),jf=n=>gi("s"+n,()=>new Ir(n,8,6)),hs=(n,t,e)=>gi(`t${n},${t},${e}`,()=>{let i=new Gs(n,t,e,4,1);return i.rotateY(Math.PI/4),i});function Qf(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Zo(i);return s.colorSpace=qe,s.anisotropy=4,s.userData.canvas=i,s}var Ea='"Pixelify Sans", "Trebuchet MS", sans-serif';function ki(n){n.updateMatrixWorld(!0);let t=new ve().copy(n.matrixWorld).invert(),e=new Map,i=[];n.traverse(s=>{if(!s.isMesh||s.userData.keep||Array.isArray(s.material)||s.material.map)return;let r=new ve().multiplyMatrices(t,s.matrixWorld),o=s.geometry.clone().applyMatrix4(r);o.index&&(o=o.toNonIndexed());for(let l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);let a=s.material.uuid;e.has(a)||e.set(a,{mat:s.material,geos:[],cast:s.castShadow}),e.get(a).geos.push(o),i.push(s)});for(let s of i)s.parent&&s.parent.remove(s);for(let{mat:s,geos:r,cast:o}of e.values()){let a=new Pe(Jc(r),s);a.castShadow=o,a.receiveShadow=!0,a.userData.keep=!0,n.add(a)}return n}var Ev={[Ra]:"#5f8f3a",[Wn]:"#8f6e45",[nr]:"#8d8a84",[di]:"#3d6f8f",[Qr]:"#d6c38d",[Xr]:"#46742c",[to]:"#766c5e",[gh]:"#7d5e3c",[Ui]:"#3d6f8f"},td=new Float32Array(te*Se);for(let n=0;n<Se;n++)for(let t=0;t<te;t++){let e=fn[Kt(t,n)],i=(ae()-.5)*.1;e===di||e===Ui?i=-.55:e===Qr&&(i=-.08),e===to&&(i+=.08+ae()*.12),e===nr&&(i=.02),(t<=0||n<=0||t>=te-1)&&(i+=.5+ae()*.4),td[Kt(t,n)]=i}var ed=new Float32Array((te+1)*(Se+1));for(let n=0;n<=Se;n++)for(let t=0;t<=te;t++){let e=0,i=0,s=!1;for(let[o,a]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let l=t+o,c=n+a;ds(l,c)&&(e+=td[Kt(l,c)],i++,(fn[Kt(l,c)]===di||fn[Kt(l,c)]===Ui)&&(s=!0))}let r=i?e/i:0;ed[n*(te+1)+t]=s?Math.min(r,-.14):r}var Fr=(n,t)=>ed[Math.max(0,Math.min(Se,t))*(te+1)+Math.max(0,Math.min(te,n))];function Qe(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=Fr(e,i),a=Fr(e+1,i),l=Fr(e,i+1),c=Fr(e+1,i+1);return Math.max(-.12,(o*(1-s)+a*s)*(1-r)+(l*(1-s)+c*s)*r)}{let n=[],t=[],e=new Jt;for(let r=0;r<Se;r++)for(let o=0;o<te;o++){let a=fn[Kt(o,r)];e.set(Ev[a]),a===nr&&(o+r)%2&&e.offsetHSL(0,0,-.035),e.offsetHSL(0,0,(ae()-.5)*.07);let l=[[o,r],[o+1,r],[o,r+1],[o+1,r+1]].map(([c,h])=>[c,Fr(c,h),h]);for(let c of[0,2,1,1,2,3])n.push(...l[c]),t.push(e.r,e.g,e.b)}let i=new Ge;i.setAttribute("position",new ue(n,3)),i.setAttribute("color",new ue(t,3)),i.computeVertexNormals();let s=new Pe(i,new ui({vertexColors:!0,flatShading:!0}));s.receiveShadow=!0,me.add(s);for(let[r,o,a,l,c,h]of[[te/2,-30,te+140,60,"#4a7a30",.6],[te/2,Se+30,te+140,60,"#2f78b0",-.2],[-30,Se/2,60,Se,"#4a7a30",.6],[te+30,Se/2,60,Se,"#4a7a30",.6]]){let u=new Pe(new is(a,l),new ui({color:c}));u.rotation.x=-Math.PI/2,u.position.set(r,h,o),me.add(u)}}var nd={uT:{value:0}};{let n=new is(te,Se,te*2,Se*2);n.rotateX(-Math.PI/2),n.translate(te/2,-.2,Se/2);let t=new ui({color:"#2f78b0",transparent:!0,opacity:.82,flatShading:!0});t.onBeforeCompile=i=>{i.uniforms.uT=nd.uT,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uT;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.y += sin(position.x * 1.7 + uT * 1.3) * .04 + cos(position.z * 2.1 + uT * 1.1) * .04;`)};let e=new Pe(n,t);e.receiveShadow=!0,me.add(e)}{let n=new se;me.add(n);for(let t=0;t<Se;t++)for(let e=0;e<te;e++)if(fn[Kt(e,t)]===Ui)for(let i=0;i<4;i++)H(zt(1.02,.08,.22),i%2?"#8a5a2b":"#9b6b3c",n,[e+.5,.02,t+.14+i*.25]);for(let[t,e,i]of[[24,26,27],[24,26,29],[24,26,11],[24,26,12]]){for(let s=t;s<=e;s+=.5)H(zt(.08,.5,.08),"#6b4220",n,[s,.2,i]);H(zt(e-t,.06,.06),"#6b4220",n,[(t+e)/2,.42,i])}ki(n)}function Tv(n){let t=new se,e=new se,i=new se;t.add(e,i);let s=.85+ae()*.3;t.position.set(n.x,Qe(n.x,n.y),n.y),t.rotation.y=ae()*6,t.scale.setScalar(s);let r=n.type==="goldtree"?"#8a6a2a":n.type==="yew"?"#5a3a24":"#6b4a2a",o=n.type;if(o==="tree")H(jt(.1,.16,1,6),r,e,[0,.5,0]),H(_n(.55),"#4f8f2f",e,[0,1.25,0]),H(_n(.42),"#5da336",e,[.3,1.5,.1]),H(_n(.4),"#468228",e,[-.25,1.45,-.15]);else if(o==="oak"){H(jt(.16,.26,1.1,7),r,e,[0,.55,0]);for(let[l,c,h,u,f]of[[0,1.45,0,.75,"#3f7a24"],[.45,1.35,.2,.55,"#4a8a2a"],[-.45,1.4,-.1,.55,"#35691e"],[.1,1.85,-.2,.5,"#4a8a2a"],[-.1,1.3,.45,.45,"#3f7a24"]])H(_n(u),f,e,[l,c,h])}else if(o==="willow"){H(jt(.14,.22,1.3,6),"#6b5a3a",e,[0,.65,0]),H(_n(.55),"#8fb04a",e,[0,1.6,0]);for(let l=0;l<7;l++){let c=l/7*Math.PI*2;H(ke(.22,1.2,5),l%2?"#9cbf55":"#86a843",e,[Math.cos(c)*.45,1.1,Math.sin(c)*.45],{rot:[Math.PI,0,0]})}}else if(o==="maple"){H(jt(.13,.2,1.1,6),r,e,[0,.55,0]);for(let[l,c,h,u,f]of[[0,1.45,0,.65,"#d0602a"],[.35,1.7,.1,.45,"#e07a2a"],[-.35,1.6,-.1,.45,"#b84a22"],[0,1.9,-.25,.4,"#e8912f"]])H(_n(u),f,e,[l,c,h])}else if(o==="yew")H(jt(.18,.28,1,7),r,e,[0,.5,0]),H(ke(.9,1.3,7),"#2f5a2a",e,[0,1.3,0]),H(ke(.72,1.1,7),"#2a5025",e,[0,1.9,0]),H(ke(.5,.9,7),"#35632e",e,[0,2.45,0]);else if(o==="goldtree"){H(jt(.15,.24,1.1,6),r,e,[0,.55,0]);for(let[l,c,h,u]of[[0,1.5,0,.7],[.4,1.75,.2,.45],[-.4,1.65,-.1,.45],[0,2.05,-.2,.4]])H(_n(u),"#ffcc33",e,[l,c,h],{mat:{emissive:"#6a4a00"}})}let a=o==="oak"||o==="yew";H(jt(a?.26:.17,a?.3:.2,.28,7),r,i,[0,.14,0]),H(jt(a?.25:.16,a?.25:.16,.02,7),"#d6b27a",i,[0,.29,0]),i.visible=!1,ki(e),ki(i),me.add(t),n.mesh={g:t,up:e,down:i}}function Av(n){let t=new se,e=new se;t.add(e),t.position.set(n.x,Qe(n.x,n.y)-.05,n.y),t.rotation.y=ae()*6;let i=new se;t.add(i),H(Zn(.48),"#8a8378",i,[0,.3,0],{scale:[1.1,.75,1]}),H(Zn(.3),"#7a7468",i,[.35,.18,.25],{scale:[1,.7,1]}),H(Zn(.25),"#948d80",i,[-.3,.15,-.25],{scale:[1,.7,1]}),ki(i);let s=n.def.ore,r=["crystal","grindrock","gold"].includes(n.type);for(let o=0;o<6;o++){let a=o/6*Math.PI*2+ae();H(qr(.09+ae()*.05),s,e,[Math.cos(a)*.42,.3+ae()*.22,Math.sin(a)*.36],{rot:[ae()*3,ae()*3,0],mat:r?{emissive:s,emissiveIntensity:.35}:{}})}H(qr(.11),s,e,[0,.62,0],{mat:r?{emissive:s,emissiveIntensity:.4}:{}}),ki(e),me.add(t),n.mesh={g:t,up:e,down:null}}var id=[];function Rv(n){let t=new se;t.position.set(n.x,-.12,n.y),me.add(t);let e=[];for(let s=0;s<2;s++){let r=new Pe(gi("ring",()=>new oa(.25,.32,16)),new ns({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));r.rotation.x=-Math.PI/2,t.add(r),e.push(r)}let i=[];for(let s=0;s<4;s++){let r=new Pe(jf(.05),new ns({color:"#e8f6ff"}));t.add(r),i.push(r)}n.mesh={g:t,rings:e,bub:i,ph:ae()*6},id.push(n)}for(let n of On)n.def.skill==="wc"?Tv(n):n.def.skill==="mine"?Av(n):Rv(n);function Cv(n){!n.mesh||n.def.skill==="fish"||n.mesh.shown!==n.up&&(n.mesh.shown=n.up,n.mesh.up.visible=n.up,n.mesh.down&&(n.mesh.down.visible=!n.up))}function Or(n,t,e,i,s,r,o,a=0){let l=Qf(Math.round(t*128),Math.round(e*128),(u,f,d)=>{u.fillStyle=i,u.fillRect(0,0,f,d),u.strokeStyle="#2a1a0a",u.lineWidth=10,u.strokeRect(5,5,f-10,d-10);let g=Math.round(d*.6);for(u.font=`700 ${g}px ${Ea}`;u.measureText(n).width>f-30&&g>10;)g-=2,u.font=`700 ${g}px ${Ea}`;u.fillStyle=s,u.textAlign="center",u.textBaseline="middle",u.fillText(n,f/2,d/2+3)}),c=Kf("#4a2f1a"),h=new Pe(new hi(t,e,.06),[c,c,c,c,new ui({map:l}),c]);return h.position.set(...o),h.rotation.y=a,h.castShadow=!0,r.add(h),h}function Iv(n,t,e,i,s,r,o,a){let l=i-t,c=s-e,h=new Tr;h.moveTo(-l/2-.25,0),h.lineTo(l/2+.25,0),h.lineTo(0,o),h.closePath();let u=new ia(h,{depth:c+.5,bevelEnabled:!1});return u.translate(0,0,-(c+.5)/2),H(u,a,n,[(t+i)/2,r,(e+s)/2])}{let n=new se;me.add(n);for(let i of _h){let s=i.x0,r=i.y0,o=i.x1+1,a=i.y1+1,l=o-s,c=a-r;if(i.style==="stone"||i.style==="wood"){let h=i.style==="stone"?"#9a968c":"#c9a574",u=i.style==="stone"?"#6f6b62":"#6b4424";if(H(zt(l,2.2,c),h,n,[s+l/2,1.1,r+c/2]),H(zt(l+.1,.25,c+.1),u,n,[s+l/2,.12,r+c/2]),i.style==="wood")for(let f=s;f<=o;f+=1.5)H(zt(.14,2.2,.14),u,n,[Math.min(f,o-.07),1.1,a+.02]);Iv(n,s,r,o,a,2.2,1.4,i.style==="stone"?"#4a4f5a":"#a8382a"),H(zt(1.1,1.6,.1),"#4a2f1a",n,[s+l/2-(i.name==="Bank"?.5:0),.8,a+.03]);for(let f of[s+1,o-1])H(zt(.8,.7,.08),"#2a3a4a",n,[f,1.35,a+.03]),H(zt(.9,.08,.1),u,n,[f,.98,a+.06]);if(i.name==="Bank")for(let f of[s+.6,o-.6])H(jt(.18,.2,2.2,8),"#d8d4c8",n,[f,1.1,a+.35]);Or(i.name.toUpperCase(),Math.min(4,l-1),.6,i.style==="stone"?"#1f2a3a":"#f3e2b5",i.style==="stone"?"#ffcc33":"#6b2a14",me,[s+l/2,2.55,a+.1])}else if(i.style==="stall"){H(zt(l,.9,c),"#8a5a2b",n,[s+l/2,.45,r+c/2]);for(let[f,d]of[[s+.1,r+.1],[o-.1,r+.1],[s+.1,a-.1],[o-.1,a-.1]])H(zt(.1,2,.1),"#5a3a1a",n,[f,1,d]);let h=Qf(64,64,f=>{for(let d=0;d<8;d++)f.fillStyle=d%2?"#f3e2b5":"#2f5bd6",f.fillRect(0,d*8,64,8)}),u=new Pe(new hi(l+.4,.1,c+.4),new ui({map:h}));u.position.set(s+l/2,2.05,r+c/2),u.rotation.z=-.25,u.castShadow=!0,me.add(u),H(zt(.5,.35,.3),"#3a3a3e",n,[s+l/2,1.05,r+c/2]),H(zt(.3,.2,.2),"#3a3a3e",n,[s+l/2,1.3,r+c/2]),Or("TOOLS",1.6,.45,"#f3e2b5","#2f5bd6",me,[o+.06,2.5,r+c/2],Math.PI/2)}}let t=new se;t.position.set(37.5,0,28.5),n.add(t),H(jt(2.7,2.9,.25,16),"#c9c2b0",t,[0,.12,0]);for(let i=0;i<4;i++){let s=i*Math.PI/2+Math.PI/4;H(zt(1.6,.9,.35),"#7a5a3a",t,[Math.cos(s)*1.9,.7,Math.sin(s)*1.9],{rot:[0,-s+Math.PI/2,0]})}for(let i=0;i<8;i++){let s=i/8*Math.PI*2;H(jt(.12,.14,2.6,6),"#e8e2d2",t,[Math.cos(s)*2.5,1.4,Math.sin(s)*2.5])}H(jt(2.9,2.9,.3,16),"#2f7a4a",t,[0,2.8,0]),H(ke(3.1,1.2,16),"#3a8f58",t,[0,3.55,0]),H(jt(.5,.6,1.8,8),"#d8d4c8",t,[0,1.1,0]),Or("GRIND EXCHANGE",3,.5,"#1f6f4a","#ffcc33",me,[37.5,3.3,28.5+2.95]),Or("GRIND EXCHANGE",3,.5,"#1f6f4a","#ffcc33",me,[37.5,3.3,28.5-2.95],Math.PI);let e=new se;e.position.set(43,0,33),n.add(e),H(jt(1.05,1.15,.45,10),"#b8b2a4",e,[0,.22,0]),H(jt(.9,.9,.05,10),"#3f8fc8",e,[0,.43,0],{shadow:!1}),H(jt(.15,.2,1.1,8),"#b8b2a4",e,[0,.9,0]),H(jt(.45,.3,.15,10),"#b8b2a4",e,[0,1.45,0]);for(let[i,s]of[[29.5,22],[45.5,22],[29.5,35],[45.5,35],[36.5,21.2],[38.5,36]])H(jt(.06,.08,2,6),"#2a2a2a",n,[i,1,s]),H(zt(.28,.3,.28),"#2a2a2a",n,[i,2.1,s]),H(zt(.2,.22,.2),"#ffe28a",n,[i,2.1,s],{mat:{emissive:"#ffcc55",emissiveIntensity:.8},shadow:!1});ki(n)}var Pv=H(jt(.45,.45,.1,20),"#ffcc33",me,[37.5,2.3,28.5],{rot:[Math.PI/2,0,0],mat:{emissive:"#6a4a00"}});{let n=new se;me.add(n);for(let t=Ue.x0;t<=Ue.x1;t++)for(let e=Ue.y0;e<=Ue.y1;e++)if(!(!(t===Ue.x0||t===Ue.x1||e===Ue.y0||e===Ue.y1)||!rn[Kt(t,e)]))for(let s=0;s<3;s++)H(jt(.13,.15,1.4+ae()*.5,5),s%2?"#6b4a2a":"#5a3a1f",n,[t+.2+s*.3,.7,e+.5],{rot:[0,0,(ae()-.5)*.1]});for(let[t,e]of[[35.3,14.5],[39.7,14.5],[31,3],[44,3]])H(jt(.07,.09,1.8,5),"#4a2f1a",n,[t,.9,e]),H(ke(.16,.4,5),"#ff8a1f",n,[t,1.95,e],{mat:{emissive:"#ff6a00",emissiveIntensity:1},shadow:!1});for(let t=0;t<7;t++)H(Zn(.2+ae()*.2),"#e8e0d0",n,[31.5+ae()*12,.1,3.5+ae()*10]);ki(n),Or("GOBLIN PIT",2.6,.55,"#3a2a1a","#ff5a3a",me,[37.5,2.2,15.1])}{let n=new se;me.add(n);let t=0;for(let i=0;i<1200&&t<320;i++){let s=Math.floor(ae()*te),r=Math.floor(ae()*Se);if(!ds(s,r)||rn[Kt(s,r)]||_a[Kt(s,r)]>=0)continue;let o=fn[Kt(s,r)],a=s+.2+ae()*.6,l=r+.2+ae()*.6,c=Qe(a,l);if(o===Ra||o===Xr){let h=ae();if(h<.45){let u=ge(["#ffffff","#ffe23a","#ff4a6a","#b06aff"]);H(jt(.015,.015,.2,3),"#3a7a2a",n,[a,c+.1,l],{shadow:!1}),H(qr(.06),u,n,[a,c+.22,l],{shadow:!1})}else h<.7?H(_n(.25+ae()*.15),o===Xr?"#35631f":"#4a8a2a",n,[a,c+.15,l]):H(ke(.05,.3,3),"#6aa83a",n,[a,c+.15,l],{shadow:!1});t++}else o===to?(H(Zn(.12+ae()*.15),"#7d7468",n,[a,c+.06,l]),t++):o===Qr&&ae()<.3&&(H(Zn(.08),"#efe3c0",n,[a,c+.03,l],{shadow:!1}),t++)}let e=(i,s)=>{let r=1+ae()*.8;H(jt(.1,.14,r,5),"#5a3a1f",n,[i,r/2+.5,s]),H(ke(.7,1.6,6),ae()<.5?"#2f5a26":"#3a6a2a",n,[i,r+1.2,s])};for(let i=-2;i<te+2;i+=1.3)for(let s of[-.4,-1.9,-3.4])ae()<.85&&e(i,s);for(let i=0;i<42;i+=1.3)for(let s of[-.4,-1.9,te+.4,te+1.9])ae()<.85&&e(s,i);ki(n)}function If(n){let t=new Map,e=[];for(let i of n.children){if(!i.isMesh||Array.isArray(i.material)||i.material.map)continue;i.updateMatrix();let s=i.geometry.clone().applyMatrix4(i.matrix);s.index&&(s=s.toNonIndexed());for(let o of Object.keys(s.attributes))o!=="position"&&o!=="normal"&&s.deleteAttribute(o);let r=i.material.uuid;t.has(r)||t.set(r,{mat:i.material,geos:[]}),t.get(r).geos.push(s),e.push(i)}for(let i of e)n.remove(i);for(let{mat:i,geos:s}of t.values()){let r=new Pe(s.length>1?Jc(s):s[0],i);r.castShadow=!0,n.add(r)}}var dh=new Map;function sd(n,t){let e=new se,i=Fi[t].col,s=t>=4?{emissive:i,emissiveIntensity:.3}:{};return n==="wc"?(H(zt(.05,.7,.05),"#6b4a2a",e,[0,-.1,0]),H(zt(.04,.16,.22),i,e,[0,.2,.09],{mat:s})):n==="mine"?(H(zt(.05,.7,.05),"#6b4a2a",e,[0,-.1,0]),H(zt(.05,.06,.5),i,e,[0,.22,0],{mat:s}),H(ke(.04,.12,4),i,e,[0,.22,.3],{rot:[Math.PI/2,0,0],mat:s}),H(ke(.04,.12,4),i,e,[0,.22,-.3],{rot:[-Math.PI/2,0,0],mat:s})):(H(jt(.02,.02,1.1,5),"#6b4a2a",e,[0,.1,0]),H(ke(.04,.16,4),i,e,[0,.72,0],{mat:s}),H(zt(.02,.08,.08),i,e,[0,.6,.04])),e}function Lv(n,t){if(!n)return;let e=et[n],i=e.col;if(e.ico==="phat"){let s=H(ke(.17,.38,6),i,t,[0,.33,0]);s.rotation.z=.1,H(jt(.17,.17,.03,6),i,t,[0,.15,0])}else if(e.ico==="crown"){H(jt(.19,.19,.1,8),i,t,[0,.2,0],{mat:{emissive:i,emissiveIntensity:.25}});for(let s=0;s<5;s++){let r=s/5*Math.PI*2;H(ke(.04,.12,4),i,t,[Math.cos(r)*.16,.3,Math.sin(r)*.16],{mat:{emissive:i,emissiveIntensity:.25}})}}else e.ico==="helm"?(H(new Ir(.2,8,4,0,Math.PI*2,0,Math.PI/2),i,t,[0,.1,0]),H(jt(.24,.24,.03,8),i,t,[0,.1,0]),H(zt(.07,.07,.05),"#fff6a0",t,[0,.2,.18],{mat:{emissive:"#ffe066"}})):e.ico==="hat"&&(H(jt(.17,.19,.14,8),i,t,[0,.2,0]),H(jt(.27,.27,.03,8),i,t,[0,.13,0]))}var ma=(n,t)=>typeof n[t]=="string"?n[t]:ga[t][n[t]||0];function bh(n,t={}){let e=n.look||{skin:0,hair:0,top:0,legs:0},i=ma(e,"skin"),s=ma(e,"hair"),r=ma(e,"legs"),o=n.eq?.body?et[n.eq.body].col:ma(e,"top"),a=new se;me.add(a);let l=new se;a.add(l);let c=new se;c.position.set(-.1,.52,0),l.add(c);let h=new se;h.position.set(.1,.52,0),l.add(h);for(let _ of[c,h])H(hs(.1,.08,.5),r,_,[0,-.25,0]),H(zt(.13,.08,.22),"#3a2a1a",_,[0,-.49,.04]);if(H(hs(.25,.18,.5),o,l,[0,.78,0],{scale:[1,1,.7]}),n.eq?.body==="lj_top")for(let _=0;_<3;_++)H(zt(.36,.03,.26),"#1a1a1a",l,[0,.65+_*.13,0]);H(zt(.3,.08,.18),"#3a2a1a",l,[0,.55,0]);let u=new se;u.position.set(-.27,.98,0),l.add(u);let f=new se;f.position.set(.27,.98,0),l.add(f);for(let _ of[u,f])H(hs(.075,.06,.44),o,_,[0,-.2,0]),H(zt(.09,.1,.09),i,_,[0,-.46,0]);let d=new se;if(d.position.set(0,1.18,0),l.add(d),H(hs(.17,.15,.3),i,d,[0,0,0]),H(zt(.26,.1,.26),s,d,[0,.13,-.01]),H(zt(.26,.22,.08),s,d,[0,.02,-.12]),H(zt(.05,.04,.02),"#1a1a1a",d,[-.06,.02,.13],{shadow:!1}),H(zt(.05,.04,.02),"#1a1a1a",d,[.06,.02,.13],{shadow:!1}),H(zt(.08,.02,.02),"#6a3a2a",d,[0,-.07,.13],{shadow:!1}),t.beard&&H(zt(.2,.16,.08),s,d,[0,-.1,.11]),Lv(n.eq?.head,d),n.eq?.cape){let _=et[n.eq.cape],m=new se;m.position.set(0,1.02,-.11),l.add(m),H(zt(.36,.66,.04),_.col,m,[0,-.33,0]),H(zt(.37,.06,.045),n.eq.cape==="grind_cape"?"#ffcc33":"#ffffff",m,[0,-.64,0])}for(let _ of[l,c,h,u,f,d])If(_);l.children.forEach(_=>{_.isGroup&&_!==c&&_!==h&&_!==u&&_!==f&&_!==d&&If(_)});let g=new se;return g.position.set(0,-.44,.05),f.add(g),a.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!1)}),{root:a,body:l,legL:c,legR:h,armL:u,armR:f,head:d,tool:g,toolKey:null,sig:rd(n)}}var rd=n=>[n.eq?.head,n.eq?.body,n.eq?.cape,JSON.stringify(n.look)].join("|");function Pf(n,t){let e=dh.get(n.id);return e&&e.sig!==rd(n)&&(me.remove(e.root),e=null),e||(e=bh(n,t),dh.set(n.id,e)),e}function Dv(n,t,e){let i=t?t+e:null;if(n.toolKey===i||(n.toolKey=i,n.tool.clear(),!t))return;let s=sd(t,e);s.rotation.x=Math.PI/2,n.tool.add(s)}function Lf(n,t,e,i){t.root.position.set(n.x,Qe(n.x,n.y),n.y);let s=(n.face??0)-(t.rot??0);for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;t.rot=(t.rot??0)+s*Math.min(1,e*14),t.root.rotation.y=t.rot;let r=n.action,o=r?.kind==="gather"?r.node.def.skill:r?.kind==="boss"?"boss":null;Dv(t,o==="boss"?"mine":o,o?Hf(n,o==="boss"?"mine":o):0),t.body.rotation.set(0,0,0),t.armL.rotation.set(0,0,0),t.armR.rotation.set(0,0,0),t.legL.rotation.set(0,0,0),t.legR.rotation.set(0,0,0),t.body.position.y=0;let a=n.id.length*.37;if(n.moving){let l=Math.sin(n.walkT*11)*.7;t.legL.rotation.x=l,t.legR.rotation.x=-l,t.armL.rotation.x=-l*.7,t.armR.rotation.x=l*.7,t.body.position.y=Math.abs(Math.cos(n.walkT*11))*.04}else if(o==="wc"||o==="boss"){let l=(i*1.3+a)%1,c=l<.45?l/.45:1-(l-.45)/.55;t.armR.rotation.x=-2.6+c*2.1,t.armR.rotation.z=.25,t.armL.rotation.x=-.5-c*.4,t.body.rotation.y=-.25+c*.35}else if(o==="mine"){let l=(i*1.1+a)%1,c=Math.pow(l<.5?l/.5:1-(l-.5)/.5,2);t.armR.rotation.x=-2.9+c*2.3,t.armL.rotation.x=-2.9+c*2.3,t.armL.rotation.z=-.35,t.armR.rotation.z=.35,t.body.rotation.x=c*.25}else if(o==="fish"){let l=(i*.8+a)%1,c=l>.8?Math.sin((l-.8)/.2*Math.PI):0;t.armR.rotation.x=-1.1-c*.6,t.armL.rotation.x=-1.2-c*.5,t.body.rotation.x=.1+c*.15}else t.armL.rotation.z=-.05,t.armR.rotation.z=.05,t.body.position.y=Math.sin(i*2+a)*.01}var Hr=new Map;function od(n){let t=new se;return me.add(t),n==="pet_beaver"?(H(_n(.18,1),"#8a5a2b",t,[0,.18,0],{scale:[1,.8,1.3]}),H(_n(.11,0),"#7a4a22",t,[0,.26,.2]),H(zt(.16,.03,.22),"#4a2a14",t,[0,.08,-.28]),H(zt(.06,.05,.02),"#fff",t,[0,.21,.3])):n==="pet_golem"?(H(Zn(.16),"#8a8a8a",t,[0,.2,0]),H(Zn(.1),"#7a7a7a",t,[0,.42,0]),H(zt(.04,.04,.02),"#ff6a1a",t,[-.04,.44,.09],{mat:{emissive:"#ff6a1a"}}),H(zt(.04,.04,.02),"#ff6a1a",t,[.04,.44,.09],{mat:{emissive:"#ff6a1a"}})):n==="pet_heron"&&(H(_n(.13,0),"#c8d4dc",t,[0,.45,0],{scale:[1,.8,1.4]}),H(jt(.02,.02,.4,4),"#e0a02a",t,[.05,.2,0]),H(jt(.02,.02,.4,4),"#e0a02a",t,[-.05,.2,0]),H(jt(.03,.03,.25,4),"#c8d4dc",t,[0,.62,.1]),H(ke(.03,.18,4),"#e0a02a",t,[0,.73,.2],{rot:[Math.PI/2,0,0]})),t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),{g:t,x:0,z:0,init:!1}}function Df(n,t,e){let i=n.eq?.pet,s=Hr.get(n.id);if(s&&s.k!==i&&(me.remove(s.g),Hr.delete(n.id),s=null),!i)return;s||(s=od(i),s.k=i,Hr.set(n.id,s));let r=n.x-Math.sin(n.face||0)*.8+.4,o=n.y-Math.cos(n.face||0)*.8;s.init||(s.x=r,s.z=o,s.init=!0);let a=r-s.x,l=o-s.z,c=Math.hypot(a,l);c>.15&&(s.x+=a*Math.min(1,t*3),s.z+=l*Math.min(1,t*3),s.g.rotation.y=Math.atan2(a,l)),s.g.position.set(s.x,Qe(s.x,s.z)+Math.abs(Math.sin(e*8))*(c>.2?.06:0),s.z)}var ad=xn.map(n=>bh({id:n.id,look:n.look,eq:{}},{beard:n.id==="guide"||n.id==="tools"}));xn.forEach((n,t)=>{let e=ad[t];e.root.position.set(n.x,Qe(n.x,n.y),n.y),e.root.rotation.y=n.face});var un=null;function Uv(n,t){if(!un){un=bh({id:"boss",look:{skin:"#6fa83a",hair:"#3a5a1f",top:"#5a3a1f",legs:"#3a2a1a"},eq:{head:"goblin_crown"}}),un.root.scale.setScalar(2.4);let r=new se;H(jt(.05,.09,.8,6),"#6b4a2a",r,[0,.1,0]),H(Zn(.12),"#5a3a1f",r,[0,.5,0]),r.rotation.x=Math.PI/2,un.tool.add(r),H(ke(.05,.18,4),"#6fa83a",un.head,[-.19,.03,0],{rot:[0,0,Math.PI/2]}),H(ke(.05,.18,4),"#6fa83a",un.head,[.19,.03,0],{rot:[0,0,-Math.PI/2]}),un.root.traverse(o=>{o.isMesh&&(o.material=o.material.clone())})}if(un.root.visible=vt.on,!vt.on)return;un.root.position.set(vt.x,Qe(vt.x,vt.y),vt.y),un.root.rotation.y=Math.sin(t*.6)*.8;let e=t*.7%1,i=e<.5?e*2:2-e*2;un.armR.rotation.x=-2.4+i*2,un.armL.rotation.x=Math.sin(t*2)*.3,un.body.position.y=Math.abs(Math.sin(t*3))*.02;let s=vt.flash>0;un.root.traverse(r=>{r.isMesh&&r.material.emissive&&r.material.emissive.set(s?"#661111":"#000000")})}var Ur=new L;function Pi(n,t,e){return Ur.set(n,t,e).project(fs),{x:(Ur.x*.5+.5)*Un,y:(-Ur.y*.5+.5)*$n,vis:Ur.z<1&&Ur.z>-1}}var Dn=null;function Uf(n,t,e,i="#ffff00",s=14){ft.font=`700 ${s}px ${Ea}`,ft.textAlign="center",ft.fillStyle="#000",ft.fillText(n,t+1,e+1),ft.fillStyle=i,ft.fillText(n,t,e)}function Nv(n,t,e){ft.fillStyle=e,ft.strokeStyle="#000",ft.lineWidth=1.5,ft.beginPath();for(let i=0;i<12;i++){let s=i/12*Math.PI*2,r=i%2?11:15;ft.lineTo(n+Math.cos(s)*r,t+Math.sin(s)*r*.8)}ft.closePath(),ft.fill(),ft.stroke()}function Fv(n){ft.setTransform(Qs,0,0,Qs,0,0),ft.clearRect(0,0,Un,$n);for(let e of[T,...ye]){if(!(e.bubble&&e.bubbleT>0)||Math.abs(e.x-Zt.x)>26||Math.abs(e.y-Zt.z)>26)continue;let i=Pi(e.x,Qe(e.x,e.y)+1.75+(e.eq?.head?.25:0),e.y);i.vis&&Uf(e.bubble.length>40?e.bubble.slice(0,39)+"\u2026":e.bubble,i.x,i.y)}if(vt.on){let e=Pi(vt.x,Qe(vt.x,vt.y)+4.2,vt.y);e.vis&&(ft.fillStyle="#ff0000",ft.fillRect(e.x-120/2,e.y,120,10),ft.fillStyle="#00ff00",ft.fillRect(e.x-120/2,e.y,120*Math.max(0,vt.hp/vt.max),10),ft.strokeStyle="#000",ft.lineWidth=1,ft.strokeRect(e.x-120/2,e.y,120,10),Uf("Goblin King",e.x,e.y-6,"#ffff00",15));let i=Pi(vt.x,Qe(vt.x,vt.y)+2.2,vt.y);for(let s of js){let r=i.x+s.ox*60,o=i.y-s.oy*60-s.t*10;ft.globalAlpha=Math.max(0,1-Math.max(0,s.t-.7)/.3),Nv(r,o,s.miss?"#2a5bd6":"#c40000"),ft.font=`700 15px ${Ea}`,ft.textAlign="center",ft.fillStyle="#000",ft.fillText(s.dmg,r+1,o+6),ft.fillStyle="#fff",ft.fillText(s.dmg,r,o+5),ft.globalAlpha=1}}for(let e of Ks){let i=Pi(e.x+e.vx*e.t*.4,Qe(e.x,e.y)+e.h,e.y+e.vy*e.t*.4);ft.globalAlpha=Math.max(0,1-e.t/1.1),ft.fillStyle=e.col,ft.fillRect(i.x-3,i.y-3,6,6)}if(ft.globalAlpha=1,Dn&&Dn.t>0){let e=Pi(Dn.x,Qe(Dn.x,Dn.y)+.05,Dn.y),i=5+Dn.t*10;ft.lineWidth=3,ft.strokeStyle="#000",ft.beginPath(),ft.moveTo(e.x-i,e.y-i*.6),ft.lineTo(e.x+i,e.y+i*.6),ft.moveTo(e.x+i,e.y-i*.6),ft.lineTo(e.x-i,e.y+i*.6),ft.stroke(),ft.lineWidth=1.6,ft.strokeStyle=Dn.red?"#ff0000":"#ffff00",ft.stroke()}let t=$v();if(t){let e=Pi(t.x,Qe(t.x,t.y)+(t.h||2.4)+Math.sin(n*6)*.15,t.y);if(e.vis&&e.x>20&&e.x<Un-20&&e.y>20&&e.y<$n-20)ft.fillStyle="#ffff00",ft.strokeStyle="#000",ft.lineWidth=2,ft.beginPath(),ft.moveTo(e.x,e.y+22),ft.lineTo(e.x-16,e.y),ft.lineTo(e.x-6,e.y),ft.lineTo(e.x-6,e.y-18),ft.lineTo(e.x+6,e.y-18),ft.lineTo(e.x+6,e.y),ft.lineTo(e.x+16,e.y),ft.closePath(),ft.fill(),ft.stroke();else{let s=Pi(T.x,Qe(T.x,T.y)+1,T.y),r=Math.atan2(e.y-s.y,e.x-s.x),o=Math.min(Un,$n)*.3;ft.save(),ft.translate(s.x+Math.cos(r)*o,s.y+Math.sin(r)*o),ft.rotate(r),ft.fillStyle="#ffff00",ft.strokeStyle="#000",ft.lineWidth=2,ft.beginPath(),ft.moveTo(18,0),ft.lineTo(-8,-13),ft.lineTo(-8,13),ft.closePath(),ft.fill(),ft.stroke(),ft.restore()}}}var Nf=new ha,Ff=new ct,Ov=new Cn(new L(0,1,0),0),nh=new L;function Sh(n,t){return Ff.set(n/Un*2-1,-(t/$n)*2+1),Nf.setFromCamera(Ff,fs),Nf.ray.intersectPlane(Ov,nh)?{x:nh.x,y:nh.z}:null}function wh(n,t){let e=null,i=1e9,s=(r,o,a,l,c)=>{let h=Pi(r,Qe(r,o)+a,o);if(!h.vis)return;let u=Math.hypot(h.x-n,h.y-t);u<l&&u<i&&(i=u,e=c)};vt.on&&s(vt.x,vt.y,2,70,{kind:"boss"});for(let r of xn)s(r.x,r.y,.8,34,{kind:"npc",ref:r});for(let r of ye)Math.abs(r.x-Zt.x)<26&&Math.abs(r.y-Zt.z)<26&&s(r.x,r.y,.8,26,{kind:"player",ref:r});for(let r of On)Math.abs(r.x-Zt.x)<26&&Math.abs(r.y-Zt.z)<26&&s(r.x,r.y,r.def.skill==="wc"?1.1:r.def.skill==="mine"?.35:0,r.def.skill==="wc"?42:34,{kind:"node",ref:r});return e}var Vr=document.getElementById("mini"),He=Vr.getContext("2d"),oe=5,Ia=document.createElement("canvas");Ia.width=te*oe;Ia.height=Se*oe;{let n=Ia.getContext("2d"),t={[Ra]:"#4f7f2f",[Wn]:"#7a5a38",[nr]:"#8a8680",[di]:"#2a5a8a",[Qr]:"#c9b37a",[Xr]:"#3d6a26",[to]:"#6a6052",[gh]:"#6d5033",[Ui]:"#7a5a38"};for(let i=0;i<Se;i++)for(let s=0;s<te;s++)n.fillStyle=t[fn[Kt(s,i)]],n.fillRect(s*oe,i*oe,oe,oe);n.fillStyle="#d8d4cc";for(let i of _h)n.fillRect(i.x0*oe,i.y0*oe,(i.x1-i.x0+1)*oe,(i.y1-i.y0+1)*oe);n.fillStyle="#b8b2a0",n.beginPath(),n.arc(37.5*oe,28.5*oe,2.6*oe,0,7),n.fill();for(let i of On)i.def.skill==="wc"?(n.fillStyle="#1f4a14",n.beginPath(),n.arc(i.x*oe,i.y*oe,oe*.6,0,7),n.fill()):i.def.skill==="mine"&&(n.fillStyle="#4a4238",n.fillRect(i.x*oe-2,i.y*oe-2,4,4));let e=(i,s,r,o)=>{n.fillStyle="#000",n.beginPath(),n.arc(i*oe,s*oe,7,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(i*oe,s*oe,6,0,7),n.fill(),n.fillStyle="#000",n.font="700 9px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(o,i*oe,s*oe+.5)};e(32.5,18,"#ffcc33","$"),e(42.5,18,"#e8e8e8","S"),e(27,31.5,"#9ab0c8","T"),e(37.5,28.5,"#3a8f58","G"),e(37.5,8,"#c83a2a","!");for(let i of[8,20,36,48,62])e(i,43,"#6ac8ff","F");e(58,30,"#b0a090","M"),e(14,20,"#3a8a2a","W")}function Bv(){let n=Vr.width,t=n/2;He.save(),He.clearRect(0,0,n,n),He.beginPath(),He.arc(t,t,t-2,0,7),He.clip(),He.fillStyle="#000",He.fillRect(0,0,n,n),He.translate(t,t),He.rotate(on),He.scale(1.25,1.25),He.drawImage(Ia,-T.x*oe,-T.y*oe);let e=(s,r,o,a=3)=>{He.fillStyle="#000",He.fillRect((s-T.x)*oe-a/2-.5,(r-T.y)*oe-a/2-.5,a+1,a+1),He.fillStyle=o,He.fillRect((s-T.x)*oe-a/2,(r-T.y)*oe-a/2,a,a)};for(let s of xn)e(s.x,s.y,"#ffff00");for(let s of ye)e(s.x,s.y,"#ffffff");vt.on&&e(vt.x,vt.y,"#ff0000",6),He.restore(),He.fillStyle="#fff",He.fillRect(t-2,t-2,4,4);let i=document.getElementById("compassNeedle");i&&(i.style.transform=`rotate(${on}rad)`)}function kv(n,t){let e=Vr.getBoundingClientRect(),i=Vr.width/e.width,s=(n-e.left-e.width/2)*i,r=(t-e.top-e.height/2)*i;if(Math.hypot(s,r)>Vr.width/2)return null;let o=Math.cos(-on),a=Math.sin(-on);return{x:T.x+(s*o-r*a)/1.25/oe,y:T.y+(s*a+r*o)/1.25/oe}}var qs=null,Gr=new Sr,eo=new Je(30,1,.1,20);Gr.add(new Pr("#ffffff","#8a8a8a",2.2));{let n=new Lr("#ffffff",2.2);n.position.set(2,3,4),Gr.add(n)}eo.fov=34;eo.updateProjectionMatrix();eo.position.set(0,.45,1.75);eo.lookAt(0,0,0);var Nr={};function zv(n,t){let e=new se;if(n==="log")H(jt(.2,.2,.9,8),t,e,[0,0,0],{rot:[0,0,Math.PI/2-.3]}),H(jt(.19,.19,.02,8),"#e8c890",e,[.43,.13,0],{rot:[0,0,Math.PI/2-.3]});else if(n==="ore"){H(Zn(.35),"#7a7468",e,[0,0,0],{scale:[1.1,.8,1]});for(let i=0;i<5;i++)H(qr(.1),t,e,[Math.cos(i*1.3)*.28,Math.sin(i*2.1)*.15+.1,.2])}else if(n==="fish")H(_n(.28,1),t,e,[0,0,0],{scale:[1.6,.7,.45]}),H(ke(.18,.3,4),t,e,[-.55,0,0],{rot:[0,0,Math.PI/2]}),H(zt(.05,.05,.05),"#111",e,[.33,.05,.1]);else if(n==="lob")H(_n(.22,0),t,e,[0,0,0],{scale:[1.8,.6,.7]}),H(zt(.25,.08,.12),t,e,[.45,.05,.15],{rot:[0,.4,0]}),H(zt(.25,.08,.12),t,e,[.45,.05,-.15],{rot:[0,-.4,0]});else if(n==="gem")H(qr(.32),t,e,[0,0,0],{scale:[1,1.2,1],mat:{emissive:t,emissiveIntensity:.2}});else if(n==="nest")H(new aa(.28,.12,5,10),t,e,[0,0,0],{rot:[Math.PI/2.4,0,0]}),H(jf(.1),"#8fd0ff",e,[0,.05,0]);else if(n==="box")H(zt(.6,.35,.4),t,e,[0,0,0]),H(zt(.62,.06,.42),"#c8a040",e,[0,.1,0]);else if(n==="phat")H(ke(.3,.6,6),t,e,[0,0,0],{rot:[.3,0,.2]});else if(n==="crown"){H(jt(.3,.3,.16,8),t,e,[0,0,0],{mat:{emissive:t,emissiveIntensity:.2}});for(let i=0;i<5;i++){let s=i/5*Math.PI*2;H(ke(.07,.2,4),t,e,[Math.cos(s)*.26,.17,Math.sin(s)*.26])}}else if(n==="hat"||n==="helm")H(jt(.28,.32,.25,8),t,e,[0,.05,0]),H(jt(.45,.45,.04,8),t,e,[0,-.07,0]);else if(n==="top")H(hs(.4,.32,.6),t,e,[0,0,0],{scale:[1,1,.6]}),H(hs(.1,.08,.45),t,e,[-.42,-.02,0],{rot:[0,0,.5]}),H(hs(.1,.08,.45),t,e,[.42,-.02,0],{rot:[0,0,-.5]});else if(n==="cape")H(zt(.55,.8,.05),t,e,[0,0,0],{rot:[.2,.4,0]}),H(zt(.56,.08,.06),"#ffcc33",e,[0,-.36,0],{rot:[.2,.4,0]});else if(n==="beaver"||n==="golem"||n==="heron"){let i=od("pet_"+n);me.remove(i.g),i.g.scale.setScalar(1.8),i.g.position.y=-.5,i.g.rotation.y=.6,e.add(i.g)}else if(n.startsWith("tool_")){let[,i,s]=n.split("_"),r=sd(i,+s);r.rotation.z=-.75,r.scale.setScalar(1.15),r.position.y=-.05,e.add(r)}return e}function ld(n,t){let e=n+t;if(Nr[e])return Nr[e];try{qs||(qs=new br({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),qs.setSize(72,72),qs.outputColorSpace=qe);let i=zv(n,t);i.rotation.y=-.4,Gr.add(i),qs.render(Gr,eo),Nr[e]=qs.domElement.toDataURL(),Gr.remove(i)}catch{Nr[e]=""}return Nr[e]}var fi=n=>ld(et[n].ico,et[n].col),cd=(n,t)=>ld(`tool_${n}_${t}`,Fi[t].col),Eh=n=>fi({wc:"logs",mine:"copper_ore",fish:"raw_trout"}[n]);function Hv(n,t){Zt.x+=(T.x-Zt.x)*Math.min(1,n*8),Zt.z+=(T.y-Zt.z)*Math.min(1,n*8);let e=Qe(Zt.x,Zt.z),i=Zt.dist;fs.position.set(Zt.x+Math.sin(on)*i*Math.cos(Zt.pitch),e+i*Math.sin(Zt.pitch),Zt.z+Math.cos(on)*i*Math.cos(Zt.pitch)),fs.lookAt(Zt.x,e+.8,Zt.z),mi.position.set(Zt.x-10,22,Zt.z+8),mi.target.position.set(Zt.x,0,Zt.z),nd.uT.value=t;for(let o of On)Cv(o);for(let o of id){if(Math.abs(o.x-Zt.x)>30||Math.abs(o.y-Zt.z)>30)continue;let a=o.mesh;a.rings.forEach((l,c)=>{let h=(t*.7+c*.5+a.ph)%1;l.scale.setScalar(.6+h*1.6),l.material.opacity=.8*(1-h)}),a.bub.forEach((l,c)=>{let h=(t*1.3+c*.25+a.ph)%1;l.position.set(Math.cos(c*1.7+a.ph)*.3,h*.25,Math.sin(c*2.3)*.3),l.visible=h<.9})}Pv.rotation.z=t*1.2;let s=o=>Math.abs(o.x-Zt.x)<28&&Math.abs(o.y-Zt.z)<28;for(let o of ye){let a=dh.get(o.id),l=Hr.get(o.id);if(!s(o)){a&&(a.root.visible=!1),l&&(l.g.visible=!1);continue}let c=Pf(o);c.root.visible=!0,Lf(o,c,n,t),Df(o,n,t);let h=Hr.get(o.id);h&&(h.g.visible=!0)}let r=Pf(T);r.root.visible=Bn,Lf(T,r,n,t),Df(T,n,t),xn.forEach((o,a)=>{ad[a].body.position.y=Math.sin(t*2+a)*.01}),Uv(n,t),ps.render(me,fs),Fv(t)}var yt=n=>document.getElementById(n),Te=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);T.flags=T.flags||{};var Pa=()=>innerWidth<=760,Br="all";function Th(n,t,e="pub"){let i=document.createElement("div");for(i.className="cl "+e,i.dataset.k=e==="me"?"pub":e,i.innerHTML=n?`<span class="nm">${Te(n)}:</span> <span class="tx">${Te(t)}</span>`:Te(t),hd(i),yt("chatLog").appendChild(i);yt("chatLog").children.length>60;)yt("chatLog").firstChild.remove()}function hd(n){let t=n.dataset.k,e=["game","warn","rare","lvl","news"].includes(t);n.style.display=Br==="all"||Br==="game"&&e||Br==="pub"&&t==="pub"||Br==="trade"&&t==="trade"?"":"none"}var Dt=(n,t="game")=>Th("",n,t),Fn=n=>Th("","News: "+n,"news");document.querySelectorAll(".ct[data-f]").forEach(n=>n.onclick=()=>{Br=n.dataset.f,document.querySelectorAll(".ct[data-f]").forEach(t=>t.classList.toggle("on",t===n)),document.querySelectorAll("#chatLog .cl").forEach(hd)});yt("chatHide").onclick=()=>{yt("chatbox").classList.toggle("min"),yt("chatHide").textContent=yt("chatbox").classList.contains("min")?"\u25B4":"\u25BE"};function Vv(n,t){let e=document.createElement("div");e.className="xpd",e.innerHTML=`<img alt="" src="${Eh(n)}">+${Math.round(t)}`,yt("xpdrops").appendChild(e),setTimeout(()=>e.remove(),1700)}var ih=null;function Gv(n,t){us({img:Eh(n),name:`Congratulations, you just advanced a ${tn[n].name} level.`,text:`Your ${tn[n].name} level is now ${t}.${Wv(n,t)}`,auto:5,blue:!0})}function Wv(n,t){let e=Object.values(zr).filter(r=>r.skill===n&&r.lvl===t),i=Fi.filter(r=>r.lvl===t&&t>1),s=[...e.map(r=>r.name==="Fishing spot"?r.sub.toLowerCase()+" fishing":r.name.toLowerCase()),...i.map(r=>`${r.name.toLowerCase()} ${er[n]}s`)];return s.length?` You can now use ${s.join(" and ")}.`:""}function ud(n){T.flags.rare=!0,vh(T.x,T.y,["#ffd23a","#ffffff","#ff2ea8"],24,1.4)}function ph(){T.tut===2&&!T.flags.fullTold&&(T.flags.fullTold=!0,us({npc:"guide",name:"Grindset Guide",text:"Inventory full! Follow the yellow arrow to the Shopkeeper and sell your stuff for coins."}))}function Xv(n,t){let e=document.createElement("canvas");e.width=70,e.height=70;let i=e.getContext("2d");return i.fillStyle=n.skin,i.fillRect(17,14,36,42),i.fillStyle=n.hair,i.fillRect(14,8,42,12),i.fillRect(14,8,7,26),i.fillRect(49,8,7,26),i.fillStyle="#111",i.fillRect(25,29,6,5),i.fillRect(39,29,6,5),i.fillStyle="#6a3a2a",i.fillRect(29,44,12,3),t&&(i.fillStyle=n.hair,i.fillRect(19,44,32,16),i.fillStyle="#6a3a2a",i.fillRect(29,46,12,2)),i.fillStyle=n.top,i.fillRect(12,58,46,12),i.strokeStyle="#000",i.lineWidth=2,i.strokeRect(17,14,36,42),e.toDataURL()}function us(n){let t=yt("dialog");clearTimeout(ih);let e=n.img;if(n.npc){let s=xn.find(r=>r.id===n.npc);e=Xv(s.look,s.id==="guide"||s.id==="tools")}t.innerHTML=`${e?`<img alt="" src="${e}">`:""}<div class="dm"><div class="dn"${n.blue?' style="color:#00007a"':""}>${Te(n.name||"")}</div><div class="dt">${Te(n.text)}</div><div class="dc" id="dlgNext">Click here to continue</div></div>${n.skip?'<button class="skip" id="dlgSkip">Skip tutorial</button>':""}`,t.classList.remove("hidden"),yt("chatbox").classList.remove("min");let i=()=>{t.classList.add("hidden"),clearTimeout(ih),n.next&&n.next()};yt("dlgNext").onclick=i,n.skip&&(yt("dlgSkip").onclick=()=>{t.classList.add("hidden"),T.tut=9,Le(),we()}),n.auto&&(ih=setTimeout(()=>t.classList.add("hidden"),n.auto*1e3))}function sh(n,t){let e=i=>{if(i>=n.length){t&&t();return}us({npc:"guide",name:"Grindset Guide",text:n[i],skip:T.tut<6,next:()=>e(i+1)})};e(0)}function Ah(){T.tut===0?sh([`Welcome to Grindset, ${T.name}! Everything here is a grind, and that's the point.`,"Every skill goes from level 1 to 99. Click a tree, a rock or a fishing spot and your character does the work.","Let's start easy. Click the tree with the yellow arrow above it."],()=>{T.tut=1,Le(),we()}):T.tut>=6?sh([ge(["Higher level trees, rocks and fish give more XP and sell for more coins.","Rare drops trade for $GRINDSET at the Grind Exchange in the middle of town.",`Hold ${Sn(Aa)} $GRINDSET to become a member: yews, gold trees, crystal rocks, GRIND rocks and sharks.`,"The Goblin King shows up in the pit up north every few minutes. Check the skull orb by the minimap.","Full inventory? The bank takes everything and you can sell straight from it."])]):sh(["Follow the yellow arrow. I'll be here if you need me."])}function Zr(n){n===2&&(T.tut=2,us({npc:"guide",name:"Grindset Guide",text:"Your first logs! Keep chopping. When your inventory is full, sell everything to the Shopkeeper for coins.",auto:9})),n===3&&(T.tut=3,us({npc:"guide",name:"Grindset Guide",text:"Coins buy better tools from Smith Brunn. A better axe, pickaxe or harpoon means a faster grind. Follow the arrow.",auto:9})),n===4&&(T.tut=4,us({npc:"guide",name:"Grindset Guide",text:"Rare drops (nests, gems, outfits, pets, party hats) are worth real $GRINDSET. Trade them at the Grind Exchange.",auto:9})),n===5&&(T.tut=9,us({npc:"guide",name:"Grindset Guide",text:"Last thing: the Goblin King storms the pit up north every few minutes. Everyone fights him together for loot. Now go grind!",auto:10})),Le(),we()}function $v(){if(!Bn)return null;if(T.tut===1){let n=null,t=1e9;for(let e of On)if(e.type==="tree"&&e.up){let i=Math.hypot(e.x-T.x,e.y-T.y);i<t&&(t=i,n=e)}return T.action?null:n&&{x:n.x,y:n.y,h:2.6}}if(T.tut===2&&Bi()<=8)return{x:wa.x,y:wa.y,h:2};if(T.tut===3){let n=xn.find(t=>t.id==="tools");return{x:n.x,y:n.y,h:2}}if(T.tut===4){let n=xn.find(t=>t.id==="ge3");return{x:n.x,y:n.y,h:2}}return null}var Yv={skills:'<svg viewBox="0 0 24 24"><path d="M3 20h4V10H3zm7 0h4V4h-4zm7 0h4v-7h-4z" fill="#ffd23a" stroke="#000"/></svg>',tasks:'<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z" fill="#4aa3ff" stroke="#000"/></svg>',inv:'<svg viewBox="0 0 24 24"><path d="M6 8h12l2 13H4z" fill="#b07a3a" stroke="#000"/><path d="M9 8V6a3 3 0 016 0v2" fill="none" stroke="#000" stroke-width="2"/></svg>',worn:'<svg viewBox="0 0 24 24"><path d="M5 12a7 7 0 0114 0v6H5z" fill="#9aa4b0" stroke="#000"/><path d="M8 13h8v3H8z" fill="#222"/></svg>',ge:'<svg viewBox="0 0 24 24"><path d="M12 3v18M5 7h14" stroke="#000" stroke-width="2"/><path d="M5 7l-3 7h6zM19 7l-3 7h6z" fill="#ffd23a" stroke="#000"/></svg>',wallet:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#ffb300" stroke="#000"/><text x="12" y="16.5" font-size="11" text-anchor="middle" font-weight="700" fill="#6b3a00">G</text></svg>',hiscore:'<svg viewBox="0 0 24 24"><path d="M7 3h10v5a5 5 0 01-10 0z" fill="#ffd23a" stroke="#000"/><path d="M10 13h4v4h3v3H7v-3h3z" fill="#b07a3a" stroke="#000"/></svg>'},qv=[["skills","Skills"],["tasks","Tasks"],["inv","Inventory"],["worn","Worn items"],["ge","Grind Exchange"],["wallet","Wallet"],["hiscore","Hiscores"]],je="inv",Jr=null;yt("tabs").innerHTML=qv.map(([n,t])=>`<button class="tab" data-t="${n}" title="${t}" aria-label="${t}">${Yv[n]}</button>`).join("");document.querySelectorAll(".tab").forEach(n=>n.onclick=()=>{if(Pa()&&je===n.dataset.t&&yt("side").classList.contains("open")){yt("side").classList.remove("open"),n.classList.remove("on");return}je=n.dataset.t,Jr=null,yt("side").classList.add("open"),we()});var Zv=[["Chop your first logs",()=>T.xp.wc>0],["Mine your first ore",()=>T.xp.mine>0],["Catch your first fish",()=>T.xp.fish>0],["Sell something to the Shopkeeper",()=>T.flags.sold],["Buy an iron tool from Smith Brunn",()=>Object.values(T.tools).some(n=>n>=1)],["Reach level 15 in any skill",()=>pi.some(n=>en(T,n)>=15)],["Hit the Goblin King",()=>T.bossDmg>0||(vt.hits.me||0)>0],["Get a rare drop",()=>T.flags.rare],["List an item on the Grind Exchange",()=>T.listings.length>0||T.soldAny],["Reach total level 100",()=>ir(T)>=100],["Get a 99",()=>pi.some(n=>en(T,n)>=99)]];function Ta(){document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.dataset.t===je&&(!Pa()||yt("side").classList.contains("open"))));let n=yt("tabBody"),t="";if(je==="inv")t+=`<div class="pouch"><span>Coins: ${pe(T.coins)}</span><span>${28-Bi()}/28</span></div><div class="inv">`,T.inv.forEach((e,i)=>{t+=`<div class="slot" data-i="${i}" title="${e?Te(et[e].name):""}">${e?`<img alt="${Te(et[e].name)}" src="${fi(e)}">`:""}</div>`}),t+="</div>";else if(je==="skills")if(Jr){let e=Jr,i=en(T,e),s=T.xp[e],r=i<99?kr[i+1]:s;t+=`<div class="th">${tn[e].name}</div><div class="kv"><span>Level</span><b>${i}/99</b></div><div class="kv"><span>XP</span><b>${pe(s)}</b></div><div class="kv"><span>Next level at</span><b>${pe(r)}</b></div><div class="kv"><span>Remaining</span><b>${pe(Math.max(0,r-s))}</b></div>`,t+='<div class="unl">'+Object.entries(zr).filter(([,o])=>o.skill===e).map(([,o])=>`<div><span>${o.name==="Fishing spot"?o.sub+" fishing":o.name}${o.mem?' <span class="mem">(members)</span>':""}</span><span class="${i>=o.lvl?"ok":"no"}">${o.lvl}</span></div>`).join("")+Fi.slice(1).map(o=>`<div><span>${o.name} ${er[e]}</span><span class="${i>=o.lvl?"ok":"no"}">${o.lvl}</span></div>`).join("")+"</div>",t+='<div class="row" style="margin-top:8px;justify-content:center"><button class="rsbtn" data-back>Back</button></div>'}else t+='<div class="skills">'+pi.map(e=>{let i=en(T,e),s=T.xp[e],r=kr[i],o=i<99?kr[i+1]:s+1;return`<button class="sk" data-s="${e}"><img alt="" src="${Eh(e)}"><div style="flex:1"><div class="row" style="justify-content:space-between"><span class="sn">${tn[e].name}</span><span class="sl">${i}</span></div><div class="bar"><i style="width:${Math.min(100,(s-r)/(o-r)*100)}%"></i></div></div></button>`}).join("")+"</div>",t+=`<div class="total">Total level: ${ir(T)}</div><div class="total" style="font-size:13px;color:#c8b894">Total XP: ${pe(jc(T))}</div>`,t+='<p class="muted" style="margin-top:8px;text-align:center">Click a skill to see what it unlocks.</p>';else if(je==="tasks"){let e=!0;t+='<div class="th">Tasks</div><div class="tasks">'+Zv.map(([i,s])=>{let r=s(),o=r?"d":e?"p":"n";return r||(e=!1),`<div class="${o}"><span>${i}</span><span>${r?"\u2714":""}</span></div>`}).join("")+"</div>",T.tut<6&&(t+='<div class="row" style="margin-top:10px;justify-content:center"><button class="rsbtn" data-guide>Talk to the Guide</button></div>')}else if(je==="worn"){t+='<div class="th">Worn items</div><div class="worn">'+[["head","Head"],["cape","Cape"],["body","Body"],["pet","Pet"]].map(([i,s])=>{let r=T.eq[i];return`<div class="wslot" data-uw="${i}">${r?`<img alt="" src="${fi(r)}"><b>${Te(et[r].name)}</b>`:`<span>${s}</span><br><span>empty</span>`}</div>`}).join("")+"</div>",t+='<div class="th" style="margin-top:8px">Tools</div><div class="tools">'+pi.map(i=>`<div><img alt="" src="${cd(i,T.tools[i])}">${Fi[T.tools[i]].name} ${er[i]}</div>`).join("")+"</div>";let e=pi.map(i=>`${tn[i].short} +${Math.round((Vf(T,i)-1)*1e3)/10}%`).join(" \xB7 ");t+=`<p class="muted" style="margin-top:8px">XP bonus: ${e}</p>`}else if(je==="ge")t+=`<div class="th">Grind Exchange</div><div class="note">Trade rare drops with other players for <b>${Ve}</b>. You can open it from anywhere.</div>`,t+=`<div class="kv"><span>Offers on the exchange</span><b>${bn.length}</b></div><div class="kv"><span>Your sell offers</span><b>${T.listings.length}</b></div>`,t+='<div class="row" style="margin-top:10px;justify-content:center"><button class="rsbtn gold" data-opengeb>Buy</button><button class="rsbtn gold" data-openges>Sell</button></div>';else if(je==="wallet"){let e=zf();t+=`<div class="th">Wallet</div><div class="kv"><span>${Ve} (demo)</span><b>${pe(T.grind)}</b></div><div class="kv"><span>Status</span><b style="color:${e?"#00ff00":"#ff6a5a"}">${e?"Member":"Free player"}</b></div>`,t+=`<p class="muted" style="margin:6px 0">Hold ${pe(Aa)} ${Ve} to be a member: yews, gold trees, crystal and GRIND rocks, sharks.</p>`,t+='<div class="row" style="justify-content:center;margin-bottom:8px"><button class="rsbtn gold" data-connect>Connect wallet</button></div>',t+='<div class="th">Boosts</div>'+Object.entries(tr).map(([i,s])=>`<div class="kv"><span>${s.name}<br><small class="muted">${s.desc}</small></span><button class="rsbtn" data-boost="${i}" ${Yr(i)?"disabled":""}>${Yr(i)?"Active":Sn(s.price)}</button></div>`).join(""),t+=`<div class="th" style="margin-top:6px">${Ve} items</div>`+["grind_crown","grind_cape"].map(i=>`<div class="kv"><span>${et[i].name}<br><small class="muted">+${et[i].bonus.wc}% XP all skills</small></span><button class="rsbtn" data-buyex="${i}">${Sn(et[i].ex_price)}</button></div>`).join(""),t+=`<div class="lb-links" style="margin-top:10px">${dd()}</div>`}else if(je==="hiscore"){let i=[T,...ye].slice().sort((r,o)=>jc(o)-jc(r));t+=`<div class="th">Hiscores</div><div class="note">Weekly pool: <b>${Sn(cs.amt)} ${Ve}</b>. Top 10 by XP gained this week split it every Monday.</div>`,t+='<table class="lb">'+i.slice(0,15).map((r,o)=>`<tr class="${r===T?"mine":""}"><td>${o+1}</td><td>${Te(r.name)}</td><td class="r">${ir(r)}</td></tr>`).join("")+"</table>";let s=i.indexOf(T);s>=15&&(t+=`<p class="muted" style="margin-top:6px">You: rank ${s+1}</p>`)}n.innerHTML=t,Jv(n)}function Jv(n){n.querySelectorAll(".slot").forEach(t=>{t.onclick=e=>{let i=+t.dataset.i;T.inv[i]&&Kv(i)},t.oncontextmenu=e=>{e.preventDefault();let i=+t.dataset.i;T.inv[i]&&Kr(e.clientX,e.clientY,mh(i))},md(t,(e,i)=>{let s=+t.dataset.i;T.inv[s]&&Kr(e,i,mh(s))})}),n.querySelectorAll("[data-s]").forEach(t=>t.onclick=()=>{Jr=t.dataset.s,Ta()}),n.querySelectorAll("[data-back]").forEach(t=>t.onclick=()=>{Jr=null,Ta()}),n.querySelectorAll("[data-guide]").forEach(t=>t.onclick=Ah),n.querySelectorAll("[data-uw]").forEach(t=>t.onclick=()=>dv(t.dataset.uw)),n.querySelectorAll("[data-opengeb]").forEach(t=>t.onclick=()=>Di("ge","Buy")),n.querySelectorAll("[data-openges]").forEach(t=>t.onclick=()=>Di("ge","Sell")),n.querySelectorAll("[data-connect]").forEach(t=>t.onclick=()=>Dt("Wallet connect goes live with the server. The preview uses a demo wallet.","warn")),n.querySelectorAll("[data-boost]").forEach(t=>t.onclick=()=>{let e=t.dataset.boost;Sa(tr[e].price,()=>{T.boosts[e]=xh()+tr[e].dur,Dt(`${tr[e].name} is active for 1 hour.`,"rare")})}),n.querySelectorAll("[data-buyex]").forEach(t=>t.onclick=()=>{let e=t.dataset.buyex;Sa(et[e].ex_price,()=>{Xn(e),Dt(`You buy the ${et[e].name}.`,"rare")})}),pd(n)}function mh(n){let t=T.inv[n],e=et[t],i=[],s=`<span class="i">${Te(e.name)}</span>`;return e.t==="wear"&&i.push([`Wear ${s}`,()=>Ef(n)]),e.t==="pet"&&i.push([`Summon ${s}`,()=>Ef(n)]),e.open&&i.push([`Open ${s}`,()=>lv(n)]),Li==="store"&&e.v&&i.push([`Sell ${s} (${e.v} gp)`,()=>Wf(n)]),e.trade&&i.push([`Sell on Exchange ${s}`,()=>Di("ge","Sell")]),i.push([`Examine ${s}`,()=>Dt(e.ex||(e.t==="res"?`${e.name}. The shop pays ${e.v} coins each.`:e.name))]),i.push([`Drop ${s}`,()=>{T.inv[n]=null,Le(),we()}]),i}function Kv(n){mh(n)[0][1]()}var Li=null,Js=null;function Di(n,t){if(["store","tools","bank","ge"].includes(n)){Li=n,Js=t||(n==="ge"?"Buy":null),yt("modal").classList.remove("hidden"),n==="tools"&&T.tut===3&&Zr(4),n==="ge"&&T.tut===4&&Zr(5),we();return}je=n,we()}function Rh(){Li=null,yt("modal").classList.add("hidden"),we()}yt("modalX").onclick=Rh;yt("modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&Rh()});function fd(){if(!Li)return;let n=yt("modalBody"),t="";if(Li==="store"){yt("modalTitle").textContent="General Store";let i=T.inv.map((r,o)=>[r,o]).filter(([r])=>r&&et[r].v),s=i.filter(([r])=>et[r].t==="res").reduce((r,[o])=>r+et[o].v,0);t+='<div class="note">Click an item in your inventory to sell it, or sell every resource at once.</div>',t+=`<div class="row" style="justify-content:center;margin-bottom:10px"><button class="rsbtn big" style="max-width:320px" data-sellall ${s?"":"disabled"}>Sell all resources (${pe(s)} coins)</button></div>`,t+='<div class="shop">'+i.map(([r,o])=>`<div class="sitem" data-sell="${o}"><img alt="" src="${fi(r)}">${Te(et[r].name)}<div class="pr">${pe(et[r].v)} gp</div></div>`).join("")+"</div>",i.length||(t+='<p class="muted" style="text-align:center">Nothing to sell. Go gather something.</p>')}else if(Li==="tools"){yt("modalTitle").textContent="Smith Brunn's Tools",t+=`<div class="note">Better tools gather faster. Coins: <b>${pe(T.coins)}</b>. The GRIND tier costs ${Ve}.</div>`;for(let i of pi)t+=`<div class="th" style="text-align:left">${tn[i].name} (level ${en(T,i)})</div><div class="shop" style="margin-bottom:8px">`,Fi.forEach((s,r)=>{if(r===0)return;let o=T.tools[i]>=r,a=en(T,i)<s.lvl;t+=`<div class="sitem ${a?"lock":""}" data-tool="${i}:${r}">${o?'<span class="own">\u2714</span>':""}<img alt="" src="${cd(i,r)}">${s.name} ${er[i]}<div class="pr">${o?"Owned":s.grind?Sn(s.grind)+" "+Ve:Sn(s.price)+" gp"}</div><div class="muted">Lvl ${s.lvl}</div></div>`}),t+="</div>"}else if(Li==="bank"){yt("modalTitle").textContent="Bank of Grindset";let i=Object.keys(T.bank).sort((r,o)=>et[o].v-et[r].v),s=i.reduce((r,o)=>r+et[o].v*T.bank[o],0);t+='<div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="muted">Click an item to withdraw one. Right-click for more.</span><button class="rsbtn" data-dep>Deposit inventory</button></div>',t+='<div class="shop">'+i.map(r=>`<div class="sitem" data-wd="${r}"><img alt="" src="${fi(r)}">${Te(et[r].name)}<div class="pr">x${pe(T.bank[r])}</div></div>`).join("")+"</div>",i.length?t+=`<div class="row" style="justify-content:center;margin-top:10px"><button class="rsbtn" data-sellbank>Sell all resources in bank (${pe(i.filter(r=>et[r].t==="res").reduce((r,o)=>r+et[o].v*T.bank[o],0))} coins)</button></div>`:t+='<p class="muted" style="text-align:center">Your bank is empty.</p>'}else if(Li==="ge")if(yt("modalTitle").textContent="Grind Exchange",t+=`<div class="mtabs">${["Buy","Sell","My offers","Recent"].map(i=>`<button class="mtab ${i===Js?"on":""}" data-mt="${i}">${i}</button>`).join("")}<span class="muted" style="margin-left:auto">Wallet: ${pe(T.grind)} ${Ve}</span></div>`,Js==="Buy")t+=`<div class="note">Offers from other players, priced in <b>${Ve}</b>. ${Math.round((Be.MARKET_FEE||.05)*100)}% of each sale goes to the weekly hiscores pool.</div>`,bn.length||(t+='<p class="muted" style="text-align:center;padding:12px">No offers yet. The world just opened, so rares show up here as players find them. Be the first seller.</p>'),t+=bn.slice().sort((i,s)=>et[s.key].trade-et[i.key].trade||i.price-s.price).map(i=>`<div class="mk"><img alt="" src="${fi(i.key)}"><div class="info">${Te(et[i.key].name)}<small>seller: ${Te(i.seller)} \xB7 guide price ${Sn(et[i.key].trade)}</small></div><div class="pr">${pe(i.price)}</div><button class="rsbtn" data-buy="${i.id}" ${T.grind<i.price?"disabled":""}>Buy</button></div>`).join("");else if(Js==="Sell"){let i=T.inv.map((s,r)=>[s,r]).filter(([s])=>s&&et[s].trade);t+=`<div class="note">Only rare items trade here: nests, caskets, gems, outfits, pets, party hats, crowns. Set your price in ${Ve}.</div>`,i.length||(t+='<p class="muted" style="text-align:center">You have nothing tradeable in your inventory yet. Rare drops come from skilling and the Goblin King.</p>'),t+=i.map(([s,r])=>`<div class="mk"><img alt="" src="${fi(s)}"><div class="info">${Te(et[s].name)}<small>guide price ${Sn(et[s].trade)} ${Ve}</small></div><input class="pin" type="number" min="1" id="p_${r}" value="${et[s].trade}"><button class="rsbtn green" data-list="${r}">Sell</button></div>`).join("")}else Js==="My offers"?(T.listings.length||(t+='<p class="muted" style="text-align:center">No offers.</p>'),t+=T.listings.map((i,s)=>`<div class="mk"><img alt="" src="${fi(i.key)}"><div class="info">${Te(et[i.key].name)}<small>waiting for a buyer</small></div><div class="pr">${pe(i.price)}</div><button class="rsbtn red" data-delist="${s}">Abort</button></div>`).join("")):(ls.length||(t+='<p class="muted" style="text-align:center">No trades yet this session.</p>'),t+=ls.map(i=>`<div class="mk"><img alt="" src="${fi(i.key)}"><div class="info">${Te(et[i.key].name)}<small>bought by ${Te(i.buyer)}</small></div><div class="pr">${pe(i.price)}</div></div>`).join(""));n.innerHTML=t;let e=(i,s)=>n.querySelectorAll(i).forEach(r=>r.onclick=()=>s(r));e("[data-sellall]",hv),e("[data-sell]",i=>Wf(+i.dataset.sell)),e("[data-tool]",i=>{let[s,r]=i.dataset.tool.split(":");uv(s,+r)}),e("[data-dep]",fv),e("[data-wd]",i=>Qc(i.dataset.wd)),n.querySelectorAll("[data-wd]").forEach(i=>{let s=i.dataset.wd,r=()=>[[`Withdraw-1 <span class="i">${Te(et[s].name)}</span>`,()=>Qc(s)],[`Withdraw-All <span class="i">${Te(et[s].name)}</span>`,()=>{for(;T.bank[s]&&Bi();)Qc(s)}],...et[s].v?[[`Sell-All <span class="i">${Te(et[s].name)}</span>`,()=>wf(s)]]:[]];i.oncontextmenu=o=>{o.preventDefault(),Kr(o.clientX,o.clientY,r())},md(i,(o,a)=>Kr(o,a,r()))}),e("[data-sellbank]",()=>{Object.keys(T.bank).filter(i=>et[i].t==="res").forEach(wf)}),e("[data-mt]",i=>{Js=i.dataset.mt,fd()}),e("[data-buy]",i=>{let s=bn.find(r=>r.id===i.dataset.buy);if(s){if(!Bi()){Dt("Your inventory is full.","warn");return}Sa(s.price,()=>{bn.splice(bn.indexOf(s),1),sr(s.key),cs.amt=Math.min(Be.WEEKLY_POOL_CAP||25e4,cs.amt+s.price*(Be.MARKET_FEE||.05)),ls.unshift({key:s.key,price:s.price,buyer:T.name}),Dt(`Grind Exchange: you bought ${et[s.key].name} from ${s.seller} for ${pe(s.price)} ${Ve}.`,"trade")})}}),e("[data-list]",i=>{let s=+i.dataset.list,r=T.inv[s];if(!r)return;let o=Math.max(1,Math.floor(+yt("p_"+s).value||0));T.inv[s]=null,T.listings.push({key:r,price:o,t:Date.now()}),Dt(`Grind Exchange: sell offer placed for ${et[r].name} at ${pe(o)} ${Ve}.`,"trade"),Le(),we()}),e("[data-delist]",i=>{let s=T.listings[+i.dataset.delist];s&&(Xn(s.key),T.listings.splice(+i.dataset.delist,1),Le(),we())})}function we(){Ta(),fd()}function dd(){let n=Be.CA,t=Be.BUY||(n?Be.PAD==="stonkfun"?`https://stonkfun.xyz/token/${n}`:`https://pump.fun/coin/${n}`:""),e=Be.CHART||(n?`https://gmgn.ai/sol/token/${n}`:""),i=(s,r)=>r?`<a class="rsbtn" href="${r}" target="_blank" rel="noopener">${s}</a>`:`<button type="button" class="rsbtn" disabled>${s}</button>`;return i("Buy "+Ve,t)+i("Chart",e)+i("X",Be.X)+`<button type="button" class="rsbtn gold" data-ca>${n?"CA "+n.slice(0,4)+"\u2026"+n.slice(-4):"CA soon"}</button>`}function pd(n){n.querySelectorAll("[data-ca]").forEach(t=>t.onclick=()=>{if(!Be.CA){Dt("The contract address drops at launch.");return}navigator.clipboard?.writeText(Be.CA).then(()=>Dt("Contract address copied."),()=>Dt(Be.CA))})}function Kr(n,t,e){let i=yt("menu");i.innerHTML='<div class="mh">Choose Option</div>'+e.map((r,o)=>`<div class="mo" data-i="${o}">${r[0]}</div>`).join("")+'<div class="mo" data-i="c">Cancel</div>',i.classList.remove("hidden");let s=i.getBoundingClientRect();i.style.left=Math.max(4,Math.min(innerWidth-s.width-4,n-s.width/2))+"px",i.style.top=Math.max(4,Math.min(innerHeight-s.height-4,t-8))+"px",i.querySelectorAll(".mo").forEach(r=>r.onclick=o=>{o.stopPropagation(),Ch(),r.dataset.i!=="c"&&e[+r.dataset.i][1]()})}function Ch(){yt("menu").classList.add("hidden")}addEventListener("pointerdown",n=>{yt("menu").contains(n.target)||Ch()},!0);function md(n,t){let e=null,i=0,s=0;n.addEventListener("touchstart",r=>{let o=r.touches[0];i=o.clientX,s=o.clientY,e=setTimeout(()=>{e=null,n.dataset.lp="1",t(i,s)},480)},{passive:!0}),n.addEventListener("touchmove",r=>{let o=r.touches[0];Math.hypot(o.clientX-i,o.clientY-s)>10&&(clearTimeout(e),e=null)},{passive:!0}),n.addEventListener("touchend",r=>{e&&clearTimeout(e),n.dataset.lp&&(r.preventDefault(),delete n.dataset.lp)})}var jv=n=>n.def.skill==="wc"?"Chop down":n.def.skill==="mine"?"Mine":n.def.sub;function Ih(n,t){let e=[],i=t?[["Walk here",()=>gd(t.x,t.y)]]:[];if(!n)return i;if(n.kind==="node"){let s=n.ref,r=`<span class="o">${Te(s.def.name)}</span>`;e.push([`${jv(s)} ${r}`,()=>{ya(s.x,s.y,!0),yh(s)}]),s.def.skill==="mine"&&e.push([`Prospect ${r}`,()=>Dt(s.up?`This rock contains ${et[s.def.item].name.toLowerCase()}. Mining level ${s.def.lvl}.`:"There is currently no ore available in this rock.")]),e.push(...i),e.push([`Examine ${r}`,()=>Dt(`${s.def.ex} (${tn[s.def.skill].name} level ${s.def.lvl}${s.def.mem?", members":""})`)])}else if(n.kind==="npc"){let s=n.ref,r=`<span class="n">${Te(s.name)}</span>`,o={bank:"Bank",store:"Trade",tools:"Trade",ge:"Exchange",guide:"Talk-to"}[s.role];e.push([`${o} ${r}`,()=>{ya(s.x,s.y,!0),hh(s)}]),o!=="Talk-to"&&e.push([`Talk-to ${r}`,()=>{ya(s.x,s.y,!0),hh(s)}]),e.push(...i),e.push([`Examine ${r}`,()=>Dt({bank:"Keeps your stuff safe. Mostly.",store:"Buys anything you drag out of the ground.",tools:"Sells tools. Has opinions about axes.",ge:"Takes your rares, gives you $GRINDSET.",guide:"Knows everything about the grind."}[s.role])])}else if(n.kind==="player"){let s=n.ref,r=`<span class="p">${Te(s.name)}</span><span style="color:#00ff00"> (total-${ir(s)})</span>`;e.push([`Follow ${r}`,()=>{T.follow=s,T.action=null,Dt(`You follow ${s.name}.`)}]),e.push([`Trade with ${r}`,()=>Qv(s)]),e.push(...i),e.push([`Examine ${r}`,()=>Dt(`${s.name}: WC ${en(s,"wc")}, Mining ${en(s,"mine")}, Fishing ${en(s,"fish")}.${s.eq.pet?" Has a pet.":""}`)])}else if(n.kind==="boss"){let s='<span class="n">Goblin King</span><span style="color:#ff3030"> (level-96)</span>';e.push([`Attack ${s}`,Mh]),e.push(...i),e.push([`Examine ${s}`,()=>Dt("He wants your loot. You want his.")])}return e}function Qv(n){let t=T.inv.map((r,o)=>[r,o]).filter(([r])=>r&&et[r].trade);if(!t.length){Dt(`You have nothing ${n.name} wants. Only rare items can be traded.`);return}let[e,i]=t.sort((r,o)=>et[o[0]].trade-et[r[0]].trade)[0],s=et[e].trade;Nn(T,`${n.name} wanna buy my ${et[e].name.toLowerCase()} for ${Sn(s)}?`),setTimeout(()=>{if(Math.random()<.55){if(T.inv[i]!==e)return;T.inv[i]=null;let r=Math.round(s*(Be.MARKET_FEE||.05));T.grind+=s-r,T.soldAny=!0,Nn(n,ge(["deal","sure","ez yes","take my money"])),Dt(`Trade complete: ${et[e].name} for ${pe(s-r)} ${Ve} (after 5% fee).`,"trade"),Le(),we()}else Nn(n,ge(["too much","nah","lower pls","lol no","half that"]))},1400)}function gd(n,t){let e=Math.floor(n),i=Math.floor(t);if(!Ni(e,i)){let s=null,r=9;for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)Ni(e+a,i+o)&&Math.hypot(a,o)<r&&(r=Math.hypot(a,o),s=[e+a,i+o]);if(!s)return;[e,i]=s}ya(e+.5,i+.5,!1),Ca(e,i)}var ya=(n,t,e)=>{Dn={x:n,y:t,red:e,t:1}},Ne=null,jr=null,qn=new Map,Wr=0;ms.addEventListener("contextmenu",n=>n.preventDefault());ms.addEventListener("pointerdown",n=>{if(Bn){if(qn.set(n.pointerId,{x:n.clientX,y:n.clientY}),qn.size===2){let[t,e]=[...qn.values()];Wr=Math.hypot(t.x-e.x,t.y-e.y),clearTimeout(jr),Ne=null;return}if(Ne={x:n.clientX,y:n.clientY,btn:n.button,drag:!1,menu:!1,yaw:on},n.button===2){Ne.menu=!0,Of(n.clientX,n.clientY);return}n.pointerType==="touch"&&(jr=setTimeout(()=>{Ne&&!Ne.drag&&(Ne.menu=!0,Of(Ne.x,Ne.y))},480))}});ms.addEventListener("pointermove",n=>{if(qn.has(n.pointerId)&&qn.set(n.pointerId,{x:n.clientX,y:n.clientY}),qn.size===2){let[t,e]=[...qn.values()],i=Math.hypot(t.x-e.x,t.y-e.y);Wr&&(Zt.dist=Math.max(8,Math.min(26,Zt.dist*Wr/i)),Wr=i);return}if(Ne&&!Ne.menu){let t=n.clientX-Ne.x;(Math.abs(t)>10||Math.abs(n.clientY-Ne.y)>10)&&(Ne.drag=!0,clearTimeout(jr)),Ne.drag&&(on=Ne.yaw-t*.008)}!Pa()&&Bn&&!Ne&&ey(n.clientX,n.clientY)});var ty=n=>{if(qn.delete(n.pointerId),qn.size<2&&(Wr=0),clearTimeout(jr),!Ne)return;let t=Ne;if(Ne=null,t.drag||t.menu||t.btn!==0)return;let e=wh(n.clientX,n.clientY),i=Sh(n.clientX,n.clientY),s=Ih(e,i);s.length&&s[0][1]()};ms.addEventListener("pointerup",ty);ms.addEventListener("pointercancel",n=>{qn.delete(n.pointerId),Ne=null,clearTimeout(jr)});ms.addEventListener("wheel",n=>{n.preventDefault(),Zt.dist=Math.max(8,Math.min(26,Zt.dist+n.deltaY*.01))},{passive:!1});function Of(n,t){let e=wh(n,t),i=Sh(n,t);Kr(n,t,Ih(e,i))}var Bf=0;function ey(n,t){let e=performance.now();if(e-Bf<60)return;Bf=e;let i=wh(n,t),s=Ih(i,Sh(n,t));yt("hover").innerHTML=s.length?`${s[0][0]}${s.length>1?` <span class="m">/ ${s.length} more options</span>`:""}`:""}yt("mini").addEventListener("click",n=>{if(!Bn)return;let t=kv(n.clientX,n.clientY);t&&gd(t.x,t.y)});yt("compass").onclick=()=>{on=0};yt("orbGrind").onclick=()=>{je="wallet",yt("side").classList.add("open"),we()};yt("orbCoins").onclick=()=>{je="inv",yt("side").classList.add("open"),we()};yt("orbBoss").onclick=()=>{vt.on?Mh():Dt(`The Goblin King shows up in ${Math.ceil(vt.next)} seconds. The pit is north of town.`)};addEventListener("keydown",n=>{if(document.activeElement&&document.activeElement.tagName==="INPUT"){n.key==="Escape"&&document.activeElement.blur();return}let e=n.key.toLowerCase();Yn[e]=!0,e==="enter"&&Bn&&(n.preventDefault(),yt("chatIn").focus()),e==="escape"&&(Ch(),Rh()),e.startsWith("arrow")&&n.preventDefault()});addEventListener("keyup",n=>{Yn[n.key.toLowerCase()]=!1});yt("chatForm").addEventListener("submit",n=>{n.preventDefault();let t=yt("chatIn").value.trim();yt("chatIn").value="",yt("chatIn").blur(),t&&(Nn(T,t),/\bgm\b|\bhi\b|\bhello\b/i.test(t)&&setTimeout(()=>Nn(ge(ye),ge(["gm","hey","yo","sup"])),Re(700,1600)))});var ny=[["skin","Skin"],["hair","Hair"],["top","Top"],["legs","Legs"]];function _d(){yt("designer").innerHTML=ny.map(([n,t])=>`<span class="dl">${t}</span><button type="button" data-lk="${n}" data-d="-1" aria-label="Previous ${t}">\u25C0</button><span class="sw" style="background:${ga[n][T.look[n]%ga[n].length]}"></span><button type="button" data-lk="${n}" data-d="1" aria-label="Next ${t}">\u25B6</button>`).join(""),yt("designer").querySelectorAll("[data-lk]").forEach(n=>n.onclick=()=>{let t=n.dataset.lk,e=ga[t].length;T.look[t]=((T.look[t]||0)+ +n.dataset.d+e)%e,_d()})}function iy(){_d(),T.name&&(yt("nameIn").value=T.name),yt("loginLinks").innerHTML=dd(),pd(yt("loginLinks")),yt("loginForm").addEventListener("submit",n=>{n.preventDefault();let t=yt("nameIn").value.trim().replace(/[^\w .\-]/g,"").slice(0,12);if(!t){yt("nameIn").focus(),yt("nameIn").placeholder="pick a name first";return}T.name=t,yt("chatName").textContent=t,yt("login").classList.add("hidden"),yt("ui").classList.remove("hidden"),Bn=!0,on=0,Zt.dist=Pa()?19:15,Le(),Dt("Welcome to Grindset. World 1 just opened. Everyone starts at level 1.","news"),T.tut===0&&setTimeout(Ah,500),we()})}var Zs=0,sy=setInterval(()=>{Zs=Math.min(100,Zs+18+Math.random()*14),yt("loadFill").style.width=`calc(${Zs}% - 4px)`,yt("loadTxt").textContent=Zs<100?`Loading world - ${Math.floor(Zs)}%`:"Welcome to Grindset",Zs>=100&&(clearInterval(sy),setTimeout(()=>{yt("loader").classList.add("hidden"),yt("login").classList.remove("hidden")},350))},170);function ry(){yt("grindBal").textContent=Sn(T.grind),yt("coinBal").textContent=Sn(T.coins);let n=vt.on?vt.t:vt.next;yt("bossTime").textContent=vt.on?"LIVE":`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`,yt("orbBoss").classList.toggle("live",vt.on),yt("area").textContent=`${ev(T.x,T.y)} \xB7 World 1 \xB7 ${ye.length+1} online`,yt("boost-pills").innerHTML=Object.keys(tr).filter(Yr).map(t=>{let e=Math.ceil(T.boosts[t]-xh());return`<div class="bp">${tr[t].name} ${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}</div>`}).join("")}var kf=performance.now(),rh=0,oh=0,ah=0,lh=0,oy=performance.now();function xd(n){if(Bn){for(Mv(n),Yn.arrowleft&&(on+=n*1.8),Yn.arrowright&&(on-=n*1.8),Yn.arrowup&&(Zt.dist=Math.max(8,Zt.dist-n*8)),Yn.arrowdown&&(Zt.dist=Math.min(26,Zt.dist+n*8)),va+=n;va>=Ma;)va-=Ma,qf();vt.on?(vt.t-=n,vt.t<=0&&$f(!1)):(vt.next-=n,vt.next<=0&&Xf()),vt.flash-=n,bv(n),Sv(n),rh+=n,rh>5&&(rh=0,Le())}else on+=n*.08,Zt.dist=13;Bn&&gv(n);for(let t of ye)vv(t,n),Yf(t,n,2.6),t.bubbleT-=n;T.bubbleT-=n,Dn&&(Dn.t-=n*2.2);for(let t of Ks)t.t+=n;for(let t=Ks.length-1;t>=0;t--)Ks[t].t>1.1&&Ks.splice(t,1);for(let t of js)t.t+=n;for(let t=js.length-1;t>=0;t--)js[t].t>1&&js.splice(t,1)}function vd(n){let t=Math.min(.05,(n-kf)/1e3);kf=n;let e=(n-oy)/1e3;xd(t),Bn&&(oh-=t,oh<=0&&(oh=.2,ry()),ah-=t,ah<=0&&(ah=1,(je==="skills"||je==="hiscore"||je==="tasks")&&Ta()),lh-=t,lh<=0&&(lh=.1,Bv())),Hv(t,e),requestAnimationFrame(vd)}iy();yt("chatName").textContent=T.name||"you";requestAnimationFrame(vd);window.__G={sim:n=>{for(let t=0;t<n*20;t++)xd(.05)},me:T,bots:ye,boss:vt,NODE_LIST:On,NPCS:xn,market:bn,renderer:ps,startGather:yh,talkTo:hh,gameTick:qf,spawnBoss:Xf,fightBoss:Mh,openPanel:Di,get started(){return Bn}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
