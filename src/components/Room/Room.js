const Room = ({ element }) => {
  return (
    <p
      style={{
        border: 'solid black 2px',
        borderRadius: '100%',
        padding: '10px 15px',
        margin: '10px',
        fontSize: '24px',
        color: 'white',
        backgroundColor: element === 'D' && '#1F1E69',
      }}
    >
      {element}
    </p>
  );
};

export default Room;
