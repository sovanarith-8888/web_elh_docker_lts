export type ImageTypeDefinition = {
  src: string;
  alt?: string;
  width?: number | undefined;
  height?: number | undefined;
  borderRadius?: "sm" | "md" | "lg" | "full" | "none";
  className?: string;
};

export type ImageCarouselDefinition = {
  src: string;
  alt?: string;
}

export type NearbyDefinitions = {
  src: string;
  alt?: string;
  des?: string;
}
export type SubUnitItemCardDefinition = {
  iconItem?: string;
  descriptionItem?: string;
}
export type  SubUnitTpyDefinitions = {
  key?: string;
  subUnitName?: string;
  properties: SubUnitItemCardDefinition[]
}


