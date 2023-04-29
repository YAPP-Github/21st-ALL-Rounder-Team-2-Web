"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[7531],{"./components/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ph:()=>Select,ZP:()=>Select_Select});var react=__webpack_require__("./node_modules/react/index.js");const useClickOutside=handler=>{const ref=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const handleClickOutside=e=>{!ref.current||e.target instanceof HTMLElement&&ref.current.contains(e.target)||handler()};return document.addEventListener("mousedown",handleClickOutside),()=>document.addEventListener("mousedown",handleClickOutside)}),[handler]),ref},hooks_useClickOutside=useClickOutside;try{useClickOutside.displayName="useClickOutside",useClickOutside.__docgenInfo={description:"",displayName:"useClickOutside",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["hooks/useClickOutside.tsx#useClickOutside"]={docgenInfo:useClickOutside.__docgenInfo,name:"useClickOutside",path:"hooks/useClickOutside.tsx#useClickOutside"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/Typographies.tsx"),colors=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components_browser_esm.ZP.div`
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
`,SelectTrigger=styled_components_browser_esm.ZP.button`
  display: flex;
  align-items: center;
  ${Typographies.ke}
  color: ${colors.O.gray400};
`,SelectList=styled_components_browser_esm.ZP.ul`
  position: absolute;
  ${props=>{switch(props.$align){case"start":return styled_components_browser_esm.iv`
          left: 0;
        `;case"end":return styled_components_browser_esm.iv`
          right: 0;
        `;default:return styled_components_browser_esm.iv`
          left: 50%;
          transform: translateX(-50%);
        `}}}
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 0;
  background: ${colors.O.overlay};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`,SelectItem=styled_components_browser_esm.ZP.li`
  width: 100%;
  padding: 12px 16px;
  ${Typographies.ke}
  border-bottom: 0.4px solid ${colors.O.gray700};
  color: ${colors.O.gray400};

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/Select/Select.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{SelectTrigger.displayName="SelectTrigger",SelectTrigger.__docgenInfo={description:"",displayName:"SelectTrigger",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.styles.tsx#SelectTrigger"]={docgenInfo:SelectTrigger.__docgenInfo,name:"SelectTrigger",path:"components/Select/Select.styles.tsx#SelectTrigger"})}catch(__react_docgen_typescript_loader_error){}try{SelectList.displayName="SelectList",SelectList.__docgenInfo={description:"",displayName:"SelectList",props:{$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.styles.tsx#SelectList"]={docgenInfo:SelectList.__docgenInfo,name:"SelectList",path:"components/Select/Select.styles.tsx#SelectList"})}catch(__react_docgen_typescript_loader_error){}try{SelectItem.displayName="SelectItem",SelectItem.__docgenInfo={description:"",displayName:"SelectItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.styles.tsx#SelectItem"]={docgenInfo:SelectItem.__docgenInfo,name:"SelectItem",path:"components/Select/Select.styles.tsx#SelectItem"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const SelectContext=(0,react.createContext)(void 0),Select=_ref=>{let{className,value,onValueChange,children}=_ref;const{0:isOpen,1:setIsOpen}=(0,react.useState)(!1),context=(0,react.useMemo)((()=>({value,onValueChange,isOpen,setIsOpen})),[value,onValueChange,isOpen,setIsOpen]),ref=hooks_useClickOutside((()=>setIsOpen(!1)));return __jsx(SelectContext.Provider,{value:context},__jsx(Wrapper,{ref,className},children))};Select.displayName="Select";const useSelectContext=()=>{const context=(0,react.useContext)(SelectContext);if(void 0===context)throw new Error("should be used within Select");return context},Select_SelectTrigger=_ref2=>{let{className,children}=_ref2;const{setIsOpen}=useSelectContext();return __jsx(SelectTrigger,{className,type:"button",onClick:()=>setIsOpen((prev=>!prev))},children)};Select_SelectTrigger.displayName="SelectTrigger";const SelectIcon=_ref3=>{let{children}=_ref3;const{isOpen}=useSelectContext();return __jsx(react.Fragment,null,"function"==typeof children?children(isOpen):children)},Select_SelectList=_ref4=>{let{className,align="center",children}=_ref4;const{isOpen}=useSelectContext();return isOpen?__jsx(SelectList,{className,$align:align},children):null};Select_SelectList.displayName="SelectList";const Select_SelectItem=_ref5=>{let{className,value,children}=_ref5;const{onValueChange,setIsOpen}=useSelectContext();return __jsx(SelectItem,{className,onClick:()=>{onValueChange(value),setIsOpen(!1)}},children)};Select_SelectItem.displayName="SelectItem",Select.Trigger=Select_SelectTrigger,Select.Icon=SelectIcon,Select.List=Select_SelectList,Select.Item=Select_SelectItem,Select.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: PropsWithChildren<{ className?: string }>",type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"PropsWithChildren<{ className?: string }>",alias:"PropsWithChildren"}}],returns:null},{name:"Icon",docblock:null,modifiers:["static"],params:[{name:"{ children }: SelectIconProp",type:{name:"signature",type:"object",raw:"{\n  children: ReactNode | ((isOpen: boolean) => void);\n}",signature:{properties:[{key:"children",value:{name:"union",raw:"ReactNode | ((isOpen: boolean) => void)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0}}]},alias:"SelectIconProp"}}],returns:null},{name:"List",docblock:null,modifiers:["static"],params:[{name:'{\n  className,\n  align = "center",\n  children,\n}: PropsWithChildren<{ className?: string; align?: "start" | "center" | "end" }>',type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:'{ className?: string; align?: "start" | "center" | "end" }',signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"align",value:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}],required:!1}}]}}],raw:'PropsWithChildren<{ className?: string; align?: "start" | "center" | "end" }>',alias:"PropsWithChildren"}}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{\n  className,\n  value,\n  children,\n}: PropsWithChildren<{ className?: string; value: string }>",type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:"{ className?: string; value: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"PropsWithChildren<{ className?: string; value: string }>",alias:"PropsWithChildren"}}],returns:null}],displayName:"Select",props:{className:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Select_Select=Select;Select_SelectTrigger.__docgenInfo={description:"",methods:[],displayName:"SelectTrigger"},SelectIcon.__docgenInfo={description:"",methods:[],displayName:"SelectIcon",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((isOpen: boolean) => void)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""}}},Select_SelectList.__docgenInfo={description:"",methods:[],displayName:"SelectList",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1}}},Select_SelectItem.__docgenInfo={description:"",methods:[],displayName:"SelectItem"};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}try{Trigger.displayName="Select.Trigger",Trigger.__docgenInfo={description:"",displayName:"Select.Trigger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#Select.Trigger"]={docgenInfo:Select.Trigger.__docgenInfo,name:"Select.Trigger",path:"components/Select/Select.tsx#Select.Trigger"})}catch(__react_docgen_typescript_loader_error){}try{Icon.displayName="Select.Icon",Icon.__docgenInfo={description:"",displayName:"Select.Icon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#Select.Icon"]={docgenInfo:Select.Icon.__docgenInfo,name:"Select.Icon",path:"components/Select/Select.tsx#Select.Icon"})}catch(__react_docgen_typescript_loader_error){}try{List.displayName="Select.List",List.__docgenInfo={description:"",displayName:"Select.List",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#Select.List"]={docgenInfo:Select.List.__docgenInfo,name:"Select.List",path:"components/Select/Select.tsx#Select.List"})}catch(__react_docgen_typescript_loader_error){}try{Item.displayName="Select.Item",Item.__docgenInfo={description:"",displayName:"Select.Item",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#Select.Item"]={docgenInfo:Select.Item.__docgenInfo,name:"Select.Item",path:"components/Select/Select.tsx#Select.Item"})}catch(__react_docgen_typescript_loader_error){}try{Select_SelectTrigger.displayName="SelectTrigger",Select_SelectTrigger.__docgenInfo={description:"",displayName:"SelectTrigger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#SelectTrigger"]={docgenInfo:Select_SelectTrigger.__docgenInfo,name:"SelectTrigger",path:"components/Select/Select.tsx#SelectTrigger"})}catch(__react_docgen_typescript_loader_error){}try{SelectIcon.displayName="SelectIcon",SelectIcon.__docgenInfo={description:"",displayName:"SelectIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#SelectIcon"]={docgenInfo:SelectIcon.__docgenInfo,name:"SelectIcon",path:"components/Select/Select.tsx#SelectIcon"})}catch(__react_docgen_typescript_loader_error){}try{Select_SelectList.displayName="SelectList",Select_SelectList.__docgenInfo={description:"",displayName:"SelectList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#SelectList"]={docgenInfo:Select_SelectList.__docgenInfo,name:"SelectList",path:"components/Select/Select.tsx#SelectList"})}catch(__react_docgen_typescript_loader_error){}try{Select_SelectItem.displayName="SelectItem",Select_SelectItem.__docgenInfo={description:"",displayName:"SelectItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Select/Select.tsx#SelectItem"]={docgenInfo:Select_SelectItem.__docgenInfo,name:"SelectItem",path:"components/Select/Select.tsx#SelectItem"})}catch(__react_docgen_typescript_loader_error){}},"./components/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`},"./components/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_components_Icon_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Icon/Icon/Icon.tsx"),_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/Select/Select.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={component:_Select__WEBPACK_IMPORTED_MODULE_3__.Ph,title:"UI/Select"},Default=args=>{const{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("apple");return __jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.Ph,(0,_home_runner_work_21st_ALL_Rounder_Team_2_Web_21st_ALL_Rounder_Team_2_Web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},args,{value,onValueChange:setValue}),__jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.Ph.Trigger,null,"apple"===value?"apple🍎":"orange🍊",__jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.Ph.Icon,null,(isOpen=>__jsx(IconStyled,{name:"ChevronDownIcon",$isOpen:isOpen})))),__jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.Ph.List,{align:"start"},__jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.Ph.Item,{value:"apple"},"apple🍎"),__jsx(_Select__WEBPACK_IMPORTED_MODULE_3__.Ph.Item,{value:"orange"},"orange🍊")))};Default.displayName="Default";const IconStyled=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_components_Icon_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Z)`
  transform: ${_ref=>{let{$isOpen}=_ref;return $isOpen?"rotate(180deg)":"none"}};
`;Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},Default.parameters?.docs),{},{source:_objectSpread({originalSource:'args => {\n  const [value, setValue] = useState("apple");\n  return <Select {...args} value={value} onValueChange={setValue}>\n      <Select.Trigger>\n        {value === "apple" ? "apple🍎" : "orange🍊"}\n        <Select.Icon>{isOpen => <IconStyled name="ChevronDownIcon" $isOpen={isOpen} />}</Select.Icon>\n      </Select.Trigger>\n      <Select.List align="start">\n        <Select.Item value="apple">apple🍎</Select.Item>\n        <Select.Item value="orange">orange🍊</Select.Item>\n      </Select.List>\n    </Select>;\n}'},Default.parameters?.docs?.source)})}),Default.__docgenInfo={description:"",methods:[],displayName:"Default"}},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}}}]);
//# sourceMappingURL=components-Select-Select-stories.09a33335.iframe.bundle.js.map