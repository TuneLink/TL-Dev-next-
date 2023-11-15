export default function processSpotifyProfile(profile) {
  console.log(profile);

  const processedProfile = {
    id: profile.id,
    name: profile.display_name,
    email: profile.email,
    // image: profile.images?.[1]?.url.height || "https://via.placeholder.com/150",
    followers: profile.followers?.total || 0,
    country: profile.country || "Unknown",
    // Add more properties as needed
  };

  // Additional processing logic can be added here
  console.log(processedProfile);
  return processedProfile;
}
