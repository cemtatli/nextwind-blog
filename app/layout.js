"use client";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body>
          <div className="wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
