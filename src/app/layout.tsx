import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Nuskha — Dr. Aslam Homoeopathic Clinic',
  description: 'High-throughput clinical consultation & patient record management system',
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
