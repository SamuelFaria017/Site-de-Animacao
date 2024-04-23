import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';
import { Principios } from './pages/Principios/Principios';
import { Desenvolvedores } from './pages/Desenvolvedores/Desenvolvedores';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Carregando } from './pages/Carregando/Carregando';
import { Recursos } from './pages/Recursos/Recursos';

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/sobre' element={<Sobre/>}></Route>
                <Route path='/12-principios-animacao' element={<Principios/>}></Route>
                <Route path='/desenvolvedores' element={<Desenvolvedores/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/cadastro' element={<Cadastro/>}></Route>
                <Route path='/carregando' element={<Carregando/>}></Route>
                <Route path='/recursos' element={<Recursos/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}