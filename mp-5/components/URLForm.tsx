"use client";

import {useState} from "react";
import {CreateStatus, URLs} from "@/types";
import createNewURL from "@/lib/createShortenedURL";

import {useEffect} from "react";


export default function NewPostForm({ append }: { append: (post: URLs) => void }) {
    const [url, setURL] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState<string | null>(null);


    const [domain, setDomain] = useState<string>("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            setDomain(window.location.origin);
        }
    }, []);


    return (
        <div className="flex items-center justify-center mt-10">
            <form
                className="w-200 p-6 bg-blue-400 rounded-md shadow-md"
                onSubmit={async (event) => {
                    event.preventDefault();

                    try {
                        // const domain = window.location.origin;
                        console.log(domain);
                        const newURL = await createNewURL(url, alias, domain);

                        if (newURL === CreateStatus.ALIAS_EXISTS) {
                            setError("Alias is already taken. Please try another one.");
                        }
                        else if (newURL === CreateStatus.EMPTY_URL) {
                            setError("Empty URL. Please enter a valid URL.");
                        }
                        else if (newURL === CreateStatus.INVALID_URL) {
                            setError("Invalid URL. Please try another one.");
                        }
                        else if (newURL === CreateStatus.EMPTY_ALIAS) {
                            setError("Empty Alias. Please enter an Alias.");
                        }
                        else {
                            setError(null);
                            append(newURL);
                        }
                    } catch (err) {
                        console.error("Error creating URL: ", err);
                        setError("An error occurred while creating the shortened URL.");
                    }
                }}
            >

                {/* URL input field */}
                <h1 className="font-mono text-3xl font-semibold text-white mb-1">Shorten a URL</h1>
                <p className="font-mono text-white mb-3">Enter a long URL to create a shorter, shareable link</p>

                <div className="mb-4">
                    <label htmlFor="url" className="block text-white font-semibold mb-2 font-mono text-2xl" >URL</label>
                    <input
                        type="text"
                        id="url"
                        className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 w-full p-2.5 font-mono outline-none"
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                        placeholder="Enter a URL"
                    />
                </div>

                {/* Alias input field */}
                <div className="mb-6">
                    <label htmlFor="alias" className="block text-white font-semibold mb-2 font-mono text-2xl">Custom Alias</label>
                    <div className="flex items-center w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 font-mono">
                        <span className="px-3 text-grey-900 font-mono">
                            {/*{window.location.origin}/*/}
                            {domain}/
                        </span>
                        <input
                            id="alias"
                            className="flex-1 text-gray-900 p-2.5 outline-none"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            placeholder="Enter an alias"
                        />
                    </div>
                </div>

                {/* Error message */}
                {error && <div className="text-red-700 mb-6 font-mono flex justify-center">{error}</div>}

                {/* Submit button */}
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="w-100 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 font-mono cursor-pointer"
                    >
                        Create Shortened URL
                    </button>
                </div>
            </form>
        </div>
    );
}
