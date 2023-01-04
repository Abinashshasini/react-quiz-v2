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
//Styles
import { Wrapper, Headings, Grid } from './Category.styles';
const categories = [
  {
    img: GeneralKnowledge,
    text: 'General Knowledge',
    id: 9,
  },
  {
    img: Science,
    text: 'Science',
    id: 17,
  },
  {
    img: Book,
    text: 'Book',
    id: 10,
  },
  {
    img: Music,
    text: 'Music',
    id: 12,
  },
  {
    img: Computer,
    text: 'Computer Science',
    id: 18,
  },
  {
    img: Politics,
    text: 'Politics',
    id: 24,
  },
  {
    img: Sports,
    text: 'Sports',
    id: 21,
  },
  {
    img: Movies,
    text: 'Movies',
    id: 11,
  },
];

const Category: React.FC = () => {
  return (
    <Wrapper>
      <Headings>
        <h2>Choose questions category:</h2>
      </Headings>
      <Grid>
        {categories.map((element, index) => (
          <Link to={`/${element.id}`} key={`${element.id}-${index}`}>
            <div className="Item">
              <img src={element.img} alt="category " />
              <p>{element.text}</p>
            </div>
          </Link>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Category;
