import * as React from 'react'
import { cn } from '@/lib/utils'
export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({className,...props},ref)=><input ref={ref} className={cn('flex h-12 w-full rounded-xl border border-sand-400 bg-sand-100 px-4 text-sm text-ocean-900 outline-none transition placeholder:text-ink-500/60 focus:border-ocean-700 focus:ring-2 focus:ring-ocean-700/20',className)} {...props}/>)
Input.displayName='Input'
