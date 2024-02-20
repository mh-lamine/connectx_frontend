import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function AppointmentsTable({ appointments }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState("");

  const toggleDeleteModal = (id) => {
    setDeleteModal(!deleteModal);
    id && setId(id);
  };

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nom</TableHead>
            <TableHead>Prestation</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Prix</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => {
            // console.log(moment(appointment.date).format("DD/MM/YYYY"));
            return (
              <TableRow
                key={appointment._id}
                onClick={() => toggleDeleteModal(appointment._id)}
              >
                <TableCell className="font-medium">
                  {appointment.name}
                </TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell className="text-right">20.00€</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {deleteModal && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-slate-100 flex justify-center items-center bg-opacity-90">
          <DeleteModal id={id} toggleDeleteModal={toggleDeleteModal} />
        </div>
      )}
    </div>
  );
}

AppointmentsTable.propTypes = {
  appointments: PropTypes.array.isRequired,
};
