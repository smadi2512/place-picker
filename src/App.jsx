import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/UI/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

//Get the stored places from localStorage
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [modalInfo, setModalInfo] = useState({
    open: false,
    type: "",
    message: "",
  });
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  /*useEffect(() => {
    setAvailablePlaces(AVAILABLE_PLACES);
  }, []);*/

  //Sort available places according to user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    },
    () => {
      setAvailablePlaces(AVAILABLE_PLACES);
    }
  );
  }, []);

  //Open the delete confirmation modal
  function handleStartRemovePlace(id) {
    selectedPlace.current = id;
    const place = pickedPlaces.find((place) => place.id === id);
    setModalInfo({
      open: true,
      type: "delete",
      message: place.title,
    });
  }

  //Close the dialog modal
  function handleCloseModal() {
    setModalInfo({
      open: false,
      type: "",
      message: "",
    });
  }

  //Select a place to add to the picked places
  function handleSelectPlace(id) {
    const place = AVAILABLE_PLACES.find((place) => place.id === id);
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      return [place, ...prevPickedPlaces];
    });
    //Fetch our stored IDs from localStorage
    const storedIDs = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIDs.indexOf(id) === -1) {
      //Set our new stored IDs
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIDs])
      );
      setModalInfo({
        open: true,
        type: "success",
        message: `${place.title} added successfully!`,
      });
    } else {
      setModalInfo({
        open: true,
        type: "warning",
        message: `${place.title} already added!`,
      });
    }
  }

  //Remove a place from the picked places
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    const storedIDs = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIDs.filter((id) => id !== selectedPlace.current))
    );
    handleCloseModal();
  }, []);

  return (
    <>
      <Modal open={modalInfo.open} onClose={handleCloseModal}>
        {modalInfo.type === "delete" && (
          <DeleteConfirmation
            onCancel={handleCloseModal}
            onConfirm={handleRemovePlace}
            placeName={modalInfo.message}
          />
        )}
        {(modalInfo.type === "warning" || modalInfo.type === "success") && (
          <>
            <h2>{modalInfo.message}</h2>
            <div id="modal-actions">
              <button onClick={handleCloseModal} className="button-text">
                Close
              </button>
            </div>
          </>
        )}
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={"Sorting Places by distacne......."}
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
