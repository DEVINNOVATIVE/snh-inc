import * as React from 'react'
import { cn } from '@/lib/utils'
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(({className,...props},ref)=><textarea ref={ref} className={cn('flex min-h-32 w-full rounded-xl border border-sand-400 bg-sand-100 px-4 py-3 text-sm text-ocean-900 outline-none transition placeholder:text-ink-500/60 focus:border-ocean-700 focus:ring-2 focus:ring-ocean-700/20',className)} {...props}/>)
Textarea.displayName='Textarea'
