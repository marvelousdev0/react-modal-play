import Modal from "../components/Modal/Modal";
import { useModalContext } from "../context/ModalContext";

export default function Home() {
  const { handleTitle, handleModalOpen } = useModalContext();
  return (
    <div>
      <button
        onClick={() => {
          handleTitle("My Modal");
          handleModalOpen(true);
        }}
      >
        Show Modal
      </button>
      <Modal>
        <p>This is modal body</p>
      </Modal>
    </div>
  );
}
