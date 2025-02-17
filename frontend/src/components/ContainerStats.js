import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ContainerStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/stats")
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 Estatísticas recebidas:", data); 
        if (data && Array.isArray(data.stats)) {
          const formattedStats = data.stats.map(stat => ({
            id: stat.id,
            name: stat.name,
            cpu: (stat.cpu / 1_000_000_000).toFixed(2),  
            memory: (stat.memory / 1024 / 1024).toFixed(2),  
            timestamp: new Date(stat.timestamp).toLocaleTimeString()
          }));
          setStats(formattedStats);
        } else {
          console.error("❌ Erro: resposta inesperada", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar estatísticas:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Estatísticas de Uso</h2>
      {loading ? (
        <p className="text-center">Carregando estatísticas...</p>
      ) : stats.length === 0 ? (
        <p className="text-center">Nenhum dado disponível.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" label={{ value: "Tempo", position: "insideBottomRight", offset: -5 }} />
            <YAxis label={{ value: "Uso", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpu" stroke="#8884d8" name="Uso de CPU (%)" />
            <Line type="monotone" dataKey="memory" stroke="#82ca9d" name="Uso de Memória (MB)" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ContainerStats;
