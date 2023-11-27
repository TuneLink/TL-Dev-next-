// This hook will handle fetching liked songs from Spotify.
// It will manage the state and logic related to the Spotify API.

import { useState } from "react";

export const useSpotify = (session) => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  const fetchLikedSongs = async () => {
    if (session) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/tracks?limit=10",
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
      }
    }
  };

  return { likedSongs, fetchLikedSongs, topTracks, fetchTopTracks };
};
