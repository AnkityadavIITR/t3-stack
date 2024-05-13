import { SignedOut,SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex justify-between px-10 py-5">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
