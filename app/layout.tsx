import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Herger Dev",
  description: "Portfolio of Adam Herger",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={firaSans.className}>{children}</body>
    </html>
  );
}
