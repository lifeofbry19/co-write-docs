"use client";
import { auth, googleAuthProvider, firestore } from "@/lib/firebase";

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
  return (
    <button
      className="p-4 rounded-lg flex justify-center items-center font-semibold gap-2 text-xl text-black bg-white shadow-sm"
      onClick={() => auth.signOut()}
    >
      Sign Out
    </button>
  );
};

export const CreateDocButton = () => {
  return (
    <button
      onClick={() => {
        // create new doc with firestore
        firestore
          .collection("users")
          .doc(auth.currentUser?.uid)
          .collection("docs")
          .add({
            title: "new untitled document",
            content: "",
          });
      }}
      className="bg-white border-2 flex justify-center items-center rounded-lg p-4 border-gray-600 hover:shadow-sm"
    >
      <span className="text-6xl text-blue-600">+</span>Create a new doc
    </button>
  );
};
