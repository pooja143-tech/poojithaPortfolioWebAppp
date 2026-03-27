var DC=Object.defineProperty,AC=Object.defineProperties;var IC=Object.getOwnPropertyDescriptors;var ql=Object.getOwnPropertySymbols;var Q_=Object.prototype.hasOwnProperty,e0=Object.prototype.propertyIsEnumerable;var K_=(n,e,t)=>e in n?DC(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ue=(n,e)=>{for(var t in e||={})Q_.call(e,t)&&K_(n,t,e[t]);if(ql)for(var t of ql(e))e0.call(e,t)&&K_(n,t,e[t]);return n},Et=(n,e)=>AC(n,IC(e));var t0=(n,e)=>{var t={};for(var i in n)Q_.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&ql)for(var i of ql(n))e.indexOf(i)<0&&e0.call(n,i)&&(t[i]=n[i]);return t};var Op;function Xl(){return Op}function Ri(n){let e=Op;return Op=n,e}var n0=Symbol("NotFound");function ho(n){return n===n0||n?.name==="\u0275NotFound"}var ln=null,Yl=!1,Lp=1,RC=null,wn=Symbol("SIGNAL");function ze(n){let e=ln;return ln=n,e}function Jl(){return ln}var Va={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ha(n){if(Yl)throw new Error("");if(ln===null)return;ln.consumerOnSignalRead(n);let e=ln.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=ln.recomputing;if(i&&(t=e!==void 0?e.nextProducer:ln.producers,t!==void 0&&t.producer===n)){ln.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===ln&&(!i||PC(r,ln)))return;let s=po(ln),o={producer:n,consumer:ln,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};ln.producersTail=o,e!==void 0?e.nextProducer=o:ln.producers=o,s&&o0(n,o)}function i0(){Lp++}function Fp(n){if(!(po(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Lp)){if(!n.producerMustRecompute(n)&&!Ga(n)){Zl(n);return}n.producerRecomputeValue(n),Zl(n)}}function kp(n){if(n.consumers===void 0)return;let e=Yl;Yl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||NC(i)}}finally{Yl=e}}function Up(){return ln?.consumerAllowSignalWrites!==!1}function NC(n){n.dirty=!0,kp(n),n.consumerMarkedDirty?.(n)}function Zl(n){n.dirty=!1,n.lastCleanEpoch=Lp}function za(n){return n&&r0(n),ze(n)}function r0(n){n.producersTail=void 0,n.recomputing=!0}function Kl(n,e){ze(e),n&&s0(n)}function s0(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(po(n))do t=Bp(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Ga(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(Fp(t),i!==t.version))return!0}return!1}function ja(n){if(po(n)){let e=n.producers;for(;e!==void 0;)e=Bp(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function o0(n,e){let t=n.consumersTail,i=po(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)o0(r.producer,r)}function Bp(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!po(e)){let s=e.producers;for(;s!==void 0;)s=Bp(s)}return t}function po(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Vp(n){RC?.(n)}function PC(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function Hp(n,e){return Object.is(n,e)}function OC(){throw new Error}var a0=OC;function c0(n){a0(n)}function zp(n){a0=n}var LC=null;function Gp(n,e){let t=Object.create(Ql);t.value=n,e!==void 0&&(t.equal=e);let i=()=>l0(t);return i[wn]=t,Vp(t),[i,o=>mo(t,o),o=>jp(t,o)]}function l0(n){return Ha(n),n.value}function mo(n,e){Up()||c0(n),n.equal(n.value,e)||(n.value=e,FC(n))}function jp(n,e){Up()||c0(n),mo(n,e(n.value))}var Ql=Et(ue({},Va),{equal:Hp,value:void 0,kind:"signal"});function FC(n){n.version++,i0(),kp(n),LC?.(n)}function Ve(n){return typeof n=="function"}function go(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var eu=go(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Wa(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Bt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ve(i))try{i()}catch(s){e=s instanceof eu?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{u0(s)}catch(o){e=e??[],o instanceof eu?e=[...e,...o.errors]:e.push(o)}}if(e)throw new eu(e)}}add(e){var t;if(e&&e!==this)if(this.closed)u0(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Wa(t,e)}remove(e){let{_finalizers:t}=this;t&&Wa(t,e),e instanceof n&&e._removeParent(this)}};Bt.EMPTY=(()=>{let n=new Bt;return n.closed=!0,n})();var Wp=Bt.EMPTY;function tu(n){return n instanceof Bt||n&&"closed"in n&&Ve(n.remove)&&Ve(n.add)&&Ve(n.unsubscribe)}function u0(n){Ve(n)?n():n.unsubscribe()}var hi={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var vo={setTimeout(n,e,...t){let{delegate:i}=vo;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=vo;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function nu(n){vo.setTimeout(()=>{let{onUnhandledError:e}=hi;if(e)e(n);else throw n})}function $a(){}var d0=$p("C",void 0,void 0);function f0(n){return $p("E",void 0,n)}function h0(n){return $p("N",n,void 0)}function $p(n,e,t){return{kind:n,value:e,error:t}}var ls=null;function yo(n){if(hi.useDeprecatedSynchronousErrorHandling){let e=!ls;if(e&&(ls={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ls;if(ls=null,t)throw i}}else n()}function p0(n){hi.useDeprecatedSynchronousErrorHandling&&ls&&(ls.errorThrown=!0,ls.error=n)}var us=class extends Bt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,tu(e)&&e.add(this)):this.destination=BC}static create(e,t,i){return new _o(e,t,i)}next(e){this.isStopped?Xp(h0(e),this):this._next(e)}error(e){this.isStopped?Xp(f0(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Xp(d0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},kC=Function.prototype.bind;function qp(n,e){return kC.call(n,e)}var Yp=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){iu(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){iu(i)}else iu(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){iu(t)}}},_o=class extends us{constructor(e,t,i){super();let r;if(Ve(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&hi.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&qp(e.next,s),error:e.error&&qp(e.error,s),complete:e.complete&&qp(e.complete,s)}):r=e}this.destination=new Yp(r)}};function iu(n){hi.useDeprecatedSynchronousErrorHandling?p0(n):nu(n)}function UC(n){throw n}function Xp(n,e){let{onStoppedNotification:t}=hi;t&&vo.setTimeout(()=>t(n,e))}var BC={closed:!0,next:$a,error:UC,complete:$a};var Eo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Fn(n){return n}function Zp(...n){return Jp(n)}function Jp(n){return n.length===0?Fn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ot=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=HC(t)?t:new _o(t,i,r);return yo(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=m0(i),new i((r,s)=>{let o=new _o({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Eo](){return this}pipe(...t){return Jp(t)(this)}toPromise(t){return t=m0(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function m0(n){var e;return(e=n??hi.Promise)!==null&&e!==void 0?e:Promise}function VC(n){return n&&Ve(n.next)&&Ve(n.error)&&Ve(n.complete)}function HC(n){return n&&n instanceof us||VC(n)&&tu(n)}function Kp(n){return Ve(n?.lift)}function nt(n){return e=>{if(Kp(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function it(n,e,t,i,r){return new Qp(n,e,t,i,r)}var Qp=class extends us{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function xo(){return nt((n,e)=>{let t=null;n._refCount++;let i=it(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Mo=class extends ot{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Kp(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Bt;let t=this.getSubject();e.add(this.source.subscribe(it(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Bt.EMPTY)}return e}refCount(){return xo()(this)}};var g0=go(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var jt=(()=>{class n extends ot{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ru(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new g0}next(t){yo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){yo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){yo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Wp:(this.currentObservers=null,s.push(t),new Bt(()=>{this.currentObservers=null,Wa(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ot;return t.source=this,t}}return n.create=(e,t)=>new ru(e,t),n})(),ru=class extends jt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Wp}};var sn=class extends jt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Tn=new ot(n=>n.complete());function v0(n){return n&&Ve(n.schedule)}function y0(n){return n[n.length-1]}function _0(n){return Ve(y0(n))?n.pop():void 0}function Dr(n){return v0(y0(n))?n.pop():void 0}function x0(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function E0(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ds(n){return this instanceof ds?(this.v=n,this):new ds(n)}function M0(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(v){return new Promise(function(m,p){s.push([h,v,m,p])>1||c(h,v)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof ds?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function S0(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof E0=="function"?E0(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var su=n=>n&&typeof n.length=="number"&&typeof n!="function";function ou(n){return Ve(n?.then)}function au(n){return Ve(n[Eo])}function cu(n){return Symbol.asyncIterator&&Ve(n?.[Symbol.asyncIterator])}function lu(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function zC(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var uu=zC();function du(n){return Ve(n?.[uu])}function fu(n){return M0(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield ds(t.read());if(r)return yield ds(void 0);yield yield ds(i)}}finally{t.releaseLock()}})}function hu(n){return Ve(n?.getReader)}function en(n){if(n instanceof ot)return n;if(n!=null){if(au(n))return GC(n);if(su(n))return jC(n);if(ou(n))return WC(n);if(cu(n))return b0(n);if(du(n))return $C(n);if(hu(n))return qC(n)}throw lu(n)}function GC(n){return new ot(e=>{let t=n[Eo]();if(Ve(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function jC(n){return new ot(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function WC(n){return new ot(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,nu)})}function $C(n){return new ot(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function b0(n){return new ot(e=>{XC(n,e).catch(t=>e.error(t))})}function qC(n){return b0(fu(n))}function XC(n,e){var t,i,r,s;return x0(this,void 0,void 0,function*(){try{for(t=S0(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Cn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function pu(n,e=0){return nt((t,i)=>{t.subscribe(it(i,r=>Cn(i,n,()=>i.next(r),e),()=>Cn(i,n,()=>i.complete(),e),r=>Cn(i,n,()=>i.error(r),e)))})}function mu(n,e=0){return nt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function w0(n,e){return en(n).pipe(mu(e),pu(e))}function T0(n,e){return en(n).pipe(mu(e),pu(e))}function C0(n,e){return new ot(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function D0(n,e){return new ot(t=>{let i;return Cn(t,e,()=>{i=n[uu](),Cn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ve(i?.return)&&i.return()})}function gu(n,e){if(!n)throw new Error("Iterable cannot be null");return new ot(t=>{Cn(t,e,()=>{let i=n[Symbol.asyncIterator]();Cn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function A0(n,e){return gu(fu(n),e)}function I0(n,e){if(n!=null){if(au(n))return w0(n,e);if(su(n))return C0(n,e);if(ou(n))return T0(n,e);if(cu(n))return gu(n,e);if(du(n))return D0(n,e);if(hu(n))return A0(n,e)}throw lu(n)}function Ft(n,e){return e?I0(n,e):en(n)}function Pe(...n){let e=Dr(n);return Ft(n,e)}function So(n,e){let t=Ve(n)?n:()=>n,i=r=>r.error(t());return new ot(e?r=>e.schedule(i,0,r):i)}function em(n){return!!n&&(n instanceof ot||Ve(n.lift)&&Ve(n.subscribe))}var Qi=go(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(n,e){return nt((t,i)=>{let r=0;t.subscribe(it(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:YC}=Array;function ZC(n,e){return YC(e)?n(...e):n(e)}function R0(n){return rt(e=>ZC(n,e))}var{isArray:JC}=Array,{getPrototypeOf:KC,prototype:QC,keys:eD}=Object;function N0(n){if(n.length===1){let e=n[0];if(JC(e))return{args:e,keys:null};if(tD(e)){let t=eD(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function tD(n){return n&&typeof n=="object"&&KC(n)===QC}function P0(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function vu(...n){let e=Dr(n),t=_0(n),{args:i,keys:r}=N0(n);if(i.length===0)return Ft([],e);let s=new ot(nD(i,e,r?o=>P0(r,o):Fn));return t?s.pipe(R0(t)):s}function nD(n,e,t=Fn){return i=>{O0(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)O0(e,()=>{let l=Ft(n[c],e),u=!1;l.subscribe(it(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function O0(n,e,t){n?Cn(t,n,e):e()}function L0(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;en(t(v,u++)).subscribe(it(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?Cn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(it(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Vt(n,e,t=1/0){return Ve(e)?Vt((i,r)=>rt((s,o)=>e(i,s,r,o))(en(n(i,r))),t):(typeof e=="number"&&(t=e),nt((i,r)=>L0(i,r,n,t)))}function bo(n=1/0){return Vt(Fn,n)}function F0(){return bo(1)}function wo(...n){return F0()(Ft(n,Dr(n)))}function qa(n){return new ot(e=>{en(n()).subscribe(e)})}function kn(n,e){return nt((t,i)=>{let r=0;t.subscribe(it(i,s=>n.call(e,s,r++)&&i.next(s)))})}function er(n){return nt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(it(t,void 0,void 0,o=>{s=en(n(o,er(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function k0(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(it(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function fs(n,e){return Ve(e)?Vt(n,e,1):Vt(n,1)}function Ar(n){return nt((e,t)=>{let i=!1;e.subscribe(it(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function tr(n){return n<=0?()=>Tn:nt((e,t)=>{let i=0;e.subscribe(it(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function yu(n=iD){return nt((e,t)=>{let i=!1;e.subscribe(it(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function iD(){return new Qi}function Xa(n){return nt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function nr(n,e){let t=arguments.length>=2;return i=>i.pipe(n?kn((r,s)=>n(r,s,i)):Fn,tr(1),t?Ar(e):yu(()=>new Qi))}function To(n){return n<=0?()=>Tn:nt((e,t)=>{let i=[];e.subscribe(it(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function tm(n,e){let t=arguments.length>=2;return i=>i.pipe(n?kn((r,s)=>n(r,s,i)):Fn,To(1),t?Ar(e):yu(()=>new Qi))}function nm(n,e){return nt(k0(n,e,arguments.length>=2,!0))}function im(...n){let e=Dr(n);return nt((t,i)=>{(e?wo(n,t,e):wo(n,t)).subscribe(i)})}function Dn(n,e){return nt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(it(i,c=>{r?.unsubscribe();let l=0,u=s++;en(n(c,u)).subscribe(r=it(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function _u(n){return nt((e,t)=>{en(n).subscribe(it(t,()=>t.complete(),$a)),!t.closed&&e.subscribe(t)})}function tn(n,e,t){let i=Ve(n)||e||t?{next:n,error:e,complete:t}:n;return i?nt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(it(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Fn}function U0(n){let e=ze(null);try{return n()}finally{ze(e)}}var bu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",ge=class extends Error{code;constructor(e,t){super(Do(e,t)),this.code=e}};function rD(n){return`NG0${Math.abs(n)}`}function Do(n,e){return`${rD(n)}${e?": "+e:""}`}var Ao=globalThis;function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("")}function Ir(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Ir).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function mm(n,e){return n?e?`${n} ${e}`:n:e||""}var sD=mt({__forward_ref__:mt});function wu(n){return n.__forward_ref__=wu,n.toString=function(){return Ir(this())},n}function An(n){return gm(n)?n():n}function gm(n){return typeof n=="function"&&n.hasOwnProperty(sD)&&n.__forward_ref__===wu}function Ae(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function vs(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ka(n){return oD(n,Tu)}function vm(n){return Ka(n)!==null}function oD(n,e){return n.hasOwnProperty(e)&&n[e]||null}function aD(n){let e=n?.[Tu]??null;return e||null}function sm(n){return n&&n.hasOwnProperty(xu)?n[xu]:null}var Tu=mt({\u0275prov:mt}),xu=mt({\u0275inj:mt}),Ee=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ae({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ym(n){return n&&!!n.\u0275providers}var _m=mt({\u0275cmp:mt}),Em=mt({\u0275dir:mt}),xm=mt({\u0275pipe:mt}),Mm=mt({\u0275mod:mt}),Za=mt({\u0275fac:mt}),ys=mt({__NG_ELEMENT_ID__:mt}),V0=mt({__NG_ENV_ID__:mt});function Qa(n){return typeof n=="string"?n:n==null?"":String(n)}function z0(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Qa(n)}var G0=mt({ngErrorCode:mt}),cD=mt({ngErrorMessage:mt}),lD=mt({ngTokenPath:mt});function Sm(n,e){return j0("",-200,e)}function Cu(n,e){throw new ge(-201,!1)}function j0(n,e,t){let i=new ge(e,n);return i[G0]=e,i[cD]=n,t&&(i[lD]=t),i}function uD(n){return n[G0]}var om;function W0(){return om}function Un(n){let e=om;return om=n,e}function bm(n,e,t){let i=Ka(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Cu(n,"Injector")}var dD={},hs=dD,fD="__NG_DI_FLAG__",am=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=ps(t)||0;try{return this.injector.get(e,i&8?null:hs,i)}catch(r){if(ho(r))return r;throw r}}};function hD(n,e=0){let t=Xl();if(t===void 0)throw new ge(-203,!1);if(t===null)return bm(n,void 0,e);{let i=pD(e),r=t.retrieve(n,i);if(ho(r)){if(i.optional)return null;throw r}return r}}function Ge(n,e=0){return(W0()||hD)(An(n),e)}function $(n,e){return Ge(n,ps(e))}function ps(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function pD(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function cm(n){let e=[];for(let t=0;t<n.length;t++){let i=An(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ge(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=mD(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ge(r,s))}else e.push(Ge(i))}return e}function mD(n){return n[fD]}function ms(n,e){let t=n.hasOwnProperty(Za);return t?n[Za]:null}function $0(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function q0(n){return n.flat(Number.POSITIVE_INFINITY)}function Du(n,e){n.forEach(t=>Array.isArray(t)?Du(t,e):e(t))}function wm(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function ec(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var _s={},pi=[],ni=new Ee(""),Tm=new Ee("",-1),Cm=new Ee(""),Ja=class{get(e,t=hs){if(t===hs){let r=j0("",-201);throw r.name="\u0275NotFound",r}return t}};function Dm(n){return n[Mm]||null}function rr(n){return n[_m]||null}function Au(n){return n[Em]||null}function Am(n){return n[xm]||null}function gi(n){return{\u0275providers:n}}function X0(n){return gi([{provide:ni,multi:!0,useValue:n}])}function Y0(...n){return{\u0275providers:Iu(!0,n),\u0275fromNgModule:!0}}function Iu(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Du(e,o=>{let a=o;Mu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Z0(r,s),t}function Z0(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Im(r,s=>{e(s,i)})}}function Mu(n,e,t,i){if(n=An(n),!n)return!1;let r=null,s=sm(n),o=!s&&rr(n);if(!s&&!o){let c=n.ngModule;if(s=sm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Mu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Du(s.imports,u=>{Mu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Z0(l,e)}if(!a){let l=ms(r)||(()=>new r);e({provide:r,useFactory:l,deps:pi},r),e({provide:Cm,useValue:r,multi:!0},r),e({provide:ni,useValue:()=>Ge(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Im(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Im(n,e){for(let t of n)ym(t)&&(t=t.\u0275providers),Array.isArray(t)?Im(t,e):e(t)}var gD=mt({provide:String,useValue:mt});function J0(n){return n!==null&&typeof n=="object"&&gD in n}function vD(n){return!!(n&&n.useExisting)}function yD(n){return!!(n&&n.useFactory)}function Su(n){return typeof n=="function"}var tc=new Ee(""),Eu={},H0={},rm;function nc(){return rm===void 0&&(rm=new Ja),rm}var Wt=class{},gs=class extends Wt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,um(e,o=>this.processProvider(o)),this.records.set(Tm,Co(void 0,this)),r.has("environment")&&this.records.set(Wt,Co(void 0,this));let s=this.records.get(tc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Cm,pi,{self:!0}))}retrieve(e,t){let i=ps(t)||0;try{return this.get(e,hs,i)}catch(r){if(ho(r))return r;throw r}}destroy(){Ya(this),this._destroyed=!0;let e=ze(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ze(e)}}onDestroy(e){return Ya(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Ya(this);let t=Ri(this),i=Un(void 0),r;try{return e()}finally{Ri(t),Un(i)}}get(e,t=hs,i){if(Ya(this),e.hasOwnProperty(V0))return e[V0](this);let r=ps(i),s,o=Ri(this),a=Un(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=SD(e)&&Ka(e);u&&this.injectableDefInScope(u)?l=Co(lm(e),Eu):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?nc():this.parent;return t=r&8&&t===hs?null:t,c.get(e,t)}catch(c){let l=uD(c);throw l===-200||l===-201?new ge(l,null):c}finally{Un(a),Ri(o)}}resolveInjectorInitializers(){let e=ze(null),t=Ri(this),i=Un(void 0),r;try{let s=this.get(ni,pi,{self:!0});for(let o of s)o()}finally{Ri(t),Un(i),ze(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Ir(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=An(e);let t=Su(e)?e:An(e&&e.provide),i=ED(e);if(!Su(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Co(void 0,Eu,!0),r.factory=()=>cm(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=ze(null);try{if(t.value===H0)throw Sm(Ir(e));return t.value===Eu&&(t.value=H0,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&MD(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ze(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=An(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function lm(n){let e=Ka(n),t=e!==null?e.factory:ms(n);if(t!==null)return t;if(n instanceof Ee)throw new ge(204,!1);if(n instanceof Function)return _D(n);throw new ge(204,!1)}function _D(n){if(n.length>0)throw new ge(204,!1);let t=aD(n);return t!==null?()=>t.factory(n):()=>new n}function ED(n){if(J0(n))return Co(void 0,n.useValue);{let e=K0(n);return Co(e,Eu)}}function K0(n,e,t){let i;if(Su(n)){let r=An(n);return ms(r)||lm(r)}else if(J0(n))i=()=>An(n.useValue);else if(yD(n))i=()=>n.useFactory(...cm(n.deps||[]));else if(vD(n))i=(r,s)=>Ge(An(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=An(n&&(n.useClass||n.provide));if(xD(n))i=()=>new r(...cm(n.deps));else return ms(r)||lm(r)}return i}function Ya(n){if(n.destroyed)throw new ge(205,!1)}function Co(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function xD(n){return!!n.deps}function MD(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function SD(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function um(n,e){for(let t of n)Array.isArray(t)?um(t,e):t&&ym(t)?um(t.\u0275providers,e):e(t)}function un(n,e){let t;n instanceof gs?(Ya(n),t=n):t=new am(n);let i,r=Ri(t),s=Un(void 0);try{return e()}finally{Ri(r),Un(s)}}function Q0(){return W0()!==void 0||Xl()!=null}var _n=0,be=1,Ue=2,kt=3,ii=4,ri=5,In=6,Io=7,$t=8,Pi=9,Oi=10,St=11,Ro=12,Rm=13,No=14,En=15,Nr=16,Es=17,Li=18,ic=19,Nm=20,ir=21,Ru=22,rc=23,Vn=24,xs=25,on=26,wt=27,eE=1,vi=6,Fi=7,sc=8,Ms=9,Ut=10;function Hn(n){return Array.isArray(n)&&typeof n[eE]=="object"}function zn(n){return Array.isArray(n)&&n[eE]===!0}function Pm(n){return(n.flags&4)!==0}function sr(n){return n.componentOffset>-1}function oc(n){return(n.flags&1)===1}function Ss(n){return!!n.template}function bs(n){return(n[Ue]&512)!==0}function Pr(n){return(n[Ue]&256)===256}var Om="svg",tE="math";function Gn(n){for(;Array.isArray(n);)n=n[_n];return n}function nE(n,e){return Gn(e[n])}function si(n,e){return Gn(e[n.index])}function ws(n,e){return n.data[e]}function oi(n,e){let t=e[n];return Hn(t)?t:t[_n]}function iE(n){return(n[Ue]&4)===4}function Nu(n){return(n[Ue]&128)===128}function rE(n){return zn(n[kt])}function ki(n,e){return e==null?null:n[e]}function Lm(n){n[Es]=0}function Fm(n){n[Ue]&1024||(n[Ue]|=1024,Nu(n)&&Po(n))}function ac(n){return!!(n[Ue]&9216||n[Vn]?.dirty)}function Pu(n){n[Oi].changeDetectionScheduler?.notify(8),n[Ue]&64&&(n[Ue]|=1024),ac(n)&&Po(n)}function Po(n){n[Oi].changeDetectionScheduler?.notify(0);let e=Rr(n);for(;e!==null&&!(e[Ue]&8192||(e[Ue]|=8192,!Nu(e)));)e=Rr(e)}function km(n,e){if(Pr(n))throw new ge(911,!1);n[ir]===null&&(n[ir]=[]),n[ir].push(e)}function sE(n,e){if(n[ir]===null)return;let t=n[ir].indexOf(e);t!==-1&&n[ir].splice(t,1)}function Rr(n){let e=n[kt];return zn(e)?e[kt]:e}function Um(n){return n[Io]??=[]}function Bm(n){return n.cleanup??=[]}function oE(n,e,t,i){let r=Um(e);r.push(t),n.firstCreatePass&&Bm(n).push(i,r.length-1)}var Je={lFrame:yE(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var dm=!1;function aE(){return Je.lFrame.elementDepthCount}function cE(){Je.lFrame.elementDepthCount++}function Vm(){Je.lFrame.elementDepthCount--}function Hm(){return Je.bindingsEnabled}function zm(){return Je.skipHydrationRootTNode!==null}function Gm(n){return Je.skipHydrationRootTNode===n}function lE(n){Je.skipHydrationRootTNode=n}function jm(){Je.skipHydrationRootTNode=null}function lt(){return Je.lFrame.lView}function ai(){return Je.lFrame.tView}function cc(n){return Je.lFrame.contextLView=n,n[$t]}function lc(n){return Je.lFrame.contextLView=null,n}function dn(){let n=Wm();for(;n!==null&&n.type===64;)n=n.parent;return n}function Wm(){return Je.lFrame.currentTNode}function uE(){let n=Je.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Oo(n,e){let t=Je.lFrame;t.currentTNode=n,t.isParent=e}function $m(){return Je.lFrame.isParent}function dE(){Je.lFrame.isParent=!1}function qm(){return dm}function Xm(n){let e=dm;return dm=n,e}function fE(){let n=Je.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function hE(n){return Je.lFrame.bindingIndex=n}function uc(){return Je.lFrame.bindingIndex++}function pE(){return Je.lFrame.inI18n}function mE(n,e){let t=Je.lFrame;t.bindingIndex=t.bindingRootIndex=n,Ou(e)}function gE(){return Je.lFrame.currentDirectiveIndex}function Ou(n){Je.lFrame.currentDirectiveIndex=n}function Ym(){return Je.lFrame.currentQueryIndex}function Lu(n){Je.lFrame.currentQueryIndex=n}function bD(n){let e=n[be];return e.type===2?e.declTNode:e.type===1?n[ri]:null}function Zm(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=bD(s),r===null||(s=s[No],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Je.lFrame=vE();return i.currentTNode=e,i.lView=n,!0}function Fu(n){let e=vE(),t=n[be];Je.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function vE(){let n=Je.lFrame,e=n===null?null:n.child;return e===null?yE(n):e}function yE(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function _E(){let n=Je.lFrame;return Je.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Jm=_E;function ku(){let n=_E();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function dc(){return Je.lFrame.selectedIndex}function Or(n){Je.lFrame.selectedIndex=n}function Km(){let n=Je.lFrame;return ws(n.tView,n.selectedIndex)}function Lo(){Je.lFrame.currentNamespace=Om}function Fo(){wD()}function wD(){Je.lFrame.currentNamespace=null}function Qm(){return Je.lFrame.currentNamespace}var EE=!0;function Uu(){return EE}function or(n){EE=n}function fm(n,e=null,t=null,i){let r=eg(n,e,t,i);return r.resolveInjectorInitializers(),r}function eg(n,e=null,t=null,i,r=new Set){let s=[t||pi,Y0(n)];return i=i||(typeof n=="object"?void 0:Ir(n)),new gs(s,e||nc(),i||null,r)}var Bn=class n{static THROW_IF_NOT_FOUND=hs;static NULL=new Ja;static create(e,t){if(Array.isArray(e))return fm({name:""},t,e,"");{let i=e.name??"";return fm({name:i},e.parent,e.providers,i)}}static \u0275prov=Ae({token:n,providedIn:"any",factory:()=>Ge(Tm)});static __NG_ELEMENT_ID__=-1},qt=new Ee(""),ar=(()=>{class n{static __NG_ELEMENT_ID__=TD;static __NG_ENV_ID__=t=>t}return n})(),hm=class extends ar{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Pr(this._lView)}onDestroy(e){let t=this._lView;return km(t,e),()=>sE(t,e)}};function TD(){return new hm(lt())}var mi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Rn=new Ee("",{providedIn:"root",factory:()=>{let n=$(Wt),e;return t=>{n.destroyed&&!e?setTimeout(()=>{throw t}):(e??=n.get(mi),e.handleError(t))}}}),xE={provide:ni,useValue:()=>void $(mi),multi:!0},CD=new Ee("",{providedIn:"root",factory:()=>{let n=$(qt).defaultView;if(!n)return;let e=$(Rn),t=s=>{e(s.reason),s.preventDefault()},i=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),$(ar).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function tg(){return gi([X0(()=>void $(CD))])}function cr(n,e){let[t,i,r]=Gp(n,e?.equal),s=t,o=s[wn];return s.set=i,s.update=r,s.asReadonly=ME.bind(s),s}function ME(){let n=this[wn];if(n.readonlyFn===void 0){let e=()=>this();e[wn]=n,n.readonlyFn=e}return n.readonlyFn}var Ni=class{},ko=new Ee("",{providedIn:"root",factory:()=>!1});var ng=new Ee(""),Bu=new Ee("");var Vu=(()=>{class n{view;node;constructor(t,i){this.view=t,this.node=i}static __NG_ELEMENT_ID__=DD}return n})();function DD(){return new Vu(lt(),dn())}var yi=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new sn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ot(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})(),Hu=(()=>{class n{internalPendingTasks=$(yi);scheduler=$(Ni);errorHandler=$(Rn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let i=this.add();t().catch(this.errorHandler).finally(i)}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})();function fc(...n){}var ig=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new pm})}return n})(),pm=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}};var zu={JSACTION:"jsaction"};function Mc(n){return{toString:n}.toString()}function FD(n){return typeof n=="function"}var Zu=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function ux(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Is=(()=>{let n=()=>dx;return n.ngInherit=!0,n})();function dx(n){return n.type.prototype.ngOnChanges&&(n.setInput=UD),kD}function kD(){let n=hx(this),e=n?.current;if(e){let t=n.previous;if(t===_s)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function UD(n,e,t,i,r){let s=this.declaredInputs[i],o=hx(n)||BD(n,{previous:_s,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Zu(l&&l.currentValue,t,c===_s),ux(n,e,r,t)}var fx="__ngSimpleChanges__";function hx(n){return n[fx]||null}function BD(n,e){return n[fx]=e}var SE=[];var ut=function(n,e=null,t){for(let i=0;i<SE.length;i++){let r=SE[i];r(n,e,t)}};function VD(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=dx(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function px(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function ju(n,e,t){mx(n,e,3,t)}function Wu(n,e,t,i){(n[Ue]&3)===t&&mx(n,e,t,i)}function rg(n,e){let t=n[Ue];(t&3)===e&&(t&=16383,t+=1,n[Ue]=t)}function mx(n,e,t,i){let r=i!==void 0?n[Es]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Es]+=65536),(a<s||s==-1)&&(HD(n,t,e,c),n[Es]=(n[Es]&4294901760)+c+2),c++}function bE(n,e){ut(4,n,e);let t=ze(null);try{e.call(n)}finally{ze(t),ut(5,n,e)}}function HD(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ue]>>14<n[Es]>>16&&(n[Ue]&3)===e&&(n[Ue]+=16384,bE(a,s)):bE(a,s)}var Bo=-1,mc=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function zD(n){return(n.flags&8)!==0}function GD(n){return(n.flags&16)!==0}function jD(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];WD(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function gx(n){return n===3||n===4||n===6}function WD(n){return n.charCodeAt(0)===64}function gd(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?wE(n,t,r,null,e[++i]):wE(n,t,r,null,null))}}return n}function wE(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function vx(n){return n!==Bo}function Ju(n){return n&32767}function $D(n){return n>>16}function Ku(n,e){let t=$D(n),i=e;for(;t>0;)i=i[No],t--;return i}var hg=!0;function TE(n){let e=hg;return hg=n,e}var qD=256,yx=qD-1,_x=5,XD=0,Ui={};function YD(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ys)&&(i=t[ys]),i==null&&(i=t[ys]=XD++);let r=i&yx,s=1<<r;e.data[n+(r>>_x)]|=s}function Ex(n,e){let t=xx(n,e);if(t!==-1)return t;let i=e[be];i.firstCreatePass&&(n.injectorIndex=e.length,sg(i.data,n),sg(e,null),sg(i.blueprint,null));let r=kg(n,e),s=n.injectorIndex;if(vx(r)){let o=Ju(r),a=Ku(r,e),c=a[be].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function sg(n,e){n.push(0,0,0,0,0,0,0,0,e)}function xx(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function kg(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Tx(r),i===null)return Bo;if(t++,r=r[No],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Bo}function ZD(n,e,t){YD(n,e,t)}function JD(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let s=t[r];if(gx(s))break;if(s===0)r=r+2;else if(typeof s=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(s===e)return t[r+1];r=r+2}}}return null}function Mx(n,e,t){if(t&8||n!==void 0)return n;Cu(e,"NodeInjector")}function Sx(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Pi],s=Un(void 0);try{return r?r.get(e,i,t&8):bm(e,i,t&8)}finally{Un(s)}}return Mx(i,e,t)}function bx(n,e,t,i=0,r){if(n!==null){if(e[Ue]&2048&&!(i&2)){let o=tA(n,e,t,i,Ui);if(o!==Ui)return o}let s=wx(n,e,t,i,Ui);if(s!==Ui)return s}return Sx(e,t,i,r)}function wx(n,e,t,i,r){let s=QD(t);if(typeof s=="function"){if(!Zm(e,n,i))return i&1?Mx(r,t,i):Sx(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))Cu(t);else return o}finally{Jm()}}else if(typeof s=="number"){let o=null,a=xx(n,e),c=Bo,l=i&1?e[En][ri]:null;for((a===-1||i&4)&&(c=a===-1?kg(n,e):e[a+8],c===Bo||!DE(i,!1)?a=-1:(o=e[be],a=Ju(c),e=Ku(c,e)));a!==-1;){let u=e[be];if(CE(s,a,u.data)){let d=KD(a,e,t,o,i,l);if(d!==Ui)return d}c=e[a+8],c!==Bo&&DE(i,e[be].data[a+8]===l)&&CE(s,a,e)?(o=u,a=Ju(c),e=Ku(c,e)):a=-1}}return r}function KD(n,e,t,i,r,s){let o=e[be],a=o.data[n+8],c=i==null?sr(a)&&hg:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=$u(a,o,t,c,l);return u!==null?Qu(e,o,u,a,r):Ui}function $u(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Ss(h)&&h.type===t)return c}return null}function Qu(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof mc){let a=s;if(a.resolving){let h=z0(o[t]);throw Sm(h)}let c=TE(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?Un(a.injectImpl):null,f=Zm(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&VD(t,o[t],e)}finally{d!==null&&Un(d),TE(c),a.resolving=!1,Jm()}}return s}function QD(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ys)?n[ys]:void 0;return typeof e=="number"?e>=0?e&yx:eA:e}function CE(n,e,t){let i=1<<n;return!!(t[e+(n>>_x)]&i)}function DE(n,e){return!(n&2)&&!(n&1&&e)}var Cs=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return bx(this._tNode,this._lView,e,ps(i),t)}};function eA(){return new Cs(dn(),lt())}function vd(n){return Mc(()=>{let e=n.prototype.constructor,t=e[Za]||pg(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Za]||pg(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function pg(n){return gm(n)?()=>{let e=pg(An(n));return e&&e()}:ms(n)}function tA(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ue]&2048&&!bs(o);){let a=wx(s,o,t,i|2,Ui);if(a!==Ui)return a;let c=s.parent;if(!c){let l=o[Nm];if(l){let u=l.get(t,Ui,i);if(u!==Ui)return u}c=Tx(o),o=o[No]}s=c}return r}function Tx(n){let e=n[be],t=e.type;return t===2?e.declTNode:t===1?n[ri]:null}function Sc(n){return JD(dn(),n)}function nA(){return Wo(dn(),lt())}function Wo(n,e){return new ur(si(n,e))}var ur=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=nA}return n})();function iA(n){return n instanceof ur?n.nativeElement:n}function rA(){return this._results[Symbol.iterator]()}var ed=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new jt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=q0(e);(this._changesDetected=!$0(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=rA},Cx="ngSkipHydration",sA="ngskiphydration";function Dx(n){let e=n.mergedAttrs;if(e===null)return!1;for(let t=0;t<e.length;t+=2){let i=e[t];if(typeof i=="number")return!1;if(typeof i=="string"&&i.toLowerCase()===sA)return!0}return!1}function Ax(n){return n.hasAttribute(Cx)}function td(n){return(n.flags&128)===128}function Ix(n){if(td(n))return!0;let e=n.parent;for(;e;){if(td(n)||Dx(e))return!0;e=e.parent}return!1}var Ug=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(Ug||{}),Rx=new Map,oA=0;function aA(){return oA++}function cA(n){Rx.set(n[ic],n)}function mg(n){Rx.delete(n[ic])}var AE="__ngContext__";function zo(n,e){Hn(e)?(n[AE]=e[ic],cA(e)):n[AE]=e}function Nx(n){return Ox(n[Ro])}function Px(n){return Ox(n[ii])}function Ox(n){for(;n!==null&&!zn(n);)n=n[ii];return n}var gg;function Bg(n){gg=n}function bc(){if(gg!==void 0)return gg;if(typeof document<"u")return document;throw new ge(210,!1)}var Bi=new Ee("",{providedIn:"root",factory:()=>lA}),lA="ng",yd=new Ee(""),$o=new Ee("",{providedIn:"platform",factory:()=>"unknown"});var _d=new Ee("",{providedIn:"root",factory:()=>bc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function uA(){let n=new Rs;return n.store=dA(bc(),$(Bi)),n}var Rs=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:uA});store={};onSerializeCallbacks={};get(t,i){return this.store[t]!==void 0?this.store[t]:i}set(t,i){this.store[t]=i}remove(t){delete this.store[t]}hasKey(t){return this.store.hasOwnProperty(t)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(t,i){this.onSerializeCallbacks[t]=i}toJson(){for(let t in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(i){console.warn("Exception in onSerialize callback: ",i)}return JSON.stringify(this.store).replace(/</g,"\\u003C")}}return n})();function dA(n,e){let t=n.getElementById(e+"-state");if(t?.textContent)try{return JSON.parse(t.textContent)}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return{}}var Lx="h",Fx="b",fA="f",hA="n",kx="e",Ux="t",Ed="c",Vg="x",gc="r",Bx="i",Vx="n",Hg="d";var Hx="di",zx="s",Gx="p";var wc=new Ee(""),jx=!1,zg=new Ee("",{providedIn:"root",factory:()=>jx});var Gg=new Ee(""),Wx=!1,$x=new Ee(""),jg=new Ee("",{providedIn:"root",factory:()=>new Map});var Tc="ngb";var qx=(n,e,t)=>{let i=n,r=i.__jsaction_fns??new Map,s=r.get(e)??[];s.push(t),r.set(e,s),i.__jsaction_fns=r},Xx=(n,e)=>{let t=n,i=t.getAttribute(Tc)??"",r=e.get(i)??new Set;r.has(t)||r.add(t),e.set(i,r)};var Yx=n=>{n.removeAttribute(zu.JSACTION),n.removeAttribute(Tc),n.__jsaction_fns=void 0},Zx=new Ee("",{providedIn:"root",factory:()=>({})});function Wg(n,e){let t=e?.__jsaction_fns?.get(n.type);if(!(!t||!e?.isConnected))for(let i of t)i(n)}var vg=new Map;function Jx(n,e){return vg.set(n,e),()=>vg.delete(n)}var IE=!1,Kx=(n,e,t,i)=>{};function pA(n,e,t,i){Kx(n,e,t,i)}function Qx(){IE||(Kx=(n,e,t,i)=>{let r=n[Pi].get(Bi);vg.get(r)?.(e,t,i)},IE=!0)}var xd=new Ee("");function Md(n){return(n.flags&32)===32}var mA="__nghData__",$g=mA,gA="__nghDeferData__",eM=gA;var qu="ngh",tM="nghm",nM=()=>null;function vA(n,e,t=!1){let i=n.getAttribute(qu);if(i==null)return null;let[r,s]=i.split("|");if(i=t?s:r,!i)return null;let o=s?`|${s}`:"",a=t?r:o,c={};if(i!==""){let u=e.get(Rs,null,{optional:!0});u!==null&&(c=u.get($g,[])[Number(i)])}let l={data:c,firstChild:n.firstChild??null};return t&&(l.firstChild=n,Sd(l,0,n.nextSibling)),a?n.setAttribute(qu,a):n.removeAttribute(qu),l}function iM(){nM=vA}function rM(n,e,t=!1){return nM(n,e,t)}function sM(n){let e=n._lView;return e[be].type===2?null:(bs(e)&&(e=e[wt]),e)}function yA(n){return n.textContent?.replace(/\s/gm,"")}function _A(n){let e=bc(),t=e.createNodeIterator(n,NodeFilter.SHOW_COMMENT,{acceptNode(s){let o=yA(s);return o==="ngetn"||o==="ngtns"?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),i,r=[];for(;i=t.nextNode();)r.push(i);for(let s of r)s.textContent==="ngetn"?s.replaceWith(e.createTextNode("")):s.remove()}function Sd(n,e,t){n.segmentHeads??={},n.segmentHeads[e]=t}function yg(n,e){return n.segmentHeads?.[e]??null}function oM(n){return n.get($x,!1,{optional:!0})}function EA(n,e){let t=n.data,i=t[kx]?.[e]??null;return i===null&&t[Ed]?.[e]&&(i=qg(n,e)),i}function aM(n,e){return n.data[Ed]?.[e]??null}function qg(n,e){let t=aM(n,e)??[],i=0;for(let r of t)i+=r[gc]*(r[Vg]??1);return i}function xA(n){if(typeof n.disconnectedNodes>"u"){let e=n.data[Hg];n.disconnectedNodes=e?new Set(e):null}return n.disconnectedNodes}function cM(n,e){if(typeof n.disconnectedNodes>"u"){let t=n.data[Hg];n.disconnectedNodes=t?new Set(t):null}return!!xA(n)?.has(e)}function bd(n,e){let t=n[In];return t!==null&&!zm()&&!Md(e)&&!cM(t,e.index-wt)}function MA(n,e){let t=e.get(xd),r=e.get(Rs).get(eM,{}),s=!1,o=n,a=null,c=[];for(;!s&&o;){s=t.has(o);let l=t.hydrating.get(o);if(a===null&&l!=null){a=l.promise;break}c.unshift(o),o=r[o][Gx]}return{parentBlockPromise:a,hydrationQueue:c}}function og(n){return!!n&&n.nodeType===Node.COMMENT_NODE&&n.textContent?.trim()===tM}function RE(n){for(;n&&n.nodeType===Node.TEXT_NODE;)n=n.previousSibling;return n}function lM(n){for(let i of n.body.childNodes)if(og(i))return;let e=RE(n.body.previousSibling);if(og(e))return;let t=RE(n.head.lastChild);if(!og(t))throw new ge(-507,!1)}function uM(n,e){let t=n.contentQueries;if(t!==null){let i=ze(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Lu(s),a.contentQueries(2,e[o],o)}}}finally{ze(i)}}}function _g(n,e,t){Lu(0);let i=ze(null);try{e(n,t)}finally{ze(i)}}function dM(n,e,t){if(Pm(e)){let i=ze(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ze(i)}}}var lr=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n})(lr||{});var Gu;function SA(){if(Gu===void 0&&(Gu=null,Ao.trustedTypes))try{Gu=Ao.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Gu}function NE(n){return SA()?.createScriptURL(n)||n}var nd=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${bu})`}};function wd(n){return n instanceof nd?n.changingThisBreaksApplicationSecurity:n}function Td(n,e){let t=fM(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${bu})`)}return t===e}function fM(n){return n instanceof nd&&n.getTypeName()||null}var bA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Xg(n){return n=String(n),n.match(bA)?n:"unsafe:"+n}var Cc=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(Cc||{});function Cd(n){let e=pM();return e?e.sanitize(Cc.URL,n)||"":Td(n,"URL")?wd(n):Xg(Qa(n))}function hM(n){let e=pM();if(e)return NE(e.sanitize(Cc.RESOURCE_URL,n)||"");if(Td(n,"ResourceURL"))return NE(wd(n));throw new ge(904,!1)}function wA(n,e){return e==="src"&&(n==="embed"||n==="frame"||n==="iframe"||n==="media"||n==="script")||e==="href"&&(n==="base"||n==="link")?hM:Cd}function Yg(n,e,t){return wA(e,t)(n)}function pM(){let n=lt();return n&&n[Oi].sanitizer}var TA=/^>|^->|<!--|-->|--!>|<!-$/g,CA=/(<|>)/g,DA="\u200B$1\u200B";function AA(n){return n.replace(TA,e=>e.replace(CA,DA))}function mM(n){return n.ownerDocument.body}function gM(n){return n instanceof Function?n():n}function IA(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var vM="ng-template";function RA(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&IA(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Zg(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Zg(n){return n.type===4&&n.value!==vM}function NA(n,e,t){let i=n.type===4&&!t?vM:n.value;return e===i}function PA(n,e,t){let i=4,r=n.attrs,s=r!==null?FA(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!_i(i)&&!_i(c))return!1;if(o&&_i(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!NA(n,c,t)||c===""&&e.length===1){if(_i(i))return!1;o=!0}}else if(i&8){if(r===null||!RA(n,r,c,t)){if(_i(i))return!1;o=!0}}else{let l=e[++a],u=OA(c,r,Zg(n),t);if(u===-1){if(_i(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(_i(i))return!1;o=!0}}}}return _i(i)||o}function _i(n){return(n&1)===0}function OA(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return kA(e,n)}function LA(n,e,t=!1){for(let i=0;i<e.length;i++)if(PA(n,e[i],t))return!0;return!1}function FA(n){for(let e=0;e<n.length;e++){let t=n[e];if(gx(t))return e}return n.length}function kA(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function PE(n,e){return n?":not("+e.trim()+")":e}function UA(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!_i(o)&&(e+=PE(s,r),r=""),i=o,s=s||!_i(i);t++}return r!==""&&(e+=PE(s,r)),e}function BA(n){return n.map(UA).join(",")}function VA(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!_i(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Ns={};function yM(n,e){return n.createText(e)}function HA(n,e,t){n.setValue(e,t)}function _M(n,e){return n.createComment(AA(e))}function Jg(n,e,t){return n.createElement(e,t)}function id(n,e,t,i,r){n.insertBefore(e,t,i,r)}function EM(n,e,t){n.appendChild(e,t)}function OE(n,e,t,i,r){i!==null?id(n,e,t,i,r):EM(n,e,t)}function Kg(n,e,t,i){n.removeChild(null,e,t,i)}function xM(n){n.textContent=""}function zA(n,e,t){n.setAttribute(e,"style",t)}function GA(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function MM(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&jD(n,e,i),r!==null&&GA(n,e,r),s!==null&&zA(n,e,s)}function Qg(n,e,t,i,r,s,o,a,c,l,u){let d=wt+i,f=d+r,h=jA(d,f),g=typeof l=="function"?l():l;return h[be]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function jA(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ns);return t}function WA(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Qg(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function ev(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[_n]=r,d[Ue]=i|4|128|8|64|1024,(l!==null||n&&n[Ue]&2048)&&(d[Ue]|=2048),Lm(d),d[kt]=d[No]=n,d[$t]=t,d[Oi]=o||n&&n[Oi],d[St]=a||n&&n[St],d[Pi]=c||n&&n[Pi]||null,d[ri]=s,d[ic]=aA(),d[In]=u,d[Nm]=l,d[En]=e.type==2?n[En]:d,d}function $A(n,e,t){let i=si(e,n),r=WA(t),s=n[Oi].rendererFactory,o=tv(n,ev(n,r,null,SM(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function SM(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function bM(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function tv(n,e){return n[Ro]?n[Rm][ii]=e:n[Ro]=e,n[Rm]=e,e}function ci(n=1){wM(ai(),lt(),dc()+n,!1)}function wM(n,e,t,i){if(!i)if((e[Ue]&3)===3){let s=n.preOrderCheckHooks;s!==null&&ju(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Wu(e,s,0,t)}Or(t)}var Dd=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(Dd||{});function Eg(n,e,t,i){let r=ze(null);try{let[s,o,a]=n.inputs[t],c=null;(o&Dd.SignalBased)!==0&&(c=e[s][wn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):ux(e,c,s,i)}finally{ze(r)}}var Ps=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Ps||{}),qA;function nv(n,e){return qA(n,e)}var Ad=new Set;function Uo(n,e,t,i,r,s){if(i!=null){let o,a=!1;zn(i)?o=i:Hn(i)&&(a=!0,i=i[_n]);let c=Gn(i);n===0&&t!==null?r==null?EM(e,t,c):id(e,t,c,r||null,!0):n===1&&t!==null?id(e,t,c,r||null,!0):n===2?LE(s,l=>{Kg(e,c,a,l)}):n===3&&LE(s,()=>{e.destroyNode(c)}),o!=null&&oI(e,n,o,t,r)}}function XA(n,e){TM(n,e),e[_n]=null,e[ri]=null}function YA(n,e,t,i,r,s){i[_n]=r,i[ri]=e,Rd(n,i,t,1,r,s)}function TM(n,e){e[Oi].changeDetectionScheduler?.notify(9),Rd(n,e,e[St],2,null,null)}function ZA(n){let e=n[Ro];if(!e)return ag(n[be],n);for(;e;){let t=null;if(Hn(e))t=e[Ro];else{let i=e[Ut];i&&(t=i)}if(!t){for(;e&&!e[ii]&&e!==n;)Hn(e)&&ag(e[be],e),e=e[kt];e===null&&(e=n),Hn(e)&&ag(e[be],e),t=e&&e[ii]}e=t}}function iv(n,e){let t=n[Ms],i=t.indexOf(e);t.splice(i,1)}function Id(n,e){if(Pr(e))return;let t=e[St];t.destroyNode&&Rd(n,e,t,3,null,null),ZA(e)}function ag(n,e){if(Pr(e))return;let t=ze(null);try{e[Ue]&=-129,e[Ue]|=256,e[Vn]&&ja(e[Vn]),QA(n,e),KA(n,e),e[be].type===1&&e[St].destroy();let i=e[Nr];if(i!==null&&zn(e[kt])){i!==e[kt]&&iv(i,e);let r=e[Li];r!==null&&r.detachView(n)}mg(e)}finally{ze(t)}}function LE(n,e){if(n&&n[on]&&n[on].leave)if(n[on].skipLeaveAnimations)n[on].skipLeaveAnimations=!1;else{let t=n[on].leave,i=[];for(let r=0;r<t.length;r++){let s=t[r];i.push(s())}n[on].running=Promise.allSettled(i),n[on].leave=void 0}JA(n,e)}function JA(n,e){if(n&&n[on]&&n[on].running){n[on].running.then(()=>{n[on]&&n[on].running&&(n[on].running=void 0),Ad.delete(n),e(!0)});return}e(!1)}function KA(n,e){let t=n.cleanup,i=e[Io];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Io]=null);let r=e[ir];if(r!==null){e[ir]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[rc];if(s!==null){e[rc]=null;for(let o of s)o.destroy()}}function QA(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof mc)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];ut(4,a,c);try{c.call(a)}finally{ut(5,a,c)}}else{ut(4,r,s);try{s.call(r)}finally{ut(5,r,s)}}}}}function eI(n,e,t){return tI(n,e.parent,t)}function tI(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[_n];if(sr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===lr.None||r===lr.Emulated)return null}return si(i,t)}function nI(n,e,t){return rI(n,e,t)}function iI(n,e,t){return n.type&40?si(n,t):null}var rI=iI,FE;function rv(n,e,t,i){let r=eI(n,i,e),s=e[St],o=i.parent||e[ri],a=nI(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)OE(s,r,t[c],a,!1);else OE(s,r,t,a,!1);FE!==void 0&&FE(s,i,e,t,r)}function hc(n,e){if(e!==null){let t=e.type;if(t&3)return si(e,n);if(t&4)return xg(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return hc(n,i);{let r=n[e.index];return zn(r)?xg(-1,r):Gn(r)}}else{if(t&128)return hc(n,e.next);if(t&32)return nv(e,n)()||Gn(n[e.index]);{let i=CM(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Rr(n[En]);return hc(r,i)}else return hc(n,e.next)}}}return null}function CM(n,e){if(e!==null){let i=n[En][ri],r=e.projection;return i.projection[r]}return null}function xg(n,e){let t=Ut+n+1;if(t<e.length){let i=e[t],r=i[be].firstChild;if(r!==null)return hc(i,r)}return e[Fi]}function sv(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&zo(Gn(a),i),t.flags|=2),!Md(t))if(c&8)sv(n,e,t.child,i,r,s,!1),Uo(e,n,r,a,s,i);else if(c&32){let l=nv(t,i),u;for(;u=l();)Uo(e,n,r,u,s,i);Uo(e,n,r,a,s,i)}else c&16?sI(n,e,i,t,r,s):Uo(e,n,r,a,s,i);t=o?t.projectionNext:t.next}}function Rd(n,e,t,i,r,s){sv(t,i,n.firstChild,e,r,s,!1)}function sI(n,e,t,i,r,s){let o=t[En],c=o[ri].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Uo(e,n,r,u,s,t)}else{let l=c,u=o[kt];td(i)&&(l.flags|=128),sv(n,e,l,u,r,s,!0)}}function oI(n,e,t,i,r){let s=t[Fi],o=Gn(t);s!==o&&Uo(e,n,i,s,r);for(let a=Ut;a<t.length;a++){let c=t[a];Rd(c[be],c,n,e,i,s)}}function DM(n,e,t,i,r){let s=dc(),o=i&2;try{Or(-1),o&&e.length>wt&&wM(n,e,wt,!1),ut(o?2:0,r,t),t(i,r)}finally{Or(s),ut(o?3:1,r,t)}}function ov(n,e,t){pI(n,e,t),(t.flags&64)===64&&mI(n,e,t)}function Nd(n,e,t=si){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function aI(n,e,t,i){let s=i.get(zg,jx)||t===lr.ShadowDom,o=n.selectRootElement(e,s);return cI(o),o}function cI(n){AM(n)}var AM=()=>null;function lI(n){Ax(n)?xM(n):_A(n)}function IM(){AM=lI}function uI(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function dI(n,e,t,i,r,s){let o=e[be];if(cv(n,o,e,t,i)){sr(n)&&hI(e,n.index);return}n.type&3&&(t=uI(t)),fI(n,e,t,i,r,s)}function fI(n,e,t,i,r,s){if(n.type&3){let o=si(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function hI(n,e){let t=oi(e,n);t[Ue]&16||(t[Ue]|=64)}function pI(n,e,t){let i=t.directiveStart,r=t.directiveEnd;sr(t)&&$A(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||Ex(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Qu(e,n,o,t);if(zo(c,e),s!==null&&_I(e,o-i,c,a,t,s),Ss(a)){let l=oi(t.index,e);l[$t]=Qu(e,n,o,t)}}}function mI(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=gE();try{Or(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Ou(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&gI(c,l)}}finally{Or(-1),Ou(o)}}function gI(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function RM(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];LA(e,s.selectors,!1)&&(i??=[],Ss(s)?i.unshift(s):i.push(s))}return i}function vI(n,e,t,i,r,s){let o=si(n,e);yI(e[St],o,s,n.value,t,i,r)}function yI(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?Qa(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function _I(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Eg(i,t,c,l)}}function NM(n,e,t,i,r){let s=wt+t,o=e[be],a=r(o,e,n,i,t);e[s]=a,Oo(n,!0);let c=n.type===2;return c?(MM(e[St],a,n),(aE()===0||oc(n))&&zo(a,e),cE()):zo(a,e),Uu()&&(!c||!Md(n))&&rv(o,e,a,n),n}function PM(n){let e=n;return $m()?dE():(e=e.parent,Oo(e,!1)),e}function av(n,e){let t=n[Pi];if(!t)return;let i;try{i=t.get(Rn,null)}catch{i=null}i?.(e)}function cv(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Eg(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Eg(u,l,i,r),a=!0}return a}function EI(n,e){let t=oi(e,n),i=t[be];xI(i,t);let r=t[_n];r!==null&&t[In]===null&&(t[In]=rM(r,t[Pi])),ut(18),lv(i,t,t[$t]),ut(19,t[$t])}function xI(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function lv(n,e,t){Fu(e);try{let i=n.viewQuery;i!==null&&_g(1,i,t);let r=n.template;r!==null&&DM(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Li]?.finishViewCreation(n),n.staticContentQueries&&uM(n,e),n.staticViewQueries&&_g(2,n.viewQuery,t);let s=n.components;s!==null&&MI(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ue]&=-5,ku()}}function MI(n,e){for(let t=0;t<e.length;t++)EI(n,e[t])}function Pd(n,e,t,i){let r=ze(null);try{let s=e.tView,a=n[Ue]&4096?4096:16,c=ev(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Nr]=l;let u=n[Li];return u!==null&&(c[Li]=u.createEmbeddedView(s)),lv(s,c,t),c}finally{ze(r)}}function vc(n,e){return!e||e.firstChild===null||td(n)}function yc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Gn(s)),zn(s)&&OM(s,i);let o=t.type;if(o&8)yc(n,e,t.child,i);else if(o&32){let a=nv(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=CM(e,t);if(Array.isArray(a))i.push(...a);else{let c=Rr(e[En]);yc(c[be],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function OM(n,e){for(let t=Ut;t<n.length;t++){let i=n[t],r=i[be].firstChild;r!==null&&yc(i[be],i,r,e)}n[Fi]!==n[_n]&&e.push(n[Fi])}function LM(n){if(n[xs]!==null){for(let e of n[xs])e.impl.addSequence(e);n[xs].length=0}}var FM=[];function SI(n){return n[Vn]??bI(n)}function bI(n){let e=FM.pop()??Object.create(TI);return e.lView=n,e}function wI(n){n.lView[Vn]!==n&&(n.lView=null,FM.push(n))}var TI=Et(ue({},Va),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Po(n.lView)},consumerOnSignalRead(){this.lView[Vn]=this}});function CI(n){let e=n[Vn]??Object.create(DI);return e.lView=n,e}var DI=Et(ue({},Va),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Rr(n.lView);for(;e&&!kM(e[be]);)e=Rr(e);e&&Fm(e)},consumerOnSignalRead(){this.lView[Vn]=this}});function kM(n){return n.type!==2}function UM(n){if(n[rc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[rc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ue]&8192)}}var AI=100;function BM(n,e=0){let i=n[Oi].rendererFactory,r=!1;r||i.begin?.();try{II(n,e)}finally{r||i.end?.()}}function II(n,e){let t=qm();try{Xm(!0),Mg(n,e);let i=0;for(;ac(n);){if(i===AI)throw new ge(103,!1);i++,Mg(n,1)}}finally{Xm(t)}}function RI(n,e,t,i){if(Pr(e))return;let r=e[Ue],s=!1,o=!1;Fu(e);let a=!0,c=null,l=null;s||(kM(n)?(l=SI(e),c=za(l)):Jl()===null?(a=!1,l=CI(e),c=za(l)):e[Vn]&&(ja(e[Vn]),e[Vn]=null));try{Lm(e),hE(n.bindingStartIndex),t!==null&&DM(n,e,t,2,i),NI(e);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&ju(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Wu(e,h,0,null),rg(e,0)}if(o||PI(e),UM(e),VM(e,0),n.contentQueries!==null&&uM(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&ju(e,h)}else{let h=n.contentHooks;h!==null&&Wu(e,h,1),rg(e,1)}LI(n,e);let d=n.components;d!==null&&zM(e,d,0);let f=n.viewQuery;if(f!==null&&_g(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&ju(e,h)}else{let h=n.viewHooks;h!==null&&Wu(e,h,2),rg(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Ru]){for(let h of e[Ru])h();e[Ru]=null}s||(LM(e),e[Ue]&=-73)}catch(u){throw s||Po(e),u}finally{l!==null&&(Kl(l,c),a&&wI(l)),ku()}}function NI(n){let e=n[on];if(e?.enter){for(let t of e.enter)t();e.enter=void 0}}function VM(n,e){for(let t=Nx(n);t!==null;t=Px(t))for(let i=Ut;i<t.length;i++){let r=t[i];HM(r,e)}}function PI(n){for(let e=Nx(n);e!==null;e=Px(e)){if(!(e[Ue]&2))continue;let t=e[Ms];for(let i=0;i<t.length;i++){let r=t[i];Fm(r)}}}function OI(n,e,t){ut(18);let i=oi(e,n);HM(i,t),ut(19,i[$t])}function HM(n,e){Nu(n)&&Mg(n,e)}function Mg(n,e){let i=n[be],r=n[Ue],s=n[Vn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ga(s)),o||=!1,s&&(s.dirty=!1),n[Ue]&=-9217,o)RI(i,n,i.template,n[$t]);else if(r&8192){let a=ze(null);try{UM(n),VM(n,1);let c=i.components;c!==null&&zM(n,c,1),LM(n)}finally{ze(a)}}}function zM(n,e,t){for(let i=0;i<e.length;i++)OI(n,e[i],t)}function LI(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Or(~r);else{let s=r,o=t[++i],a=t[++i];mE(o,s);let c=e[s];ut(24,c),a(2,c),ut(25,c)}}}finally{Or(-1)}}function Od(n,e){let t=qm()?64:1088;for(n[Oi].changeDetectionScheduler?.notify(e);n;){n[Ue]|=t;let i=Rr(n);if(bs(n)&&!i)return n;n=i}return null}function GM(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function FI(n,e){let t=Ut+e;if(t<n.length)return n[t]}function Ld(n,e,t,i=!0){let r=e[be];if(kI(r,e,n,t),i){let o=xg(t,n),a=e[St],c=a.parentNode(n[Fi]);c!==null&&YA(r,n[ri],a,e,c,o)}let s=e[In];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function jM(n,e){let t=_c(n,e);return t!==void 0&&Id(t[be],t),t}function _c(n,e){if(n.length<=Ut)return;let t=Ut+e,i=n[t];if(i){let r=i[Nr];r!==null&&r!==n&&iv(r,i),e>0&&(n[t-1][ii]=i[ii]);let s=ec(n,Ut+e);XA(i[be],i);let o=s[Li];o!==null&&o.detachView(s[be]),i[kt]=null,i[ii]=null,i[Ue]&=-129}return i}function kI(n,e,t,i){let r=Ut+i,s=t.length;i>0&&(t[r-1][ii]=e),i<s-Ut?(e[ii]=t[r],wm(t,Ut+i,e)):(t.push(e),e[ii]=null),e[kt]=t;let o=e[Nr];o!==null&&t!==o&&WM(o,e);let a=e[Li];a!==null&&a.insertView(n),Pu(e),e[Ue]|=128}function WM(n,e){let t=n[Ms],i=e[kt];if(Hn(i))n[Ue]|=2;else{let r=i[kt][En];e[En]!==r&&(n[Ue]|=2)}t===null?n[Ms]=[e]:t.push(e)}var Lr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[be];return yc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[$t]}set context(e){this._lView[$t]=e}get destroyed(){return Pr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[kt];if(zn(e)){let t=e[sc],i=t?t.indexOf(this):-1;i>-1&&(_c(e,i),ec(t,i))}this._attachedToViewContainer=!1}Id(this._lView[be],this._lView)}onDestroy(e){km(this._lView,e)}markForCheck(){Od(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ue]&=-129}reattach(){Pu(this._lView),this._lView[Ue]|=128}detectChanges(){this._lView[Ue]|=1024,BM(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ge(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=bs(this._lView),t=this._lView[Nr];t!==null&&!e&&iv(t,this._lView),TM(this._lView[be],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ge(902,!1);this._appRef=e;let t=bs(this._lView),i=this._lView[Nr];i!==null&&!t&&WM(i,this._lView),Pu(this._lView)}};var Ds=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=UI;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=Pd(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Lr(s)}}return n})();function UI(){return uv(dn(),lt())}function uv(n,e){return n.type&4?new Ds(e,n,Wo(n,e)):null}function Dc(n,e,t,i,r){let s=n.data[e];if(s===null)s=BI(n,e,t,i,r),pE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=uE();s.injectorIndex=o===null?-1:o.injectorIndex}return Oo(s,!0),s}function BI(n,e,t,i,r){let s=Wm(),o=$m(),a=o?s:s&&s.parent,c=n.data[e]=HI(n,a,t,e,i,r);return VI(n,c,s,o),c}function VI(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function HI(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return zm()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var zI=new RegExp(`^(\\d+)*(${Fx}|${Lx})*(.*)`);function GI(n){let e=n.match(zI),[t,i,r,s]=e,o=i?parseInt(i,10):r,a=[];for(let[c,l,u]of s.matchAll(/(f|n)(\d*)/g)){let d=parseInt(u,10)||1;a.push(l,d)}return[o,...a]}function jI(n){return!n.prev&&n.parent?.type===8}function cg(n){return n.index-wt}function WI(n,e){let t=n.i18nNodes;if(t)return t.get(e)}function Fd(n,e,t,i){let r=cg(i),s=WI(n,r);if(s===void 0){let o=n.data[Vx];if(o?.[r])s=qI(o[r],t);else if(e.firstChild===i)s=n.firstChild;else{let a=i.prev===null,c=i.prev??i.parent;if(jI(i)){let l=cg(i.parent);s=yg(n,l)}else{let l=si(c,t);if(a)s=l.firstChild;else{let u=cg(c),d=yg(n,u);if(c.type===2&&d){let h=qg(n,u)+1;s=kd(h,d)}else s=l.nextSibling}}}}return s}function kd(n,e){let t=e;for(let i=0;i<n;i++)t=t.nextSibling;return t}function $I(n,e){let t=n;for(let i=0;i<e.length;i+=2){let r=e[i],s=e[i+1];for(let o=0;o<s;o++)switch(r){case fA:t=t.firstChild;break;case hA:t=t.nextSibling;break}}return t}function qI(n,e){let[t,...i]=GI(n),r;if(t===Lx)r=e[En][_n];else if(t===Fx)r=mM(e[En][_n]);else{let s=Number(t);r=Gn(e[s+wt])}return $I(r,i)}var XI=!1;function $M(n){XI=n}function YI(n){let e=n[In];if(e){let{i18nNodes:t,dehydratedIcuData:i}=e;if(t&&i){let r=n[St];for(let s of i.values())ZI(r,t,s)}e.i18nNodes=void 0,e.dehydratedIcuData=void 0}}function ZI(n,e,t){for(let i of t.node.cases[t.case]){let r=e.get(i.index-wt);r&&Kg(n,r,!1)}}function Ud(n){let e=n[vi]??[],i=n[kt][St],r=[];for(let s of e)s.data[Hx]!==void 0?r.push(s):qM(s,i);n[vi]=r}function JI(n){let{lContainer:e}=n,t=e[vi];if(t===null)return;let r=e[kt][St];for(let s of t)qM(s,r)}function qM(n,e){let t=0,i=n.firstChild;if(i){let r=n.data[gc];for(;t<r;){let s=i.nextSibling;Kg(e,i,!1),i=s,t++}}}function Bd(n){Ud(n);let e=n[_n];Hn(e)&&rd(e);for(let t=Ut;t<n.length;t++)rd(n[t])}function rd(n){YI(n);let e=n[be];for(let t=wt;t<e.bindingStartIndex;t++)if(zn(n[t])){let i=n[t];Bd(i)}else Hn(n[t])&&rd(n[t])}function dv(n){let e=n._views;for(let t of e){let i=sM(t);i!==null&&i[_n]!==null&&(Hn(i)?rd(i):Bd(i))}}function KI(n,e,t,i){n!==null&&(t.cleanup(e),Bd(n.lContainer),dv(i))}function QI(n,e){let t=[];for(let i of e)for(let r=0;r<(i[Vg]??1);r++){let s={data:i,firstChild:null};i[gc]>0&&(s.firstChild=n,n=kd(i[gc],n)),t.push(s)}return[n,t]}var XM=()=>null,YM=()=>null;function ZM(){XM=eR,YM=tR}function eR(n,e){return JM(n,e)?n[vi].shift():(Ud(n),null)}function sd(n,e){return XM(n,e)}function tR(n,e,t){if(e.tView.ssrId===null)return null;let i=sd(n,e.tView.ssrId);return t[be].firstUpdatePass&&i===null&&iR(t,e),i}function nR(n,e,t){return YM(n,e,t)}function iR(n,e){let t=e;for(;t;){if(kE(n,t))return;if((t.flags&256)===256)break;t=t.prev}for(t=e.next;t&&(t.flags&512)===512;){if(kE(n,t))return;t=t.next}}function JM(n,e){let t=n[vi];return!e||t===null||t.length===0?!1:t[0].data[Bx]===e}function kE(n,e){let t=e.tView?.ssrId;if(t==null)return!1;let i=n[e.index];return zn(i)&&JM(i,t)?(Ud(i),!0):!1}var KM=class{},Vd=class{},Sg=class{resolveComponentFactory(e){throw new ge(917,!1)}},Ac=class{static NULL=new Sg},As=class{},Ic=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>rR()}return n})();function rR(){let n=lt(),e=dn(),t=oi(e.index,n);return(Hn(t)?t:n)[St]}var QM=(()=>{class n{static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>null})}return n})();var Xu={},Vo=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,Xu,i);return r!==Xu||t===Xu?r:this.parentInjector.get(e,t,i)}};function od(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=mm(r,a);else if(s==2){let c=a,l=e[++o];i=mm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function an(n,e=0){let t=lt();if(t===null)return Ge(n,e);let i=dn();return bx(i,t,An(n),e)}function eS(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}aR(n,e,t,a,s,c,l)}s!==null&&i!==null&&sR(t,i,s)}function sR(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ge(-301,!1);i.push(e[r],s)}}function oR(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function aR(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&Ss(h)&&(c=!0,oR(n,t,f)),ZD(Ex(t,e),n,h.type)}hR(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=bM(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=gd(t.mergedAttrs,h.hostAttrs),lR(n,t,e,d,h),fR(d,h,r),o!==null&&o.has(h)){let[v,m]=o.get(h);t.directiveToIndex.set(h.type,[d,v+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}cR(n,t,s)}function cR(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))UE(0,e,r,i),UE(1,e,r,i),VE(e,i,!1);else{let s=t.get(r);BE(0,e,s,i),BE(1,e,s,i),VE(e,i,!0)}}}function UE(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),tS(e,s)}}function BE(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),tS(e,o)}}function tS(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function VE(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Zg(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function lR(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ms(r.type,!0)),o=new mc(s,Ss(r),an,null);n.blueprint[i]=o,t[i]=o,uR(n,e,i,bM(n,t,r.hostVars,Ns),r)}function uR(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;dR(o)!=a&&o.push(a),o.push(t,i,s)}}function dR(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function fR(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ss(e)&&(t[""]=n)}}function hR(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function nS(n,e,t,i,r,s,o,a){let c=e[be],l=c.consts,u=ki(l,o),d=Dc(c,n,t,i,u);return s&&eS(c,e,d,ki(l,a),r),d.mergedAttrs=gd(d.mergedAttrs,d.attrs),d.attrs!==null&&od(d,d.attrs,!1),d.mergedAttrs!==null&&od(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function iS(n,e){px(n,e),Pm(e)&&n.queries.elementEnd(e)}function pR(n,e,t,i,r,s){let o=e.consts,a=ki(o,r),c=Dc(e,n,t,i,a);if(c.mergedAttrs=gd(c.mergedAttrs,c.attrs),s!=null){let l=ki(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&od(c,c.attrs,!1),c.mergedAttrs!==null&&od(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function fv(n){return sS(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function rS(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function sS(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function mR(n,e,t){return n[e]=t}function gR(n,e){return n[e]}function Hd(n,e,t){if(t===Ns)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function lg(n,e,t){return function i(r){let s=sr(n)?oi(n.index,e):e;Od(s,5);let o=e[$t],a=HE(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=HE(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function HE(n,e,t,i){let r=ze(null);try{return ut(6,e,t),t(i)!==!1}catch(s){return av(n,s),!1}finally{ut(7,e,t),ze(r)}}function vR(n,e,t,i,r,s,o,a){let c=oc(n),l=!1,u=null;if(!i&&c&&(u=_R(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=si(n,t),f=i?i(d):d;pA(t,f,s,a);let h=r.listen(f,s,a);if(!yR(s)){let g=i?v=>i(Gn(v[n.index])):n.index;oS(g,e,t,s,a,h,!1)}}return l}function yR(n){return n.startsWith("animation")||n.startsWith("transition")}function _R(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Io],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function oS(n,e,t,i,r,s,o){let a=e.firstCreatePass?Bm(e):null,c=Um(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}function zE(n,e,t,i,r,s){let o=e[t],a=e[be],l=a.data[t].outputs[i],d=o[l].subscribe(s);oS(n.index,a,e,r,s,d,!0)}var bg=Symbol("BINDING");var ad=class extends Ac{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=rr(e);return new Go(t,this.ngModule)}};function ER(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Dd.SignalBased)!==0};return r&&(s.transform=r),s})}function xR(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function MR(n,e,t){let i=e instanceof Wt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Vo(t,i):t}function SR(n){let e=n.get(As,null);if(e===null)throw new ge(407,!1);let t=n.get(QM,null),i=n.get(Ni,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1}}function bR(n,e){let t=aS(n);return Jg(e,t,t==="svg"?Om:t==="math"?tE:null)}function aS(n){return(n.selectors[0][0]||"div").toLowerCase()}var Go=class extends Vd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=ER(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=xR(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=BA(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){ut(22);let a=ze(null);try{let c=this.componentDef,l=wR(i,c,o,s),u=MR(c,r||this.ngModule,e),d=SR(u),f=d.rendererFactory.createRenderer(null,c),h=i?aI(f,i,c.encapsulation,u):bR(c,f),g=o?.some(GE)||s?.some(p=>typeof p!="function"&&p.bindings.some(GE)),v=ev(null,l,null,512|SM(c),null,null,d,f,u,null,rM(h,u,!0));v[wt]=h,Fu(v);let m=null;try{let p=nS(wt,v,2,"#host",()=>l.directiveRegistry,!0,0);MM(f,h,p),zo(h,v),ov(l,v,p),dM(l,p,v),iS(l,p),t!==void 0&&CR(p,this.ngContentSelectors,t),m=oi(p.index,v),v[$t]=m[$t],lv(l,v,null)}catch(p){throw m!==null&&mg(m),mg(v),p}finally{ut(23),ku()}return new cd(this.componentType,v,!!g)}finally{ze(a)}}};function wR(n,e,t,i){let r=n?["ng-version","20.3.3"]:VA(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[bg].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[bg].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Au(d);c.push(f)}return Qg(0,null,TR(s,o),1,a,c,null,null,null,[r],null)}function TR(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function GE(n){let e=n[bg].kind;return e==="input"||e==="twoWay"}var cd=class extends KM{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=ws(t[be],wt),this.location=Wo(this._tNode,t),this.instance=oi(this._tNode.index,t)[$t],this.hostView=this.changeDetectorRef=new Lr(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=cv(i,r[be],r,e,t);this.previousInputValues.set(e,t);let o=oi(i.index,r);Od(o,1)}get injector(){return new Cs(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function CR(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Fr=(()=>{class n{static __NG_ELEMENT_ID__=DR}return n})();function DR(){let n=dn();return lS(n,lt())}var AR=Fr,cS=class extends AR{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Wo(this._hostTNode,this._hostLView)}get injector(){return new Cs(this._hostTNode,this._hostLView)}get parentInjector(){let e=kg(this._hostTNode,this._hostLView);if(vx(e)){let t=Ku(e,this._hostLView),i=Ju(e),r=t[be].data[i+8];return new Cs(r,t)}else return new Cs(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=jE(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Ut}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=sd(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,vc(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c=e&&!FD(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,s=m.environmentInjector||m.ngModuleRef,o=m.directives,a=m.bindings}let u=c?e:new Go(rr(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let p=(c?d:this.parentInjector).get(Wt,null);p&&(s=p)}let f=rr(u.componentType??{}),h=sd(this._lContainer,f?.id??null),g=h?.firstChild??null,v=u.create(d,r,g,s,o,a);return this.insertImpl(v.hostView,l,vc(this._hostTNode,h)),v}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(rE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[kt],l=new cS(c,c[ri],c[kt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Ld(o,r,s,i),e.attachToViewContainerRef(),wm(ug(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=jE(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=_c(this._lContainer,t);i&&(ec(ug(this._lContainer),t),Id(i[be],i))}detach(e){let t=this._adjustIndex(e,-1),i=_c(this._lContainer,t);return i&&ec(ug(this._lContainer),t)!=null?new Lr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function jE(n){return n[sc]}function ug(n){return n[sc]||(n[sc]=[])}function lS(n,e){let t,i=e[n.index];return zn(i)?t=i:(t=GM(i,e,null,n),e[n.index]=t,tv(e,t)),uS(t,e,n,i),new cS(t,n,e)}function IR(n,e){let t=n[St],i=t.createComment(""),r=si(e,n),s=t.parentNode(r);return id(t,s,i,t.nextSibling(r),!1),i}var uS=dS,hv=()=>!1;function RR(n,e,t){return hv(n,e,t)}function dS(n,e,t,i){if(n[Fi])return;let r;t.type&8?r=Gn(i):r=IR(e,t),n[Fi]=r}function NR(n,e,t){if(n[Fi]&&n[vi])return!0;let i=t[In],r=e.index-wt;if(!i||Ix(e)||cM(i,r))return!1;let o=yg(i,r),a=i.data[Ed]?.[r],[c,l]=QI(o,a);return n[Fi]=c,n[vi]=l,!0}function PR(n,e,t,i){hv(n,t,e)||dS(n,e,t,i)}function fS(){uS=PR,hv=NR}var wg=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Tg=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)pv(e,t).matches!==null&&this.queries[t].setDirty()}},ld=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=HR(e):this.predicate=e}},Cg=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Dg=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,OR(t,s)),this.matchTNodeWithReadOption(e,t,$u(t,e,s,!1,!1))}else i===Ds?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,$u(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===ur||r===Fr||r===Ds&&t.type&4)this.addMatch(t.index,-2);else{let s=$u(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function OR(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function LR(n,e){return n.type&11?Wo(n,e):n.type&4?uv(n,e):null}function FR(n,e,t,i){return t===-1?LR(e,n):t===-2?kR(n,e,i):Qu(n,n[be],t,e)}function kR(n,e,t){if(t===ur)return Wo(e,n);if(t===Ds)return uv(e,n);if(t===Fr)return lS(e,n)}function hS(n,e,t,i){let r=e[Li].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(FR(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Ag(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=hS(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Ut;d<u.length;d++){let f=u[d];f[Nr]===f[kt]&&Ag(f[be],f,l,i)}if(u[Ms]!==null){let d=u[Ms];for(let f=0;f<d.length;f++){let h=d[f];Ag(h[be],h,l,i)}}}}}return i}function UR(n,e){return n[Li].queries[e].queryList}function pS(n,e,t){let i=new ed((t&4)===4);return oE(n,e,i,i.destroy),(e[Li]??=new Tg).queries.push(new wg(i))-1}function BR(n,e,t){let i=ai();return i.firstCreatePass&&(mS(i,new ld(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),pS(i,lt(),e)}function VR(n,e,t,i){let r=ai();if(r.firstCreatePass){let s=dn();mS(r,new ld(e,t,i),s.index),zR(r,n),(t&2)===2&&(r.staticContentQueries=!0)}return pS(r,lt(),t)}function HR(n){return n.split(",").map(e=>e.trim())}function mS(n,e,t){n.queries===null&&(n.queries=new Cg),n.queries.track(new Dg(e,t))}function zR(n,e){let t=n.contentQueries||(n.contentQueries=[]),i=t.length?t[t.length-1]:-1;e!==i&&t.push(n.queries.length-1,e)}function pv(n,e){return n.queries.getByIndex(e)}function GR(n,e){let t=n[be],i=pv(t,e);return i.crossesNgTemplate?Ag(t,n,e,[]):hS(t,n,i,e)}var WE=new Set;function Vi(n){WE.has(n)||(WE.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var jo=class{},zd=class{};var ud=class extends jo{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new ad(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Dm(e);this._bootstrapComponents=gM(s.bootstrap),this._r3Injector=eg(e,t,[{provide:jo,useValue:this},{provide:Ac,useValue:this.componentFactoryResolver},...i],Ir(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},dd=class extends zd{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new ud(this.moduleType,e,[])}};var Ec=class extends jo{injector;componentFactoryResolver=new ad(this);instance=null;constructor(e){super();let t=new gs([...e.providers,{provide:jo,useValue:this},{provide:Ac,useValue:this.componentFactoryResolver}],e.parent||nc(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function qo(n,e,t=null){return new Ec({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var jR=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Iu(!1,t.type),r=i.length>0?qo([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ae({token:n,providedIn:"environment",factory:()=>new n(Ge(Wt))})}return n})();function Xt(n){return Mc(()=>{let e=gS(n),t=Et(ue({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Ug.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(jR).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||lr.Emulated,styles:n.styles||pi,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Vi("NgStandalone"),vS(t);let i=n.dependencies;return t.directiveDefs=$E(i,WR),t.pipeDefs=$E(i,Am),t.id=XR(t),t})}function WR(n){return rr(n)||Au(n)}function Xo(n){return Mc(()=>({type:n.type,bootstrap:n.bootstrap||pi,declarations:n.declarations||pi,imports:n.imports||pi,exports:n.exports||pi,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function $R(n,e){if(n==null)return _s;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=Dd.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function qR(n){if(n==null)return _s;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function kr(n){return Mc(()=>{let e=gS(n);return vS(e),e})}function gS(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||_s,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||pi,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:$R(n.inputs,e),outputs:qR(n.outputs),debugInfo:null}}function vS(n){n.features?.forEach(e=>e(n))}function $E(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function XR(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function yS(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=gd(n.mergedAttrs,n.attrs);let u=n.tView=Qg(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),Oo(n,!1);let c=_S(t,e,n,i);Uu()&&rv(t,e,c,n),zo(c,e);let l=GM(c,e,c,n);e[i+wt]=l,tv(e,l),RR(l,n,e)}function YR(n,e,t,i,r,s,o,a,c,l,u){let d=t+wt,f;return e.firstCreatePass?(f=Dc(e,d,4,o||null,a||null),Hm()&&eS(e,n,f,ki(e.consts,l),RM),px(e,f)):f=e.data[d],yS(f,n,e,t,i,r,s,c),oc(f)&&ov(e,n,f),l!=null&&Nd(n,f,u),f}function qE(n,e,t,i,r,s,o,a,c,l,u){let d=t+wt,f;if(e.firstCreatePass){if(f=Dc(e,d,4,o||null,a||null),l!=null){let h=ki(e.consts,l);f.localNames=[];for(let g=0;g<h.length;g+=2)f.localNames.push(h[g],-1)}}else f=e.data[d];return yS(f,n,e,t,i,r,s,c),l!=null&&Nd(n,f,u),f}function Gd(n,e,t,i,r,s,o,a){let c=lt(),l=ai(),u=ki(l.consts,s);return YR(c,l,n,e,t,i,r,u,void 0,o,a),Gd}var _S=ES;function ES(n,e,t,i){return or(!0),e[St].createComment("")}function ZR(n,e,t,i){let r=!bd(e,t);or(r);let s=e[In]?.data[Ux]?.[i]??null;if(s!==null&&t.tView!==null&&t.tView.ssrId===null&&(t.tView.ssrId=s),r)return ES(n,e);let o=e[In],a=Fd(o,n,e,t);Sd(o,i,a);let c=qg(o,i);return kd(c,a)}function xS(){_S=ZR}var jn=(function(n){return n[n.NOT_STARTED=0]="NOT_STARTED",n[n.IN_PROGRESS=1]="IN_PROGRESS",n[n.COMPLETE=2]="COMPLETE",n[n.FAILED=3]="FAILED",n})(jn||{}),XE=0,JR=1,Ht=(function(n){return n[n.Placeholder=0]="Placeholder",n[n.Loading=1]="Loading",n[n.Complete=2]="Complete",n[n.Error=3]="Error",n})(Ht||{});var KR=0,Rc=1;var QR=4,e1=5;var t1=7,Ho=8,n1=9,mv=(function(n){return n[n.Manual=0]="Manual",n[n.Playthrough=1]="Playthrough",n})(mv||{});function Yu(n,e){let t=r1(n),i=e[t];if(i!==null){for(let r of i)r();e[t]=null}}function i1(n){Yu(1,n),Yu(0,n),Yu(2,n)}function r1(n){let e=QR;return n===1?e=e1:n===2&&(e=n1),e}var jd=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(jd||{}),Os=new Ee(""),MS=!1,Ig=class extends jt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Q0()&&(this.destroyRef=$(ar,{optional:!0})??void 0,this.pendingTasks=$(yi,{optional:!0})??void 0)}emit(e){let t=ze(null);try{super.next(e)}finally{ze(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Bt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},fn=Ig;function SS(n){let e,t;function i(){n=fc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function YE(n){return queueMicrotask(()=>n()),()=>{n=fc}}var gv="isAngularZone",fd=gv+"_ID",s1=0,Nt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new fn(!1);onMicrotaskEmpty=new fn(!1);onStable=new fn(!1);onError=new fn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=MS}=e;if(typeof Zone>"u")throw new ge(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,c1(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(gv)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ge(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ge(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,o1,fc,fc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},o1={};function vv(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function a1(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){SS(()=>{n.callbackScheduled=!1,Rg(n),n.isCheckStableRunning=!0,vv(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Rg(n)}function c1(n){let e=()=>{a1(n)},t=s1++;n._inner=n._inner.fork({name:"angular",properties:{[gv]:!0,[fd]:t,[fd+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(l1(c))return i.invokeTask(s,o,a,c);try{return ZE(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),JE(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return ZE(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!u1(c)&&e(),JE(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Rg(n),vv(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Rg(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function ZE(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function JE(n){n._nesting--,vv(n)}var xc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new fn;onMicrotaskEmpty=new fn;onStable=new fn;onError=new fn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function l1(n){return bS(n,"__ignore_ng_zone__")}function u1(n){return bS(n,"__scheduler_tick__")}function bS(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var yv=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})(),wS=[0,1,2,3],TS=(()=>{class n{ngZone=$(Nt);scheduler=$(Ni);errorHandler=$(mi,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){$(Os,{optional:!0})}execute(){let t=this.sequences.size>0;t&&ut(16),this.executing=!0;for(let i of wS)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let s=r.hooks[i];return s(r.pipelinedValue)},r.snapshot))}catch(s){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(s)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&ut(17)}register(t){let{view:i}=t;i!==void 0?((i[xs]??=[]).push(t),Po(i),i[Ue]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,i){return i?i.run(jd.AFTER_NEXT_RENDER,t):t()}static \u0275prov=Ae({token:n,providedIn:"root",factory:()=>new n})}return n})(),hd=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(e,t,i,r,s,o=null){this.impl=e,this.hooks=t,this.view=i,this.once=r,this.snapshot=o,this.unregisterOnDestroy=s?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let e=this.view?.[xs];e&&(this.view[xs]=e.filter(t=>t!==this))}};function _v(n,e){let t=e?.injector??$(Bn);return Vi("NgAfterNextRender"),f1(n,t,e,!0)}function d1(n){return n instanceof Function?[void 0,void 0,n,void 0]:[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function f1(n,e,t,i){let r=e.get(yv);r.impl??=e.get(TS);let s=e.get(Os,null,{optional:!0}),o=t?.manualCleanup!==!0?e.get(ar):null,a=e.get(Vu,null,{optional:!0}),c=new hd(r.impl,d1(n),a?.view,i,o,s?.snapshot(null));return r.impl.register(c),c}function CS(n){return n+1}function Yo(n,e){let t=n[be],i=CS(e.index);return n[i]}function Nc(n,e){let t=CS(e.index);return n.data[t]}function h1(n,e,t){let i=e[be],r=Nc(i,t);switch(n){case Ht.Complete:return r.primaryTmplIndex;case Ht.Loading:return r.loadingTmplIndex;case Ht.Error:return r.errorTmplIndex;case Ht.Placeholder:return r.placeholderTmplIndex;default:return null}}function KE(n,e){return e===Ht.Placeholder?n.placeholderBlockConfig?.[XE]??null:e===Ht.Loading?n.loadingBlockConfig?.[XE]??null:null}function p1(n){return n.loadingBlockConfig?.[JR]??null}function QE(n,e){if(!n||n.length===0)return e;let t=new Set(n);for(let i of e)t.add(i);return n.length===t.size?n:Array.from(t)}function m1(n,e){let t=e.primaryTmplIndex+wt;return ws(n,t)}var g1=(()=>{class n{cachedInjectors=new Map;getOrCreateInjector(t,i,r,s){if(!this.cachedInjectors.has(t)){let o=r.length>0?qo(r,i,s):null;this.cachedInjectors.set(t,o)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Ae({token:n,providedIn:"environment",factory:()=>new n})}return n})();var DS=new Ee("");function dg(n,e,t){return n.get(g1).getOrCreateInjector(e,n,t,"")}function v1(n,e,t){if(n instanceof Vo){let r=n.injector,s=n.parentInjector,o=dg(s,e,t);return new Vo(r,o)}let i=n.get(Wt);if(i!==n){let r=dg(i,e,t);return new Vo(n,r)}return dg(n,e,t)}function Ts(n,e,t,i=!1){let r=t[kt],s=r[be];if(Pr(r))return;let o=Yo(r,e),a=o[Rc],c=o[t1];if(!(c!==null&&n<c)&&ex(a,n)&&ex(o[KR]??-1,n)){let l=Nc(s,e),d=!i&&!0&&(p1(l)!==null||KE(l,Ht.Loading)!==null||KE(l,Ht.Placeholder))?E1:_1;try{d(n,o,t,e,r)}catch(f){av(r,f)}}}function y1(n,e){let t=n[vi]?.findIndex(r=>r.data[zx]===e[Rc])??-1;return{dehydratedView:t>-1?n[vi][t]:null,dehydratedViewIx:t}}function _1(n,e,t,i,r){ut(20);let s=h1(n,r,i);if(s!==null){e[Rc]=n;let o=r[be],a=s+wt,c=ws(o,a),l=0;jM(t,l);let u;if(n===Ht.Complete){let g=Nc(o,i),v=g.providers;v&&v.length>0&&(u=v1(r[Pi],g,v))}let{dehydratedView:d,dehydratedViewIx:f}=y1(t,e),h=Pd(r,c,null,{injector:u,dehydratedView:d});if(Ld(t,h,l,vc(c,d)),Od(h,2),f>-1&&t[vi]?.splice(f,1),(n===Ht.Complete||n===Ht.Error)&&Array.isArray(e[Ho])){for(let g of e[Ho])g();e[Ho]=null}}ut(21)}function ex(n,e){return n<e}function tx(n,e,t){n.loadingPromise.then(()=>{n.loadingState===jn.COMPLETE?Ts(Ht.Complete,e,t):n.loadingState===jn.FAILED&&Ts(Ht.Error,e,t)})}var E1=null;var Wd=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var Ev=new Ee("");function Pc(n){return!!n&&typeof n.then=="function"}function AS(n){return!!n&&typeof n.subscribe=="function"}var IS=new Ee("");var xv=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=$(IS,{optional:!0})??[];injector=$(Bn);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=un(this.injector,r);if(Pc(s))t.push(s);else if(AS(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ur=new Ee("");function RS(){zp(()=>{let n="";throw new ge(600,n)})}function NS(n){return n.isBoundToModule}var x1=10;var Nn=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=$(Rn);afterRenderManager=$(yv);zonelessEnabled=$(ko);rootEffectScheduler=$(ig);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new jt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=$(yi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(rt(t=>!t))}constructor(){$(Os,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=$(Wt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Bn.NULL){return this._injector.get(Nt).run(()=>{ut(10);let o=t instanceof Vd;if(!this._injector.get(xv).done){let g="";throw new ge(405,g)}let c;o?c=t:c=this._injector.get(Ac).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=NS(c)?void 0:this._injector.get(jo),u=i||c.selector,d=c.create(r,[],u,l),f=d.location.nativeElement,h=d.injector.get(Ev,null);return h?.registerApplication(f),d.onDestroy(()=>{this.detachView(d.hostView),pc(this.components,d),h?.unregisterApplication(f)}),this._loadComponent(d),ut(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ut(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(jd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new ge(101,!1);let t=ze(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ze(t),this.afterTick.next(),ut(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(As,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<x1;)ut(14),this.synchronizeOnce(),ut(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ac(r))continue;let s=i&&!this.zonelessEnabled?0:1;BM(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>ac(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;pc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(Ur,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>pc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new ge(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function pc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function M1(){let n,e;return{promise:new Promise((i,r)=>{n=i,e=r}),resolve:n,reject:e}}function PS(n,e,t){let i=e[Pi],r=e[be];if(n.loadingState!==jn.NOT_STARTED)return n.loadingPromise??Promise.resolve();let s=Yo(e,t),o=m1(r,n);n.loadingState=jn.IN_PROGRESS,Yu(1,s);let a=n.dependencyResolverFn,c=i.get(Hu).add();return a?(n.loadingPromise=Promise.allSettled(a()).then(l=>{let u=!1,d=[],f=[];for(let h of l)if(h.status==="fulfilled"){let g=h.value,v=rr(g)||Au(g);if(v)d.push(v);else{let m=Am(g);m&&f.push(m)}}else{u=!0;break}if(u){if(n.loadingState=jn.FAILED,n.errorTmplIndex===null){let g=new ge(-750,!1);av(e,g)}}else{n.loadingState=jn.COMPLETE;let h=o.tView;if(d.length>0){h.directiveRegistry=QE(h.directiveRegistry,d);let g=d.map(m=>m.type),v=Iu(!1,...g);n.providers=v}f.length>0&&(h.pipeRegistry=QE(h.pipeRegistry,f))}}),n.loadingPromise.finally(()=>{n.loadingPromise=null,c()})):(n.loadingPromise=Promise.resolve().then(()=>{n.loadingPromise=null,n.loadingState=jn.COMPLETE,c()}),n.loadingPromise)}function S1(n,e){return e[Pi].get(DS,null,{optional:!0})?.behavior!==mv.Manual}function b1(n,e,t){let i=e[be],r=e[t.index];if(!S1(n,e))return;let s=Yo(e,t),o=Nc(i,t);switch(i1(s),o.loadingState){case jn.NOT_STARTED:Ts(Ht.Loading,t,r),PS(o,e,t),o.loadingState===jn.IN_PROGRESS&&tx(o,t,r);break;case jn.IN_PROGRESS:Ts(Ht.Loading,t,r),tx(o,t,r);break;case jn.COMPLETE:Ts(Ht.Complete,t,r);break;case jn.FAILED:Ts(Ht.Error,t,r);break;default:}}async function OS(n,e,t){let i=n.get(xd);if(i.hydrating.has(e))return;let{parentBlockPromise:s,hydrationQueue:o}=MA(e,n);if(o.length===0)return;s!==null&&o.shift(),C1(i,o),s!==null&&await s;let a=o[0];i.has(a)?await nx(n,o,t):i.awaitParentBlock(a,async()=>await nx(n,o,t))}async function nx(n,e,t){let i=n.get(xd),r=i.hydrating,s=n.get(yi),o=s.add();for(let c=0;c<e.length;c++){let l=e[c],u=i.get(l);if(u!=null){if(await A1(u),await D1(n),w1(u)){JI(u),ix(e.slice(c),i);break}r.get(l).resolve()}else{T1(c,e,i),ix(e.slice(c),i);break}}let a=e[e.length-1];await r.get(a)?.promise,s.remove(o),t&&t(e),KI(i.get(a),e,i,n.get(Nn))}function w1(n){return Yo(n.lView,n.tNode)[Rc]===Ht.Error}function T1(n,e,t){let i=n-1,r=i>-1?t.get(e[i]):null;r&&Bd(r.lContainer)}function ix(n,e){let t=e.hydrating;for(let i in n)t.get(i)?.reject();e.cleanup(n)}function C1(n,e){for(let t of e)n.hydrating.set(t,M1())}function D1(n){return new Promise(e=>_v(e,{injector:n}))}async function A1(n){let{tNode:e,lView:t}=n,i=Yo(t,e);return new Promise(r=>{I1(i,r),b1(2,t,e)})}function I1(n,e){Array.isArray(n[Ho])||(n[Ho]=[]),n[Ho].push(e)}function $d(n,e,t,i){let r=lt(),s=uc();if(Hd(r,s,e)){let o=ai(),a=Km();vI(a,r,n,e,t,i)}return $d}var x5=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Ng=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e,!0))}};function fg(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function R1(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],d=fg(s,l,s,u,t);if(d!==0){d<0&&n.updateValue(s,u),s++;continue}let f=n.at(o),h=e[c],g=fg(o,f,c,h,t);if(g!==0){g<0&&n.updateValue(o,h),o--,c--;continue}let v=t(s,l),m=t(o,f),p=t(s,u);if(Object.is(p,m)){let b=t(c,h);Object.is(b,v)?(n.swap(s,o),n.updateValue(o,h),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new pd,r??=sx(n,s,o,t),Pg(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(v,n.detach(s)),o--;else{let b=n.create(s,e[s]);n.attach(s,b),s++,o++}}for(;s<=c;)rx(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),d=l.value,f=fg(s,u,s,d,t);if(f!==0)f<0&&n.updateValue(s,d),s++,l=c.next();else{i??=new pd,r??=sx(n,s,o,t);let h=t(s,d);if(Pg(n,i,s,h))n.updateValue(s,d),s++,o++,l=c.next();else if(!r.has(h))n.attach(s,n.create(s,d)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)rx(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function Pg(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function rx(n,e,t,i,r){if(Pg(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function sx(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var pd=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};var Og=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Ut}};function Mv(n,e){return e}var Lg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Sv(n,e,t,i,r,s,o,a,c,l,u,d,f){Vi("NgControlFlow");let h=lt(),g=ai(),v=c!==void 0,m=lt(),p=a?o.bind(m[En][$t]):o,b=new Lg(v,p);m[wt+n]=b,qE(h,g,n+1,e,t,i,r,ki(g.consts,s),256),v&&qE(h,g,n+2,c,l,u,d,ki(g.consts,f),512)}var Fg=class extends Ng{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-Ut}at(e){return this.getLView(e)[$t].$implicit}attach(e,t){let i=t[In];this.needsIndexUpdate||=e!==this.length,Ld(this.lContainer,t,e,vc(this.templateTNode,i))}detach(e,t){return this.needsIndexUpdate||=e!==this.length-1,t&&N1(this.lContainer,e),P1(this.lContainer,e)}create(e,t){let i=sd(this.lContainer,this.templateTNode.tView.ssrId),r=Pd(this.hostLView,this.templateTNode,new Og(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){Id(e[be],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[$t].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[$t].$index=e}getLView(e){return O1(this.lContainer,e)}};function bv(n){let e=ze(null),t=dc();try{let i=lt(),r=i[be],s=i[t],o=t+1,a=ox(i,o);if(s.liveCollection===void 0){let l=ax(r,o);s.liveCollection=new Fg(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(R1(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=uc(),u=c.length===0;if(Hd(i,l,u)){let d=t+2,f=ox(i,d);if(u){let h=ax(r,d),g=nR(f,h,i),v=Pd(i,h,void 0,{dehydratedView:g});Ld(f,v,0,vc(h,g))}else r.firstUpdatePass&&Ud(f),jM(f,0)}}}finally{ze(e)}}function ox(n,e){return n[e]}function N1(n,e){if(n.length<=Ut)return;let t=Ut+e,i=n[t];i&&i[on]&&(i[on].skipLeaveAnimations=!0)}function P1(n,e){return _c(n,e)}function O1(n,e){return FI(n,e)}function ax(n,e){return ws(n,e)}function Wn(n,e,t){let i=lt(),r=uc();if(Hd(i,r,e)){let s=ai(),o=Km();dI(o,i,n,e,i[St],t)}return Wn}function cx(n,e,t,i,r){cv(e,n,t,r?"class":"style",i)}function Ye(n,e,t,i){let r=lt(),s=r[be],o=n+wt,a=s.firstCreatePass?nS(o,r,2,e,RM,Hm(),t,i):s.data[o];if(NM(a,r,n,e,wv),oc(a)){let c=r[be];ov(c,r,a),dM(c,a,r)}return i!=null&&Nd(r,a),Ye}function Qe(){let n=ai(),e=dn(),t=PM(e);return n.firstCreatePass&&iS(n,t),Gm(t)&&jm(),Vm(),t.classesWithoutHost!=null&&zD(t)&&cx(n,t,lt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&GD(t)&&cx(n,t,lt(),t.stylesWithoutHost,!1),Qe}function hn(n,e,t,i){return Ye(n,e,t,i),Qe(),hn}function Oc(n,e,t,i){let r=lt(),s=r[be],o=n+wt,a=s.firstCreatePass?pR(o,s,2,e,t,i):s.data[o];return NM(a,r,n,e,wv),i!=null&&Nd(r,a),Oc}function Lc(){let n=dn(),e=PM(n);return Gm(e)&&jm(),Vm(),Lc}function qd(n,e,t,i){return Oc(n,e,t,i),Lc(),qd}var wv=(n,e,t,i,r)=>(or(!0),Jg(e[St],i,Qm()));function L1(n,e,t,i,r){let s=!bd(e,t);if(or(s),s)return Jg(e[St],i,Qm());let o=e[In],a=Fd(o,n,e,t);return aM(o,r)&&Sd(o,r,a.nextSibling),o&&(Dx(t)||Ax(a))&&sr(t)&&(lE(t),xM(a)),a}function LS(){wv=L1}var F1=(n,e,t,i,r)=>(or(!0),_M(e[St],""));function k1(n,e,t,i,r){let s,o=!bd(e,t);if(or(o),o)return _M(e[St],"");let a=e[In],c=Fd(a,n,e,t),l=EA(a,r);return Sd(a,r,c),s=kd(l,c),s}function FS(){F1=k1}function Tv(){return lt()}var Fc="en-US";var U1=Fc;function kS(n){typeof n=="string"&&(U1=n.toLowerCase().replace(/_/g,"-"))}function Ls(n,e,t){let i=lt(),r=ai(),s=dn();return B1(r,i,i[St],s,n,e,t),Ls}function B1(n,e,t,i,r,s,o){let a=!0,c=null;if((i.type&3||o)&&(c??=lg(i,e,s),vR(i,n,e,o,t,r,s,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let f=u[d],h=u[d+1];c??=lg(i,e,s),zE(i,e,f,h,r,c)}if(l&&l.length)for(let d of l)c??=lg(i,e,s),zE(i,e,d,r,r,c)}}function Cv(n,e,t,i){VR(n,e,t,i)}function kc(n,e,t){BR(n,e,t)}function Fs(n){let e=lt(),t=ai(),i=Ym();Lu(i+1);let r=pv(t,i);if(n.dirty&&iE(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=GR(e,i);n.reset(s,iA),n.notifyOnChanges()}return!0}return!1}function ks(){return UR(lt(),Ym())}function dt(n,e=""){let t=lt(),i=ai(),r=n+wt,s=i.firstCreatePass?Dc(i,r,1,e,null):i.data[r],o=US(i,t,s,e,n);t[r]=o,Uu()&&rv(i,t,o,s),Oo(s,!1)}var US=(n,e,t,i,r)=>(or(!0),yM(e[St],i));function V1(n,e,t,i,r){let s=!bd(e,t);if(or(s),s)return yM(e[St],i);let o=e[In];return Fd(o,n,e,t)}function BS(){US=V1}function H1(n,e,t,i=""){return Hd(n,uc(),t)?e+Qa(t)+i:Ns}function Uc(n){return Dv("",n),Uc}function Dv(n,e,t){let i=lt(),r=H1(i,n,e,t);return r!==Ns&&z1(i,dc(),r),Dv}function z1(n,e,t){let i=nE(e,n);HA(n[St],i,t)}function Us(n,e,t){let i=fE()+n,r=lt();return r[i]===Ns?mR(r,i,t?e.call(t):e()):gR(r,i)}var md=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Av=(()=>{class n{compileModuleSync(t){return new dd(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Dm(t),s=gM(r.declarations).reduce((o,a)=>{let c=rr(a);return c&&o.push(new Go(c)),o},[]);return new md(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var G1=(()=>{class n{zone=$(Nt);changeDetectionScheduler=$(Ni);applicationRef=$(Nn);applicationErrorHandler=$(Rn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(t){this.applicationErrorHandler(t)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function VS({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Nt(Et(ue({},HS()),{scheduleInRootZone:t})),[{provide:Nt,useFactory:n},{provide:ni,multi:!0,useFactory:()=>{let i=$(G1,{optional:!0});return()=>i.initialize()}},{provide:ni,multi:!0,useFactory:()=>{let i=$(j1);return()=>{i.initialize()}}},e===!0?{provide:ng,useValue:!0}:[],{provide:Bu,useValue:t??MS},{provide:Rn,useFactory:()=>{let i=$(Nt),r=$(Wt),s;return o=>{i.runOutsideAngular(()=>{r.destroyed&&!s?setTimeout(()=>{throw o}):(s??=r.get(mi),s.handleError(o))})}}}]}function HS(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var j1=(()=>{class n{subscription=new Bt;initialized=!1;zone=$(Nt);pendingTasks=$(yi);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Nt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Nt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Iv=(()=>{class n{applicationErrorHandler=$(Rn);appRef=$(Nn);taskService=$(yi);ngZone=$(Nt);zonelessEnabled=$(ko);tracing=$(Os,{optional:!0});disableScheduling=$(ng,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Bt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(fd):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&($(Bu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof xc||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?YE:SS;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(fd+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.taskService.remove(t),this.applicationErrorHandler(i)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,YE(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Rv(){return Vi("NgZoneless"),gi([{provide:Ni,useExisting:Iv},{provide:Nt,useClass:xc},{provide:ko,useValue:!0},{provide:Bu,useValue:!1},[]])}function W1(){return typeof $localize<"u"&&$localize.locale||Fc}var Nv=new Ee("",{providedIn:"root",factory:()=>$(Nv,{optional:!0,skipSelf:!0})||W1()});function dr(n){return U0(n)}var zS=class{[wn];constructor(e){this[wn]=e}destroy(){this[wn].destroy()}};var kv={JSACTION:"__jsaction",OWNER:"__owner"},$S={};function $1(n){return n[kv.JSACTION]}function GS(n,e){n[kv.JSACTION]=e}function q1(n){return $S[n]}function X1(n,e){$S[n]=e}var Ie={AUXCLICK:"auxclick",CHANGE:"change",CLICK:"click",CLICKMOD:"clickmod",CLICKONLY:"clickonly",DBLCLICK:"dblclick",FOCUS:"focus",FOCUSIN:"focusin",BLUR:"blur",FOCUSOUT:"focusout",SUBMIT:"submit",KEYDOWN:"keydown",KEYPRESS:"keypress",KEYUP:"keyup",MOUSEUP:"mouseup",MOUSEDOWN:"mousedown",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",MOUSEMOVE:"mousemove",POINTERUP:"pointerup",POINTERDOWN:"pointerdown",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERMOVE:"pointermove",POINTERCANCEL:"pointercancel",GOTPOINTERCAPTURE:"gotpointercapture",LOSTPOINTERCAPTURE:"lostpointercapture",ERROR:"error",LOAD:"load",UNLOAD:"unload",TOUCHSTART:"touchstart",TOUCHEND:"touchend",TOUCHMOVE:"touchmove",INPUT:"input",SCROLL:"scroll",TOGGLE:"toggle",CUSTOM:"_custom"},Y1=[Ie.MOUSEENTER,Ie.MOUSELEAVE,"pointerenter","pointerleave"],L5=[Ie.CLICK,Ie.DBLCLICK,Ie.FOCUSIN,Ie.FOCUSOUT,Ie.KEYDOWN,Ie.KEYUP,Ie.KEYPRESS,Ie.MOUSEOVER,Ie.MOUSEOUT,Ie.SUBMIT,Ie.TOUCHSTART,Ie.TOUCHEND,Ie.TOUCHMOVE,"touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch"],Z1=[Ie.FOCUS,Ie.BLUR,Ie.ERROR,Ie.LOAD,Ie.TOGGLE],Uv=n=>Z1.indexOf(n)>=0;function J1(n){return n===Ie.MOUSEENTER?Ie.MOUSEOVER:n===Ie.MOUSELEAVE?Ie.MOUSEOUT:n===Ie.POINTERENTER?Ie.POINTEROVER:n===Ie.POINTERLEAVE?Ie.POINTEROUT:n}function K1(n,e,t,i){let r=!1;Uv(e)&&(r=!0);let s=typeof i=="boolean"?{capture:r,passive:i}:r;return n.addEventListener(e,t,s),{eventType:e,handler:t,capture:r,passive:i}}function Q1(n,e){if(n.removeEventListener){let t=typeof e.passive=="boolean"?{capture:e.capture}:e.capture;n.removeEventListener(e.eventType,e.handler,t)}else n.detachEvent&&n.detachEvent(`on${e.eventType}`,e.handler)}function eN(n){n.preventDefault?n.preventDefault():n.returnValue=!1}var jS=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);function tN(n){return n.which===2||n.which==null&&n.button===4}function nN(n){return jS&&n.metaKey||!jS&&n.ctrlKey||tN(n)||n.shiftKey}function iN(n,e,t){let i=n.relatedTarget;return(n.type===Ie.MOUSEOVER&&e===Ie.MOUSEENTER||n.type===Ie.MOUSEOUT&&e===Ie.MOUSELEAVE||n.type===Ie.POINTEROVER&&e===Ie.POINTERENTER||n.type===Ie.POINTEROUT&&e===Ie.POINTERLEAVE)&&(!i||i!==t&&!t.contains(i))}function rN(n,e){let t={};for(let i in n){if(i==="srcElement"||i==="target")continue;let r=i,s=n[r];typeof s!="function"&&(t[r]=s)}return n.type===Ie.MOUSEOVER?t.type=Ie.MOUSEENTER:n.type===Ie.MOUSEOUT?t.type=Ie.MOUSELEAVE:n.type===Ie.POINTEROVER?t.type=Ie.POINTERENTER:t.type=Ie.POINTERLEAVE,t.target=t.srcElement=e,t.bubbles=!1,t._originalEvent=n,t}var sN=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent),Jd=class{element;handlerInfos=[];constructor(e){this.element=e}addEventListener(e,t,i){sN&&(this.element.style.cursor="pointer"),this.handlerInfos.push(K1(this.element,e,t(this.element),i))}cleanUp(){for(let e=0;e<this.handlerInfos.length;e++)Q1(this.element,this.handlerInfos[e]);this.handlerInfos=[]}},oN={NAMESPACE_ACTION_SEPARATOR:".",EVENT_ACTION_SEPARATOR:":"};function Br(n){return n.eventType}function Bv(n,e){n.eventType=e}function Yd(n){return n.event}function qS(n,e){n.event=e}function XS(n){return n.targetElement}function YS(n,e){n.targetElement=e}function ZS(n){return n.eic}function aN(n,e){n.eic=e}function cN(n){return n.timeStamp}function lN(n,e){n.timeStamp=e}function Zd(n){return n.eia}function JS(n,e,t){n.eia=[e,t]}function Pv(n){n.eia=void 0}function Xd(n){return n[1]}function uN(n){return n.eirp}function KS(n,e){n.eirp=e}function QS(n){return n.eir}function eb(n,e){n.eir=e}function tb(n){return{eventType:n.eventType,event:n.event,targetElement:n.targetElement,eic:n.eic,eia:n.eia,timeStamp:n.timeStamp,eirp:n.eirp,eiack:n.eiack,eir:n.eir}}function dN(n,e,t,i,r,s,o,a){return{eventType:n,event:e,targetElement:t,eic:i,timeStamp:r,eia:s,eirp:o,eiack:a}}var Ov=class n{eventInfo;constructor(e){this.eventInfo=e}getEventType(){return Br(this.eventInfo)}setEventType(e){Bv(this.eventInfo,e)}getEvent(){return Yd(this.eventInfo)}setEvent(e){qS(this.eventInfo,e)}getTargetElement(){return XS(this.eventInfo)}setTargetElement(e){YS(this.eventInfo,e)}getContainer(){return ZS(this.eventInfo)}setContainer(e){aN(this.eventInfo,e)}getTimestamp(){return cN(this.eventInfo)}setTimestamp(e){lN(this.eventInfo,e)}getAction(){let e=Zd(this.eventInfo);if(e)return{name:e[0],element:e[1]}}setAction(e){if(!e){Pv(this.eventInfo);return}JS(this.eventInfo,e.name,e.element)}getIsReplay(){return uN(this.eventInfo)}setIsReplay(e){KS(this.eventInfo,e)}getResolved(){return QS(this.eventInfo)}setResolved(e){eb(this.eventInfo,e)}clone(){return new n(tb(this.eventInfo))}},fN={},hN=/\s*;\s*/,pN=Ie.CLICK,Lv=class{a11yClickSupport=!1;clickModSupport=!0;syntheticMouseEventSupport;updateEventInfoForA11yClick=void 0;preventDefaultForA11yClick=void 0;populateClickOnlyAction=void 0;constructor({syntheticMouseEventSupport:e=!1,clickModSupport:t=!0}={}){this.syntheticMouseEventSupport=e,this.clickModSupport=t}resolveEventType(e){this.clickModSupport&&Br(e)===Ie.CLICK&&nN(Yd(e))?Bv(e,Ie.CLICKMOD):this.a11yClickSupport&&this.updateEventInfoForA11yClick(e)}resolveAction(e){QS(e)||(this.populateAction(e,XS(e)),eb(e,!0))}resolveParentAction(e){let t=Zd(e),i=t&&Xd(t);Pv(e);let r=i&&this.getParentNode(i);r&&this.populateAction(e,r)}populateAction(e,t){let i=t;for(;i&&i!==ZS(e)&&(i.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(i,e),!Zd(e));)i=this.getParentNode(i);let r=Zd(e);if(r&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(e),this.syntheticMouseEventSupport&&(Br(e)===Ie.MOUSEENTER||Br(e)===Ie.MOUSELEAVE||Br(e)===Ie.POINTERENTER||Br(e)===Ie.POINTERLEAVE)))if(iN(Yd(e),Br(e),Xd(r))){let s=rN(Yd(e),Xd(r));qS(e,s),YS(e,Xd(r))}else Pv(e)}getParentNode(e){let t=e[kv.OWNER];if(t)return t;let i=e.parentNode;return i?.nodeName==="#document-fragment"?i?.host??null:i}populateActionOnElement(e,t){let i=this.parseActions(e),r=i[Br(t)];r!==void 0&&JS(t,r,e),this.a11yClickSupport&&this.populateClickOnlyAction(e,t,i)}parseActions(e){let t=$1(e);if(!t){let i=e.getAttribute(zu.JSACTION);if(!i)t=fN,GS(e,t);else{if(t=q1(i),!t){t={};let r=i.split(hN);for(let s=0;s<r.length;s++){let o=r[s];if(!o)continue;let a=o.indexOf(oN.EVENT_ACTION_SEPARATOR),c=a!==-1,l=c?o.substr(0,a).trim():pN,u=c?o.substr(a+1).trim():o;t[l]=u}X1(i,t)}GS(e,t)}}return t}addA11yClickSupport(e,t,i){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=e,this.preventDefaultForA11yClick=t,this.populateClickOnlyAction=i}},nb=(function(n){return n[n.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK",n})(nb||{}),Fv=class{dispatchDelegate;actionResolver;eventReplayer;eventReplayScheduled=!1;replayEventInfoWrappers=[];constructor(e,{actionResolver:t,eventReplayer:i}={}){this.dispatchDelegate=e,this.actionResolver=t,this.eventReplayer=i}dispatch(e){let t=new Ov(e);this.actionResolver?.resolveEventType(e),this.actionResolver?.resolveAction(e);let i=t.getAction();if(i&&mN(i.element,t)&&eN(t.getEvent()),this.eventReplayer&&t.getIsReplay()){this.scheduleEventInfoWrapperReplay(t);return}this.dispatchDelegate(t)}scheduleEventInfoWrapperReplay(e){this.replayEventInfoWrappers.push(e),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}};function mN(n,e){return n.tagName==="A"&&(e.getEventType()===Ie.CLICK||e.getEventType()===Ie.CLICKMOD)}var ib=Symbol.for("propagationStopped"),Vv={REPLAY:101};var gN="`preventDefault` called during event replay.";var vN="`composedPath` called during event replay.",Kd=class{dispatchDelegate;clickModSupport;actionResolver;dispatcher;constructor(e,t=!0){this.dispatchDelegate=e,this.clickModSupport=t,this.actionResolver=new Lv({clickModSupport:t}),this.dispatcher=new Fv(i=>{this.dispatchToDelegate(i)},{actionResolver:this.actionResolver})}dispatch(e){this.dispatcher.dispatch(e)}dispatchToDelegate(e){for(e.getIsReplay()&&EN(e),yN(e);e.getAction();){if(xN(e),Uv(e.getEventType())&&e.getAction().element!==e.getTargetElement()||(this.dispatchDelegate(e.getEvent(),e.getAction().name),_N(e)))return;this.actionResolver.resolveParentAction(e.eventInfo)}}};function yN(n){let e=n.getEvent(),t=n.getEvent().stopPropagation.bind(e),i=()=>{e[ib]=!0,t()};Bs(e,"stopPropagation",i),Bs(e,"stopImmediatePropagation",i)}function _N(n){return!!n.getEvent()[ib]}function EN(n){let e=n.getEvent(),t=n.getTargetElement(),i=e.preventDefault.bind(e);Bs(e,"target",t),Bs(e,"eventPhase",Vv.REPLAY),Bs(e,"preventDefault",()=>{throw i(),new Error(gN+"")}),Bs(e,"composedPath",()=>{throw new Error(vN+"")})}function xN(n){let e=n.getEvent(),t=n.getAction()?.element;t&&Bs(e,"currentTarget",t,{configurable:!0})}function Bs(n,e,t,{configurable:i=!1}={}){Object.defineProperty(n,e,{value:t,configurable:i})}function rb(n,e){n.ecrd(t=>{e.dispatch(t)},nb.I_AM_THE_JSACTION_FRAMEWORK)}function MN(n){return n?.q??[]}function SN(n){n&&(WS(n.c,n.et,n.h),WS(n.c,n.etc,n.h,!0))}function WS(n,e,t,i){for(let r=0;r<e.length;r++)n.removeEventListener(e[r],t,i)}var bN=!1,sb=(()=>{class n{static MOUSE_SPECIAL_SUPPORT=bN;containerManager;eventHandlers={};browserEventTypeToExtraEventTypes={};dispatcher=null;queuedEventInfos=[];constructor(t){this.containerManager=t}handleEvent(t,i,r){let s=dN(t,i,i.target,r,Date.now());this.handleEventInfo(s)}handleEventInfo(t){if(!this.dispatcher){KS(t,!0),this.queuedEventInfos?.push(t);return}this.dispatcher(t)}addEvent(t,i,r){if(t in this.eventHandlers||!this.containerManager||!n.MOUSE_SPECIAL_SUPPORT&&Y1.indexOf(t)>=0)return;let s=(a,c,l)=>{this.handleEvent(a,c,l)};this.eventHandlers[t]=s;let o=J1(i||t);if(o!==t){let a=this.browserEventTypeToExtraEventTypes[o]||[];a.push(t),this.browserEventTypeToExtraEventTypes[o]=a}this.containerManager.addEventListener(o,a=>c=>{s(t,c,a)},r)}replayEarlyEvents(t=window._ejsa){t&&(this.replayEarlyEventInfos(t.q),SN(t),delete window._ejsa)}replayEarlyEventInfos(t){for(let i=0;i<t.length;i++){let r=t[i],s=this.getEventTypesForBrowserEventType(r.eventType);for(let o=0;o<s.length;o++){let a=tb(r);Bv(a,s[o]),this.handleEventInfo(a)}}}getEventTypesForBrowserEventType(t){let i=[];return this.eventHandlers[t]&&i.push(t),this.browserEventTypeToExtraEventTypes[t]&&i.push(...this.browserEventTypeToExtraEventTypes[t]),i}handler(t){return this.eventHandlers[t]}cleanUp(){this.containerManager?.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(t,i){this.ecrd(t,i)}ecrd(t,i){if(this.dispatcher=t,this.queuedEventInfos?.length){for(let r=0;r<this.queuedEventInfos.length;r++)this.handleEventInfo(this.queuedEventInfos[r]);this.queuedEventInfos=null}}}return n})();function ob(n,e=window){return MN(e._ejsas?.[n])}function Hv(n,e=window){e._ejsas&&(e._ejsas[n]=void 0)}var pb=Symbol("InputSignalNode#UNSET"),XN=Et(ue({},Ql),{transformFn:void 0,applyValueToInputSignal(n,e){mo(n,e)}});function mb(n,e){let t=Object.create(XN);t.value=n,t.transformFn=e?.transform;function i(){if(Ha(t),t.value===pb){let r=null;throw new ge(-950,r)}return t.value}return i[wn]=t,i}var nf=class{attributeName;constructor(e){this.attributeName=e}__NG_ELEMENT_ID__=()=>Sc(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},YN=new Ee("");YN.__NG_ELEMENT_ID__=n=>{let e=dn();if(e===null)throw new ge(204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new ge(204,!1)};function ab(n,e){return mb(n,e)}function ZN(n){return mb(pb,n)}var gb=(ab.required=ZN,ab);var zv=new Ee(""),JN=new Ee("");function Bc(n){return!n.moduleRef}function KN(n){let e=Bc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Nt);return t.run(()=>{Bc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Rn),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),Bc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(zv);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(zv);o.add(s),n.moduleRef.onDestroy(()=>{pc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return eP(i,t,()=>{let s=e.get(yi),o=s.add(),a=e.get(xv);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(Nv,Fc);if(kS(c||Fc),!e.get(JN,!0))return Bc(n)?e.get(Nn):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Bc(n)){let u=e.get(Nn);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return QN?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>void s.remove(o))})})}var QN;function eP(n,e,t){try{let i=t();return Pc(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var ef=null;function tP(n=[],e){return Bn.create({name:e,providers:[{provide:tc,useValue:"platform"},{provide:zv,useValue:new Set([()=>ef=null])},...n]})}function nP(n=[]){if(ef)return ef;let e=tP(n);return ef=e,RS(),iP(e),e}function iP(n){let e=n.get(yd,null);un(n,()=>{e?.forEach(t=>t())})}var Vc=(()=>{class n{static __NG_ELEMENT_ID__=rP}return n})();function rP(n){return sP(dn(),lt(),(n&16)===16)}function sP(n,e,t){if(sr(n)&&!t){let i=oi(n.index,e);return new Lr(i,i)}else if(n.type&175){let i=e[En];return new Lr(i,e)}return null}var Gv=class{constructor(){}supports(e){return fv(e)}create(e){return new jv(e)}},oP=(n,e)=>e,jv=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||oP}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<cb(i,r,s)?t:i,a=cb(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<s.length?s[f]:s[f]=0,g=h+f;u<=g&&g<l&&(s[f]=h+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!fv(e))throw new ge(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,rS(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Wv(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new rf),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new rf),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Wv=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},$v=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},rf=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new $v,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function cb(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function lb(){return new qv([new Gv])}var qv=(()=>{class n{factories;static \u0275prov=Ae({token:n,providedIn:"root",factory:lb});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:()=>{let i=$(n,{optional:!0,skipSelf:!0});return n.create(t,i||lb())}}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new ge(901,!1)}}return n})();function vb(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;ut(8);try{let s=r?.injector??nP(i),o=[VS({}),{provide:Ni,useExisting:Iv},xE,...t||[]],a=new Ec({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return KN({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{ut(9)}}var Qd=new WeakSet,ub="",tf=[];function db(n){return n.get(Gg,Wx)}function yb(){let n=[{provide:Gg,useFactory:()=>{let e=!0;{let t=$(Bi);e=!!window._ejsas?.[t]}return e&&Vi("NgEventReplay"),e}}];return n.push({provide:ni,useValue:()=>{let e=$(Nn),{injector:t}=e;if(!Qd.has(e)){let i=$(jg);if(db(t)){Qx();let r=t.get(Bi),s=Jx(r,(o,a,c)=>{o.nodeType===Node.ELEMENT_NODE&&(qx(o,a,c),Xx(o,i))});e.onDestroy(s)}}},multi:!0},{provide:Ur,useFactory:()=>{let e=$(Nn),{injector:t}=e;return()=>{if(!db(t)||Qd.has(e))return;Qd.add(e);let i=t.get(Bi);e.onDestroy(()=>{Qd.delete(e),Hv(i)}),e.whenStable().then(()=>{if(e.destroyed)return;let r=t.get(Zx);aP(r,t);let s=t.get(jg);s.get(ub)?.forEach(Yx),s.delete(ub);let o=r.instance;oM(t)?e.onDestroy(()=>o.cleanUp()):o.cleanUp()})}},multi:!0}),n}var aP=(n,e)=>{let t=e.get(Bi),i=window._ejsas[t],r=n.instance=new sb(new Jd(i.c));for(let a of i.et)r.addEvent(a);for(let a of i.etc)r.addEvent(a);let s=ob(t);r.replayEarlyEventInfos(s),Hv(t);let o=new Kd(a=>{cP(e,a,a.currentTarget)});rb(r,o)};function cP(n,e,t){let i=(t&&t.getAttribute(Tc))??"";/d\d+/.test(i)?lP(i,n,e,t):e.eventPhase===Vv.REPLAY&&Wg(e,t)}function lP(n,e,t,i){tf.push({event:t,currentTarget:i}),OS(e,n,uP)}function uP(n){let e=[...tf],t=new Set(n);tf=[];for(let{event:i,currentTarget:r}of e){let s=r.getAttribute(Tc);t.has(s)?Wg(i,r):tf.push({event:i,currentTarget:r})}}var fb=!1;function dP(){fb||(fb=!0,iM(),LS(),BS(),FS(),xS(),fS(),ZM(),IM())}function fP(n){return n.whenStable()}function _b(){let n=[{provide:wc,useFactory:()=>{let e=!0;return e=!!$(Rs,{optional:!0})?.get($g,null),e&&Vi("NgHydration"),e}},{provide:ni,useValue:()=>{$M(!1),$(wc)&&(lM(bc()),dP())},multi:!0}];return n.push({provide:zg,useFactory:()=>$(wc)},{provide:Ur,useFactory:()=>{if($(wc)){let e=$(Nn);return()=>{fP(e).then(()=>{e.destroyed||dv(e)})}}return()=>{}},multi:!0}),gi(n)}function sf(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var Mb=null;function fr(){return Mb}function Xv(n){Mb??=n}var Hc=class{},Yv=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>$(Sb),providedIn:"platform"})}return n})();var Sb=(()=>{class n extends Yv{_location;_history;_doc=$(qt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return fr().getBaseHref(this._doc)}onPopState(t){let i=fr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=fr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function bb(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function Eb(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Hr(n){return n&&n[0]!=="?"?`?${n}`:n}var Zo=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>$(Tb),providedIn:"root"})}return n})(),wb=new Ee(""),Tb=(()=>{class n extends Zo{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??$(qt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return bb(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Hr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Hr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Hr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ge(Yv),Ge(wb,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jo=(()=>{class n{_subject=new jt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=mP(Eb(xb(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Hr(i))}normalize(t){return n.stripTrailingSlash(pP(this._basePath,xb(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Hr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Hr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Hr;static joinWithSlash=bb;static stripTrailingSlash=Eb;static \u0275fac=function(i){return new(i||n)(Ge(Zo))};static \u0275prov=Ae({token:n,factory:()=>hP(),providedIn:"root"})}return n})();function hP(){return new Jo(Ge(Zo))}function pP(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function xb(n){return n.replace(/\/index.html$/,"")}function mP(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var of=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},af=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new of(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),Cb(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Cb(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(an(Fr),an(Ds),an(qv))};static \u0275dir=kr({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Cb(n,e){n.context.$implicit=e.item}var Ko=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Xo({type:n});static \u0275inj=vs({})}return n})();function Zv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var zc=class{};var Db="browser";var lf=new Ee(""),ty=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new ge(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ge(lf),Ge(Nt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),Gc=class{_doc;constructor(e){this._doc=e}manager},Jv="ng-app-id";function Ib(n){for(let e of n)e.remove()}function Rb(n,e){let t=e.createElement("style");return t.textContent=n,t}function gP(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Jv}="${e}"],link[${Jv}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Jv),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Qv(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var ny=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,gP(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Rb);i?.forEach(r=>this.addUsage(r,this.external,Qv))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Ib(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ib(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Rb(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Qv(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ge(qt),Ge(Bi),Ge(_d,8),Ge($o))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),Kv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},iy=/%COMP%/g;var Pb="%COMP%",vP=`_nghost-${Pb}`,yP=`_ngcontent-${Pb}`,_P=!0,EP=new Ee("",{providedIn:"root",factory:()=>_P});function xP(n){return yP.replace(iy,n)}function MP(n){return vP.replace(iy,n)}function Ob(n,e){return e.map(t=>t.replace(iy,n))}var ry=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new jc(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof cf?r.applyToHost(t):r instanceof Wc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case lr.Emulated:s=new cf(c,l,i,this.appId,u,o,a,d,f);break;case lr.ShadowDom:return new ey(c,l,t,i,o,a,this.nonce,d,f);default:s=new Wc(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ge(ty),Ge(ny),Ge(Bi),Ge(EP),Ge(qt),Ge($o),Ge(Nt),Ge(_d),Ge(Os,8))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),jc=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Kv[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Nb(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Nb(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ge(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Kv[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Kv[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Ps.DashCase|Ps.Important)?e.style.setProperty(t,i,r&Ps.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Ps.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=fr().getGlobalEventTarget(this.doc,e),!e))throw new ge(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function Nb(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ey=class extends jc{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Ob(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Qv(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Wc=class extends jc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?Ob(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ad.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},cf=class extends Wc{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=xP(u),this.hostAttr=MP(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var uf=class n extends Hc{supportsDOMEvents=!0;static makeCurrent(){Xv(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=SP();return t==null?null:bP(t)}resetBaseElement(){$c=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Zv(document.cookie,e)}},$c=null;function SP(){return $c=$c||document.head.querySelector("base"),$c?$c.getAttribute("href"):null}function bP(n){return new URL(n,document.baseURI).pathname}var wP=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),Fb=(()=>{class n extends Gc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Ge(qt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})(),Lb=["alt","control","meta","shift"],TP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},CP={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},kb=(()=>{class n extends Gc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fr().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),Lb.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=TP[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Lb.forEach(o=>{if(o!==r){let a=CP[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ge(qt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac})}return n})();function sy(n,e,t){let i=ue({rootComponent:n,platformRef:t?.platformRef},DP(e));return vb(i)}function DP(n){return{appProviders:[...PP,...n?.providers??[]],platformProviders:NP}}function AP(){uf.makeCurrent()}function IP(){return new mi}function RP(){return Bg(document),document}var NP=[{provide:$o,useValue:Db},{provide:yd,useValue:AP,multi:!0},{provide:qt,useFactory:RP}];var PP=[{provide:tc,useValue:"root"},{provide:mi,useFactory:IP},{provide:lf,useClass:Fb,multi:!0,deps:[qt]},{provide:lf,useClass:kb,multi:!0,deps:[qt]},ry,ny,ty,{provide:As,useExisting:ry},{provide:zc,useClass:wP},[]];var qc=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=t.slice(i+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var OP="X-Request-URL",LP="text/plain",FP="application/json",$X=`${FP}, ${LP}, */*`;var ay=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ay||{}),oy=class{headers;status;statusText;url;ok;type;redirected;constructor(e,t=200,i="OK"){this.headers=e.headers||new qc,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.redirected=e.redirected,this.ok=this.status>=200&&this.status<300}};var df=class n extends oy{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=ay.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0,redirected:e.redirected??this.redirected})}};var Ub=new Ee("");var qX=RegExp(`^${OP}:`,"m");var kP=new Ee(""),UP="b",BP="h",VP="s",HP="st",zP="u",GP="rt",cy=new Ee(""),jP=["GET","HEAD"];function WP(n,e){let h=$(cy),{isCacheActive:t}=h,i=t0(h,["isCacheActive"]),{transferCache:r,method:s}=n;if(!t||r===!1||s==="POST"&&!i.includePostRequests&&!r||s!=="POST"&&!jP.includes(s)||!i.includeRequestsWithAuthHeaders&&$P(n)||i.filter?.(n)===!1)return e(n);let o=$(Rs);if($(kP,{optional:!0}))throw new ge(2803,!1);let c=n.url,l=qP(n,c),u=o.get(l,null),d=i.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(d=r.includeHeaders),u){let{[UP]:g,[GP]:v,[BP]:m,[VP]:p,[HP]:b,[zP]:w}=u,x=g;switch(v){case"arraybuffer":x=new TextEncoder().encode(g).buffer;break;case"blob":x=new Blob([g]);break}let C=new qc(m);return Pe(new df({body:x,headers:C,status:p,statusText:b,url:w}))}return e(n)}function $P(n){return n.headers.has("authorization")||n.headers.has("proxy-authorization")}function Bb(n){return[...n.keys()].sort().map(e=>`${e}=${n.getAll(e)}`).join("&")}function qP(n,e){let{params:t,method:i,responseType:r}=n,s=Bb(t),o=n.serializeBody();o instanceof URLSearchParams?o=Bb(o):typeof o!="string"&&(o="");let a=[i,r,e,o,s].join("|"),c=XP(a);return c}function XP(n){let e=0;for(let t of n)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Vb(n){return[{provide:cy,useFactory:()=>(Vi("NgHttpTransferCache"),ue({isCacheActive:!0},n))},{provide:Ub,useValue:WP,multi:!0},{provide:Ur,multi:!0,useFactory:()=>{let e=$(Nn),t=$(cy);return()=>{e.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var Hb=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Ge(qt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ff=(function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n})(ff||{});function YP(n,e=[],t={}){return{\u0275kind:n,\u0275providers:e}}function zb(){return YP(ff.EventReplay,yb())}function Gb(...n){let e=[],t=new Set;for(let{\u0275providers:r,\u0275kind:s}of n)t.add(s),r.length&&e.push(r);let i=t.has(ff.HttpTransferCacheOptions);return gi([[],[],_b(),t.has(ff.NoHttpTransferCache)||i?[]:Vb({}),e])}var je="primary",cl=Symbol("RouteTitle"),hy=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function zs(n){return new hy(n)}function Jb(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function JP(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Hi(n[t],e[t]))return!1;return!0}function Hi(n,e){let t=n?py(n):void 0,i=e?py(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Kb(n[r],e[r]))return!1;return!0}function py(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Kb(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function Qb(n){return n.length>0?n[n.length-1]:null}function mr(n){return em(n)?n:Pc(n)?Ft(Promise.resolve(n)):Pe(n)}var KP={exact:tw,subset:nw},ew={exact:QP,subset:eO,ignored:()=>!0};function jb(n,e,t){return KP[t.paths](n.root,e.root,t.matrixParams)&&ew[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function QP(n,e){return Hi(n,e)}function tw(n,e,t){if(!Vs(n.segments,e.segments)||!mf(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!tw(n.children[i],e.children[i],t))return!1;return!0}function eO(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Kb(n[t],e[t]))}function nw(n,e,t){return iw(n,e,e.segments,t)}function iw(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Vs(r,t)||e.hasChildren()||!mf(r,t,i))}else if(n.segments.length===t.length){if(!Vs(n.segments,t)||!mf(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!nw(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Vs(n.segments,r)||!mf(n.segments,r,i)||!n.children[je]?!1:iw(n.children[je],e,s,i)}}function mf(n,e,t){return e.every((i,r)=>ew[t](n[r].parameters,i.parameters))}var Gi=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ft([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=zs(this.queryParams),this._queryParamMap}toString(){return iO.serialize(this)}},ft=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gf(this)}},zr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=zs(this.parameters),this._parameterMap}toString(){return sw(this)}};function tO(n,e){return Vs(n,e)&&n.every((t,i)=>Hi(t.parameters,e[i].parameters))}function Vs(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function nO(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===je&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==je&&(t=t.concat(e(r,i)))}),t}var ll=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>new Gs,providedIn:"root"})}return n})(),Gs=class{parse(e){let t=new gy(e);return new Gi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Xc(e.root,!0)}`,i=oO(e.queryParams),r=typeof e.fragment=="string"?`#${rO(e.fragment)}`:"";return`${t}${i}${r}`}},iO=new Gs;function gf(n){return n.segments.map(e=>sw(e)).join("/")}function Xc(n,e){if(!n.hasChildren())return gf(n);if(e){let t=n.children[je]?Xc(n.children[je],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==je&&i.push(`${r}:${Xc(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=nO(n,(i,r)=>r===je?[Xc(n.children[je],!1)]:[`${r}:${Xc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[je]!=null?`${gf(n)}/${t[0]}`:`${gf(n)}/(${t.join("//")})`}}function rw(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hf(n){return rw(n).replace(/%3B/gi,";")}function rO(n){return encodeURI(n)}function my(n){return rw(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function vf(n){return decodeURIComponent(n)}function Wb(n){return vf(n.replace(/\+/g,"%20"))}function sw(n){return`${my(n.path)}${sO(n.parameters)}`}function sO(n){return Object.entries(n).map(([e,t])=>`;${my(e)}=${my(t)}`).join("")}function oO(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${hf(t)}=${hf(r)}`).join("&"):`${hf(t)}=${hf(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var aO=/^[^\/()?;#]+/;function ly(n){let e=n.match(aO);return e?e[0]:""}var cO=/^[^\/()?;=#]+/;function lO(n){let e=n.match(cO);return e?e[0]:""}var uO=/^[^=?&#]+/;function dO(n){let e=n.match(uO);return e?e[0]:""}var fO=/^[^&#]+/;function hO(n){let e=n.match(fO);return e?e[0]:""}var gy=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ft([],{}):new ft([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[je]=new ft(e,t)),i}parseSegment(){let e=ly(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ge(4009,!1);return this.capture(e),new zr(vf(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=lO(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=ly(this.remaining);r&&(i=r,this.capture(i))}e[vf(t)]=vf(i)}parseQueryParam(e){let t=dO(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=hO(this.remaining);o&&(i=o,this.capture(i))}let r=Wb(t),s=Wb(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=ly(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ge(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=je);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[je]:new ft([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ge(4011,!1)}};function ow(n){return n.segments.length>0?new ft([],{[je]:n}):n}function aw(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=aw(r);if(i===je&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ft(n.segments,e);return pO(t)}function pO(n){if(n.numberOfChildren===1&&n.children[je]){let e=n.children[je];return new ft(n.segments.concat(e.segments),e.children)}return n}function Gr(n){return n instanceof Gi}function cw(n,e,t=null,i=null){let r=lw(n);return uw(r,e,t,i)}function lw(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ft(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=ow(i);return e??r}function uw(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return uy(r,r,r,t,i);let s=mO(e);if(s.toRoot())return uy(r,r,new ft([],{}),t,i);let o=gO(s,r,n),a=o.processChildren?Zc(o.segmentGroup,o.index,s.commands):fw(o.segmentGroup,o.index,s.commands);return uy(r,o.segmentGroup,a,t,i)}function yf(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Qc(n){return typeof n=="object"&&n!=null&&n.outlets}function uy(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=dw(n,e,t);let a=ow(aw(o));return new Gi(a,s,r)}function dw(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=dw(s,e,t)}),new ft(n.segments,i)}var _f=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&yf(i[0]))throw new ge(4003,!1);let r=i.find(Qc);if(r&&r!==Qb(i))throw new ge(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function mO(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new _f(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new _f(t,e,i)}var ta=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function gO(n,e,t){if(n.isAbsolute)return new ta(e,!0,0);if(!t)return new ta(e,!1,NaN);if(t.parent===null)return new ta(t,!0,0);let i=yf(n.commands[0])?0:1,r=t.segments.length-1+i;return vO(t,r,n.numberOfDoubleDots)}function vO(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new ge(4005,!1);r=i.segments.length}return new ta(i,!1,r-s)}function yO(n){return Qc(n[0])?n[0].outlets:{[je]:n}}function fw(n,e,t){if(n??=new ft([],{}),n.segments.length===0&&n.hasChildren())return Zc(n,e,t);let i=_O(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ft(n.segments.slice(0,i.pathIndex),{});return s.children[je]=new ft(n.segments.slice(i.pathIndex),n.children),Zc(s,0,r)}else return i.match&&r.length===0?new ft(n.segments,{}):i.match&&!n.hasChildren()?vy(n,e,t):i.match?Zc(n,0,r):vy(n,e,t)}function Zc(n,e,t){if(t.length===0)return new ft(n.segments,{});{let i=yO(t),r={};if(Object.keys(i).some(s=>s!==je)&&n.children[je]&&n.numberOfChildren===1&&n.children[je].segments.length===0){let s=Zc(n.children[je],e,t);return new ft(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=fw(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ft(n.segments,r)}}function _O(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Qc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!qb(c,l,o))return s;i+=2}else{if(!qb(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function vy(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Qc(s)){let c=EO(s.outlets);return new ft(i,c)}if(r===0&&yf(t[0])){let c=n.segments[e];i.push(new zr(c.path,$b(t[0]))),r++;continue}let o=Qc(s)?s.outlets[je]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&yf(a)?(i.push(new zr(o,$b(a))),r+=2):(i.push(new zr(o,{})),r++)}return new ft(i,{})}function EO(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=vy(new ft([],{}),0,i))}),e}function $b(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function qb(n,e,t){return n==t.path&&Hi(e,t.parameters)}var Jc="imperative",nn=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(nn||{}),qn=class{id;url;constructor(e,t){this.id=e,this.url=t}},js=class extends qn{type=nn.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},xi=class extends qn{urlAfterRedirects;type=nn.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Mn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(Mn||{}),el=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(el||{}),zi=class extends qn{reason;code;type=nn.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},hr=class extends qn{reason;code;type=nn.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},ia=class extends qn{error;target;type=nn.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},tl=class extends qn{urlAfterRedirects;state;type=nn.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ef=class extends qn{urlAfterRedirects;state;type=nn.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xf=class extends qn{urlAfterRedirects;state;shouldActivate;type=nn.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Mf=class extends qn{urlAfterRedirects;state;type=nn.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Sf=class extends qn{urlAfterRedirects;state;type=nn.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bf=class{route;type=nn.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},wf=class{route;type=nn.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Tf=class{snapshot;type=nn.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cf=class{snapshot;type=nn.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Df=class{snapshot;type=nn.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Af=class{snapshot;type=nn.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var nl=class{},ra=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function xO(n){return!(n instanceof nl)&&!(n instanceof ra)}function MO(n,e){return n.providers&&!n._injector&&(n._injector=qo(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Ei(n){return n.outlet||je}function SO(n,e){let t=n.filter(i=>Ei(i)===e);return t.push(...n.filter(i=>Ei(i)!==e)),t}function aa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var If=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return aa(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ca(this.rootInjector)}},ca=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new If(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Ge(Wt))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rf=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=yy(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=yy(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=_y(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return _y(e,this._root).map(t=>t.value)}};function yy(n,e){if(n===e.value)return e;for(let t of e.children){let i=yy(n,t);if(i)return i}return null}function _y(n,e){if(n===e.value)return[e];for(let t of e.children){let i=_y(n,t);if(i.length)return i.unshift(e),i}return[]}var $n=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ea(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var il=class extends Rf{snapshot;constructor(e,t){super(e),this.snapshot=t,Cy(this,e)}toString(){return this.snapshot.toString()}};function hw(n){let e=bO(n),t=new sn([new zr("",{})]),i=new sn({}),r=new sn({}),s=new sn({}),o=new sn(""),a=new pr(t,i,s,o,r,je,n,e.root);return a.snapshot=e.root,new il(new $n(a,[]),e)}function bO(n){let e={},t={},i={},s=new Hs([],e,i,"",t,je,n,null,{});return new rl("",new $n(s,[]))}var pr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(rt(l=>l[cl]))??Pe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>zs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>zs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Nf(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ue(ue({},e.params),n.params),data:ue(ue({},e.data),n.data),resolve:ue(ue(ue(ue({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ue({},n.params),data:ue({},n.data),resolve:ue(ue({},n.data),n._resolvedData??{})},r&&mw(r)&&(i.resolve[cl]=r.title),i}var Hs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[cl]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=zs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=zs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},rl=class extends Rf{url;constructor(e,t){super(t),this.url=e,Cy(this,t)}toString(){return pw(this._root)}};function Cy(n,e){e.value._routerState=n,e.children.forEach(t=>Cy(n,t))}function pw(n){let e=n.children.length>0?` { ${n.children.map(pw).join(", ")} } `:"";return`${n.value}${e}`}function dy(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Hi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Hi(e.params,t.params)||n.paramsSubject.next(t.params),JP(e.url,t.url)||n.urlSubject.next(t.url),Hi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Ey(n,e){let t=Hi(n.params,e.params)&&tO(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Ey(n.parent,e.parent))}function mw(n){return typeof n.title=="string"||n.title===null}var gw=new Ee(""),ul=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=je;activateEvents=new fn;deactivateEvents=new fn;attachEvents=new fn;detachEvents=new fn;routerOutletData=gb(void 0);parentContexts=$(ca);location=$(Fr);changeDetector=$(Vc);inputBinder=$(Ff,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ge(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ge(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ge(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new ge(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new xy(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=kr({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Is]})}return n})(),xy=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===pr?this.route:e===ca?this.childContexts:e===gw?this.outletData:this.parent.get(e,t)}},Ff=new Ee("");var Dy=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Xt({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&hn(0,"router-outlet")},dependencies:[ul],encapsulation:2})}return n})();function Ay(n){let e=n.children&&n.children.map(Ay),t=e?Et(ue({},n),{children:e}):ue({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==je&&(t.component=Dy),t}function wO(n,e,t){let i=sl(n,e._root,t?t._root:void 0);return new il(i,e)}function sl(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=TO(n,e,t);return new $n(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>sl(n,a)),o}}let i=CO(e.value),r=e.children.map(s=>sl(n,s));return new $n(i,r)}}function TO(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return sl(n,i,r);return sl(n,i)})}function CO(n){return new pr(new sn(n.url),new sn(n.params),new sn(n.queryParams),new sn(n.fragment),new sn(n.data),n.outlet,n.component,n)}var sa=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},vw="ngNavigationCancelingError";function Pf(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Gr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=yw(!1,Mn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function yw(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[vw]=!0,t.cancellationCode=e,t}function DO(n){return _w(n)&&Gr(n.url)}function _w(n){return!!n&&n[vw]}var AO=(n,e,t,i)=>rt(r=>(new My(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),My=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),dy(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ea(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ea(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ea(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ea(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Af(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Cf(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(dy(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),dy(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Of=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},na=class{component;route;constructor(e,t){this.component=e,this.route=t}};function IO(n,e,t){let i=n._root,r=e?e._root:null;return Yc(i,r,t,[i.value])}function RO(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function la(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!vm(n)?n:e.get(n):i}function Yc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ea(e);return n.children.forEach(o=>{NO(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Kc(a,t.getContext(o),r)),r}function NO(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=PO(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Of(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Yc(n,e,a?a.children:null,i,r):Yc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new na(a.outlet.component,o))}else o&&Kc(e,a,r),r.canActivateChecks.push(new Of(i)),s.component?Yc(n,null,a?a.children:null,i,r):Yc(n,null,t,i,r);return r}function PO(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Vs(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Vs(n.url,e.url)||!Hi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ey(n,e)||!Hi(n.queryParams,e.queryParams);case"paramsChange":default:return!Ey(n,e)}}function Kc(n,e,t){let i=ea(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Kc(o,e.children.getContext(s),t):Kc(o,null,t):Kc(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new na(e.outlet.component,r)):t.canDeactivateChecks.push(new na(null,r)):t.canDeactivateChecks.push(new na(null,r))}function dl(n){return typeof n=="function"}function OO(n){return typeof n=="boolean"}function LO(n){return n&&dl(n.canLoad)}function FO(n){return n&&dl(n.canActivate)}function kO(n){return n&&dl(n.canActivateChild)}function UO(n){return n&&dl(n.canDeactivate)}function BO(n){return n&&dl(n.canMatch)}function Ew(n){return n instanceof Qi||n?.name==="EmptyError"}var pf=Symbol("INITIAL_VALUE");function oa(){return Dn(n=>vu(n.map(e=>e.pipe(tr(1),im(pf)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===pf)return pf;if(t===!1||VO(t))return t}return!0}),kn(e=>e!==pf),tr(1)))}function VO(n){return Gr(n)||n instanceof sa}function HO(n,e){return Vt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Pe(Et(ue({},t),{guardsResult:!0})):zO(o,i,r,n).pipe(Vt(a=>a&&OO(a)?GO(i,s,n,e):Pe(a)),rt(a=>Et(ue({},t),{guardsResult:a})))})}function zO(n,e,t,i){return Ft(n).pipe(Vt(r=>XO(r.component,r.route,t,e,i)),nr(r=>r!==!0,!0))}function GO(n,e,t,i){return Ft(e).pipe(fs(r=>wo(WO(r.route.parent,i),jO(r.route,i),qO(n,r.path,t),$O(n,r.route,t))),nr(r=>r!==!0,!0))}function jO(n,e){return n!==null&&e&&e(new Df(n)),Pe(!0)}function WO(n,e){return n!==null&&e&&e(new Tf(n)),Pe(!0)}function $O(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Pe(!0);let r=i.map(s=>qa(()=>{let o=aa(e)??t,a=la(s,o),c=FO(a)?a.canActivate(e,n):un(o,()=>a(e,n));return mr(c).pipe(nr())}));return Pe(r).pipe(oa())}function qO(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>RO(o)).filter(o=>o!==null).map(o=>qa(()=>{let a=o.guards.map(c=>{let l=aa(o.node)??t,u=la(c,l),d=kO(u)?u.canActivateChild(i,n):un(l,()=>u(i,n));return mr(d).pipe(nr())});return Pe(a).pipe(oa())}));return Pe(s).pipe(oa())}function XO(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Pe(!0);let o=s.map(a=>{let c=aa(e)??r,l=la(a,c),u=UO(l)?l.canDeactivate(n,e,t,i):un(c,()=>l(n,e,t,i));return mr(u).pipe(nr())});return Pe(o).pipe(oa())}function YO(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Pe(!0);let s=r.map(o=>{let a=la(o,n),c=LO(a)?a.canLoad(e,t):un(n,()=>a(e,t));return mr(c)});return Pe(s).pipe(oa(),xw(i))}function xw(n){return Zp(tn(e=>{if(typeof e!="boolean")throw Pf(n,e)}),rt(e=>e===!0))}function ZO(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Pe(!0);let s=r.map(o=>{let a=la(o,n),c=BO(a)?a.canMatch(e,t):un(n,()=>a(e,t));return mr(c)});return Pe(s).pipe(oa(),xw(i))}var ol=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},al=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Qo(n){return So(new ol(n))}function JO(n){return So(new ge(4e3,!1))}function KO(n){return So(yw(!1,Mn.GuardRejected))}var Sy=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Pe(i);if(r.numberOfChildren>1||!r.children[je])return JO(`${e.redirectTo}`);r=r.children[je]}}applyRedirectCommands(e,t,i,r,s){return QO(t,r,s).pipe(rt(o=>{if(o instanceof Gi)throw new al(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),e,i);if(o[0]==="/")throw new al(a);return a}))}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Gi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ft(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new ge(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function QO(n,e,t){if(typeof n=="string")return Pe(n);let i=n,{queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,params:l,data:u,title:d}=e;return mr(un(t,()=>i({params:l,data:u,queryParams:r,fragment:s,routeConfig:o,url:a,outlet:c,title:d})))}var by={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function eL(n,e,t,i,r){let s=Mw(n,e,t);return s.matched?(i=MO(e,i),ZO(i,e,t,r).pipe(rt(o=>o===!0?s:ue({},by)))):Pe(s)}function Mw(n,e,t){if(e.path==="**")return tL(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ue({},by):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||Jb)(t,n,e);if(!r)return ue({},by);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ue(ue({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function tL(n){return{matched:!0,parameters:n.length>0?Qb(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Xb(n,e,t,i){return t.length>0&&rL(n,t,i)?{segmentGroup:new ft(e,iL(i,new ft(t,n.children))),slicedSegments:[]}:t.length===0&&sL(n,t,i)?{segmentGroup:new ft(n.segments,nL(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ft(n.segments,n.children),slicedSegments:t}}function nL(n,e,t,i){let r={};for(let s of t)if(kf(n,e,s)&&!i[Ei(s)]){let o=new ft([],{});r[Ei(s)]=o}return ue(ue({},i),r)}function iL(n,e){let t={};t[je]=e;for(let i of n)if(i.path===""&&Ei(i)!==je){let r=new ft([],{});t[Ei(i)]=r}return t}function rL(n,e,t){return t.some(i=>kf(n,e,i)&&Ei(i)!==je)}function sL(n,e,t){return t.some(i=>kf(n,e,i))}function kf(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function oL(n,e,t){return e.length===0&&!n.children[t]}var wy=class{};function aL(n,e,t,i,r,s,o="emptyOnly"){return new Ty(n,e,t,i,r,o,s).recognize()}var cL=31,Ty=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Sy(this.urlSerializer,this.urlTree)}noMatchError(e){return new ge(4002,`'${e.segmentGroup}'`)}recognize(){let e=Xb(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(({children:t,rootSnapshot:i})=>{let r=new $n(i,t),s=new rl("",r),o=cw(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Hs([],Object.freeze({}),Object.freeze(ue({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),je,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,je,t).pipe(rt(i=>({children:i,rootSnapshot:t})),er(i=>{if(i instanceof al)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ol?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(rt(o=>o instanceof $n?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ft(s).pipe(fs(o=>{let a=i.children[o],c=SO(t,o);return this.processSegmentGroup(e,c,a,o,r)}),nm((o,a)=>(o.push(...a),o)),Ar(null),tm(),Vt(o=>{if(o===null)return Qo(i);let a=Sw(o);return lL(a),Pe(a)}))}processSegment(e,t,i,r,s,o,a){return Ft(t).pipe(fs(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(er(l=>{if(l instanceof ol)return Pe(null);throw l}))),nr(c=>!!c),er(c=>{if(Ew(c))return oL(i,r,s)?Pe(new wy):Qo(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Ei(i)!==o&&(o===je||!kf(r,s,i))?Qo(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Qo(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=Mw(t,r,s);if(!c)return Qo(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>cL&&(this.allowRedirects=!1));let h=new Hs(s,l,Object.freeze(ue({},this.urlTree.queryParams)),this.urlTree.fragment,Yb(r),Ei(r),r.component??r._loadedComponent??null,r,Zb(r)),g=Nf(h,a,this.paramsInheritanceStrategy);return h.params=Object.freeze(g.params),h.data=Object.freeze(g.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e).pipe(Dn(m=>this.applyRedirects.lineralizeSegments(r,m)),Vt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=eL(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Dn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Dn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Hs(f,d,Object.freeze(ue({},this.urlTree.queryParams)),this.urlTree.fragment,Yb(i),Ei(i),i.component??i._loadedComponent??null,i,Zb(i)),v=Nf(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:m,slicedSegments:p}=Xb(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(rt(w=>new $n(g,w)));if(l.length===0&&p.length===0)return Pe(new $n(g,[]));let b=Ei(i)===s;return this.processSegment(u,l,m,p,b?je:s,!0,g).pipe(rt(w=>new $n(g,w instanceof $n?[w]:[])))}))):Qo(t)))}getChildConfig(e,t,i){return t.children?Pe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Pe({routes:t._loadedRoutes,injector:t._loadedInjector}):YO(e,t,i,this.urlSerializer).pipe(Vt(r=>r?this.configLoader.loadChildren(e,t).pipe(tn(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):KO(t))):Pe({routes:[],injector:e})}};function lL(n){n.sort((e,t)=>e.value.outlet===je?-1:t.value.outlet===je?1:e.value.outlet.localeCompare(t.value.outlet))}function uL(n){let e=n.value.routeConfig;return e&&e.path===""}function Sw(n){let e=[],t=new Set;for(let i of n){if(!uL(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Sw(i.children);e.push(new $n(i.value,r))}return e.filter(i=>!t.has(i))}function Yb(n){return n.data||{}}function Zb(n){return n.resolve||{}}function dL(n,e,t,i,r,s){return Vt(o=>aL(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:c})=>Et(ue({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function fL(n,e){return Vt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Pe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of bw(c))o.add(l);let a=0;return Ft(o).pipe(fs(c=>s.has(c)?hL(c,i,n,e):(c.data=Nf(c,c.parent,n).resolve,Pe(void 0))),tn(()=>a++),To(1),Vt(c=>a===o.size?Pe(t):Tn))})}function bw(n){let e=n.children.map(t=>bw(t)).flat();return[n,...e]}function hL(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!mw(r)&&(s[cl]=r.title),qa(()=>(n.data=Nf(n,n.parent,t).resolve,pL(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=ue(ue({},n.data),o),null)))))}function pL(n,e,t,i){let r=py(n);if(r.length===0)return Pe({});let s={};return Ft(r).pipe(Vt(o=>mL(n[o],e,t,i).pipe(nr(),tn(a=>{if(a instanceof sa)throw Pf(new Gs,a);s[o]=a}))),To(1),rt(()=>s),er(o=>Ew(o)?Tn:So(o)))}function mL(n,e,t,i){let r=aa(e)??i,s=la(n,r),o=s.resolve?s.resolve(e,t):un(r,()=>s(e,t));return mr(o)}function fy(n){return Dn(e=>{let t=n(e);return t?Ft(t).pipe(rt(()=>e)):Pe(e)})}var Iy=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===je);return i}getResolvedTitleForRoute(t){return t.data[cl]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>$(ww),providedIn:"root"})}return n})(),ww=(()=>{class n extends Iy{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Ge(Hb))};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ua=new Ee("",{providedIn:"root",factory:()=>({})}),fl=new Ee(""),Tw=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=$(Av);loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Pe(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=mr(un(t,()=>i.loadComponent())).pipe(rt(Dw),Dn(Aw),tn(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Xa(()=>{this.componentLoaders.delete(i)})),s=new Mo(r,()=>new jt).pipe(xo());return this.componentLoaders.set(i,s),s}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Pe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=Cw(i,this.compiler,t,this.onLoadEndListener).pipe(Xa(()=>{this.childrenLoaders.delete(i)})),o=new Mo(s,()=>new jt).pipe(xo());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Cw(n,e,t,i){return mr(un(t,()=>n.loadChildren())).pipe(rt(Dw),Dn(Aw),Vt(r=>r instanceof zd||Array.isArray(r)?Pe(r):Ft(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(fl,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ay),injector:s}}))}function gL(n){return n&&typeof n=="object"&&"default"in n}function Dw(n){return gL(n)?n.default:n}function Aw(n){return Pe(n)}var Uf=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>$(vL),providedIn:"root"})}return n})(),vL=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Iw=new Ee("");var Rw=new Ee(""),Nw=(()=>{class n{currentNavigation=cr(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new jt;transitionAbortWithErrorSubject=new jt;configLoader=$(Tw);environmentInjector=$(Wt);destroyRef=$(ar);urlSerializer=$(ll);rootContexts=$(ca);location=$(Jo);inputBindingEnabled=$(Ff,{optional:!0})!==null;titleStrategy=$(Iy);options=$(ua,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=$(Uf);createViewTransition=$(Iw,{optional:!0});navigationErrorHandler=$(Rw,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Pe(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new bf(r)),i=r=>this.events.next(new wf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;dr(()=>{this.transitions?.next(Et(ue({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:i}))})}setupNavigations(t){return this.transitions=new sn(null),this.transitions.pipe(kn(i=>i!==null),Dn(i=>{let r=!1;return Pe(i).pipe(Dn(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Mn.SupersededByNewNavigation),Tn;this.currentTransition=i,this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?Et(ue({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>s.abortController.abort()});let o=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!o&&a!=="reload")return this.events.next(new hr(s.id,this.urlSerializer.serialize(s.rawUrl),"",el.IgnoredSameUrlNavigation)),s.resolve(!1),Tn;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Pe(s).pipe(Dn(c=>(this.events.next(new js(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Tn:Promise.resolve(c))),dL(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),tn(c=>{i.targetSnapshot=c.targetSnapshot,i.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=c.urlAfterRedirects,u));let l=new tl(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(o&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:c,extractedUrl:l,source:u,restoredState:d,extras:f}=s,h=new js(c,this.urlSerializer.serialize(l),u,d);this.events.next(h);let g=hw(this.rootComponentType).snapshot;return this.currentTransition=i=Et(ue({},s),{targetSnapshot:g,urlAfterRedirects:l,extras:Et(ue({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(v=>(v.finalUrl=l,v)),Pe(i)}else return this.events.next(new hr(s.id,this.urlSerializer.serialize(s.extractedUrl),"",el.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Tn}),tn(s=>{let o=new Ef(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(o)}),rt(s=>(this.currentTransition=i=Et(ue({},s),{guards:IO(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i)),HO(this.environmentInjector,s=>this.events.next(s)),tn(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Pf(this.urlSerializer,s.guardsResult);let o=new xf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(o)}),kn(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",Mn.GuardRejected),!1)),fy(s=>{if(s.guards.canActivateChecks.length!==0)return Pe(s).pipe(tn(o=>{let a=new Mf(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),Dn(o=>{let a=!1;return Pe(o).pipe(fL(this.paramsInheritanceStrategy,this.environmentInjector),tn({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(o,"",Mn.NoDataFromResolver)}}))}),tn(o=>{let a=new Sf(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}))}),fy(s=>{let o=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=aa(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(tn(u=>{a.component=u}),rt(()=>{})))}for(let l of a.children)c.push(...o(l));return c};return vu(o(s.targetSnapshot.root)).pipe(Ar(null),tr(1))}),fy(()=>this.afterPreactivation()),Dn(()=>{let{currentSnapshot:s,targetSnapshot:o}=i,a=this.createViewTransition?.(this.environmentInjector,s.root,o.root);return a?Ft(a).pipe(rt(()=>i)):Pe(i)}),rt(s=>{let o=wO(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=i=Et(ue({},s),{targetRouterState:o}),this.currentNavigation.update(a=>(a.targetRouterState=o,a)),i}),tn(()=>{this.events.next(new nl)}),AO(this.rootContexts,t.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),tr(1),_u(new ot(s=>{let o=i.abortController.signal,a=()=>s.next();return o.addEventListener("abort",a),()=>o.removeEventListener("abort",a)}).pipe(kn(()=>!r&&!i.targetRouterState),tn(()=>{this.cancelNavigationTransition(i,i.abortController.signal.reason+"",Mn.Aborted)}))),tn({next:s=>{r=!0,this.lastSuccessfulNavigation=dr(this.currentNavigation),this.events.next(new xi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{r=!0}}),_u(this.transitionAbortWithErrorSubject.pipe(tn(s=>{throw s}))),Xa(()=>{r||this.cancelNavigationTransition(i,"",Mn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),er(s=>{if(this.destroyed)return i.resolve(!1),Tn;if(r=!0,_w(s))this.events.next(new zi(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),DO(s)?this.events.next(new ra(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let o=new ia(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let a=un(this.environmentInjector,()=>this.navigationErrorHandler?.(o));if(a instanceof sa){let{message:c,cancellationCode:l}=Pf(this.urlSerializer,a);this.events.next(new zi(i.id,this.urlSerializer.serialize(i.extractedUrl),c,l)),this.events.next(new ra(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(o),s}catch(a){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(a)}}return Tn}))}))}cancelNavigationTransition(t,i,r){let s=new zi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=dr(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yL(n){return n!==Jc}var Pw=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>$(_L),providedIn:"root"})}return n})(),Lf=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},_L=(()=>{class n extends Lf{static \u0275fac=(()=>{let t;return function(r){return(t||(t=vd(n)))(r||n)}})();static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ow=(()=>{class n{urlSerializer=$(ll);options=$(ua,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=$(Jo);urlHandlingStrategy=$(Uf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Gi;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Gi?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=hw(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:()=>$(EL),providedIn:"root"})}return n})(),EL=(()=>{class n extends Ow{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof js?this.updateStateMemento():t instanceof hr?this.commitTransition(i):t instanceof tl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof nl?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof zi&&t.code!==Mn.SupersededByNewNavigation&&t.code!==Mn.Redirect?this.restoreHistory(i):t instanceof ia?this.restoreHistory(i,!0):t instanceof xi&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=ue(ue({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=ue(ue({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=vd(n)))(r||n)}})();static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ry(n,e){n.events.pipe(kn(t=>t instanceof xi||t instanceof zi||t instanceof ia||t instanceof hr),rt(t=>t instanceof xi||t instanceof hr?0:(t instanceof zi?t.code===Mn.Redirect||t.code===Mn.SupersededByNewNavigation:!1)?2:1),kn(t=>t!==2),tr(1)).subscribe(()=>{e()})}var xL={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ML={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},da=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=$(Wd);stateManager=$(Ow);options=$(ua,{optional:!0})||{};pendingTasks=$(yi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=$(Nw);urlSerializer=$(ll);location=$(Jo);urlHandlingStrategy=$(Uf);injector=$(Wt);_events=new jt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=$(Pw);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=$(fl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!$(Ff,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Bt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=dr(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof zi&&i.code!==Mn.Redirect&&i.code!==Mn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof xi)this.navigated=!0;else if(i instanceof ra){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ue({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||yL(r.source)},o);this.scheduleNavigation(a,Jc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}xO(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Jc,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ue({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s).catch(c=>{this.disposed||this.injector.get(Rn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return dr(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ay),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ue(ue({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=lw(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return uw(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Gr(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Jc,null,i)}navigate(t,i={skipLocationChange:!1}){return SL(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ue({},xL):i===!1?r=ue({},ML):r=i,Gr(t))return jb(this.currentUrlTree,t,r);let s=this.parseUrl(t);return jb(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return Ry(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Ae({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function SL(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new ge(4008,!1)}var ji=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=cr(null);get href(){return dr(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new jt;applicationErrorHandler=$(Rn);options=$(ua,{optional:!0});constructor(t,i,r,s,o,a){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a,this.reactiveHref.set($(new nf("href"),{optional:!0}));let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let t=this.preserveFragment,i=r=>r==="merge"||r==="preserve";t||=i(this.queryParamsHandling),t||=!this.queryParamsHandling&&!i(this.options?.defaultQueryParamsHandling),t&&(this.subscription=this.router.events.subscribe(r=>{r instanceof xi&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Gr(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,s,o){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||i||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.reactiveHref.set(t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null)}applyAttributeValue(t,i){let r=this.renderer,s=this.el.nativeElement;i!==null?r.setAttribute(s,t,i):r.removeAttribute(s,t)}get urlTree(){return this.routerLinkInput===null?null:Gr(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(an(da),an(pr),Sc("tabindex"),an(Ic),an(ur),an(Zo))};static \u0275dir=kr({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Ls("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&$d("href",r.reactiveHref(),Yg)("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",sf],skipLocationChange:[2,"skipLocationChange","skipLocationChange",sf],replaceUrl:[2,"replaceUrl","replaceUrl",sf],routerLink:"routerLink"},features:[Is]})}return n})(),Ny=(()=>{class n{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new fn;constructor(t,i,r,s,o){this.router=t,this.element=i,this.renderer=r,this.cdr=s,this.link=o,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof xi&&this.update()})}ngAfterContentInit(){Pe(this.links.changes,Pe(null)).pipe(bo()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Ft(t).pipe(bo()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=wL(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?t.isActive(s,i):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||n)(an(da),an(ur),an(Ic),an(Vc),an(ji,8))};static \u0275dir=kr({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,s){if(i&1&&Cv(s,ji,5),i&2){let o;Fs(o=ks())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Is]})}return n})();function wL(n){return!!n.paths}var TL=new Ee("");function Py(n,...e){return gi([{provide:fl,multi:!0,useValue:n},[],{provide:pr,useFactory:CL,deps:[da]},{provide:Ur,multi:!0,useFactory:DL},e.map(t=>t.\u0275providers)])}function CL(n){return n.routerState.root}function DL(){let n=$(Bn);return e=>{let t=n.get(Nn);if(e!==t.components[0])return;let i=n.get(da),r=n.get(AL);n.get(IL)===1&&i.initialNavigation(),n.get(RL,null,{optional:!0})?.setUpPreloading(),n.get(TL,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var AL=new Ee("",{factory:()=>new jt}),IL=new Ee("",{providedIn:"root",factory:()=>1});var RL=new Ee("");var Bf=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-home"]],decls:21,vars:0,consts:[[1,"flex","flex-col","md:flex-row","bg-[#111]","bg-opacity-70","text-white"],[1,"flex","flex-col","justify-center","items-start","px-8","py-12","md:w-1/2"],[1,"text-5xl","font-bold","text-red-500","mb-4"],[1,"text-xl","text-gray-300","mb-6"],[1,"flex","items-center","gap-4"],["routerLink","/profile",1,"bg-red-500","hover:bg-red-600","text-white","font-semibold","px-6","py-2","rounded","transition"],["href","https://www.linkedin.com/in/poojitha-tundurthi-b10600236","target","_blank","rel","noopener noreferrer"],[1,"bg-[#0A66C2]","hover:bg-[#004182]","text-white","font-semibold","px-6","py-2","rounded","transition","duration-300","flex","items-center","gap-2"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["d",`M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
        2.24 5 5 5h14c2.76 0 5-2.24 
        5-5v-14c0-2.76-2.24-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.27c-.97 
        0-1.75-.79-1.75-1.76s.78-1.75 
        1.75-1.75 1.75.78 
        1.75 1.75-.78 1.76-1.75 
        1.76zm13.5 11.27h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 
        0-2.13 1.45-2.13 2.95v5.69h-3v-10h2.88v1.37h.04c.4-.75 
        1.37-1.54 2.83-1.54 3.03 
        0 3.59 1.99 3.59 4.58v5.59z`],[1,"md:w-1/2","relative","hidden","md:flex","justify-center","items-center","h-[650px]"],["src","poojitha.png","alt","Poojitha",1,"max-h-[650px]","w-auto","object-contain","z-10"],[1,"absolute","inset-0","bg-gradient-to-l","via-transparent","to-transparent","z-20"]],template:function(t,i){t&1&&(Ye(0,"div",0)(1,"div",1)(2,"h1",2),dt(3,"Hi, I am Poojitha"),Qe(),Ye(4,"p",3),dt(5,"I\u2019m a Frontend Developer who loves turning ideas into interactive, elegant, and high-performing web experiences. With over 4 years of experience building modern applications using Angular, AngularJS, RxJS, and NgRx, I blend creativity with clean code to craft interfaces that feel great to use. "),Qe(),Ye(6,"div",3),dt(7,"When I\u2019m not coding, you\u2019ll probably find me exploring new design trends, mentoring budding developers, or experimenting with ideas that merge art and technology"),Qe(),Ye(8,"div",3),dt(9,"Curious to know more? Check out my Profile to know more about me."),Qe(),Ye(10,"div",4)(11,"button",5),dt(12," Show Profile "),Qe(),Ye(13,"a",6)(14,"button",7),Lo(),Ye(15,"svg",8),hn(16,"path",9),Qe(),dt(17," LinkedIn "),Qe()()()(),Fo(),Ye(18,"div",10),hn(19,"img",11)(20,"div",12),Qe()())},dependencies:[ji],encapsulation:2})};var Vf=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-projects"]],decls:2,vars:0,template:function(t,i){t&1&&(Oc(0,"p"),dt(1,"projects works!"),Lc())},encapsulation:2})};var NL=["carousel"];function PL(n,e){if(n&1&&(Ye(0,"div",8),hn(1,"img",9),Ye(2,"div",10),dt(3),Qe()()),n&2){let t=e.$implicit;ci(),Wn("src",t.image,Cd),ci(2),Uc(t.title)}}var Hf=class n{projectData;carousel;scrollLeft(){this.carousel.nativeElement.scrollBy({left:-300,behavior:"smooth"})}scrollRight(){this.carousel.nativeElement.scrollBy({left:300,behavior:"smooth"})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-carousel"]],viewQuery:function(t,i){if(t&1&&kc(NL,5),t&2){let r;Fs(r=ks())&&(i.carousel=r.first)}},inputs:{projectData:"projectData"},decls:11,vars:2,consts:[["carousel",""],[1,"px-6","text-xl","text-gray-300"],[1,"relative"],[1,"absolute","left-2","top-[35%]","-translate-y-1/2","z-10","bg-gray-800","p-2","mx-5","rounded-full","shadow","hover:bg-gray-200",3,"click"],[1,"absolute","right-2","top-[35%]","-translate-y-1/2","z-10","bg-gray-800","p-2","mx-5","rounded-full","shadow","hover:bg-gray-200",3,"click"],[1,"overflow-x-auto","whitespace-nowrap","scroll-smooth","snap-x","snap-mandatory","px-4","pt-2","pb-7","mx-5","hide-scrollbar"],[1,"flex","gap-4"],["class","min-w-[225px] max-w-[225px] bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 snap-start",4,"ngFor","ngForOf"],[1,"min-w-[225px]","max-w-[225px]","bg-gray-800","rounded-lg","shadow-md","hover:scale-105","transition-transform","duration-300","snap-start"],["alt","Card",1,"w-full","h-32","object-cover","rounded-t-lg",3,"src"],[1,"p-2","text-gray-300","text-sm","font-semibold"]],template:function(t,i){if(t&1){let r=Tv();Ye(0,"h3",1),dt(1),Qe(),Ye(2,"div",2)(3,"button",3),Ls("click",function(){return cc(r),lc(i.scrollLeft())}),dt(4," \u25C0 "),Qe(),Ye(5,"button",4),Ls("click",function(){return cc(r),lc(i.scrollRight())}),dt(6," \u25B6 "),Qe(),Ye(7,"div",5,0)(9,"div",6),Gd(10,PL,4,2,"div",7),Qe()()()}t&2&&(ci(),Uc(i.projectData==null?null:i.projectData.description),ci(9),Wn("ngForOf",i.projectData==null?null:i.projectData.skills))},dependencies:[Ko,af],encapsulation:2})};function OL(n,e){if(n&1&&hn(0,"app-carousel",0),n&2){let t=e.$implicit;Wn("projectData",t)}}var zf=class n{projectSkills=[{description:"Core Frontend",skills:[{title:"HTML5 & CSS3",image:"html5-css3.jpg"},{title:"JavaScript",image:"js.png"},{title:"TypeScript",image:"ts.png"},{title:"ES6 \u2013 ES25",image:"es.png"},{title:"SCSS",image:"SCSS.webp"},{title:"Tailwind CSS",image:"tailwind.png"},{title:"D3.js",image:"d3.png"}]},{description:"Angular Ecosystem",skills:[{title:"Angular (v14\u201318+)",image:"angular.png"},{title:"RxJS",image:"rxjs.png"},{title:"NgRx",image:"ngrx.jpeg"},{title:"Angular Material",image:"angularMat.png"},{title:"MFE (module Federation)",image:"mfe.webp"}]},{description:"Testing Frameworks and Devop tools",skills:[{title:"Jasmine",image:"jas.jpeg"},{title:"Jest",image:"jest.png"},{title:"Karma",image:"karma.png"},{title:"Git",image:"git.jpg"},{title:"GitHub CI/CD",image:"github.jpg"},{title:"GitLab CI/CD",image:"gitlab.png"},{title:"AWS",image:"aws.png"},{title:"Webpack",image:"webpack.jpg"},{title:"SonarQube",image:"sonar.png"},{title:"Jenkins",image:"jenkins.png"}]}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-skills"]],decls:2,vars:0,consts:[[3,"projectData"]],template:function(t,i){t&1&&Sv(0,OL,1,1,"app-carousel",0,Mv),t&2&&bv(i.projectSkills)},dependencies:[Hf],styles:['body[_ngcontent-%COMP%]{overflow:hidden;--tw-bg-opacity: 1;background-color:rgb(11 12 42 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}body[_ngcontent-%COMP%]:before{content:"";position:fixed;inset:0;z-index:-1;background:url(/stars.png) repeat;animation:_ngcontent-%COMP%_twinkle 10s infinite linear;opacity:.6}@keyframes _ngcontent-%COMP%_twinkle{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}']})};var Gf=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-profile"]],decls:19,vars:0,consts:[[1,"flex","flex-col","md:flex-row","bg-[#111]","bg-opacity-70","text-white"],[1,"flex","flex-col","justify-center","items-start","px-8","py-12","md"],[1,"text-3xl","font-bold","text-green-500","mb-4"],[1,"text-xl","text-gray-300","mb-6"],[1,"alive"],[1,"flex","items-center","gap-4"],["href","/poojithaT_AngularDev.pdf","download","",1,"bg-green-600","hover:bg-green-700","text-white","font-semibold","px-6","py-2","rounded","flex","items-center","gap-2","transition","duration-300"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"],["routerLink","/skills",1,"bg-red-500","hover:bg-red-600","text-white","font-semibold","px-6","py-2","rounded","transition"]],template:function(t,i){t&1&&(Ye(0,"div",0)(1,"div",1)(2,"h3",2),dt(3,"A creator who believes great interfaces should be felt, not just seen."),Qe(),Ye(4,"p",3),dt(5,"I loves shaping the invisible language between people and products. I don\u2019t just build interfaces I craft experiences that breathe, respond, and connect. "),Qe(),Ye(6,"div",3),dt(7,"My work lives at the place where creativity meets engineering. I\u2019m fascinated by how a small interaction, a gentle animation, or a thoughtful layout can change the entire way someone feels while using a product. With a strong foundation in Angular, TypeScript, JavaScript, Accessibility, and modern UI architecture, I turn ideas into polished, meaningful, user-centered experiences. I thrive on challenges that require both logic and imagination optimizing performance, designing intuitive state management, architecting scalable modules, transforming raw data into insightful visualizations, and building complex workflows that feel seamless. "),Qe(),Ye(8,"div",3),dt(9,"For me, great frontend development isn\u2019t only about code it\u2019s about understanding emotion, intention, and the story an interface wants to tell. I enjoy untangling complexity, refining tiny details, and building systems that feel intuitive, elegant, and "),Ye(10,"span",4),dt(11,"alive."),Qe()(),Ye(12,"div",5)(13,"a",6),Lo(),Ye(14,"svg",7),hn(15,"path",8),Qe(),dt(16,` Download Resume
`),Qe(),Fo(),Ye(17,"button",9),dt(18," Show Skills "),Qe()()()())},dependencies:[ji],styles:[".alive[_ngcontent-%COMP%]{font:500 3rem/1.2 Segoe UI,Roboto,system-ui,sans-serif;font-size:18px;color:#10b981;animation:_ngcontent-%COMP%_pulseGlow 1s ease-in-out infinite;will-change:transform,text-shadow}@keyframes _ngcontent-%COMP%_pulseGlow{0%,to{transform:scale(1);text-shadow:0 0 6px #ef1515,0 0 10px #d65a44,0 0 24px #e7a06e}50%{transform:scale(1.08);text-shadow:0 0 12px #10b981,0 0 24px #34d399,0 0 40px #6ee7b7}0%{transform:translateY(0)}50%{transform:translateY(-15px)}to{transform:translateY(0)}}"]})};var Lw=[{path:"",component:Bf},{path:"skills",component:zf},{path:"projects",component:Vf},{path:"profile",component:Gf},{path:"**",redirectTo:""}];var Fw={providers:[tg(),Rv(),Py(Lw),Gb(zb())]};var hl=()=>({exact:!0}),jf=class n{mynightsky=!0;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-header"]],decls:18,vars:10,consts:[[1,"bg-[#111]","border-b","border-gray-700","py-4"],[1,"flex","items-center","justify-between","px-6"],[1,"flex","flex-col","items-start"],[1,"text-2xl","font-bold","text-red-500"],[1,"text-gray-300"],[1,"flex","gap-4"],["routerLink","/","routerLinkActive","!text-red-500 font-semibold",1,"px-4","py-2","text-white","hover:text-red-500","transition-colors",3,"routerLinkActiveOptions"],["routerLink","/profile","routerLinkActive","!text-red-500 font-semibold",1,"px-4","py-2","text-white","hover:text-red-500","transition-colors",3,"routerLinkActiveOptions"],["routerLink","/skills","routerLinkActive","!text-red-500 font-semibold",1,"px-4","py-2","text-white","hover:text-red-500","transition-colors",3,"routerLinkActiveOptions"],["routerLink","/projects","routerLinkActive","!text-red-500 font-semibold",1,"px-4","py-2","text-white","hover:text-red-500","transition-colors",3,"routerLinkActiveOptions"],["routerLink","/my-night-sky","routerLinkActive","!text-red-500 font-semibold",1,"px-4","py-2","text-white","hover:text-red-500","transition-colors",3,"routerLinkActiveOptions"]],template:function(t,i){t&1&&(Ye(0,"header",0)(1,"div",1)(2,"div",2)(3,"h1",3),dt(4,"Portfolio"),Qe(),Ye(5,"p",4),dt(6,"Welcome to My World"),Qe()(),Ye(7,"nav",5)(8,"a",6),dt(9," Home "),Qe(),Ye(10,"a",7),dt(11," Profile "),Qe(),Ye(12,"a",8),dt(13," Skills "),Qe(),Ye(14,"a",9),dt(15," Projects "),Qe(),Ye(16,"a",10),dt(17," My Night Sky "),Qe()()()()),t&2&&(ci(8),Wn("routerLinkActiveOptions",Us(5,hl)),ci(2),Wn("routerLinkActiveOptions",Us(6,hl)),ci(2),Wn("routerLinkActiveOptions",Us(7,hl)),ci(2),Wn("routerLinkActiveOptions",Us(8,hl)),ci(2),Wn("routerLinkActiveOptions",Us(9,hl)))},dependencies:[ji,Ny,Ko],encapsulation:2})};var nT=0,d_=1,iT=2;var f_=1,rT=2,qi=3,Mr=0,Sn=1,Xi=2,wr=0,Zs=1,Ai=2,h_=3,p_=4,sT=5,Kr=100,oT=101,aT=102,cT=103,lT=104,uT=200,dT=201,fT=202,hT=203,fh=204,hh=205,pT=206,mT=207,gT=208,vT=209,yT=210,_T=211,ET=212,xT=213,MT=214,Oh=0,Lh=1,Fh=2,Js=3,kh=4,Uh=5,Bh=6,Vh=7,m_=0,ST=1,bT=2,Tr=0,wT=1,TT=2,CT=3,DT=4,AT=5,IT=6,RT=7;var i_=300,ro=301,so=302,Hh=303,zh=304,kl=306,ph=1e3,Jr=1001,mh=1002,ui=1003,NT=1004;var Ul=1005;var Ci=1006,Gh=1007;var is=1008;var Yi=1009,g_=1010,v_=1011,Ra=1012,jh=1013,rs=1014,Zi=1015,Na=1016,Wh=1017,$h=1018,Pa=1020,y_=35902,__=35899,E_=1021,x_=1022,fi=1023,wa=1026,Oa=1027,M_=1028,qh=1029,S_=1030,Xh=1031;var Yh=1033,Bl=33776,Vl=33777,Hl=33778,zl=33779,Zh=35840,Jh=35841,Kh=35842,Qh=35843,ep=36196,tp=37492,np=37496,ip=37808,rp=37809,sp=37810,op=37811,ap=37812,cp=37813,lp=37814,up=37815,dp=37816,fp=37817,hp=37818,pp=37819,mp=37820,gp=37821,vp=36492,yp=36494,_p=36495,Ep=36283,xp=36284,Mp=36285,Sp=36286;var _l=2300,gh=2301,dh=2302,r_=2400,s_=2401,o_=2402;var PT=3200,OT=3201;var LT=0,FT=1,Cr="",Zn="srgb",Ks="srgb-linear",El="linear",vt="srgb";var Ys=7680;var a_=519,kT=512,UT=513,BT=514,b_=515,VT=516,HT=517,zT=518,GT=519,c_=35044;var w_="300 es",wi=2e3,xl=2001;var Sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oy=Math.PI/180,vh=180/Math.PI;function Gl(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function LL(n,e){return(n%e+e)%e}function Ly(n,e,t){return(1-t)*n+t*e}function pl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var gt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},br=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*v,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let C=Math.sqrt(w),A=Math.atan2(C,p*b);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let x=a*b;if(c=c*m+f*x,l=l*m+h*x,u=u*m+g*x,d=d*m+v*x,m===1-a){let C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kw.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kw.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fy.copy(this).projectOnVector(e),this.sub(Fy)}reflect(e){return this.sub(Fy.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fy=new k,kw=new br,We=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],b=r[1],w=r[4],x=r[7],C=r[2],A=r[5],D=r[8];return s[0]=o*v+a*b+c*C,s[3]=o*m+a*w+c*A,s[6]=o*p+a*x+c*D,s[1]=l*v+u*b+d*C,s[4]=l*m+u*w+d*A,s[7]=l*p+u*x+d*D,s[2]=f*v+h*b+g*C,s[5]=f*m+h*w+g*A,s[8]=f*p+h*x+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ky.makeScale(e,t)),this}rotate(e){return this.premultiply(ky.makeRotation(-e)),this}translate(e,t){return this.premultiply(ky.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ky=new We;function T_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ml(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jT(){let n=Ml("canvas");return n.style.display="block",n}var Uw={};function Ta(n){n in Uw||(Uw[n]=!0,console.warn(n))}function WT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Bw=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vw=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FL(){let n={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=ba(r.r),r.g=ba(r.g),r.b=ba(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?El:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ta("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ta("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ks]:{primaries:e,whitePoint:i,transfer:El,toXYZ:Bw,fromXYZ:Vw,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Bw,fromXYZ:Vw,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),n}var at=FL();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fa,yh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fa===void 0&&(fa=Ml("canvas")),fa.width=e.width,fa.height=e.height;let r=fa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ml("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kL=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kL++}),this.uuid=Gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uy(r[o].image)):s.push(Uy(r[o]))}else s=Uy(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Uy(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var UL=0,By=new k,ss=(()=>{class n extends Sr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Jr,s=Jr,o=Ci,a=is,c=fi,l=Yi,u=n.DEFAULT_ANISOTROPY,d=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UL++}),this.uuid=Gl(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(By).x}get height(){return this.source.getSize(By).y}get depth(){return this.source.getSize(By).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ph:t.x=t.x-Math.floor(t.x);break;case Jr:t.x=t.x<0?0:1;break;case mh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ph:t.y=t.y-Math.floor(t.y);break;case Jr:t.y=t.y<0?0:1;break;case mh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=i_,n.DEFAULT_ANISOTROPY=1,n})(),Ot=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,x=(h+1)/2,C=(p+1)/2,A=(u+f)/4,D=(d+v)/4,O=(g+m)/4;return w>x&&w>C?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=D/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=O/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=O/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_h=class extends Sr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new ss(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ca(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends _h{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sl=class extends ss{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eh=class extends ss{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ui,this.minFilter=ui,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wf.copy(i.boundingBox)),Wf.applyMatrix4(e.matrixWorld),this.union(Wf)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),$f.subVectors(this.max,ml),ha.subVectors(e.a,ml),pa.subVectors(e.b,ml),ma.subVectors(e.c,ml),jr.subVectors(pa,ha),Wr.subVectors(ma,pa),Ws.subVectors(ha,ma);let t=[0,-jr.z,jr.y,0,-Wr.z,Wr.y,0,-Ws.z,Ws.y,jr.z,0,-jr.x,Wr.z,0,-Wr.x,Ws.z,0,-Ws.x,-jr.y,jr.x,0,-Wr.y,Wr.x,0,-Ws.y,Ws.x,0];return!Vy(t,ha,pa,ma,$f)||(t=[1,0,0,0,1,0,0,0,1],!Vy(t,ha,pa,ma,$f))?!1:(qf.crossVectors(jr,Wr),t=[qf.x,qf.y,qf.z],Vy(t,ha,pa,ma,$f))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gr=[new k,new k,new k,new k,new k,new k,new k,new k],Mi=new k,Wf=new Qr,ha=new k,pa=new k,ma=new k,jr=new k,Wr=new k,Ws=new k,ml=new k,$f=new k,qf=new k,$s=new k;function Vy(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$s.fromArray(n,s);let a=r.x*Math.abs($s.x)+r.y*Math.abs($s.y)+r.z*Math.abs($s.z),c=e.dot($s),l=t.dot($s),u=i.dot($s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var BL=new Qr,gl=new k,Hy=new k,Qs=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):BL.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);let t=gl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hy.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(Hy)),this.expandByPoint(gl.copy(e.center).sub(Hy))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vr=new k,zy=new k,Xf=new k,$r=new k,Gy=new k,Yf=new k,jy=new k,bl=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zy.copy(e).add(t).multiplyScalar(.5),Xf.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(zy);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xf),a=$r.dot(this.direction),c=-$r.dot(Xf),l=$r.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zy).addScaledVector(Xf,f),h}intersectSphere(e,t){vr.subVectors(e.center,this.origin);let i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,r,s){Gy.subVectors(t,e),Yf.subVectors(i,e),jy.crossVectors(Gy,Yf);let o=this.direction.dot(jy),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$r.subVectors(this.origin,e);let c=a*this.direction.dot(Yf.crossVectors($r,Yf));if(c<0)return null;let l=a*this.direction.dot(Gy.cross($r));if(l<0||c+l>o)return null;let u=-a*$r.dot(jy);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ga.setFromMatrixColumn(e,0).length(),s=1/ga.setFromMatrixColumn(e,1).length(),o=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VL,e,HL)}lookAt(e,t,i){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),qr.crossVectors(i,Xn),qr.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),qr.crossVectors(i,Xn)),qr.normalize(),Zf.crossVectors(Xn,qr),r[0]=qr.x,r[4]=Zf.x,r[8]=Xn.x,r[1]=qr.y,r[5]=Zf.y,r[9]=Xn.y,r[2]=qr.z,r[6]=Zf.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],w=i[7],x=i[11],C=i[15],A=r[0],D=r[4],O=r[8],M=r[12],E=r[1],I=r[5],F=r[9],V=r[13],q=r[2],j=r[6],W=r[10],J=r[14],H=r[3],oe=r[7],de=r[11],Ce=r[15];return s[0]=o*A+a*E+c*q+l*H,s[4]=o*D+a*I+c*j+l*oe,s[8]=o*O+a*F+c*W+l*de,s[12]=o*M+a*V+c*J+l*Ce,s[1]=u*A+d*E+f*q+h*H,s[5]=u*D+d*I+f*j+h*oe,s[9]=u*O+d*F+f*W+h*de,s[13]=u*M+d*V+f*J+h*Ce,s[2]=g*A+v*E+m*q+p*H,s[6]=g*D+v*I+m*j+p*oe,s[10]=g*O+v*F+m*W+p*de,s[14]=g*M+v*V+m*J+p*Ce,s[3]=b*A+w*E+x*q+C*H,s[7]=b*D+w*I+x*j+C*oe,s[11]=b*O+w*F+x*W+C*de,s[15]=b*M+w*V+x*J+C*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+v*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=d*m*l-v*f*l+v*c*h-a*m*h-d*c*p+a*f*p,w=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,x=u*v*l-g*d*l+g*a*h-o*v*h-u*a*p+o*d*p,C=g*d*c-u*v*c-g*a*f+o*v*f+u*a*m-o*d*m,A=t*b+i*w+r*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=b*D,e[1]=(v*f*s-d*m*s-v*r*h+i*m*h+d*r*p-i*f*p)*D,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*D,e[4]=w*D,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*D,e[8]=x*D,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*p-t*d*p)*D,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*D,e[12]=C*D,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,v=o*u,m=o*d,p=a*d,b=c*l,w=c*u,x=c*d,C=i.x,A=i.y,D=i.z;return r[0]=(1-(v+p))*C,r[1]=(h+x)*C,r[2]=(g-w)*C,r[3]=0,r[4]=(h-x)*A,r[5]=(1-(f+p))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+w)*D,r[9]=(m-b)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ga.set(r[0],r[1],r[2]).length(),o=ga.set(r[4],r[5],r[6]).length(),a=ga.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Si.copy(this);let l=1/s,u=1/o,d=1/a;return Si.elements[0]*=l,Si.elements[1]*=l,Si.elements[2]*=l,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=wi,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===wi)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===xl)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=wi,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===wi)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===xl)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ga=new k,Si=new Gt,VL=new k(0,0,0),HL=new k(1,1,1),qr=new k,Zf=new k,Xn=new k,Hw=new Gt,zw=new br,eo=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Hw.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hw,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return zw.setFromEuler(this),this.setFromQuaternion(zw,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),wl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zL=0,Gw=new k,va=new br,yr=new Gt,Jf=new k,vl=new k,GL=new k,jL=new br,jw=new k(1,0,0),Ww=new k(0,1,0),$w=new k(0,0,1),qw={type:"added"},WL={type:"removed"},ya={type:"childadded",child:null},Wy={type:"childremoved",child:null},os=(()=>{class n extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zL++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,i=new eo,r=new br,s=new k(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new We}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return va.setFromAxisAngle(t,i),this.quaternion.multiply(va),this}rotateOnWorldAxis(t,i){return va.setFromAxisAngle(t,i),this.quaternion.premultiply(va),this}rotateX(t){return this.rotateOnAxis(jw,t)}rotateY(t){return this.rotateOnAxis(Ww,t)}rotateZ(t){return this.rotateOnAxis($w,t)}translateOnAxis(t,i){return Gw.copy(t).applyQuaternion(this.quaternion),this.position.add(Gw.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jw,t)}translateY(t){return this.translateOnAxis(Ww,t)}translateZ(t){return this.translateOnAxis($w,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jf.copy(t):Jf.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(vl,Jf,this.up):yr.lookAt(Jf,vl,this.up),this.quaternion.setFromRotationMatrix(yr),s&&(yr.extractRotation(s.matrixWorld),va.setFromRotationMatrix(yr),this.quaternion.premultiply(va.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qw),ya.child=t,this.dispatchEvent(ya),ya.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WL),Wy.child=t,this.dispatchEvent(Wy),Wy.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yr.multiply(t.parent.matrixWorld)),t.applyMatrix4(yr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qw),ya.child=t,this.dispatchEvent(ya),ya.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,t,GL),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,jL,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Et(ue({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>ue({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new k(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),bi=new k,_r=new k,$y=new k,Er=new k,_a=new k,Ea=new k,Xw=new k,qy=new k,Xy=new k,Yy=new k,Zy=new Ot,Jy=new Ot,Ky=new Ot,Zr=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bi.subVectors(e,t),r.cross(bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bi.subVectors(r,t),_r.subVectors(i,t),$y.subVectors(e,t);let o=bi.dot(bi),a=bi.dot(_r),c=bi.dot($y),l=_r.dot(_r),u=_r.dot($y),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Er.x),c.addScaledVector(o,Er.y),c.addScaledVector(a,Er.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Zy.setScalar(0),Jy.setScalar(0),Ky.setScalar(0),Zy.fromBufferAttribute(e,t),Jy.fromBufferAttribute(e,i),Ky.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zy,s.x),o.addScaledVector(Jy,s.y),o.addScaledVector(Ky,s.z),o}static isFrontFacing(e,t,i,r){return bi.subVectors(i,t),_r.subVectors(e,t),bi.cross(_r).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),bi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;_a.subVectors(r,i),Ea.subVectors(s,i),qy.subVectors(e,i);let c=_a.dot(qy),l=Ea.dot(qy);if(c<=0&&l<=0)return t.copy(i);Xy.subVectors(e,r);let u=_a.dot(Xy),d=Ea.dot(Xy);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(_a,o);Yy.subVectors(e,s);let h=_a.dot(Yy),g=Ea.dot(Yy);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ea,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Xw.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Xw,a);let p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(_a,o).addScaledVector(Ea,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$T={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Kf={h:0,s:0,l:0};function Qy(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var st=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=LL(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qy(o,s,e+1/3),this.g=Qy(o,s,e),this.b=Qy(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){let i=$T[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return at.workingToColorSpace(mn.copy(this),e),Math.round(et(mn.r*255,0,255))*65536+Math.round(et(mn.g*255,0,255))*256+Math.round(et(mn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Zn){at.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Kf);let i=Ly(Xr.h,Kf.h,t),r=Ly(Xr.s,Kf.s,t),s=Ly(Xr.l,Kf.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new st;st.NAMES=$T;var $L=0,es=class extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$L++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=Zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=hh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},di=class extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new eo,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new k,Qf=new gt,qL=0,Jn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qL++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=c_,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qf.fromBufferAttribute(this,t),Qf.applyMatrix3(e),this.setXY(t,Qf.x,Qf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),i=Pn(i,this.array),r=Pn(r,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==c_&&(e.usage=this.usage),e}};var Tl=class extends Jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Cl=class extends Jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Yt=class extends Jn{constructor(e,t,i){super(new Float32Array(e),t,i)}},XL=0,li=new Gt,e_=new os,xa=new k,Yn=new Qr,yl=new Qr,rn=new k,Kn=class n extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XL++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?Cl:Tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return e_.lookAt(e),e_.updateMatrix(),this.applyMatrix4(e_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];yl.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Yn.min,yl.min),Yn.expandByPoint(rn),rn.addVectors(Yn.max,yl.max),Yn.expandByPoint(rn)):(Yn.expandByPoint(yl.min),Yn.expandByPoint(yl.max))}Yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)rn.fromBufferAttribute(a,l),c&&(xa.fromBufferAttribute(e,l),rn.add(xa)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new k,c[O]=new k;let l=new k,u=new k,d=new k,f=new gt,h=new gt,g=new gt,v=new k,m=new k;function p(O,M,E){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,O),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[O].add(v),a[M].add(v),a[E].add(v),c[O].add(m),c[M].add(m),c[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,M=b.length;O<M;++O){let E=b[O],I=E.start,F=E.count;for(let V=I,q=I+F;V<q;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let w=new k,x=new k,C=new k,A=new k;function D(O){C.fromBufferAttribute(r,O),A.copy(C);let M=a[O];w.copy(M),w.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(A,M);let I=x.dot(c[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,I)}for(let O=0,M=b.length;O<M;++O){let E=b[O],I=E.start,F=E.count;for(let V=I,q=I+F;V<q;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Jn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yw=new Gt,qs=new bl,eh=new Qs,Zw=new k,th=new k,nh=new k,ih=new k,t_=new k,rh=new k,Jw=new k,sh=new k,Zt=class extends os{constructor(e=new Kn,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){rh.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(t_.fromBufferAttribute(d,e),o?rh.addScaledVector(t_,u):rh.addScaledVector(t_.sub(t),u))}t.add(rh)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eh.copy(i.boundingSphere),eh.applyMatrix4(s),qs.copy(e.ray).recast(e.near),!(eh.containsPoint(qs.origin)===!1&&(qs.intersectSphere(eh,Zw)===null||qs.origin.distanceToSquared(Zw)>(e.far-e.near)**2))&&(Yw.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Yw),!(i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=b,C=w;x<C;x+=3){let A=a.getX(x),D=a.getX(x+1),O=a.getX(x+2);r=oh(this,p,e,i,l,u,d,A,D,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let b=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);r=oh(this,o,e,i,l,u,d,b,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=b,C=w;x<C;x+=3){let A=x,D=x+1,O=x+2;r=oh(this,p,e,i,l,u,d,A,D,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let b=m,w=m+1,x=m+2;r=oh(this,o,e,i,l,u,d,b,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function YL(n,e,t,i,r,s,o,a){let c;if(e.side===Sn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Mr,a),c===null)return null;sh.copy(a),sh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(sh);return l<t.near||l>t.far?null:{distance:l,point:sh.clone(),object:n}}function oh(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,th),n.getVertexPosition(c,nh),n.getVertexPosition(l,ih);let u=YL(n,e,t,i,th,nh,ih,Jw);if(u){let d=new k;Zr.getBarycoord(Jw,th,nh,ih,d),r&&(u.uv=Zr.getInterpolatedAttribute(r,a,c,l,d,new gt)),s&&(u.uv1=Zr.getInterpolatedAttribute(s,a,c,l,d,new gt)),o&&(u.normal=Zr.getInterpolatedAttribute(o,a,c,l,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new k,materialIndex:0};Zr.getNormal(th,nh,ih,f.normal),u.face=f,u.barycoord=d}return u}var Da=class n extends Kn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function g(v,m,p,b,w,x,C,A,D,O,M){let E=x/D,I=C/O,F=x/2,V=C/2,q=A/2,j=D+1,W=O+1,J=0,H=0,oe=new k;for(let de=0;de<W;de++){let Ce=de*I-V;for(let Ze=0;Ze<j;Ze++){let xt=Ze*E-F;oe[v]=xt*b,oe[m]=Ce*w,oe[p]=q,l.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[p]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(Ze/D),d.push(1-de/O),J+=1}}for(let de=0;de<O;de++)for(let Ce=0;Ce<D;Ce++){let Ze=f+Ce+j*de,xt=f+Ce+j*(de+1),Tt=f+(Ce+1)+j*(de+1),ht=f+(Ce+1)+j*de;c.push(Ze,xt,ht),c.push(xt,Tt,ht),H+=6}a.addGroup(h,H,M),h+=H,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function oo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=oo(n[t]);for(let r in i)e[r]=i[r]}return e}function ZL(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function C_(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var qT={clone:oo,merge:vn},JL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Di=class extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JL,this.fragmentShader=KL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=ZL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Dl=class extends os{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yr=new k,Kw=new gt,Qw=new gt,gn=class extends Dl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oy*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(Oy*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Kw,Qw),t.subVectors(Qw,Kw)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oy*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ma=-90,Sa=1,xh=class extends os{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gn(Ma,Sa,e,t);r.layers=this.layers,this.add(r);let s=new gn(Ma,Sa,e,t);s.layers=this.layers,this.add(s);let o=new gn(Ma,Sa,e,t);o.layers=this.layers,this.add(o);let a=new gn(Ma,Sa,e,t);a.layers=this.layers,this.add(a);let c=new gn(Ma,Sa,e,t);c.layers=this.layers,this.add(c);let l=new gn(Ma,Sa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Al=class extends ss{constructor(e=[],t=ro,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mh=class extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Al(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Da(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:wr});s.uniforms.tEquirect.value=t;let o=new Zt(r,s),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Ci),new xh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Ti=class extends os{constructor(){super(),this.isGroup=!0,this.type="Group"}},QL={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Il=class extends os{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new eo,this.environmentIntensity=1,this.environmentRotation=new eo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var n_=new k,eF=new k,tF=new We,Wi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=n_.subVectors(i,t).cross(eF.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(n_),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tF.getNormalMatrix(e),r=this.coplanarPoint(n_).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xs=new Qs,nF=new gt(.5,.5),ah=new k,Rl=class{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],v=s[9],m=s[10],p=s[11],b=s[12],w=s[13],x=s[14],C=s[15];if(r[0].setComponents(l-o,h-u,p-g,C-b).normalize(),r[1].setComponents(l+o,h+u,p+g,C+b).normalize(),r[2].setComponents(l+a,h+d,p+v,C+w).normalize(),r[3].setComponents(l-a,h-d,p-v,C-w).normalize(),i)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,h-f,p-m,C-x).normalize();else if(r[4].setComponents(l-c,h-f,p-m,C-x).normalize(),t===wi)r[5].setComponents(l+c,h+f,p+m,C+x).normalize();else if(t===xl)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=nF.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ah.x=r.normal.x>0?e.max.x:e.min.x,ah.y=r.normal.y>0?e.max.y:e.min.y,ah.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ah)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ia=class extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eT=new Gt,l_=new bl,ch=new Qs,lh=new k,Nl=class extends os{constructor(e=new Kn,t=new Ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ch.copy(i.boundingSphere),ch.applyMatrix4(r),ch.radius+=s,e.ray.intersectsSphere(ch)===!1)return;eT.copy(r).invert(),l_.copy(e.ray).applyMatrix4(eT);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,v=h;g<v;g++){let m=l.getX(g);lh.fromBufferAttribute(d,m),tT(lh,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)lh.fromBufferAttribute(d,g),tT(lh,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function tT(n,e,t,i,r,s,o){let a=l_.distanceSqToPoint(n);if(a<t){let c=new k;l_.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pl=class extends ss{constructor(e,t,i=rs,r,s,o,a=ui,c=ui,l,u=wa,d=1){if(u!==wa&&u!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ol=class extends ss{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var to=class n extends Kn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],f=[],h=[],g=0,v=[],m=i/2,p=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(h,2));function b(){let x=new k,C=new k,A=0,D=(t-e)/i;for(let O=0;O<=s;O++){let M=[],E=O/s,I=E*(t-e)+e;for(let F=0;F<=r;F++){let V=F/r,q=V*c+a,j=Math.sin(q),W=Math.cos(q);C.x=I*j,C.y=-E*i+m,C.z=I*W,d.push(C.x,C.y,C.z),x.set(j,D,W).normalize(),f.push(x.x,x.y,x.z),h.push(V,1-E),M.push(g++)}v.push(M)}for(let O=0;O<r;O++)for(let M=0;M<s;M++){let E=v[M][O],I=v[M+1][O],F=v[M+1][O+1],V=v[M][O+1];(e>0||M!==0)&&(u.push(E,I,V),A+=3),(t>0||M!==s-1)&&(u.push(I,F,V),A+=3)}l.addGroup(p,A,0),p+=A}function w(x){let C=g,A=new gt,D=new k,O=0,M=x===!0?e:t,E=x===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*E,0),f.push(0,E,0),h.push(.5,.5),g++;let I=g;for(let F=0;F<=r;F++){let q=F/r*c+a,j=Math.cos(q),W=Math.sin(q);D.x=M*W,D.y=m*E,D.z=M*j,d.push(D.x,D.y,D.z),f.push(0,E,0),A.x=j*.5+.5,A.y=W*.5*E+.5,h.push(A.x,A.y),g++}for(let F=0;F<r;F++){let V=C+F,q=I+F;x===!0?u.push(q,q+1,V):u.push(q+1,q,V),O+=3}l.addGroup(p,O,x===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ll=class n extends Kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let w=0;w<l;w++){let x=w*d-s;g.push(x,-b,0),v.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let w=b+l*p,x=b+l*(p+1),C=b+1+l*(p+1),A=b+1+l*p;h.push(w,x,A),h.push(x,C,A)}this.setIndex(h),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var no=class n extends Kn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new k,f=new k,h=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let b=[],w=p/i,x=0;p===0&&o===0?x=.5/t:p===i&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(A+x,1-w),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let w=u[p][b+1],x=u[p][b],C=u[p+1][b],A=u[p+1][b+1];(p!==0||o>0)&&h.push(w,x,A),(p!==i-1||c<Math.PI)&&h.push(x,C,A)}this.setIndex(h),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Sh=class extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bh=class extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function uh(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iF(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var io=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wh=class extends io{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:r_,endingEnd:r_}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case s_:s=e,a=2*t-i;break;case o_:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case s_:o=e,c=2*i-t;break;case o_:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,b=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,w=(-1-h)*m+(1.5+h)*v+.5*g,x=h*m-h*v;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+b*o[l+C]+w*o[c+C]+x*o[d+C];return s}},Th=class extends io{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},Ch=class extends io{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uh(t,this.TimeBufferType),this.values=uh(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:uh(e.times,Array),values:uh(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _l:t=this.InterpolantFactoryMethodDiscrete;break;case gh:t=this.InterpolantFactoryMethodLinear;break;case dh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return gh;case this.InterpolantFactoryMethodSmooth:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&iF(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===dh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=gh;var ts=class extends Qn{constructor(e,t,i){super(e,t,i)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=_l;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends Qn{constructor(e,t,i,r){super(e,t,i,r)}};Dh.prototype.ValueTypeName="color";var Ah=class extends Qn{constructor(e,t,i,r){super(e,t,i,r)}};Ah.prototype.ValueTypeName="number";var Ih=class extends io{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)br.slerpFlat(s,0,o,l-a,o,l,c);return s}},Fl=class extends Qn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}};Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Qn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=_l;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends Qn{constructor(e,t,i,r){super(e,t,i,r)}};Rh.prototype.ValueTypeName="vector";var Nh=class extends Dl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ph=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var D_="\\[\\]\\.:\\/",rF=new RegExp("["+D_+"]","g"),A_="[^"+D_+"]",sF="[^"+D_.replace("\\.","")+"]",oF=/((?:WC+[\/:])*)/.source.replace("WC",A_),aF=/(WCOD+)?/.source.replace("WCOD",sF),cF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",A_),lF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",A_),uF=new RegExp("^"+oF+aF+cF+lF+"$"),dF=["material","materials","bones","map"],u_=class{constructor(e,t,i){let r=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rF,"")}static parseTrackName(t){let i=uF.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);dF.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=u_,n})();Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $Y=new Float32Array(1);function I_(n,e,t,i){let r=fF(i);switch(t){case E_:return n*e;case M_:return n*e/r.components*r.byteLength;case qh:return n*e/r.components*r.byteLength;case S_:return n*e*2/r.components*r.byteLength;case Xh:return n*e*2/r.components*r.byteLength;case x_:return n*e*3/r.components*r.byteLength;case fi:return n*e*4/r.components*r.byteLength;case Yh:return n*e*4/r.components*r.byteLength;case Bl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jh:case Qh:return Math.max(n,16)*Math.max(e,8)/4;case Zh:case Kh:return Math.max(n,8)*Math.max(e,8)/2;case ep:case tp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ap:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case up:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vp:case yp:case _p:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ep:case xp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mp:case Sp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fF(n){switch(n){case Yi:case g_:return{byteLength:1,components:1};case Ra:case v_:case Na:return{byteLength:2,components:1};case Wh:case $h:return{byteLength:2,components:4};case rs:case jh:case Zi:return{byteLength:4,components:1};case y_:case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function vC(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pF(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var mF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gF=`#ifdef USE_ALPHAHASH
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
#endif`,vF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_F=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xF=`#ifdef USE_AOMAP
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
#endif`,MF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SF=`#ifdef USE_BATCHING
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
#endif`,bF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DF=`#ifdef USE_IRIDESCENCE
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
#endif`,AF=`#ifdef USE_BUMPMAP
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
#endif`,IF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kF=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UF=`#define PI 3.141592653589793
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
} // validated`,BF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VF=`vec3 transformedNormal = objectNormal;
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
#endif`,HF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WF="gl_FragColor = linearToOutputTexel( gl_FragColor );",$F=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qF=`#ifdef USE_ENVMAP
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
#endif`,XF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YF=`#ifdef USE_ENVMAP
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
#endif`,ZF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JF=`#ifdef USE_ENVMAP
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
#endif`,KF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ek=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tk=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nk=`#ifdef USE_GRADIENTMAP
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
}`,ik=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rk=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sk=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ok=`uniform bool receiveShadow;
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
#endif`,ak=`#ifdef USE_ENVMAP
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
#endif`,ck=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lk=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uk=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dk=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fk=`PhysicalMaterial material;
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
#endif`,hk=`struct PhysicalMaterial {
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
}`,pk=`
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
#endif`,mk=`#if defined( RE_IndirectDiffuse )
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
#endif`,gk=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vk=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yk=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_k=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ek=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xk=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mk=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bk=`#if defined( USE_POINTS_UV )
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
#endif`,wk=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tk=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ck=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dk=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ak=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ik=`#ifdef USE_MORPHTARGETS
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
#endif`,Rk=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pk=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ok=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kk=`#ifdef USE_NORMALMAP
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
#endif`,Uk=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hk=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zk=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gk=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wk=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$k=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qk=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xk=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zk=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Jk=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kk=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qk=`float getShadowMask() {
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
}`,e2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,n2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i2=`#ifdef USE_SKINNING
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
#endif`,r2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c2=`#ifdef USE_TRANSMISSION
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
#endif`,l2=`#ifdef USE_TRANSMISSION
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m2=`uniform sampler2D t2D;
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`#include <common>
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
}`,x2=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M2=`#define DISTANCE
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
}`,S2=`#define DISTANCE
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`uniform float scale;
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
}`,C2=`uniform vec3 diffuse;
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
}`,D2=`#include <common>
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
}`,A2=`uniform vec3 diffuse;
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
}`,I2=`#define LAMBERT
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
}`,R2=`#define LAMBERT
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
}`,N2=`#define MATCAP
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
}`,P2=`#define MATCAP
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
}`,O2=`#define NORMAL
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
}`,L2=`#define NORMAL
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
}`,F2=`#define PHONG
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
}`,k2=`#define PHONG
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
}`,U2=`#define STANDARD
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
}`,B2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,H2=`#define TOON
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
}`,z2=`uniform float size;
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
}`,G2=`uniform vec3 diffuse;
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
}`,j2=`#include <common>
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
}`,W2=`uniform vec3 color;
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
}`,$2=`uniform float rotation;
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
}`,q2=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:mF,alphahash_pars_fragment:gF,alphamap_fragment:vF,alphamap_pars_fragment:yF,alphatest_fragment:_F,alphatest_pars_fragment:EF,aomap_fragment:xF,aomap_pars_fragment:MF,batching_pars_vertex:SF,batching_vertex:bF,begin_vertex:wF,beginnormal_vertex:TF,bsdfs:CF,iridescence_fragment:DF,bumpmap_pars_fragment:AF,clipping_planes_fragment:IF,clipping_planes_pars_fragment:RF,clipping_planes_pars_vertex:NF,clipping_planes_vertex:PF,color_fragment:OF,color_pars_fragment:LF,color_pars_vertex:FF,color_vertex:kF,common:UF,cube_uv_reflection_fragment:BF,defaultnormal_vertex:VF,displacementmap_pars_vertex:HF,displacementmap_vertex:zF,emissivemap_fragment:GF,emissivemap_pars_fragment:jF,colorspace_fragment:WF,colorspace_pars_fragment:$F,envmap_fragment:qF,envmap_common_pars_fragment:XF,envmap_pars_fragment:YF,envmap_pars_vertex:ZF,envmap_physical_pars_fragment:ak,envmap_vertex:JF,fog_vertex:KF,fog_pars_vertex:QF,fog_fragment:ek,fog_pars_fragment:tk,gradientmap_pars_fragment:nk,lightmap_pars_fragment:ik,lights_lambert_fragment:rk,lights_lambert_pars_fragment:sk,lights_pars_begin:ok,lights_toon_fragment:ck,lights_toon_pars_fragment:lk,lights_phong_fragment:uk,lights_phong_pars_fragment:dk,lights_physical_fragment:fk,lights_physical_pars_fragment:hk,lights_fragment_begin:pk,lights_fragment_maps:mk,lights_fragment_end:gk,logdepthbuf_fragment:vk,logdepthbuf_pars_fragment:yk,logdepthbuf_pars_vertex:_k,logdepthbuf_vertex:Ek,map_fragment:xk,map_pars_fragment:Mk,map_particle_fragment:Sk,map_particle_pars_fragment:bk,metalnessmap_fragment:wk,metalnessmap_pars_fragment:Tk,morphinstance_vertex:Ck,morphcolor_vertex:Dk,morphnormal_vertex:Ak,morphtarget_pars_vertex:Ik,morphtarget_vertex:Rk,normal_fragment_begin:Nk,normal_fragment_maps:Pk,normal_pars_fragment:Ok,normal_pars_vertex:Lk,normal_vertex:Fk,normalmap_pars_fragment:kk,clearcoat_normal_fragment_begin:Uk,clearcoat_normal_fragment_maps:Bk,clearcoat_pars_fragment:Vk,iridescence_pars_fragment:Hk,opaque_fragment:zk,packing:Gk,premultiplied_alpha_fragment:jk,project_vertex:Wk,dithering_fragment:$k,dithering_pars_fragment:qk,roughnessmap_fragment:Xk,roughnessmap_pars_fragment:Yk,shadowmap_pars_fragment:Zk,shadowmap_pars_vertex:Jk,shadowmap_vertex:Kk,shadowmask_pars_fragment:Qk,skinbase_vertex:e2,skinning_pars_vertex:t2,skinning_vertex:n2,skinnormal_vertex:i2,specularmap_fragment:r2,specularmap_pars_fragment:s2,tonemapping_fragment:o2,tonemapping_pars_fragment:a2,transmission_fragment:c2,transmission_pars_fragment:l2,uv_pars_fragment:u2,uv_pars_vertex:d2,uv_vertex:f2,worldpos_vertex:h2,background_vert:p2,background_frag:m2,backgroundCube_vert:g2,backgroundCube_frag:v2,cube_vert:y2,cube_frag:_2,depth_vert:E2,depth_frag:x2,distanceRGBA_vert:M2,distanceRGBA_frag:S2,equirect_vert:b2,equirect_frag:w2,linedashed_vert:T2,linedashed_frag:C2,meshbasic_vert:D2,meshbasic_frag:A2,meshlambert_vert:I2,meshlambert_frag:R2,meshmatcap_vert:N2,meshmatcap_frag:P2,meshnormal_vert:O2,meshnormal_frag:L2,meshphong_vert:F2,meshphong_frag:k2,meshphysical_vert:U2,meshphysical_frag:B2,meshtoon_vert:V2,meshtoon_frag:H2,points_vert:z2,points_frag:G2,shadow_vert:j2,shadow_frag:W2,sprite_vert:$2,sprite_frag:q2},se={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ji={basic:{uniforms:vn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:vn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:vn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:vn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:vn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:vn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:vn([se.points,se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:vn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:vn([se.common,se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:vn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:vn([se.sprite,se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:vn([se.common,se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:vn([se.lights,se.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ji.physical={uniforms:vn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var bp={r:0,b:0,g:0},ao=new eo,X2=new Gt;function Y2(n,e,t,i,r,s,o){let a=new st(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1,C=g(w);C===null?p(a,c):C&&C.isColor&&(p(C,1),x=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,x){let C=g(x);C&&(C.isCubeTexture||C.mapping===kl)?(u===void 0&&(u=new Zt(new Da(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:oo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ao.copy(x.backgroundRotation),ao.x*=-1,ao.y*=-1,ao.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(X2.makeRotationFromEuler(ao)),u.material.toneMapped=at.getTransfer(C.colorSpace)!==vt,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Zt(new Ll(2,2),new Di({name:"BackgroundMaterial",uniforms:oo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=at.getTransfer(C.colorSpace)!==vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,x){w.getRGB(bp,C_(n)),i.buffers.color.setClear(bp.r,bp.g,bp.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:v,addToRenderList:m,dispose:b}}function Z2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(E,I,F,V,q){let j=!1,W=d(V,F,I);s!==W&&(s=W,l(s.object)),j=h(E,V,F,q),j&&g(E,V,F,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(E,I,F,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,I,F){let V=F.wireframe===!0,q=i[E.id];q===void 0&&(q={},i[E.id]=q);let j=q[I.id];j===void 0&&(j={},q[I.id]=j);let W=j[V];return W===void 0&&(W=f(c()),j[V]=W),W}function f(E){let I=[],F=[],V=[];for(let q=0;q<t;q++)I[q]=0,F[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:E,attributes:{},index:null}}function h(E,I,F,V){let q=s.attributes,j=I.attributes,W=0,J=F.getAttributes();for(let H in J)if(J[H].location>=0){let de=q[H],Ce=j[H];if(Ce===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Ce=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Ce=E.instanceColor)),de===void 0||de.attribute!==Ce||Ce&&de.data!==Ce.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function g(E,I,F,V){let q={},j=I.attributes,W=0,J=F.getAttributes();for(let H in J)if(J[H].location>=0){let de=j[H];de===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(de=E.instanceColor));let Ce={};Ce.attribute=de,de&&de.data&&(Ce.data=de.data),q[H]=Ce,W++}s.attributes=q,s.attributesNum=W,s.index=V}function v(){let E=s.newAttributes;for(let I=0,F=E.length;I<F;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){let F=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;F[E]=1,V[E]===0&&(n.enableVertexAttribArray(E),V[E]=1),q[E]!==I&&(n.vertexAttribDivisor(E,I),q[E]=I)}function b(){let E=s.newAttributes,I=s.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==E[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function w(E,I,F,V,q,j,W){W===!0?n.vertexAttribIPointer(E,I,F,q,j):n.vertexAttribPointer(E,I,F,V,q,j)}function x(E,I,F,V){v();let q=V.attributes,j=F.getAttributes(),W=I.defaultAttributeValues;for(let J in j){let H=j[J];if(H.location>=0){let oe=q[J];if(oe===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){let de=oe.normalized,Ce=oe.itemSize,Ze=e.get(oe);if(Ze===void 0)continue;let xt=Ze.buffer,Tt=Ze.type,ht=Ze.bytesPerElement,X=Tt===n.INT||Tt===n.UNSIGNED_INT||oe.gpuType===jh;if(oe.isInterleavedBufferAttribute){let K=oe.data,pe=K.stride,ke=oe.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)p(H.location+Te,K.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<H.locationSize;Te++)m(H.location+Te);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Te=0;Te<H.locationSize;Te++)w(H.location+Te,Ce/H.locationSize,Tt,de,pe*ht,(ke+Ce/H.locationSize*Te)*ht,X)}else{if(oe.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,oe.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let K=0;K<H.locationSize;K++)w(H.location+K,Ce/H.locationSize,Tt,de,Ce*ht,Ce/H.locationSize*K*ht,X)}}else if(W!==void 0){let de=W[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}b()}function C(){O();for(let E in i){let I=i[E];for(let F in I){let V=I[F];for(let q in V)u(V[q].object),delete V[q];delete I[F]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;let I=i[E.id];for(let F in I){let V=I[F];for(let q in V)u(V[q].object),delete V[q];delete I[F]}delete i[E.id]}function D(E){for(let I in i){let F=i[I];if(F[E.id]===void 0)continue;let V=F[E.id];for(let q in V)u(V[q].object),delete V[q];delete F[E.id]}}function O(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function J2(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function K2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==fi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let O=D===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Yi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zi&&!O)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Q2(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Wi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,w=b*4,x=p.clippingState||null;c.value=x,x=u(g,f,w,h);for(let C=0;C!==w;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=h+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=h;w!==v;++w,x+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function eU(n){let e=new WeakMap;function t(o,a){return a===Hh?o.mapping=ro:a===zh&&(o.mapping=so),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hh||a===zh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Mh(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Fa=4,XT=[.125,.215,.35,.446,.526,.582],uo=20,R_=new Nh,YT=new st,N_=null,P_=0,O_=0,L_=!1,lo=(1+Math.sqrt(5))/2,La=1/lo,ZT=[new k(-lo,La,0),new k(lo,La,0),new k(-La,0,lo),new k(La,0,lo),new k(0,lo,-La),new k(0,lo,La),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],tU=new k,Cp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=tU}=s;N_=this._renderer.getRenderTarget(),P_=this._renderer.getActiveCubeFace(),O_=this._renderer.getActiveMipmapLevel(),L_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=QT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=KT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(N_,P_,O_),this._renderer.xr.enabled=L_,e.scissorTest=!1,wp(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),N_=this._renderer.getRenderTarget(),P_=this._renderer.getActiveCubeFace(),O_=this._renderer.getActiveMipmapLevel(),L_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Na,format:fi,colorSpace:Ks,depthBuffer:!1},r=JT(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=JT(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nU(s)),this._blurMaterial=iU(s,e,t)}return r}_compileMaterial(e){let t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,R_)}_sceneToCubeUV(e,t,i,r,s){let c=new gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(YT),d.toneMapping=Tr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let v=new di({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),m=new Zt(new Da,v),p=!1,b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,p=!0):(v.color.copy(YT),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let C=this._cubeSize;wp(r,x*C,w>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=QT()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=KT());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;wp(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,R_)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ZT[(r-s-1)%ZT.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Zt(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*uo-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):uo;m>uo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${uo}`);let p=[],b=0;for(let D=0;D<uo;++D){let O=D/v,M=Math.exp(-O*O/2);p.push(M),D===0?b+=M:D<m&&(b+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let x=this._sizeLods[r],C=3*x*(r>w-Fa?r-w+Fa:0),A=4*(this._cubeSize-x);wp(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(d,R_)}};function nU(n){let e=[],t=[],i=[],r=n,s=n-Fa+1+XT.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Fa?c=XT[o-n+Fa-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*h),w=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let A=0;A<h;A++){let D=A%3*2/3-1,O=A>2?0:-1,M=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];b.set(M,v*g*A),w.set(f,m*g*A);let E=[A,A,A,A,A,A];x.set(E,p*g*A)}let C=new Kn;C.setAttribute("position",new Jn(b,v)),C.setAttribute("uv",new Jn(w,m)),C.setAttribute("faceIndex",new Jn(x,p)),e.push(C),r>Fa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function JT(n,e,t){let i=new $i(n,e,t);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wp(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iU(n,e,t){let i=new Float32Array(uo),r=new k(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:W_(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function KT(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:W_(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function QT(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:W_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function W_(){return`

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
	`}function rU(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Hh||c===zh,u=c===ro||c===so;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Cp(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Cp(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sU(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ta("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oU(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,v=0;if(h!==null){let b=h.array;v=h.version;for(let w=0,x=b.length;w<x;w+=3){let C=b[w+0],A=b[w+1],D=b[w+2];f.push(C,A,A,D,D,C)}}else if(g!==void 0){let b=g.array;v=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){let C=w+0,A=w+1,D=w+2;f.push(C,A,A,D,D,C)}}else return;let m=new(T_(f)?Cl:Tl)(f,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function aU(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=h[b]*v[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cU(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lU(n,e,t){let i=new WeakMap,r=new Ot;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let E=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var h=E;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let D=new Float32Array(C*A*4*d),O=new Sl(D,C,A,d);O.type=Zi,O.needsUpdate=!0;let M=x*4;for(let I=0;I<d;I++){let F=p[I],V=b[I],q=w[I],j=C*A*4*I;for(let W=0;W<F.count;W++){let J=W*M;g===!0&&(r.fromBufferAttribute(F,W),D[j+J+0]=r.x,D[j+J+1]=r.y,D[j+J+2]=r.z,D[j+J+3]=0),v===!0&&(r.fromBufferAttribute(V,W),D[j+J+4]=r.x,D[j+J+5]=r.y,D[j+J+6]=r.z,D[j+J+7]=0),m===!0&&(r.fromBufferAttribute(q,W),D[j+J+8]=r.x,D[j+J+9]=r.y,D[j+J+10]=r.z,D[j+J+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new gt(C,A)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function uU(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var yC=new ss,eC=new Pl(1,1),_C=new Sl,EC=new Eh,xC=new Al,tC=[],nC=[],iC=new Float32Array(16),rC=new Float32Array(9),sC=new Float32Array(4);function Ua(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=tC[r];if(s===void 0&&(s=new Float32Array(r),tC[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ap(n,e){let t=nC[e];t===void 0&&(t=new Int32Array(e),nC[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dU(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function hU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function pU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function mU(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;sC.set(i),n.uniformMatrix2fv(this.addr,!1,sC),Kt(t,i)}}function gU(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;rC.set(i),n.uniformMatrix3fv(this.addr,!1,rC),Kt(t,i)}}function vU(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;iC.set(i),n.uniformMatrix4fv(this.addr,!1,iC),Kt(t,i)}}function yU(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _U(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function EU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function xU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function MU(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function bU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function wU(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function TU(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(eC.compareFunction=b_,s=eC):s=yC,t.setTexture2D(e||s,r)}function CU(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||EC,r)}function DU(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xC,r)}function AU(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_C,r)}function IU(n){switch(n){case 5126:return dU;case 35664:return fU;case 35665:return hU;case 35666:return pU;case 35674:return mU;case 35675:return gU;case 35676:return vU;case 5124:case 35670:return yU;case 35667:case 35671:return _U;case 35668:case 35672:return EU;case 35669:case 35673:return xU;case 5125:return MU;case 36294:return SU;case 36295:return bU;case 36296:return wU;case 35678:case 36198:case 36298:case 36306:case 35682:return TU;case 35679:case 36299:case 36307:return CU;case 35680:case 36300:case 36308:case 36293:return DU;case 36289:case 36303:case 36311:case 36292:return AU}}function RU(n,e){n.uniform1fv(this.addr,e)}function NU(n,e){let t=Ua(e,this.size,2);n.uniform2fv(this.addr,t)}function PU(n,e){let t=Ua(e,this.size,3);n.uniform3fv(this.addr,t)}function OU(n,e){let t=Ua(e,this.size,4);n.uniform4fv(this.addr,t)}function LU(n,e){let t=Ua(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FU(n,e){let t=Ua(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kU(n,e){let t=Ua(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UU(n,e){n.uniform1iv(this.addr,e)}function BU(n,e){n.uniform2iv(this.addr,e)}function VU(n,e){n.uniform3iv(this.addr,e)}function HU(n,e){n.uniform4iv(this.addr,e)}function zU(n,e){n.uniform1uiv(this.addr,e)}function GU(n,e){n.uniform2uiv(this.addr,e)}function jU(n,e){n.uniform3uiv(this.addr,e)}function WU(n,e){n.uniform4uiv(this.addr,e)}function $U(n,e,t){let i=this.cache,r=e.length,s=Ap(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yC,s[o])}function qU(n,e,t){let i=this.cache,r=e.length,s=Ap(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||EC,s[o])}function XU(n,e,t){let i=this.cache,r=e.length,s=Ap(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xC,s[o])}function YU(n,e,t){let i=this.cache,r=e.length,s=Ap(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_C,s[o])}function ZU(n){switch(n){case 5126:return RU;case 35664:return NU;case 35665:return PU;case 35666:return OU;case 35674:return LU;case 35675:return FU;case 35676:return kU;case 5124:case 35670:return UU;case 35667:case 35671:return BU;case 35668:case 35672:return VU;case 35669:case 35673:return HU;case 5125:return zU;case 36294:return GU;case 36295:return jU;case 36296:return WU;case 35678:case 36198:case 36298:case 36306:case 35682:return $U;case 35679:case 36299:case 36307:return qU;case 35680:case 36300:case 36308:case 36293:return XU;case 36289:case 36303:case 36311:case 36292:return YU}}var k_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IU(t.type)}},U_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZU(t.type)}},B_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},F_=/(\w+)(\])?(\[|\.)?/g;function oC(n,e){n.seq.push(e),n.map[e.id]=e}function JU(n,e,t){let i=n.name,r=i.length;for(F_.lastIndex=0;;){let s=F_.exec(i),o=F_.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){oC(t,l===void 0?new k_(a,n,e):new U_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new B_(a),oC(t,d)),t=d}}}var ka=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JU(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function aC(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var KU=37297,QU=0;function eB(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var cC=new We;function tB(n){at._getMatrix(cC,at.workingColorSpace,n);let e=`mat3( ${cC.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case El:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lC(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+eB(n.getShaderSource(e),a)}else return s}function nB(n,e){let t=tB(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iB(n,e){let t;switch(e){case wT:t="Linear";break;case TT:t="Reinhard";break;case CT:t="Cineon";break;case DT:t="ACESFilmic";break;case IT:t="AgX";break;case RT:t="Neutral";break;case AT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tp=new k;function rB(){at.getLuminanceCoefficients(Tp);let n=Tp.x.toFixed(4),e=Tp.y.toFixed(4),t=Tp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sB(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jl).join(`
`)}function oB(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aB(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jl(n){return n!==""}function uC(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dC(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cB=/^[ \t]*#include +<([\w\d./]+)>/gm;function V_(n){return n.replace(cB,uB)}var lB=new Map;function uB(n,e){let t=Xe[e];if(t===void 0){let i=lB.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return V_(t)}var dB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fC(n){return n.replace(dB,fB)}function fB(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hC(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hB(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function pB(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mB(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function gB(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case m_:e="ENVMAP_BLENDING_MULTIPLY";break;case ST:e="ENVMAP_BLENDING_MIX";break;case bT:e="ENVMAP_BLENDING_ADD";break}return e}function vB(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yB(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=hB(t),l=pB(t),u=mB(t),d=gB(t),f=vB(t),h=sB(t),g=oB(s),v=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jl).join(`
`),p.length>0&&(p+=`
`)):(m=[hC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jl).join(`
`),p=[hC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Tr?iB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,nB("linearToOutputTexel",t.outputColorSpace),rB(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jl).join(`
`)),o=V_(o),o=uC(o,t),o=dC(o,t),a=V_(a),a=uC(a,t),a=dC(a,t),o=fC(o),a=fC(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+o,x=b+p+a,C=aC(r,r.VERTEX_SHADER,w),A=aC(r,r.FRAGMENT_SHADER,x);r.attachShader(v,C),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(C)||"",q=r.getShaderInfoLog(A)||"",j=F.trim(),W=V.trim(),J=q.trim(),H=!0,oe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,A);else{let de=lC(r,C,"vertex"),Ce=lC(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+de+`
`+Ce)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(W===""||J==="")&&(oe=!1);oe&&(I.diagnostics={runnable:H,programLog:j,vertexShader:{log:W,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(C),r.deleteShader(A),O=new ka(r,v),M=aB(r,v)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,KU)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QU++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}var _B=0,H_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new z_(e),t.set(e,i)),i}},z_=class{constructor(e){this.id=_B++,this.code=e,this.usedTimes=0}};function EB(n,e,t,i,r,s,o){let a=new wl,c=new H_,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,E,I,F,V){let q=F.fog,j=V.geometry,W=M.isMeshStandardMaterial?F.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),H=J&&J.mapping===kl?J.image.height:null,oe=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ce=de!==void 0?de.length:0,Ze=0;j.morphAttributes.position!==void 0&&(Ze=1),j.morphAttributes.normal!==void 0&&(Ze=2),j.morphAttributes.color!==void 0&&(Ze=3);let xt,Tt,ht,X;if(oe){let pt=Ji[oe];xt=pt.vertexShader,Tt=pt.fragmentShader}else xt=M.vertexShader,Tt=M.fragmentShader,c.update(M),ht=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);let K=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ke=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,tt=!!M.map,cn=!!M.matcap,T=!!J,Ct=!!M.aoMap,He=!!M.lightMap,Le=!!M.bumpMap,ye=!!M.normalMap,Dt=!!M.displacementMap,_e=!!M.emissiveMap,qe=!!M.metalnessMap,Qt=!!M.roughnessMap,Lt=M.anisotropy>0,S=M.clearcoat>0,y=M.dispersion>0,L=M.iridescence>0,G=M.sheen>0,Z=M.transmission>0,z=Lt&&!!M.anisotropyMap,we=S&&!!M.clearcoatMap,ie=S&&!!M.clearcoatNormalMap,xe=S&&!!M.clearcoatRoughnessMap,Me=L&&!!M.iridescenceMap,te=L&&!!M.iridescenceThicknessMap,le=G&&!!M.sheenColorMap,Oe=G&&!!M.sheenRoughnessMap,Se=!!M.specularMap,ae=!!M.specularColorMap,$e=!!M.specularIntensityMap,R=Z&&!!M.transmissionMap,ne=Z&&!!M.thicknessMap,re=!!M.gradientMap,he=!!M.alphaMap,Q=M.alphaTest>0,Y=!!M.alphaHash,ve=!!M.extensions,Be=Tr;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=n.toneMapping);let Mt={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:xt,fragmentShader:Tt,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:ke,instancingColor:ke&&V.instanceColor!==null,instancingMorph:ke&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:cn,envMap:T,envMapMode:T&&J.mapping,envMapCubeUVHeight:H,aoMap:Ct,lightMap:He,bumpMap:Le,normalMap:ye,displacementMap:f&&Dt,emissiveMap:_e,normalMapObjectSpace:ye&&M.normalMapType===FT,normalMapTangentSpace:ye&&M.normalMapType===LT,metalnessMap:qe,roughnessMap:Qt,anisotropy:Lt,anisotropyMap:z,clearcoat:S,clearcoatMap:we,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:y,iridescence:L,iridescenceMap:Me,iridescenceThicknessMap:te,sheen:G,sheenColorMap:le,sheenRoughnessMap:Oe,specularMap:Se,specularColorMap:ae,specularIntensityMap:$e,transmission:Z,transmissionMap:R,thicknessMap:ne,gradientMap:re,opaque:M.transparent===!1&&M.blending===Zs&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:Q,alphaHash:Y,combine:M.combine,mapUv:tt&&v(M.map.channel),aoMapUv:Ct&&v(M.aoMap.channel),lightMapUv:He&&v(M.lightMap.channel),bumpMapUv:Le&&v(M.bumpMap.channel),normalMapUv:ye&&v(M.normalMap.channel),displacementMapUv:Dt&&v(M.displacementMap.channel),emissiveMapUv:_e&&v(M.emissiveMap.channel),metalnessMapUv:qe&&v(M.metalnessMap.channel),roughnessMapUv:Qt&&v(M.roughnessMap.channel),anisotropyMapUv:z&&v(M.anisotropyMap.channel),clearcoatMapUv:we&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(M.sheenRoughnessMap.channel),specularMapUv:Se&&v(M.specularMap.channel),specularColorMapUv:ae&&v(M.specularColorMap.channel),specularIntensityMapUv:$e&&v(M.specularIntensityMap.channel),transmissionMapUv:R&&v(M.transmissionMap.channel),thicknessMapUv:ne&&v(M.thicknessMap.channel),alphaMapUv:he&&v(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ye||Lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(tt||he),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&at.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xi,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(b(E,M),w(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function w(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let E=g[M.type],I;if(E){let F=Ji[E];I=qT.clone(F.uniforms)}else I=M.uniforms;return I}function C(M,E){let I;for(let F=0,V=u.length;F<V;F++){let q=u[F];if(q.cacheKey===E){I=q,++I.usedTimes;break}}return I===void 0&&(I=new yB(n,E,M,s),u.push(I)),I}function A(M){if(--M.usedTimes===0){let E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function D(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:u,dispose:O}}function xB(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function MB(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mC(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||MB),i.length>1&&i.sort(f||pC),r.length>1&&r.sort(f||pC)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function SB(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new mC,n.set(i,[o])):r>=s.length?(o=new mC,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bB(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new st};break;case"SpotLight":t={position:new k,direction:new k,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function wB(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TB=0;function CB(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DB(n){let e=new bB,t=wB(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new Gt,o=new Gt;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,b=0,w=0,x=0,C=0,A=0,D=0;l.sort(CB);for(let M=0,E=l.length;M<E;M++){let I=l[M],F=I.color,V=I.intensity,q=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*V,d+=F.g*V,f+=F.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],V);D++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,H=t.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=j,i.directionalShadowMatrix[h]=I.shadow.matrix,b++}i.directional[h]=W,h++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(V),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[v]=W;let J=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,J.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=J.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=j,x++}v++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let J=I.shadow,H=t.get(I);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==w||O.numSpotShadows!==x||O.numSpotMaps!==C||O.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,O.directionalLength=h,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=w,O.numSpotShadows=x,O.numSpotMaps=C,O.numLightProbes=D,i.version=TB++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let w=l[p];if(w.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(w.isSpotLight){let x=i.spot[h];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function gC(n){let e=new DB(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function AB(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new gC(n),e.set(r,[a])):s>=o.length?(a=new gC(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var IB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RB=`uniform sampler2D shadow_pass;
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
}`;function NB(n,e,t){let i=new Rl,r=new gt,s=new gt,o=new Ot,a=new Sh({depthPacking:OT}),c=new bh,l={},u=t.maxTextureSize,d={[Mr]:Sn,[Sn]:Mr,[Xi]:Xi},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:IB,fragmentShader:RB}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Kn;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let p=this.type;this.render=function(A,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(wr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==qi&&this.type===qi,q=p===qi&&this.type!==qi;for(let j=0,W=A.length;j<W;j++){let J=A[j],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||V===!0||q===!0){let Ce=this.type!==qi?{minFilter:ui,magFilter:ui}:{};H.map!==null&&H.map.dispose(),H.map=new $i(r.x,r.y,Ce),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let de=H.getViewportCount();for(let Ce=0;Ce<de;Ce++){let Ze=H.getViewport(Ce);o.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),F.viewport(o),H.updateMatrices(J,Ce),i=H.getFrustum(),x(D,O,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===qi&&b(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,I)};function b(A,D){let O=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,O,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,O,h,v,null)}function w(A,D,O,M){let E=null,I=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=O.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let F=E.uuid,V=D.uuid,q=l[F];q===void 0&&(q={},l[F]=q);let j=q[V];j===void 0&&(j=E.clone(),q[V]=j,D.addEventListener("dispose",C)),E=j}if(E.visible=D.visible,E.wireframe=D.wireframe,M===qi?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=n.properties.get(E);F.light=O}return E}function x(A,D,O,M,E){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===qi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let V=e.update(A),q=A.material;if(Array.isArray(q)){let j=V.groups;for(let W=0,J=j.length;W<J;W++){let H=j[W],oe=q[H.materialIndex];if(oe&&oe.visible){let de=w(A,oe,M,E);A.onBeforeShadow(n,A,D,O,V,de,H),n.renderBufferDirect(O,null,V,de,A,H),A.onAfterShadow(n,A,D,O,V,de,H)}}}else if(q.visible){let j=w(A,q,M,E);A.onBeforeShadow(n,A,D,O,V,j,null),n.renderBufferDirect(O,null,V,j,A,null),A.onAfterShadow(n,A,D,O,V,j,null)}}let F=A.children;for(let V=0,q=F.length;V<q;V++)x(F[V],D,O,M,E)}function C(A){A.target.removeEventListener("dispose",C);for(let O in l){let M=l[O],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}var PB={[Oh]:Lh,[Fh]:Bh,[kh]:Vh,[Js]:Uh,[Lh]:Oh,[Bh]:Fh,[Vh]:kh,[Uh]:Js};function OB(n,e){function t(){let R=!1,ne=new Ot,re=null,he=new Ot(0,0,0,0);return{setMask:function(Q){re!==Q&&!R&&(n.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){R=Q},setClear:function(Q,Y,ve,Be,Mt){Mt===!0&&(Q*=Be,Y*=Be,ve*=Be),ne.set(Q,Y,ve,Be),he.equals(ne)===!1&&(n.clearColor(Q,Y,ve,Be),he.copy(ne))},reset:function(){R=!1,re=null,he.set(-1,0,0,0)}}}function i(){let R=!1,ne=!1,re=null,he=null,Q=null;return{setReversed:function(Y){if(ne!==Y){let ve=e.get("EXT_clip_control");Y?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=Y;let Be=Q;Q=null,this.setClear(Be)}},getReversed:function(){return ne},setTest:function(Y){Y?K(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(Y){re!==Y&&!R&&(n.depthMask(Y),re=Y)},setFunc:function(Y){if(ne&&(Y=PB[Y]),he!==Y){switch(Y){case Oh:n.depthFunc(n.NEVER);break;case Lh:n.depthFunc(n.ALWAYS);break;case Fh:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case kh:n.depthFunc(n.EQUAL);break;case Uh:n.depthFunc(n.GEQUAL);break;case Bh:n.depthFunc(n.GREATER);break;case Vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Y}},setLocked:function(Y){R=Y},setClear:function(Y){Q!==Y&&(ne&&(Y=1-Y),n.clearDepth(Y),Q=Y)},reset:function(){R=!1,re=null,he=null,Q=null,ne=!1}}}function r(){let R=!1,ne=null,re=null,he=null,Q=null,Y=null,ve=null,Be=null,Mt=null;return{setTest:function(pt){R||(pt?K(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(pt){ne!==pt&&!R&&(n.stencilMask(pt),ne=pt)},setFunc:function(pt,Ki,Ii){(re!==pt||he!==Ki||Q!==Ii)&&(n.stencilFunc(pt,Ki,Ii),re=pt,he=Ki,Q=Ii)},setOp:function(pt,Ki,Ii){(Y!==pt||ve!==Ki||Be!==Ii)&&(n.stencilOp(pt,Ki,Ii),Y=pt,ve=Ki,Be=Ii)},setLocked:function(pt){R=pt},setClear:function(pt){Mt!==pt&&(n.clearStencil(pt),Mt=pt)},reset:function(){R=!1,ne=null,re=null,he=null,Q=null,Y=null,ve=null,Be=null,Mt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,b=null,w=null,x=null,C=null,A=null,D=new st(0,0,0),O=0,M=!1,E=null,I=null,F=null,V=null,q=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=J>=2);let oe=null,de={},Ce=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),xt=new Ot().fromArray(Ce),Tt=new Ot().fromArray(Ze);function ht(R,ne,re,he){let Q=new Uint8Array(4),Y=n.createTexture();n.bindTexture(R,Y),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<re;ve++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ne+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return Y}let X={};X[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Js),Le(!1),ye(d_),K(n.CULL_FACE),Ct(wr);function K(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function pe(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function ke(R,ne){return d[R]!==ne?(n.bindFramebuffer(R,ne),d[R]=ne,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(R,ne){let re=h,he=!1;if(R){re=f.get(ne),re===void 0&&(re=[],f.set(ne,re));let Q=R.textures;if(re.length!==Q.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,ve=Q.length;Y<ve;Y++)re[Y]=n.COLOR_ATTACHMENT0+Y;re.length=Q.length,he=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,he=!0);he&&n.drawBuffers(re)}function tt(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let cn={[Kr]:n.FUNC_ADD,[oT]:n.FUNC_SUBTRACT,[aT]:n.FUNC_REVERSE_SUBTRACT};cn[cT]=n.MIN,cn[lT]=n.MAX;let T={[uT]:n.ZERO,[dT]:n.ONE,[fT]:n.SRC_COLOR,[fh]:n.SRC_ALPHA,[yT]:n.SRC_ALPHA_SATURATE,[gT]:n.DST_COLOR,[pT]:n.DST_ALPHA,[hT]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[vT]:n.ONE_MINUS_DST_COLOR,[mT]:n.ONE_MINUS_DST_ALPHA,[_T]:n.CONSTANT_COLOR,[ET]:n.ONE_MINUS_CONSTANT_COLOR,[xT]:n.CONSTANT_ALPHA,[MT]:n.ONE_MINUS_CONSTANT_ALPHA};function Ct(R,ne,re,he,Q,Y,ve,Be,Mt,pt){if(R===wr){v===!0&&(pe(n.BLEND),v=!1);return}if(v===!1&&(K(n.BLEND),v=!0),R!==sT){if(R!==m||pt!==M){if((p!==Kr||x!==Kr)&&(n.blendEquation(n.FUNC_ADD),p=Kr,x=Kr),pt)switch(R){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.ONE,n.ONE);break;case h_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case p_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case h_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,w=null,C=null,A=null,D.set(0,0,0),O=0,m=R,M=pt}return}Q=Q||ne,Y=Y||re,ve=ve||he,(ne!==p||Q!==x)&&(n.blendEquationSeparate(cn[ne],cn[Q]),p=ne,x=Q),(re!==b||he!==w||Y!==C||ve!==A)&&(n.blendFuncSeparate(T[re],T[he],T[Y],T[ve]),b=re,w=he,C=Y,A=ve),(Be.equals(D)===!1||Mt!==O)&&(n.blendColor(Be.r,Be.g,Be.b,Mt),D.copy(Be),O=Mt),m=R,M=!1}function He(R,ne){R.side===Xi?pe(n.CULL_FACE):K(n.CULL_FACE);let re=R.side===Sn;ne&&(re=!re),Le(re),R.blending===Zs&&R.transparent===!1?Ct(wr):Ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let he=R.stencilWrite;a.setTest(he),he&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(R){E!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),E=R)}function ye(R){R!==nT?(K(n.CULL_FACE),R!==I&&(R===d_?n.cullFace(n.BACK):R===iT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),I=R}function Dt(R){R!==F&&(W&&n.lineWidth(R),F=R)}function _e(R,ne,re){R?(K(n.POLYGON_OFFSET_FILL),(V!==ne||q!==re)&&(n.polygonOffset(ne,re),V=ne,q=re)):pe(n.POLYGON_OFFSET_FILL)}function qe(R){R?K(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Qt(R){R===void 0&&(R=n.TEXTURE0+j-1),oe!==R&&(n.activeTexture(R),oe=R)}function Lt(R,ne,re){re===void 0&&(oe===null?re=n.TEXTURE0+j-1:re=oe);let he=de[re];he===void 0&&(he={type:void 0,texture:void 0},de[re]=he),(he.type!==R||he.texture!==ne)&&(oe!==re&&(n.activeTexture(re),oe=re),n.bindTexture(R,ne||X[R]),he.type=R,he.texture=ne)}function S(){let R=de[oe];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(R){xt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),xt.copy(R))}function Oe(R){Tt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Tt.copy(R))}function Se(R,ne){let re=l.get(ne);re===void 0&&(re=new WeakMap,l.set(ne,re));let he=re.get(R);he===void 0&&(he=n.getUniformBlockIndex(ne,R.name),re.set(R,he))}function ae(R,ne){let he=l.get(ne).get(R);c.get(ne)!==he&&(n.uniformBlockBinding(ne,he,R.__bindingPointIndex),c.set(ne,he))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,de={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,b=null,w=null,x=null,C=null,A=null,D=new st(0,0,0),O=0,M=!1,E=null,I=null,F=null,V=null,q=null,xt.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:pe,bindFramebuffer:ke,drawBuffers:Te,useProgram:tt,setBlending:Ct,setMaterial:He,setFlipSided:Le,setCullFace:ye,setLineWidth:Dt,setPolygonOffset:_e,setScissorTest:qe,activeTexture:Qt,bindTexture:Lt,unbindTexture:S,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:Me,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:xe,texSubImage2D:G,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:we,scissor:le,viewport:Oe,reset:$e}}function LB(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return h?new OffscreenCanvas(S,y):Ml("canvas")}function v(S,y,L){let G=1,Z=Lt(S);if((Z.width>L||Z.height>L)&&(G=L/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let z=Math.floor(G*Z.width),we=Math.floor(G*Z.height);d===void 0&&(d=g(z,we));let ie=y?g(z,we):d;return ie.width=z,ie.height=we,ie.getContext("2d").drawImage(S,0,0,z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+we+")."),ie}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,y,L,G,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=y;if(y===n.RED&&(L===n.FLOAT&&(z=n.R32F),L===n.HALF_FLOAT&&(z=n.R16F),L===n.UNSIGNED_BYTE&&(z=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.R8UI),L===n.UNSIGNED_SHORT&&(z=n.R16UI),L===n.UNSIGNED_INT&&(z=n.R32UI),L===n.BYTE&&(z=n.R8I),L===n.SHORT&&(z=n.R16I),L===n.INT&&(z=n.R32I)),y===n.RG&&(L===n.FLOAT&&(z=n.RG32F),L===n.HALF_FLOAT&&(z=n.RG16F),L===n.UNSIGNED_BYTE&&(z=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RG8UI),L===n.UNSIGNED_SHORT&&(z=n.RG16UI),L===n.UNSIGNED_INT&&(z=n.RG32UI),L===n.BYTE&&(z=n.RG8I),L===n.SHORT&&(z=n.RG16I),L===n.INT&&(z=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(z=n.RGB16UI),L===n.UNSIGNED_INT&&(z=n.RGB32UI),L===n.BYTE&&(z=n.RGB8I),L===n.SHORT&&(z=n.RGB16I),L===n.INT&&(z=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),L===n.UNSIGNED_INT&&(z=n.RGBA32UI),L===n.BYTE&&(z=n.RGBA8I),L===n.SHORT&&(z=n.RGBA16I),L===n.INT&&(z=n.RGBA32I)),y===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),y===n.RGBA){let we=Z?El:at.getTransfer(G);L===n.FLOAT&&(z=n.RGBA32F),L===n.HALF_FLOAT&&(z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(z=we===vt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function x(S,y){let L;return S?y===null||y===rs||y===Pa?L=n.DEPTH24_STENCIL8:y===Zi?L=n.DEPTH32F_STENCIL8:y===Ra&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===rs||y===Pa?L=n.DEPTH_COMPONENT24:y===Zi?L=n.DEPTH_COMPONENT32F:y===Ra&&(L=n.DEPTH_COMPONENT16),L}function C(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==ui&&S.minFilter!==Ci?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function A(S){let y=S.target;y.removeEventListener("dispose",A),O(y),y.isVideoTexture&&u.delete(y)}function D(S){let y=S.target;y.removeEventListener("dispose",D),E(y)}function O(S){let y=i.get(S);if(y.__webglInit===void 0)return;let L=S.source,G=f.get(L);if(G){let Z=G[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys(G).length===0&&f.delete(L)}i.remove(S)}function M(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let L=S.source,G=f.get(L);delete G[y.__cacheKey],o.memory.textures--}function E(S){let y=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let Z=0;Z<y.__webglFramebuffer[G].length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[G][Z]);else n.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)n.deleteFramebuffer(y.__webglFramebuffer[G]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=S.textures;for(let G=0,Z=L.length;G<Z;G++){let z=i.get(L[G]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(L[G])}i.remove(S)}let I=0;function F(){I=0}function V(){let S=I;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),I+=1,S}function q(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function j(S,y){let L=i.get(S);if(S.isVideoTexture&&qe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){let G=S.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(L,S,y);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function W(S,y){let L=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){X(L,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function J(S,y){let L=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){X(L,S,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function H(S,y){let L=i.get(S);if(S.version>0&&L.__version!==S.version){K(L,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let oe={[ph]:n.REPEAT,[Jr]:n.CLAMP_TO_EDGE,[mh]:n.MIRRORED_REPEAT},de={[ui]:n.NEAREST,[NT]:n.NEAREST_MIPMAP_NEAREST,[Ul]:n.NEAREST_MIPMAP_LINEAR,[Ci]:n.LINEAR,[Gh]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Ce={[kT]:n.NEVER,[GT]:n.ALWAYS,[UT]:n.LESS,[b_]:n.LEQUAL,[BT]:n.EQUAL,[zT]:n.GEQUAL,[VT]:n.GREATER,[HT]:n.NOTEQUAL};function Ze(S,y){if(y.type===Zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ci||y.magFilter===Gh||y.magFilter===Ul||y.magFilter===is||y.minFilter===Ci||y.minFilter===Gh||y.minFilter===Ul||y.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,oe[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,oe[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,oe[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,de[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ui||y.minFilter!==Ul&&y.minFilter!==is||y.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function xt(S,y){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",A));let G=y.source,Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));let z=q(y);if(z!==S.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[z].usedTimes++;let we=Z[S.__cacheKey];we!==void 0&&(Z[S.__cacheKey].usedTimes--,we.usedTimes===0&&M(y)),S.__cacheKey=z,S.__webglTexture=Z[z].texture}return L}function Tt(S,y,L){return Math.floor(Math.floor(S/L)/y)}function ht(S,y,L,G){let z=S.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,L,G,y.data);else{z.sort((te,le)=>te.start-le.start);let we=0;for(let te=1;te<z.length;te++){let le=z[we],Oe=z[te],Se=le.start+le.count,ae=Tt(Oe.start,y.width,4),$e=Tt(le.start,y.width,4);Oe.start<=Se+1&&ae===$e&&Tt(Oe.start+Oe.count-1,y.width,4)===ae?le.count=Math.max(le.count,Oe.start+Oe.count-le.start):(++we,z[we]=Oe)}z.length=we+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let te=0,le=z.length;te<le;te++){let Oe=z[te],Se=Math.floor(Oe.start/4),ae=Math.ceil(Oe.count/4),$e=Se%y.width,R=Math.floor(Se/y.width),ne=ae,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,$e,R,ne,re,L,G,y.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function X(S,y,L){let G=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=n.TEXTURE_3D);let Z=xt(S,y),z=y.source;t.bindTexture(G,S.__webglTexture,n.TEXTURE0+L);let we=i.get(z);if(z.version!==we.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);let ie=at.getPrimaries(at.workingColorSpace),xe=y.colorSpace===Cr?null:at.getPrimaries(y.colorSpace),Me=y.colorSpace===Cr||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let te=v(y.image,!1,r.maxTextureSize);te=Qt(y,te);let le=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type),Se=w(y.internalFormat,le,Oe,y.colorSpace,y.isVideoTexture);Ze(G,y);let ae,$e=y.mipmaps,R=y.isVideoTexture!==!0,ne=we.__version===void 0||Z===!0,re=z.dataReady,he=C(y,te);if(y.isDepthTexture)Se=x(y.format===Oa,y.type),ne&&(R?t.texStorage2D(n.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,le,Oe,null));else if(y.isDataTexture)if($e.length>0){R&&ne&&t.texStorage2D(n.TEXTURE_2D,he,Se,$e[0].width,$e[0].height);for(let Q=0,Y=$e.length;Q<Y;Q++)ae=$e[Q],R?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ae.width,ae.height,le,Oe,ae.data):t.texImage2D(n.TEXTURE_2D,Q,Se,ae.width,ae.height,0,le,Oe,ae.data);y.generateMipmaps=!1}else R?(ne&&t.texStorage2D(n.TEXTURE_2D,he,Se,te.width,te.height),re&&ht(y,te,le,Oe)):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,le,Oe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){R&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Se,$e[0].width,$e[0].height,te.depth);for(let Q=0,Y=$e.length;Q<Y;Q++)if(ae=$e[Q],y.format!==fi)if(le!==null)if(R){if(re)if(y.layerUpdates.size>0){let ve=I_(ae.width,ae.height,y.format,y.type);for(let Be of y.layerUpdates){let Mt=ae.data.subarray(Be*ve/ae.data.BYTES_PER_ELEMENT,(Be+1)*ve/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Be,ae.width,ae.height,1,le,Mt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Se,ae.width,ae.height,te.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,le,Oe,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Se,ae.width,ae.height,te.depth,0,le,Oe,ae.data)}else{R&&ne&&t.texStorage2D(n.TEXTURE_2D,he,Se,$e[0].width,$e[0].height);for(let Q=0,Y=$e.length;Q<Y;Q++)ae=$e[Q],y.format!==fi?le!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ae.width,ae.height,le,Oe,ae.data):t.texImage2D(n.TEXTURE_2D,Q,Se,ae.width,ae.height,0,le,Oe,ae.data)}else if(y.isDataArrayTexture)if(R){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Se,te.width,te.height,te.depth),re)if(y.layerUpdates.size>0){let Q=I_(te.width,te.height,y.format,y.type);for(let Y of y.layerUpdates){let ve=te.data.subarray(Y*Q/te.data.BYTES_PER_ELEMENT,(Y+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,le,Oe,ve)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Oe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,le,Oe,te.data);else if(y.isData3DTexture)R?(ne&&t.texStorage3D(n.TEXTURE_3D,he,Se,te.width,te.height,te.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Oe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,le,Oe,te.data);else if(y.isFramebufferTexture){if(ne)if(R)t.texStorage2D(n.TEXTURE_2D,he,Se,te.width,te.height);else{let Q=te.width,Y=te.height;for(let ve=0;ve<he;ve++)t.texImage2D(n.TEXTURE_2D,ve,Se,Q,Y,0,le,Oe,null),Q>>=1,Y>>=1}}else if($e.length>0){if(R&&ne){let Q=Lt($e[0]);t.texStorage2D(n.TEXTURE_2D,he,Se,Q.width,Q.height)}for(let Q=0,Y=$e.length;Q<Y;Q++)ae=$e[Q],R?re&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le,Oe,ae):t.texImage2D(n.TEXTURE_2D,Q,Se,le,Oe,ae);y.generateMipmaps=!1}else if(R){if(ne){let Q=Lt(te);t.texStorage2D(n.TEXTURE_2D,he,Se,Q.width,Q.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Oe,te)}else t.texImage2D(n.TEXTURE_2D,0,Se,le,Oe,te);m(y)&&p(G),we.__version=z.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function K(S,y,L){if(y.image.length!==6)return;let G=xt(S,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);let z=i.get(Z);if(Z.version!==z.__version||G===!0){t.activeTexture(n.TEXTURE0+L);let we=at.getPrimaries(at.workingColorSpace),ie=y.colorSpace===Cr?null:at.getPrimaries(y.colorSpace),xe=y.colorSpace===Cr||we===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Me=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!Me&&!te?le[Y]=v(y.image[Y],!0,r.maxCubemapSize):le[Y]=te?y.image[Y].image:y.image[Y],le[Y]=Qt(y,le[Y]);let Oe=le[0],Se=s.convert(y.format,y.colorSpace),ae=s.convert(y.type),$e=w(y.internalFormat,Se,ae,y.colorSpace),R=y.isVideoTexture!==!0,ne=z.__version===void 0||G===!0,re=Z.dataReady,he=C(y,Oe);Ze(n.TEXTURE_CUBE_MAP,y);let Q;if(Me){R&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,$e,Oe.width,Oe.height);for(let Y=0;Y<6;Y++){Q=le[Y].mipmaps;for(let ve=0;ve<Q.length;ve++){let Be=Q[ve];y.format!==fi?Se!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Be.width,Be.height,Se,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,$e,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Be.width,Be.height,Se,ae,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,$e,Be.width,Be.height,0,Se,ae,Be.data)}}}else{if(Q=y.mipmaps,R&&ne){Q.length>0&&he++;let Y=Lt(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,$e,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,Se,ae,le[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$e,le[Y].width,le[Y].height,0,Se,ae,le[Y].data);for(let ve=0;ve<Q.length;ve++){let Mt=Q[ve].image[Y].image;R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,Mt.width,Mt.height,Se,ae,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,$e,Mt.width,Mt.height,0,Se,ae,Mt.data)}}else{R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Se,ae,le[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$e,Se,ae,le[Y]);for(let ve=0;ve<Q.length;ve++){let Be=Q[ve];R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,Se,ae,Be.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,$e,Se,ae,Be.image[Y])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function pe(S,y,L,G,Z,z){let we=s.convert(L.format,L.colorSpace),ie=s.convert(L.type),xe=w(L.internalFormat,we,ie,L.colorSpace),Me=i.get(y),te=i.get(L);if(te.__renderTarget=y,!Me.__hasExternalTextures){let le=Math.max(1,y.width>>z),Oe=Math.max(1,y.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,xe,le,Oe,y.depth,0,we,ie,null):t.texImage2D(Z,z,xe,le,Oe,0,we,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Z,te.__webglTexture,0,Dt(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Z,te.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(S,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let G=y.depthTexture,Z=G&&G.isDepthTexture?G.type:null,z=x(y.stencilBuffer,Z),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Dt(y);_e(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,z,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{let G=y.textures;for(let Z=0;Z<G.length;Z++){let z=G[Z],we=s.convert(z.format,z.colorSpace),ie=s.convert(z.type),xe=w(z.internalFormat,we,ie,z.colorSpace),Me=Dt(y);L&&_e(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,xe,y.width,y.height):_e(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(y.depthTexture);G.__renderTarget=y,(!G.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);let Z=G.__webglTexture,z=Dt(y);if(y.depthTexture.format===wa)_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Oa)_e(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function tt(S){let y=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let G=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=G}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");let G=S.texture.mipmaps;G&&G.length>0?Te(y.__webglFramebuffer[0],S):Te(y.__webglFramebuffer,S)}else if(L){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=n.createRenderbuffer(),ke(y.__webglDepthbuffer[G],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{let G=S.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ke(y.__webglDepthbuffer,S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function cn(S,y,L){let G=i.get(S);y!==void 0&&pe(G.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&tt(S)}function T(S){let y=S.texture,L=i.get(S),G=i.get(y);S.addEventListener("dispose",D);let Z=S.textures,z=S.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=y.version,o.memory.textures++),z){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let xe=0;xe<y.mipmaps.length;xe++)L.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else L.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)L.__webglFramebuffer[ie]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(we)for(let ie=0,xe=Z.length;ie<xe;ie++){let Me=i.get(Z[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&_e(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let xe=Z[ie];L.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ie]);let Me=s.convert(xe.format,xe.colorSpace),te=s.convert(xe.type),le=w(xe.internalFormat,Me,te,xe.colorSpace,S.isXRRenderTarget===!0),Oe=Dt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,le,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,L.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)pe(L.__webglFramebuffer[ie][xe],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else pe(L.__webglFramebuffer[ie],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ie=0,xe=Z.length;ie<xe;ie++){let Me=Z[ie],te=i.get(Me),le=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(le=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Ze(le,Me),pe(L.__webglFramebuffer,S,Me,n.COLOR_ATTACHMENT0+ie,le,0),m(Me)&&p(le)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ie=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),Ze(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)pe(L.__webglFramebuffer[xe],S,y,n.COLOR_ATTACHMENT0,ie,xe);else pe(L.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ie,0);m(y)&&p(ie),t.unbindTexture()}S.depthBuffer&&tt(S)}function Ct(S){let y=S.textures;for(let L=0,G=y.length;L<G;L++){let Z=y[L];if(m(Z)){let z=b(S),we=i.get(Z).__webglTexture;t.bindTexture(z,we),p(z),t.unbindTexture()}}}let He=[],Le=[];function ye(S){if(S.samples>0){if(_e(S)===!1){let y=S.textures,L=S.width,G=S.height,Z=n.COLOR_BUFFER_BIT,z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),ie=y.length>1;if(ie)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let xe=S.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Me]);let te=i.get(y[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,L,G,0,0,L,G,Z,n.NEAREST),c===!0&&(He.length=0,Le.length=0,He.push(n.COLOR_ATTACHMENT0+Me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(He.push(z),Le.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,we.__webglColorRenderbuffer[Me]);let te=i.get(y[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Dt(S){return Math.min(r.maxSamples,S.samples)}function _e(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function qe(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function Qt(S,y){let L=S.colorSpace,G=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ks&&L!==Cr&&(at.getTransfer(L)===vt?(G!==fi||Z!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Lt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=cn,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=_e}function FB(n,e){function t(i,r=Cr){let s,o=at.getTransfer(r);if(i===Yi)return n.UNSIGNED_BYTE;if(i===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return n.UNSIGNED_SHORT_5_5_5_1;if(i===y_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===__)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===g_)return n.BYTE;if(i===v_)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===jh)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===Zi)return n.FLOAT;if(i===Na)return n.HALF_FLOAT;if(i===E_)return n.ALPHA;if(i===x_)return n.RGB;if(i===fi)return n.RGBA;if(i===wa)return n.DEPTH_COMPONENT;if(i===Oa)return n.DEPTH_STENCIL;if(i===M_)return n.RED;if(i===qh)return n.RED_INTEGER;if(i===S_)return n.RG;if(i===Xh)return n.RG_INTEGER;if(i===Yh)return n.RGBA_INTEGER;if(i===Bl||i===Vl||i===Hl||i===zl)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===Jh||i===Kh||i===Qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ep||i===tp)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===np)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ip||i===rp||i===sp||i===op||i===ap||i===cp||i===lp||i===up||i===dp||i===fp||i===hp||i===pp||i===mp||i===gp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ip)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===op)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ap)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===up)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gp)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vp||i===yp||i===_p)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vp)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_p)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ep||i===xp||i===Mp||i===Sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ep)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var kB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UB=`
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

}`,G_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Di({vertexShader:kB,fragmentShader:UB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new Ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},j_=class extends Sr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,v=typeof XRWebGLBinding<"u",m=new G_,p={},b=t.getContextAttributes(),w=null,x=null,C=[],A=[],D=new gt,O=null,M=new gn;M.viewport=new Ot;let E=new gn;E.viewport=new Ot;let I=[M,E],F=new Ph,V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=C[X];return K===void 0&&(K=new Aa,C[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=C[X];return K===void 0&&(K=new Aa,C[X]=K),K.getGripSpace()},this.getHand=function(X){let K=C[X];return K===void 0&&(K=new Aa,C[X]=K),K.getHandSpace()};function j(X){let K=A.indexOf(X.inputSource);if(K===-1)return;let pe=C[K];pe!==void 0&&(pe.update(X.inputSource,X.frame,l||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let X=0;X<C.length;X++){let K=A[X];K!==null&&(A[X]=null,C[X].disconnect(K))}V=null,q=null,m.reset();for(let X in p)delete p[X];e.setRenderTarget(w),h=null,f=null,d=null,r=null,x=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ke=null,Te=null;b.depth&&(Te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?Oa:wa,ke=b.stencil?Pa:rs);let tt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(tt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new $i(f.textureWidth,f.textureHeight,{format:fi,type:Yi,depthTexture:new Pl(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new $i(h.framebufferWidth,h.framebufferHeight,{format:fi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(X){for(let K=0;K<X.removed.length;K++){let pe=X.removed[K],ke=A.indexOf(pe);ke>=0&&(A[ke]=null,C[ke].disconnect(pe))}for(let K=0;K<X.added.length;K++){let pe=X.added[K],ke=A.indexOf(pe);if(ke===-1){for(let tt=0;tt<C.length;tt++)if(tt>=A.length){A.push(pe),ke=tt;break}else if(A[tt]===null){A[tt]=pe,ke=tt;break}if(ke===-1)break}let Te=C[ke];Te&&Te.connect(pe)}}let H=new k,oe=new k;function de(X,K,pe){H.setFromMatrixPosition(K.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);let ke=H.distanceTo(oe),Te=K.projectionMatrix.elements,tt=pe.projectionMatrix.elements,cn=Te[14]/(Te[10]-1),T=Te[14]/(Te[10]+1),Ct=(Te[9]+1)/Te[5],He=(Te[9]-1)/Te[5],Le=(Te[8]-1)/Te[0],ye=(tt[8]+1)/tt[0],Dt=cn*Le,_e=cn*ye,qe=ke/(-Le+ye),Qt=qe*-Le;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qt),X.translateZ(qe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Lt=cn+qe,S=T+qe,y=Dt-Qt,L=_e+(ke-Qt),G=Ct*T/S*Lt,Z=He*T/S*Lt;X.projectionMatrix.makePerspective(y,L,G,Z,Lt,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ce(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,pe=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=E.near=M.near=K,F.far=E.far=M.far=pe,(V!==F.near||q!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,q=F.far),F.layers.mask=X.layers.mask|6,M.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;let ke=X.parent,Te=F.cameras;Ce(F,ke);for(let tt=0;tt<Te.length;tt++)Ce(Te[tt],ke);Te.length===2?de(F,M,E):F.projectionMatrix.copy(M.projectionMatrix),Ze(X,F,ke)};function Ze(X,K,pe){pe===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(X){return p[X]};let xt=null;function Tt(X,K){if(u=K.getViewerPose(l||o),g=K,u!==null){let pe=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let ke=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let T=0;T<pe.length;T++){let Ct=pe[T],He=null;if(h!==null)He=h.getViewport(Ct);else{let ye=d.getViewSubImage(f,Ct);He=ye.viewport,T===0&&(e.setRenderTargetTextures(x,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(x))}let Le=I[T];Le===void 0&&(Le=new gn,Le.layers.enable(T),Le.viewport=new Ot,I[T]=Le),Le.matrix.fromArray(Ct.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ct.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(He.x,He.y,He.width,He.height),T===0&&(F.matrix.copy(Le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(Le)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let T=d.getDepthInformation(pe[0]);T&&T.isValid&&T.texture&&m.init(T,r.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<pe.length;T++){let Ct=pe[T].camera;if(Ct){let He=p[Ct];He||(He=new Ol,p[Ct]=He);let Le=d.getCameraImage(Ct);He.sourceTexture=Le}}}}for(let pe=0;pe<C.length;pe++){let ke=A[pe],Te=C[pe];ke!==null&&Te!==void 0&&Te.update(ke,K,l||o)}xt&&xt(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let ht=new vC;ht.setAnimationLoop(Tt),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}},co=new eo,BB=new Gt;function VB(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,C_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),w=b.envMap,x=b.envMapRotation;w&&(m.envMap.value=w,co.copy(x),co.x*=-1,co.y*=-1,co.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),m.envMapRotation.value.setFromMatrix4(BB.makeRotationFromEuler(co)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HB(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){let x=w.program;i.uniformBlockBinding(b,x)}function l(b,w){let x=r[b.id];x===void 0&&(g(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",m));let C=w.program;i.updateUBOMapping(b,C);let A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){let w=d();b.__bindingPointIndex=w;let x=n.createBuffer(),C=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,x),x}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=r[b.id],x=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,D=x.length;A<D;A++){let O=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,E=O.length;M<E;M++){let I=O[M];if(h(I,A,M,C)===!0){let F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],q=0;for(let j=0;j<V.length;j++){let W=V[j],J=v(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+q,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,x,C){let A=b.value,D=w+"_"+x;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{let O=C[D];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return C[D]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(b){let w=b.uniforms,x=0,C=16;for(let D=0,O=w.length;D<O;D++){let M=Array.isArray(w[D])?w[D]:[w[D]];for(let E=0,I=M.length;E<I;E++){let F=M[E],V=Array.isArray(F.value)?F.value:[F.value];for(let q=0,j=V.length;q<j;q++){let W=V[q],J=v(W),H=x%C,oe=H%J.boundary,de=H+oe;x+=oe,de!==0&&C-de<J.storage&&(x+=C-de),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=J.storage}}}let A=x%C;return A>0&&(x+=C-A),b.__size=x,b.__cache={},this}function v(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Dp=class{constructor(e={}){let{canvas:t=jT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,C=!1;this._outputColorSpace=Zn;let A=0,D=0,O=null,M=-1,E=null,I=new Ot,F=new Ot,V=null,q=new st(0),j=0,W=t.width,J=t.height,H=1,oe=null,de=null,Ce=new Ot(0,0,W,J),Ze=new Ot(0,0,W,J),xt=!1,Tt=new Rl,ht=!1,X=!1,K=new Gt,pe=new k,ke=new Ot,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function cn(){return O===null?H:1}let T=i;function Ct(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Q,!1),T===null){let N="webgl2";if(T=Ct(N,_),T===null)throw Ct(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let He,Le,ye,Dt,_e,qe,Qt,Lt,S,y,L,G,Z,z,we,ie,xe,Me,te,le,Oe,Se,ae,$e;function R(){He=new sU(T),He.init(),Se=new FB(T,He),Le=new K2(T,He,e,Se),ye=new OB(T,He),Le.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),Dt=new cU(T),_e=new xB,qe=new LB(T,He,ye,_e,Le,Se,Dt),Qt=new eU(x),Lt=new rU(x),S=new pF(T),ae=new Z2(T,S),y=new oU(T,S,Dt,ae),L=new uU(T,y,S,Dt),te=new lU(T,Le,qe),ie=new Q2(_e),G=new EB(x,Qt,Lt,He,Le,ae,ie),Z=new VB(x,_e),z=new SB,we=new AB(He),Me=new Y2(x,Qt,Lt,ye,L,h,c),xe=new NB(x,L,Le),$e=new HB(T,Dt,Le,ye),le=new J2(T,He,Dt),Oe=new aU(T,He,Dt),Dt.programs=G.programs,x.capabilities=Le,x.extensions=He,x.properties=_e,x.renderLists=z,x.shadowMap=xe,x.state=ye,x.info=Dt}R();let ne=new j_(x,T);this.xr=ne,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let _=He.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=He.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(W,J,!1))},this.getSize=function(_){return _.set(W,J)},this.setSize=function(_,N,U=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=_,J=N,t.width=Math.floor(_*H),t.height=Math.floor(N*H),U===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(W*H,J*H).floor()},this.setDrawingBufferSize=function(_,N,U){W=_,J=N,H=U,t.width=Math.floor(_*U),t.height=Math.floor(N*U),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(I)},this.getViewport=function(_){return _.copy(Ce)},this.setViewport=function(_,N,U,B){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,N,U,B),ye.viewport(I.copy(Ce).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(Ze)},this.setScissor=function(_,N,U,B){_.isVector4?Ze.set(_.x,_.y,_.z,_.w):Ze.set(_,N,U,B),ye.scissor(F.copy(Ze).multiplyScalar(H).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(_){ye.setScissorTest(xt=_)},this.setOpaqueSort=function(_){oe=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,U=!0){let B=0;if(_){let P=!1;if(O!==null){let ee=O.texture.format;P=ee===Yh||ee===Xh||ee===qh}if(P){let ee=O.texture.type,ce=ee===Yi||ee===rs||ee===Ra||ee===Pa||ee===Wh||ee===$h,me=Me.getClearColor(),fe=Me.getClearAlpha(),Ne=me.r,Fe=me.g,De=me.b;ce?(g[0]=Ne,g[1]=Fe,g[2]=De,g[3]=fe,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Ne,v[1]=Fe,v[2]=De,v[3]=fe,T.clearBufferiv(T.COLOR,0,v))}else B|=T.COLOR_BUFFER_BIT}N&&(B|=T.DEPTH_BUFFER_BIT),U&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Me.dispose(),z.dispose(),we.dispose(),_e.dispose(),Qt.dispose(),Lt.dispose(),L.dispose(),ae.dispose(),$e.dispose(),G.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ii),ne.removeEventListener("sessionend",$_),as.stop()};function re(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let _=Dt.autoReset,N=xe.enabled,U=xe.autoUpdate,B=xe.needsUpdate,P=xe.type;R(),Dt.autoReset=_,xe.enabled=N,xe.autoUpdate=U,xe.needsUpdate=B,xe.type=P}function Q(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Y(_){let N=_.target;N.removeEventListener("dispose",Y),ve(N)}function ve(_){Be(_),_e.remove(_)}function Be(_){let N=_e.get(_).programs;N!==void 0&&(N.forEach(function(U){G.releaseProgram(U)}),_.isShaderMaterial&&G.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,U,B,P,ee){N===null&&(N=Te);let ce=P.isMesh&&P.matrixWorld.determinant()<0,me=MC(_,N,U,B,P);ye.setMaterial(B,ce);let fe=U.index,Ne=1;if(B.wireframe===!0){if(fe=y.getWireframeAttribute(U),fe===void 0)return;Ne=2}let Fe=U.drawRange,De=U.attributes.position,Ke=Fe.start*Ne,yt=(Fe.start+Fe.count)*Ne;ee!==null&&(Ke=Math.max(Ke,ee.start*Ne),yt=Math.min(yt,(ee.start+ee.count)*Ne)),fe!==null?(Ke=Math.max(Ke,0),yt=Math.min(yt,fe.count)):De!=null&&(Ke=Math.max(Ke,0),yt=Math.min(yt,De.count));let Rt=yt-Ke;if(Rt<0||Rt===1/0)return;ae.setup(P,B,me,U,fe);let bt,_t=le;if(fe!==null&&(bt=S.get(fe),_t=Oe,_t.setIndex(bt)),P.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*cn()),_t.setMode(T.LINES)):_t.setMode(T.TRIANGLES);else if(P.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*cn()),P.isLineSegments?_t.setMode(T.LINES):P.isLineLoop?_t.setMode(T.LINE_LOOP):_t.setMode(T.LINE_STRIP)}else P.isPoints?_t.setMode(T.POINTS):P.isSprite&&_t.setMode(T.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ta("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))_t.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Re=P._multiDrawStarts,At=P._multiDrawCounts,ct=P._multiDrawCount,On=fe?S.get(fe).bytesPerElement:1,fo=_e.get(B).currentProgram.getUniforms();for(let Ln=0;Ln<ct;Ln++)fo.setValue(T,"_gl_DrawID",Ln),_t.render(Re[Ln]/On,At[Ln])}else if(P.isInstancedMesh)_t.renderInstances(Ke,Rt,P.count);else if(U.isInstancedBufferGeometry){let Re=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,At=Math.min(U.instanceCount,Re);_t.renderInstances(Ke,Rt,At)}else _t.render(Ke,Rt)};function Mt(_,N,U){_.transparent===!0&&_.side===Xi&&_.forceSinglePass===!1?(_.side=Sn,_.needsUpdate=!0,$l(_,N,U),_.side=Mr,_.needsUpdate=!0,$l(_,N,U),_.side=Xi):$l(_,N,U)}this.compile=function(_,N,U=null){U===null&&(U=_),p=we.get(U),p.init(N),w.push(p),U.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),_!==U&&_.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let B=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let ee=P.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){let me=ee[ce];Mt(me,U,P),B.add(me)}else Mt(ee,U,P),B.add(ee)}),p=w.pop(),B},this.compileAsync=function(_,N,U=null){let B=this.compile(_,N,U);return new Promise(P=>{function ee(){if(B.forEach(function(ce){_e.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){P(_);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let pt=null;function Ki(_){pt&&pt(_)}function Ii(){as.stop()}function $_(){as.start()}let as=new vC;as.setAnimationLoop(Ki),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(_){pt=_,ne.setAnimationLoop(_),_===null?as.stop():as.start()},ne.addEventListener("sessionstart",Ii),ne.addEventListener("sessionend",$_),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,N,O),p=we.get(_,w.length),p.init(N),w.push(p),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Tt.setFromProjectionMatrix(K,wi,N.reversedDepth),X=this.localClippingEnabled,ht=ie.init(this.clippingPlanes,X),m=z.get(_,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&Np(ee,N,-1/0,x.sortObjects)}Np(_,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(oe,de),tt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,tt&&Me.addToRenderList(m,_),this.info.render.frame++,ht===!0&&ie.beginShadows();let U=p.state.shadowsArray;xe.render(U,_,N),ht===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,P=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ee=N.cameras;if(P.length>0)for(let ce=0,me=ee.length;ce<me;ce++){let fe=ee[ce];X_(B,P,_,fe)}tt&&Me.render(_);for(let ce=0,me=ee.length;ce<me;ce++){let fe=ee[ce];q_(m,_,fe,fe.viewport)}}else P.length>0&&X_(B,P,_,N),tt&&Me.render(_),q_(m,_,N);O!==null&&D===0&&(qe.updateMultisampleRenderTarget(O),qe.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(x,_,N),ae.resetDefaultState(),M=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],ht===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Np(_,N,U,B){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Tt.intersectsSprite(_)){B&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(K);let ce=L.update(_),me=_.material;me.visible&&m.push(_,ce,me,U,ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Tt.intersectsObject(_))){let ce=L.update(_),me=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ke.copy(ce.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(K)),Array.isArray(me)){let fe=ce.groups;for(let Ne=0,Fe=fe.length;Ne<Fe;Ne++){let De=fe[Ne],Ke=me[De.materialIndex];Ke&&Ke.visible&&m.push(_,ce,Ke,U,ke.z,De)}}else me.visible&&m.push(_,ce,me,U,ke.z,null)}}let ee=_.children;for(let ce=0,me=ee.length;ce<me;ce++)Np(ee[ce],N,U,B)}function q_(_,N,U,B){let P=_.opaque,ee=_.transmissive,ce=_.transparent;p.setupLightsView(U),ht===!0&&ie.setGlobalState(x.clippingPlanes,U),B&&ye.viewport(I.copy(B)),P.length>0&&Wl(P,N,U),ee.length>0&&Wl(ee,N,U),ce.length>0&&Wl(ce,N,U),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function X_(_,N,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new $i(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Na:Yi,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let ee=p.state.transmissionRenderTarget[B.id],ce=B.viewport||I;ee.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let me=x.getRenderTarget(),fe=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(q),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Me.render(U);let Fe=x.toneMapping;x.toneMapping=Tr;let De=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ht===!0&&ie.setGlobalState(x.clippingPlanes,B),Wl(_,U,B),qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let yt=0,Rt=N.length;yt<Rt;yt++){let bt=N[yt],_t=bt.object,Re=bt.geometry,At=bt.material,ct=bt.group;if(At.side===Xi&&_t.layers.test(B.layers)){let On=At.side;At.side=Sn,At.needsUpdate=!0,Y_(_t,U,B,Re,At,ct),At.side=On,At.needsUpdate=!0,Ke=!0}}Ke===!0&&(qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee))}x.setRenderTarget(me,fe,Ne),x.setClearColor(q,j),De!==void 0&&(B.viewport=De),x.toneMapping=Fe}function Wl(_,N,U){let B=N.isScene===!0?N.overrideMaterial:null;for(let P=0,ee=_.length;P<ee;P++){let ce=_[P],me=ce.object,fe=ce.geometry,Ne=ce.group,Fe=ce.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),me.layers.test(U.layers)&&Y_(me,N,U,fe,Fe,Ne)}}function Y_(_,N,U,B,P,ee){_.onBeforeRender(x,N,U,B,P,ee),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(x,N,U,B,_,ee),P.transparent===!0&&P.side===Xi&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,x.renderBufferDirect(U,N,B,P,_,ee),P.side=Mr,P.needsUpdate=!0,x.renderBufferDirect(U,N,B,P,_,ee),P.side=Xi):x.renderBufferDirect(U,N,B,P,_,ee),_.onAfterRender(x,N,U,B,P,ee)}function $l(_,N,U){N.isScene!==!0&&(N=Te);let B=_e.get(_),P=p.state.lights,ee=p.state.shadowsArray,ce=P.state.version,me=G.getParameters(_,P.state,ee,N,U),fe=G.getProgramCacheKey(me),Ne=B.programs;B.environment=_.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(_.isMeshStandardMaterial?Lt:Qt).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ne===void 0&&(_.addEventListener("dispose",Y),Ne=new Map,B.programs=Ne);let Fe=Ne.get(fe);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ce)return J_(_,me),Fe}else me.uniforms=G.getUniforms(_),_.onBeforeCompile(me,x),Fe=G.acquireProgram(me,fe),Ne.set(fe,Fe),B.uniforms=me.uniforms;let De=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(De.clippingPlanes=ie.uniform),J_(_,me),B.needsLights=bC(_),B.lightsStateVersion=ce,B.needsLights&&(De.ambientLightColor.value=P.state.ambient,De.lightProbe.value=P.state.probe,De.directionalLights.value=P.state.directional,De.directionalLightShadows.value=P.state.directionalShadow,De.spotLights.value=P.state.spot,De.spotLightShadows.value=P.state.spotShadow,De.rectAreaLights.value=P.state.rectArea,De.ltc_1.value=P.state.rectAreaLTC1,De.ltc_2.value=P.state.rectAreaLTC2,De.pointLights.value=P.state.point,De.pointLightShadows.value=P.state.pointShadow,De.hemisphereLights.value=P.state.hemi,De.directionalShadowMap.value=P.state.directionalShadowMap,De.directionalShadowMatrix.value=P.state.directionalShadowMatrix,De.spotShadowMap.value=P.state.spotShadowMap,De.spotLightMatrix.value=P.state.spotLightMatrix,De.spotLightMap.value=P.state.spotLightMap,De.pointShadowMap.value=P.state.pointShadowMap,De.pointShadowMatrix.value=P.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function Z_(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=ka.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function J_(_,N){let U=_e.get(_);U.outputColorSpace=N.outputColorSpace,U.batching=N.batching,U.batchingColor=N.batchingColor,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.instancingMorph=N.instancingMorph,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function MC(_,N,U,B,P){N.isScene!==!0&&(N=Te),qe.resetTextureUnits();let ee=N.fog,ce=B.isMeshStandardMaterial?N.environment:null,me=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ks,fe=(B.isMeshStandardMaterial?Lt:Qt).get(B.envMap||ce),Ne=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Fe=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),De=!!U.morphAttributes.position,Ke=!!U.morphAttributes.normal,yt=!!U.morphAttributes.color,Rt=Tr;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let bt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_t=bt!==void 0?bt.length:0,Re=_e.get(B),At=p.state.lights;if(ht===!0&&(X===!0||_!==E)){let yn=_===E&&B.id===M;ie.setState(B,_,yn)}let ct=!1;B.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==At.state.version||Re.outputColorSpace!==me||P.isBatchedMesh&&Re.batching===!1||!P.isBatchedMesh&&Re.batching===!0||P.isBatchedMesh&&Re.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Re.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Re.instancing===!1||!P.isInstancedMesh&&Re.instancing===!0||P.isSkinnedMesh&&Re.skinning===!1||!P.isSkinnedMesh&&Re.skinning===!0||P.isInstancedMesh&&Re.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Re.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Re.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Re.instancingMorph===!1&&P.morphTexture!==null||Re.envMap!==fe||B.fog===!0&&Re.fog!==ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Fe||Re.morphTargets!==De||Re.morphNormals!==Ke||Re.morphColors!==yt||Re.toneMapping!==Rt||Re.morphTargetsCount!==_t)&&(ct=!0):(ct=!0,Re.__version=B.version);let On=Re.currentProgram;ct===!0&&(On=$l(B,N,P));let fo=!1,Ln=!1,Ba=!1,It=On.getUniforms(),ei=Re.uniforms;if(ye.useProgram(On.program)&&(fo=!0,Ln=!0,Ba=!0),B.id!==M&&(M=B.id,Ln=!0),fo||E!==_){ye.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),It.setValue(T,"projectionMatrix",_.projectionMatrix),It.setValue(T,"viewMatrix",_.matrixWorldInverse);let bn=It.map.cameraPosition;bn!==void 0&&bn.setValue(T,pe.setFromMatrixPosition(_.matrixWorld)),Le.logarithmicDepthBuffer&&It.setValue(T,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&It.setValue(T,"isOrthographic",_.isOrthographicCamera===!0),E!==_&&(E=_,Ln=!0,Ba=!0)}if(P.isSkinnedMesh){It.setOptional(T,P,"bindMatrix"),It.setOptional(T,P,"bindMatrixInverse");let yn=P.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),It.setValue(T,"boneTexture",yn.boneTexture,qe))}P.isBatchedMesh&&(It.setOptional(T,P,"batchingTexture"),It.setValue(T,"batchingTexture",P._matricesTexture,qe),It.setOptional(T,P,"batchingIdTexture"),It.setValue(T,"batchingIdTexture",P._indirectTexture,qe),It.setOptional(T,P,"batchingColorTexture"),P._colorsTexture!==null&&It.setValue(T,"batchingColorTexture",P._colorsTexture,qe));let ti=U.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&te.update(P,U,On),(Ln||Re.receiveShadow!==P.receiveShadow)&&(Re.receiveShadow=P.receiveShadow,It.setValue(T,"receiveShadow",P.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ei.envMap.value=fe,ei.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(ei.envMapIntensity.value=N.environmentIntensity),Ln&&(It.setValue(T,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&SC(ei,Ba),ee&&B.fog===!0&&Z.refreshFogUniforms(ei,ee),Z.refreshMaterialUniforms(ei,B,H,J,p.state.transmissionRenderTarget[_.id]),ka.upload(T,Z_(Re),ei,qe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ka.upload(T,Z_(Re),ei,qe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&It.setValue(T,"center",P.center),It.setValue(T,"modelViewMatrix",P.modelViewMatrix),It.setValue(T,"normalMatrix",P.normalMatrix),It.setValue(T,"modelMatrix",P.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let yn=B.uniformsGroups;for(let bn=0,Pp=yn.length;bn<Pp;bn++){let cs=yn[bn];$e.update(cs,On),$e.bind(cs,On)}}return On}function SC(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function bC(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,N,U){let B=_e.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_e.get(_.texture).__webglTexture=N,_e.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:U,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let U=_e.get(_);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0};let wC=T.createFramebuffer();this.setRenderTarget=function(_,N=0,U=0){O=_,A=N,D=U;let B=!0,P=null,ee=!1,ce=!1;if(_){let fe=_e.get(_);if(fe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(fe.__webglFramebuffer===void 0)qe.setupRenderTarget(_);else if(fe.__hasExternalTextures)qe.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let De=_.depthTexture;if(fe.__boundDepthTexture!==De){if(De!==null&&_e.has(De)&&(_.width!==De.image.width||_.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(_)}}let Ne=_.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ce=!0);let Fe=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?P=Fe[N][U]:P=Fe[N],ee=!0):_.samples>0&&qe.useMultisampledRTT(_)===!1?P=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(Fe)?P=Fe[U]:P=Fe,I.copy(_.viewport),F.copy(_.scissor),V=_.scissorTest}else I.copy(Ce).multiplyScalar(H).floor(),F.copy(Ze).multiplyScalar(H).floor(),V=xt;if(U!==0&&(P=wC),ye.bindFramebuffer(T.FRAMEBUFFER,P)&&B&&ye.drawBuffers(_,P),ye.viewport(I),ye.scissor(F),ye.setScissorTest(V),ee){let fe=_e.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,U)}else if(ce){let fe=N;for(let Ne=0;Ne<_.textures.length;Ne++){let Fe=_e.get(_.textures[Ne]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,U,fe)}}else if(_!==null&&U!==0){let fe=_e.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,fe.__webglTexture,U)}M=-1},this.readRenderTargetPixels=function(_,N,U,B,P,ee,ce,me=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){ye.bindFramebuffer(T.FRAMEBUFFER,fe);try{let Ne=_.textures[me],Fe=Ne.format,De=Ne.type;if(!Le.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-B&&U>=0&&U<=_.height-P&&(_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+me),T.readPixels(N,U,B,P,Se.convert(Fe),Se.convert(De),ee))}finally{let Ne=O!==null?_e.get(O).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(_,N,U,B,P,ee,ce,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(N>=0&&N<=_.width-B&&U>=0&&U<=_.height-P){ye.bindFramebuffer(T.FRAMEBUFFER,fe);let Ne=_.textures[me],Fe=Ne.format,De=Ne.type;if(!Le.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ke),T.bufferData(T.PIXEL_PACK_BUFFER,ee.byteLength,T.STREAM_READ),_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+me),T.readPixels(N,U,B,P,Se.convert(Fe),Se.convert(De),0);let yt=O!==null?_e.get(O).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,yt);let Rt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await WT(T,Rt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ke),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ee),T.deleteBuffer(Ke),T.deleteSync(Rt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,N=null,U=0){let B=Math.pow(2,-U),P=Math.floor(_.image.width*B),ee=Math.floor(_.image.height*B),ce=N!==null?N.x:0,me=N!==null?N.y:0;qe.setTexture2D(_,0),T.copyTexSubImage2D(T.TEXTURE_2D,U,0,0,ce,me,P,ee),ye.unbindTexture()};let TC=T.createFramebuffer(),CC=T.createFramebuffer();this.copyTextureToTexture=function(_,N,U=null,B=null,P=0,ee=null){ee===null&&(P!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=P,P=0):ee=0);let ce,me,fe,Ne,Fe,De,Ke,yt,Rt,bt=_.isCompressedTexture?_.mipmaps[ee]:_.image;if(U!==null)ce=U.max.x-U.min.x,me=U.max.y-U.min.y,fe=U.isBox3?U.max.z-U.min.z:1,Ne=U.min.x,Fe=U.min.y,De=U.isBox3?U.min.z:0;else{let ti=Math.pow(2,-P);ce=Math.floor(bt.width*ti),me=Math.floor(bt.height*ti),_.isDataArrayTexture?fe=bt.depth:_.isData3DTexture?fe=Math.floor(bt.depth*ti):fe=1,Ne=0,Fe=0,De=0}B!==null?(Ke=B.x,yt=B.y,Rt=B.z):(Ke=0,yt=0,Rt=0);let _t=Se.convert(N.format),Re=Se.convert(N.type),At;N.isData3DTexture?(qe.setTexture3D(N,0),At=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(qe.setTexture2DArray(N,0),At=T.TEXTURE_2D_ARRAY):(qe.setTexture2D(N,0),At=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);let ct=T.getParameter(T.UNPACK_ROW_LENGTH),On=T.getParameter(T.UNPACK_IMAGE_HEIGHT),fo=T.getParameter(T.UNPACK_SKIP_PIXELS),Ln=T.getParameter(T.UNPACK_SKIP_ROWS),Ba=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,bt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,bt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),T.pixelStorei(T.UNPACK_SKIP_ROWS,Fe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De);let It=_.isDataArrayTexture||_.isData3DTexture,ei=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let ti=_e.get(_),yn=_e.get(N),bn=_e.get(ti.__renderTarget),Pp=_e.get(yn.__renderTarget);ye.bindFramebuffer(T.READ_FRAMEBUFFER,bn.__webglFramebuffer),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,Pp.__webglFramebuffer);for(let cs=0;cs<fe;cs++)It&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,P,De+cs),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,ee,Rt+cs)),T.blitFramebuffer(Ne,Fe,ce,me,Ke,yt,ce,me,T.DEPTH_BUFFER_BIT,T.NEAREST);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||_e.has(_)){let ti=_e.get(_),yn=_e.get(N);ye.bindFramebuffer(T.READ_FRAMEBUFFER,TC),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,CC);for(let bn=0;bn<fe;bn++)It?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ti.__webglTexture,P,De+bn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ti.__webglTexture,P),ei?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yn.__webglTexture,ee,Rt+bn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yn.__webglTexture,ee),P!==0?T.blitFramebuffer(Ne,Fe,ce,me,Ke,yt,ce,me,T.COLOR_BUFFER_BIT,T.NEAREST):ei?T.copyTexSubImage3D(At,ee,Ke,yt,Rt+bn,Ne,Fe,ce,me):T.copyTexSubImage2D(At,ee,Ke,yt,Ne,Fe,ce,me);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ei?_.isDataTexture||_.isData3DTexture?T.texSubImage3D(At,ee,Ke,yt,Rt,ce,me,fe,_t,Re,bt.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(At,ee,Ke,yt,Rt,ce,me,fe,_t,bt.data):T.texSubImage3D(At,ee,Ke,yt,Rt,ce,me,fe,_t,Re,bt):_.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ee,Ke,yt,ce,me,_t,Re,bt.data):_.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ee,Ke,yt,bt.width,bt.height,_t,bt.data):T.texSubImage2D(T.TEXTURE_2D,ee,Ke,yt,ce,me,_t,Re,bt);T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,On),T.pixelStorei(T.UNPACK_SKIP_PIXELS,fo),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ln),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ba),ee===0&&N.generateMipmaps&&T.generateMipmap(At),ye.unbindTexture()},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&qe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?qe.setTextureCube(_,0):_.isData3DTexture?qe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?qe.setTexture2DArray(_,0):qe.setTexture2D(_,0),ye.unbindTexture()},this.resetState=function(){A=0,D=0,O=null,ye.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var GB=["canvas"],Ip=class n{canvasRef;ngAfterViewInit(){typeof window>"u"||!this.canvasRef?.nativeElement||setTimeout(()=>{let e=this.canvasRef.nativeElement,t=new Dp({canvas:e,antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio);let i=new Il,r=new gn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=5;let s=new Kn,o=1500,a=[],c=[];for(let b=0;b<o;b++){a.push((Math.random()-.5)*1e3),a.push((Math.random()-.5)*1e3),a.push((Math.random()-.5)*1e3);let w=new st;w.setHSL(Math.random(),1,.5),c.push(w.r,w.g,w.b)}s.setAttribute("position",new Yt(a,3)),s.setAttribute("color",new Yt(c,3));let l=new Ia({size:1.3,transparent:!0,opacity:.9,blending:Ai,vertexColors:!0}),u=new Nl(s,l);i.add(u);let d=[],f=[16711680,255,65280,16776960,16738740];for(let b=0;b<5;b++){let w=f[b%f.length],x=new di({color:w,transparent:!0,opacity:.7,blending:Ai}),C=new Zt(new to(.05,.05,2,8),x);C.rotation.x=Math.PI/2;let A=new Zt(new no(.25,12,12),new di({color:w,transparent:!0,opacity:1,blending:Ai})),D=new Ti;D.add(C),D.add(A),i.add(D),d.push(D)}let h=[];for(let b=0;b<20;b++){let w=f[b%f.length],x=new di({color:w,transparent:!0,opacity:.6,blending:Ai}),C=new Zt(new to(.05,.05,2,8),x);C.rotation.x=Math.PI/2;let A=new Zt(new no(.3,14,14),new di({color:w,transparent:!0,opacity:1,blending:Ai})),D=new Ti;D.add(C),D.add(A),D.position.set((Math.random()-.5)*100,(Math.random()-.5)*100,-20);let O=new k((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,0);i.add(D),h.push({group:D,velocity:O})}let g=[];for(let b=0;b<3;b++){let w=[16776960,16738740,255],x=w[b%w.length],C=new Zt(new no(.8,32,32),new di({color:x,transparent:!0,opacity:1,blending:Ai,depthWrite:!1}));C.position.z=0;let A=new Zt(new to(.05,.3,6,50,1,!0),new di({color:x,transparent:!0,opacity:.3,blending:Ai,depthWrite:!1}));A.rotation.x=Math.PI/2,A.position.z=3.5;let D=new Ti;D.add(C),D.add(A),i.add(D),g.push(D)}let v=-50,m=-20;function p(){requestAnimationFrame(p),u.rotation.y+=5e-4,u.rotation.x+=5e-4,v+=.5,d.forEach((b,w)=>{let x=w*5;b.position.set(v-x,Math.sin((v-x)*.05)*10,-20)}),v>50&&(v=-50),h.forEach(({group:b,velocity:w})=>{b.position.add(w),(b.position.x>100||b.position.x<-100||b.position.y>100||b.position.y<-100)&&b.position.set((Math.random()-.5)*100,(Math.random()-.5)*100,-20)}),m+=.5,g.forEach((b,w)=>{let x=w*30;b.position.set(m-x,Math.cos((m-x)*.03)*15,-40),b.rotation.set(-1,-1,-1)}),m>100&&(m=-100),t.render(i,r)}p()},0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-starfield"]],viewQuery:function(t,i){if(t&1&&kc(GB,5),t&2){let r;Fs(r=ks())&&(i.canvasRef=r.first)}},decls:2,vars:0,consts:[["canvas",""]],template:function(t,i){t&1&&qd(0,"canvas",null,0)},styles:["canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}"]})};var Rp=class n{title=cr("portfolio-site");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Xt({type:n,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"p-6"]],template:function(t,i){t&1&&(hn(0,"app-starfield")(1,"app-header"),Ye(2,"div",0),hn(3,"router-outlet"),Qe())},dependencies:[ul,jf,Ip],encapsulation:2})};sy(Rp,Fw).catch(n=>console.error(n));
