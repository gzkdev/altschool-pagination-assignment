import React from "react";
import { Users as Profiles } from "../Components";
import Pagination from "../Components/Pagination";

const Users = () => {
  return (
    <>
      <div className="app">
        <Profiles />
        <Pagination />
      </div>
    </>
  );
};

export default Users;
