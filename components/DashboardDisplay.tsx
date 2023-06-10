"use client";
import { useState } from "react";
import { useAuthContext } from "@/components/AuthContext";
import { SignOutButton } from "./Buttons";

type Props = {
  user: any;
  userDocs: any;
};

export default function DashboardDisplay({ user, userDocs }: Props) {
  return (
    <main>
      <h1>Welcome, {user.displayName}. Your Docs</h1>
      <div className="w-full flex items-center flex-wrap">
        {userDocs?.map((doc: any) => (
          <div className="min-h-32 min-w-24 border-2 border-gray-600 hover:shadow-sm">
            {doc.title}
          </div>
        ))}
      </div>
      <SignOutButton />
    </main>
  );
}
