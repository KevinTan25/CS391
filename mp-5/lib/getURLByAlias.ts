"use server"

import getCollection, { POSTS_COLLECTION } from "@/db";
import { URLs } from "@/types";

export default async function getURLByAlias(alias : string): Promise<URLs | null> {
    const collection = await getCollection(POSTS_COLLECTION);
    const data = await collection.findOne({ alias: alias });

    if (data === null) {
        return null;
    }

    const newURL = {
        id: data.alias,
        alias: data.alias,
        originalURL: data.originalURL,
        shortenedURL: data.shortenedURL,
    }

    return newURL;
}
