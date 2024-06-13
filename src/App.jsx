// import { useState } from "react";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <div>hello app</div>
      <Link
        className="py-2 px-4 rounded bg-bg-dark text-text-main m-10"
        to={"/dashboard"}>
        Open Modal
      </Link>
    </main>
  );
};

export default App;
