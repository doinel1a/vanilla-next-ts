import '../styles/globals.css';
import '../styles/globals.scss';

import React from 'react';

import type { Metadata, Viewport } from 'next';

import config from '_config';

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: 'favicon.svg',
  manifest: 'app.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#000'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
          <header className='flex h-10 items-center justify-center border-b'>
            <h1>Header</h1>
          </header>
          {children}
          <footer className='flex h-8 items-center justify-center border-t'>
            <p>Footer</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
