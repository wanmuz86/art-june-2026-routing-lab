import { useNavigate } from "react-router-dom";

export default function NavigateProgrammatically() {
  const navigate = useNavigate();

  const goToUserPage = (id: string) => {
    // navigate programmatically to page 1 or 2 using navigate object from useNavigate Hook
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <h1>Navigate Programmatically</h1>
      <button onClick={() => goToUserPage("1")}>Go to User 1</button>
      <button onClick={() => goToUserPage("2")}>Go to User 2</button>
    </div>
  );
}
