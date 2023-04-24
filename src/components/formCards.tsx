import closeImgSrc from '../assets/close.svg';
import { NewFormCardsProps } from '../types/types';
import { useAppDispatch } from '../store/hooks';
import { removeCard } from '../store/features/formReducer';

const FormCards: React.FC<NewFormCardsProps> = ({ cards }) => {
  if (cards.length === 0)
    return <div className="form-cards--not-found">Nothing has been sumbitted yet.</div>;

  const dispatch = useAppDispatch();
  const listItems = cards.map((card, index) => (
    <li key={`form-card-${index}`} className="form-cards__item">
      <img
        src={closeImgSrc}
        alt="Cross"
        className="form-cards__close-img"
        onClick={() => dispatch(removeCard({ id: card.id }))}
      />
      <div className="card-info-image-container">
        <div className="card-info-container">
          <p className="form-cards__name">
            <span>Name:</span> {card.name}
          </p>
          <p>
            <span>Surname:</span> {card.surname}
          </p>
          <p>
            <span>Date of Birth:</span> {card.dateOfBirth}
          </p>
          <p>
            <span>Residence:</span> {card.residence}
          </p>
          <p>
            <span>Sex:</span> {card.sex}
          </p>
          <ul className="consent-list">
            <span>Consent:</span>

            <li>Name: {card.consents.includes('name') ? '✓' : '✗'}</li>
            <li>Surname: {card.consents.includes('surname') ? '✓' : '✗'}</li>
            <li>Date of Birth: {card.consents.includes('date-of-birth') ? '✓' : '✗'}</li>
            <li>Residence: {card.consents.includes('residence') ? '✓' : '✗'}</li>
            <li>Photo: {card.consents.includes('photo') ? '✓' : '✗'}</li>
            <li>Sex: {card.consents.includes('sex') ? '✓' : '✗'}</li>
          </ul>
        </div>
        <img
          src={card.fileUrl}
          alt={`Image of ${card.name} ${card.surname}`}
          className="form-cards__image"
        />
      </div>
    </li>
  ));
  return (
    <ul className="form-cards" data-testid="form-cards">
      {listItems}
    </ul>
  );
};

export default FormCards;
