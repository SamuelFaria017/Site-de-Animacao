import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';
import { Principios } from './pages/Principios/Principios';
import { Desenvolvedores } from './pages/Desenvolvedores/Desenvolvedores';
import { Cadastro } from './pages/Cadastro/Cadastro';

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/sobre' element={<Sobre/>}></Route>
                <Route path='/12-principios-animacao' element={<Principios/>}></Route>
                <Route path='/desenvolvedores' element={<Desenvolvedores/>}></Route>
                <Route path='/cadastro' element={<Cadastro/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}