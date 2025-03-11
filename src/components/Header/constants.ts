export interface IMenuLink {
  id: number;
  href: string;
  label: string;
  icon?: {
    src: string;
    alt: string;
  };
}

export interface ISearchItem {
  id: number;
  path: string;
  label: string;
}
