type DiagnosticArr = {
  name: string;
  description: string;
  status: string;
}[];

type Diagnostic = {
  diagnostic: DiagnosticArr;
};

const Diagnostic = ({ diagnostic }: Diagnostic) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-9 h-1/2 overflow-hidden">
      <h1 className="font-bold text-2xl">Diagnostic List</h1>
      <div className="overflow-auto">
        <table className="min-w-full">
          <tr className="bg-[#F6F7F8]">
            <th className="text-sm text-center py-2">Problem/Diagnosis</th>
            <th className="text-sm text-center">Description</th>
            <th className="text-sm text-center">Status</th>
          </tr>
          {diagnostic.map((item, id) => {
            return (
              <tr key={id}>
                <td className="text-sm p-2 text-center">{item.name}</td>
                <td className="text-sm p-2 text-center">{item.description}</td>
                <td className="text-sm p-2 text-center">{item.status}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Diagnostic;
