import { useEffect } from "react";
import { createPortal } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";

/**
 * @param {Object} props
 * @param {boolean} props.open
 * @param {function} props.onClose
 * @param {boolean} props.closeBtn
 * @returns {React.ReactPortal|null}
 * @param {React.ReactNode} props.children
 */

// eslint-disable-next-line react/prop-types
const BaseModal = ({ children, isOpen, onClose, closeBtn = true }) => {
  const modalRoot = document.getElementById("modal-root");

  const handleClose = () => {
    onClose((prevState) => ({ ...prevState }));
  };

  const handleKeyPress = () => {
    onClose();
  };

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <main
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center">
      <section
        onClick={(e) => e.stopPropagation()}
        className="bg-bg-main p-5 text-text-main rounded-lg relative">
        {closeBtn && (
          <button
            onClick={onClose}
            className="absolute top-1 right-1 p-2 rounded-full hover:bg-bg-soft transition-all text-2xl">
            <RxCrossCircled className="text-red-600 font-bold" />
          </button>
        )}

        <div>{children}</div>
      </section>
    </main>,
    modalRoot
  );
};

export default BaseModal;
