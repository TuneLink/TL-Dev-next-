import { useState, useEffect } from "react";

export const useSpotify = (session) => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [recommendedSongs, setRecommendedSongs] = useState([]);

  const fetchLikedSongs = async () => {
    if (session) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/tracks?limit=5",
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch liked songs");
        }

        const data = await response.json();
        setLikedSongs(data.items.map((item) => item.track));
      } catch (error) {
        console.error("Error fetching liked songs", error);
      }
    }
  };

  const fetchTopTracks = async () => {
    if (session) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
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
      }
    }
  };

  useEffect(() => {
    if (topTracks.length > 0) {
      fetchRecommendedSongs();
    }
  }, [topTracks]);

  const fetchRecommendedSongs = async () => {
    if (session) {
      try {
        const topTrackIds = topTracks.map((track) => track.id).join(',');

        const response = await fetch(
          `https://api.spotify.com/v1/recommendations?seed_tracks=${topTrackIds}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recommended songs");
        }

        const data = await response.json();
        setRecommendedSongs(data.tracks);
      } catch (error) {
        console.error("Error fetching recommended songs", error);
      }
    }
  };

  return { likedSongs, fetchLikedSongs, topTracks, fetchTopTracks, recommendedSongs, fetchRecommendedSongs };
};