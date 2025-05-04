import logo from '../../assets/logo.png';
import Button from '../Button/Button';

const Header = ({ setTab }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#1F1E69',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          color: 'white',
          fontFamily: 'Lato',
          justifyContent: 'space-between',
        }}
      >
        <img src={logo} alt="Logo" style={{ width: '200px', height: '20px' }} />
        <p>PROVA OSCE</p>
      </div>
      <div style={{ marginTop: '10px', marginLeft: '5px' }}>
        <Button
          buttonTitle="Internato"
          backgroundColor="#0fbb75"
          onClick={() => setTab(false)}
        />
        <Button
          buttonTitle="Ciclo Clínico"
          backgroundColor="#e8df21"
          onClick={() => setTab(true)}
        />
      </div>
    </div>
  );
};

export default Header;
