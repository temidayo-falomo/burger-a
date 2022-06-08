import React from 'react'
import Burger from '../burger/Burger'
import Summary from '../summary/Summary'
import './MainBurgerSection.css'

function MainBurgerSection() {
  return (
    <section className='main-burger'>
        <div className="main-burger-left">
          <h1>Build Your Burger</h1>
        </div>
        <Burger />
        <Summary />
    </section>
  )
}

export default MainBurgerSection