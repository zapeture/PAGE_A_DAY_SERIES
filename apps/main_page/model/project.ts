export interface ThumbNail {
  alt: string;
  asset: any;
  _type: string;
}

export interface Project {
  _type: string;
  _id: string;
  title: string;
  _updatedAt: string;
  sourceCodeUrl: string;
  thumbNail: ThumbNail;
  url: string;
  _createdAt: string;
  _rev: string;
  status: "live" | "upcoming";
}

export type Projects = Project[];
