import lungs from "../../assets/icons/respiratory.svg";
import temperature from "../../assets/icons/temperature.svg";
import heart from "../../assets/icons/heart_bpm.svg";
import chevron_up from "../../assets/icons/chevron_up.svg";
import chevron_down from "../../assets/icons/chevron_down.svg";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

type DiagnosisArr = {
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

type DiagnosisProps = {
  diagnosis: DiagnosisArr;
};

const Diagnosis = ({ diagnosis }: DiagnosisProps) => {
  const labels = diagnosis.map((item) => `${item.month}, ${item.year}`);
  const systolicData = diagnosis.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = diagnosis.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#C084FC",
        backgroundColor: "#C084FC50",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#818CF8",
        backgroundColor: "#818CF850",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { family: "Inter", size: 12 },
        },
      },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: false, ticks: { stepSize: 20 } },
    },
  };

  const latest = diagnosis.at(-1);

  return (
    <section className="bg-white rounded-2xl p-4 flex flex-col gap-6 h-full w-full overflow-hidden xs:order-1 lg:order-0">
      <h1 className="font-bold text-2xl">Diagnosis History</h1>
      <div className="flex flex-col overflow-auto gap-2 pr-2">
        <div className="bg-purple-50 rounded-xl p-4 flex flex-col gap-4 h-fit">
          <div className="flex flex-col basis-full gap-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-gray-800">
                Blood Pressure
              </h2>
              <span className="text-sm text-gray-500">Last 6 months</span>
            </div>
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="flex gap-8 self-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400" />
                <span className="font-semibold text-[#072635]">Systolic</span>
              </div>
              <p className="text-2xl font-semibold text-[#072635]">
                {latest?.blood_pressure.systolic.value}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={chevron_up}
                  alt="Chevron up icon"
                  width={10}
                  height={10}
                />
                <p className="text-sm text-[#072635]">
                  {latest?.blood_pressure.systolic.levels}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-400" />
                <span className="font-semibold text-[#072635]">Diastolic</span>
              </div>
              <p className="text-2xl font-semibold text-[#072635]">
                {latest?.blood_pressure.diastolic.value}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={chevron_down}
                  alt="Chevron down icon"
                  width={10}
                  height={10}
                />
                <p className="text-sm text-[#072635]">
                  {latest?.blood_pressure.diastolic.levels}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-2 h-fit">
          <VitalsCard
            bg_color="bg-[#E0F3FA]"
            image_source={lungs}
            image_alt="Lungs icon"
            label="Respiratory rate"
            value={latest?.respiratory_rate.value}
            levels={latest?.respiratory_rate.levels}
          />
          <VitalsCard
            bg_color="bg-[#FFE6E9]"
            image_source={temperature}
            image_alt="Temperature icon"
            label="Temperature"
            value={latest?.temperature.value}
            levels={latest?.temperature.levels}
          />

          <VitalsCard
            bg_color="bg-[#FFE6E9]"
            image_source={heart}
            image_alt="Heart rate icon"
            label="Heart rate"
            value={latest?.heart_rate.value}
            levels={latest?.heart_rate.levels}
          />
        </div>
      </div>
    </section>
  );
};

const VitalsCard = ({
  bg_color,
  image_source,
  image_alt,
  label,
  value,
  levels,
}: {
  bg_color: string;
  image_source: string;
  image_alt: string;
  label: string;
  value: number | undefined;
  levels: string | undefined;
}) => {
  return (
    <div
      className={`${bg_color} flex flex-col items-center justify-between rounded-xl p-4 h-auto flex-1`}
    >
      <div className="flex items-center flex-col">
        <img
          className="xs:size-18 sm:size-min"
          src={image_source}
          alt={image_alt}
          width={100}
          height={100}
        />
        <div className="flex flex-col items-center mt-4">
          <p className="font-medium text-base text-[#072635]">{label}</p>

          <p className="font-bold  text-2xl text-[#07263]">
            {label === "Respiratory rate" || label === "Heart rate"
              ? `${value} bpm`
              : `${value} °F`}
          </p>
        </div>
      </div>
      {label === "Heart rate" ? (
        <p className="xs:text-xs sm:text-sm text-[#07263] mt-3.5 flex items-center gap-2">
          <img
            src={chevron_down}
            alt="Chevron down icon"
            width={10}
            height={10}
          />
          <span>{levels}</span>
        </p>
      ) : (
        <p className="xs:text-xs sm:text-sm text-[#07263] mt-3.5">
          <span>{levels}</span>
        </p>
      )}
    </div>
  );
};

export default Diagnosis;
