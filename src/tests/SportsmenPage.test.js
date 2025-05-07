// import {render, screen, fireEvent, waitFor, cleanup} from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import SportsmenPage from '../pages/SportsmenPage'; // Adjust the import path if necessary
// import { fetchSportsmen, deleteSportsman } from '../api';
// import { useNavigate } from 'react-router-dom';
// // Mock the API functions
// jest.mock('../api', () => ({
//     fetchSportsmen: jest.fn(),
//     deleteSportsman: jest.fn(),
// }));
//
//
// // Mock useNavigate
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: jest.fn(),
// }));
//
// const mockNavigate = jest.fn();
// useNavigate.mockReturnValue(mockNavigate);
// describe('SportsmenPage', () => {
//     const mockSportsmen = [
//         {
//             id: 1,
//             surname: 'Ivanov',
//             firstName: 'Ivan',
//             patronymic: 'Ivanovich',
//             age: 25,
//             email: 'ivanov@example.com',
//             phone: '+1234567890',
//         },
//         {
//             id: 2,
//             surname: 'Petrov',
//             firstName: 'Petr',
//             patronymic: 'Petrovich',
//             age: 30,
//             email: 'petrov@example.com',
//             phone: '+0987654321',
//         },
//     ];
//
//     beforeEach(() => {
//         fetchSportsmen.mockResolvedValue({ data: mockSportsmen });
//         deleteSportsman.mockResolvedValue({});
//     });
//
//     afterEach(() => {
//         jest.clearAllMocks();
//         cleanup();
//     });
//
//     test('should render sportsmen list correctly', async () => {
//         render(
//             <MemoryRouter>
//                 <SportsmenPage />
//             </MemoryRouter>
//         );
//
//         // Wait for the table rows to be rendered
//         await waitFor(() => {
//             expect(fetchSportsmen).toHaveBeenCalledTimes(1);
//
//             // Find the table rows and assert that each cell has the correct data
//             const rows = screen.getAllByRole('row');
//             expect(rows.length).toBeGreaterThan(1); // Ensure there's at least one row (the header row)
//
//             const row1 = rows[1]; // First data row (ignoring the header row)
//             expect(row1).toHaveTextContent('Ivanov');
//             expect(row1).toHaveTextContent('Ivan');
//             expect(row1).toHaveTextContent('Ivanovich');
//             expect(row1).toHaveTextContent('25');
//             expect(row1).toHaveTextContent('ivanov@example.com');
//             expect(row1).toHaveTextContent('+1234567890');
//
//             const row2 = rows[2]; // Second data row
//             expect(row2).toHaveTextContent('Petrov');
//             expect(row2).toHaveTextContent('Petr');
//             expect(row2).toHaveTextContent('Petrovich');
//             expect(row2).toHaveTextContent('30');
//             expect(row2).toHaveTextContent('petrov@example.com');
//             expect(row2).toHaveTextContent('+0987654321');
//         });
//     });
//
//     test('should navigate to create sportsman page on button click', () => {
//         const mockNavigate = jest.fn(); // Mock function for useNavigate
//         // Mock `useNavigate` to return the mock function
//         require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
//
//         render(
//             <MemoryRouter>
//                 <SportsmenPage />
//             </MemoryRouter>
//         );
//
//         const createButton = screen.getByText('Создать спортсмена');
//         fireEvent.click(createButton);
//
//         expect(mockNavigate).toHaveBeenCalledWith('/sportsmen/new'); // Assert that the navigation occurred with the correct path
//     });
//     test('should delete a sportsman when trash icon is clicked', async () => {
//         const mockNavigate = jest.fn(); // Mock function for useNavigate
//         // Mock `useNavigate` to return the mock function
//         require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
//         jest.spyOn(window, "confirm").mockImplementation(() => true);
//         render(
//             <MemoryRouter>
//                 <SportsmenPage />
//             </MemoryRouter>
//         );
//
//         // Wait for sportsmen to load
//         await waitFor(() => {
//             expect(fetchSportsmen).toHaveBeenCalledTimes(1);
//         });
//
//         // Select all `svg` elements (React Icons are SVGs)
//         const deleteIcons = screen.getAllByRole('button', { name: /delete/i });
//
//         expect(deleteIcons.length).toBeGreaterThan(0);
//
//         // Click the first delete icon
//         fireEvent.click(deleteIcons[0]);
//
//         await waitFor(() => {
//             expect(deleteSportsman).toHaveBeenCalledWith(1);
//             expect(fetchSportsmen).toHaveBeenCalledTimes(2);
//         });
//     });
//
//
// });