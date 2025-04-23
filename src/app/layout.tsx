import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Space_Grotesk } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { cn } from "@/lib/utils";
import PageLayout from "@/components/layout/PageLayout";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nway Nway Wai",
  description: " Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nway Nway Wai</title>

        <meta name="description" content="Nway Nway Wai's portfolio" />
        {/* OPEN GRAPH */}

        <meta property="og:type" content="article" />

        <meta
          property="og:url"
          content="https://nwaynwaywai.vercel.app/image/nway1.JPG"
        />

        <meta property="og:title" content="Nway Nway Wai" />

        <meta property="og:description" content="Nway Nway Wai's portfolio" />

        <meta
          property="og:image"
          content="https://nwaynwaywai.vercel.app/image/nway1.JPG"
        />
      </head>
      <body className={cn(inter.className, "min-h-screen relative")}>
        <Theme>
          <PageLayout>{children}</PageLayout>
        </Theme>
      </body>
    </html>
  );
}
