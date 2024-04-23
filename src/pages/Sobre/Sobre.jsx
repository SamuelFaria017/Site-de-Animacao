import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import styles from './Sobre.module.css'

import StoryBoard from '../../assets/gifs/sobre/StoryBoard.gif'
import LineArt from '../../assets/gifs/sobre/LineArt.gif'
import Esboço from '../../assets/gifs/sobre/Esboço.gif'
import DetalhesFinais from '../../assets/gifs/sobre/DetalhesFinais.gif'

export function Sobre() {
    return(
        <>
            <Header/>
            <Container>
                <div className={styles.source_content}>
                    <h1 className={styles.title}>Nós somos uma equipe que deseja ensinar sobre a arte da animação. Por meio desse site vamos explicar diversos conceitos,
                                    princípios e um passo a passo de como desenvolver a sua primeira animação. Se gostou recomendo que siga nossos tutoriais e faça seu cadastro
                                     em nosso site.</h1>

                    <ul className={styles.list}>
                        <li className={styles.list_element}>
                            <h2 className={styles.element_title}>StoryBoard</h2>
                            <img className={styles.element_gif} src={StoryBoard}/>
                            <span className={styles.element_description}>Storyboard ou Esboço sequencial são organizadores gráficos tais como uma série de ilustrações ou imagens
                             arranjadas em sequência com o propósito de pré-visualizar um filme, animação ou gráfico animado, incluindo elementos interativos em websites.</span>
                        </li>

                        <li className={styles.list_element}>
                            <h2 className={styles.element_title}>Esboço</h2>
                            <img className={styles.element_gif} src={Esboço}/>
                            <span className={styles.element_description}>O segundo passo é realizar o esboço da animação, considerando as ações definidas no storyboard. Ele
                             considera apenas o movimento que vai ser realizado, não é focado nos detalhes e contém apenas algumas anotações de anatomia e proporção. Para fazer
                              o esboço lembre de considerar os princípios da animação</span>
                        </li>

                        <li className={styles.list_element}>
                            <h2 className={styles.element_title}>Line art</h2>
                            <img className={styles.element_gif} src={LineArt}/>
                            <span className={styles.element_description}>O terceiro passo é considerar o esboço e o storyboard para dar forma ao personagem, o método é chamado
                             de line art. Usando o esboço de silhueta e o design do personagem, você vai fazer animar o personagem e o deixar polido.</span>
                        </li>

                        <li className={styles.list_element}>
                            <h2 className={styles.element_title}>Detalhes finais</h2>
                            <img className={styles.element_gif} src={DetalhesFinais}/>
                            <span className={styles.element_description}>O último passo são adicionar os detalhes finais: cores, sombreamento, acessórios. Lembre-se de considerar
                             um ponto de luz e fazer as sombras no mesmo lado. Pronto, agora que você fez a sua primeira animação, basta praticar e aprender novos conceitos.</span>
                        </li>
                    </ul>
                </div>        
            </Container>
        </>
    );
}