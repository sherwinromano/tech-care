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

export type PatientsProps = {
  patients: PatientData[] | null;
};

export type DiagnosisArr = {
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

export type DiagnosisProps = {
  diagnosis: DiagnosisArr;
};

export type DiagnosticArr = {
  name: string;
  description: string;
  status: string;
}[];

export type DiagnosticProps = {
  diagnostic: DiagnosticArr;
};
