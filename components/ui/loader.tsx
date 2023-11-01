'use client'

import { ClipLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color="#fffff"
        size={40}
      />
    </div>
  )
}
