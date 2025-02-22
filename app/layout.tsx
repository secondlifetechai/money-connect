import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from "next/font/google";
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import { Providers } from './providers';
import ScrollToTop from '@/components/marketing/ScrollToTop';
import Aoscompo from '@/utils/aos';

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TradeSim - Real-Time Trading Simulator',
  description:
    'Experience real-time trading with our advanced trading simulator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
        >
          <Aoscompo>
            <Providers>{children}</Providers>
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
