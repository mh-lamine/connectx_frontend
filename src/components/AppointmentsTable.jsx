import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

export default function AppointmentsTable() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const response = await fetch("http://localhost:3000/appointments");
    const data = await response.json();
    setAppointments(data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

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
            return (
              <TableRow key={appointment._id}>
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
    </div>
  );
}
