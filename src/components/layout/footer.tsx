"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from "@/navigation";

export function Footer() {
    const path = usePathname();
    const t = useTranslations("nav");

    return (
        <footer className='text-white bg-bgFoot'>
            <div className='max-w-7xl pt-16 pb-16 pr-8 pl-8 mx-auto md:pr-4 md:pl-4 lg:pr-12 lg:pl-12'>
                {/* Mobile: Grid wrapper for first two columns */}
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                    <div>
                        <h1 className='text-lg md:text-xl mb-2 font-playfairThin'>Quick Links</h1>
                        <div className='flex flex-col text-sm md:text-base font-inter'>
                            <Link href={"/"}>
                                {t('home')}
                            </Link>
                            <Link href={"/projects"}>
                                {t('projects')}
                            </Link>
                            <Link href={"/about"}>
                                {t('about')}
                            </Link>
                            <Link href={"/contact"}>
                                {t('contact')}
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='footer-heading text-lg md:text-xl mb-2 text-center font-playfairThin'>Socials</h1>
                        <div className='flex justify-center gap-3 md:gap-6'>
                            <a href='https://www.instagram.com/yg.impact/' className='icon-container'>
                                <FontAwesomeIcon className='h-7 w-7 md:h-8 md:w-8' icon={faInstagram} />
                            </a>
                            <a href='https://www.linkedin.com/company/yg-impact/' className='icon-container'>
                                <FontAwesomeIcon className='h-7 w-7 md:h-8 md:w-8' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    
                    {/* Get in touch section - centered on mobile, right-aligned on desktop */}
                    <div className='col-span-2 mt-6 md:mt-0 md:col-span-1 flex flex-col items-center md:items-end'>
                        <h1 className='footer-heading text-lg md:text-xl mb-2 font-playfairThin'>Get in touch</h1>
                        <ul className='flex flex-col items-center md:items-end font-inter text-sm md:text-base'>
                            <li>yg.impact.event@gmail.com</li>
                            <li>+31623141140</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}