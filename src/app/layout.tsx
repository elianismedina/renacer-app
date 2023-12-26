import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cn } from "../../libs/utils";

export const fontSans = FontSans({
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
      <body className={cn(`font-sans ${fontSans.variable} `)}>
        <TRPCReactProvider headers={headers()}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
