import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark Todo App",
  description: "A simple todo app with dark theme",
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
