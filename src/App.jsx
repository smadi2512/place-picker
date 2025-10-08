import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/UI/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { updateUserPlaces, fetchUserPlaces } from "./http.js";
import Error from "./components/UI/Error.jsx";

function App() {
  const selectedPlace = useRef();
  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const [modal, setModal] = useState({
    open: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    async function getUserPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setUserPlaces([]);
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
      } finally {
        setIsFetching(false);
      }
    }
    getUserPlaces();
  }, []);

  //Modal helpers
  const openModal = (type, message) => setModal({ open: true, type, message });
  const closeModal = () => setModal({ open: false, type: "", message: "" });

  //Open the delete confirmation modal
  function handleStartRemovePlace(place) {
    selectedPlace.current = place;
    openModal("delete", place.title);
  }

  //Add the selected place
  async function handleSelectPlace(selectedPlaceItem) {
    //Check if the selected places is already exists
    if (userPlaces.some((place) => place.id === selectedPlaceItem.id)) {
      openModal("warning", `${selectedPlaceItem.title} already added!`);
      return;
    }
    const prevPlaces = [...userPlaces];
    const updatedPlaces = [selectedPlaceItem, ...userPlaces];
    setUserPlaces(updatedPlaces); // Optimistically update state

    //Send user places to backend
    try {
      await updateUserPlaces(updatedPlaces);
      openModal("success", `${selectedPlaceItem.title} added successfully!`);
    } catch (error) {
      setUserPlaces(prevPlaces); // rollback
      openModal("error", error.message || "Failed to update places.");
    }
  }

  //Remove a place from the picked places
  const handleRemovePlace = useCallback(async () => {
    const prevPlaces = [...userPlaces];
    const updatedPlaces = userPlaces.filter(
      (place) => place.id !== selectedPlace.current.id
    );
    setUserPlaces(updatedPlaces);// Optimistically update state
    try {
      await updateUserPlaces(updatedPlaces);
      openModal(
        "success",
        `${selectedPlace.current.title} removed successfully!`
      );
    } catch (error) {
      setUserPlaces(prevPlaces);// rollback
      openModal("error", error.message || "Failed to delete a place.");
    }
    closeModal();
  }, [userPlaces]);

  return (
    <>
      <Modal open={modal.open} onClose={closeModal}>
        {modal.type === "delete" && (
          <DeleteConfirmation
            onCancel={closeModal}
            onConfirm={handleRemovePlace}
            placeName={modal.message}
          />
        )}
        {modal.type === "error" && (
          <Error
            title="An error occurred!"
            message={modal.message}
            onConfirm={closeModal}
          />
        )}
        {(modal.type === "success" || modal.type === "warning") && (
          <>
            <h2>{modal.message}</h2>
            <div id="modal-actions">
              <button onClick={closeModal} className="button-text">
                Close
              </button>
            </div>
          </>
        )}
      </Modal>
      <header>
        <img src={logoImg} alt="Stylized globe" /> <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="An error occurred!" message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fetching your place data ....."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}
export default App;
