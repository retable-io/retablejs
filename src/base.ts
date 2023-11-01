import fetch from 'isomorphic-unfetch'
import * as RetableTypes from './base.types';

export abstract class Base {

    public static API_VERSION = 'v1';
    public static DEFAULT_API_URL = `https://api.retable.io/${Base.API_VERSION}/public`;
    public static Error: RetableTypes.RetableError;

    private config: RetableTypes.Config;

    constructor(config: RetableTypes.Config) {
        if (!config || !config['apiKey']) {
            throw new Error('Please provide a Retable API key');
        }

        this.config = {
            apiKey: config.apiKey,
            apiUrl: config.apiUrl || Base.DEFAULT_API_URL,
        };
    }

    protected async invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.config['apiUrl']}${endpoint}`

        const headers = {
            "Content-Type": "application/json",
            "apiKey": this.config['apiKey']
        }

        const config = {
            ...options,
            headers
        }

        const response = await fetch(url, config);
        if (response.ok) {
            return response.json();
        } else {
            throw new RetableTypes.RetableError(response.statusText, response.status);
        }
    }
} 