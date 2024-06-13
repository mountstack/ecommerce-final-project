import { useEffect } from "react";

export const useCloseEscKey = (onClose) => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", handleClose);
    };
  }, []);
};
