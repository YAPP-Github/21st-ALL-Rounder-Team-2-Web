declare module "*.gif";
declare module "*.png";
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module "*.json" {
  const value: any;
  export default value;
}
