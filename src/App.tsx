import React, { FC } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const App: FC = () => (
  <>
    <main role='main' className='container'>
      <Jumbotron>
        <h1 className='header'>Welcome To My Site</h1>
      </Jumbotron>
      <div className='text-center'>
        <img
          src='https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/51538729_2091455787597269_8177488719356362752_o.jpg?_nc_cat=106&_nc_sid=84a396&_nc_ohc=BM5_Ftl-hagAX-2Ae2n&_nc_ht=scontent.flwo4-2.fna&oh=1812bffd40599615a07f553b1b7939c4&oe=5F6ECB52'
          alt='avatar'
          className='rounded'
          width='350'
          height='350'
        />
        <br />
        <strong>Mykoriak Ivan</strong>
      </div>
      <hr />
      <p>
        На собственном опыте работы с профессиональными и личными проектами я понял, что важно иметь
        хорошую структуру с упором на то, чтобы другие могли легко читать и понимать мой код.
      </p>

      <h5 className='mt-0'>Образование</h5>
      <div className='row'>
        <div className='col-3'>2015-2017</div>
        <div className='col-9'>Степень магистра компьютерных наук , Университет УжНУ</div>
      </div>
      <div className='row'>
        <div className='col-3'>2013-2015</div>
        <div className='col-9'>Степень бакалавра компьютерной инженерии, Университет УжНУ</div>
      </div>

      <h5 className='mt-0'>Опыт работы</h5>
      <div className='row'>
        <div className='col-3'>2016 - &infin;</div>
        <div className='col-9'>Web developer – Norse Digital</div>
      </div>
      <div className='row'>
        <div className='col-3'>2015 - 2016</div>
        <div className='col-9'>Web developer – Без рекламы</div>
      </div>
      <div className='row'>
        <div className='col-3'>2013 - 2015</div>
        <div className='col-9'>
          Web developer –{' '}
          <a
            href='https://www.weblancer.net/users/pirat9629/'
            target='_blank'
            rel='noopener noreferrer'
          >
            www.weblancer.net
          </a>
        </div>
      </div>

      <h5 className='mt-0'>Язык программирования</h5>
      <div className='row'>
        <div className='col-6'>JavaScript</div>
        <div className='col-6'>GraphQL</div>
      </div>
      <div className='row'>
        <div className='col-6'>HTML</div>
        <div className='col-6'>CSS</div>
      </div>
      <div className='row'>
        <div className='col-6'>PHP</div>
        <div className='col-6'>SQL</div>
      </div>
      <div className='row'>
        <div className='col-6'>Demandware</div>
        <div className='col-6'>C#</div>
      </div>

      <h5 className='mt-0'>Фреймворк</h5>
      <div className='row'>
        <div className='col-3'>React</div>
      </div>
      <div className='row'>
        <div className='col-3'>Angular</div>
      </div>
      <div className='row'>
        <div className='col-3'>Enonic XP</div>
      </div>

      <h5 className='mt-0'>Лицензии и сертификаты</h5>
      <div className='row'>
        <div className='col-3'>2019</div>
        <div className='col-9'>
          <a
            href='https://enonic.mettl.com/applicant/result/download-certificate?key=slhEkzSeWSy2UFiOY2FJWQ%3D%3D'
            target='_blank'
            rel='noopener noreferrer'
          >
            Enonic XP 7 Developer Certification
          </a>
        </div>
      </div>

      <h5 className='mt-0'>Язык</h5>
      <div className='row'>
        <div className='col-3'>Английский</div>
        <div className='col-9'>Средний уровень (устно и письменно)</div>
      </div>
      <div className='row'>
        <div className='col-3'>Украинский</div>
        <div className='col-9'>Родной</div>
      </div>
      <div className='row'>
        <div className='col-3'>Русский</div>
        <div className='col-9'>Свободно (устно и письменно)</div>
      </div>

      <h5 className='mt-0'>Интересы</h5>
      <div className='row'>
        <div className='col-3'>Программирование игр</div>
        <div className='col-9'>
          <a
            href='https://play.google.com/store/apps/developer?id=Ivan+Mykoriak'
            target='_blank'
            rel='noopener noreferrer'
          >
            Google Play
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'>Arduino</div>
        <div className='col-9'>
          <a href=' https://github.com/Mykoriak' target='_blank' rel='noopener noreferrer'>
            Git Hub
          </a>
        </div>
      </div>
    </main>
    <footer className='footer'>
      <Container className='text-center'>
        <span className='text-muted'>
          <a href='mailto:herroartes@gmail.com'>Отправить письмо!</a>
        </span>
      </Container>
    </footer>
  </>
);

export default App;
