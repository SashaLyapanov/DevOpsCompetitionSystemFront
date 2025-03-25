import React, { useState, useEffect } from 'react';
import { registerSportsman, fetchCompetitions, fetchSportsmen } from '../api';

const RegistrationPage = () => {
    const [competitions, setCompetitions] = useState([]);
    const [sportsmen, setSportsmen] = useState([]);
    const [selectedCompetition, setSelectedCompetition] = useState('');
    const [selectedSportsman, setSelectedSportsman] = useState('');

    useEffect(() => {
        fetchCompetitions()
            .then(response => {
                setCompetitions(response.data);
            })
            .catch(error => console.error("Error fetching competitions", error));
        fetchSportsmen()
            .then(response => {
                setSportsmen(response.data);
            })
            .catch(error => console.error("Error fetching sportsmen", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedCompetition || !selectedSportsman) {
            alert("Пожалуйста, выберите соревнование и спортсмена");
            return;
        }
        registerSportsman(selectedCompetition, selectedSportsman)
            .then(response => {
                alert("Регистрация прошла успешно!");
            })
            .catch(error => {
                console.error("Error during registration", error);
                alert("Ошибка регистрации");
            });
    };

    return (
        <div>
            <h2>Регистрация спортсмена на соревнование</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"compition"} >Соревнование:</label>
                    <select id="compition" value={selectedCompetition} onChange={(e) => setSelectedCompetition(e.target.value)}>
                        <option value="">Выберите соревнование</option>
                        {competitions.map(comp => (
                            <option key={comp.id} value={comp.id}>{comp.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor={"sportsman"}>Спортсмен:</label>
                    <select  id="sportsman" value={selectedSportsman} onChange={(e) => setSelectedSportsman(e.target.value)}>
                        <option value="">Выберите спортсмена</option>
                        {sportsmen.map(sport => (
                            <option key={sport.id} value={sport.id}>{sport.firstName} {sport.surname}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Зарегистрировать</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
