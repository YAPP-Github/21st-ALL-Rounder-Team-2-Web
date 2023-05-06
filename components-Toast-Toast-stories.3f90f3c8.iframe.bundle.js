"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[1190],{"./components/Button/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./styles/colors.ts"),Typographies=__webpack_require__("./components/Typographies.tsx");const Default=styled_components_browser_esm.ZP.button`
  ${Typographies.hj}
  color: ${colors.O.gray400};
`,Primary=styled_components_browser_esm.ZP.button`
  ${Typographies.YJ}
  color: ${colors.O.black2};
  padding: 8px 16px;
  background: ${colors.O.green900};
  border-radius: 6px;
`;try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button/Button.styles.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"components/Button/Button/Button.styles.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Primary.displayName="Primary",Primary.__docgenInfo={description:"",displayName:"Primary",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button/Button.styles.tsx#Primary"]={docgenInfo:Primary.__docgenInfo,name:"Primary",path:"components/Button/Button/Button.styles.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Button=props=>{const{className,type,children,onClick}=props;return __jsx("primary"===type?Primary:Default,{className,onClick},children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"primary" | "default"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"default"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""}}};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./hooks/useToast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>useToast});var _components_Toast_Toast_provider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/Toast/Toast.provider.tsx");const useToast=()=>{const{mount,unmount}=(0,_components_Toast_Toast_provider__WEBPACK_IMPORTED_MODULE_0__.V6)();return{open:mount,close:unmount}}},"./components/Toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Position:()=>Position,Type:()=>Type,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useToast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./hooks/useToast.tsx"),_components_Button_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/Button/Button/Button.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Toast"},Default=()=>{const toast=(0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_2__.p)();return __jsx(_components_Button_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"primary",onClick:()=>toast.open({content:"기본 토스트"})},"Open toast")};Default.displayName="Default";const Type=()=>{const toast=(0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_2__.p)();return __jsx(_components_Button_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"primary",onClick:()=>toast.open({type:"alert",content:"경고"})},"Open alert toast")};Type.displayName="Type";const Position=()=>{const toast=(0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_2__.p)();return __jsx("div",{style:{display:"flex",gap:"6px"}},__jsx(_components_Button_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"primary",onClick:()=>toast.open({position:"top",content:"상단"})},"Open top toast"),__jsx(_components_Button_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"primary",onClick:()=>toast.open({position:"bottom",content:"하단"})},"Open bottom toast"))};Position.displayName="Position",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},Default.parameters?.docs),{},{source:_objectSpread({originalSource:'() => {\n  const toast = useToast();\n  return <Button type="primary" onClick={() => toast.open({\n    content: "기본 토스트"\n  })}>\n      Open toast\n    </Button>;\n}'},Default.parameters?.docs?.source)})}),Type.parameters=_objectSpread(_objectSpread({},Type.parameters),{},{docs:_objectSpread(_objectSpread({},Type.parameters?.docs),{},{source:_objectSpread({originalSource:'() => {\n  const toast = useToast();\n  return <Button type="primary" onClick={() => toast.open({\n    type: "alert",\n    content: "경고"\n  })}>\n      Open alert toast\n    </Button>;\n}'},Type.parameters?.docs?.source)})}),Position.parameters=_objectSpread(_objectSpread({},Position.parameters),{},{docs:_objectSpread(_objectSpread({},Position.parameters?.docs),{},{source:_objectSpread({originalSource:'() => {\n  const toast = useToast();\n  return <div style={{\n    display: "flex",\n    gap: "6px"\n  }}>\n      <Button type="primary" onClick={() => toast.open({\n      position: "top",\n      content: "상단"\n    })}>\n        Open top toast\n      </Button>\n      <Button type="primary" onClick={() => toast.open({\n      position: "bottom",\n      content: "하단"\n    })}>\n        Open bottom toast\n      </Button>\n    </div>;\n}'},Position.parameters?.docs?.source)})}),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},Type.__docgenInfo={description:"",methods:[],displayName:"Type"},Position.__docgenInfo={description:"",methods:[],displayName:"Position"}}}]);
//# sourceMappingURL=components-Toast-Toast-stories.3f90f3c8.iframe.bundle.js.map