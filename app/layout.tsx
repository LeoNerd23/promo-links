import "./globals.css";
import type { Metadata } from "next";
import "./fonts.css";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "Cupons exclusivos para sua maquininha",
  description: "Cupons exclusivos para sua maquininha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
