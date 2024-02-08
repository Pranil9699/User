import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import UserCard from "../components/UserCard";
import { getAllUsers, searchUser } from "../service/user-service";
import { Container, Input } from "reactstrap";
import { toast } from "react-toastify";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadAllUsers();
  }, []);

  const loadAllUsers = () => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    const text = e.target.value.trim(); 
    setSearchText(text);

    if (text === "") {
      loadAllUsers();
      return;
    }

    searchUser(text)
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        // console.log("Error");
        // console.log(error);
        toast.error("Something Wrong!!");
      });
  };

  const deletedUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Base>
      <Container className="text-center col-md-4 my-4 ">
        <Input
          placeholder="Search User By name/age/gender"
          onChange={handleSearch}
          type="text"
          value={searchText}
        />
      </Container>
      {users.length > 0 ? (
        <div className="card-category-1">
          {users.map((user, index) => (
            <UserCard key={index} user={user} deletedUser={deletedUser} />
          ))}
        </div>
      ) : (
        <Container className="text-center display-5">
          No Users Available
        </Container>
      )}
    </Base>
  );
};

export default Home;
