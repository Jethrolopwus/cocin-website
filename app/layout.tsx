import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COCIN — Church of Christ in Nations",
  description:
    "Growing disciples. Changing nations. A Christ-centered church committed to raising disciples with over 3,500 congregations and 120+ years of Gospel impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
