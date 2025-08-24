import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Downvelope – Social Media Video Downloader",
  description:
    "Downvelope by Zeeshan – Download videos easily from Facebook, Instagram, and YouTube. Simple, fast, and made for friends who ask daily 😉",
  keywords: [
    "video downloader",
    "facebook video downloader",
    "instagram video downloader",
    "youtube video downloader",
    "downvelope",
    "zeeshan",
  ],
  authors: [{ name: "Zeeshan", url: "https://downvelope.vercel.app" }],
  metadataBase: new URL("https://downvelope.vercel.app"),

  openGraph: {
    title: "Downvelope – Social Media Video Downloader",
    description:
      "Download videos from Facebook, Instagram, and YouTube with Downvelope. Built by Zeeshan for friends who always say: 'Bhai, hume video download kr k do!' 😄",
    url: "https://downvelope.vercel.app/",
    siteName: "Downvelope",
    images: [
      {
        url: "https://downvelope.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Downvelope – Social Media Video Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@your_twitter", // optional
    creator: "@your_twitter", // optional
    title: "Downvelope – Social Media Video Downloader",
    description:
      "Fast & easy video downloads from Facebook, Instagram, and YouTube. Built by Zeeshan ✨",
    images: ["https://downvelope.vercel.app/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/download.svg", sizes: "any" },
      { url: "/download.svg", type: "any" },
    ],
    apple: [
      { url: "/download.svg", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  manifest: "/manifest.json",
  themeColor: "#4f46e5", // matches indigo gradient
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
