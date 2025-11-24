import { useEffect, useState } from "react";
import Navigation from "./components/header/Navigation";
import Patients from "./components/patients/Patients";
import { Outlet } from "react-router-dom";

export type PatientData = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;

  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number; levels: string };
      diastolic: { value: number; levels: string };
    };
    heart_rate: { value: number; levels: string };
    respiratory_rate: { value: number; levels: string };
    temperature: { value: number; levels: string };
  }[];

  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];

  lab_results: string[];
};

const App = () => {
  const [patients, setPatients] = useState<PatientData[] | null>(null);

  useEffect(() => {
    const getPatients = async () => {
      const authHeader = "Basic " + btoa("coalition:skills-test");
      try {
        const res = await fetch(import.meta.env.VITE_API_ENDPOINT, {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Network response was not ok");
        const result = await res.json();
        setPatients(result);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("Fetch finished");
      }
    };

    getPatients();
  }, []);

  return (
    <main className="bg-[#F6F7F8] flex flex-col gap-4 p-4 h-screen">
      <Navigation />
      <section className="flex h-full gap-3 overflow-hidden">
        {!patients ? (
          <h1>Loading patients</h1>
        ) : (
          <>
            <Patients patients={patients} />
            <Outlet context={{ patients }} />
          </>
        )}
      </section>
    </main>
  );
};

export default App;
