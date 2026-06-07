import "./globals.css";

export const metadata = {
  title: "SAAHMATHWORKS",
  description: "Architecting Autonomous Intelligence for Enterprise Scale"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
