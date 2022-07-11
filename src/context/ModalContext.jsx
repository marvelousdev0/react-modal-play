import { createContext, useCallback, useContext, useState } from "react";

const initialValue = {
  isOpen: false,
  title: "",
  handleTitle: () => {},
  handleModalOpen: () => {},
};

const ModalContext = createContext(initialValue);

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleTitle = useCallback((title) => {
    setTitle(title);
  }, []);

  const handleModalOpen = useCallback((isOpen) => {
    setIsOpen(isOpen);
  }, []);

  const value = {
    isOpen,
    title,
    handleTitle,
    handleModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider"
    );
  }
  return context;
};
