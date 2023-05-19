import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import Menucard from "./menucard";
import Nav from "./nav";
const unique = [
  ...new Set(
    Menu.map((curele) => {
      return curele.Category;
    })
  ),
  "All",
];
console.log(unique);
function Rest() {
  const [menudata, setdata] = useState(Menu);
  const [menulist, setlist] = useState(unique);
  const filterItem = (Category) => {
    if (Category === "All") {
      setdata(Menu);
      return;
    }
    const update = Menu.filter((curele) => {
      return curele.Category === Category;
    });
    setdata(update);
  };
  return (
    <>
      <Nav filterItem={filterItem} menulist={menulist} />
      <Menucard menudata={menudata} />
    </>
  );
}

export default Rest;
