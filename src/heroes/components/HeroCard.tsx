import { useState } from 'react';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }: any) => {
  if (alter_ego === characters) return (<></>);
  return <p>{characters} </p>;
};

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters }: any) => {

  const heroImgUrl = `${import.meta.env.BASE_URL}heroes/${id}.jpg`;

  const [imgError, setImgError] = useState(false);

  const imageSrc = imgError
    ? `https://via.placeholder.com/300x450/2563eb/white?text=${superhero.replace(' ', '+')}`
    : heroImgUrl;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={imageSrc}
              className="card-img"
              alt={superhero}
              onError={() => {
                console.error('❌ No se pudo cargar:', heroImgUrl);
                setImgError(true);
              }}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero} </h5>
              <p className="card-text"> {alter_ego}</p>
              <CharactersByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance} </small>
              </p>
              <Link to={`${import.meta.env.BASE_URL}hero/${id}`}>
                Mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};