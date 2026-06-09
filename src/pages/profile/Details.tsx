import { useParams } from "react-router-dom";

export default function Details() {
    // The child page will inherits the path variable/ params in the parent page
    //Child routes inherit all params from their parent routes
  const { userId } = useParams();
  return (
    <div>
      <h2>Details</h2>
      <p>Details for User {userId}</p>
    </div>
  );
}
