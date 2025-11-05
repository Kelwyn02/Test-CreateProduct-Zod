import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Teste create-product",
  description: "Criar produto teste",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${inter} antialiased`}>
        {children}
      </body>
    </html>
  );
}
