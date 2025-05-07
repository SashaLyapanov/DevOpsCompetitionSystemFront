// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import {BrowserRouter, MemoryRouter} from 'react-router-dom';
// import CompetitionForm from '../pages/CompetitionForm';
// import { createCompetition, updateCompetition } from '../api.js';
//
// import axios from 'axios';
//
// jest.mock('../api'); // Mock API functions
// jest.mock('axios', () => ({
//     get: jest.fn(),
// }));
// // Mock the API call
// jest.mock('../api.js', () => ({
//     createCompetition: jest.fn().mockResolvedValue({ id: 1, name: 'Competition 1' }),
// }));
// /*const mockNavigate = jest.fn();*/
// /*jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: () => mockNavigate,
//     useParams: () => ({ id: null }) // No ID means "Create mode"
// }));*/
// describe('CompetitionForm', () => {
//     test('renders form with empty fields when creating new competition', () => {
//         render(
//             <BrowserRouter>
//                 <CompetitionForm />
//             </BrowserRouter>
//         );
//
//         // Checking for inputs by their label text
//         const nameInput = screen.getByLabelText(/Название:/i);
//         const descriptionInput = screen.getByLabelText(/Описание:/i);
//         const startDateInput = screen.getByLabelText(/Дата начала:/i);
//         const endDateInput = screen.getByLabelText(/Дата окончания:/i);
//         const participantQuantityInput = screen.getByLabelText(/Количество участников:/i);
//
//         // Ensure all form fields are rendered
//         expect(nameInput).toBeInTheDocument();
//         expect(descriptionInput).toBeInTheDocument();
//         expect(startDateInput).toBeInTheDocument();
//         expect(endDateInput).toBeInTheDocument();
//         expect(participantQuantityInput).toBeInTheDocument();
//     });
// /*
//     test('submits form and calls createCompetition API', async () => {
//         render(
//             <BrowserRouter>
//                 <CompetitionForm />
//             </BrowserRouter>
//         );
//
//         // Simulate filling out the form fields
//         fireEvent.change(screen.getByLabelText(/Название:/i), {
//             target: { value: 'Competition 1' }
//         });
//         fireEvent.change(screen.getByLabelText(/Описание:/i), {
//             target: { value: 'Description of competition 1' }
//         });
//         fireEvent.change(screen.getByLabelText(/Дата начала:/i), {
//             target: { value: '2025-04-01' }
//         });
//         fireEvent.change(screen.getByLabelText(/Дата окончания:/i), {
//             target: { value: '2025-04-10' }
//         });
//         fireEvent.change(screen.getByLabelText(/Количество участников:/i), {
//             target: { value: 100 }
//         });
//
//         // Simulate form submission by clicking the button
//         fireEvent.click(screen.getByRole('button', { name: /Создать/i }));
//
//         // Wait for the createCompetition API call to be triggered
//         await waitFor(() => {
//             expect(createCompetition).toHaveBeenCalledWith({
//                 name: 'Competition 1',
//                 description: 'Description of competition 1',
//                 startDate: '2025-04-01',
//                 endDate: '2025-04-10',
//                 participantQuantity: 100,
//             });
//         });
//     });*/
//
// /*
//
//     test('loads and edits competition if id is provided', async () => {
//         // Mock axios.get to simulate getting existing competition data
//         axios.get=jest.fn();
//         axios.get.mockResolvedValue({
//             data: {
//                 id: 1,
//                 name: 'Old Competition',
//                 description: 'Old description',
//                 startDate: '2025-01-01',
//                 endDate: '2025-01-10',
//                 participantQuantity: 50
//             }
//         });
//
//         // Render component with an id (to simulate edit mode)
//         render(
//             <BrowserRouter>
//                 <CompetitionForm />
//             </BrowserRouter>
//         );
//         await waitFor(() => {
//             expect(screen.getByLabelText(/Название:/i)).toBeInTheDocument();
//         });
//         // Wait for data to load and populate the form
//
//         // eslint-disable-next-line testing-library/await-async-query
//         const input = await screen.findByLabelText(/Название:/i);
//         expect(input).toHaveValue('Old Competition');
//            /!* expect(screen.getByLabelText(/Описание:/i)).toHaveValue('Old description');
//             expect(screen.getByLabelText(/Дата начала:/i)).toHaveValue('2025-01-01');
//             expect(screen.getByLabelText(/Дата окончания:/i)).toHaveValue('2025-01-10');
//             expect(screen.getByLabelText(/Количество участников:/i)).toHaveValue(50);*!/
//
//     });*/
// });
//
