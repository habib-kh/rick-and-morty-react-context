import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { Home } from '../pages';
import api from '../services/api';
import { renderWithRouter, useWithRedux } from '../utils/test-utils';

jest.mock('../services/api');
jest.mock('../hooks/useEffect', () => {
  return { useEffect: require('react').useLayoutEffect };
});
afterEach(cleanup);
beforeEach(() => {
  api.get.mockImplementation((url) => {
    switch (url) {
      case 'character/':
        return Promise.resolve({
          data: {
            results: [
              {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                  name: 'Earth (C-137)',
                  url: 'https://rickandmortyapi.com/api/location/1',
                },
                location: {
                  name: 'Earth (Replacement Dimension)',
                  url: 'https://rickandmortyapi.com/api/location/20',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                episode: [
                  'https://rickandmortyapi.com/api/episode/1',
                  'https://rickandmortyapi.com/api/episode/2',
                  'https://rickandmortyapi.com/api/episode/3',
                  'https://rickandmortyapi.com/api/episode/4',
                  'https://rickandmortyapi.com/api/episode/5',
                  'https://rickandmortyapi.com/api/episode/6',
                  'https://rickandmortyapi.com/api/episode/7',
                  'https://rickandmortyapi.com/api/episode/8',
                  'https://rickandmortyapi.com/api/episode/9',
                  'https://rickandmortyapi.com/api/episode/10',
                  'https://rickandmortyapi.com/api/episode/11',
                  'https://rickandmortyapi.com/api/episode/12',
                  'https://rickandmortyapi.com/api/episode/13',
                  'https://rickandmortyapi.com/api/episode/14',
                  'https://rickandmortyapi.com/api/episode/15',
                  'https://rickandmortyapi.com/api/episode/16',
                  'https://rickandmortyapi.com/api/episode/17',
                  'https://rickandmortyapi.com/api/episode/18',
                  'https://rickandmortyapi.com/api/episode/19',
                  'https://rickandmortyapi.com/api/episode/20',
                  'https://rickandmortyapi.com/api/episode/21',
                  'https://rickandmortyapi.com/api/episode/22',
                  'https://rickandmortyapi.com/api/episode/23',
                  'https://rickandmortyapi.com/api/episode/24',
                  'https://rickandmortyapi.com/api/episode/25',
                  'https://rickandmortyapi.com/api/episode/26',
                  'https://rickandmortyapi.com/api/episode/27',
                  'https://rickandmortyapi.com/api/episode/28',
                  'https://rickandmortyapi.com/api/episode/29',
                  'https://rickandmortyapi.com/api/episode/30',
                  'https://rickandmortyapi.com/api/episode/31',
                  'https://rickandmortyapi.com/api/episode/32',
                  'https://rickandmortyapi.com/api/episode/33',
                  'https://rickandmortyapi.com/api/episode/34',
                  'https://rickandmortyapi.com/api/episode/35',
                  'https://rickandmortyapi.com/api/episode/36',
                  'https://rickandmortyapi.com/api/episode/37',
                  'https://rickandmortyapi.com/api/episode/38',
                  'https://rickandmortyapi.com/api/episode/39',
                  'https://rickandmortyapi.com/api/episode/40',
                  'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/1',
                created: '2017-11-04T18:48:46.250Z',
              },
              {
                id: 2,
                name: 'Morty Smith',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                  name: 'Earth (C-137)',
                  url: 'https://rickandmortyapi.com/api/location/1',
                },
                location: {
                  name: 'Earth (Replacement Dimension)',
                  url: 'https://rickandmortyapi.com/api/location/20',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                episode: [
                  'https://rickandmortyapi.com/api/episode/1',
                  'https://rickandmortyapi.com/api/episode/2',
                  'https://rickandmortyapi.com/api/episode/3',
                  'https://rickandmortyapi.com/api/episode/4',
                  'https://rickandmortyapi.com/api/episode/5',
                  'https://rickandmortyapi.com/api/episode/6',
                  'https://rickandmortyapi.com/api/episode/7',
                  'https://rickandmortyapi.com/api/episode/8',
                  'https://rickandmortyapi.com/api/episode/9',
                  'https://rickandmortyapi.com/api/episode/10',
                  'https://rickandmortyapi.com/api/episode/11',
                  'https://rickandmortyapi.com/api/episode/12',
                  'https://rickandmortyapi.com/api/episode/13',
                  'https://rickandmortyapi.com/api/episode/14',
                  'https://rickandmortyapi.com/api/episode/15',
                  'https://rickandmortyapi.com/api/episode/16',
                  'https://rickandmortyapi.com/api/episode/17',
                  'https://rickandmortyapi.com/api/episode/18',
                  'https://rickandmortyapi.com/api/episode/19',
                  'https://rickandmortyapi.com/api/episode/20',
                  'https://rickandmortyapi.com/api/episode/21',
                  'https://rickandmortyapi.com/api/episode/22',
                  'https://rickandmortyapi.com/api/episode/23',
                  'https://rickandmortyapi.com/api/episode/24',
                  'https://rickandmortyapi.com/api/episode/25',
                  'https://rickandmortyapi.com/api/episode/26',
                  'https://rickandmortyapi.com/api/episode/27',
                  'https://rickandmortyapi.com/api/episode/28',
                  'https://rickandmortyapi.com/api/episode/29',
                  'https://rickandmortyapi.com/api/episode/30',
                  'https://rickandmortyapi.com/api/episode/31',
                  'https://rickandmortyapi.com/api/episode/32',
                  'https://rickandmortyapi.com/api/episode/33',
                  'https://rickandmortyapi.com/api/episode/34',
                  'https://rickandmortyapi.com/api/episode/35',
                  'https://rickandmortyapi.com/api/episode/36',
                  'https://rickandmortyapi.com/api/episode/37',
                  'https://rickandmortyapi.com/api/episode/38',
                  'https://rickandmortyapi.com/api/episode/39',
                  'https://rickandmortyapi.com/api/episode/40',
                  'https://rickandmortyapi.com/api/episode/41',
                ],
                url: 'https://rickandmortyapi.com/api/character/2',
                created: '2017-11-04T18:50:21.651Z',
              },
            ],
          },
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });

  renderWithRouter(useWithRedux(<Home />));
});
describe('Home Page', () => {
  it('should render without problem', async () => {
    expect(api.get).toBeCalledTimes(1);
    const element = await screen.findByText(/Rick Sanchez/);
    const cards = screen.getAllByTestId('character-card');
    expect(cards).toHaveLength(2);
    expect(element).toBeInTheDocument();
  });
});
