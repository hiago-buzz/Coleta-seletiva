import React from 'react'
import './Banner.scss'
import { directive } from '@babel/types';
import ImgBanner from '../img/banner.jpeg'

const Banner = () => {
    return (
        <div className="Banner">
           <img src={ImgBanner} alt="Banner"/>
        </div>
    )
}

export default Banner
