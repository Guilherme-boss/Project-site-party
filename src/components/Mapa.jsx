import styles from '../styles/Mapa.module.css'
export default function Mapa(){
    return(
        <section className={styles.container}>             
            <div className={styles.map}>        
                <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5348232696215!2d-48.101081824141424!3d-15.828463684816677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccde4cc92b33%3A0xcb21c808ec180d26!2sSt.%20M%20Qnm%205%20Conjunto%20P%20-%20St.%20M%20-%20Ceil%C3%A2ndia%2C%20Bras%C3%ADlia%20-%20DF%2C%20Brasil!5e0!3m2!1spt-BR!2sie!4v1741540066521!5m2!1spt-BR!2sie" 
                width="1600px"
                height="1000"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                ></iframe>
            </div>
        </section>

    )
}
