import React, { useEffect, useState } from "react";
import { useSpotify } from "../../hooks/useSpotify"; // Adjust the import path as needed
import PropTypes from "prop-types";

const TopArtistsPlaylistCreator = ({ session }) => {
  const { topArtists, fetchTopArtists, fetchTopArtistsAndCreatePlaylist } =
    useSpotify(session);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (session && !isFetched) {
      fetchTopArtists();
      setIsFetched(true);
    }
  }, [session, isFetched, fetchTopArtists]);

  const listStyle = {
    maxHeight: "400px",
    overflowY: "scroll",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const imageStyle = {
    width: "60px",
    height: "60px",
  };

  if (topArtists.length === 0) {
    return <div>Loading top artists...</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Recommended Artists</h3>
        <button
          onClick={() => fetchTopArtistsAndCreatePlaylist()}
          className="btn btn-primary"
        >
          Create Playlist
        </button>
      </div>
      <ul className="list-group list-group-flush" style={listStyle}>
        {topArtists.map((artist, index) => (
          <li key={index} className="list-group-item" style={listItemStyle}>
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
              <p className="mb-1">Popularity: {artist.popularity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TopArtistsPlaylistCreator.propTypes = {
  session: PropTypes.object.isRequired,
};

export default TopArtistsPlaylistCreator;
