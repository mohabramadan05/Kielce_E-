import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./[locale]/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {};
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=(t==='light'||t==='dark')?t:(d?'dark':'light');document.documentElement.setAttribute('data-theme',r);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}