import { profile } from "types/api/profile";
import api from "./Api";

const createProfileService = {
  createProfile: (values: profile) =>
    api
      .post("/profile", values)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

const findAllProfileService = {
  allProfiles: () =>
    api
      .get("/profile")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log("Error: ", error)),
};

const findByIdProfileService = {
  findProfileById: (id: string) =>
    api
      .get(`/profile/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),

  findHomeProfileById: (id: string) =>
    api
      .get(`/homepage/${id}`)
      .then((response: any) => response)
      .catch((error: any) => console.log("Error: ", error)),
};

export { createProfileService, findAllProfileService, findByIdProfileService };
