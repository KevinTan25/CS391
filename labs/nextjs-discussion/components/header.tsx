import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4">Next.js Introduction</h2>
            <nav className="p-2 m-4">
                {/* We still have to follow nav, ul, li (this discussion doesn't have it )*/}
                {/* Only required attribute for Link is only href */}
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/about" className={linkStyling}>
                    About
                </Link>
            </nav>
        </header>
    );
}