import React from "react";
import { useGlobalContext } from "../../Store/Context";
import People from "../People";

const AllUsers = () => {
  const { users, pages, postsPerPage } = useGlobalContext();
  const startIndex = (pages - 1) * postsPerPage;
  const seletedUsers = users.slice(startIndex, startIndex + postsPerPage);

  return seletedUsers.map((user) => (
    <People user={user} key={user.login.uuid} />
  ));
};

export default AllUsers;
