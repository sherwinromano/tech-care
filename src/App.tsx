import { useEffect, useState } from "react";
import Navigation from "./components/header/Navigation";
import { Outlet } from "react-router-dom";
import Loader from "./components/ui/Loader";
import type { PatientData } from "./lib/types";
import Patients from "./components/patients/Patients";

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
    <main className="bg-[#F6F7F8] flex flex-col gap-4 p-4 xs:h-auto lg:h-screen">
      <Navigation patients={patients} />
      <section className="flex flex-1 gap-3 overflow-hidden">
        {!patients ? (
          <Loader />
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
