import React from 'react';

export const Equipment = ({ equipment }: { equipment: any }) => (
  <div className="equipment">
    <a>serialnumber: {equipment?.equipment?.serialnumber || '---'}</a>
    <a>softwareVersion: {equipment?.softwareVersion || '---'}</a>
    <a>lastCommDate: {new Date(equipment?.lastComDt).toUTCString() || '---'}</a>
  </div>
);

export default Equipment;
