import styles from "../styles/Contato.module.css";

export default function Contato() {
  const phoneNumber = "619262-5512"; 

  return (
    <div className={styles.container}>
      <h2>Fale Conosco</h2>
      <p>Entre em contato diretamente pelo WhatsApp clicando no botão abaixo:</p>

      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        📞 Falar no WhatsApp
      </a>
    </div>
  );
}
