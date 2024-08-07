import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Id Booking App",
  description: "No more long queues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="fixed w-full bg-white h-20 border-b flex justify-center items-center" >
            <a href="/" className="text-slate-500 font-semibold text-lg hover:text-purple-400" >ID REGISTRATION BOOKING APP</a>
        </div>

        <div className="pt-20" >
          {children}
        </div>
      </body>
    </html>
  );
}
