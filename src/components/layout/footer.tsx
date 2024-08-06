import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className='flex justify-between text-icon'>
            <div>
                <h1 className='footer-heading text-3xl mb-2'>Quick Links</h1>
                <ul className='links text-s'>
                    <a href={"/"}><li>home</li></a>
                    <a href={"/projects"}><li>projects</li></a>
                    <a href={"/about"}><li>about</li></a>
                    <a href={"/contact"}><li>contact</li></a>
                </ul>
            </div>
            <div>
                <h1 className='footer-heading text-3xl mb-2 text-center'>Social Connection</h1>
                <div className='flex justify-center gap-6'>
                    <a href='https://www.instagram.com/yg.impact/' className='icon-container'><FontAwesomeIcon className='h-10 w-10' icon={faInstagram} /></a>
                    <a href='' className='icon-container'><FontAwesomeIcon className='h-10 w-10'icon={faFacebook} /></a>
                    <a href='https://www.linkedin.com/company/yg-impact/' className='icon-container'><FontAwesomeIcon className= 'h-10 w-10'icon={faLinkedin} /></a>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <h1 className='footer-heading text-3xl mb-2'>Get in touch</h1>
                <ul className='flex flex-col items-end'>
                    <li>yg.impact.event@gmail.com</li>
                    <li>+31623141140</li>
                </ul>
            </div>
        </footer>
    );
};
