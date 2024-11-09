// app/page.js
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <div className='text-2xl bold text-red-900 z-50  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>
            <h1 className='flex gap-6 justify-center width-[200px] text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>Dynamic country listing</h1><br />
            <ul className='flex gap-6 justify-center width-[200px] text-red-900   bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400 '>
                <li className='text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/canada">Canada</Link></li>
                <li className='text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/france">France</Link></li>
                <li className='text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/germany">Germany</Link></li>
                <li className='text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/japan">Japan</Link></li>
                <li className='text-red-900  bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'><Link href="/country/australia">Australia</Link></li>
            </ul>
        </div>
    );
}
