/* tslint:disable */
/* eslint-disable */
/**
 * YAPP 21st ALl2 API 명세서
 * YAPP 21st ALl2 API 명세서 입니다.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 월별 전시 조회 Response
 * @export
 * @interface CalendarExhibitResponseDto
 */
export interface CalendarExhibitResponseDto {
    /**
     * 연도(year)
     * @type {number}
     * @memberof CalendarExhibitResponseDto
     */
    'year': number;
    /**
     * 월(month)
     * @type {number}
     * @memberof CalendarExhibitResponseDto
     */
    'month': number;
    /**
     * 일(day)
     * @type {number}
     * @memberof CalendarExhibitResponseDto
     */
    'day': number;
    /**
     * 대표 이미지
     * @type {string}
     * @memberof CalendarExhibitResponseDto
     */
    'imageURL'?: string;
}
/**
 * 전시 생성 Request
 * @export
 * @interface CreateExhibitRequestDto
 */
export interface CreateExhibitRequestDto {
    /**
     * 전시명
     * @type {string}
     * @memberof CreateExhibitRequestDto
     */
    'name'?: string;
    /**
     * 카테고리 아이디
     * @type {number}
     * @memberof CreateExhibitRequestDto
     */
    'categoryId'?: number;
    /**
     * 관람 날짜
     * @type {string}
     * @memberof CreateExhibitRequestDto
     */
    'postDate'?: string;
}
/**
 * 전시 생성 Response
 * @export
 * @interface CreateExhibitResponseDto
 */
export interface CreateExhibitResponseDto {
    /**
     * 전시 아이디
     * @type {number}
     * @memberof CreateExhibitResponseDto
     */
    'id'?: number;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'message'?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    'status'?: number;
    /**
     * 
     * @type {Array<FieldError>}
     * @memberof ErrorResponse
     */
    'errors'?: Array<FieldError>;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'code'?: string;
}
/**
 * 
 * @export
 * @interface FieldError
 */
export interface FieldError {
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'field'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'value'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'reason'?: string;
}
/**
 * 
 * @export
 * @interface Pageable
 */
export interface Pageable {
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof Pageable
     */
    'size'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Pageable
     */
    'sort'?: Array<string>;
}
/**
 * 전시 Response
 * @export
 * @interface PostDetailInfo
 */
export interface PostDetailInfo {
    /**
     * 전시 아이디
     * @type {number}
     * @memberof PostDetailInfo
     */
    'id': number;
    /**
     * 전시명
     * @type {string}
     * @memberof PostDetailInfo
     */
    'name': string;
    /**
     * 관람 날짜
     * @type {string}
     * @memberof PostDetailInfo
     */
    'postDate': string;
    /**
     * 카테고리 아이디
     * @type {number}
     * @memberof PostDetailInfo
     */
    'categoryId': number;
    /**
     * 카테고리 명
     * @type {string}
     * @memberof PostDetailInfo
     */
    'categoryName': string;
    /**
     * 대표 이미지
     * @type {string}
     * @memberof PostDetailInfo
     */
    'mainImage'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PostDetailInfo
     */
    'published'?: boolean;
}
/**
 * 전시 Response
 * @export
 * @interface PostInfoDto
 */
export interface PostInfoDto {
    /**
     * 전시 아이디
     * @type {number}
     * @memberof PostInfoDto
     */
    'id'?: number;
    /**
     * 전시명
     * @type {string}
     * @memberof PostInfoDto
     */
    'name'?: string;
    /**
     * 관람 날짜
     * @type {string}
     * @memberof PostInfoDto
     */
    'postDate'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PostInfoDto
     */
    'published'?: boolean;
}
/**
 * 전시 수정 Request
 * @export
 * @interface UpdateExhibitRequestDto
 */
export interface UpdateExhibitRequestDto {
    /**
     * 수정할 이름
     * @type {string}
     * @memberof UpdateExhibitRequestDto
     */
    'name'?: string;
    /**
     * 수정할 날짜
     * @type {string}
     * @memberof UpdateExhibitRequestDto
     */
    'postDate'?: string;
}

/**
 * ExhibitControllerApi - axios parameter creator
 * @export
 */
export const ExhibitControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 처음 전시 정보 등록시 임시 전시로 생성됨
         * @summary 전시 생성
         * @param {CreateExhibitRequestDto} createExhibitRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPost: async (createExhibitRequestDto: CreateExhibitRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createExhibitRequestDto' is not null or undefined
            assertParamExists('createPost', 'createExhibitRequestDto', createExhibitRequestDto)
            const localVarPath = `/post`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createExhibitRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 임시 저장된 전시 목록 조회
         * @summary 임시 저장 전시 조회
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDraftPosts: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/post/draft`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 특정 전시 정보 조회
         * @summary 전시 조회
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPost: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPost', 'id', id)
            const localVarPath = `/post/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 전시 상세 페이지 내 전시 상세 정보 조회. 카테고리 정보, 대표이미지 정보를 포함함.
         * @summary 전시 상세 정보 조회
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostInfoWithCategory: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPostInfoWithCategory', 'id', id)
            const localVarPath = `/post/detail/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 저장된 전시 중 페이지네이션을 이용해 값을 가져온다. 이곳의 id는 category id를 의미하며 size의 기본값은 20이다. sort는 기본값이 최신 순이고, ?sort=contents.date,ASC 는 오래된 순이다. 오래된 순의 예시처럼 콤마를 기준으로 [<정렬 컬럼>,<정렬 타입 형식>]으로 쿼리 파라미터를 전달해야 한다.
         * @summary 홈 화면 전시 조회
         * @param {Pageable} pageable 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostPage: async (pageable: Pageable, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pageable' is not null or undefined
            assertParamExists('getPostPage', 'pageable', pageable)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPostPage', 'id', id)
            const localVarPath = `/post/home/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (pageable !== undefined) {
                localVarQueryParameter['pageable'] = pageable;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 월별로 전시 목록 조회
         * @summary 월별 전시 조회
         * @param {number} year yyyy
         * @param {number} month mm
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostsByMonthly: async (year: number, month: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'year' is not null or undefined
            assertParamExists('getPostsByMonthly', 'year', year)
            // verify required parameter 'month' is not null or undefined
            assertParamExists('getPostsByMonthly', 'month', month)
            const localVarPath = `/post/monthly`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (year !== undefined) {
                localVarQueryParameter['year'] = year;
            }

            if (month !== undefined) {
                localVarQueryParameter['month'] = month;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 임시 저장 전시를 영구 저장
         * @summary 전시 발행
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishPost: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('publishPost', 'id', id)
            const localVarPath = `/post/publish/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 전시 수정
         * @summary 전시 수정
         * @param {number} id 
         * @param {UpdateExhibitRequestDto} updateExhibitRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePost: async (id: number, updateExhibitRequestDto: UpdateExhibitRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updatePost', 'id', id)
            // verify required parameter 'updateExhibitRequestDto' is not null or undefined
            assertParamExists('updatePost', 'updateExhibitRequestDto', updateExhibitRequestDto)
            const localVarPath = `/post/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateExhibitRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExhibitControllerApi - functional programming interface
 * @export
 */
export const ExhibitControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExhibitControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 처음 전시 정보 등록시 임시 전시로 생성됨
         * @summary 전시 생성
         * @param {CreateExhibitRequestDto} createExhibitRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPost(createExhibitRequestDto: CreateExhibitRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateExhibitResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPost(createExhibitRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 임시 저장된 전시 목록 조회
         * @summary 임시 저장 전시 조회
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDraftPosts(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostInfoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDraftPosts(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 특정 전시 정보 조회
         * @summary 전시 조회
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPost(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostInfoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPost(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 전시 상세 페이지 내 전시 상세 정보 조회. 카테고리 정보, 대표이미지 정보를 포함함.
         * @summary 전시 상세 정보 조회
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPostInfoWithCategory(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostDetailInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPostInfoWithCategory(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 저장된 전시 중 페이지네이션을 이용해 값을 가져온다. 이곳의 id는 category id를 의미하며 size의 기본값은 20이다. sort는 기본값이 최신 순이고, ?sort=contents.date,ASC 는 오래된 순이다. 오래된 순의 예시처럼 콤마를 기준으로 [<정렬 컬럼>,<정렬 타입 형식>]으로 쿼리 파라미터를 전달해야 한다.
         * @summary 홈 화면 전시 조회
         * @param {Pageable} pageable 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPostPage(pageable: Pageable, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostDetailInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPostPage(pageable, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 월별로 전시 목록 조회
         * @summary 월별 전시 조회
         * @param {number} year yyyy
         * @param {number} month mm
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPostsByMonthly(year: number, month: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CalendarExhibitResponseDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPostsByMonthly(year, month, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 임시 저장 전시를 영구 저장
         * @summary 전시 발행
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishPost(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishPost(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 전시 수정
         * @summary 전시 수정
         * @param {number} id 
         * @param {UpdateExhibitRequestDto} updateExhibitRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePost(id: number, updateExhibitRequestDto: UpdateExhibitRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePost(id, updateExhibitRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExhibitControllerApi - factory interface
 * @export
 */
export const ExhibitControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExhibitControllerApiFp(configuration)
    return {
        /**
         * 처음 전시 정보 등록시 임시 전시로 생성됨
         * @summary 전시 생성
         * @param {CreateExhibitRequestDto} createExhibitRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPost(createExhibitRequestDto: CreateExhibitRequestDto, options?: any): AxiosPromise<CreateExhibitResponseDto> {
            return localVarFp.createPost(createExhibitRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 임시 저장된 전시 목록 조회
         * @summary 임시 저장 전시 조회
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDraftPosts(options?: any): AxiosPromise<PostInfoDto> {
            return localVarFp.getDraftPosts(options).then((request) => request(axios, basePath));
        },
        /**
         * 특정 전시 정보 조회
         * @summary 전시 조회
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPost(id: number, options?: any): AxiosPromise<PostInfoDto> {
            return localVarFp.getPost(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 전시 상세 페이지 내 전시 상세 정보 조회. 카테고리 정보, 대표이미지 정보를 포함함.
         * @summary 전시 상세 정보 조회
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostInfoWithCategory(id: number, options?: any): AxiosPromise<PostDetailInfo> {
            return localVarFp.getPostInfoWithCategory(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 저장된 전시 중 페이지네이션을 이용해 값을 가져온다. 이곳의 id는 category id를 의미하며 size의 기본값은 20이다. sort는 기본값이 최신 순이고, ?sort=contents.date,ASC 는 오래된 순이다. 오래된 순의 예시처럼 콤마를 기준으로 [<정렬 컬럼>,<정렬 타입 형식>]으로 쿼리 파라미터를 전달해야 한다.
         * @summary 홈 화면 전시 조회
         * @param {Pageable} pageable 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostPage(pageable: Pageable, id: number, options?: any): AxiosPromise<PostDetailInfo> {
            return localVarFp.getPostPage(pageable, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 월별로 전시 목록 조회
         * @summary 월별 전시 조회
         * @param {number} year yyyy
         * @param {number} month mm
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostsByMonthly(year: number, month: number, options?: any): AxiosPromise<Array<CalendarExhibitResponseDto>> {
            return localVarFp.getPostsByMonthly(year, month, options).then((request) => request(axios, basePath));
        },
        /**
         * 임시 저장 전시를 영구 저장
         * @summary 전시 발행
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishPost(id: number, options?: any): AxiosPromise<string> {
            return localVarFp.publishPost(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 전시 수정
         * @summary 전시 수정
         * @param {number} id 
         * @param {UpdateExhibitRequestDto} updateExhibitRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePost(id: number, updateExhibitRequestDto: UpdateExhibitRequestDto, options?: any): AxiosPromise<string> {
            return localVarFp.updatePost(id, updateExhibitRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ExhibitControllerApi - object-oriented interface
 * @export
 * @class ExhibitControllerApi
 * @extends {BaseAPI}
 */
export class ExhibitControllerApi extends BaseAPI {
    /**
     * 처음 전시 정보 등록시 임시 전시로 생성됨
     * @summary 전시 생성
     * @param {CreateExhibitRequestDto} createExhibitRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public createPost(createExhibitRequestDto: CreateExhibitRequestDto, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).createPost(createExhibitRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 임시 저장된 전시 목록 조회
     * @summary 임시 저장 전시 조회
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public getDraftPosts(options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).getDraftPosts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 특정 전시 정보 조회
     * @summary 전시 조회
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public getPost(id: number, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).getPost(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 전시 상세 페이지 내 전시 상세 정보 조회. 카테고리 정보, 대표이미지 정보를 포함함.
     * @summary 전시 상세 정보 조회
     * @param {number} id 전시 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public getPostInfoWithCategory(id: number, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).getPostInfoWithCategory(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 저장된 전시 중 페이지네이션을 이용해 값을 가져온다. 이곳의 id는 category id를 의미하며 size의 기본값은 20이다. sort는 기본값이 최신 순이고, ?sort=contents.date,ASC 는 오래된 순이다. 오래된 순의 예시처럼 콤마를 기준으로 [<정렬 컬럼>,<정렬 타입 형식>]으로 쿼리 파라미터를 전달해야 한다.
     * @summary 홈 화면 전시 조회
     * @param {Pageable} pageable 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public getPostPage(pageable: Pageable, id: number, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).getPostPage(pageable, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 월별로 전시 목록 조회
     * @summary 월별 전시 조회
     * @param {number} year yyyy
     * @param {number} month mm
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public getPostsByMonthly(year: number, month: number, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).getPostsByMonthly(year, month, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 임시 저장 전시를 영구 저장
     * @summary 전시 발행
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public publishPost(id: number, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).publishPost(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 전시 수정
     * @summary 전시 수정
     * @param {number} id 
     * @param {UpdateExhibitRequestDto} updateExhibitRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExhibitControllerApi
     */
    public updatePost(id: number, updateExhibitRequestDto: UpdateExhibitRequestDto, options?: AxiosRequestConfig) {
        return ExhibitControllerApiFp(this.configuration).updatePost(id, updateExhibitRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}


