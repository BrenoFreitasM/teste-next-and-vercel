import { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
  className?: string
}

export function GridContainer({ children, className }: GridContainerProps) {
  const defaultClass = "w-full mx-w-grid mx-auto px-3"
  return(
    <div className={defaultClass}> 
      {children}
    </div>
  )
}