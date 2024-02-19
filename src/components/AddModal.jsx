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

export default function AddModal() {
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
        <Input></Input>
        <Label>Service</Label>
        <Input></Input>
      </CardContent>
      <CardFooter>
        <Button>Créer</Button>
        <Button variant="outline" className="ml-auto">
          Annuler
        </Button>
      </CardFooter>
    </Card>
  );
}
