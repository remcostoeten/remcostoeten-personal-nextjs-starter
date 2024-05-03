'use client'
import { auth } from '@/auth/auth-options'
import { Toaster } from '@/components/ui/sonner'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SessionProvider } from 'next-auth/react'
// import { ThemeProvider } from "./next-theme";

export default async function ProviderWrapper({ children }: { children: React.ReactNode }) {
    const session = await auth();
    return (
        <SessionProvider session={session}>{children}
            <HydrationOverlay>
                {children}
                <SpeedInsights />
                <Analytics />
                <Toaster />
            </HydrationOverlay>
        </SessionProvider>
    )
}
