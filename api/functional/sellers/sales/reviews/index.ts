import { AesPkcs5 } from "./../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../__internal/Fetcher";
import type { IConnection } from "./../../../../IConnection";
import type { Primitive } from "./../../../../Primitive";

import type { ISaleArticle } from "./../../../../structures/sales/articles/ISaleArticle";
import type { ISaleInquiry } from "./../../../../structures/sales/articles/ISaleInquiry";
import type { ISaleReview } from "./../../../../structures/sales/articles/ISaleReview";
import type { IPage } from "./../../../../structures/common/IPage";


/**
 * Store a new answer.
 * 
 * @param connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param inquiryId ID of the target inquiry to be answered
 * @param input Content to archive
 * @return The inquiry with newly archived answer
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when the sale is not yours
 * @throw 422 unprocessable entity error when you've already answered
 * 
 * @controller SellerSaleReviewsController.store()
 * @path POST sellers/:section/sales/:saleId/reviews/:inquiryId
 */
export function store(connection: IConnection, section: string, saleId: number, inquiryId: number, input: Primitive<store.Input>): Promise<store.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":true},
        "POST",
        `sellers/${section}/sales/${saleId}/reviews/${inquiryId}`,
        input
    );
}
export namespace store
{
    export type Input = Primitive<ISaleArticle.IContent>;
    export type Output = Primitive<ISaleInquiry<ISaleReview.IContent>>;
}

/**
 * Update an answer.
 * 
 * @param connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param inquiryId ID of the target inquiry to be updated
 * @param input New content to be overwritten
 * @return The inquiry record after the update
 * 
 * @controller SellerSaleReviewsController.update()
 * @path POST sellers/:section/sales/:saleId/reviews/:inquiryId
 */
export function update(connection: IConnection, section: string, saleId: number, inquiryId: number, input: Primitive<update.Input>): Promise<update.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":true},
        "POST",
        `sellers/${section}/sales/${saleId}/reviews/${inquiryId}`,
        input
    );
}
export namespace update
{
    export type Input = Primitive<ISaleArticle.IContent>;
    export type Output = Primitive<ISaleInquiry<ISaleReview.IContent>>;
}

/**
 * Remove an answer.
 * 
 * @param connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param inquiryId ID of the target inquiry that the answer would be erased
 * @return Empty object
 * 
 * @controller SellerSaleReviewsController.remove()
 * @path DELETE sellers/:section/sales/:saleId/reviews/:inquiryId
 */
export function remove(connection: IConnection, section: string, saleId: number, inquiryId: number): Promise<remove.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":false,"output_encrypted":true},
        "DELETE",
        `sellers/${section}/sales/${saleId}/reviews/${inquiryId}`
    );
}
export namespace remove
{
    export type Output = Primitive<object>;
}

/**
 * Get page of summarized inquiries.
 * 
 * @param connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param input Information about pagination and searching
 * @return Page of the inquiries
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller SellerSaleReviewsController.index()
 * @path GET sellers/:section/sales/:saleId/reviews/
 */
export function index(connection: IConnection, section: string, saleId: number, input: Primitive<index.Query>): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":false,"output_encrypted":true},
        "GET",
        `sellers/${section}/sales/${saleId}/reviews/?${new URLSearchParams(input as any).toString()}`
    );
}
export namespace index
{
    export type Query = Primitive<ISaleInquiry.IRequest>;
    export type Output = Primitive<IPage<ISaleReview.ISummary>>;
}

/**
 * Get detailed record of an inquiry
 * 
 * @param connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param id ID of the Target inquiry
 * @return Detailed record of the inquiry
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller SellerSaleReviewsController.at()
 * @path GET sellers/:section/sales/:saleId/reviews/:id
 */
export function at(connection: IConnection, section: string, saleId: number, id: number): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":false,"output_encrypted":true},
        "GET",
        `sellers/${section}/sales/${saleId}/reviews/${id}`
    );
}
export namespace at
{
    export type Output = Primitive<ISaleInquiry<ISaleReview.IContent>>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
