import React from 'react'

export const Scroll = () => {
  return (
    <div className="home--scroll">
        <a href="#about" className="home--scroll-button button--flex">
            <i class="uil uil-mouse-alt-2"></i>
            <span className="home--scroll-name">Scroll Down</span>
            <i class="uil uil-arrow-down home--scroll-arrow"></i>
        </a>
    </div>
  )
}
