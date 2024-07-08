
import React from 'react'
import Trip from "../img/peijogw.jpg"
function About() {
  return (
    <div className='about'> 
    <div className='img__wrapper'>
     <img src={Trip} className='about__img'/>
    </div>
    <div className='about__text-wrapper'> 
    <h2 className='about__h2'>
        Don't Squeeze in a sedan when you could
        relax in a van
    </h2>
    <p className='about__p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio suscipit soluta repellendus deleniti officia totam ipsum consequatur cum! Eligendi et debitis, iste facilis labore suscipit ab enim error optio.</p>
    <p className='about__p2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, vitae maiores impedit adipisci, corporis deleniti expedita doloremque, nulla corrupti nesciunt quasi aspernatur commodi inventore repellat cupiditate saepe tempore accusamus sint?</p>

    <div className='about__container'>
        <p>Your ride for life is ready
            just click and book it
        </p>
        <button className='about__btn'>Follow us</button>
    </div>
    </div>
    <p className='about__footer'>@copy about vans</p>
    </div>
  )
}

export default About
