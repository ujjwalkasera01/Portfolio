import React from 'react'

export const Information = () => {
  return (
    <div className="about--info grid">
        <div className="about--box">
            <i class='bx bx-award about--icon'></i>
            <h3 className="about--title">Experience</h3>
            <span className="about--subtitle">1+ years of working</span>
        </div>
        <div className="about--box">
            <i class='bx bx-briefcase-alt-2 about--icon' ></i>
            <h3 className="about--title">Completed</h3>
            <span className="about--subtitle">10+ projects</span>
        </div>
        <div className="about--box">
            <i class='bx bxs-user-badge about--icon' ></i>
            <h3 className="about--title">Hackathons</h3>
            <span className="about--subtitle">attented 10+</span>
        </div>
    </div>
  )
}
