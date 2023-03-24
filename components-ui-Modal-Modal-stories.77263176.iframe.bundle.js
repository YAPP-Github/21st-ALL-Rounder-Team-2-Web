"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[9336],{"./components/ui/Button/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js");const Wrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
  display: flex;
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),__jsx=react.createElement;const IconButton=props=>{const{className,iconProps,onClick,ariaLabel}=props;return __jsx(Wrapper,{className,onClick,"aria-label":ariaLabel},__jsx(Icon.Z,iconProps))};IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!0,tsType:{name:"IconProps"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!0,type:{name:"Props"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/ui/Button/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal_Modal});var react=__webpack_require__("./node_modules/react/index.js"),IconButton=__webpack_require__("./components/ui/Button/IconButton/IconButton.tsx"),colors=__webpack_require__("./styles/colors.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/ui/Typographies.tsx");const Container=styled_components_browser_esm.ZP.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 72px);
  padding: 16px;
  background: #1f1f1f;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  color: white;
  z-index: 1000;
`,Headline=styled_components_browser_esm.ZP.div`
  width: 100%;
  text-align: center;

  & > div {
    display: flex;
    justify-content: flex-end;
  }

  & > span {
    ${Typographies.YJ};
  }
`,Body=styled_components_browser_esm.ZP.div`
  text-align: center;
`;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"components/ui/Modal/Modal.styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{Headline.displayName="Headline",Headline.__docgenInfo={description:"",displayName:"Headline",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.styles.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"components/ui/Modal/Modal.styles.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.styles.tsx#Body"]={docgenInfo:Body.__docgenInfo,name:"Body",path:"components/ui/Modal/Modal.styles.tsx#Body"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Modal=_ref=>{let{headline,onClose,children}=_ref;return __jsx(Container,null,__jsx(Headline,null,__jsx("div",null,__jsx(IconButton.h,{iconProps:{name:"MultiplyIcon",color:colors.O.gray400,size:20},onClick:onClose})),__jsx("span",null,headline)),__jsx(Body,null,children))};Modal.displayName="Modal",Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{headline:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./components/ui/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/ui/Modal/Modal.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>__jsx(_Modal__WEBPACK_IMPORTED_MODULE_1__.Z,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={headline:"HEADLINE",children:"children"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => __jsx(Modal, args)",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ui-Modal-Modal-stories.77263176.iframe.bundle.js.map