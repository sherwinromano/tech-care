import ellipsis from "../../assets/icons/ellipsis_horizontal.svg";
import { Link } from "react-router-dom";
import type { PatientsProps } from "../../lib/types";

const PatientsList = ({ patients }: PatientsProps) => {
  return (
    <ul className="h-full flex flex-col gap-8 overflow-auto pr-4">
      {patients &&
        patients.map((patient) => {
          return (
            <li key={patient.name} className="hover:opacity-80">
              <Link
                to={`/${encodeURIComponent(patient.name)}`}
                className="flex justify-between items-center"
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
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default PatientsList;
