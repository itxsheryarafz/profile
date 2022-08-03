import { logo } from "../utils/images/images";
import { arrow } from "../utils/images/images";
import { leftarrow } from "../utils/images/images";
import React from "react";
export default function Sidebar() {
  const [data, setdata] = React.useState(true);

  console.log("data is ", data);
  return (
    <>
      <div className="sidenav">
        <div className="sidebar-logo">
          <img src={logo} alt=""></img>
        </div>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={data === false ? "navdisplay" : "sidebarnav"}>
        <a style={{ color: "white" }} href="#about">
          About
        </a>
        <a style={{ color: "white" }} href="#services">
          Services
        </a>
        <a style={{ color: "white" }} href="#clients">
          Clients
        </a>
        <a style={{ color: "white" }} href="#contact">
          Contact
        </a>
      </div>
      <div className="arrowimg">
        {data === false ? (
          <button onClick={() => setdata(true)}>
            <img className="arrowbtnimg" src={leftarrow} alt=""></img>
          </button>
        ) : (
          <button onClick={() => setdata(false)}>
            <img src={arrow} alt=""></img>
          </button>
        )}
      </div>
      {
        <div className={data === true ? "maindev" : "main"}>
          <div>
            <h4>Sidebar</h4>
            <p>This sidebar is of full height (100%) and always shown.</p>
            <p>Scroll down the page to see the result.</p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
              definitiones no quo, maluisset concludaturque et eum, altera
              fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
              evertitur eum. Affert laboramus repudiandae nec et. Inciderint
              efficiantur his ad. Eum no molestiae voluptatibus.
            </p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
              definitiones no quo, maluisset concludaturque et eum, altera
              fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
              evertitur eum. Affert laboramus repudiandae nec et. Inciderint
              efficiantur his ad. Eum no molestiae voluptatibus.
            </p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
              definitiones no quo, maluisset concludaturque et eum, altera
              fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
              evertitur eum. Affert laboramus repudiandae nec et. Inciderint
              efficiantur his ad. Eum no molestiae voluptatibus.
            </p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
              definitiones no quo, maluisset concludaturque et eum, altera
              fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
              evertitur eum. Affert laboramus repudiandae nec et. Inciderint
              efficiantur his ad. Eum no molestiae voluptatibus.
            </p>
          </div>
        </div>
      }
    </>
  );
}
