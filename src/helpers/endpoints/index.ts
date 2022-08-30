import { auth } from './auth';
import { user } from './user';

export const endpoint = {
    baseUrl: "https://xbox-live-server.herokuapp.com/",
    ...auth,
    ...user,
};