(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(module,exports,__webpack_require__){__webpack_require__(249),__webpack_require__(362),module.exports=__webpack_require__(363)},270:function(module,exports){},363:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_svelte__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(247);Object(_storybook_svelte__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(548),module)}.call(this,__webpack_require__(364)(module))},548:function(module,exports,__webpack_require__){var map={"./Button.stories.js":549};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=548},549:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var internal=__webpack_require__(0);function create_if_block(ctx){var button,dispose;return{c(){(button=Object(internal.e)("button")).textContent="Reset",Object(internal.c)(button,"class","svelte-5se2s7"),dispose=Object(internal.i)(button,"click",ctx.click_handler_1)},m(target,anchor){Object(internal.h)(target,button,anchor)},d(detaching){detaching&&Object(internal.d)(button),dispose()}}}function create_fragment(ctx){var h1,t0,t1,p,t2,t3,t4,button,t6,if_block_anchor,dispose,if_block=ctx.displayResetButton&&create_if_block(ctx);return{c(){h1=Object(internal.e)("h1"),t0=Object(internal.n)(ctx.count),t1=Object(internal.m)(),p=Object(internal.e)("p"),t2=Object(internal.n)("Count incremented by "),t3=Object(internal.n)(ctx.increment),t4=Object(internal.m)(),(button=Object(internal.e)("button")).textContent="Increment",t6=Object(internal.m)(),if_block&&if_block.c(),if_block_anchor=Object(internal.f)(),Object(internal.c)(button,"class","svelte-5se2s7"),dispose=Object(internal.i)(button,"click",ctx.click_handler)},m(target,anchor){Object(internal.h)(target,h1,anchor),Object(internal.b)(h1,t0),Object(internal.h)(target,t1,anchor),Object(internal.h)(target,p,anchor),Object(internal.b)(p,t2),Object(internal.b)(p,t3),Object(internal.h)(target,t4,anchor),Object(internal.h)(target,button,anchor),Object(internal.h)(target,t6,anchor),if_block&&if_block.m(target,anchor),Object(internal.h)(target,if_block_anchor,anchor)},p(changed,ctx){changed.count&&Object(internal.l)(t0,ctx.count),changed.increment&&Object(internal.l)(t3,ctx.increment),ctx.displayResetButton?if_block||((if_block=create_if_block(ctx)).c(),if_block.m(if_block_anchor.parentNode,if_block_anchor)):if_block&&(if_block.d(1),if_block=null)},i:internal.j,o:internal.j,d(detaching){detaching&&(Object(internal.d)(h1),Object(internal.d)(t1),Object(internal.d)(p),Object(internal.d)(t4),Object(internal.d)(button),Object(internal.d)(t6)),if_block&&if_block.d(detaching),detaching&&Object(internal.d)(if_block_anchor),dispose()}}}function instance($$self,$$props,$$invalidate){let{increment:increment=1}=$$props,count=0;let displayResetButton;return $$self.$set=$$props=>{"increment"in $$props&&$$invalidate("increment",increment=$$props.increment)},$$self.$$.update=($$dirty={count:1})=>{$$dirty.count&&$$invalidate("displayResetButton",displayResetButton=count>0)},{increment:increment,count:count,displayResetButton:displayResetButton,click_handler:()=>{$$invalidate("count",count=function add(a,b){return a+b}(count,increment))},click_handler_1:()=>{$$invalidate("count",count=0)}}}class Button_svelte_Button extends internal.a{constructor(options){super(),document.getElementById("svelte-5se2s7-style")||function add_css(){var style=Object(internal.e)("style");style.id="svelte-5se2s7-style",style.textContent="body{font-family:-apple-system, BlinkMacSystemFont, sans-serif}button.svelte-5se2s7{font:inherit;background:none}",Object(internal.b)(document.head,style)}(),Object(internal.g)(this,options,instance,create_fragment,internal.k,["increment"])}}var Button_svelte=Button_svelte_Button;__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Increment",(function(){return Increment}));__webpack_exports__.default={title:"Button"};var Default=function(){return{Component:Button_svelte,props:{}}},Increment=function(){return{Component:Button_svelte,props:{increment:2}}}}},[[248,1,2]]]);
//# sourceMappingURL=main.f4d519da02f967075c3c.bundle.js.map