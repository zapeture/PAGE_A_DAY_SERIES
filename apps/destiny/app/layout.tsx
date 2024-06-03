import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "@/app/globals.scss";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
 });

export const metadata: Metadata = {
  title: "Destiny App",
  description: "A Destiny app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-100 vh-100">{children}</div>
      </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous" async></script>
    </html>
  );
}
