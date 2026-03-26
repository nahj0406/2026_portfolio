import type { Metadata, Viewport } from "next";
import { poppins, pretendard, paperlogy } from "./fonts";
import "./globals.scss";
import "./styles.scss";
import Providers from "./provider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "nahj 2026 portfolio",
  description: "",
  openGraph: {
    url: "https://puffutoy.com",
    type: "website",
    title: "nahj 2026 portfolio",
    description: "",
    images: "",
  },
  twitter: {
    card: "summary",
    title: "nahj 2026 portfolio",
    description: "",
    images: "",
  },
  keywords:
    "",
  icons: "/favicon.ico",
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  userScalable: false,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn("font-sans", geist.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={`${pretendard.className} ${poppins.variable} ${paperlogy.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
