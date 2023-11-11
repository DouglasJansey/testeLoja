'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../../style/globalStyle'
import Header from '@/components/header'

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
        </QueryClientProvider>
      </body>
    </html>
  )
}
