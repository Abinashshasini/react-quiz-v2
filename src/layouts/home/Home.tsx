import React from 'react';
import { Link } from 'react-router-dom';
//Imagess
import GeneralKnowledge from '../../images/open-book.png';
import Science from '../../images/atom.png';
import Book from '../../images/book.png';
import Music from '../../images/buttons.png';
import Computer from '../../images/desktop-computer.png';
import Politics from '../../images/politics.png';
import Sports from '../../images/trophy.png';
import Movies from '../../images/video.png';
import Header from '../../components/Header';
//Styles
import { Wrapper, Headings, Container } from './home.styles';
import { BsCheckLg } from 'react-icons/bs';
const categories = [
  {
    img: GeneralKnowledge,
    text: 'General Knowledge',
    id: 9,
    color: 'var(--redPrimary), var(--redSecondary)',
  },
  {
    img: Science,
    text: 'Science and Technology',
    id: 17,
    color: 'var(--bluePrimary), var(--blueSecondary)',
  },
  {
    img: Book,
    text: "Book's and Texts",
    id: 10,
    color: 'var(--violatePrimary), var(--violateSecondary)',
  },
  {
    img: Music,
    text: 'Music and Videos',
    id: 12,
    color: 'var(--redPrimary), var(--redSecondary)',
  },
  {
    img: Computer,
    text: 'Computer Science',
    id: 18,
    color: 'var(--bluePrimary), var(--blueSecondary)',
  },
  {
    img: Politics,
    text: 'Indian and world Politics',
    id: 24,
    color: 'var(--violatePrimary), var(--violateSecondary)',
  },
  {
    img: Sports,
    text: 'Sports and games',
    id: 21,
    color: 'var(--redPrimary), var(--redSecondary)',
  },
  {
    img: Movies,
    text: 'Movies and series',
    id: 11,
    color: 'var(--bluePrimary), var(--blueSecondary)',
  },
];

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Headings>
        <h2>Choose questions category:</h2>
      </Headings>
      <Container>
        {categories.map((element, index) => (
          <Link
            to={`/${element.text.replace(/\s/g, '-')}/${element.id}`}
            key={`${element.id}-${index}`}
          >
            <div
              className="Item"
              style={{
                background: `linear-gradient(90deg, ${element.color})`,
              }}
            >
              <img src={element.img} alt="category " />
              <div className="icons">
                <BsCheckLg color="white" />
              </div>
              <p className="level">Level 1</p>
              <p className="heading">{element.text}</p>
            </div>
          </Link>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Home;
