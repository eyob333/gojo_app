import { useState } from "react";
import FileUpload from "./Upload";
import axios from "axios";
import AdminHome from "../componets/admin/AdminHome";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(true)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = {
        username,
        password
      }
      const filter = {
        username: username
      }
      const response = await axios.post("http://localhost:1424/admin", { filter, schema:"admin", data });
      console.log("Login successful: ", response.data);
      console.log("foo", response)
      setIsAuth(true)
      alert("Login successful");
    } catch (err) {
      console.error("Login error: ", err);
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return ( <>
    

      { !isAuth ? <div style={{ maxWidth: "300px", padding: "20px"}}>
          <h3>Admin Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" disabled={loading} style={{ width: "50%", padding: "8px", marginTop: "10px" }}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
       </div> : <AdminHome />}      
  </>);
};

export default AdminLogin;
