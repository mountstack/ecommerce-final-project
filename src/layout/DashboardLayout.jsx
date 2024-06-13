import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuModal from "../components/modal/MenuModal";
import DashboardNav from "../components/dashboard/DashboardNav";
import DashboardMenu from "../components/dashboard/DashboardMenu";
import MenuResponsive from "../components/dashboard/MenuResponsive";

const DashboardLayout = () => {
  const [isTitle, setIsTitle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-bg-main text-text-main">
      <DashboardNav
        isIcon={isTitle}
        onOpen={() => setIsOpen(true)}
        onToggle={() => setIsTitle(!isTitle)}
      />

      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuResponsive />
      </MenuModal>

      <section className="flex">
        <DashboardMenu isTitle={isTitle} />
        <section className="ps-4 w-full">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
