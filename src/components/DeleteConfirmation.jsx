import { useEffect, useState } from "react";
import ProgressBar from "./UI/ProgressBar";

const Timer = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel, placeName }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove {placeName} place?</p>
      <div id="modal-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={Timer} />
    </div>
  );
}
