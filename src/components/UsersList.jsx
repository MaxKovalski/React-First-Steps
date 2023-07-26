import { useState } from "react";
import { users } from "../UsersData";

export default function UsersList() {
  const [data, setData] = useState(users);
  console.log("list");
  return (
    <ul>
      {data.map((x) => (
        <li>
          {x.firstName}
          {x.lastName}
        </li>
      ))}
    </ul>
  );
}
