import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api';    //Для локалки
const API_BASE_URL = '/api';    //Для deploy

// Компетиции
export const fetchCompetitions = () => {
    return axios.get(`${API_BASE_URL}/getCompetitions`);
};

export const fetchCompetition = (competitionId) => {
    return axios.get(`${API_BASE_URL}/getCompetition?competitionId=${competitionId}`)
}

export const createCompetition = (competition) => {
    return axios.post(`${API_BASE_URL}/createCompetition`, competition);
};

export const updateCompetition = (competition) => {
    return axios.put(`${API_BASE_URL}/editCompetition`, competition);
};

export const deleteCompetition = (competitionId) => {
    return axios.delete(`${API_BASE_URL}/deleteCompetition?competitionId=${competitionId}`);
};

// Спортсмены
export const fetchSportsmen = () => {
    return axios.get(`${API_BASE_URL}/getSportsmen`);
};

export const fetchSportsman = (sportsmanId) => {
    return axios.get(`${API_BASE_URL}/getSportsman?sportsmanId=${sportsmanId}`);
}

export const createSportsman = (sportsman) => {
    return axios.post(`${API_BASE_URL}/createSportsman`, sportsman);
};

export const updateSportsman = (sportsman) => {
    return axios.put(`${API_BASE_URL}/editSportsman`, sportsman, {
        headers: { 'Content-Type': 'application/json' }
    });
};

export const deleteSportsman = (sportsmanId) => {
    return axios.delete(`${API_BASE_URL}/deleteSportsman?sportsmanId=${sportsmanId}`);
};

// Регистрация (ожидается JSON с competitionId и sportsmanId)
export const registerSportsman = (competitionId, sportsmanId) => {
    return axios.post(`${API_BASE_URL}/regInCompetition?competitionId=${competitionId}&sportsmanId=${sportsmanId}`);
};
