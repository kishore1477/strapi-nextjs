import React from 'react'
import { useRouter } from 'next/router'
const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      this is slug {slug}...
    </div>
  )
}

export default Slug
