import { heroes } from "../Data/heroes";





export const getHeroById = (id: any) => {

  return heroes.find(hero => hero.id === id);
};