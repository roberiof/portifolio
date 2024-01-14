import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal"
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
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
