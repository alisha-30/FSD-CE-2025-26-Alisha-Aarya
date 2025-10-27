import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from './assets/images/3d-cartoon.jpg';
import img1 from './assets/images/image1.png';
import img2 from './assets/images/image2.jpeg';
import img3 from './assets/images/image3.jpg';
function App() {

  return (
    <div>
      {/* ABES ENGINEERING COLLEGE */}
      
      {/* start navbar code */}
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)"><img src = {img} height={40} width={40} alt="cartoon"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
<br/><br/>
{/* end navbar code */}
{/* css code */}
<div class="card-group">
  <div class="card">
    <img src={img1} height={200} width={200} class="card-img-top" alt="image1"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={img2} height={200} width={200} class="card-img-top" alt="image2"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={img3} height={200} width={200} class="card-img-top" alt="image3"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<br/><br/>
{/* carousel */}

<div id="demo" class="carousel slide" data-bs-ride="carousel">


  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div class="carousel-inner">
    <div className="carousel-item active">
      {/* <img src={img1} height={200} width={200}alt="Los Angeles" className="d-block"/> */
      <img src={img1} className="d-block w-100" height={400} alt="img1" />
      }
    </div>
    <div className="carousel-item">
      {/* <img src={img2} height={200} width={200}alt="Chicago" className="d-block"/> */
      <img src={img2} className="d-block w-100" height={400} alt="img2" />
      }
    </div>
    <div className="carousel-item">
      {/* <img src={img3} height={200} width={200}alt="New York" className="d-block"/> */
      <img src={img3} className="d-block w-100" height={400} alt="img3" />
      }
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

<div class="container-fluid mt-3">
  <h3>Carousel Example</h3>
  <p>The following example shows how to create a basic carousel with indicators and controls.</p>
</div>

<button type="button" class="btn btn-warning">Warning</button>
</div>
  )
}

export default App
