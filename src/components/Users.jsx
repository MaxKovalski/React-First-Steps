import "./Users.css";
import { useState } from "react";
import { users } from "../UsersData";
import UsersTable from "./UsersTable";
import UsersCards from "./UsersCards";
import UsersList from "./UsersList";

export default function Users() {
  const [display, setDisplay] = useState("table"); // table/list/cards

  return (
    <>
      <div className="display">
        <button
          onClick={() => setDisplay("table")}
          className={display === "table" ? "active" : ""}
        >
          Table
        </button>
        <button
          onClick={() => setDisplay("cards")}
          className={display === "cards" ? "active" : ""}
        >
          Cards
        </button>
        <button
          onClick={() => setDisplay("list")}
          className={display === "list" ? "active" : ""}
        >
          List
        </button>
      </div>

      {(() => {
        switch (display) {
          case "table":
            return <UsersTable />;
          case "cards":
            return <UsersCards />;
          case "list":
            return <UsersList />;
        }
      })()}
    </>
  );
}
