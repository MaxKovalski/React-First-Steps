import { useState } from "react";
import { users } from "../UsersData";
import moment from "moment";
export default function UsersCards() {
  const [data, setData] = useState(users);

  function deleteBtn(userId) {
    const newData = data.filter((u) => u.id !== userId);
    setData(newData);
  }

  return (
    <div>
      <div className="card-container">
        {data.map((x) => (
          <div key={x.id}>
            <h4>
              Name: {x.firstName} {x.lastName}
            </h4>
            <h4>Email: {x.email}</h4>
            <h4>Phone {x.phone}</h4>
            <h4>Birthday {moment().diff(x.birthday, "years")}</h4>
            <button onClick={() => deleteBtn(x.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
