import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import SingleBlogPart from '../component/SingleBlogPart'

function SingleBlog() {
  return (
    <>
      <Breadcrumb  text={'Single Blog'}/>
      <SingleBlogPart />

    </>
  )
}

export default SingleBlog