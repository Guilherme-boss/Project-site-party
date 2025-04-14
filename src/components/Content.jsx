import styles from '../styles/Content.module.css';
import { FaWhatsapp, FaStar } from 'react-icons/fa';

export default function Content() {
  return (
    <section id="home" className={styles.container}>


      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.heroText}>
            <h1>Encantos da Jennifer</h1>
            <p>Transformamos sonhos em festas inesquecíveis com decorações temáticas e personalizadas</p>
            <a
              href="https://wa.me/55619262-5512"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FaWhatsapp className={styles.icon} />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <h2>Quem Somos</h2>
        <p>
        A história da Word Fest Cenários começa em janeiro de 2019, somos uma equipe de 5 pessoas, liderada por uma paraguaia chamada Jennifer Kranich cheia de sonhos mágicos e ideias que junto á sua equipe carregam no coração, realizar e compartilhar os momentos mais mágicos na vida dos seus clientes. Seu sonho, nosso mundo!
        </p>
      </div>

      <div className={styles.features}>
        <h3>Por que escolher a gente?</h3>
        <ul>
          <li><FaStar className={styles.icon} /> Decorações 100% personalizadas para o tema da sua festa</li>
          <li><FaStar className={styles.icon} /> Cenários criativos e feitos com carinho em cada detalhe</li>
          <li><FaStar className={styles.icon} /> Atendimento acolhedor e acompanhamento até o dia do evento</li>
          <li><FaStar className={styles.icon} /> Atendemos Ceilândia, Taguatinga e regiões próximas</li>
        </ul>
      </div>

      <div className={styles.videoBlock}>
        <div className={styles.videoWrapper}>
          <video
            src="/VideoUrso.mp4"
            controls
            className={styles.video}
          />
        </div>
        <div className={styles.videoText}>
          <h3>Transformamos sonhos em realidade!</h3>
            <p>
              Veja como ficou essa linda festa de aniversário que decoramos com muito amor e cuidado nos detalhes. Cada cantinho pensado para encantar crianças e adultos.
            </p>
        </div>
      </div>

      <div className={styles.finalCall}>
        <h2>Vamos transformar sua próxima festa em um momento mágico?</h2>
        <p>Fale com a gente e descubra como criar uma decoração inesquecível, cheia de cor, alegria e carinho nos detalhes.</p>
        <a
          href="https://wa.me/55619262-5512"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          👉 Solicitar Orçamento pelo WhatsApp
        </a>
      </div>
      <div className={styles.gallerySection}>
      <h2>Nossas Decorações Temáticas</h2>

        <div className={styles.galleryGrid}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={styles.galleryItem}>
              <img src={`/${i + 1}img.jpg`} alt={`Espaço ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.decorThemes}>

        <div className={styles.themeCard}>
          <img src="/aviao.jpg" alt="Tema Viagem e Avião" />
          <div>
            <h4>Tema Viagem</h4>
            <p>Prepare-se para decolar! Essa decoração transforma a festa em uma volta ao mundo, com aviões, nuvens e destinos incríveis. Perfeita para pequenos aventureiros com grandes sonhos.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/dinossauros.jpg" alt="Tema Dinossauros" />
          <div>
            <h4>Tema Dinossauros</h4>
            <p>Direto da era jurássica para a sua festa! Réplicas gigantes, vegetação exuberante e um clima de aventura fazem desse tema o favorito dos mini paleontólogos.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/mario.jpg" alt="Tema Mario Bros" />
          <div>
            <h4>Tema Mario Bros</h4>
            <p>Um universo cheio de diversão! Com personagens icônicos e cenários vibrantes, essa decoração transporta os convidados direto para o mundo dos games.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/homemAranha.jpg" alt="Tema Homem-Aranha" />
          <div>
            <h4>Tema Homem-Aranha</h4>
            <p>O herói favorito da criançada chegou para salvar o dia! Com uma cidade cenográfica e elementos urbanos, a decoração é pura ação e emoção.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/mine.jpg" alt="Tema Minnie" />
          <div>
            <h4>Tema Minnie</h4>
            <p>Delicadeza e alegria em cada detalhe! Com o charme da Minnie, essa decoração encanta com cores vibrantes, laços e muito amor para os pequenos.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/oficinaCarro.jpg" alt="Tema Carros" />
          <div>
            <h4>Tema Carros</h4>
            <p>Velocidade total na sua comemoração! Com pneus, cones e pistas decorativas, esse tema é ideal para apaixonados por corridas e muita ação.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/ninjas.jpg" alt="Tema Tartaruga-Ninja" />
          <div>
            <h4>Tema Tartaruga-Ninja</h4>
            <p>Direto dos esgotos de Nova York para sua festa! Com cenário urbano e personagens carismáticos, os heróis de casco garantem uma decoração cheia de atitude.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/mar.jpg" alt="Tema Oceano" />
          <div>
            <h4>Tema Oceano</h4>
            <p>Um mergulho encantador! Essa decoração transforma a festa em um mundo subaquático mágico, com conchas, peixinhos e tons suaves de azul e rosa.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/minicraft.jpg" alt="Tema Minecraft" />
          <div>
            <h4>Tema Minecraft</h4>
            <p>Direto do mundo dos blocos! Essa decoração é um verdadeiro playground criativo para os fãs do jogo, com muitos detalhes e elementos pixelados.</p>
          </div>
        </div>

        <div className={styles.themeCard}>
          <img src="/hotwheels.jpg" alt="Tema Hot Wheels" />
          <div>
            <h4>Tema Hot Wheels</h4>
            <p>Adrenalina sobre rodas! Inspirada no universo das corridas, essa decoração é cheia de cores, pistas e carros incríveis que aceleram a emoção da festa.</p>
          </div>
        </div>
      </div>
      <h2 className={styles.videoSectionTitle}>Veja nossas decorações em vídeo</h2>


        <div className={styles.videoBlockSet}>
          <div className={styles.videoWrapperSet}>
            <video src="/1.mp4" controls className={styles.videoSet} />
          </div>
          <div className={styles.videoTextSet}>
            <h3>Tema Mine</h3>
            <p>Charme, delicadeza e muitas bolinhas! Com laços vermelhos, detalhes dourados e o encanto da personagem mais querida da Disney, essa decoração da Minnie transforma a festa em um cenário cheio de amor, estilo e alegria para todos os convidados.</p>
          </div>
        </div>

        <div className={styles.videoBlockSet}>
          <div className={styles.videoWrapperSet}>
            <video src="/2.mp4" controls className={styles.videoSet} />
          </div>
          <div className={styles.videoTextSet}>
            <h3>Tema Espaço</h3>
            <p>Prepare-se para decolar rumo à diversão! Essa decoração leva os pequenos direto para o espaço, com foguetes, planetas e estrelas que iluminam o ambiente. Um tema criativo e colorido que transforma a festa em uma verdadeira missão intergaláctica.</p>
          </div>
        </div>

        <div className={styles.videoBlockSet}>
          <div className={styles.videoWrapperSet}>
            <video src="/3.mp4" controls className={styles.videoSet} />
          </div>
          <div className={styles.videoTextSet}>
            <h3>Tema Minecraft</h3>
            <p>Uma explosão de blocos, aventura e criatividade! Com elementos pixelados, personagens e vegetação do mundo do Minecraft, essa decoração faz qualquer fã do jogo se sentir dentro da própria partida. Ideal para aniversariantes que amam construir, explorar e brincar!</p>
          </div>
        </div>
    </section>
  );
}
