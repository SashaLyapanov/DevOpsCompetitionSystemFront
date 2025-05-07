// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import SportsmanForm from '../pages/SportsmanForm';
//
// jest.mock('../api', () => ({
//     createSportsman: jest.fn(() => Promise.resolve()),
//     updateSportsman: jest.fn(() => Promise.resolve())
// }));
// jest.mock('axios', () => ({
//     get: jest.fn(),
// }));
// describe('SportsmanForm Component', () => {
//     test('renders form fields correctly', () => {
//         render(
//             <BrowserRouter>
//                 <SportsmanForm />
//             </BrowserRouter>
//         );
//
//         expect(screen.getByLabelText(/Фамилия:/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Имя:/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Отчество:/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Возраст:/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Телефон:/i)).toBeInTheDocument();
//     });
//
//     test('updates input values when changed', () => {
//         render(
//             <BrowserRouter>
//                 <SportsmanForm />
//             </BrowserRouter>
//         );
//
//         const firstNameInput = screen.getByLabelText(/Имя:/i);
//         fireEvent.change(firstNameInput, { target: { value: 'Иван' } });
//         expect(firstNameInput.value).toBe('Иван');
//     });
//
//     test('submits the form successfully', async () => {
//         render(
//             <BrowserRouter>
//                 <SportsmanForm />
//             </BrowserRouter>
//         );
//
//         const submitButton = screen.getByRole('button', { name: /Создать/i });
//         fireEvent.click(submitButton);
//
//         expect(screen.getByRole('button', { name: /Создать/i })).toBeInTheDocument();
//     });
// });