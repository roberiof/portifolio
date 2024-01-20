import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@components/Header/Header";

import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "light"
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium"
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold"
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "black"
    }
  ]
});

export const metadata: Metadata = {
  title: "Robério Filho - Frontend engineer",
  description:
    "A frontend engineer that generates value through precised-coded solutions"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.className + " bg-backgroundExternal"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
