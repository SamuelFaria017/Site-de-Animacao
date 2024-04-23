import { Container } from '../../components/Container/Container';

import styles from './Desenvolvedores.module.css';

import { Header } from '../../components/Header/Header';

export function Desenvolvedores() {
    return(
        <>
            <Header/>
            <Container>
                <div className={styles.container_desenvolvedores}>
                    <div className={styles.container_desenvolvedores_card}>
                        <div className={styles.container_card_img}>
                            <img className={styles.card_img} src='https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/229078788_530937641332485_892811376856998379_n.jpg?ccb=11-4&oh=01_Q5AaIH7imhuKrC8zsh_b22Jhg7_s7e6yslJ9ZVJ5FQWla8qm&oe=6632661F&_nc_sid=e6ed6c&_nc_cat=107'/> 
                        </div>

                        <div className={styles.container_card_description}>
                            <h1 className={styles.card_description}>Samuel Faria dos Santos</h1>
                        </div>
                    </div>

                    <div className={styles.container_desenvolvedores_card}>
                        <div className={styles.container_card_img}>
                            <img className={styles.card_img} src='https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/183731406_255687203009909_3580385612588662827_n.jpg?ccb=11-4&oh=01_Q5AaIE8-eukB0vdaEX_OyIG70IiXwfRQksZKrXTxYtRdI5hU&oe=662FE81E&_nc_sid=e6ed6c&_nc_cat=104'/> 
                        </div>

                        <div className={styles.container_card_description}>
                            <h1 className={styles.card_description}>Otavio Augusto de Souza Silva</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}