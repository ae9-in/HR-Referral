import './globals.css';
import type { Metadata } from 'next';
import { AppProvider } from '../context/AppContext';
import { Toaster } from 'react-hot-toast';
import ClickSpark from '../components/ClickSpark';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Refentra | HR Referral Platform',
  description: 'Refentra — a premium employee referral tracking platform. Refer top talent, track candidates in real-time, and streamline your HR pipeline.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <AppProvider>
          <Navbar />
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {children}
          </ClickSpark>
        </AppProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

