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
import { useToast } from "./ui/use-toast";

export default function AddModal({ toggleAddModal }) {
  const [field, setField] = useState({ name: "", service: "" });
  const { toast } = useToast();

  const handleChange = (e) => {
    console.log(e.target.id);
    setField({ ...field, [e.target.id]: e.target.value });
  };

  const clearFields = () => {
    setField({ name: "", service: "" });
  };

  const createApppointment = async () => {
    try {
      const response = await fetch(
        "https://connectx-backend-406f.onrender.com/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(field),
        }
      );

      if (!response.ok) {
        toast({
          description:
            "Remplissez tous les champs pour créer une nouvelle réservation.",
        });
        return;
      }

      clearFields();
      toggleAddModal();
      toast({
        description: "Nouveau rendez-vous ajouté !",
      });
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
        <Label htmlFor="name">Nom</Label>
        <Input
          type="name"
          id="name"
          placeholder="Nom"
          autoComplete="off"
          value={field.name}
          onChange={handleChange}
        ></Input>
        <Label htmlFor="service">Prestation</Label>
        <Input
          type="service"
          id="service"
          placeholder="Prestation"
          autoComplete="off"
          value={field.service}
          onChange={handleChange}
        ></Input>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            createApppointment();
          }}
        >
          Créer
        </Button>
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
