"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[3218],{"./components/Button/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./styles/colors.ts"),Typographies=__webpack_require__("./components/Typographies.tsx");const Default=styled_components_browser_esm.ZP.button`
  ${Typographies.hj}
  color: ${colors.O.gray400};
`,Primary=styled_components_browser_esm.ZP.button`
  ${Typographies.YJ}
  color: ${colors.O.black2};
  padding: 8px 16px;
  background: ${colors.O.green900};
  border-radius: 6px;
`;try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button/Button.styles.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"components/Button/Button/Button.styles.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Primary.displayName="Primary",Primary.__docgenInfo={description:"",displayName:"Primary",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button/Button.styles.tsx#Primary"]={docgenInfo:Primary.__docgenInfo,name:"Primary",path:"components/Button/Button/Button.styles.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Button=props=>{const{className,type,children,onClick}=props;return __jsx("primary"===type?Primary:Default,{className,onClick},children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"primary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""}}};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./components/Button/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Button/Button/Button.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_2__.z,title:"UI/Button",argTypes:{}},Template=args=>__jsx(_Button__WEBPACK_IMPORTED_MODULE_2__.z,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={type:"primary",children:"전시기록 완성"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},Primary.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <Button {...args} />"},Primary.parameters?.docs?.source)})})},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}}}]);
//# sourceMappingURL=components-Button-Button-Button-stories.d9e8c0e1.iframe.bundle.js.map