import "./globals.css";
import type { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DreamyStudio",
  description:
    "A wonderful Dreamybull's Studio. Explore Perrell Laquarius Brown's Studio. Offering Personal, Commercial, and Wedding!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className="h-fit min-h-full scroll-smooth"
    >
      <body className={`${inter.className} h-full w-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
