import Doc from "@/components/Doc";
import { firestore } from "@/lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export default function DocumentPage() {
  // this page will display a single document
  return (
    <div className="p-12 bg-gray-100 flex justify-center items-center">
      <Doc />
    </div>
  );
}
