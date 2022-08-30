import { endpoint } from 'helpers/endpoints';

export const Game = {
    createGame: () => `${endpoint.baseUrl}/Game`,
    listGame: () => `${endpoint.baseUrl}/Game`,
    GameById: (id: string) => `${endpoint.baseUrl}/Game/${id}`,
};