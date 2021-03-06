export type Goal = {
  id: string;
  title: string;
  description: string;
};

export type GoalsData = {
  title: string;
  description: string;
};

export type ImagesData = {
  id: string;
  alt: string;
  src: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  src: string;
};

export type DataSlug = {
  [key: string]: Project | GoalsData | ImagesData;
};
