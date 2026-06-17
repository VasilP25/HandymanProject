import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handyman Project",
  description: "Marketplace for handyman advertisements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
