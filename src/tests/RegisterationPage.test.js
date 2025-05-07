// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import RegistrationPage from '../pages/RegistrationPage';
// import { registerSportsman, fetchCompetitions, fetchSportsmen } from '../api';
//
// jest.mock('../api');
// jest.mock('axios', () => ({
//     get: jest.fn(),
// }));
// describe('RegistrationPage', () => {
//     beforeEach(() => {
//         fetchCompetitions.mockResolvedValue({ data: [
//                 { id: '1', name: 'Competition 1' },
//                 { id: '2', name: 'Competition 2' }
//             ] });
//         fetchSportsmen.mockResolvedValue({ data: [
//                 { id: '1', firstName: 'John', surname: 'Doe' },
//                 { id: '2', firstName: 'Jane', surname: 'Smith' }
//             ] });
//     });
//
//     test('renders the registration form', async () => {
//         render(<RegistrationPage />);
//
//         expect(screen.getByText('Регистрация спортсмена на соревнование')).toBeInTheDocument();
//         await waitFor(() => expect(fetchCompetitions).toHaveBeenCalled());
//         await waitFor(() => expect(fetchSportsmen).toHaveBeenCalled());
//     });
//
//     test('allows selecting a competition and a sportsman', async () => {
//         render(<RegistrationPage />);
//
//         await waitFor(() => {
//             expect(screen.getByLabelText('Соревнование:').options.length).toBeGreaterThan(1);
//             expect(screen.getByLabelText('Спортсмен:').options.length).toBeGreaterThan(1);
//         });
//
//         // Select a competition
//         fireEvent.change(screen.getByLabelText('Соревнование:'), { target: { value: '1' } });
//
//         // Select a sportsman
//         fireEvent.change(screen.getByLabelText('Спортсмен:'), { target: { value: '1' } });
//
//         // Verify selection
//         expect(screen.getByLabelText('Соревнование:').value).toBe('1');
//         expect(screen.getByLabelText('Спортсмен:').value).toBe('1');
//     });
//
//     test('shows alert if form is submitted without selecting values', async () => {
//         window.alert = jest.fn();
//         render(<RegistrationPage />);
//
//         fireEvent.click(screen.getByText('Зарегистрировать'));
//
//         expect(window.alert).toHaveBeenCalledWith('Пожалуйста, выберите соревнование и спортсмена');
//     });
//
//     test('submits the form successfully', async () => {
//         registerSportsman.mockResolvedValue({});
//         window.alert = jest.fn();
//
//         render(<RegistrationPage />);
//         await waitFor(() => {
//             expect(screen.getByLabelText('Соревнование:').options.length).toBeGreaterThan(1);
//             expect(screen.getByLabelText('Спортсмен:').options.length).toBeGreaterThan(1);
//         });
//
//             fireEvent.change(screen.getByLabelText('Соревнование:'), { target: { value: '1' } });
//             fireEvent.change(screen.getByLabelText('Спортсмен:'), { target: { value: '1' } });
//
//
//         fireEvent.click(screen.getByText('Зарегистрировать'));
//
//         await waitFor(() => expect(registerSportsman).toHaveBeenCalledWith('1', '1'));
//         expect(window.alert).toHaveBeenCalledWith('Регистрация прошла успешно!');
//     });
//
//     test('handles registration error', async () => {
//         registerSportsman.mockRejectedValue(new Error('Ошибка регистрации'));
//         window.alert = jest.fn();
//
//         render(<RegistrationPage />);
//
//         await waitFor(() => {
//             fireEvent.change(screen.getByLabelText('Соревнование:'), { target: { value: '1' } });
//             fireEvent.change(screen.getByLabelText('Спортсмен:'), { target: { value: '1' } });
//         });
//
//         fireEvent.click(screen.getByText('Зарегистрировать'));
//
//         await waitFor(() => expect(window.alert).toHaveBeenCalledWith('Пожалуйста, выберите соревнование и спортсмена'));
//     });
// });