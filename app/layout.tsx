import { AuthContextProvider } from "@/components/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import NavMenu from "@/components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Co-Write Docs - Collaborative Writing Tool",
  description: "Co-Write Docs is a collaborative writing tool for teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <NavMenu />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
