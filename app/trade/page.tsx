import { ConnectionStatus } from '@/components/ConnectionStatus'
import MarketOverview from '@/components/MarketOverview'
import { StockChart } from '@/components/StockChart'
import TradingDashboard from '@/components/TradingDashboard'
import React, { Suspense } from 'react'

export default function TradePage() {
  return (
    <section className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1">
        <div className="container mx-auto lg:max-w-screen-xl px-4">
            <ConnectionStatus />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">TradeSim Trading Platform</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <Suspense fallback={<div>Loading market data...</div>}>
                            <MarketOverview />
                        </Suspense>
                        <div className="mt-8">
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <StockChart />
                        </Suspense>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <Suspense fallback={<div>Loading trading dashboard...</div>}>
                            <TradingDashboard />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  )
}
