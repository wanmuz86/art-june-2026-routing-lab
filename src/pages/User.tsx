import { useParams } from "react-router-dom";

export default function User() {
  // Tip: in RRD v6+, generics are optional; userId is string | undefined
  const { userId } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>Viewing details for user with ID: {userId}</p>
    </div>
  );
}
