import React, { Component } from "react";

export class Carousel extends Component {
  render() {
    return (
      // <!-- container for carousel -->
      <div className="container-fluid">
        <div className="row">
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="3"
              ></li>
            </ol>

            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner carousel-custom" role="listbox">
              <div className="item active">
                <img
                  src="images/brenna-huff-22Vt7JIf7ZI-unsplash.jpg"
                  alt="pizza"
                />
              </div>
              <div className="item">
                <img
                  src="images/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg"
                  alt="pizza"
                />
              </div>
            </div>

            {/* <!-- Controls --> */}
            <a
              className="left carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#carousel-example-generic"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>{" "}
        {/*<!--class=row-->*/}
      </div> //<!--container-fluid-->
    );
  }
}

export default Carousel;
