import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Carregando.module.css'

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';

import CarregandoGIF from '../../assets/gifs/Carregando/Carregando.gif'

export function Carregando() {
    const navigate = useNavigate();
    const delay = 2000;

    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, delay);
    }, [])

    return(
        <>
            <Header/>
            <Container>
                <img  className={styles.gif} src={CarregandoGIF}/>
            </Container>
        </>
    );
}