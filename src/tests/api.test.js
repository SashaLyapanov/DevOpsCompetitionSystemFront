// import React from 'react';  // Add this line at the top
// import { render, screen } from '@testing-library/react';
// import axios from "axios";
//
// import {
//     fetchCompetitions, fetchCompetition, createCompetition, updateCompetition, deleteCompetition,
//     fetchSportsmen, fetchSportsman, createSportsman, updateSportsman, deleteSportsman,
//     registerSportsman
// } from '../api.js';
//
//
// /*
// import axios from 'axios';
// */
// jest.mock('axios', () => ({
//     get: jest.fn(),
// }));
//
// describe('API Service Tests', () => {
//
//     test('fetchCompetitions calls the correct endpoint', async () => {
//         axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Test Competition' }] });
//
//         const response = await fetchCompetitions();
//         expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/getCompetitions');
//         expect(response.data).toEqual([{ id: 1, name: 'Test Competition' }]);
//     });
//
//     test('fetchCompetition calls the correct endpoint', async () => {
//         axios.get.mockResolvedValue({ data: { id: 1, name: 'Test Competition' } });
//
//         const response = await fetchCompetition(1);
//         expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/getCompetition?competitionId=1');
//         expect(response.data).toEqual({ id: 1, name: 'Test Competition' });
//     });
//
//     test('createCompetition sends a POST request with data', async () => {
//         const newCompetition = { id: 1, name: 'Competition 1' };
//         axios.post = jest.fn();
//         // Ensure axios.post is mocked correctly
//         axios.post.mockResolvedValue({ data: newCompetition });
//
//         const response = await createCompetition(newCompetition);
//
//         // Validate that axios.post was called with correct arguments
//         expect(axios.post).toHaveBeenCalledWith(
//             'http://localhost:8080/api/createCompetition',
//             newCompetition
//         );
//
//         // Ensure response data is correct
//         expect(response.data).toEqual(newCompetition);
//     });
//     test('updateCompetition sends a PUT request with data', async () => {
//         const updatedCompetition = { id: 1, name: 'Updated Competition' };
//         axios.put = jest.fn();
//         axios.put.mockResolvedValue({ data: updatedCompetition });
//
//         const response = await updateCompetition(updatedCompetition);
//         expect(axios.put).toHaveBeenCalledWith('http://localhost:8080/api/editCompetition', updatedCompetition);
//         expect(response.data).toEqual(updatedCompetition);
//     });
//
//     test('deleteCompetition calls the correct endpoint', async () => {
//         axios.delete = jest.fn(); // Ensure axios.delete is defined
//
//         axios.delete.mockResolvedValue({ data: {} });
//
//         await deleteCompetition(1);
//         expect(axios.delete).toHaveBeenCalledWith('http://localhost:8080/api/deleteCompetition?competitionId=1');
//     });
//
//     test('fetchSportsmen calls the correct endpoint', async () => {
//         axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Test Sportsman' }] });
//
//         const response = await fetchSportsmen();
//         expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/getSportsmen');
//         expect(response.data).toEqual([{ id: 1, name: 'Test Sportsman' }]);
//     });
//
//     test('fetchSportsman calls the correct endpoint', async () => {
//         axios.get.mockResolvedValue({ data: { id: 1, name: 'Test Sportsman' } });
//
//         const response = await fetchSportsman(1);
//         expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/getSportsman?sportsmanId=1');
//         expect(response.data).toEqual({ id: 1, name: 'Test Sportsman' });
//     });
//
//     test('createSportsman sends a POST request with data', async () => {
//         const newSportsman = { name: 'New Sportsman' };
//         axios.post = jest.fn();
//
//         axios.post.mockResolvedValue({ data: newSportsman });
//
//         const response = await createSportsman(newSportsman);
//         expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/createSportsman', newSportsman);
//         expect(response.data).toEqual(newSportsman);
//     });
//
//     test('updateSportsman sends a PUT request with data', async () => {
//         const updatedSportsman = { id: 1, name: 'Updated Sportsman' };
//         axios.put = jest.fn();
//
//         axios.put.mockResolvedValue({ data: updatedSportsman });
//
//         const response = await updateSportsman(updatedSportsman);
//         expect(axios.put).toHaveBeenCalledWith('http://localhost:8080/api/editSportsman', updatedSportsman, {
//             headers: { 'Content-Type': 'application/json' }
//         });
//         expect(response.data).toEqual(updatedSportsman);
//     });
//
//     test('deleteSportsman calls the correct endpoint', async () => {
//         axios.delete = jest.fn(); // Ensure axios.delete is defined
//
//         axios.delete.mockResolvedValue({ data: {} });
//
//         await deleteSportsman(1);
//         expect(axios.delete).toHaveBeenCalledWith('http://localhost:8080/api/deleteSportsman?sportsmanId=1');
//     });
//
//     test('registerSportsman sends a POST request with competition and sportsman ID', async () => {
//         axios.post = jest.fn();
//
//         axios.post.mockResolvedValue({ data: { success: true } });
//
//         const response = await registerSportsman(1, 2);
//         expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/regInCompetition?competitionId=1&sportsmanId=2');
//         expect(response.data).toEqual({ success: true });
//     });
//
// });
