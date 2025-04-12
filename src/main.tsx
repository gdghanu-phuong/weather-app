import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './components/dashboard/dashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Dashboard/>
    </QueryClientProvider>
  </StrictMode>,
)
