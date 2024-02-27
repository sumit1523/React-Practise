// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sumit1523")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <>
      {" "}
      <img
        className="flex justify-center items-center p-5"
        src={data?.avatar_url}
        alt="sumit"
      />
      <div className="flex justify-center bg-gray-300 p-4">
        Name : {data?.name}
      </div>
      <div className="flex justify-center bg-gray-300 p-4">
        Github Followers:{data?.followers}
      </div>
      <div className="flex justify-center bg-gray-300 p-4">
        Github created : {data?.created_at}
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sumit1523");
  return response.json();
};
