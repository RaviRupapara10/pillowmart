import React from 'react'
import BlogPart from '../component/BlogPart'
import Breadcrumb from '../component/Breadcrumb'

function Blog() {
  return (
    <>
      <Breadcrumb text={"Blog"} />
      <BlogPart />
    </>
  )
}

export default Blog