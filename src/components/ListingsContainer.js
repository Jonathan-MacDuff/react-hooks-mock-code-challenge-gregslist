import ListingCard from "./ListingCard";

function ListingsContainer({ displayListings, handleDelete}) {

  return (
    <main>
      <ul className="cards">
        {displayListings.map((listing) => {
          return (
          <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
