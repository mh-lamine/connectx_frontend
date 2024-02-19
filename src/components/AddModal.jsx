import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import PropTypes from "prop-types";

export default function AddModal({toggleAddModal}) {
  const [field, setField] = useState({ name: "", service: "" });

  const handleChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  const clearFields = () => {
    setField([]);
  }

  const createApppointment = async () => {
    try {
      const response = await fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(field),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      clearFields();
      toggleAddModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Réservation</CardTitle>
        <CardDescription>
          Remplissez tous les champs pour créer une nouvelle réservation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label>Nom</Label>
        <Input name="name" value={field.name} onChange={handleChange}></Input>
        <Label>Service</Label>
        <Input
          name="service"
          value={field.service}
          onChange={handleChange}
        ></Input>
      </CardContent>
      <CardFooter>
        <Button onClick={() => createApppointment()}>Créer</Button>
        <Button
          variant="outline"
          className="ml-auto"
          onClick={() => {
            toggleAddModal();
          }}
        >
          Annuler
        </Button>
      </CardFooter>
    </Card>
  );
}

AddModal.propTypes = {
  toggleAddModal: PropTypes.func.isRequired,
};