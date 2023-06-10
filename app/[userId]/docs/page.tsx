import { auth, firestore } from "@/lib/firebase";

// create async function to get user data from firestore
export async function userData(userId: string) {
  // get user data from firestore
  const user = await firestore.collection("users").doc(userId).get();

  return user;
}

export default async function DocsPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await userData(params.userId);
  const username = user.data()?.email;
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex items-center flex-wrap">
        <h1>{user && `hello ${username}, here are your docs`}</h1>
        {/* {userDocs?.map((doc: any) => (
    <div className="min-h-32 min-w-24 border-2 border-gray-600 hover:shadow-sm">
      {doc.title}
    </div>
  ))} */}
      </div>
    </div>
  );
}
