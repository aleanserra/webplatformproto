import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  Row,
} from "react-bootstrap";
import "./styles.scss";
import { fetchLogin, LoginBody } from "../../../src/libraries/login";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [entid, setEntid] = useState("9999");
  const [uid, setUid] = useState("3");
  const [password, setPassword] = useState("1234");
  const [logedIn, setLogedIn] = useState<boolean>();

  const login = async () => {
    fetchLogin({ entid, uid, password })
      .then((data: any) => {
        setLogedIn(!!data?.token);
        localStorage.setItem("token", data?.token);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (logedIn) {
      history.push("/equipments");
    }
  }, [logedIn]);

  const updateEmail = (e: any) => {
    return setUid(e.target.value);
  };

  const updatePin = (e: any) => {
    return setPassword(e.target.value);
  };

  return (
    <Form className="formLogin">
      <Form.Group as={Row}>
        <Form.Label column sm="4">
          Uid
        </Form.Label>
        <Col sm="8">
          <Form.Control value={uid} onChange={updateEmail} placeholder="Uid" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="4">
          Password
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="password"
            value={password}
            onChange={updatePin}
            placeholder="Password"
          />
        </Col>
      </Form.Group>
      <Button className="float-right" onClick={login}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
