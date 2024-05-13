"use client"
import { useRouter } from "next/navigation";
import { SignedOut,SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export default function Navbar() {
  const router=useRouter();
  return (
    <div className="flex justify-between px-10 py-5">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>{router.refresh()}}/>
        </SignedIn>
      </div>
    </div>
  );
}
