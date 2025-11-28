import search from "../../assets/icons/search.svg";
import type { PatientsProps } from "../../lib/types";
import PatientsList from "../ui/PatientsList";

const Patients = ({ patients }: PatientsProps) => {
  return (
    <section className="bg-white xs:hidden lg:flex flex-col gap-10 rounded-2xl p-4 basis-[30%] h-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Patients</h1>
        <img src={search} alt="Search icon" width={16} height={16} />
      </div>
      <PatientsList patients={patients} />
    </section>
  );
};

export default Patients;
