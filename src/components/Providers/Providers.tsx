import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageTransitionWrapper, ThemeProvider } from '../../theme/ThemeProvider';


const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <PageTransitionWrapper>
                    {children}
                </PageTransitionWrapper>
            </ThemeProvider>
        </QueryClientProvider>
    );
};