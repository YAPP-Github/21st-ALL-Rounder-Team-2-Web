"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[2247],{"./components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ExhibitionInfoHeader_ExhibitionInfoHeader});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),NavigationBar=__webpack_require__("./components/ui/NavigationBar/NavigationBar.tsx"),Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),ImageUploadSelectModal=__webpack_require__("./components/pages/ImageUploadSelectModal/ImageUploadSelectModal.tsx"),colors=__webpack_require__("./styles/colors.ts"),useOverlay=__webpack_require__("./hooks/useOverlay.tsx"),message=__webpack_require__("./libs/message/message.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/ui/Typographies.tsx");const Header=styled_components_browser_esm.ZP.header`
  position: relative;
`,GradientOverlay=styled_components_browser_esm.ZP.div`
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #161616 97.31%);
`,Content=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
`,ArtworkAddButton=styled_components_browser_esm.ZP.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.5px;
  border: 1px solid ${colors.O.green900};
  border-radius: 71px;
  padding: 8.5px 14px;
  color: ${colors.O.green900};
  ${Typographies.t0}
`,ExhibitionInfo=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > span {
    ${Typographies.SZ}
    letter-spacing: -0.3px;
  }
`,Category=styled_components_browser_esm.ZP.span`
  color: ${colors.O.gray400};
  letter-spacing: -0.3px;
`,Title=styled_components_browser_esm.ZP.h2`
  color: white;
  margin: 0;
  line-height: 130%;
  ${Typographies.dJ}
  letter-spacing: -0.3px;
`,ExhibitionInfoHeader_styles_Date=styled_components_browser_esm.ZP.span`
  color: ${colors.O.gray700};
  letter-spacing: -0.3px;
`;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}try{GradientOverlay.displayName="GradientOverlay",GradientOverlay.__docgenInfo={description:"",displayName:"GradientOverlay",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#GradientOverlay"]={docgenInfo:GradientOverlay.__docgenInfo,name:"GradientOverlay",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#GradientOverlay"})}catch(__react_docgen_typescript_loader_error){}try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}try{ArtworkAddButton.displayName="ArtworkAddButton",ArtworkAddButton.__docgenInfo={description:"",displayName:"ArtworkAddButton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#ArtworkAddButton"]={docgenInfo:ArtworkAddButton.__docgenInfo,name:"ArtworkAddButton",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#ArtworkAddButton"})}catch(__react_docgen_typescript_loader_error){}try{ExhibitionInfo.displayName="ExhibitionInfo",ExhibitionInfo.__docgenInfo={description:"",displayName:"ExhibitionInfo",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#ExhibitionInfo"]={docgenInfo:ExhibitionInfo.__docgenInfo,name:"ExhibitionInfo",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#ExhibitionInfo"})}catch(__react_docgen_typescript_loader_error){}try{Category.displayName="Category",Category.__docgenInfo={description:"",displayName:"Category",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Category"]={docgenInfo:Category.__docgenInfo,name:"Category",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Category"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{ExhibitionInfoHeader_styles_Date.displayName="Date",ExhibitionInfoHeader_styles_Date.__docgenInfo={description:"",displayName:"Date",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Date"]={docgenInfo:ExhibitionInfoHeader_styles_Date.__docgenInfo,name:"Date",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.styles.tsx#Date"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const ExhibitionInfoHeader=_ref=>{let{postInfo}=_ref;const{isOpen:isOpenModal,open,close}=(0,useOverlay.Z)(),{mainImage,categoryName,name,postDate}=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},postInfo);return __jsx(react.Fragment,null,isOpenModal&&__jsx(ImageUploadSelectModal.Z,{onClose:close}),__jsx(Header,null,mainImage&&__jsx(image_default(),{alt:"대표 사진",src:mainImage,fill:!0,style:{objectFit:"cover"}}),__jsx(GradientOverlay,null,__jsx(NavigationBar.Z,{onGoBackClick:()=>{(0,message.b)(["GO_BACK"])},onEditClick:()=>{postInfo&&(0,message.b)(["NAVIGATE_TO_EXHIBIT_EDIT",postInfo])}}),__jsx(Content,null,__jsx(ExhibitionInfo,null,__jsx(Category,null,categoryName),__jsx(Title,null,name),__jsx(ExhibitionInfoHeader_styles_Date,null,postDate)),__jsx(ArtworkAddButton,{onClick:()=>{open()}},"작품추가",__jsx(Icon.Z,{name:"PlusIcon",size:18,color:colors.O.green900}))))))};ExhibitionInfoHeader.__docgenInfo={description:"",methods:[],displayName:"ExhibitionInfoHeader",props:{postInfo:{required:!1,tsType:{name:"PostDetailInfo"},description:""}}};const ExhibitionInfoHeader_ExhibitionInfoHeader=ExhibitionInfoHeader;try{ExhibitionInfoHeader.displayName="ExhibitionInfoHeader",ExhibitionInfoHeader.__docgenInfo={description:"",displayName:"ExhibitionInfoHeader",props:{postInfo:{defaultValue:null,description:"",name:"postInfo",required:!1,type:{name:"PostDetailInfo"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.tsx#ExhibitionInfoHeader"]={docgenInfo:ExhibitionInfoHeader.__docgenInfo,name:"ExhibitionInfoHeader",path:"components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.tsx#ExhibitionInfoHeader"})}catch(__react_docgen_typescript_loader_error){}},"./components/pages/ImageUploadSelectModal/ImageUploadSelectModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ImageUploadSelectModal_ImageUploadSelectModal});var react=__webpack_require__("./node_modules/react/index.js"),Modal=__webpack_require__("./components/ui/Modal/Modal.tsx"),Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),Divider=__webpack_require__("./components/ui/Divider/Divider.tsx"),Portal=__webpack_require__("./components/ui/Portal/Portal.tsx"),Dimmed=__webpack_require__("./components/ui/Dimmed/Dimmed.tsx"),message=__webpack_require__("./libs/message/message.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./styles/colors.ts"),Typographies=__webpack_require__("./components/ui/Typographies.tsx");const SelectList=styled_components_browser_esm.ZP.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`,SelectItem=styled_components_browser_esm.ZP.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  list-style: none;
  cursor: pointer;

  & > span {
    ${Typographies.Fn}
    color: ${colors.O.gray400};
  }
`;try{SelectList.displayName="SelectList",SelectList.__docgenInfo={description:"",displayName:"SelectList",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ImageUploadSelectModal/ImageUploadSelectModal.styles.tsx#SelectList"]={docgenInfo:SelectList.__docgenInfo,name:"SelectList",path:"components/pages/ImageUploadSelectModal/ImageUploadSelectModal.styles.tsx#SelectList"})}catch(__react_docgen_typescript_loader_error){}try{SelectItem.displayName="SelectItem",SelectItem.__docgenInfo={description:"",displayName:"SelectItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ImageUploadSelectModal/ImageUploadSelectModal.styles.tsx#SelectItem"]={docgenInfo:SelectItem.__docgenInfo,name:"SelectItem",path:"components/pages/ImageUploadSelectModal/ImageUploadSelectModal.styles.tsx#SelectItem"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const ImageUploadSelectModal=_ref=>{let{onClose}=_ref;return __jsx(Portal.Z,null,__jsx(Dimmed.Z,{onClick:onClose}),__jsx(Modal.Z,{headline:"무엇으로 기록할까요?",onClose},__jsx(SelectList,null,__jsx(SelectItem,{onClick:()=>{(0,message.b)(["NAVIGATE_TO_CAMERA"])}},__jsx(Icon.Z,{name:"CameraIcon"}),__jsx("span",null,"사진 촬영하기")),__jsx(Divider.i,null),__jsx(SelectItem,{onClick:()=>{(0,message.b)(["NAVIGATE_TO_GALLERY"])}},__jsx(Icon.Z,{name:"ImageIcon"}),__jsx("span",null,"갤러리에서 선택하기")))))};ImageUploadSelectModal.displayName="ImageUploadSelectModal",ImageUploadSelectModal.__docgenInfo={description:"",methods:[],displayName:"ImageUploadSelectModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ImageUploadSelectModal_ImageUploadSelectModal=ImageUploadSelectModal;try{ImageUploadSelectModal.displayName="ImageUploadSelectModal",ImageUploadSelectModal.__docgenInfo={description:"",displayName:"ImageUploadSelectModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ImageUploadSelectModal/ImageUploadSelectModal.tsx#ImageUploadSelectModal"]={docgenInfo:ImageUploadSelectModal.__docgenInfo,name:"ImageUploadSelectModal",path:"components/pages/ImageUploadSelectModal/ImageUploadSelectModal.tsx#ImageUploadSelectModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Button/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js");const Wrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
  display: flex;
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),__jsx=react.createElement;const IconButton=props=>{const{className,iconProps,onClick,ariaLabel}=props;return __jsx(Wrapper,{className,onClick,"aria-label":ariaLabel},__jsx(Icon.Z,iconProps))};IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!0,tsType:{name:"IconProps"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!0,type:{name:"Props"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/ui/Button/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Dimmed/Dimmed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ui_Dimmed_Dimmed});var react=__webpack_require__("./node_modules/react/index.js");const Dimmed=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(22, 22, 22, 0.6);
  z-index: 1000;
`;try{Dimmed.displayName="Dimmed",Dimmed.__docgenInfo={description:"",displayName:"Dimmed",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Dimmed/Dimmed.styles.tsx#Dimmed"]={docgenInfo:Dimmed.__docgenInfo,name:"Dimmed",path:"components/ui/Dimmed/Dimmed.styles.tsx#Dimmed"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Dimmed_Dimmed=_ref=>{let{onClick}=_ref;return __jsx(Dimmed,{onClick})};Dimmed_Dimmed.displayName="Dimmed",Dimmed_Dimmed.__docgenInfo={description:"",methods:[],displayName:"Dimmed",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ui_Dimmed_Dimmed=Dimmed_Dimmed;try{Dimmed_Dimmed.displayName="Dimmed",Dimmed_Dimmed.__docgenInfo={description:"",displayName:"Dimmed",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Dimmed/Dimmed.tsx#Dimmed"]={docgenInfo:Dimmed_Dimmed.__docgenInfo,name:"Dimmed",path:"components/ui/Dimmed/Dimmed.tsx#Dimmed"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components_browser_esm.ZP.div`
  width: 100%;
  height: 0.8px;
  background: ${colors.O.gray900};
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Divider/Divider.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/Divider/Divider.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Divider=()=>__jsx(Wrapper,null);Divider.displayName="Divider",Divider.__docgenInfo={description:"",methods:[],displayName:"Divider"}},"./components/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal_Modal});var react=__webpack_require__("./node_modules/react/index.js"),IconButton=__webpack_require__("./components/ui/Button/IconButton/IconButton.tsx"),colors=__webpack_require__("./styles/colors.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/ui/Typographies.tsx");const Container=styled_components_browser_esm.ZP.div`
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
`;try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"components/ui/Modal/Modal.styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{Headline.displayName="Headline",Headline.__docgenInfo={description:"",displayName:"Headline",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.styles.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"components/ui/Modal/Modal.styles.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.styles.tsx#Body"]={docgenInfo:Body.__docgenInfo,name:"Body",path:"components/ui/Modal/Modal.styles.tsx#Body"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const Modal=_ref=>{let{headline,onClose,children}=_ref;return __jsx(Container,null,__jsx(Headline,null,__jsx("div",null,__jsx(IconButton.h,{iconProps:{name:"MultiplyIcon",color:colors.O.gray400,size:20},onClick:onClose})),__jsx("span",null,headline)),__jsx(Body,null,children))};Modal.displayName="Modal",Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{headline:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/NavigationBar/NavigationBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NavigationBar_NavigationBar});var react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/ui/Typographies.tsx"),colors=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components_browser_esm.ZP.div`
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
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/NavigationBar/NavigationBar.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/ui/NavigationBar/NavigationBar.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.styles.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/ui/NavigationBar/NavigationBar.styles.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const NavigationBar=_ref=>{let{className,current,goBack={name:"ArrowLeftIcon",size:24},onGoBackClick,onEditClick}=_ref;return __jsx(Wrapper,{className},__jsx(Button,{onClick:onGoBackClick},__jsx(Icon.Z,{name:goBack.name,size:goBack.size})),__jsx(Title,null,current),onEditClick&&__jsx(Button,{onClick:onEditClick},"편집"))};NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{goBack:{defaultValue:{value:'{ name: "ArrowLeftIcon", size: 24 }',computed:!1},required:!1,tsType:{name:"signature",type:"object",raw:"{\n  name: IconType;\n  size: number;\n}",signature:{properties:[{key:"name",value:{name:"IconType",required:!0}},{key:"size",value:{name:"number",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},current:{required:!1,tsType:{name:"string"},description:""},onGoBackClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const NavigationBar_NavigationBar=NavigationBar;try{NavigationBar.displayName="NavigationBar",NavigationBar.__docgenInfo={description:"",displayName:"NavigationBar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"string"}},goBack:{defaultValue:{value:'{ name: "ArrowLeftIcon", size: 24 }'},description:"",name:"goBack",required:!1,type:{name:'{ name: "ARTIEIcon" | "BellIcon" | "CalendarIcon" | "UserIcon" | "ArrowDownIcon" | "ArrowDown2Icon" | "ArrowLeftIcon" | "InActivePinIcon" | "PinIcon" | "PlusIcon" | "ChevronDownIcon" | ... 7 more ... | "ChevronRightIcon"; size: number; }'}},onGoBackClick:{defaultValue:null,description:"",name:"onGoBackClick",required:!0,type:{name:"() => void"}},onEditClick:{defaultValue:null,description:"",name:"onEditClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NavigationBar/NavigationBar.tsx#NavigationBar"]={docgenInfo:NavigationBar.__docgenInfo,name:"NavigationBar",path:"components/ui/NavigationBar/NavigationBar.tsx#NavigationBar"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Portal=_ref=>{let{children}=_ref;const{0:isMount,1:setIsMount}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsMount(!0)}),[]),isMount?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,document.getElementById("overlay-root"))):null};Portal.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Portal;try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"components/ui/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./hooks/useOverlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{0:isOpen,1:setIsOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const onPopState=()=>{isOpen&&setIsOpen(!1)};return window.addEventListener("popstate",onPopState),()=>{window.removeEventListener("popstate",onPopState)}}),[isOpen]),{isOpen,open:()=>{setIsOpen(!0),window.history.pushState(null,"","")},close:()=>{setIsOpen(!1),window.history.back()}}}},"./libs/message/message.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>sendMessage});const isBrowser=()=>"undefined"!=typeof window,postAndroidMessage=data=>{if(!isBrowser)return;const jsonData=JSON.stringify(data);window.android?.postMessage?.(jsonData)},sendMessage=params=>{postAndroidMessage((params=>{const[actionName,payload]=params;return{action:actionName,payload}})(params))}},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ExhibitionInfoHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader.tsx"),_mocks_data_exhibition__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./mocks/data/exhibition.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"pages/ExhibitionInfoHeader",component:_ExhibitionInfoHeader__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>__jsx(_ExhibitionInfoHeader__WEBPACK_IMPORTED_MODULE_1__.Z,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={postInfo:_mocks_data_exhibition__WEBPACK_IMPORTED_MODULE_2__.u[3]},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => __jsx(ExhibitionInfoHeader, args)",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-pages-ExhibitionInfoHeader-ExhibitionInfoHeader-stories.9d404026.iframe.bundle.js.map