import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const People = ({ user }) => {
  return (
    <div className="card">
      <div card="card__preview">
        <img src={user.picture.large} className="card__img" />

        <p className="card__name">{`${user.name.first} ${user.name.last}`}</p>

        <Link to={`/users/${user.cell}`} className="card__link">
          View profile
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default People;
