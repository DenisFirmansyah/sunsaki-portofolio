import type { Metadata } from "next";
import { Rowdies } from "next/font/google";
import "./globals.css";

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-rowdies',
})

export const metadata: Metadata = {
  title: "SunSaKi",
  description: "SunSaKi's Portopholio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rowdies.variable}`}>
      <body
        className="rowdies"
      >
        {children}
      </body>
    </html>
  );
}
