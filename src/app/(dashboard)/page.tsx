import { Suspense } from 'react'
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from '../_components/header'
import Last14DaysRevenueCard from './components/last-14-days-revenue-card'
import MostSoldProductsCard from './components/most-sold-products-card'
import { CardSkeleton } from './components/skeletons/cards-skeleton'
import { MostSoldProductsSkeleton } from './components/skeletons/most-sold-products-skeleton'
import TodaysRevenueCard from './components/todays-revenue-card'
import TotalInStockCard from './components/total-in-stock-card'
import TotalProductsCard from './components/total-products-card'
import TotalRevenueCard from './components/total-revenue-card'
import TotalSalesCard from './components/total-sales-card'
import RevenueChartSkeleton from './components/skeletons/revenue-chart-skeleton'

export default async function Home() {
  return (
    <div className="ml-8 mt-8 flex w-full flex-col space-y-8 py-8">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderSubtitle>Overview</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <p></p>
        </HeaderRight>
      </Header>

      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<CardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <TodaysRevenueCard />
        </Suspense>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<CardSkeleton />}>
          <TotalSalesCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <TotalInStockCard />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <TotalProductsCard />
        </Suspense>
      </div>

      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Last14DaysRevenueCard />
        </Suspense>
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
          <Suspense fallback={<MostSoldProductsSkeleton />}>
            <MostSoldProductsCard />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
