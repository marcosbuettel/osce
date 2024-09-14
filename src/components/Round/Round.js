import { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Round = ({ value, showRound }) => {
  const [time, setTime] = useState('');
  const [roomDisposition, setRoomDisposition] = useState([]);

  useEffect(() => {
    setTime('');
    setRoomDisposition([]);
    distribuirAlunos();
  }, [showRound]);

  const distribuirAlunos = () => {
    const alunos = value['alunos'];
    const rodadas = value['rodadas'];
    if (!alunos || !rodadas) return;

    var disposicao = [];
    var continueExec = true;
    var count = 0;
    var i = 0;

    while (continueExec === true) {
      for (var j = 0; j < rodadas; j++) {
        if (i === 0) disposicao.push(['O']);
        else if (count >= alunos) {
          continueExec = false;
        } else {
          if (rodadas * 4 > count) disposicao[j].push('O');
          else disposicao[j].push('D');
        }
        count++;
      }
      i = 1;
    }

    setTime(minutosParaHoras(5 * alunos));
    setRoomDisposition(disposicao);
  };

  const minutosParaHoras = (minutos) => {
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    return `${horas} horas ${minutosRestantes} minutos`;
  };

  return (
    <div style={{ padding: '10px' }}>
      <h2>{time}</h2>
      {roomDisposition.length > 0 &&
        roomDisposition.map((row) => {
          return (
            <div style={{ display: 'flex' }}>
              {row.map((e) => {
                return <Room element={e} />;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Round;
