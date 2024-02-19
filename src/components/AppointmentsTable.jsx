import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PropTypes from "prop-types";

export default function AppointmentsTable({appointments}) {
  
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
              <TableRow key={appointment._id} >
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

AppointmentsTable.propTypes = {
  appointments: PropTypes.array.isRequired,
};