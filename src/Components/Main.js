import React from 'react'
import Card from '../Components/Card.js'
import data from '../data.js'

const CardData = data.map(item=>{
    return <Card key={item.title} {...item}/>
})
export default function Main() {
   
  return (
    <main>
      {CardData}
    </main>
  )
}
