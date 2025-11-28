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

  const patient = patients.find(
    (patient) =>
      patient.name.toLowerCase() === decodeURIComponent(id || "").toLowerCase()
  );

  if (!patient) return <p className="p-4">No patient.</p>;

  return (
    <section className="flex flex-col xs:w-full lg:basis-full gap-3 lg:overflow-auto lg:pr-2 scrollbar-hide">
      <section className="flex xs:flex-col lg:flex-row gap-3 xs:h-dvh lg:h-1/2">
        <Diagnosis diagnosis={patient.diagnosis_history} />
        <section className="bg-white rounded-2xl p-4 flex xs:flex-col sm:flex-row lg:flex-col h-full xs:w-full lg:w-1/2 overflow-hidden">
          <div className="flex xs:flex-row sm:flex-col items-center gap-4 xs:self-start  md:self-start lg:self-center">
            <img
              className="bg-center"
              src={patient.profile_picture}
              alt="Patient profile picture"
              width={100}
              height={100}
            />
            <p className="font-bold text-lg">{patient.name}</p>
          </div>
          <ul className="flex flex-col gap-6 xs:mt-8 md:mt-0 md:pt-4 lg:mt-8 lg:pt-0 overflow-auto h-full basis-full sm:ml-8 lg:ml-0">
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
        </section>
      </section>
      <section className="flex xs:flex-col lg:flex-row gap-3 xs:h-dvh lg:h-1/2">
        <Diagnostic diagnostic={patient.diagnostic_list} />
        <LabResult lab_results={patient.lab_results} />
      </section>
    </section>
  );
};

export default Patient;
