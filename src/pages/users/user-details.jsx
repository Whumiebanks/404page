import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const { userId } = params;
  console.log(userId);
  return <div>This is the details page for the {userId}</div>;
};

export default Details;
