import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8 ">

      <br />
      <p>© {year} Louis Le. All rights reserved.</p>

    </footer>
  )
}

export default Footer