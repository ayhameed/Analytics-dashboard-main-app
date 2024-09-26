import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/app/header";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Web Insights",
  description: "Web Insights is a web application that provides insights into your website's performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
