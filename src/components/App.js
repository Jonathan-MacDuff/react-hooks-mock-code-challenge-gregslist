import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  
  const [search, setSearch] = useState("");

  const [displayListings, setDisplayListings] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (search !== "") {
      setDisplayListings(listings.filter((listing) => listing.description === search))
    } else (setDisplayListings(listings))
    setSearch("")
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => {
      setListings(data);
      setDisplayListings(data);
    })
    .catch((e) => console.error(e))
  }, []);

  function handleDelete(item) {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      setListings((prevListings) => prevListings.filter((listing) => listing.id !== item.id ))
    })
    .catch((e) => console.error(e))
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
      <ListingsContainer displayListings={displayListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
