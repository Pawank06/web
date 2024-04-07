import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Provider>
        
          
          <Navbar/>
          <main className="mt-40 mb-20">
          <div className="dark:bg-page-gradient background-gradient fixed inset-0 -z-50 max-h-screen" />
            {children}
          </main>
          
          <Footer/>
        </Provider>
        
      </body>
    </html>
  );
}
