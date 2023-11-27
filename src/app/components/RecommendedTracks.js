import React, { useEffect } from "react";
import { useSpotify } from "../hooks/useSpotify"; // Adjust the import path as needed
import PropTypes from "prop-types";

const RecommendedTracks = ({ session }) => {
  const { topTracks, fetchTopTracks, recommendedSongs, fetchRecommendedSongs } = useSpotify(session);

  useEffect(() => {
    fetchTopTracks();
  }, [fetchTopTracks]);

  useEffect(() => {
    if (topTracks.length > 0) {
      fetchRecommendedSongs();
    }
  }, [topTracks, fetchRecommendedSongs]);

  // If the top tracks haven't been fetched yet, display a loading message.
  if (recommendedSongs.length === 0) {
    return <div>Loading recommendations...</div>;
  }
  // Otherwise, display the top tracks.
  return (
    <div>
      <h3>Your recommendations</h3>
      <ol> {/* Ordered list */}
        {recommendedSongs.map((track, index) => (
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
RecommendedTracks.propTypes = {
  session: PropTypes.object.isRequired,
};

export default RecommendedTracks;
