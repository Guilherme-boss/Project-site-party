import Section from '../components/Section';
import styles from './Services.module.css';

export default function Services() { 
    return (
        <div className={styles.container}>
            <Section 
                title="DECORAÇÃO"
                text="Cada festa é única e especial, e nossa equipe transforma sonhos em realidade com decorações incríveis e personalizadas. 
                    Criamos cenários encantadores que transportam os pequenos e seus convidados para um mundo mágico. Do clássico ao moderno, trabalhamos cada detalhe com criatividade e carinho, garantindo que a festa tenha um visual impecável.
                    Aqui, cada balão, cada cor e cada elemento decorativo são escolhidos com amor para tornar o momento inesquecível!"
                image="/decoracao.png"
            />
            <Section 
                title="BUFFET INFANTIL"
                text="Nosso buffet conta com um cardápio variado e delicioso, pensado para agradar tanto as crianças quanto os adultos. 
                    Oferecemos opções de salgados, doces, lanches e bebidas, sempre com ingredientes frescos e de qualidade. 
                    Bolo,Água, Pipoca, Mini-pizza, Batata-frita,R efrigerantes, Pão de queijo, Algodão doce
                    6 tipos de doces
                    Dois sucos naturais
                    Carrocinha de hot dog
                    20 tipos de salgados fritos e assados"
                image="/buffet.png"
                reverse={true}
            />
            <Section 
                title="DIVERSÃO"
                text="Aqui a diversão nunca acaba! Nosso espaço conta com mais de 10 brinquedos incríveis para garantir que as crianças aproveitem ao máximo. Com opções seguras e adequadas para diferentes idades, garantimos momentos inesquecíveis de aventura e alegria.
                As crianças podem se jogar na piscina de bolinhas, desafiar os amigos no pula-pula e se aventurar no emocionante tobogã. Para os pequenos que amam desafios, o La Bamba e o Tombo Legal garantem risadas sem fim! E para os apaixonados por jogos, nossa Game Zone traz opções como Guitar Hero, Air Game e Pebolim, proporcionando muita interação e diversão."
                image="/diversao.png"
            />
            <Section 
                title="EQUIPE ESPECIALIZADA"
                text="A sua tranquilidade é a nossa prioridade! Contamos com uma equipe treinada para recepcionar seus convidados, servir com eficiência e acompanhar as crianças nos brinquedos, garantindo um evento organizado e seguro.
                Nossa equipe é composta por gerente de festa, recepcionistas, monitores, equipe de cozinha, garçons para adultos e garçonetes para crianças com descartáveis, garantindo um atendimento impecável em cada detalhe.
                Aqui, cada festa é conduzida com profissionalismo e dedicação para que você aproveite cada momento com total tranquilidade!"
                image="/decoracao2.png"
                reverse={true} 
            />
        </div>
    );
}
