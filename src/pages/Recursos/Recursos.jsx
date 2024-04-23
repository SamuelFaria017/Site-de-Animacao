import styles from './Recursos.module.css';

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';

export function Recursos() {
    return(
        <>
            <Header/>
            <Container>
                <table className={styles.table}>
                    <caption className={styles.table_caption}>
                        Sites para ajudar no seu aprendizado.
                    </caption>

                    <thead className={styles.table_thead}>
                        <tr className={styles.table_tr}>
                            <th className={styles.table_th}>Nome do site</th>
                            <th className={styles.table_th}>HyperLink</th>
                        </tr>
                    </thead>

                    <tbody className={styles.table_tbody}>
                        <tr className={styles.table_tr}>
                            <th className={styles.table_th}>Animaker</th>
                            <td className={styles.table_td}><a className={styles.table_a} href="https://www.animaker.co/" target="_blank">https://www.animaker.co/</a></td>
                        </tr>

                        <tr className={styles.table_tr}>
                            <th className={styles.table_th}>Animatron</th>
                            <td className={styles.table_td}><a className={styles.table_a} href="https://www.animatron.com/" target="_blank">https://www.animatron.com/</a></td>
                        </tr>

                        <tr className={styles.table_tr}>
                            <th className={styles.table_th}>Sumo</th>
                            <td className={styles.table_td}><a className={styles.table_a} href="https://paint.sumo.app/?lang=en" target="_blank">https://paint.sumo.app/?lang=en</a></td>
                        </tr>

                        <tr className={styles.table_tr}>
                            <th className={styles.table_th}>Drawspace</th>
                            <td className={styles.table_td}><a className={styles.table_a} href="https://www.drawspace.com/" target="_blank">https://www.drawspace.com/</a></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
}