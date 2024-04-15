import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import styles from './Home.module.css'

export function Home() {
    return(
        <>
            <Header/>
            <Container>
                <div className={styles.slider_container}>
                    
                </div>
            </Container>
        </>
    );
}