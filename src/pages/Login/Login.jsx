import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import styles from './Login.module.css'

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';

export function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        cpf: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            nome: '',
            cpf: ''
        });

        navigate('/');
    };

    return(
        <>
            <Header/>
            <Container>
                <div className={styles.form_container}>
                    <div className={styles.form_container_header}>
                        <h1 className={styles.title}>Login</h1>

                        <NavLink className={styles.link_cadastro} to="/cadastro">Já tem uma conta?</NavLink>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.form_label}>
                            Nome:
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                placeholder="Digíte um nome"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>
                        <label className={styles.form_label}>
                            Cpf:
                            <input
                                type="number"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleInputChange}
                                placeholder="Digíte um CPF"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>
                        <button className={styles.form_button} type="submit">Logar</button>
                    </form>
                </div>
            </Container>
        </>
    );
}