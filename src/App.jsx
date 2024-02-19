import { useState } from "react";
import AddModal from "./components/AddModal";
import AppointmentsTable from "./components/AppointmentsTable";
import { Button } from "@/components/ui/button";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-screen p-2">
      <h1 className="px-16 py-8 text-3xl">ConnectX</h1>
      <div>
        <h2 className="px-8 text-2xl">Mes prochains rendez-vous</h2>
        <AppointmentsTable />
      </div>
      <div className="w-full flex justify-center my-4">
        <Button
          variant="outline"
          onClick={() => {
            toggleModal(!modal);
          }}
        >
          Ajouter un Rendez-vous
        </Button>
        {modal && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-slate-100 flex justify-center items-center bg-opacity-90">
            {<AddModal toggleModal={toggleModal} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
