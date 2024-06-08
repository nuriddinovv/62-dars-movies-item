import client, { BaseUrl, BearerToken } from "./repository";

class Movies {
  getMoviesByName(name) {
    const endPoint = `movie/${name}`;

    const movies = client
      .get(BaseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${BearerToken}`,
        },
      })
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        return err;
      });

    return movies;
  }
}

export default new Movies();
