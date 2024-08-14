/**
 * @packageDocumentation
 * @module api.functional.multipart
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type {
  IConnection,
  IPropagation,
  Resolved,
  HttpError,
} from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IMultipart } from "../../structures/IMultipart";

/**
 * @controller MultipartController.post
 * @path POST /multipart
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function post(
  connection: IConnection,
  body: post.Input,
): Promise<post.Output> {
  return !!connection.simulate
    ? post.simulate(connection, body)
    : PlainFetcher.propagate<any, any>(
        connection,
        {
          ...post.METADATA,
          template: post.METADATA.path,
          path: post.path(),
        },
        body,
      );
}
export namespace post {
  export type Input = IMultipart;
  export type Output = IPropagation<
    {
      201: void;
    },
    201
  >;

  export const METADATA = {
    method: "POST",
    path: "/multipart",
    request: {
      type: "multipart/form-data",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = () => "/multipart";
  export const random = (g?: Partial<typia.IRandomGenerator>): Resolved<void> =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    body: post.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    try {
      assert.body(() => typia.assert(body));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return {
      success: true,
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
      data: random(
        "object" === typeof connection.simulate && null !== connection.simulate
          ? connection.simulate
          : undefined,
      ),
    } as Output;
  };
}
