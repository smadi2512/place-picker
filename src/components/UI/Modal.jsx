import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      className="modal"
      ref={dialogRef}
      onClose={onClose}
      aria-modal="true"
      role="dialog"
    >
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
