loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();loadJS=loadjs;				
				window.isMobile = function() {
						let check = false;
						(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
						return check;
				};
				const __opt_now=()=>+new Date,supportsRequestIdleCallback_="function"==typeof requestIdleCallback;class IdleDeadline{constructor(e){this.initTime_=e}get didTimeout(){return!1}timeRemaining(){return Math.max(0,50-(__opt_now()-this.initTime_))}}const requestIdleCallbackShim=e=>{const s=new IdleDeadline(__opt_now());return setTimeout(()=>e(s),0)},cancelIdleCallbackShim=e=>{clearTimeout(e)},rIC=supportsRequestIdleCallback_?requestIdleCallback:requestIdleCallbackShim,cIC=supportsRequestIdleCallback_?cancelIdleCallback:cancelIdleCallbackShim,createQueueMicrotaskViaPromises=()=>e=>{Promise.resolve().then(e)},createQueueMicrotaskViaMutationObserver=()=>{let e=0,s=[];const i=new MutationObserver(()=>{s.forEach(e=>e()),s=[]}),t=document.createTextNode("");return i.observe(t,{characterData:!0}),i=>{s.push(i),t.data=String(++e%2)}},queueMicrotask="function"==typeof Promise&&Promise.toString().indexOf("[native code]")>-1?createQueueMicrotaskViaPromises():createQueueMicrotaskViaMutationObserver();class IdleValue{constructor(e){this.init_=e,this.value_,this.idleHandle_=rIC(()=>{this.value_=this.init_()})}getValue(){return void 0===this.value_&&(this.cancleIdleInit_(),this.value_=this.init_()),this.value_}setValue(e){this.cancleIdleInit_(),this.value_=e}cancleIdleInit_(){this.idleHandle_&&(cIC(this.idleHandle_),this.idleHandle_=null)}}const defineIdleProperty=(e,s,i)=>{const t=new IdleValue(i);Object.defineProperty(e,s,{configurable:!0,get:t.getValue.bind(t),set:t.setValue.bind(t)})},defineIdleProperties=(e,s)=>{Object.keys(s).forEach(i=>{defineIdleProperty(e,i,s[i])})},DEFAULT_MIN_TASK_TIME=0,isSafari_=!("object"!=typeof safari||!safari.pushNotification);class IdleQueue{constructor({ensureTasksRun:e=!1,defaultMinTaskTime:s=DEFAULT_MIN_TASK_TIME}={}){this.idleCallbackHandle_=null,this.taskQueue_=[],this.isProcessing_=!1,this.state_=null,this.defaultMinTaskTime_=s,this.ensureTasksRun_=e,this.runTasksImmediately=this.runTasksImmediately.bind(this),this.runTasks_=this.runTasks_.bind(this),this.onVisibilityChange_=this.onVisibilityChange_.bind(this),this.ensureTasksRun_&&(addEventListener("visibilitychange",this.onVisibilityChange_,!0),isSafari_&&addEventListener("beforeunload",this.runTasksImmediately,!0))}pushTask(...e){this.addTask_(Array.prototype.push,...e)}unshiftTask(...e){this.addTask_(Array.prototype.unshift,...e)}runTasksImmediately(){this.runTasks_()}hasPendingTasks(){return this.taskQueue_.length>0}clearPendingTasks(){this.taskQueue_=[],this.cancelScheduledRun_()}getState(){return this.state_}destroy(){this.taskQueue_=[],this.cancelScheduledRun_(),this.ensureTasksRun_&&(removeEventListener("visibilitychange",this.onVisibilityChange_,!0),isSafari_&&removeEventListener("beforeunload",this.runTasksImmediately,!0))}addTask_(e,s,{minTaskTime:i=this.defaultMinTaskTime_}={}){const t={time:__opt_now(),visibilityState:document.visibilityState};e.call(this.taskQueue_,{state:t,task:s,minTaskTime:i}),this.scheduleTasksToRun_()}scheduleTasksToRun_(){this.ensureTasksRun_&&"hidden"===document.visibilityState?queueMicrotask(this.runTasks_):this.idleCallbackHandle_||(this.idleCallbackHandle_=rIC(this.runTasks_))}runTasks_(e){if(this.cancelScheduledRun_(),!this.isProcessing_){for(this.isProcessing_=!0;this.hasPendingTasks()&&!shouldYield(e,this.taskQueue_[0].minTaskTime);){const{task:e,state:s}=this.taskQueue_.shift();this.state_=s,e(s),this.state_=null}this.isProcessing_=!1,this.hasPendingTasks()&&this.scheduleTasksToRun_()}}cancelScheduledRun_(){cIC(this.idleCallbackHandle_),this.idleCallbackHandle_=null}onVisibilityChange_(){"hidden"===document.visibilityState&&this.runTasksImmediately()}}const shouldYield=(e,s)=>!!(e&&e.timeRemaining()<=s);