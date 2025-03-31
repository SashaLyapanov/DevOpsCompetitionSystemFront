import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {createSportsman, updateSportsman} from '../api';
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
    const {id} = useParams();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateSportsman(sportsman);
            } else {
                await createSportsman(sportsman);
            }
            navigate('/sportsmen'); // Ensure navigation happens only after the API call
        } catch (error) {
            console.error("Error submitting sportsman data", error);
        }
    };

    return (
        <div>
            <h2>{id ? 'Редактировать спортсмена' : 'Создать спортсмена'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"surname"}>Фамилия:</label>
                    <input id="surname" type="text" name="surname" value={sportsman.surname} onChange={handleChange}
                           required/>
                </div>
                <div>
                    <label htmlFor={"firstName"}>Имя:</label>
                    <input id="firstName" type="text" name="firstName" value={sportsman.firstName}
                           onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor={"patronymic"}>Отчество:</label>
                    <input id="patronymic" type="text" name="patronymic" value={sportsman.patronymic}
                           onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor={"age"}>Возраст:</label>
                    <input id="age" type="number" name="age" value={sportsman.age} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor={"email"}>Email:</label>
                    <input id="email" type="email" name="email" value={sportsman.email} onChange={handleChange}
                           required/>
                </div>
                <div>
                    <label htmlFor={"phone"}>Телефон:</label>
                    <input id="phone" type="text" name="phone" value={sportsman.phone} onChange={handleChange}
                           required/>
                </div>
                <button type="submit">{id ? 'Сохранить изменения' : 'Создать'}</button>
            </form>
        </div>
    );
};

export default SportsmanForm;
