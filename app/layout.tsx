import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DotBackground } from "@/components/dot-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William McGonagle",
  description:
    "This is Will's portfolio website, which has projects, contact information, and information about me: William McGonagle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={"bg-white"}>
        <DotBackground>
          {children}
          <Footer />
        </DotBackground>
        <Navbar
          pages={[
            { name: "About", url: "" },
            { name: "Projects", url: "projects" },
            { name: "Resume", url: "resume.pdf" },
            { name: "Contact", url: "contact" },
          ]}
        />
      </body>
    </html>
  );
}
