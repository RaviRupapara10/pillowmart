import React from 'react'

function Breadcrumb(props: any) {
   return (
      <>
         <section className="breadcrumb_part">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="breadcrumb_iner">
                        <h2>{props.text ? props.text : ""} </h2>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Breadcrumb