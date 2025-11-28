import ellipsis from "../../assets/icons/ellipsis_horizontal.svg";
import { NavLink } from "react-router-dom";
import type { PatientsProps } from "../../lib/types";

const PatientsList = ({ patients }: PatientsProps) => {
  return (
    <ul className="h-full flex flex-col gap-8 overflow-auto pr-3">
      {patients &&
        patients.map((patient) => {
          return (
            <li key={patient.name} className="hover:opacity-80">
              <NavLink
                to={`/${encodeURIComponent(patient.name)}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center justify-between p-2 bg-[#F5F5F5] rounded-lg"
                    : "flex items-center justify-between p-2"
                }
              >
                <div className="flex items-center gap-3">
                  <img
                    src={patient.profile_picture}
                    alt="Patient's profile image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="font-bold text-sm">{patient.name}</p>
                    <p className="text-[#707070] text-sm">
                      {patient.gender}, <span>{patient.age}</span>
                    </p>
                  </div>
                </div>
                <img
                  src={ellipsis}
                  alt="Ellipsis icon"
                  width={15}
                  height={15}
                />
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default PatientsList;
