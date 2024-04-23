import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Cadastro.module.css'

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';

export function Cadastro() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        data_de_nascimento: '',
        sexo: '',
        celular: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            nome: '',
            cpf: '',
            data_de_nascimento: '',
            sexo: '',
            celular: '',
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: ''
        });

        navigate('/carregando');
    };

    return(
        <>
            <Header/>
            <Container>
                <div className={styles.form_container}>
                    <h1 className={styles.title}>Cadastrar</h1>
                    
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

                        <label className={styles.form_label}>
                            Data de nascimento:
                            <input
                                type="date"
                                name="data_da_nascimento"
                                onChange={handleInputChange}
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            Sexo:
                            <input
                                type="text"
                                name="sexo"
                                value={formData.sexo}
                                onChange={handleInputChange}
                                placeholder="Digíte seu sexo"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            Celular:
                            <input
                                type="tel"
                                name="celular"
                                value={formData.celular}
                                onChange={handleInputChange}
                                className={styles.form_inputs}
                                placeholder="(99) 9999-9999"
                                pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                                title="Número de telefone precisa ser no formato (99) 9999-9999"
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            CEP:
                            <input
                                type="text"
                                name="cep"
                                value={formData.cep}
                                onChange={handleInputChange}
                                placeholder="Digíte seu CEP"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            Rua:
                            <input
                                type="text"
                                name="rua"
                                value={formData.rua}
                                onChange={handleInputChange}
                                placeholder="Digíte sua rua"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            Número:
                            <input
                                type="number"
                                name="numero"
                                value={formData.numero}
                                onChange={handleInputChange}
                                placeholder="Digíte seu número"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            Complemento:
                            <input
                                type="text"
                                name="complemento"
                                value={formData.complemento}
                                onChange={handleInputChange}
                                placeholder="Digíte um complemento"
                                className={styles.form_inputs}
                            />
                        </label>

                        <label className={styles.form_label}>
                            Bairro:
                            <input
                                type="text"
                                name="bairro"
                                value={formData.bairro}
                                onChange={handleInputChange}
                                placeholder="Digíte seu bairro"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>
                        
                        <label className={styles.form_label}>
                            Cidade:
                            <input
                                type="text"
                                name="cidade"
                                value={formData.cidade}
                                onChange={handleInputChange}
                                placeholder="Digíte sua cidade"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <label className={styles.form_label}>
                            Estado:
                            <input
                                type="text"
                                name="estado"
                                value={formData.estado}
                                onChange={handleInputChange}
                                placeholder="Digíte seu estado"
                                className={styles.form_inputs}
                                required="required"
                            />
                        </label>

                        <button className={styles.form_button} type="submit">Enviar</button>
                    </form>
                </div>
            </Container>
        </>
    );
}