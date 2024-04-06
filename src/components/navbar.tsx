import Link from 'next/link'
import React from 'react'


import { ModeToggle } from './theme-toggler'
import { getBlogName } from '@/lib/request'
import { cn } from '@/lib/utils'
import { poppins } from '@/lib/font'

const GITHUB_URL = ""
const Navbar = async() => {
    const title = await getBlogName()
    
    return (
        <header className='fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]'>
            <div className='w-full mb-5'>
                <div className='max-w-4xl w-full px-5 xl:p-0 my-5 mx-auto flex justify-between items-center'>
                    <div className={cn('text-4xl font-bold', poppins.className)}>
                        <Link href="/">
                            P.
                        </Link>

                    </div>
                    <div className='flex items-center gap-5 '>
                        

                        
                            <Link href="/about" className='flex items-center gap-2 transition-colors duration-300 hover:text-slate-400'>
                                About
                            </Link>
                            <Link href="/blogs" className='flex items-center gap-2 transition-colors duration-300 hover:text-slate-400'>
                                Blogs
                            </Link>
                            <Link href="/projects" className='flex items-center gap-2 transition-colors duration-300 hover:text-slate-400'>
                                Projects
                            </Link>
                            <ModeToggle />
                        



                    </div>

                </div>

            </div>

        </header>
    )
}

export default Navbar
