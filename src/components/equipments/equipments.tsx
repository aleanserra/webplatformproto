import React, { useState } from "react";
import "./styles.scss";
import { fetchEquipments } from "../../../src/libraries/equipments";
import { Button, Spinner } from "react-bootstrap";
import Equipment from "./Equipment";

const renderEquipment = (equipment: any, index: number) => (
  <Equipment equipment={equipment} key={index} />
);

const renderEquipmentList = (equipments: any[]) => {
  if (!equipments || !Array.isArray(equipments)) return "No Equipments, 🤬!";
  return equipments.map(renderEquipment);
};
const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState<boolean>();

  const loadEquipments = async () => {
    setLoading(true);
    fetchEquipments(localStorage.token)
      .then((data: any) => {
        setEquipments(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {renderEquipmentList(equipments)}
      <Button onClick={loadEquipments}>Load equipments</Button>
      <Spinner animation="border" variant="primary" hidden={!loading} />
    </div>
  );
};

export default Equipments;
