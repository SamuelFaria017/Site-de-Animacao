import styles from './Principios.module.css'

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';

export function Principios() {
    return(
        <>
            <Header/>
            <Container>
                <h1 className={styles.title_12_principios}>Os 12 princípios básicos da animação</h1>
                <iframe className={styles.video} src="https://player.vimeo.com/video/87095612?h=daa08689f0&dnt=1&app_id=122963" frameBorder='0' allow='autoplay' allowFullScreen/>

                <div className={styles.text_container}>
                    <h2 className={styles.title_description}>Os 12 princípios da animação são de grande importância para iniciantes que
                                                        querem entrar no ramo, eles qualificam e organizam regras básicas para ajudar
                                                        os animadores a produzir animações mais eficazes.</h2>
                    <ol className={styles.list}>
                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Comprimir e Esticar</h2>
                            <span className={styles.element_description}>O primeito princípio consiste em deformar o personagem durante a sua movimentação para criar a sensação
                             de peso e elasticidade. Essa técnica ajuda a transmitir movimentos físicos de forma mais natural.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Antecipação</h2>
                            <span className={styles.element_description}>O segundo princípio tem relação com a preparação do espectador para uma cena que vira a seguir.
                             Refere-se ao momento em que o personagem se prepara para fazer algo antes de realmente fazê-lo. Criando uma sensação de antecipação e expectativa.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Encenação</h2>
                            <span className={styles.element_description}>Refere-se a disposição dos elementos em uma cena. Posicionar os personagens e objetos em uma cena
                             é importante para facilitar a compreensão do público e evitar a poluição visual da cena.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Ação direta e pose a pose</h2>
                            <span className={styles.element_description}>Ação direta é a técnica de criar a sequência da animação desenhando quadro a quadro progressivamente.
                             Isso permite uma animação mais espontânea e fluída, apesar de possíveis inconsistências de movimento.

                             Pose a pose, é a técnica em que o animador define poses-chaves da animação para então completar as suas transições. Isso permite uma animação mais controlada
                             porém menos espontânea.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Sobreposição e continuidade da ação</h2>
                            <span className={styles.element_description}>Continuidade da animação refere-se que após um movimento principal, o corpo do personagem continua
                             a se mover por um período de tempo. Assim os personagens não param de forma brusca, dando realismo a animação.
 
                             Já a sobreposição trata-se dos diferentes tempos de movimento das partes do corpo dos personagens, isso significa que nem todos os movimentos acontecem ao mesmo tempo
                             e sim em tempos distintos.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Aceleração e desaceleração</h2>
                            <span className={styles.element_description}>Envolve a variação de velocidade dos movimentos. Sugerindo que os movimentos devem começar e terminar
                             gradualmente, acelerando e desacelerando.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Movimentos em Arco</h2>
                            <span className={styles.element_description}>Sugere que o movimento dos objetos seguem a trajetória de curvas. Essa técnica adiciona
                             realismo sendo possível seguir arcos suaves e que dão mais fluidez ao produto final.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Ação Secundária</h2>
                            <span className={styles.element_description}>Envolve a adição de ações secundárias no personagem. Podendo ser gestos, expressões faciais,
                             roupas e etc... Facilitando a expressão que você quer passar com a sua animação.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Temporização</h2>
                            <span className={styles.element_description}>Determina a duração e a velocidade dos movimentos, sendo necessário movimentos lentos e rápidos
                             para ações específicas. Sendo crucial para criar efeitos desejados.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Exagero</h2>
                            <span className={styles.element_description}>Consiste em exagerar e amplificar os movimentos, formas e características dos personagens ou objetos.
                             Ela é usada para enfatizar movimentos, expressões e elementos visuais de forma criativa, cativando o público.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Desenho volumétrico</h2>
                            <span className={styles.element_description}>Princípio sobre a habilidade de desenhar desenhos sólidos e tridmensionais. É possível aplicar
                             esse aprendizado para dar forma, volume e perspectiva aos personagens, dando a possibilidade de criar animações e desenhos mais dinâmicos.</span>
                        </li>

                        <li className={styles.element_list}>
                            <h2 className={styles.element_title}>Apelo</h2>
                            <span className={styles.element_description}>Diz que toda a animação deve ser agradável e visualmente atraente aos olhos do espectador.
                             Envolve a criação de designs cativantes e movimentos elegantes.</span>
                        </li>
                    </ol>
                </div>
            </Container>
        </>
    );
}