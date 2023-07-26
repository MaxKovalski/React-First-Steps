import { useState } from "react";
import { users } from "../UsersData";
import moment from "moment";
export default function UsersTable() {
  const [data, setData] = useState(users);

  const removeUser = (userId) => {
    const newData = data.filter((u) => u.id !== userId);
    setData(newData);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>birthday</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((u, i) => (
          <tr key={u.id}>
            <td>{i + 1}</td>
            <td>
              {u.firstName} {u.firstName}
            </td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
            <td>{moment(u.birthday).format("DD/MM/YYYY")}</td>
            <td>
              <button
                className="remove"
                onClick={() => {
                  removeUser(u.id);
                }}
              >
                ❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
