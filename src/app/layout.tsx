import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./_components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "RENACER negro",
  description: "Consejo comunitario",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} `}>
        <TRPCReactProvider headers={headers()}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Navbar/>
        {children}
        </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
