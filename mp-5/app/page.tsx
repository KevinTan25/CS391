"use client";
import NewPostForm from "@/components/URLForm";
import { URLs } from "@/types";
import { useState } from "react";

export default function Home() {
    const [urls, setUrls] = useState<URLs[]>([]);

    const append = (newURL: URLs) => {
        setUrls((prevURLs) => [...prevURLs, newURL]);
    };

    return (
        <div className="flex flex-col items-center bg-cyan-100 py-10 gap-5 h-screen">
            <h1 className="font-mono text-grey-900 font-bold text-4xl mt-20">URL Shortener</h1>
            <p className="font-mono text-grey-900">Shorten your long URLs. Coded in Next.js.</p>

            <NewPostForm append={append} /> {/* Pass append function to NewPostForm */}
            <div className="flex flex-col items-center w-full bg-cyan-100">
                {urls.map((url, index) => (
                    <div key={index} className="rounded-md p-4 mt-4 w-200 bg-blue-400 shadow-sm font-mono text-white mb-6">
                        <p><strong>Original URL:</strong> {url.originalURL}</p>
                        <p><strong>Shortened URL: </strong>
                            <a href={url.shortenedURL} target="_blank" className="hover:text-black">
                                {url.shortenedURL}
                            </a>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(url.shortenedURL);
                                }}
                                className="text-black hover:underline font-mono ml-10 cursor-pointer"
                            >Copy</button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}