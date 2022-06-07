import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Slider = () => {

    let sliderData = [ 'bg.jpg', 'pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg' ]
    const [current, setCurrent] = useState(0)

    let length = sliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const moveDots = (index) => {
        setCurrent(index)
    }

  return (
    <section className={styles.main}>
        <div className={styles.slider}>
            <div className={`${styles.leftArrow} ${styles.arrow}`}>
                <ArrowCircleLeftIcon onClick={() => prevSlide()} />
            </div>
            <div className={`${styles.rightArrow} ${styles.arrow}`}>
                <ArrowCircleRightIcon onClick={() => nextSlide()} />
            </div>
            {sliderData.map((slide, index) => (
                <div className={index === current ? `${styles.slide} ${styles.active}` : `${styles.slide}`} key={index} >
                    {index === current &&
                        <Image src={`/${slide}`} width="800px" height="450px" style={{borderRadius: '5px'}} alt="Slider Pic" />
                    }
                </div>
            ))}
            <div className={styles.dots}>
                {Array.from({length: length}).map((item,index) => (
                    <div 
                        key={index}
                        onClick={() => moveDots(index)}
                        className={current === index ? `${styles.dot} ${styles.active}` : `${styles.dot}`}>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Slider