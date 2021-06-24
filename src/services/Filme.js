import apiFilmes from "./apiFilmes";

export default class Filmes {
  getPopular() {
    return apiFilmes.get('movie/upcoming?language=pt-BR').then(filmes => {
      return filmes.data.results
    })
  }
}