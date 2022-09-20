import React, { useState, useEffect } from 'react'
import { Slide } from '.'

interface Props {
  slidesData: {}[]
}

const Slides = ({ slidesData }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === 3) setCurrentSlide(0)
      else setCurrentSlide((prev) => prev + 1)
    }, 8000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <section className='relative'>
      <div>
        <Slide slideData={slidesData[currentSlide]} />
      </div>
      {/* SLIDE SELECT */}
      <div className='absolute bottom-0 tablet:-left-14 desktop:-left-20 left-0 '>
        {[1, 2, 3, 4].map((slide, index) => (
          <button
            className={`w-10 tablet:w-14 desktop:w-20 aspect-square text-xs tablet:text-xl  ${
              currentSlide === index
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-800 hover:bg-lightBlue transition-colors duration-300 active:bg-white'
            }`}
            onClick={() => {
              setCurrentSlide(index)
            }}
            key={`slide-${index}`}>
            0{slide}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Slides
