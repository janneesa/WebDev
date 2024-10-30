import masterLogo from '../../images/master.png';
import visalogo from '../../images/visa.png';
import './styles.css';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const lastFourDigits = number.slice(-4);
  const hiddenNumbers = '•••• •••• •••• ';

  return (
    <div className="card" style={{ backgroundColor: bgColor, color: color }}>
      <div className="typeline">
        {type === 'Visa' ? (
          <img src={visalogo} alt="visa" />
        ) : (
          <img src={masterLogo} alt="mastercard" />
        )}
      </div>
      <div className="number">
        <p>
          <span className="hidden-numbers">{hiddenNumbers}</span>
          {lastFourDigits}
        </p>
      </div>
      <div className="details">
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div className="owner">
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
