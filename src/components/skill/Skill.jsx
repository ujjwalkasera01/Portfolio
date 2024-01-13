import React from 'react'
import "./skill.css"
import { SkillList } from './skilllist'

export const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section--title">Skills</h2>

        <div className="skills--container container grid">
            <SkillList />
        </div>
    </section>
  )
}
