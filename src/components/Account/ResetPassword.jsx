import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/api/users/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Actualizar Contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
