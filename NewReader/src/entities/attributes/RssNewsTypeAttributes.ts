export type AuthorTypeAttributes = {
  name?: string | undefined;
};

export type CategoriesTypeAttributes = {
  name: string | undefined;
};

export type EnclosuresTypeAttributes = {
  url: string | undefined;
  length: string | undefined;
  mimeType: string | undefined;
};

export type RssNewsTypeAttributes = {
  id: string | undefined;
  published: string | undefined;
  title?: string | undefined;
  authors?: AuthorTypeAttributes[];
  categories?: CategoriesTypeAttributes[];
  content?: string | undefined;
  description?: string | undefined;
  enclosures?: EnclosuresTypeAttributes[];
};
