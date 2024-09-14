const Button = ({ buttonTitle, color, backgroundColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '200px',
        height: '42px',
        fontSize: '24px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: backgroundColor || '#1F1E69',
        color: color || 'white',
        marginRight: '10px',
        cursor: 'pointer',
      }}
    >
      {buttonTitle}
    </button>
  );
};

export default Button;
