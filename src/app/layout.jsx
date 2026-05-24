import { Roboto } from "next/font/google";
import localFont from "next/font/local";

import faviconIcon from "./public/favicon.jpeg";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AugAi",
  description: "AugAi website",
  icons: {
    icon: [
      { url: "/favicon.jpeg", type: "image/jpeg" },
      { url: faviconIcon.src, type: "image/jpeg" },
    ],
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

