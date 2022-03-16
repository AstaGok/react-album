import React from 'react'
import './Header.css';

export default function Header() {
  let urlList = {
    link: '#'
  }
  return (
    <>
<div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4" >
  <div className="row">
            <div className="col-sm-8 col-md-7 py-4" style={{paddingLeft:"10em"}}>
              <h4 className="text-white">About</h4>
              <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href={urlList.link} className="text-white">Follow on Twitter</a></li>
                <li><a href={urlList.link} className="text-white">Like on Facebook</a></li>
                <li><a href={urlList.link} className="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
  </div>
</div>
<nav className="navbar navbar-dark bg-dark" style={{padding:"1em 10em"}}>
  <div className="container-fluid justify-content-end justify-content-between">
  <a href={urlList.link} className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            
            <strong>Album</strong>
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

    </>
  )
}
