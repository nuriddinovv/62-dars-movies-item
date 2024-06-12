import client, { BaseUrl, BearerToken } from "./repository";

class SelectedMovieByID {
  async getMoviesById(name, endPoint) {
    const endpoint = `${endPoint}/${name}`;

    try {
      const response = await client.get(BaseUrl + endpoint, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${BearerToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error; // Xatolarni yuklash
    }
  }
}

export default new SelectedMovieByID();
