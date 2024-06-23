// import { useState } from "react";

// import BaseModal from "./components/modal/BaseModal";
// import ProductTable from "./components/table/ProductTable";
import Breadcrumb from "./utills/Breadcrumb/Breadcrumb";
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <h1>Hello World</h1>
      <Breadcrumb id = '2' name = "Article" link="/article" />

      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
