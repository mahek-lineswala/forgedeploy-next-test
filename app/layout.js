import "./globals.css";

export const metadata = {
  title: "ForgeDeploy Next.js Test",
  description: "Testing Next.js SSR on ForgeDeploy"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}