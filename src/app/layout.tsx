'use client'
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../../style/globalStyle';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../components/header/index'), {ssr: false})
const Footer = dynamic(() => import('../components/footer/index'), {ssr: false})

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <body>
              <GlobalStyle />
              <QueryClientProvider client={queryClient}>
                <Header />
                  {children}
                <Footer />
              </QueryClientProvider>
            </body>
          </html>
          )
}
