import React from 'react'

function FooterPart() {
   return (
      <>
         <footer className="footer_part">
            <div className="footer_iner">
               <div className="container">
                  <div className="row justify-content-between align-items-center">
                     <div className="col-lg-8">
                        <div className="footer_menu">
                           <div className="footer_logo">
                              <a href="index.html"
                              ><img src="img/logo.png" alt="#"
                                 /></a>
                           </div>
                           <div className="footer_menu_item">
                              <a href="index.html">Home</a>
                              <a href="about.html">About</a>
                              <a href="product_list.html">Products</a>
                              <a href="#">Pages</a>
                              <a href="blog.html">Blog</a>
                              <a href="contact.html">Contact</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="social_icon">
                           <a href="#"><i className="fab fa-facebook-f"></i></a>
                           <a href="#"><i className="fab fa-instagram"></i></a>
                           <a href="#"><i className="fab fa-google-plus-g"></i></a>
                           <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="copyright_part">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright_text">
                           <p>
                              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                              Copyright &copy;
                              <script>
                                 document.write(new Date().getFullYear());
                              </script>
                              All rights reserved | This template is made with
                              <i className="ti-heart" aria-hidden="true"></i> by
                              <a href="https://colorlib.com" target="_blank"
                              >Colorlib</a>
                              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                           </p>
                           <div className="copyright_link">
                              <a href="#">Turms & Conditions</a>
                              <a href="#">FAQ</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default FooterPart