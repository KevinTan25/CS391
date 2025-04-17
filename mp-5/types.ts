export type URLs = {
    id: string;
    alias: string;
    originalURL: string;
    shortenedURL: string;
};

export enum CreateStatus  {
    ALIAS_EXISTS,
    INVALID_URL,
    EMPTY_ALIAS,
    EMPTY_URL,
}