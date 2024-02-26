import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swan Lake",
  description: "A Digital Market Developed by Nabin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={['relative h-full', inter.className].join(' ')}>
        <Providers>
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1 overflow-hidden">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}