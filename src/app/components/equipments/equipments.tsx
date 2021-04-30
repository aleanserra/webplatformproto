import React, { useEffect, useState } from "react";
import "./styles.scss";
import { fetchEquipments } from "../../../../src/libraries/equipments";
import { Button, Spinner, Table } from "react-bootstrap";
import Equipment from "./Equipment";
import {
  DataGrid,
  GridRowId,
  GridRowsProp,
  GridColDef,
} from "@material-ui/data-grid";

interface EquipmentProps {
  sn: string;
  eid: number;
}

interface EquipmentsProps {
  equipment: EquipmentProps[];
  softwareVersion: string;
}

const renderEquipment = (equipment: any, index: number) => (
  <Equipment equipment={equipment} key={index} />
);

const renderEquipmentList = (equipments: any[]) => {
  if (!equipments || !Array.isArray(equipments)) return "No results...";
  return equipments.map(renderEquipment);
};

const { token } = localStorage;

const Equipments = () => {
  const [equipments, setEquipments] = useState<any[]>();
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

  const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);

  useEffect(() => {
    console.log("selectionModel", selectionModel);
    console.log("equipments", equipments);
  }, [selectionModel]);

  let rowsTest = equipments?.map((element) => {
    element.id = element.equipment.eid;
    element.eid = element.equipment.eid;
    element.sn = element.equipment.serialnumber;
    element.softwareVersion = element.softwareVersion;
    return element;
  });
  useEffect(() => {
    console.log("rowsTest", rowsTest);
  }, [rowsTest]);

  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "XGrid", col2: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "eid", headerName: "EID", width: 150 },
    { field: "sn", headerName: "Serial number", width: 150 },
    { field: "softwareVersion", headerName: "Version", width: 150 },
  ];

  const saveSelected = () => {
    let saveArray: any[] = [];
    equipments?.forEach((element: any) => {
      rowsTest?.forEach((element2) => {
        if ((element.equipment.eid = element2.eid)) {
          saveArray.push(element);
        }
      });
    });
    console.log("saveArray", saveArray);
  };

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection?.selectionModel);
          }}
          selectionModel={selectionModel}
          rows={rowsTest || []}
          columns={columns}
        />
      </div>
      <Button className="buttonLoadEqui" onClick={loadEquipments}>
        Load equipments
      </Button>
      <Button className="buttonLoadEqui success" onClick={saveSelected}>
        Save
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
        {renderEquipmentList(equipments || [])}
      </Table>
    </div>
  );
};

export default Equipments;
