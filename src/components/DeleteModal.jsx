import { Button } from "./ui/button";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function DeleteModal({ id, toggleDeleteModal }) {
  const deleteAppointment = async () => {
    try {
      const response = await fetch(
        `https://connectx-backend-406f.onrender.com/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toggleDeleteModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Supprimer le rendez-vous ?</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Êtes-vous sûr de vouloir supprimer ce rendez-vous ?</p>
      </CardContent>
      <CardFooter>
        <Button variant='destructive' onClick={() => deleteAppointment()}>Supprimer</Button>
        <Button
          variant="outline"

          className="ml-auto"
          onClick={() => toggleDeleteModal()}
        >
          Annuler
        </Button>
      </CardFooter>
    </Card>
  );
}

DeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};
