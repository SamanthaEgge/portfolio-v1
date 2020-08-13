import React from 'react'

import './About.scss'
import Navigation from '../components/Navigation/Navigation.js'

const About = () => {
  return (
    <div className='about-container'>
      <div className='navigation'>
        <Navigation />
      </div>
      
      <div className='about-photo'>
        <h2>Contact me through any of my social media below,</h2>
        <div className='about-links'>
          <a href="https://github.com/SamanthaEgge"><i class="fab fa-github"></i></a> &nbsp; &nbsp;
          <a href="https://twitter.com/SamanthaEgge"><i class="fab fa-twitter"></i></a> &nbsp; &nbsp;
          <a href="https://www.linkedin.com/in/samantha-egge/"><i class="fab fa-linkedin"></i></a>
        </div>
        <h2>or send me an <a href="mailto:samantha.c.egge@gmail.com">email directly!</a></h2>
      </div>

      <div className='about-text'>
        <h2 className='about-special'>Hey there, I'm Samantha!</h2>
        <p>I’m a developer proficient with JavaScript, React, React Native, Node.js, PostgreSQL, and Python. I’m also a creative who loves building things, spending time with my dogs, and exploring what the world has to offer. A competitive person by nature, I have a drive to constantly improve and look for how to make a product better whether that’s building race cars or writing code. When I’m not coding I enjoy video games, hiking, reading, and writing.</p>
        <p>After high school I went straight to college at Oregon State University to study Mechanical Engineering. There I found my first love; race cars. While studying for the next few years, I spent nearly every day in the raceshop designing, building, and racing those cars. I learned what it was like to work with a team who was passionate, driven, and always looking for how we could make the car faster, better, more efficient. It was there I learned to make fleet-footed decisions while navigating reliability versus risk for success, and I loved every minute of it. The pressure of the races and the deadlines were something that I thrived under. Although it wasn’t long before I ran out of money, and I spent the next several years working various jobs to pay off my debt. </p>
        <p>Once I had paid off my college debts I began looking for what was next that aligned with my interests and passions, that wasn’t through the route of a college education. I eventually found software development, and knew that I had found my calling. After attending 1 year of coding school, building multiple applications, and even leading a couple small teams I’m looking for my next opportunity.</p>
        <p>My most important value for the teams I work on is the team itself. Working with other passionate people who strive to make the product and each other better. While I’m currently residing in the beautiful Pacific Northwest, I’m looking for a position out East so that I can experience more of what the US has to offer.</p>
      </div>
    </div>
  )
}

export default About;