import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://nuskha.clinic'),
  title: 'Nuskha — Dr. Aslam Homoeopathic Clinic',
  description: 'High-throughput clinical consultation & patient record management system',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Nuskha — Dr. Aslam Homoeopathic Clinic',
    description: 'High-throughput clinical consultation & patient record management system',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nuskha Homoeopathic Clinic',
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-brand-surface text-content-primary">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
