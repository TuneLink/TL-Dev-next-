import { useState } from "react";

export const useSpotifyTracks = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTopTracks = async (session) => {
    if (!session) {
      setError("No session available");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch top tracks");
      }

      const data = await response.json();
      setTopTracks(data.items);
    } catch (error) {
      console.error("Error fetching top tracks", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getRecommendationsBasedOnTopTracks = async (session, topTrackIds) => {
    if (!session || !topTrackIds.length) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/recommendations?seed_tracks=${topTrackIds.join(
          ","
        )}&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();
      setRecommendations(data.tracks);
    } catch (error) {
      console.error("Error fetching recommendations", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    topTracks,
    recommendations,
    isLoading,
    error,
    getTopTracks,
    getRecommendationsBasedOnTopTracks,
  };
};