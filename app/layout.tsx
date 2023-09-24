import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { UserContextProvider } from "@/contexts/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleeperscan",
  description: "A tool for fantasy football leagues using sleeper.com",
};
/////////////////////////////////////////////////////////////////////
const USERNAME = "ramchips";
const YEAR = 2023;

/**
 * how to handle dynamic username and year with nextjs?
 *
 */

// async function getUserData() {
//   const res = await fetch(`https://api.sleeper.app/v1/user/${USERNAME}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch user data");
//   }
//   return res.json();
// }

// async function getLeagueData(userId: string) {
//   const res = await fetch(
//     `https://api.sleeper.app/v1/user/${userId}/leagues/nfl/${YEAR}  `
//   );
//   if (!res.ok) throw new Error("Failed to fetch user's league data");
//   return res.json();
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getUserData();
  // const { user_id, name, display_name, avatar } = user;
  // const leagues = await getLeagueData(user_id);
  // console.log("LEAGUES", leagues);
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <Header />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
