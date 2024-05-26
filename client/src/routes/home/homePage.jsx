import { useContext } from 'react';
import HeroImg from '../../components/heroImg/heroImg';
import Searchbar from '../../components/searchbar/searchbar';
import './homePage.scss';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='hero'>
      <div className="text-container">
        <div className="wrapper">
          <h1>
              One-stop solution for all buying and selling rentals
          </h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus eaque voluptatem perspiciatis nulla, dignissimos delectus expedita consequatur sint! Id.</h3>
          <Searchbar></Searchbar>
        </div>
      </div>
      <HeroImg></HeroImg>
    </div>
  )
};

export default HomePage;
