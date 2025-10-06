export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json(); //Convert JSON into Javascript object
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  if (!response.ok) {
    throw new Error("Failed to fetch user's places.");
  }
  const resData = await response.json();
  return resData.places;
}
