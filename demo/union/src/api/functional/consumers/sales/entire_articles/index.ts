/**
 * @packageDocumentation
 * @module api.functional.consumers.sales.entire_articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { ISaleReview } from "./../../../../structures/ISaleReview";
import type { ISaleInquiry } from "./../../../../structures/ISaleInquiry";
import type { IPage } from "./../../../../structures/IPage";
import type { ISaleEntireArtcle } from "./../../../../structures/ISaleEntireArticle";

/**
 * List up entire sale articles.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param ipAddr IP Address of the client
 * @param href `window.location.href`
 * @param query More query parameters
 * @param input Page request info
 * @returns Paged the entire articles
 * 
 * @controller ConsumerSaleEntireArticlesController.index()
 * @path PATCH /consumers/:section/sales/:saleId/entire_articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        ipAddr: string,
        href: string,
        query: ISaleReview.IQuery,
        input: ISaleInquiry.IRequest
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId, ipAddr, href, query),
        input
    );
}
export namespace index
{
    export type Query = ISaleReview.IQuery;
    export type Input = ISaleInquiry.IRequest;
    export type Output = IPage<ISaleEntireArtcle.ISummary>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/entire_articles";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, ipAddr: string, href: string, query: ISaleReview.IQuery): string
    {
        return `/consumers/${encodeURIComponent(section)}/sales/${encodeURIComponent(saleId)}/entire_articles?${new URLSearchParams(
        {
            ...query,
            ip: ipAddr,
            "location.href": href,
        } as any).toString()}`;
    }
}

/**
 * Get detailed sale article record.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param id ID of the target article
 * @returns The detailed article record
 * 
 * @controller ConsumerSaleEntireArticlesController.at()
 * @path GET /consumers/:section/sales/:saleId/entire_articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(section, saleId, id)
    );
}
export namespace at
{
    export type Output = ISaleEntireArtcle;

    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/entire_articles/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/consumers/${encodeURIComponent(section)}/sales/${encodeURIComponent(saleId)}/entire_articles/${encodeURIComponent(id)}`;
    }
}