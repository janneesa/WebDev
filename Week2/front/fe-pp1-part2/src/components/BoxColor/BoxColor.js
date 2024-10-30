function rgbToHex(r, g, b) {
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function BoxColor({ r, g, b }) {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = rgbToHex(r, g, b);

  return (
    <div
      style={{
        width: '15rem',
        height: '5rem',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
        border: '1px solid black',
      }}
    >
      <div>
        <p>
          rgb({r},{g},{b})
        </p>
        <p>{hexColor}</p>
      </div>
    </div>
  );
}

export default BoxColor;
