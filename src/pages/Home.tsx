import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo.</strong>
        <p>Tire dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo do site Let Me Ask" />
          <button>
            <img src={googleIconImg} alt="Logo da google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input
              type="text"
              placeholder="Digite o código da sala"
              name=""
              id=""
            />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
