import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./UI/Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

export default function AvailablePlaces({ onSelectPlace }) {
  //Fetching the available places with related states using useFetch hook
  const {
    isFetching,
    fetchedData: availablePlaces,
    setFetchedData: setAvailablePlaces,
    error,
  } = useFetch(fetchAvailablePlaces, []);


  useEffect(() => {
    if (!availablePlaces.length) return;
    //Sort the available places
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const sortedPlaces = sortPlacesByDistance(
          availablePlaces,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlaces(sortedPlaces);
      },
      () => {
        setAvailablePlaces(availablePlaces);
      }
    );
  }, [availablePlaces]);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText="Fetching place data ......"
      isLoading={isFetching}
      onSelectPlace={onSelectPlace}
    />
  );
}
