import Skeleton from '@/app/_components/skeleton'

export function MostSoldProductsSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <Skeleton className="h6 w-10 bg-gray-100" />
        <Skeleton className="h-6 w-10 bg-gray-200" />
        <Skeleton className="w-25 h-6 bg-gray-200" />
      </div>
      <div>
        <Skeleton className="h-6 w-40 bg-gray-200" />
      </div>
    </div>
  )
}
