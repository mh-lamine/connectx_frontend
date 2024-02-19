import { useEffect, useState } from "react";
import AddModal from "./components/AddModal";
import AppointmentsTable from "./components/AppointmentsTable";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import useFetch from "./customHooks/useFetch";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const { data, loading, error } = useFetch(
    "http://localhost:3000/appointments"
  );

  useEffect(() => {
    if (data) return setAppointments(data);
  }, [data]);

  if (loading)
    return (
      <div className="absolute top-0 left-0 w-screen h-screen bg-slate-100 flex justify-center items-center bg-opacity-90">
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Chargement
        </Button>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <div className="w-screen p-2">
      <h1 className="px-16 py-8 text-3xl">ConnectX</h1>
      <div>
        <h2 className="px-8 text-2xl">Mes prochains rendez-vous</h2>
        <AppointmentsTable appointments={appointments} />
      </div>
      <div className="w-full flex justify-center my-4">
        <Button
          variant="outline"
          onClick={() => {
            toggleAddModal(!addModal);
          }}
        >
          Ajouter un Rendez-vous
        </Button>
        {addModal && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-slate-100 flex justify-center items-center bg-opacity-90">
            {<AddModal toggleAddModal={toggleAddModal} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
