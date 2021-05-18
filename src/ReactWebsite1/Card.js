import React from "react";

const Card = (props) => {
  return (
    <>
    
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgs} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{props.titles}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href='www.youtube.com'  className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            
    </>
  );
};

export default Card;
