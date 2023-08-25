import React from 'react'

function AboutUs() {
   return (
      <>
         <section className="about_us padding_top">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="about_us_content">
                        <h5>Our Mission</h5>
                        <h3>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.</h3>
                        <div className="about_us_video">
                           <img src="img/about_us_video.png" alt="#" className="img-fluid"/>
                              <a className="about_video_icon popup-youtube" href="https://www.youtube.com/watch?v=DWHB6nTyKDI"></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default AboutUs