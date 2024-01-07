"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemePRovider = () => {

    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>ThemeProvider</div>
    )
}