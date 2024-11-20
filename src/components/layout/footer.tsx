"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from "@/navigation";

export function Footer () {
    const path = usePathname();
    const t = useTranslations("nav");

    return (
        <footer className='text-white bg-bgFoot'>
            <div className='max-w-7xl mx-auto grid grid-cols-3 pr-4 pl-4 pt-16 pb-16 sm:pr-8 sm:pl-8 lg:pr-12 lg:pl-12'>
                <div>
                    <h1 className='text-xl mb-2 font-playfairThin'>Quick Links</h1>
                    <div className='flex flex-col text-s font-inter'>
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
                    <h1 className='footer-heading text-xl mb-2 text-center font-playfairThin'>Social Connection</h1>
                    <div className='flex justify-center gap-6'>
                        <a href='https://www.instagram.com/yg.impact/' className='icon-container'><FontAwesomeIcon className='h-8 w-8' icon={faInstagram} /></a>
                        <a href='https://www.linkedin.com/company/yg-impact/' className='icon-container'><FontAwesomeIcon className= 'h-8 w-8'icon={faLinkedin} /></a>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <h1 className='footer-heading text-xl mb-2 font-playfairThin'>Get in touch</h1>
                    <ul className='flex flex-col items-end font-inter'>
                        <li>yg.impact.event@gmail.com</li>
                        <li>+31623141140</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
