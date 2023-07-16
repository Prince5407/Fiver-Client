import React, { useState } from 'react'
import "./Gigs.scss"
import {gigs} from "../../data"
import GigCard from "../../components/gigCard/GigCard";

const Gigs= () => {

  const [open,setOpen]=useState(false);
  const [sort,setSort]=useState("sales");
   //We have used sales here bcoz in backend we are going to make an API request
   // and our query will be this sales
   //We are going to make request like /api/gigs?sort="sales" //this is just example 
const reSort=(type)=>{
setSort(type)
setOpen(false)

}

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN > </span>
        <h1>AI ARTISTS</h1>
        <p>
          Explore the boundary of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" />
            <input type="number" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {" "}
              {sort == "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs