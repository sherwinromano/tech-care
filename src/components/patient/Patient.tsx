import calendar from "../../assets/icons/calendar_birth.svg";
import phone from "../../assets/icons/phone.svg";
import gender_female from "../../assets/icons/female.svg";
import gender_male from "../../assets/icons/male.svg";
import shield from "../../assets/icons/shield.svg";

import { useParams, useOutletContext } from "react-router-dom";
import type { PatientData } from "../../App";
import Diagnostic from "./Diagnostic";
import Diagnosis from "./Diagnosis";
import ProfileInfo from "./ProfileInfo";
import LabResult from "./LabResult";

type OutletContext = {
  patients: PatientData[];
};

const Patient = () => {
  const { id } = useParams();
  const { patients } = useOutletContext<OutletContext>();

  if (!patients) return <p className="p-4">Loading...</p>;

  const patient = patients.find(
    (patient) =>
      patient.name.toLowerCase() === decodeURIComponent(id || "").toLowerCase()
  );

  if (!patient) return <p className="p-4">Patient not found.</p>;

  return (
    <section className="flex w-full h-full basis-full gap-3">
      <section className="flex flex-col w-full gap-3">
        <Diagnosis diagnosis={patient.diagnosis_history} />
        <Diagnostic diagnostic={patient.diagnostic_list} />
      </section>
      <section className="flex flex-col w-[40%] gap-3 h-full">
        <div className="bg-white rounded-2xl p-4 flex flex-col h-1/2 w-full overflow-hidden">
          <div className="flex flex-col items-center gap-4 self-center">
            <img
              className="bg-center"
              src={patient.profile_picture}
              alt="Patient profile picture"
              width={100}
              height={100}
            />
            <p className="font-bold text-lg">{patient.name}</p>
          </div>
          <ul className="flex flex-col gap-6 mt-8 overflow-auto">
            <ProfileInfo
              image_source={calendar}
              image_alt="Calendar icon"
              label="Date of Birth"
              info={patient.date_of_birth}
            />
            <ProfileInfo
              image_source={
                patient.gender === "Female" ? gender_female : gender_male
              }
              image_alt="Gender icon"
              label="Gender"
              info={patient.gender}
            />
            <ProfileInfo
              image_source={phone}
              image_alt="Phone icon"
              label="Contact Info"
              info={patient.phone_number}
            />
            <ProfileInfo
              image_source={phone}
              image_alt="Phone icon"
              label="Emergency Contact"
              info={patient.emergency_contact}
            />
            <ProfileInfo
              image_source={shield}
              image_alt="Shield icon"
              label="Insurance Provider"
              info={patient.insurance_type}
            />
            <button className="bg-[#01F0D0] py-2.5 px-10 text-sm font-bold rounded-[40px] mt-10 self-center cursor-pointer">
              Show All Information
            </button>
          </ul>
        </div>
        <LabResult lab_results={patient.lab_results} />
      </section>
    </section>
  );
};

export default Patient;
