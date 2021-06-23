import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useParams } from 'react-router-dom';
import '../styles/room.scss';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

type RoomParams = { id: string };

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const roomId = params.id;

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();
    if (newQuestion.trim() === '') return;
    if (!user) throw new Error('You must be logged in');

    const question = {
      content: newQuestion,
      author: { name: user.name, avatar: user.avatar },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion(' ');
  }

  return (
    <div id='page-room'>
      <header>
        <div className='content'>
          <img src={logoImg} alt='Let Me Ask logo' />
          <RoomCode code={roomId} />
        </div>
      </header>
      <main className='content'>
        <div className='room-title'>
          <h1>Sala</h1>
          <span>perguntas</span>
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder='Faça sua pergunta'
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div className='form-footer'>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type='submit' disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
