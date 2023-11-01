export interface Config {
    apiKey: string;
    apiUrl?: string;
}

export class RetableError extends Error {
    constructor(
        public detail: string,
        public status: number
    ) {
        super(`${detail} - ${status}`);
    }
}