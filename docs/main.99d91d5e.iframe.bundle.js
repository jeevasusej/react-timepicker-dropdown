(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{438:function(module,exports,__webpack_require__){var api=__webpack_require__(439),content=__webpack_require__(854);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},489:function(module,exports,__webpack_require__){__webpack_require__(490),__webpack_require__(645),__webpack_require__(646),__webpack_require__(858),__webpack_require__(859),__webpack_require__(865),__webpack_require__(866),__webpack_require__(864),__webpack_require__(860),__webpack_require__(867),__webpack_require__(861),__webpack_require__(862),__webpack_require__(868),module.exports=__webpack_require__(849)},556:function(module,exports){},646:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(346)},849:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(346).configure)([__webpack_require__(850),__webpack_require__(851)],module,!1)}).call(this,__webpack_require__(205)(module))},850:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=850},851:function(module,exports,__webpack_require__){var map={"./Thing.stories.tsx":863};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=851},854:function(module,exports,__webpack_require__){(exports=__webpack_require__(440)(!1)).push([module.i,"\r\n  .rtp-wrapper-input{\r\n    width: 100%;\r\n  }\r\n.rtp-wrapper{\r\n    background: white;\r\n    border: 1px solid black;\r\n    display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  height: 200px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n} \r\n.rtp-wrapper ul{\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  .rtp-wrapper ul li{\r\n    padding: 0;\r\n  }\r\n  .rtp-wrapper ul li .colon{\r\n    padding: 0 5px;\r\n  }\r\n  .rtp-wrapper .rtp-hours {\r\n    display: block;\r\n    position: relative;\r\n    text-align: right;\r\n  }\r\n\r\n  .rtp-wrapper .rtp-mins {\r\n    display: block;\r\n    position: relative;\r\n    text-align: left;\r\n  }\r\n  .rtp-wrapper ul .selected-item{\r\n    background-color: blue;\r\n    color:white;\r\n  }\r\n",""]),module.exports=exports},856:function(module,exports,__webpack_require__){var api=__webpack_require__(439),content=__webpack_require__(857);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},857:function(module,exports,__webpack_require__){(exports=__webpack_require__(440)(!1)).push([module.i,".react-timepicer-dropdown-example{\r\n    width: 120px;\r\n    position: relative;\r\n}",""]),module.exports=exports},863:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(17),__webpack_require__(852);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),usePopper=(__webpack_require__(14),__webpack_require__(853),__webpack_require__(5),__webpack_require__(9),__webpack_require__(7),__webpack_require__(19),__webpack_require__(16),__webpack_require__(12),__webpack_require__(15),__webpack_require__(6),__webpack_require__(27),__webpack_require__(872)),jsx_runtime=(__webpack_require__(438),__webpack_require__(56)),onHoursClick_OnHoursClick=function OnHoursClick(props){var liItem=null;Object(react.useEffect)((function(){props.isSelected&&liItem&&(liItem.focus(),liItem.scrollIntoView())}),[props.isSelected]);return Object(jsx_runtime.jsxs)("li",{onClick:function clickHandler(){return props.onItemClick(props.value),function(event){event.preventDefault()}},className:props.isSelected?"selected-item":"",ref:function ref(eref){liItem=eref},children:[props.displayValue,props.isHour&&Object(jsx_runtime.jsx)("span",{className:"colon",children:":"})]})};onHoursClick_OnHoursClick.displayName="OnHoursClick";try{onHoursClick_OnHoursClick.displayName="OnHoursClick",onHoursClick_OnHoursClick.__docgenInfo={description:"",displayName:"OnHoursClick",props:{onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},isHour:{defaultValue:null,description:"",name:"isHour",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/onHoursClick.tsx#OnHoursClick"]={docgenInfo:onHoursClick_OnHoursClick.__docgenInfo,name:"OnHoursClick",path:"src/component/onHoursClick.tsx#OnHoursClick"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var reactTimepickerDropdown_ReactTimepickerDropdown=function ReactTimepickerDropdown(props){var _useState2=_slicedToArray(Object(react.useState)(null),2),referenceElement=_useState2[0],setReferenceElement=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(null),2),popperElement=_useState4[0],setPopperElement=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(!1),2),visible=_useState6[0],setVisibility=_useState6[1],_useState8=_slicedToArray(Object(react.useState)(""),2),inputValue=_useState8[0],setInputValue=_useState8[1],_useState10=_slicedToArray(Object(react.useState)(null),2),arrowElement=_useState10[0],setArrowElement=_useState10[1],_usePopper=Object(usePopper.a)(referenceElement,popperElement,{modifiers:[{name:"arrow",options:{element:arrowElement}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes,handleDropdownClick=function handleDropdownClick(value){setInputValue(value),setVisibility(!visible),props.OnChange&&props.OnChange(value)},getWrapper=function getWrapper(elements,classNames,key){return Object(jsx_runtime.jsx)("ul",{className:classNames,children:elements},key)};return Object(jsx_runtime.jsxs)(react_default.a.Fragment,{children:[Object(jsx_runtime.jsx)("input",{type:"text",ref:setReferenceElement,onClick:function handleInputClick(){setVisibility(!visible)},value:inputValue,className:"rtp-wrapper-input",onChange:function handleChange(e){var value=e.target.value;value&&setInputValue(value)}}),visible&&Object(jsx_runtime.jsxs)("div",Object.assign({ref:setPopperElement,style:styles.popper},attributes.popper,{className:"rtp-wrapper",children:[function get12HoursElement(){for(var hours=[],mins=[],tt=0,ap=["AM","PM"],hrValue="",minValue="",displayValue="",hh=0,mm=0,formathrs=props.Use12Hours?12:24,ampm="",i=0;tt<1440;i++)hh=Math.floor(tt/60),mm=tt%60,ampm=props.Use12Hours?hh%formathrs==1?"PM":ap[Math.floor(hh/12)]:"",displayValue=(hrValue=("0"+(props.Use12Hours&&hh%formathrs==0?12:hh%formathrs)).slice(-2))+":"+(minValue=("0"+mm).slice(-2)+" "+ampm),hours.push(Object(jsx_runtime.jsx)(onHoursClick_OnHoursClick,{onItemClick:handleDropdownClick,value:displayValue,displayValue:hrValue,isSelected:displayValue===inputValue,isHour:!0},i+""+hrValue)),mins.push(Object(jsx_runtime.jsx)(onHoursClick_OnHoursClick,{onItemClick:handleDropdownClick,value:displayValue,displayValue:minValue,isSelected:displayValue===inputValue,isHour:!1},i+""+i+hrValue)),tt+=props.Steps;var dropdwon=[];return dropdwon.push(getWrapper(hours,"rtp-hours",0)),dropdwon.push(getWrapper(mins,"rtp-mins",2)),dropdwon}(),Object(jsx_runtime.jsx)("div",{ref:setArrowElement,style:styles.arrow})]}))]})};reactTimepickerDropdown_ReactTimepickerDropdown.displayName="ReactTimepickerDropdown",reactTimepickerDropdown_ReactTimepickerDropdown.defaultProps={Use12Hours:!1,Steps:15};try{reactTimepickerDropdown_ReactTimepickerDropdown.displayName="ReactTimepickerDropdown",reactTimepickerDropdown_ReactTimepickerDropdown.__docgenInfo={description:"",displayName:"ReactTimepickerDropdown",props:{Use12Hours:{defaultValue:{value:"false"},description:"Hours format - 12Hrs/24Hrs",name:"Use12Hours",required:!1,type:{name:"boolean"}},Steps:{defaultValue:{value:"15"},description:"This is for minutes steps (Not for hours). Default value is 15.",name:"Steps",required:!1,type:{name:"number"}},OnChange:{defaultValue:null,description:"The function to be called on input change",name:"OnChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/reactTimepickerDropdown.tsx#ReactTimepickerDropdown"]={docgenInfo:reactTimepickerDropdown_ReactTimepickerDropdown.__docgenInfo,name:"ReactTimepickerDropdown",path:"src/component/reactTimepickerDropdown.tsx#ReactTimepickerDropdown"})}catch(__react_docgen_typescript_loader_error){}try{ReactTimepickerDropdown.displayName="ReactTimepickerDropdown",ReactTimepickerDropdown.__docgenInfo={description:"",displayName:"ReactTimepickerDropdown",props:{Use12Hours:{defaultValue:{value:"false"},description:"Hours format - 12Hrs/24Hrs",name:"Use12Hours",required:!1,type:{name:"boolean"}},Steps:{defaultValue:{value:"15"},description:"This is for minutes steps (Not for hours). Default value is 15.",name:"Steps",required:!1,type:{name:"number"}},OnChange:{defaultValue:null,description:"The function to be called on input change",name:"OnChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#ReactTimepickerDropdown"]={docgenInfo:ReactTimepickerDropdown.__docgenInfo,name:"ReactTimepickerDropdown",path:"src/index.tsx#ReactTimepickerDropdown"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(856);var meta={title:"Welcome",component:reactTimepickerDropdown_ReactTimepickerDropdown,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},Thing_stories_Template=(__webpack_exports__.default=meta,function Template(args){return Object(jsx_runtime.jsx)("div",{className:"react-timepicer-dropdown-example",children:Object(jsx_runtime.jsx)(reactTimepickerDropdown_ReactTimepickerDropdown,Object.assign({},args))})});Thing_stories_Template.displayName="Template";var Default=Thing_stories_Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <div className={'react-timepicer-dropdown-example'}>\n      <ReactTimepickerDropdown {...args} />\n    </div>\n  );\n}"}},Default.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Thing.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"stories/Thing.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},868:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(24),__webpack_require__(5),__webpack_require__(51),__webpack_require__(429),__webpack_require__(846),__webpack_require__(49),__webpack_require__(847),__webpack_require__(848),__webpack_require__(428);var client_api=__webpack_require__(880),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on.*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[489,2,3]]]);