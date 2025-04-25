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
  description: "Frontend Developer",
  icons: {
    icon: "/favico.ico",
  },
  openGraph: {
    type: "article",
    url: "https://nway-nway-wai.vercel.app/nway1.JPG",
    title: "Nway Nway Wai",
    description: "Nway Nway Wai's portfolio",
    images: [
      {
        url: "https://nway-nway-wai.vercel.app/nway1.JPG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen relative")}>
        <Theme>
          <PageLayout>{children}</PageLayout>
        </Theme>
      </body>
    </html>
  );
}
