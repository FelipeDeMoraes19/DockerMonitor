import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ContainerStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error("Erro ao buscar estatísticas:", error));
  }, []);

  return (
    <div>
      <h2>Estatísticas de Uso</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cpu" stroke="#8884d8" name="Uso de CPU (%)" />
          <Line type="monotone" dataKey="memory" stroke="#82ca9d" name="Uso de Memória (MB)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContainerStats;
