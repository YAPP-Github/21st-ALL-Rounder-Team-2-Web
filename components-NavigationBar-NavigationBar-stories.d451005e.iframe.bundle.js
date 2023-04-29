"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[5356],{"./components/NavigationBar/NavigationBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NavigationBar_NavigationBar});var react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./components/Icon/Icon/Icon.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/Typographies.tsx"),colors=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-top: 50px;
`,Title=styled_components_browser_esm.ZP.span`
  color: white;
  ${Typographies.YJ}
`,Button=styled_components_browser_esm.ZP.button`
  padding: 20px;
  color: ${colors.O.gray400};
  ${Typographies.Fn}
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/NavigationBar/NavigationBar.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/NavigationBar/NavigationBar.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/NavigationBar/NavigationBar.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/NavigationBar/NavigationBar.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/NavigationBar/NavigationBar.styles.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/NavigationBar/NavigationBar.styles.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const NavigationBar=_ref=>{let{className,current,goBack={name:"ArrowLeftIcon",size:24},onGoBackClick,onEditClick}=_ref;return __jsx(Wrapper,{className},__jsx(Button,{onClick:onGoBackClick},__jsx(Icon.Z,{name:goBack.name,size:goBack.size})),__jsx(Title,null,current),onEditClick&&__jsx(Button,{onClick:onEditClick},"편집"))};NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{goBack:{defaultValue:{value:'{ name: "ArrowLeftIcon", size: 24 }',computed:!1},required:!1,tsType:{name:"signature",type:"object",raw:"{\n  name: IconType;\n  size: number;\n}",signature:{properties:[{key:"name",value:{name:"IconType",required:!0}},{key:"size",value:{name:"number",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},current:{required:!1,tsType:{name:"string"},description:""},onGoBackClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const NavigationBar_NavigationBar=NavigationBar;try{NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",displayName:"NavigationBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"string"}},goBack:{defaultValue:{value:'{ name: "ArrowLeftIcon", size: 24 }'},description:"",name:"goBack",required:!1,type:{name:'{ name: "ARTIEIcon" | "BellIcon" | "CalendarIcon" | "UserIcon" | "ArrowDownIcon" | "ArrowDown2Icon" | "ArrowLeftIcon" | "InActivePinIcon" | "PinIcon" | "PlusIcon" | "ChevronDownIcon" | ... 7 more ... | "ChevronRightIcon"; size: number; }'}},onGoBackClick:{defaultValue:null,description:"",name:"onGoBackClick",required:!0,type:{name:"() => void"}},onEditClick:{defaultValue:null,description:"",name:"onEditClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/NavigationBar/NavigationBar.tsx#NavigationBar"]={docgenInfo:NavigationBar.__docgenInfo,name:"NavigationBar",path:"components/NavigationBar/NavigationBar.tsx#NavigationBar"})}catch(__react_docgen_typescript_loader_error){}},"./components/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`,Bold16CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`,Bold18CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`,Bold20CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
`,Bold24CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`,SemiBold24CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`,Medium14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`,Medium15CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Medium16CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`,Normal12CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
`,Normal14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`,Normal16CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`,Normal18CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`,ExtraBold24CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`},"./components/NavigationBar/NavigationBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_NavigationBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/NavigationBar/NavigationBar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/NavigationBar",component:_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.Z},Template=args=>__jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__.Z,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={current:"전시 정보"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},Primary.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <NavigationBar {...args} />"},Primary.parameters?.docs?.source)})})},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}}}]);
//# sourceMappingURL=components-NavigationBar-NavigationBar-stories.d451005e.iframe.bundle.js.map