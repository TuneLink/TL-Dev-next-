import React, { useEffect } from "react";
import { useSpotify } from "../hooks/useSpotify"; // Adjust the import path as needed
import PropTypes from "prop-types"; // Add this import statement


// This component will be responsible for displaying the user's top tracks.
const TopTracks = ({ session }) => {
  const { topTracks, fetchTopTracks } = useSpotify(session);

  useEffect(() => {
    fetchTopTracks();
  }, [fetchTopTracks]);

  // If the top tracks haven't been fetched yet, display a loading message.
  if (topTracks.length === 0) {
    return <div>Loading top tracks...</div>;
  }
  // Otherwise, display the top tracks.
  return (
    <div>
      <h3>Your Top 5 Tracks from the Last 30 Days</h3>
      <ol> {/* Ordered list */}
        {topTracks.map((track, index) => (
          <li key={index}> {/* List item */}
            <strong>{track.name}</strong> by{" "} {/* Bolded track name */}
            {track.artists.map((artist) => artist.name).join(", ")} {/* Artist(s) */}
            <br />
            Album: {track.album.name}
            <br />
            <img src={track.album.images[2].url} alt={track.name} height="60" />
          </li>
        ))}
      </ol>
    </div>
  );
};

// Add this prop type
TopTracks.propTypes = {
  session: PropTypes.object.isRequired,
};

export default TopTracks;
