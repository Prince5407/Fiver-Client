import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

const [active ,setActive]=useState(false);
const [open ,setOpen]=useState(false);//used to open oe close options class
const {pathname}=useLocation()
const isActive=()=>{

window.scrollY>0 ? setActive(true) : setActive(false);
};
//Scroll happens in Y dir then setActive become true
useEffect(()=>{
window.addEventListener("scroll",isActive); // WE generllay dont use event listener in react but here we are using window not html element so we can use it

return ()=>{
window.removeEventListener("scroll", isActive);

};
},[]);

const currentUser={ //Object is created to store info about currentusser

id:1,
username:"Nikunj",
isSeller:true

}

  return (
    <div className={active || pathname != "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiver Business</span>
          <span> Explore</span>

          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}

          {!currentUser && <button>Join</button>}

          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        <span>Gigs</span>
                      </Link>
                      <Link className="link" to="/add">
                        <span> Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    <span>Orders</span>
                  </Link>
                  <Link className="link" to="/messages">
                    <span>Messages</span>
                  </Link>
                  <Link className="link" to="/logout">
                    <span>Logout</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname != "/" && ( //When active true tabhi ye dikhega
          <>
            <hr />
            <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
            </div>
          </>
         
        ))}
        <hr />
    </div>
  );
}
//(Become a seller wala span) when currentseller empty hoga tab .isSeller check he nhi krenge sidhe become a seller likh denege pr if currente seller empty 
//nhi hua to check krenge ki kya wo seller he agr nhi he to become a seller print it mean if any value become true in optional chaining then chain will stop?


export default Navbar