import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSportsmen, deleteSportsman } from '../api';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SportsmenPage = () => {
    const [sportsmen, setSportsmen] = useState([]);
    const navigate = useNavigate();

    const loadSportsmen = () => {
        fetchSportsmen()
            .then(response => {
                setSportsmen(response.data);
            })
            .catch(error => {
                console.error("Error fetching sportsmen", error);
            });
    };

    useEffect(() => {
        loadSportsmen();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Вы уверены, что хотите удалить спортсмена?')) {
            deleteSportsman(id)
                .then(() => {
                    loadSportsmen();
                })
                .catch(error => {
                    console.error("Error deleting sportsman", error);
                });
        }
    };

    return (
        <div>
            <h2>Спортсмены</h2>
            <button onClick={() => navigate('/sportsmen/new')}>Создать спортсмена</button>
            <table border="1" cellPadding="5" cellSpacing="0" style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Возраст</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {sportsmen.map(sportsman => (
                    <tr key={sportsman.id}>
                        <td>{sportsman.surname}</td>
                        <td>{sportsman.firstName}</td>
                        <td>{sportsman.patronymic}</td>
                        <td>{sportsman.age}</td>
                        <td>{sportsman.email}</td>
                        <td>{sportsman.phone}</td>
                        <td>
                            <FaEdit
                                style={{ cursor: 'pointer', marginRight: '10px' }}
                                onClick={() => navigate(`/sportsmen/edit/${sportsman.id}`)}
                            />
                            <FaTrash
                                role="button"
                                aria-label="delete"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(sportsman.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SportsmenPage;
