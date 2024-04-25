'use client'
import { Toaster } from '@/components/ui/sonner'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import { ThemeProvider } from "./next-theme";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <HydrationOverlay>
            {children}
            <SpeedInsights />
            <Analytics />
            <Toaster />
        </HydrationOverlay>
    )
}
