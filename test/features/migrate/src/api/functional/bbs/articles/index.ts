/**
 * @packageDocumentation
 * @module api.functional.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../structures/IBbsArticle";
import type { IPage } from "../../../structures/IPage";

/**
 * @controller BbsArticlesController.index
 * @path PATCH /bbs/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  query: index.Query,
): Promise<index.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...index.METADATA,
      template: index.METADATA.path,
      path: index.path(query),
    },
  );
}
export namespace index {
  export type Query = Resolved<IPage.IRequest>;
  export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

  export const METADATA = {
    method: "PATCH",
    path: "/bbs/articles",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (query: index.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = "/bbs/articles";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
}

/**
 * @controller BbsArticlesController.at
 * @path GET /bbs/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...at.METADATA,
      template: at.METADATA.path,
      path: at.path(id),
    },
  );
}
export namespace at {
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "GET",
    path: "/bbs/articles/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/bbs/articles/${encodeURIComponent(id?.toString() ?? "null")}`;
}

/**
 * Store an article.
 *
 * @param input Content to store
 * @returns Newly archived article
 * @author Samchon
 * @warning This is an fake API
 *
 * @controller BbsArticlesController.create
 * @path POST /bbs/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function create(
  connection: IConnection,
  input: create.Input,
): Promise<create.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...create.METADATA,
      template: create.METADATA.path,
      path: create.path(),
    },
    input,
  );
}
export namespace create {
  export type Input = Resolved<IBbsArticle.ICreate>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/bbs/articles",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = () => "/bbs/articles";
}

/**
 * @controller BbsArticlesController.update
 * @path PUT /bbs/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  id: string & Format<"uuid">,
  input: update.Input,
): Promise<void> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...update.METADATA,
      template: update.METADATA.path,
      path: update.path(id),
    },
    input,
  );
}
export namespace update {
  export type Input = Resolved<Partial<IBbsArticle.ICreate>>;

  export const METADATA = {
    method: "PUT",
    path: "/bbs/articles/:id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/bbs/articles/${encodeURIComponent(id?.toString() ?? "null")}`;
}
