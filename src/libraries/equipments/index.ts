import axios from "axios";

export const fetchEquipments = (token: string) => {
  return axios.get(
    "https://service.zarph.com/zarph-zps-ea-war/restapi/equipment/details/?entid=9999&sid=0",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization: `Bearer ${token}`,
        ZAuthorization: `Bearer ${token}`,
      },
    }
  );
};
