import React from 'react'
// import AboutImage from '../images/ about.jpeg';
import AboutImage from '../images/about.jpeg';
import '../styles/About.css';

function About() {
  return (
 <div className="about">

  {/* <div className="aboutTop"   style={{backgroundImage :`url($("/src/images/about.jpeg"))`}}></div> */}
  <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}></div>
  <div className="aboutButtom">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe voluptatem,
      aliquid possimus distinctio, a ullam sint quos delectus veniam, minus adipisci debitis 
      reprehenderit! Nesciunt inventore debitis deserunt? Maxime animi quaerat ducimus deserunt 
      perferendis magnam et reiciendis asperiores sed eaque? Saepe totam laudantium laborum illo 
      iure maiores aspernatur aliquid quod quaerat, cum provident! Ullam similique at ipsam mollitia. 
      Deserunt esse vel voluptatem minima doloremque? Possimus, debitis temporibus? Atque quod quis 
      fuga animi quos natus dolores laboriosam adipisci distinctio totam, id excepturi ab nostrum commodi 
      ratione nam praesentium obcaecati, laudantium quam beatae. Id consequatur officiis pariatur? Officiis 
      autem consequatur rem illum, placeat corporis necessitatibus inventore sit perferendis, debitis, accusantium
       aliquam temporibus sapiente non. Eos, consectetur aliquid dolorem sed sequi minus ipsum similique
        veniam pariatur error minima quisquam ipsam animi voluptate debitis provident. Temporibus nisi voluptatibus
         doloremque voluptatem optio sunt iste ullam consequatur, et delectus consequuntur error! Eaque cum quae 
         autem vero cumque similique labore quidem reiciendis nulla qui temporibus omnis porro maxime sed nihil fuga
          iusto asperiores, odit excepturi minus ut quibusdam. Iste ipsum porro voluptas tempore corporis id 
          quod numquam laborum reiciendis facere, dignissimos recusandae fugiat rerum odio qui illum aspernatur 
          minus minima obcaecati officiis. Placeat, ea. Dignissimos, facilis rem!</p>
  </div>
 </div>
  )
}

export default About