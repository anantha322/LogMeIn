export interface GetRssNewsRequest extends BaseAction {}
export interface GetRssNewsSuccess extends BaseAction {}
export interface GetRssNewsFailure extends BaseAction {}

export interface NewsState {
  rssNewsList: RssNewsType[];
  loading: boolean;
  error: any;
}

export interface BaseAction {
  type: string;
  payload?: any;
}

export type AuthorType = {
  name?: string | undefined;
};

export type CategoriesType = {
  name: string | undefined;
};

export type EnclosuresType = {
  url: string | undefined;
  length: string | undefined;
  mimeType: string | undefined;
};

export type RssNewsType = {
  id: string | undefined;
  published: string | undefined;
  title?: string | undefined;
  authors?: AuthorType[];
  categories?: CategoriesType[];
  content?: string | undefined;
  description?: string | undefined;
  enclosures?: EnclosuresType[];
};
