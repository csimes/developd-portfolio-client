declare module "*.png";
declare module "*.pdf";
declare module "*.jpg" {
  const value: any;
  export = value;
}
