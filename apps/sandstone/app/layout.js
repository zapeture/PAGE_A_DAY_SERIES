import "@/styles/global.scss";

export const metadata = {
  title: "Sandstone",
  description: "A page a day sandstone page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" async></script>
    </html>
  );
}
