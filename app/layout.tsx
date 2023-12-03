import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prathu Gupta",
  description: "Welcome to my digital world! I'm a passionate 14-year-old software developer and aspiring tech entrepreneur hailing from India. Join me on my journey of innovation, problem-solving, and AI aspirations. Explore my projects, insights, and the future of technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use the Head component to add meta tags to the <head> section */}
      <Head>
        <meta
          name="google-site-verification"
          content="hFC5YctWHfazijmCCHtBHoAl8NnwUlKDOWBH1QZgW_8"
        />
      </Head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
