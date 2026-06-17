import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HandymanProject | Contractor Reviews for Apartment Owners",
  description:
    "Find reliable renovation professionals by reading local contractor reviews, pricing context, and apartment owner experiences.",
  openGraph: {
    title: "HandymanProject | Contractor Reviews for Apartment Owners",
    description:
      "Compare electricians, plumbers, painters, tile installers, and renovation contractors before you hire.",
    type: "website",
  },
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
