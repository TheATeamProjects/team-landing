import { primaryFont } from "@/hooks/use-fonts";
import { ThemeProvider } from "@/themes";
import "./globals.css";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "The A Team",
  description: "The A Team Portfolio",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <ThemeProvider>
          <header></header>
          <main>
            <aside></aside>
            <section>{children}</section>
          </main>
          <footer></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
