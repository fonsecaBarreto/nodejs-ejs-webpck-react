import React from 'react'
import "./style.css"
export default function HomeSection(props){
  const { title, subtitle, children, fr4} = props
  return(
    //set tet only on 1/3 if fr332234
    <section className="home-section bd-red"  >
      <div className={ fr4 ? "app-container home-section-header fr4" : "app-container home-section-header" }>
        <h1 className="section-title">{title}</h1>
        {
          subtitle ?
          <span className="section-subtitle" >{subtitle}</span>
          : undefined
        }
      </div>

      {children ? 
          <div className=" section-content bd-green">
          {children}
          </div>
      : null}

    </section>
  )
}