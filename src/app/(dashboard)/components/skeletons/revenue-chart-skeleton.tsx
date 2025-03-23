import Skeleton from '@/app/_components/skeleton'

const barHeights = [
  'h-[40%]',
  'h-[50%]',
  'h-[60%]',
  'h-[70%]',
  'h-[50%]',
  'h-[80%]',
  'h-[60%]',
  'h-[40%]',
  'h-[50%]',
  'h-[60%]',
  'h-[70%]',
  'h-[50%]',
  'h-[80%]',
  'h-[60%]',
]

const RevenueChartSkeleton = () => {
  return (
    <div className="flex h-[250px] w-full flex-col space-y-3 rounded-lg bg-white p-4 px-3 shadow">
      {/* Placeholder for the graph title */}
      <Skeleton className="h-5 w-32" />

      {/* Placeholder for the vertical bars */}
      <div className="flex h-full w-full items-end justify-between space-x-2">
        {barHeights.map((height, i) => (
          <Skeleton
            key={i}
            className={`w-12 bg-gray-200 ${barHeights[Math.floor(Math.random() * 7)]}`}
          />
        ))}
      </div>

      {/* Placeholder for the x axis */}
      <div className="flex justify-between">
        {[...Array(14)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-8" />
        ))}
      </div>
    </div>
  )
}

export default RevenueChartSkeleton
