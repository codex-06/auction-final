import React from 'react'
import {useRouter} from 'next/router';
import { useParams } from 'next/navigation'


export default function test(props) {
  const router = useRouter()
  console.log(router.query.prop)
  const A= router.query.prop
  return (

    

    <div>
       <h1>this is use {}</h1>
      this is test1
    </div>
  )
}
