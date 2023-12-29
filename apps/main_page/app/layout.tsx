import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import Script from "next/script";

const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Page A Day - Fortune Zviregei",
  description: " 'A Page a Day' is more than just a repository; it's a diary of a developer's creative journey through the world of web design. Each day brings a new page, a new challenge, and a new opportunity to innovate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <head>
        <link rel="apple-icon" sizes="180x180" href="/apple-icon.png" />
      </head>
      <body className={`${russo.className} container-fluid`}>
        <main className='min-vh-100'>{children}</main>
        <footer className='footer d-flex py-4'>
          <span className='d-block mx-auto fs-7 opacity-50'>Copyright@Fortune Zviregei {currentYear}</span>
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" async />
      </body>
    </html>
  );
}
