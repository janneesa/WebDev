function Greetings({ lang, children }) {
  let greeting;

  switch (lang) {
    case 'fi':
      greeting = 'Hei';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
  }

  return (
    <div
      style={{
        border: '1px solid #000',
        display: 'flex',
        margin: '20px',
        padding: '10px',
      }}
    >
      {greeting} {children}
    </div>
  );
}
export default Greetings;
