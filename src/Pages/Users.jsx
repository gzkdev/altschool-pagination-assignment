import { Users as Profiles, Pagination } from "../Components";

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
