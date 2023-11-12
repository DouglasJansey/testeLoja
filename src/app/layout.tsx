'use client'
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../../style/globalStyle';
import Header from '@/components/header';
import Footer from '@/components/footer'

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
