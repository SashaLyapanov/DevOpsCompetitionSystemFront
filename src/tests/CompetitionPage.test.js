// import React from 'react';
// import {render, screen, fireEvent, waitFor} from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import CompetitionsPage from '../pages/CompetitionsPage';
// import {fetchCompetitions, deleteCompetition, fetchSportsmen} from '../api';
//
// jest.mock('../api', () => ({
//     fetchCompetitions: jest.fn(),
//     deleteCompetition: jest.fn()
// }));
// jest.mock('axios', () => ({
//     get: jest.fn(),
// }));
// describe('CompetitionsPage', () => {
//     const mockCompetitions = [
//         { id: 1, name: 'Competition 1', description: 'Desc 1', startDate: '2025-05-01', endDate: '2025-05-10', participantQuantity: 10 },
//         { id: 2, name: 'Competition 2', description: 'Desc 2', startDate: '2025-06-01', endDate: '2025-06-10', participantQuantity: 20 }
//     ];
//
//     beforeEach(() => {
//         fetchCompetitions.mockResolvedValue({ data: mockCompetitions });
//     });
//
//     it('renders competition list', async () => {
//         render(
//             <BrowserRouter>
//                 <CompetitionsPage />
//             </BrowserRouter>
//         );
//
//         expect(await screen.findByText('Competition 1')).toBeInTheDocument();
//         expect(await screen.findByText('Competition 2')).toBeInTheDocument();
//     });
//
//     it('calls delete function on delete button click', async () => {
//         deleteCompetition.mockResolvedValue({});
//
//         jest.spyOn(window, "confirm").mockImplementation(() => true);
//
//         render(
//             <BrowserRouter>
//                 <CompetitionsPage />
//             </BrowserRouter>
//         );
//    /*     await waitFor(() => {
//             expect(fetchCompetitions()).toHaveBeenCalledTimes(1);
//         });*/
//         expect(await screen.findByText('Competition 1')).toBeInTheDocument();
//
//         // Select all `svg` elements (React Icons are SVGs)
//         const deleteIcons = screen.getAllByRole('button', { name: /delete/i });
//
// /*
//         const deleteButtons = await screen.findAllByRole('button');
// */
//         fireEvent.click(deleteIcons[1]); // Assuming second button is delete
//
//         expect(deleteCompetition).toHaveBeenCalledWith(2);
//     });
//
//     it('navigates to create page on button click', () => {
//         render(
//             <BrowserRouter>
//                 <CompetitionsPage />
//             </BrowserRouter>
//         );
//
//         const createButton = screen.getByText('Создать соревнование');
//         expect(createButton).toBeInTheDocument();
//     });
// });
