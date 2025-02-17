import React, { useEffect, useState } from "react";
import { Button, Table, Spinner, Dropdown } from "react-bootstrap";

const ContainerList = () => {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:8000/containers")
      .then((response) => response.json())
      .then((data) => {
        console.log("🚀 Dados recebidos:", data); 
        if (data && Array.isArray(data.containers)) {
          setContainers(data.containers);
        } else {
          console.error("❌ Erro: resposta inesperada", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar contêineres:", error);
        setLoading(false);
      });
  }, []);

  // 🔹 Correção: Ajuste nos filtros
  const filteredContainers = containers.filter((container) => {
    if (filter === "running") return container.status === "running";
    if (filter === "stopped") return container.status === "exited"; 
    return true;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista de Contêineres</h2>

      {/* 🔹 Filtro de status */}
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="primary">Filtrar Contêineres</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilter("all")}>Todos</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("running")}>Rodando</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("stopped")}>Finalizados</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* 🔹 Tabela de Contêineres */}
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Table striped bordered hover responsive>
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
            {filteredContainers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">Nenhum contêiner encontrado.</td>
              </tr>
            ) : (
              filteredContainers.map((container) => (
                <tr key={container.id}>
                  <td>{container.id.substring(0, 12)}...</td>
                  <td>{container.name}</td>
                  <td>
                    <Button
                      variant={container.status === "running" ? "success" : "danger"}
                      size="sm"
                    >
                      {container.status}
                    </Button>
                  </td>
                  <td>{container.image}</td>
                  <td>{new Date(container.created).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ContainerList;
