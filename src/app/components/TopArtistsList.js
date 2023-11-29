import React from "react";

export default function TopArtistsList({ artists }) {
  if (!artists.length) return <p>No top artists found.</p>;

  const listStyle = {
    maxHeight: "400px",
    overflowY: "scroll",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Adjust the space between the image and the text
  };

  const imageStyle = {
    width: "60px", // Increased size
    height: "60px",
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Recent Top Artists:</h3>
      </div>
      <ul className="list-group" style={listStyle}>
        {artists.map((artist) => (
          <li
            key={artist.id}
            className="list-group-item d-flex align-items-center "
            style={listItemStyle}
          >
            <img
              src={artist.images[0]?.url || "https://via.placeholder.com/150"}
              alt={artist.name}
              style={imageStyle}
            />
            <div>
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {artist.name}
              </a>
              <p className="mb-1">Genres: {artist.genres.join(", ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
