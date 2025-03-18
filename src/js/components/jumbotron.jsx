import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron mt-5">
      <div className="container d-flex flex-column jumbotron1 mb-2">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p className="lead">Tranquilo, poco a poco lo vas a lograr.</p>
        <div>
          <a
            href="https://www.google.com"
            class="btn btn-primary mb-4 text-lhite"
          >
            Go to Google
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
