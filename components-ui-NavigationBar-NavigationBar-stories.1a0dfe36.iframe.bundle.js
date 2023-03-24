"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[3836],{"./components/ui/NavigationBar/NavigationBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NavigationBar_NavigationBar});var react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/ui/Typographies.tsx"),colors=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components_browser_esm.ZP.div`
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
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/NavigationBar/NavigationBar.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/ui/NavigationBar/NavigationBar.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.styles.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/ui/NavigationBar/NavigationBar.styles.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const NavigationBar=_ref=>{let{className,current,goBack={name:"ArrowLeftIcon",size:24},onGoBackClick,onEditClick}=_ref;return __jsx(Wrapper,{className},__jsx(Button,{onClick:onGoBackClick},__jsx(Icon.Z,{name:goBack.name,size:goBack.size})),__jsx(Title,null,current),onEditClick&&__jsx(Button,{onClick:onEditClick},"편집"))};NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{goBack:{defaultValue:{value:'{ name: "ArrowLeftIcon", size: 24 }',computed:!1},required:!1,tsType:{name:"signature",type:"object",raw:"{\n  name: IconType;\n  size: number;\n}",signature:{properties:[{key:"name",value:{name:"IconType",required:!0}},{key:"size",value:{name:"number",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},current:{required:!1,tsType:{name:"string"},description:""},onGoBackClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const NavigationBar_NavigationBar=NavigationBar;try{NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",displayName:"NavigationBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"string"}},goBack:{defaultValue:{value:'{ name: "ArrowLeftIcon", size: 24 }'},description:"",name:"goBack",required:!1,type:{name:'{ name: "ARTIEIcon" | "BellIcon" | "CalendarIcon" | "UserIcon" | "ArrowDownIcon" | "ArrowDown2Icon" | "ArrowLeftIcon" | "InActivePinIcon" | "PinIcon" | "PlusIcon" | "ChevronDownIcon" | ... 7 more ... | "ChevronRightIcon"; size: number; }'}},onGoBackClick:{defaultValue:null,description:"",name:"onGoBackClick",required:!0,type:{name:"() => void"}},onEditClick:{defaultValue:null,description:"",name:"onEditClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.tsx#NavigationBar"]={docgenInfo:NavigationBar.__docgenInfo,name:"NavigationBar",path:"components/ui/NavigationBar/NavigationBar.tsx#NavigationBar"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./components/ui/NavigationBar/NavigationBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_NavigationBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/ui/NavigationBar/NavigationBar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/NavigationBar",component:_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>__jsx(_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.Z,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={current:"전시 정보"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => __jsx(NavigationBar, args)",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ui-NavigationBar-NavigationBar-stories.1a0dfe36.iframe.bundle.js.map