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
  return (
    <html lang="en">
      <body className={russo.className}>{children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
