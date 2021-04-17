export const fetchEquipments = (token: string): Promise<[] | void> =>
  fetch(
    "https://service.zarph.com/zarph-zps-ea-war/restapi/equipment/details/?entid=9999&sid=0",
    {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization: `Bearer ${token}`,
        ZAuthorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.equipments)
    .catch((error) => console.log(error));
