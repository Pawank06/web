import Link from 'next/link'
import React from 'react'


import { ModeToggle } from './theme-toggler'
import { getBlogName } from '@/lib/request'
import { cn } from '@/lib/utils'
import { poppins } from '@/lib/font'
import Container from './Container'


const GITHUB_URL = ""
const Navbar = async () => {
    const title = await getBlogName()

    return (
        <header className='fixed top-0 z-10 w-full border-b  backdrop-blur-[12px]'>

            <Container className='flex h-[4.8rem] justify-between '>

                

                    <div className={cn('text-4xl flex items-center font-bold', poppins.className)}>
                        <Link href="/">
                            P.
                        </Link>

                    </div>
                    <div className='flex items-center gap-5 md:font-medium'>



                        <Link href="/about" className='flex items-center gap-2 transition-colors duration-300 hover:text-slate-600'>
                            About
                        </Link>
                        <Link href="/blogs" className='flex items-center gap-2 transition-colors duration-300 hover:text-slate-600'>
                            Blogs
                        </Link>
                        <Link href="/projects" className='flex items-center gap-2 transition-colors duration-300 hover:text-slate-600'>
                            Projects
                        </Link>
                        <ModeToggle />




                    </div>

                

            </Container>

        </header>
    )
}

export default Navbar
