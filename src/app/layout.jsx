import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manush Prajwal - Full Stack Web Developer",
  description:
    "Portfolio of Manush Prajwal, a passionate Full Stack Web Developer specializing in React Native and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
