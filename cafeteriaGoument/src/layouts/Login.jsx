import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-amber-100 h-screen flex justify-center items-center flex-col gap-4">
      <Link to={"/cardapio"}>Fazer Login</Link>
    </div>
  );
}

export default Login;
