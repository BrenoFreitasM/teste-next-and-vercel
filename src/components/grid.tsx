import { ReactNode } from "react"

import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: ReactNode
  className?: string
}

export function GridContainer({ children, className }: GridContainerProps) {
  // w-full max-w-grid mx-auto px-3 bg-red-100 border border-blue-500
  // const defaultClass = "w-full mx-w-grid mx-auto px-3"
  const defaultClass = "w-full max-w-grid mx-auto px3"
  const combinedClasses = twMerge(defaultClass, className)
  return(
    <div className={combinedClasses}> 
      {children}
    </div>
  )
}