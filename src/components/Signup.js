import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignupStyles.css";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Apply background only on SignUp page
  useEffect(() => {
    document.body.classList.add("signup-page-bg");
    return () => {
      document.body.classList.remove("signup-page-bg");
    };
  }, []);

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form>
        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <div className="button-group">
          <button type="submit">Sign Up</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
