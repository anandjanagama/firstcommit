import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Bootstrap1=()=>{
    return(
      <>
<h1 className="text-center text-capitalize text-danger my-5"  >Welcome to sports ride 🚗</h1>

<div className="container">
  <div className="row">
    <div className="col">
      <div className="card" >
  <img src="https://pictures.topspeed.com/IMG/crop_webp/201909/the-2020-lamborghini-18_1600x0.webp" class="card-img-top" alt="..." height='300px' />
  <div class="card-body">
    <h5 class="card-title">Lamborghini</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.lamborghini.com/en-en" class="btn btn-primary">Lambo</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" >
  <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Ferrari/F8-Tributo/7945/1598599471404/front-left-side-47.jpg" class="card-img-top" alt="..." height='300px' />
  <div class="card-body">
    <h5 class="card-title">Ferrari</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.ferrari.com/en-IN" class="btn btn-primary">Ferrari</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" >
  <img src="https://robbreport.com/wp-content/uploads/2020/03/aston-martin-v12-speedster-1-jpg.jpg?w=1000" class="card-img-top" alt="..." height='300px' />
  <div class="card-body">
    <h5 class="card-title">Aston martin</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.astonmartin.com/en/dealers/aston-martin-new-delhi" class="btn btn-primary">Aston</a>
  </div>
</div>
    </div>
  </div>
</div>
      </>  

    )
};

export default Bootstrap1;