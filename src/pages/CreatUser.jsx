import React, { useState } from "react";
import Base from "../components/Base";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { createUser } from "../service/user-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    const age = parseInt(user.age);
    if (isNaN(age) || age <= 0 || age >= 150) {
      toast.warning("Enter Correct Age");
      return;
    }
    createUser(user)
      .then((data) => {
        toast.success("User Created!!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Wrong!!");
      });
  };

  const resetFormData = () => {
    setUser({
      name: "",
      age: "",
      gender: "",
    });
  };
  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card className="border-1 ">
              <CardHeader className="text-center display-6">
                Create New User
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitHandler}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      required={true}
                      type="text"
                      id="name"
                      value={user.name}
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                      type="number"
                      id="age"
                      required={true}
                      value={user.age}
                      onChange={(e) => {
                        setUser({ ...user, age: e.target.value });
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label for="gender">Gender</label>

                    <select
                      className="form-control"
                      name="gender"
                      id="gender"
                      required={true}
                      value={user.gender}
                      onChange={(e) => {
                        setUser({ ...user, gender: e.target.value });
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <Container className="text-center mt-3">
                      <Button className="btn btn-success   m-3" type="submit">
                        Submit
                      </Button>
                      <Button
                        className="btn btn-warning  m-3"
                        onClick={resetFormData}
                        type="reset"
                      >
                        Reset
                      </Button>
                    </Container>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default CreatUser;
