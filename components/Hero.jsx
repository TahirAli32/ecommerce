import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Hero = () => {
  return (
    <div>
        <div className={styles.slider}>
            <div className={styles.rightArrow}>
                <ArrowCircleRightIcon />
            </div>
            <div className={styles.leftArrow}>
                <ArrowCircleLeftIcon />
            </div>
            <div className={styles.heroImage}>
                {/* <Image src={}> */}
            </div>
        </div>
    </div>
  )
}

export default Hero