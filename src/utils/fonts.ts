import {  Playfair_Display, Inter, Herr_Von_Muellerhoff } from "next/font/google";

export const playfairBold = Playfair_Display ({
    weight: ['600'],
    subsets: ['latin'],
    variable: '--font-playfairBold'
  })
  
export const playfairThin = Playfair_Display ({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-playfairThin'
  })
  
export const inter = Inter ({
    weight: ['200'],
    subsets: ['latin'],
    variable: '--font-inter'
  })

export const herrVon = Herr_Von_Muellerhoff ({
  weight: ['400'],
  subsets: ['latin'],    
  variable: '--font-herrVon'
})