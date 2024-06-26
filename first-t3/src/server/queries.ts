import "server-only"
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getPosts() {
    const user=auth();
    console.log("user",user);
    
    if(!user.userId)throw new Error("unauthorized")
    const posts = await db.query.posts.findMany({
        where:(model,{eq})=>eq(model.userId,user.userId),
        orderBy:(model,{desc})=>desc(model.id)
      });
      return posts;
}