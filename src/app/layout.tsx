import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ToasterwithTheme from "@/components/ui/ToasterwithTheme";
import { unstable_ViewTransition as ViewTransition } from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PaperCraft AI - AI-Powered Research Document Generator",
  description: "Generate comprehensive research documents using AI instantly with PaperCraft AI✨🔖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <ViewTransition>{children}</ViewTransition>
          <ToasterwithTheme />
        </ThemeProvider>
      </body>
    </html>
  );
}
