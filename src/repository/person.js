import client, { BaseUrl, BearerToken } from "./repository";

class Person {
  getMoviesByName(name) {
    const endPoint = `person/${name}`;

    const person = client
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

    return person;
  }
}

export default new Person();
