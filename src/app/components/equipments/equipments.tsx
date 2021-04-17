import React, { useState } from "react";
import "./styles.scss";
import { fetchEquipments } from "../../../../src/libraries/equipments";
import { Button, Spinner, Table } from "react-bootstrap";
import Equipment from "./Equipment";

const renderEquipment = (equipment: any, index: number) => (
  <Equipment equipment={equipment} key={index} />
);

const renderEquipmentList = (equipments: any[]) => {
  if (!equipments || !Array.isArray(equipments)) return "No results...";
  return equipments.map(renderEquipment);
};

const { token } = localStorage;

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState<boolean>();

  const loadEquipments = async () => {
    setLoading(true);
    await fetchEquipments(token)
      .then((data: any) => {
        setEquipments(data?.data?.equipments);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Button className="buttonLoadEqui" onClick={loadEquipments}>
        Load equipments
      </Button>
      <Spinner animation="border" variant="primary" hidden={!loading} />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="equiTableHead">EID</th>
            <th className="equiTableHead">SN</th>
            <th className="equiTableHead">Versão</th>
            <th className="equiTableHead">Data</th>
          </tr>
        </thead>
        {renderEquipmentList(equipments)}
      </Table>
    </div>
  );
};

export default Equipments;
