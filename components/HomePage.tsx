"use client";
import { useAuthContext } from "./AuthContext";
import { SignInButton } from "./Buttons";
import DashboardDisplay from "./DashboardDisplay";

export default function HomePage() {
  const { user } = useAuthContext();

  return (
    <main>
      {user ? (
        <DashboardDisplay user={user} userDocs={null} />
      ) : (
        <div>
          <SignInButton />
        </div>
      )}
    </main>
  );
}
