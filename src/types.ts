export type MediaTypes = "audio" | "video" | "image";

export type NasaSearchParams = {
  keywords: string;
  yearStart: number;
  mediaType: MediaTypes;
};

export type MediaSelectElement = HTMLSelectElement & {
  value: MediaTypes;
}

export type NasaResponse = {
  collection: {
    version: string;
    href: string;
    items: ItemsType[];
  };
};

export type ItemsType = {
  href?: string;
  data: DataType[];
  links: LinkType[];
};

export type DataType = {
  keywords: string[];
  nasa_id: string;
  media_type: string;
  description: string;
  center?: string;
  title?: string;
  location?: string;
  date_created?: string;
};

export type LinkType = {
  href: string;
  rel?: string;
  render?: string;
};

export type FormComponentDefinition = {
  type: string;
  label: string;
}

export type Inputs = {
  keywords: string,
  yearStart: number,
  mediaType: string,
  onChange: (params: NasaSearchParams) => void,
}