import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-primary bg-warning">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
        

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03" >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/home.html"   style={{color:"white",fontSize:"200%"}}>
                CROSSWORDS<span class="sr-only" >(current)</span>
                  
              </a>
            </li>
          </ul>
      
          <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
    </form>

        </div>
        
      </nav>
      <div style={{width:"20%",color:"blue"}}>
      <div class="jumbotron jumbotron-fluid" style={{paddingBottom:"400%"}}>
  <div class="container" >
    <h1 class="display-6"  style={{color:"blue",fontSize:"150%"}}> Admin Dashboard</h1><br></br>
    
  </div>
  <div>
    <ul>
      
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Category Management
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Add</a>
    <a class="dropdown-item" href="#">Delete</a>
    
  </div>

</div>
<br></br>

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Product Management
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Add</a>
    <a class="dropdown-item" href="#">Remove</a>
    
  </div>

</div>
      <br></br>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    User Management
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Add</a>
    <a class="dropdown-item" href="#">Remove</a>
    
  </div>

</div>
      <br></br>

       <div class="button">
  <button class="btn btn-primary " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Review and Rating
  </button>
  </div>
      <br></br>
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Author Details 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Add/Update</a>
    <a class="dropdown-item" href="#">Remove</a>
    
  </div>

</div>
      <br></br>
    
      
      
    </ul>
  </div>
</div>
      </div>
    </div>
  );
};

export default Navbar;