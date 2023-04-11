/*! For license information please see shared-ui-Input-Slider-Slider-stories.1e3c2a60.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcrp_frontend=self.webpackChunkcrp_frontend||[]).push([[867],{"./src/shared/ui/Input/Slider/Slider.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Slider_stories}});var slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Slider_module_progress="Slider_progress__M7oJL",Slider_module_progressSmall="Slider_progressSmall__07dzr",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Slider=function Slider(_ref){var _ref$value=_ref.value,value=void 0===_ref$value?40:_ref$value,_onChange=_ref.onChange,maxValue=_ref.maxValue,minValue=_ref.minValue,_ref$size=_ref.size,size=void 0===_ref$size?"xl":_ref$size;return(0,jsx_runtime.jsx)("input",{type:"range",value:value,min:minValue,max:maxValue,step:"1",onChange:function onChange(e){return _onChange(+e.target.value)},className:classnames_default()(Slider_module_progress,"xs"===size&&Slider_module_progressSmall),style:{background:"linear-gradient(to right, #ffd80e 0%, #ffd80e ".concat(value,"%, #393939 ").concat(value,"%, #393939 100%)")}})},Slider_Slider=Slider;try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"xs"'}]}},value:{defaultValue:{value:"40"},description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Input/Slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/shared/ui/Input/Slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}var Slider_stories={title:"crp-kit/Input/Slider",component:Slider_Slider,parameters:{backgrounds:{default:"dark"}}},Primary=function Primary(){var _useState=(0,react.useState)(40),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsxs)("div",{style:{height:"300px",padding:"100px",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(Slider_Slider,{maxValue:100,minValue:0,value:value,onChange:function onChange(value){return setValue(value)}}),(0,jsx_runtime.jsx)(Slider_Slider,{maxValue:100,minValue:0,value:value,onChange:function onChange(value){return setValue(value)},size:"xs"})]})},__namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})}}]);