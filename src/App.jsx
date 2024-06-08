import { useState } from "react";

import BaseModal from "./components/modal/BaseModal";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <section className="text-center">
        <h1 className="text-3xl font-semibold">Vite + React</h1>
        <div className="card">
          <button
            className="px-5 py-1 text-lg rounded-sm bg-green-300 text-black"
            onClick={() => setCount((count) => count + 1)}>
            count is <b>{count}</b>
          </button>
        </div>
      </section>
      <hr />

      <div>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

        <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h1>Modal Content</h1>
          <p>This is the content inside the modal</p>
          <p>
            You can pass any <i>JSX</i>
          </p>
        </BaseModal>
      </div>

      <hr />
    </main>
  );
}

export default App;
