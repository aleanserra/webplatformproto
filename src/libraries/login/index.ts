export interface LoginBody {
  entid: string;
  uid: string;
  password: string;
}

export const fetchLogin = (body: LoginBody) => {
  return fetch(
    "https://service.zarph.com/zarph-zps-ea-war/restapi/authenticate/",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
