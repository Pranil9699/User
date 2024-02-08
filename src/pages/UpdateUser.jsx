import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import Base from "../components/Base";
import { getUser, updateUser } from "../service/user-service";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    getUser(id)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (user.name.trim() === "") {
      toast.error("Fillup name!!");
      setUser({ ...user, name: "" });
      return;
    }
    if (!user.age || isNaN(user.age) || user.age <= 0 || user.age >= 150) {
      toast.error("Enter Correct Age");
      return;
    }

    updateUser(user, id)
      .then((data) => {
        toast.success("User Updated!!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Wrong!!");
      });
  };

  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card className="border-1 ">
              <CardHeader className="text-center display-6">
                Update User
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitHandler}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={user.name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                      type="number"
                      id="age"
                      required
                      value={user.age}
                      onChange={(e) =>
                        setUser({ ...user, age: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input
                      type="select"
                      id="gender"
                      required
                      value={user.gender}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Input>
                  </FormGroup>
                  <Container className="text-center mt-3">
                    <Button className="btn btn-success m-3" type="submit">
                      Submit
                    </Button>
                    <Button
                      className="btn btn-warning m-3"
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Cancel
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default UpdateUser;
