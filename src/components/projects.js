import React from 'react'

export default function Projects() {
  return (

    <section className="project" id="projects">
        <h1> Projects </h1>
    
        <section className="project-container">   
            <figure className="project-1">
                <h2>Project 1 Exchange hub</h2>
                <a href="https://github.com/darylbg/exchange-hub" target="_blank">
                <span className="link"></span></a> 
            </figure>
            
            <div className="sub-container">
                <figure className="project-2">
                <h2> Project 2 readSky </h2>
                <a href="https://readsky.herokuapp.com/" target="_blank">
                <span className="link"></span></a> 
            </figure>

            <figure className="project-3">
                <h2> Project 3 Airbnp </h2>
                <a href="https://readsky.herokuapp.com/" target="_blank">
                    <span className="link"></span></a> 
            </figure>
        </div>
            
        <div className="sub-container-2">
            <figure className="project-4">
                <h2> Project 4 </h2>
            </figure>
            
            <figure className="project-5">
                <h2> Project 5 </h2>                        
            </figure>
        </div>
    </section>
</section>

  )
}
