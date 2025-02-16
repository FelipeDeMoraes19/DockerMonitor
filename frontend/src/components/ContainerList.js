import React, { useEffect, useState } from "react";

const ContainerList = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/containers")
      .then((response) => response.json())
      .then((data) => setContainers(data))
      .catch((error) => console.error("Erro ao buscar contêineres:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Contêineres</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Imagem</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container) => (
            <tr key={container.id}>
              <td>{container.id.substring(0, 12)}...</td>
              <td>{container.name}</td>
              <td>{container.status}</td>
              <td>{container.image}</td>
              <td>{new Date(container.created).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContainerList;
