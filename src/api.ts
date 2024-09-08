import { NextApiResponse } from "next";
import { pipeInstance } from "./pipe";
import { t } from "i18next";

export type APIData = {
    params?: any;
};
export type APIRequest = {
    params: any;
    lang: string;
    token: string;
};
export type APIResponse = {
    success: boolean;
    message: string;
    result: any;
};
export type APIOptions = {
    success?: (data: any) => void;
    failure?: (data: any) => void;
    error?: (data: any) => void;
    showSuccess?: boolean;
    hideFailure?: boolean;
    hideError?: boolean;
};

export class API {
    private static async request_url(method: string, url: string, data: Record<string, string>, options: APIOptions): Promise<void> {
        const dataParams: URLSearchParams = new URLSearchParams(data);
        dataParams.append("lang", localStorage.getItem("language") || "en");
        dataParams.append("token", localStorage.getItem("token") || "");
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
                    options.showSuccess && pipeInstance.emit("newAlert", { message: response.message, variant: "success" });
                    options.success && options.success(response.result);
                } else {
                    !options.hideFailure && pipeInstance.emit("newAlert", { message: response.message, variant: "danger" });
                    options.failure && options.failure(response.result);
                }
                return response.result;
            })
            .catch((err) => {
                !options.hideError && pipeInstance.emit("newAlert", { message: t("networkError"), variant: "danger" });
                options.error && options.error(err);
            });
    }
    private static async request_body(method: string, url: string, data: APIData, options: APIOptions): Promise<void> {
        const request: APIRequest = {
            params: data.params || {},
            lang: localStorage.getItem("language") || "en",
            token: localStorage.getItem("token") || "",
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
                    options.showSuccess && pipeInstance.emit("newAlert", { message: response.message, variant: "success" });
                    options.success && options.success(response.result);
                } else {
                    !options.hideFailure && pipeInstance.emit("newAlert", { message: response.message, variant: "danger" });
                    options.failure && options.failure(response.result);
                }
            })
            .catch((err) => {
                !options.hideError && pipeInstance.emit("newAlert", { message: t("networkError"), variant: "danger" });
                options.error && options.error(err);
            });
    }
    static async Get(url: string, data: Record<string, string> = {}, options: APIOptions = {}): Promise<void> { return API.request_url("GET", url, data, options); }
    static async Post(url: string, data: APIData = {}, options: APIOptions = {}): Promise<void> { return API.request_body("POST", url, data, options); }
    static async Put(url: string, data: APIData = {}, options: APIOptions = {}): Promise<void> { return API.request_body("PUT", url, data, options); }
    static async Delete(url: string, data: Record<string, string> = {}, options: APIOptions = {}): Promise<void> { return API.request_url("DELETE", url, data, options); }
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
