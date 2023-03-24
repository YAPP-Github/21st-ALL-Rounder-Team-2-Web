"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[4093],{"./components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>Title,Fu:()=>ImageSkeleton,R9:()=>Url,im:()=>Wrapper,kI:()=>Info});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_components_ui_Typographies__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/ui/Typographies.tsx"),_styles_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 12px;
  background: rgba(63, 63, 63, 0.5);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,Info=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  flex: 1;
`,Url=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${_components_ui_Typographies__WEBPACK_IMPORTED_MODULE_0__.FP}
  color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O.gray600};
  margin-bottom: 6px;
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${_components_ui_Typographies__WEBPACK_IMPORTED_MODULE_0__.SZ}
  line-height: 150%;
  color: ${_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O.white};
`,ImageSkeleton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  width: 62px;
  height: 62px;
  border-radius: 8px;
  background: ${_styles_colors__WEBPACK_IMPORTED_MODULE_1__.O.gray900};
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{Info.displayName="Info",Info.__docgenInfo={description:"",displayName:"Info",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}try{Url.displayName="Url",Url.__docgenInfo={description:"",displayName:"Url",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Url"]={docgenInfo:Url.__docgenInfo,name:"Url",path:"components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Url"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{ImageSkeleton.displayName="ImageSkeleton",ImageSkeleton.__docgenInfo={description:"",displayName:"ImageSkeleton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#ImageSkeleton"]={docgenInfo:ImageSkeleton.__docgenInfo,name:"ImageSkeleton",path:"components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx#ImageSkeleton"})}catch(__react_docgen_typescript_loader_error){}},"./components/pages/LinkPreviewCard/LinkPreviewCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>LinkPreviewCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/image.js"),next_image__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__),_components_ui_Button_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ui/Button/IconButton/IconButton.tsx"),_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const LinkPreviewCard=_ref=>{let{url,image,title,onClick}=_ref;return __jsx(_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_3__.im,null,image&&__jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default(),{src:image,width:62,height:62,style:{objectFit:"cover",borderRadius:"8px"},alt:""}),__jsx(_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_3__.kI,null,__jsx(_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_3__.R9,null,url),__jsx(_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_3__.Dx,null,title)),__jsx(_components_ui_Button_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_2__.h,{iconProps:{name:"ChevronRightIcon",size:24},onClick}))};LinkPreviewCard.displayName="LinkPreviewCard",LinkPreviewCard.__docgenInfo={description:"",methods:[],displayName:"LinkPreviewCard",props:{url:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{LinkPreviewCard.displayName="LinkPreviewCard",LinkPreviewCard.__docgenInfo={description:"",displayName:"LinkPreviewCard",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/LinkPreviewCard/LinkPreviewCard.tsx#LinkPreviewCard"]={docgenInfo:LinkPreviewCard.__docgenInfo,name:"LinkPreviewCard",path:"components/pages/LinkPreviewCard/LinkPreviewCard.tsx#LinkPreviewCard"})}catch(__react_docgen_typescript_loader_error){}},"./components/pages/LinkPreviewCard/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/pages/LinkPreviewCard/LinkPreviewCard.styles.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Skeleton=()=>__jsx(_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_1__.im,null,__jsx(_LinkPreviewCard_styles__WEBPACK_IMPORTED_MODULE_1__.Fu,null));Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton"}},"./components/ui/Button/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js");const Wrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
  display: flex;
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),__jsx=react.createElement;const IconButton=props=>{const{className,iconProps,onClick,ariaLabel}=props;return __jsx(Wrapper,{className,onClick,"aria-label":ariaLabel},__jsx(Icon.Z,iconProps))};IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!0,tsType:{name:"IconProps"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!0,type:{name:"Props"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/ui/Button/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./components/pages/LinkPreviewCard/LinkPreviewCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,NoImage:()=>NoImage,NoTitle:()=>NoTitle,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_LinkPreviewCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/pages/LinkPreviewCard/LinkPreviewCard.tsx"),_components_pages_LinkPreviewCard_Skeleton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/pages/LinkPreviewCard/Skeleton.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"pages/LinkPreviewCard",component:_LinkPreviewCard__WEBPACK_IMPORTED_MODULE_2__.y},Template=args=>__jsx(_LinkPreviewCard__WEBPACK_IMPORTED_MODULE_2__.y,args);Template.displayName="Template";const Default=Template.bind({});Default.args={url:"artie.com",image:"https://picsum.photos/900",title:"Example Website"};const NoImage=Template.bind({});NoImage.args=_objectSpread(_objectSpread({},Default.args),{},{image:void 0});const NoTitle=Template.bind({});NoTitle.args=_objectSpread(_objectSpread({},Default.args),{},{title:void 0});const Loading=()=>__jsx(_components_pages_LinkPreviewCard_Skeleton__WEBPACK_IMPORTED_MODULE_3__.O,null);Loading.displayName="Loading",Loading.__docgenInfo={description:"",methods:[],displayName:"Loading"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => __jsx(LinkPreviewCard, args)",...Default.parameters?.docs?.source}}},NoImage.parameters={...NoImage.parameters,docs:{...NoImage.parameters?.docs,source:{originalSource:"args => __jsx(LinkPreviewCard, args)",...NoImage.parameters?.docs?.source}}},NoTitle.parameters={...NoTitle.parameters,docs:{...NoTitle.parameters?.docs,source:{originalSource:"args => __jsx(LinkPreviewCard, args)",...NoTitle.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"() => __jsx(Skeleton, null)",...Loading.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-pages-LinkPreviewCard-LinkPreviewCard-stories.6eb90909.iframe.bundle.js.map