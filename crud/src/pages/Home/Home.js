import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export const Home = () => {

  const [data, setData] = useState([]);

  const getCandidates = async () => {
    fetch("http://localhost/crud/index.php")
      .then((response) => response.json())
      .then((responseJson) => (
        // console.log(responseJson),
        setData(responseJson.records)
      ));
  }

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className='content container-fluid mx-5'>
      <h1 className='text-danger'>Listar</h1>
      <div className="list-group">
        {Object.values(data).map(candidate => (
          <Link to="#" className="list-group-item list-group-item-action" key={candidate.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{candidate.nome}</h5>
              <small>{candidate.telefone}</small>
            </div>
            <p className="mb-1">{candidate.email}</p>
            <small>{candidate.tipoVaga}</small>
          </Link>
        ))}        
      </div>
    </div>
  );
}