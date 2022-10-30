import { useGlobalContext } from "../../Store/Context";
import ProfileCard from "../ProfileCard";
import "../ProfileCard/ProfileCard.css";

const AllUsers = () => {
  const { users, pages, postsPerPage } = useGlobalContext();
  const startIndex = (pages - 1) * postsPerPage;
  const seletedUsers = users.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="profiles">
      {seletedUsers.map((user) => (
        <ProfileCard user={user} key={user.login.uuid} />
      ))}
    </div>
  );
};

export default AllUsers;
