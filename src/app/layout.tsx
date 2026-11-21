import type { Metadata } from 'next';
import './globals.css';

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
      <body className="min-h-full flex flex-col bg-[#F1F5F4] text-[#131C1A]">
        {children}
      </body>
    </html>
  );
}
