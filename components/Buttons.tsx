"use client";
import { auth, googleAuthProvider } from "@/lib/firebase";

// Sign in button
export const SignInButton = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button
      className="p-4 rounded-lg flex justify-center items-center font-semibold gap-2 text-xl text-black bg-white shadow-sm"
      onClick={signInWithGoogle}
    >
      <img src={"/google.png"} height="30" width="30" /> Sign in with Google
    </button>
  );
};

// Sign out button
export const SignOutButton = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};
