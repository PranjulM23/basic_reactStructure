import React from "react";

function Nav({ filterItem, menulist }) {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {menulist.map((curele) => {
          return (
            <>
              <button
                className="btn-group__item"
                onClick={() => filterItem(curele)}
              >
                {curele}
              </button>
            </>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
