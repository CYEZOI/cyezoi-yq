import { NextApiResponse } from "next";

export type APIData = {
    params?: object;
};
export type APIRequest = {
    params: object;
};
export type APIResponse = {
    success: boolean;
    message: string;
    result: object;
};

export class API {
    static async request_url(method: string, url: string, data: Record<string, string>): Promise<object> {
        const dataParams: URLSearchParams = new URLSearchParams(data);
        if (dataParams.toString() !== "")
            url += "?" + dataParams.toString();
        return fetch("/api/" + url, {
            method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((data) => {
                const response: APIResponse = data;
                return response.result;
            });
    }
    static async request_body(method: string, url: string, data: APIData): Promise<object> {
        const request: APIRequest = {
            params: data.params || {},
        };
        return fetch("/api/" + url, {
            method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((response) => response.json())
            .then((data) => {
                const response: APIResponse = data;
                return response.result;
            });
    }
    static async Get(url: string, data: Record<string, string> = {}): Promise<object> { return API.request_url("GET", url, data); }
    static async Post(url: string, data: APIData = {}): Promise<object> { return API.request_body("POST", url, data); }
    static async Put(url: string, data: APIData = {}): Promise<object> { return API.request_body("PUT", url, data); }
    static async Delete(url: string, data: Record<string, string> = {}): Promise<object> { return API.request_url("DELETE", url, data); }
    static success(res: NextApiResponse<APIResponse>, message: string = "", result: object = {}): void {
        res.status(200).json({
            success: true,
            message,
            result,
        });
        res.end();
    }
    static failure(res: NextApiResponse<APIResponse>, message: string = ""): void {
        res.status(200).json({
            success: false,
            message,
            result: {},
        });
        res.end();
    }
};
