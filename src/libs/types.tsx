import { ReactNode } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export interface LayoutProps {
  children: ReactNode;
}

// common
export interface TitleProps {
  heading: string;
  subheading: string;
}

export interface BorderProps {
  additionalClass?: string;
}

export interface CategoryButtonProps {
  category: string;
  titleKey: keyof Messages[`common`][`categories`];
  activeCategory?: boolean;
  additionalLinkClass?: string;
  additionalBackgroundClass?: string;
  boxShadow: string;
}

export interface StrokeProps {
  additionalClass?: string;
  src: string;
}

export interface ModalItem {
  label: string;
  value: string;
}

export interface StyledModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  modalItems: ModalItem[];
  data: FieldValues | null;
  isHome?: boolean;
}
export interface TextFieldProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  label: string;
  placeholder: string;
  type: string;
  minLength?: { value: number; message: string };
  requiredMessage?: string;
  validateFunction?: (value: string) => boolean | string;
}

export interface CheckboxFieldProps {
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  label: string;
  requiredMessage?: string;
  control: Control;
  onClick: () => void;
}

export interface DropzoneProps {
  filesArray: File[];
  setFilesArray: (files: File[]) => void;
  mainLabel: string;
  loadedLabel: string;
  emptyLabel: string;
  loadedTitle: string;
  emptyTitle: string;
  deleteTitle: string;
  deleteAll: string;
}

export interface TextareaFieldProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  placeholder: string;
  requiredMessage?: string;
  validateFunction?: any;
  label: string;
}

export interface ErrorParagraphProps {
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  className?: string;
}

// about-us
export interface MotionScrollOutProps {
  children: ReactNode;
}

export interface MotionAppearProps {
  firstItem: ReactNode;
  secondItem: ReactNode;
  thirdItem: ReactNode;
}

export interface FeatureProps {
  title: string;
  description: string;
  firstTag: string;
  secondTag: string;
  src: string;
}

// contact

export interface ContactDataItemProps {
  title: string;
  firstParagraph?: string;
  secondParagraph?: string;
  firstLink: string;
  firstHref: string;
  secondLink?: string;
  secondHref?: string;
}

//products
export type SortByType =
  | "name"
  | "length"
  | "width"
  | "height"
  | "curbWeight"
  | "gvw"
  | "loadArea"
  | "";

export type SortByDirection = "" | "asc" | "desc";

export type SearchTags = [] | string[];

export interface Product {
  name: string;
  category: keyof Messages["products"]["trailerDetail"];
  path: string;
  family: string;
  height: number;
  gvw: number;
  pathID: string;
  widthArea: number;
  lengthArea: number;
  width: number;
  length: number;
  curbWeight: number;
  tags: string[];
}

export interface TrailerDetailProps {
  products: Product[];
}

export interface Data {
  products: Product[];
  tags: string[];
}

export interface UseSortSelectProps {
  selectedTags: string[];
  sortBy: { type: SortByType; direction: SortByDirection };
  setSortBy: (sort: { type: SortByType; direction: SortByDirection }) => void;
  category: string;
  router: any;
}

export interface UseSortSelectReturn {
  sortBy: { type: SortByType; direction: SortByDirection };
  handleSort: (type: SortByType, direction: SortByDirection) => void;
}

export interface UseTagSelectProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  router: any;
  sortBy: { type: SortByType; direction: SortByDirection };
}

export interface UseTagSelectReturn {
  handleTagClick: (tag: string) => void;
}

export interface UseSearchTermProps {
  selectedTags: string[];
  category: string;
  router: any;
  sortBy: { type: SortByType; direction: SortByDirection };
}

export interface SortAndFilterProps {
  productsArray: Product[];
  sortBy: { type: SortByType; direction: SortByDirection };
  selectedTags: string[];
  category: string;
}

export interface ViewSelectorProps {
  handleViewChange: (view: string) => void;
  view: string;
}

export interface SortModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: { type: SortByType; direction: SortByDirection };
  setSelectedTags: React.Dispatch<React.SetStateAction<SearchTags>>;
  setSortBy: React.Dispatch<
    React.SetStateAction<{ type: SortByType; direction: SortByDirection }>
  >;
  handleSort: (type: SortByType, direction: SortByDirection) => void;
}

export interface TagsProps {
  handleTagClick: (tag: keyof Messages["products"]["tags"]) => void;
  tags: string[];
  selectedTags: string[];
}

export interface PropertiesProps {
  title: string;
  icon: string;
  value: string | number;
}

export interface Product {
  name: string;
  gvw: number;
  height: number;
  widthArea: number;
  lengthArea: number;
  width: number;
  length: number;
  curbWeight: number;
}

export interface DetailsProps {
  product: Product;
}

export interface HeaderProps {
  path: string;
  name: string;
  category: string;
  isGrid?: boolean;
}

export interface SortSectionProps {
  sortBy: {
    type: SortByType;
    direction: SortByDirection;
  };
  selectedTags: string[] | [];
  setSortBy: React.Dispatch<
    React.SetStateAction<{
      type: SortByType;
      direction: SortByDirection;
    }>
  >;
  handleSort: (type: SortByType, direction: SortByDirection) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

//homepage
export interface CarouselProps {
  images: string[];
  className?: string;
  priority?: boolean;
}

//partners
export interface Partner {
  companyName: string;
  address: string;
  website: string;
  email: string;
  tel: string;
  src: string;
  position: {
    lat: number;
    lng: number;
  };
}

export interface PartnersListProps {
  mapRef: React.MutableRefObject<google.maps.Map | null>;
  infoWindowRef: React.MutableRefObject<google.maps.InfoWindow | null>;
  markerRef: React.MutableRefObject<any | null>;
  partners: Partner[];
  filteredPartners: Partner[];
  buildContent: (property: any) => HTMLDivElement;
}

//motion
export interface MotionProps {
  children: ReactNode;
}

export interface MotionShuffleProps {
  children: ReactNode;
  x: number | string;
}

export interface MotionHoverProps {
  children: ReactNode;
  rotateY: number;
  skewY: number;
  verticalBox: string;
}

//product
export interface HeaderProductProps {
  path: string;
  name: string;
  category: keyof Messages["products"]["heading"];
}

export interface ProductData {
  data: {
    pathID: string;
    pdfGalvanized: string;
    pdfPowdered: string;
    name: string;
    category: keyof Messages["products"]["heading"];
    path: string;
    family: string;
    tags: keyof Messages["product"][];
  };
  specification: {
    gvw: string;
    load: string;
    area: string;
    weight: string;
    dimensions: string;
    axles: string;
    axlesType: string;
    wheels: string;
  };
  drawings: {
    profile: string;
    front: string;
    top: string;
  };
  standard: string[];
  optional: string[];
  images: {
    galvanized: string[];
    powdered: string[];
    filled: string[];
  };
}

export interface PropertiesProductProps {
  standard: string[];
}

export interface VariantButtonProps {
  type: string;
  label: keyof Messages["product"]["productDetails"]["variantButtons"];
  setVariant: React.Dispatch<React.SetStateAction<string>>;
  images: {
    galvanized: string[];
    powdered: string[];
    filled: string[];
  };
  path: string;
  buttonType: string;
}

export interface VariantButtonsProps {
  path: string;
  setVariant: React.Dispatch<React.SetStateAction<string>>;
  images: {
    galvanized: string[];
    powdered: string[];
    filled: string[];
  };
}

export interface TagsProductProps {
  path: string;
  tags: keyof Messages["product"]["tags"][];
  locale: string;
}

export interface ProductCarouselProps {
  family: string;
  variant: string;
  url: {
    [variant: string]: string[];
  };
}

export interface DownloadsProps {
  pdfGalvanized: string;
  pdfPowdered: string;
}

export interface DrawingsProps {
  pathID: string;
  profile: string;
  front: string;
  top: string;
}

export interface MenuButtonsProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  activeSection: string;
}

export interface MotionContentProps {
  children: ReactNode;
  ownKey: string;
}

export interface TableRowProps {
  label: string | JSX.Element;
  value: string | JSX.Element;
}

interface Specification {
  gvw: string;
  load: string;
  area: string;
  weight: string;
  dimensions: string;
  axles: string;
  axlesType: string;
  wheels: string;
}

export interface TechnicalSpecificationsProps {
  specification: Specification;
}

export interface ProductDetailsProps {
  specification: {
    gvw: string;
    load: string;
    area: string;
    weight: string;
    dimensions: string;
    axles: string;
    axlesType: string;
    wheels: string;
  };
  optional: string[];
  pathID: string;
  pdfPowdered: string;
  pdfGalvanized: string;
  drawings: {
    profile: string;
    front: string;
    top: string;
  };
}
