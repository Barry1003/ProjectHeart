import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project HEART',
  description: 'Project HEART brings blood pressure and blood glucose screening, health education and a clear path to the nearest Primary Health Centre to traders and artisans in Iba LCDA, Lagos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
