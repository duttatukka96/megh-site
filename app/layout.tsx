import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Megh.",
  description: "A little corner of the internet, just because you exist.",
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
