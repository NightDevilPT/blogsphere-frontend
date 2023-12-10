import { ChildProps } from '@/types/types'
import React from 'react'

const index = ({children}:ChildProps) => {
  return (
	<div className={`w-full h-full absolute left-0 top-0 z-50`}>
		{children}
	</div>
  )
}

export default index