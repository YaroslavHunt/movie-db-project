import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
};

type PropType = {
  children: React.ReactNode;
}

export default function RootLayout({children}: Readonly<PropType>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HeaderComponent/>
      {children}
      <FooterComponent/>
      </body>
    </html>
  );
}
