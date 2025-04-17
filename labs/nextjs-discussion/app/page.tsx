import PostPreview from "@/components/post-preview";
import PostsDisplay from "@/components/PostsDisplay";
import getAllPosts from "@/lib/getAllPosts";

// export default function Home() {
//   return (
//       <div className="flex flex-col items-center bg-blue-200 p-4">
//         <PostPreview
//           post={{
//             id: "id",
//             title: "demo post",
//             content: "Some content",
//             upvotes: 20,
//             downvotes: 4,
//           }}
//         />
//       </div>
//   );
// }

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <div className="flex flex-col items-center bg-blue-200 p-4">
            <PostsDisplay inputPosts={posts} />
        </div>
    );
}
