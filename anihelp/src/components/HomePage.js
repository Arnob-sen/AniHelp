import React from 'react'
import cover from './cover.jpg'
import ConsultancyCard from './ConsultancyCard'

function HomePage() {
  return (
    <>
        <img class="h-auto max-w-full" src={cover} alt="Cover "/>
        <h4 class="py-4 flex justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline dark:text-white dark:hover:underline">Select Animal Category</h4>
        <div className="grid grid-cols-3 gap-4 px-3 py-4">
            <a href='/'>
                <ConsultancyCard title="POLTRY" photo="#"/>
            </a>
            <a href='/'>
                <ConsultancyCard title="AQUA" photo="#"/>
            </a>
            <a href='/'>
                <ConsultancyCard title="RUMINANTS" photo="#"/>
            </a>
            <a href='/'>
                <ConsultancyCard title="HOME PET" photo="#"/>
            </a>
            <a href='/'>
                <ConsultancyCard title="PET1" photo="#"/>
            </a>
            <a href='/'>
                <ConsultancyCard title="PET2" photo="#"/>
            </a>
        </div>
    </>
  )
}

export default HomePage