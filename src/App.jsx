import './styles/global.css';

import Header from './components/Header';
import Content from './components/Content';
import Contato from './components/Contato';
import Rodape from './components/Rodape';
import Mapa from './components/Mapa';
import Feedbacks from './components/Feedbacks';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Content />
        </section>
        <section id="feedbacks">
          <Feedbacks />
        </section>

        <section id="contact">
          <Contato />
        </section>

        <section>
            <Mapa />
        </section>
      </main>
      <Rodape />
    </>
  );
}
