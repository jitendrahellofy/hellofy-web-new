export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  description?:string;
  submenu?: Menu[];
};
