import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';
import Round from '../Round/Round';
import logo from '../../assets/logo.png';

const Home = () => {
  const [inputValue, setInputValue] = useState({});
  const [showRound, setShowRound] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleClean = () => {
    setShowRound(!showRound);
    setInputValue({
      ...inputValue,
      ['alunos']: '',
      ['rodadas']: '',
      ['espelhamento']: '',
    });
  };

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
      <div style={{ display: 'flex', padding: '10px', marginTop: '20px' }}>
        <Input
          label="Alunos"
          inputName="alunos"
          handleChange={handleChange}
          value={inputValue['alunos']}
        />
        <Input
          label="Rodadas"
          inputName="rodadas"
          handleChange={handleChange}
          value={inputValue['rodadas']}
        />
        <Input
          label="Espelhamento"
          inputName="espelhamento"
          handleChange={handleChange}
          value={inputValue['espelhamento']}
        />
      </div>
      <div style={{ display: 'flex', padding: '10px' }}>
        <Button
          buttonTitle={'Gerar'}
          onClick={() => setShowRound(!showRound)}
        />
        <Button
          buttonTitle={'Limpar'}
          onClick={() => handleClean()}
          color="white"
          backgroundColor="#d0d0d0"
        />
      </div>
      <div>
        {Array.from({ length: inputValue['espelhamento'] || 1 }).map(() => (
          <Round value={inputValue} showRound={showRound} />
        ))}
      </div>
    </div>
  );
};

export default Home;
