import Link from "next/link";
import {db} from "./../server/db/index"

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export const dynamic="force-dynamic"

export default async function Home() {
  const posts = await db.query.posts.findMany();
  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {
        posts?.map((post)=>{
          return <h1 key={post.id}>{post.name}</h1>
        })
      }
    </main>
  );
}


