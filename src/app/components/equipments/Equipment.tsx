import React from "react";
import moment from "moment";

export const Equipment = ({ equipment }: { equipment: any }) => (
  <tbody className="equipment">
    <tr>
      <td>{equipment?.equipment?.eid}</td>
      <td>{equipment?.equipment?.serialnumber}</td>
      <td>{equipment?.softwareVersion}</td>
      <td>{moment(equipment?.lastComDt).format("YYYY/MM/DD HH:mm:ss")}</td>
    </tr>
  </tbody>
);

export default Equipment;
