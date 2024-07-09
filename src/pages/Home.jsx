import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>Ir login</Link>
    </div>
  );
}

export default Home;
