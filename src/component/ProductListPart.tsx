import React from 'react'

const ProductListPart = () => {
  return (
    <>
      <section className="product_list section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="product_sidebar">
                <div className="single_sedebar">
                  <form action="#">
                    <input type="text" name="#" placeholder="Search keyword" />
                    <i className="ti-search"></i>
                  </form>
                </div>
                <div className="single_sedebar">
                  <div className="select_option">
                    <div className="select_option_list">Category <i className="right fas fa-caret-down"></i> </div>
                    <div className="select_option_dropdown">
                      <p><a href="#">Category 1</a></p>
                      <p><a href="#">Category 2</a></p>
                      <p><a href="#">Category 3</a></p>
                      <p><a href="#">Category 4</a></p>
                    </div>
                  </div>
                </div>
                <div className="single_sedebar">
                  <div className="select_option">
                    <div className="select_option_list">Type <i className="right fas fa-caret-down"></i> </div>
                    <div className="select_option_dropdown">
                      <p><a href="#">Type 1</a></p>
                      <p><a href="#">Type 2</a></p>
                      <p><a href="#">Type 3</a></p>
                      <p><a href="#">Type 4</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="product_list">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_1.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Cervical pillow for airplane
                          car office nap pillow</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_2.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_3.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Foam filling cotton slow rebound pillows</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_4.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_5.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_6.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Sleeping orthopedic sciatica Back Hip Joint Pain relief</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_7.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_8.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Sleeping orthopedic sciatica Back Hip Joint Pain relief</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_9.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_item">
                      <img src="img/product/product_list_10.png" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                        <p>From $5</p>
                    </div>
                  </div>
                </div>
                <div className="load_more_btn text-center">
                  <a href="#" className="btn_3">Load More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductListPart