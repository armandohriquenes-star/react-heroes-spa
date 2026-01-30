import { heroes } from '../Data/heroes';


export const getHeroesByPublisher = (publisher: any) => {
  //console.log('🔍 Publisher recibido en helper:', publisher);

  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter(heroe => heroe.publisher === publisher);
};