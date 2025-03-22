import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCompetition, updateCompetition } from '../api';
import axios from 'axios';

const CompetitionForm = () => {
    const [competition, setCompetition] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        participantQuantity: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            // Получаем данные соревнования для редактирования
            axios.get(`http://localhost:8080/api/getCompetition?competitionId=${id}`)
                .then(response => {
                    setCompetition(response.data);
                })
                .catch(error => console.error("Error fetching competition", error));
        }
    }, [id]);

    const handleChange = (e) => {
        setCompetition({
            ...competition,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateCompetition(competition)
                .then(() => {
                    navigate('/competitions');
                })
                .catch(error => console.error("Error updating competition", error));
        } else {
            createCompetition(competition)
                .then(() => {
                    navigate('/competitions');
                })
                .catch(error => console.error("Error creating competition", error));
        }
    };

    return (
        <div>
            <h2>{id ? 'Редактировать соревнование' : 'Создать соревнование'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Название:</label>
                    <input type="text" name="name" value={competition.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Описание:</label>
                    <textarea name="description" value={competition.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Дата начала:</label>
                    <input type="date" name="startDate" value={competition.startDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Дата окончания:</label>
                    <input type="date" name="endDate" value={competition.endDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Количество участников:</label>
                    <input type="number" name="participantQuantity" value={competition.participantQuantity} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Сохранить изменения' : 'Создать'}</button>
            </form>
        </div>
    );
};

export default CompetitionForm;
