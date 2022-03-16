import React from 'react'

export default function Footer() {
    let urlList = {
        link: '#'
      }
  return (
    <>
    <footer className="text-muted">
      <div className="container">
        <p style={{ textAlign: 'right' }}>
          <a href={urlList.link}>Back to top</a>
        </p>
        <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href={urlList.link}>Visit the homepage</a> or read our <a href={urlList.link}>getting started guide</a>.</p>
      </div>
    </footer>    
    </>
  )
}
