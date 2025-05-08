import { useState } from "react";
import axios from "axios";
import AdminHome from "../componets/admin/AdminHome";
import './pagesCss/admin.css'

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false)

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
      const URL = import.meta.env.VITE_SERVER_URL;1424
      const response = await axios.post( URL + "admin", { filter, schema:"admin", data });
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
    
      { !isAuth ? <div className="admin-auth">
          <h3>Admin Login</h3>
          <form className="admin-auth-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
              autoComplete="true"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
              autoComplete="true"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" disabled={loading} style={{ width: "50%", padding: "8px", marginTop: "10px" }}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
       </div> : <AdminHome admin={username} />}      
  </>);
};

export default AdminLogin;
