import axios from "axios";

export interface LoginBody {
  entid: string;
  uid: string;
  password: string;
}

const options = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
};

export const fetchLogin = (body: LoginBody) => {
  return axios.post(
    "https://service.zarph.com/zarph-zps-ea-war/restapi/authenticate/",
    JSON.stringify(body),
    options
  );
};
