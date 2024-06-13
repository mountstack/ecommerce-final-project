import { createPortal } from "react-dom";
import { useCloseEscKey } from "../../hooks/useCloseEscKey";
import { RxCross1 } from "react-icons/rx";

const MenuModal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");

  const handleClose = () => {
    onClose((prevState) => ({ ...prevState }));
  };

  useCloseEscKey(onClose);

  if (!isOpen) return null;

  return createPortal(
    <main
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-65">
      <section
        onClick={(e) => e.stopPropagation()}
        className={`bg-bg-main p-5 text-text-main relative flex justify-start h-screen transition-all 
        duration-500 ease-in-out w-[240px] sm:w-[280px] md:w-[320px]`}>
        <button
          className="absolute top-1 right-1 p-2 rounded-full hover:bg-bg-soft transition-all text-2xl"
          onClick={onClose}>
          <RxCross1 />
        </button>
        <div className="w-full">{children}</div>
      </section>
    </main>,
    modalRoot
  );
};

export default MenuModal;
