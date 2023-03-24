"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[8774],{"./components/ui/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var react=__webpack_require__("./node_modules/react/index.js");const hooks_useClickOutside=(ref,handler,isActive)=>{(0,react.useEffect)((()=>{const listener=event=>{if(!isActive)return;const el=ref?.current;el&&!el.contains(event?.target||null)&&handler(event)};return document.addEventListener("mousedown",listener),()=>{document.removeEventListener("mousedown",listener)}}),[ref,handler])};var Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./styles/colors.ts"),Typographies=__webpack_require__("./components/ui/Typographies.tsx");const Wrapper=styled_components_browser_esm.ZP.button`
  position: relative;
  margin-bottom: 10px;
`,SelectWrapper=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Text=styled_components_browser_esm.ZP.div`
  ${Typographies.ke}
  color: ${colors.O.gray400};
  margin-right: 4px;
`,OptionWrapper=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 40px;
  right: 8px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 126px;
  height: 98px;
  padding: 4px 0;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`,Item=styled_components_browser_esm.ZP.div`
  width: 94px;
  padding: 12px 0;
  margin: 0 16px;
  font-weight: ${props=>props.active?600:400};
  font-size: 14px;
  line-height: 150%;
  color: ${props=>props.active?"#333333":"#828282"};
  border-bottom: 0.4px solid #bdbdbd;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Select/Select.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/Select/Select.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{SelectWrapper.displayName="SelectWrapper",SelectWrapper.__docgenInfo={description:"",displayName:"SelectWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Select/Select.styles.tsx#SelectWrapper"]={docgenInfo:SelectWrapper.__docgenInfo,name:"SelectWrapper",path:"components/ui/Select/Select.styles.tsx#SelectWrapper"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Select/Select.styles.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/ui/Select/Select.styles.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}try{OptionWrapper.displayName="OptionWrapper",OptionWrapper.__docgenInfo={description:"",displayName:"OptionWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Select/Select.styles.tsx#OptionWrapper"]={docgenInfo:OptionWrapper.__docgenInfo,name:"OptionWrapper",path:"components/ui/Select/Select.styles.tsx#OptionWrapper"})}catch(__react_docgen_typescript_loader_error){}try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Select/Select.styles.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"components/ui/Select/Select.styles.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Select=props=>{const ref=(0,react.useRef)(null),{0:isActive,1:setIsActive}=(0,react.useState)(!1),{activeIndex=0,onSelected}=props,selectItems=[{text:"최신순"},{text:"오래된순"}],toggleSelectBox=()=>{setIsActive((prev=>!prev))};return hooks_useClickOutside(ref,toggleSelectBox,isActive),__jsx(Wrapper,{ref},__jsx(SelectWrapper,{onClick:toggleSelectBox},__jsx(Text,null,selectItems[activeIndex].text),__jsx(Icon.Z,{name:"ChevronDownIcon"})),isActive&&__jsx(OptionWrapper,null,selectItems.map(((item,i)=>__jsx(Item,{key:i,active:activeIndex===i,onClick:()=>{onSelected(i),toggleSelectBox()}},item.text)))))};Select.displayName="Select",Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{activeIndex:{required:!1,tsType:{name:"number"},description:""},onSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"void"}}},description:""}}};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{activeIndex:{defaultValue:null,description:"",name:"activeIndex",required:!1,type:{name:"number"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!0,type:{name:"(index: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"components/ui/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./components/ui/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/ui/Select/Select.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Select",component:_Select__WEBPACK_IMPORTED_MODULE_1__.P},Template=args=>__jsx(_Select__WEBPACK_IMPORTED_MODULE_1__.P,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => __jsx(Select, args)",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ui-Select-Select-stories.01a72c1a.iframe.bundle.js.map