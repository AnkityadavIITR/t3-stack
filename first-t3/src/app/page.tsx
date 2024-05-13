import Link from "next/link";
import {db} from "./../server/db/index"
import Image from "next/image";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export const dynamic="force-dynamic"

export default async function Home() {
  const posts = await db.query.posts.findMany({
    orderBy:(model,{desc})=>desc(model.id)
  });
  console.log(posts)

  return (
    <main className="flex min-h-screen flex-wrap gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {
        posts?.map((post)=>{
          return <div key={post.id}>
            <img src={post.url} alt="post" className="w-[200px] h-[200px]"></img>
            <p>{post.name}</p>
          </div>
        })
      }
    </main>
  );
}


