import { useEffect, useState } from 'react';
import styles from './Home.module.css'

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';

import sliders from '../../json/db.json'

import Slide_0 from '../../assets/imgs/slides/Slide_0.jpg'
import Slide_1 from '../../assets/imgs/slides/Slide_1.jpg'
import Slide_2 from '../../assets/imgs/slides/Slide_2.jpg'

export function Home() {
    const [indexSlider, setIndexSlider] = useState(0);
    
    const tempo_de_espera = 6000; // 6000ms / 1000 = 6s

    const incrementarContador = () => {
        setIndexSlider(indexSlider + 1);

        if (indexSlider >= (sliders.length - 1)){
            setIndexSlider(0);
        }
      };

      useEffect(() => {
        const idIntervalo = setInterval(incrementarContador, tempo_de_espera);
        return () => clearInterval(idIntervalo);
      }, [indexSlider]);
      

    return(
        <>
            <Header/>
            <Container>
                <div className={styles.slider_container}>      
                    <div className={styles.slider_container_text}>
                        <h1 className={styles.slider_title}>{sliders[indexSlider].titulo}</h1>
                        <h2 className={styles.slider_description}>{sliders[indexSlider].descricao}</h2>
                    </div>   
                    <div className={styles.slider_container_image}>
                        <img className={styles.image_slider} src={new URL(sliders[indexSlider].caminho_imagem, import.meta.url)}/>
                        <div className={styles.radio_slider}>
                            <div className={`${styles.radio} ${indexSlider === 0 ? styles.active : ''}`}>
                                <div className={`${styles.radio_center} ${indexSlider === 0 ? styles.active : ''}`}/>
                            </div>
                            <div className={`${styles.radio} ${indexSlider === 1 ? styles.active : ''}`}>
                                <div className={`${styles.radio_center} ${indexSlider === 1 ? styles.active : ''}`}/>
                            </div>
                            <div className={`${styles.radio} ${indexSlider === 2 ? styles.active : ''}`}>
                                <div className={`${styles.radio_center} ${indexSlider === 2 ? styles.active : ''}`}/>
                            </div>
                        </div>
                    </div>   
                </div>
            </Container>
        </>
    );
}