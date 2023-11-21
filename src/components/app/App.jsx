import { useState } from 'react';
import Header from '../header/Header';
import Info from '../info/Info';
import './App.scss'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Menu from '../menu/Menu';
import NotFound from '../pages/NotFound';
import Team from '../team/Team';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';

function App() {

  const [catalog,setCatalog] = useState([
    {
      name:'Розклад',
      img:'./img/schedule.jpg',
      link:'/schedule',
    },
    {
      name:'Домашні Завдання',
      img:'./img/homework.png',
      link:'/homework'
    },
    {
      name:'Екзамени',
      img:'./img/exams.jpeg',
      link:'/exams'
    },
    {
      name:'Викладачі',
      img:'./img/teacher.jpg',
      link:'/teachers'
    },
    {
      name:'Chat Room',
      img:'./img/chat.jpeg',
      link:'/chatting'
    },
    {
      name:'Новини',
      img:'./img/news.png',
      link:'/news'
    }
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={
            <div className='main'>
              <Banner />
              <Menu catalog={catalog}/>
              <Team />
              <Footer />
            </div>
          }/>
          <Route path='/about-us' element={
            <Info />
          }/>
          <Route path='*' element={
            <NotFound />
          }/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
