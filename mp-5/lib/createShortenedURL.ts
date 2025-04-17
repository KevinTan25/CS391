"use server"

import getCollection, {POSTS_COLLECTION} from "@/db";
import {CreateStatus, URLs} from "@/types";

export default async function createNewURL(
    longURL: string,
    userAlias: string,
    domain: string,
): Promise<URLs | CreateStatus> {

    if (longURL === "") {
        return CreateStatus.EMPTY_URL;
    }

    if (userAlias === "") {
        return CreateStatus.EMPTY_ALIAS;
    }

    const postCollection = await getCollection(POSTS_COLLECTION);

    const existingURL = await postCollection.findOne({ alias: userAlias });

    if (existingURL) {
        return CreateStatus.ALIAS_EXISTS;
    }


    // URL Validation
    console.log(`Trying to fetch the longURL: ${longURL}`);
    const result = await fetch(longURL).catch((err) => {
        console.log(`Invalid URL: ${err}`);
        return CreateStatus.INVALID_URL;
    });

    if (result === CreateStatus.INVALID_URL) {
        console.log(`Invalid URL: ${longURL}`);
        return CreateStatus.INVALID_URL;
    }


    const shortenedURL = domain + `/${userAlias}`;

    const p = {
        id: userAlias,
        alias: userAlias,
        originalURL: longURL,
        shortenedURL: shortenedURL,
    };

    const res = await postCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...p, alias: res.insertedId.toHexString() };
}