// app/page.js
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        
        <div className='text-2xl p-4 bold text-red-900 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>
          <Card className='grid p-8 m-4 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> 
              <h1 className='flex p-6  justify-center width-[200px] text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>Dynamic country listing</h1></Card>
            <ul className='flex gap-2 justify-center width-[200px] text-red-900   bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400 '>
               <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/canada">Canada</Link></li></Card>
               <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/germany">Germany</Link></li></Card>
               <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2  bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/japan">Japan</Link></li></Card>
               <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/australia">Australia</Link></li></Card>
               <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'> <li className='text-red-900 p-2 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/france">France</Link></li></Card>

            </ul>
        </div>
    );
}
