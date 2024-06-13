import { useState } from "react";
import BaseModal from "../../components/modal/BaseModal";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="w-full h-[700px] bg-teal-500 rounded">
          <button
            className="py-2 px-4 rounded bg-bg-dark text-text-main m-10"
            onClick={() => setIsModalOpen(true)}>
            Open Modal
          </button>
          <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h1>Modal Content</h1>
            <p>This is the content inside the modal</p>
            <p>
              You can pass any <i>JSX</i>
            </p>
            <h1>Modal Content</h1>
            <p>This is the content inside the modal</p>
            <p>
              You can pass any <i>JSX</i>
            </p>
          </BaseModal>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
