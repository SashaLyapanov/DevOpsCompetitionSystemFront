import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createSportsman, updateSportsman } from '../api';
import axios from 'axios';

const SportsmanForm = () => {
    const [sportsman, setSportsman] = useState({
        surname: '',
        firstName: '',
        patronymic: '',
        age: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/getSportsman?sportsmanId=${id}`)
                .then(response => {
                    setSportsman(response.data);
                })
                .catch(error => console.error("Error fetching sportsman", error));
        }
    }, [id]);

    const handleChange = (e) => {
        setSportsman({
            ...sportsman,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateSportsman(sportsman)
                .then(() => {
                    navigate('/sportsmen');
                })
                .catch(error => console.error("Error updating sportsman", error));
        } else {
            createSportsman(sportsman)
                .then(() => {
                    navigate('/sportsmen');
                })
                .catch(error => console.error("Error creating sportsman", error));
        }
    };

    return (
        <div>
            <h2>{id ? 'Редактировать спортсмена' : 'Создать спортсмена'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Фамилия:</label>
                    <input type="text" name="surname" value={sportsman.surname} onChange={handleChange} required />
                </div>
                <div>
                    <label>Имя:</label>
                    <input type="text" name="firstName" value={sportsman.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Отчество:</label>
                    <input type="text" name="patronymic" value={sportsman.patronymic} onChange={handleChange} required />
                </div>
                <div>
                    <label>Возраст:</label>
                    <input type="number" name="age" value={sportsman.age} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={sportsman.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="text" name="phone" value={sportsman.phone} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Сохранить изменения' : 'Создать'}</button>
            </form>
        </div>
    );
};

export default SportsmanForm;
