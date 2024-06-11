import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardNav from "../../components/dashboard/DashboardNav";
import DashboardMenu from "../../components/dashboard/DashboardMenu";

const DashboardPage = () => {
  const [isTitle, setIsTitle] = useState(true);
  return (
    <main className="bg-bg-main text-text-main">
      <DashboardNav onToggle={() => setIsTitle(!isTitle)} isIcon={isTitle} />
      <section className="flex">
        <DashboardMenu isTitle={isTitle} />
        <section className="p-5 w-full">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default DashboardPage;
