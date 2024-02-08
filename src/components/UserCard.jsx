import React from "react";
import { Button } from "reactstrap";
import { deleteUser } from "../service/user-service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const UserCard = ({ user, deletedUser }) => {
  const deleteUserById = () => {
    deleteUser(user.id)
      .then((data) => {
        deletedUser(user.id);
        toast.success("Successfully Deleted!!");
      })
      .catch((error) => {
        console.log("deleting error");
        console.log(error);
      });
  };
  return (
    <div className="basic-card basic-card-aqua">
      <div className="card-content">
        <span className="card-title">UserId {user.id}</span>
        <h5 className="card-text">
          Name : <span className="fw-medium  fs-4">{user.name}</span>
        </h5>
        <h5 className="card-text">Age : {user.age}</h5>
        <h5 className="card-text">Gender : {user.gender}</h5>
      </div>

      <div className="container text-center">
        <Button
          className="m-3 btn-outline-primary bg-dark"
          tag={Link}
          to={`/update-user/${user.id}`}
        >
          Update
        </Button>
        <Button
          className="m-3 btn-outline-danger bg-dark"
          onClick={deleteUserById}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
