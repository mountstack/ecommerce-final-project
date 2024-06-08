import { useEffect } from "react";
import { createPortal } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {boolean} props.showCrossBtn
 * @returns {React.ReactPortal|null}
 */

// eslint-disable-next-line react/prop-types
const BaseModal = ({ children, isOpen, onClose, showCrossBtn = true }) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const onCloseEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", onCloseEscapeKey);

    return () => document.body.removeEventListener("keydown", onCloseEscapeKey);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <main className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center">
      <section className="bg-white p-5 rounded-lg max-w-lg w-full relative">
        {showCrossBtn && (
          <button
            onClick={onClose}
            className="absolute top-1 right-1 p-2 rounded-full hover:bg-gray-200 transition-all text-2xl">
            <RxCrossCircled className="text-red-600 font-bold" />
          </button>
        )}
        {children}
      </section>
    </main>,
    modalRoot
  );
};

export default BaseModal;
