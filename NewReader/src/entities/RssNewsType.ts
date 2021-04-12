import {get} from 'lodash';
import {
  AuthorTypeAttributes,
  CategoriesTypeAttributes,
  EnclosuresTypeAttributes,
  RssNewsTypeAttributes,
} from './attributes/RssNewsTypeAttributes';

export class RssNewsType {
  private _id: string | undefined;
  private _published: string | undefined;
  private _title?: string | undefined;
  private _authors?: AuthorTypeAttributes[] | undefined;
  private _categories?: CategoriesTypeAttributes[] | undefined;
  private _content?: string | undefined;
  private _description?: string | undefined;
  private _enclosures?: EnclosuresTypeAttributes[] | undefined;

  constructor(attributes: RssNewsTypeAttributes) {
    this._id = attributes.id;
    this._published = get(attributes, 'published', undefined);
    this._authors = get(attributes, 'authors', []);
    this._title = get(attributes, 'title', undefined);
    this._categories = get(attributes, 'categories', []);
    this._content = get(attributes, 'content', undefined);
    this._description = get(attributes, 'description', undefined);
    this._enclosures = get(attributes, 'enclosures', []);
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string | undefined) {
    this._id = value;
  }

  get published(): string | undefined {
    return this._published;
  }

  set published(value: string | undefined) {
    this._published = value;
  }

  get authors(): AuthorTypeAttributes[] | undefined {
    return this._authors;
  }

  set authors(value: AuthorTypeAttributes[] | undefined) {
    this._authors = value;
  }

  get title(): string | undefined {
    return this._title;
  }

  set title(value: string | undefined) {
    this._title = value;
  }

  get categories(): CategoriesTypeAttributes[] | undefined {
    return this._categories;
  }

  set categories(value: CategoriesTypeAttributes[] | undefined) {
    this._categories = value;
  }

  get content(): string | undefined {
    return this._content;
  }

  set content(value: string | undefined) {
    this._content = value;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description = value;
  }

  get enclosures(): EnclosuresTypeAttributes[] | undefined {
    return this._enclosures;
  }

  set enclosures(value: EnclosuresTypeAttributes[] | undefined) {
    this._enclosures = value;
  }

  public static createAttributesFromResponse(response: any) {
    const items = get(response, 'items', []);
    const newsFeedItems = items.map((element: any) => new RssNewsType(element));
    return newsFeedItems;
  }
}
