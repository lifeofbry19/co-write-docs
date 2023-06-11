import { auth, firestore, postToJSON } from "@/lib/firebase";
import { CreateDocButton } from "@/components/Buttons";

// create async function to get user data from firestore
export async function getUserData(userId: string) {
  // get user data from firestore
  const user = firestore.collection("users").doc(userId).get();

  return user;
}

export async function docsData(userId: string) {
  // get docs under the user
  const docsQuery = firestore.collectionGroup("docs");

  const docs = (await docsQuery.get()).docs.map(postToJSON);

  return docs;
}

export default async function DocsPage({
  params,
}: {
  params: { userId: string };
}) {
  const docs = await docsData(params.userId);
  const user = (await getUserData(params.userId)).data();
  return (
    <div className="w-full flex flex-col gap-16 justify-center items-center">
      <h1>
        {user &&
          `hello ${user?.email ? user.email : "user"} , here are your docs`}
      </h1>
      <div className="w-full max-w-7xl flex items-start gap-5 flex-wrap">
        <div>
          <CreateDocButton />
        </div>
        {docs?.map((doc: any) => (
          <div className="border-2 rounded-lg p-4 border-gray-600 hover:shadow-sm">
            {doc.title}
          </div>
        ))}
      </div>
    </div>
  );
}
