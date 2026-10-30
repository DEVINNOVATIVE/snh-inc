import * as React from 'react'
import { cn } from '@/lib/utils'
export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({className,...props},ref)=><input ref={ref} className={cn('flex h-11 w-full rounded-lg border border-[#cfc3af] bg-[#f8f3e9] px-3 text-sm text-[#082c36] outline-none transition placeholder:text-[#8a9895] focus:border-[#0b5560] focus:ring-2 focus:ring-[#0b5560]/20',className)} {...props}/>)
Input.displayName='Input'
