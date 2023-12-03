import { useState } from "react";

export const useSpotify = (session) => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

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
          "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=15",
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
        console.log(data);
        setTopTracks(data.items);
        const topTrackIds = data.items.map((track) => track.id);
        console.log("Top Track IDs:", topTrackIds);
      } catch (error) {
        console.error("Error fetching top tracks", error);
      }
    }
  };

  // This function will fetch the user's top artists from Spotify.
  // as well as update the top genres based on these artists.
  const fetchTopArtists = async () => {
    if (session) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10",
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch top artists");
        }

        const data = await response.json();
        setTopArtists(data.items);
        console.log(data);
      } catch (error) {
        console.error("Error fetching top artists", error);
      }
    }
  };

  const createPlaylist = async (playlistName, trackUris) => {
    if (session) {
      try {
        // Create a new playlist
        const createPlaylistResponse = await fetch(
          `https://api.spotify.com/v1/users/${session.user.id}/playlists`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: playlistName,
              description: "My top tracks playlist",
              public: false, // Set to true if you want the playlist to be public
            }),
          }
        );

        const playlist = await createPlaylistResponse.json();

        if (!createPlaylistResponse.ok) {
          throw new Error("Failed to create playlist");
        }

        // Add tracks to the playlist
        const addTracksResponse = await fetch(
          `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              uris: trackUris,
            }),
          }
        );

        if (!addTracksResponse.ok) {
          throw new Error("Failed to add tracks to playlist");
        }

        return playlist;
      } catch (error) {
        console.error("Error creating playlist", error);
      }
    }
  };

  const fetchUserPlaylists = async () => {
    if (session) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch playlists");
        }

        const data = await response.json();
        return data.items; // Assuming the items array contains the playlists
      } catch (error) {
        console.error("Error fetching user playlists", error);
        return []; // Return an empty array in case of error
      }
    }
    return []; // Return an empty array if there is no session
  };

  const deletePlaylist = async (playlistId) => {
    if (session) {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete playlist");
        }

        return true; // Indicates successful deletion
      } catch (error) {
        console.error("Error deleting playlist", error);
        return false; // Indicates failure
      }
    }
    return false; // No session, can't delete
  };

  const updatePlaylistName = async (playlistId, newName) => {
    if (session) {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: newName,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update playlist name");
        }

        return true; // Indicates successful update
      } catch (error) {
        console.error("Error updating playlist name", error);
        return false; // Indicates failure
      }
    }
    return false; // No session, can't update
  };

  const fetchTopArtistsAndCreatePlaylist = async () => {
    if (session) {
      try {
        // Fetch top artists
        const artistResponse = await fetch(
          "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10",
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!artistResponse.ok) {
          throw new Error("Failed to fetch top artists");
        }

        const artistData = await artistResponse.json();

        // Fetch top track for each artist
        const trackUris = await Promise.all(
          artistData.items.map(async (artist) => {
            const trackResponse = await fetch(
              `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?country=US`, // Replace 'US' with the relevant country code
              {
                headers: {
                  Authorization: `Bearer ${session.accessToken}`,
                },
              }
            );

            if (!trackResponse.ok) {
              throw new Error(
                `Failed to fetch top track for artist ${artist.name}`
              );
            }

            const trackData = await trackResponse.json();
            return trackData.tracks[0].uri; // Get the URI of the top track
          })
        );

        // Use existing function to create a new playlist and add tracks
        const playlistName = "My Top Artists' Top Tracks";
        const newPlaylist = await createPlaylist(playlistName, trackUris);

        console.log("New playlist created:", newPlaylist);
      } catch (error) {
        console.error("Error in playlist creation", error);
      }
    }
  };

  return {
    likedSongs,
    fetchLikedSongs,
    topTracks,
    fetchTopTracks,
    topArtists,
    fetchTopArtists,
    createPlaylist,
    fetchUserPlaylists,
    deletePlaylist,
    updatePlaylistName,
    fetchTopArtistsAndCreatePlaylist
  };
};