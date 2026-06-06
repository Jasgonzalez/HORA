import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hora - See Where Your Life Goes",
  description:
    "Hora automatically tracks where your time goes and turns it into AI-powered life analytics.",
  metadataBase: new URL("https://hora.app"),
  openGraph: {
    title: "Hora - See Where Your Life Goes",
    description:
      "Track your time automatically. Discover where your hours are spent. Get AI-powered weekly reports about your life.",
    siteName: "Hora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hora - See Where Your Life Goes",
    description:
      "Spotify Wrapped for your life. Fitbit for your time. AI-powered life analytics.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050008",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
