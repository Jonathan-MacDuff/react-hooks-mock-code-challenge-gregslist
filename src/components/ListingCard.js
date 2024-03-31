import React, { useState } from "react";

function ListingCard( { listing, handleDelete } ) {

  const [like, setLike] = useState(false);
  
  function onLike() {
    setLike(true)
  };

  function onUnlike() {
    setLike(false)
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active"onClick={onUnlike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onLike}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
