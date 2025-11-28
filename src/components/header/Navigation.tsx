import { Link } from "react-router-dom";
import logo from "../../assets/icons/testlogo.svg";
import bars from "../../assets/icons/bars-3.svg";
import xMark from "../../assets/icons/x-mark.svg";
import User from "./User";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import PatientsList from "../ui/PatientsList";
import type { PatientsProps } from "../../lib/types";

const Navigation = ({ patients }: PatientsProps) => {
  return (
    <header className="flex items-center justify-between py-3">
      <Link to="/">
        <img src={logo} alt="Tech care logo" height={150} width={150} />
      </Link>
      <User />
      <Drawer direction="right">
        <DrawerTrigger className="xs:block lg:hidden">
          <button className="xs:grid lg:hidden place-items-center">
            <img src={bars} alt="Bars icon" height={24} width={24} />
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-5 gap-4">
          <DrawerHeader className="flex-row items-center justify-between px-0 py-2">
            <h2 className="font-bold xs:text-[1.125rem] md:text-2xl">
              Patients
            </h2>
            <DrawerClose>
              <button className="grid place-items-center">
                <img src={xMark} alt="X mark icon" height={24} width={24} />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <PatientsList patients={patients} />
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navigation;
