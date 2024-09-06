import { NextApiResponse } from "next";
import { pipeInstance } from "./pipe";

export type APIData = {
    params?: any;
};
export type APIRequest = {
    params: any;
    lang: string;
};
export type APIResponse = {
    success: boolean;
    message: string;
    result: any;
};
export type APICallbacks = {
    success?: (data: any) => void;
    failure?: (data: any) => void;
    error?: (data: any) => void;
};

export class API {
    private static async request_url(method: string, url: string, data: Record<string, string>, callbacks: APICallbacks): Promise<void> {
        const dataParams: URLSearchParams = new URLSearchParams(data);
        dataParams.append("lang", localStorage.getItem("language") || "en");
        url += (url.includes("?") ? "&" : "?") + dataParams.toString();
        return fetch("/api/" + url, {
            method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
            .then((data) => {
                const response: APIResponse = data;
                if (response.success) {
                    pipeInstance.emit("newAlert", { message: response.message, variant: "success" });
                    callbacks.success && callbacks.success(response.result);
                } else {
                    pipeInstance.emit("newAlert", { message: response.message, variant: "danger" });
                    callbacks.failure && callbacks.failure(response.result);
                }
                return response.result;
            })
            .catch((err) => {
                pipeInstance.emit("newAlert", { message: "API Error", variant: "danger" });
                callbacks.error && callbacks.error(err);
            });
    }
    private static async request_body(method: string, url: string, data: APIData, callbacks: APICallbacks): Promise<void> {
        const request: APIRequest = {
            params: data.params || {},
            lang: localStorage.getItem("language") || "en",
        };
        fetch("/api/" + url, {
            method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((response) => response.json())
            .then((data) => {
                const response: APIResponse = data;
                if (response.success) {
                    pipeInstance.emit("newAlert", { message: response.message, variant: "success" });
                    callbacks.success && callbacks.success(response.result);
                } else {
                    pipeInstance.emit("newAlert", { message: response.message, variant: "danger" });
                    callbacks.failure && callbacks.failure(response.result);
                }
            })
            .catch((err) => {
                pipeInstance.emit("newAlert", { message: "API Error", variant: "danger" });
                callbacks.error && callbacks.error(err);
            });
    }
    static async Get(url: string, data: Record<string, string> = {}, callbacks: APICallbacks = {}): Promise<void> { return API.request_url("GET", url, data, callbacks); }
    static async Post(url: string, data: APIData = {}, callbacks: APICallbacks = {}): Promise<void> { return API.request_body("POST", url, data, callbacks); }
    static async Put(url: string, data: APIData = {}, callbacks: APICallbacks = {}): Promise<void> { return API.request_body("PUT", url, data, callbacks); }
    static async Delete(url: string, data: Record<string, string> = {}, callbacks: APICallbacks = {}): Promise<void> { return API.request_url("DELETE", url, data, callbacks); }
    static async SWRGet(url: string, data: Record<string, string> = {}): Promise<any> {
        return new Promise((resolve, reject) => {
            API.Get(url, data, {
                success: (data) => resolve(data),
                failure: (data) => reject(data),
                error: (data) => reject(data),
            });
        });
    }
    static success(res: NextApiResponse<APIResponse>, message: string = "", result: object = {}): void {
        if (res.writableEnded) return;
        res.status(200).json({
            success: true,
            message,
            result,
        });
        res.end();
    }
    static failure(res: NextApiResponse<APIResponse>, message: string = ""): void {
        if (res.writableEnded) return;
        res.status(200).json({
            success: false,
            message,
            result: {},
        });
        res.end();
    }
};
