import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import React from 'react'

function Newsletter() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div
          className="flex-none rounded-full p-1 text-teal-500 bg-teal-500/10"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
        </div>
        <h2 className="uppercase text-xs font-semibold text-gray-400">
          STAY IN TOUCH
        </h2>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex items-center gap-3 mt-6">

        <Mail className='' />
        <Input
          placeholder="Email Address"

          className="flex-1 pl-10 max-w-md "

        />

        <Button variant={'outline'}>
          Join &rarr;
        </Button>
      </div>
    </div>
  )
}

export default Newsletter