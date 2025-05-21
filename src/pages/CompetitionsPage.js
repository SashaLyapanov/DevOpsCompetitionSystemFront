import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCompetitions, deleteCompetition } from '../api';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CompetitionsPage = () => {
    const [competitions, setCompetitions] = useState([]);
    const navigate = useNavigate();

    const loadCompetitions = () => {
        fetchCompetitions()
            .then(response => {
                setCompetitions(response.data);
            })
            .catch(error => {
                console.error("Error fetching competitions", error);
            });
    };

    useEffect(() => {
        loadCompetitions();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Вы уверены, что хотите удалить соревнование?')) {
            console.log("Удаляюююююююююю")
            deleteCompetition(id)
                .then(() => {
                    loadCompetitions();
                })
                .catch(error => {
                    console.error("Error deleting competition", error);
                    alert("Не удалось удалить соревнования, т.к. на них зарегистрированы спортсмены.")
                });
        }
    };

    return (
        <div>
            <h2>Соревнования!</h2>
            <button onClick={() => navigate('/competitions/new')}>Создать соревнование</button>
            <table border="1" cellPadding="5" cellSpacing="0" style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Дата начала</th>
                    <th>Дата окончания</th>
                    <th>Количество участников</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {competitions.map(comp => (
                    <tr key={comp.id}>
                        <td>{comp.name}</td>
                        <td>{comp.description}</td>
                        <td>{comp.startDate}</td>
                        <td>{comp.endDate}</td>
                        <td>{comp.participantQuantity}</td>
                        <td>
                            <FaEdit
                                style={{ cursor: 'pointer', marginRight: '10px' }}
                                onClick={() => navigate(`/competitions/edit/${comp.id}`)}
                            />

                            <FaTrash
                                role="button"
                                aria-label="delete"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(comp.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompetitionsPage;
