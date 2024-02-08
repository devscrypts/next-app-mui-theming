import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import ThemeRegistry from "@/theme";
import { ThemeToggleProvider } from "@/contexts/themeToggleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeToggleProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ThemeToggleProvider>
      </body>
    </html>
  );
}
