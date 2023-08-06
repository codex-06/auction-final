import React from 'react'
import Link from 'next/link'
export default function test2() {
  return (
    <div>
      <Link className='border bg-teal-300 on ' href= {{
        pathname: "/test",
        query: {
           
            prop : "episode.title"
        }
    }}>click</Link>
    </div>
  )
}
