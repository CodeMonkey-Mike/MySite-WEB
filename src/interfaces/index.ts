import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Product {
  id: number;
}
export interface User {
  id:number;
  username:string;
  email:string;
}

export interface IInstance {
  alignContent?: 'start' | 'end';
  alignItems?: 'start' | 'end';
  justifyContent?: 'start' | 'end';
  flexWrap?: 'wrap' | 'nowrap';
  maxWidth?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}

export interface IIcon {
  icon: IconProp;
  fill?: string;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  padding?: string;
  margin?: string;
  style?: any;
  onClick?: () => void;
}

export interface ISkills {
  _id?: string;
  id?: number;
  __v?: number;
  name: string;
  sequence: number;
  strength: number;
}

export interface IProcess {
  _id?: string;
  id?: number;
  __v?: number;
  name: string;
  sequence: number;
  icon: string;
}

export interface IService {
  _id?: string;
  id?: number;
  __v?: number;
  name: string;
  image: string;
}

export interface IPortfolio {
  _id?: string;
  id?: number;
  __v?: number;
  client: string;
  description: string;
  detail: string;
  logo: string;
  sequence: number;
  slideImages: Array<any>;
  type: string;
  year?: number | string;
  website?: string;
  linkedin?: string;
  pinterest?: string;
  twitter?: string;
  facebook?: string;
  category?: string;
}

export interface ITestimonial {
  _id?: string;
  id?: number;
  __v?: number;
  company: string;
  name: string;
  quote: string;
}

export interface IAward {
  _id?: string;
  id?: number;
  __v?: number;
  awardMonth?: number;
  awardTime: string;
  awardYear?: number;
  company: string;
  image: string;
  title: string;
}

export interface IPost {
  _id?: string;
  id?: number;
  __v?: number;
  content: string;
  image: string;
  title: string;
  slug: string;
  author: string;
  anchor_title: string;
  tags: string;
  created_at: string;
  category: 'finance' | 'marketing' | 'engineering';
}

export interface IAboutSlider {
  uid: string;
  url: string;
}