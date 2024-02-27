import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className="flex justify-center bg-gray-300 p-4">User: {userid}</div>
  );
};

export default User;
