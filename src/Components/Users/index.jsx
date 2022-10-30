import { useGlobalContext } from "../../Store/Context";
import ProfileCard from "../ProfileCard";
import "../ProfileCard/ProfileCard.css";

const Users = () => {
  const { users, pages, postsPerPage } = useGlobalContext();
  const startIndex = (pages - 1) * postsPerPage;
  const seletedUsers = users.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="profiles">
      {seletedUsers.map((user, i) => (
        <ProfileCard user={user} key={i} />
      ))}
    </div>
  );
};

export default Users;
