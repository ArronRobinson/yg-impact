import {  Playfair_Display, Inter, Herr_Von_Muellerhoff } from "next/font/google";

export const playfairbold = Playfair_Display ({
    weight: ['600'],
    subsets: ['latin'],
    variable: '--font-playfairBold'
  })
  
export const playfairthin = Playfair_Display ({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-playfairThin'
  })
  
export const interthin = Inter ({
    weight: ['200'],
    subsets: ['latin'],
    variable: '--font-interThin'
  })

export const inter = Inter ({
  weight: ['200'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export const herrvon = Herr_Von_Muellerhoff ({
  weight: ['400'],
  subsets: ['latin'],    
  variable: '--font-herrVon'
})