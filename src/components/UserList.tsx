import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UserList() {
  const [usersList, setUsersList] = useState<UserData[]>([]);
  useEffect(() => {
    axios
      .get<UserData[]>("http://localhost:3333/users")
      .then((res) => {
        console.log(res);
        setUsersList(res.data);
      });
  });
  return (
    <div>
      <h1>Users Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
          </tr>
        </thead>
        <tbody>
                {usersList.map(eachUser=>(
                  <tr>
                  <th scope="row">{eachUser.id}</th>
                  <td>{eachUser.name}</td>
                  <td>{eachUser.email}</td>
                  <td>{eachUser.phone}</td>
                </tr>
                ))}  
                  </tbody>
      </table>
    </div>
  );
}
