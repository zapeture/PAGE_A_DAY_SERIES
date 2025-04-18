"use client";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer d-flex py-4">
      <span className="d-block mx-auto fs-7 opacity-50 text-secondary">
        Copyright @{" "}
        <a
          href="https://fortunezviregei.com"
          target="__blank"
          className="link-secondary"
        >
          Fortune Zviregei
        </a>{" "}
        {currentYear}
      </span>
    </footer>
  );
}
