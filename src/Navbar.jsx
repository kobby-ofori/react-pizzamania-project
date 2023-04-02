import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-custom">
    <div className="container-fluid">
      {/* Brand and toggle get grouped for better mobile display  */}
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand " href="#">
          PIZZAMANIA
        </a>
      </div>
  
      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Pizza</a></li>
          <li><a href="#">Pizza Types</a></li>
        </ul>
      </div>{/*<!-- /.navbar-collapse -->*/}
    </div>{/*<!-- /.container-fluid -->*/}
  </nav>

  )
}

export default Navbar