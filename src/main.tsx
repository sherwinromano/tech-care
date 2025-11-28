import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Patient from "./components/patient/Patient.tsx";
import NoSelection from "./components/ui/NoSelection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<NoSelection />} />
          <Route path="/:id" element={<Patient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
