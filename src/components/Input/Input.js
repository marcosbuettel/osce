const Input = ({ label, inputName, value, handleChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px',
        marginBottom: '10px',
      }}
    >
      <label
        style={{ fontWeight: 'bold', fontSize: '22px', fontFamily: 'Lato' }}
      >
        {label}:
      </label>
      <input
        name={inputName}
        type="number"
        value={value}
        onChange={(e) => handleChange(e)}
        style={{
          outline: 'none',
          padding: '0 10px',
          width: '300px',
          height: '50px',
          borderRadius: '3px',
          fontSize: '24px',
          border: '1px solid #dcdcdc',
        }}
      ></input>
    </div>
  );
};

export default Input;
