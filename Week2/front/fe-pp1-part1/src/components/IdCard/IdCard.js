import './styles.css';

function IdCard(props) {
  return (
    <div className="card">
      <img src={props.picture} alt="placeholder" />
      <ul className="details">
        <li>First Name: {props.firstName}</li>
        <li>Last Name: {props.lastName}</li>
        <li>gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth: {props.birth}</li>
      </ul>
    </div>
  );
}

export default IdCard;
