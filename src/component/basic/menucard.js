import React from "react";

function menucard({ menudata }) {
  return (
    <>
      <section className="main-card--cointainer">
        {menudata.map((curele) => {
          return (
            <>
              <div className="card-container" key={curele.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curele.id}
                    </span>
                    <span className="card-author subtle">
                      {curele.Category}
                    </span>
                    <h2 className="card-title">{curele.name}</h2>
                    <span className="card-discription subtel">
                      {curele.discription}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curele.image} alt="img" />
                  <span className="card-tag subtle">Order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default menucard;
