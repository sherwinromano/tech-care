import download from "../../assets/icons/download.svg";

const LabResult = ({ lab_results }: { lab_results: string[] }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-9 h-1/2 overflow-hidden">
      <h1 className="font-bold text-2xl">Lab Results</h1>
      <ul className="flex flex-col gap-1 overflow-auto">
        {lab_results.map((item, id) => {
          return (
            <li className="flex justify-between items-center p-4" key={id}>
              <p className="text-sm">{item}</p>
              <img src={download} alt="Download icon" width={16} height={16} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LabResult;
