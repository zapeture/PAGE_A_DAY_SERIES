import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";

const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Page A Day | Fortune Zviregei",
  description:
    " 'A Page a Day' is more than just a repository; it's a diary of a developer's creative journey through the world of web design. Each day brings a new page, a new challenge, and a new opportunity to innovate.",
  authors: [{ name: "Fortune Zviregei", url: "https://fortunezviregei.com" }],
  creator: "Fortune Zviregei",
  applicationName: "A Page A Day",
  keywords: [
    "A Page A Day",
    "Fortune Zviregei",
    "Web Design",
    "Creative Coding",
    "Web Development",
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: [`fortunechainz@gmail.com`, `${process.env.NEXT_PUBLIC_SITE_URL}`],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "A Page A Day | Fortune Zviregei",
    description:
      " 'A Page a Day' is more than just a repository; it's a diary of a developer's creative journey through the world of web design. Each day brings a new page, a new challenge, and a new opportunity to innovate.",
  },
  openGraph: {
    title: "A Page A Day | Fortune Zviregei",
    description:
      " 'A Page a Day' is more than just a repository; it's a diary of a developer's creative journey through the world of web design. Each day brings a new page, a new challenge, and a new opportunity to innovate.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${russo.className} container-fluid`}>
        <main className="min-vh-100">{children}</main>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
          async
        />
      </body>
    </html>
  );
}
