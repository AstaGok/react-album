import React from 'react'
import './PostContent.css';

export default function PostContent() {

  let urlList = {
    link: '#'
  }
  return (
    <>
<main role="main">
<section className="jumbotron text-center">
  <div className="container">
    <h1 className="jumbotron-heading fw-light">Album example</h1>
    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
    <p>
      <a href={urlList.link} className="btn btn-primary m-2">Main call to action</a>
      <a href={urlList.link} className="btn btn-secondary m-2">Secondary action</a>
    </p>
  </div>
</section>
</main>
    </>
  )
}
