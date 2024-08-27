import { type HTMLAttributes } from 'react'
import { cn } from '@/shared/utils/cn'

// export interface HomeViewProps {}

export function HomeView({
  className,
  ...props
  // }: HomeViewProps & HTMLAttributes<HTMLDivElement>) {
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} {...props}>
      <h2 className="text-2xl">HomeView</h2>
    </div>
  )
}
