import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qased - رحلة الحج",
  description: "تطبيق قاصد لمتابعة رحلة الحج",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#ECE6D9]">
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer
            dir="ltr"
            className="px-5 py-6 text-center text-[14px] font-semibold text-neutral-600"
          >
            Made with <span className="text-[#1F5D3B]">♡</span> by Sara Fawaz
            Alsubaie
          </footer>
        </div>
      </body>
    </html>
  );
}
