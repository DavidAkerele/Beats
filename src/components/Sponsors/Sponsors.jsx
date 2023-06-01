import './Sponsors.css'
import amazon from '../../assets/amazon.svg'
import youtube from '../../assets/youtube.svg'
import apple from '../../assets/apple.svg'
import spotify from '../../assets/spotify.svg'


const Sponsors = () => {
  return <div className='sponsors-container'>
    <img src={apple} alt="" />
    <img src={spotify} alt="" />
    <img src={amazon} alt="" />
    <img src={youtube} alt="" />
  </div>;
};

export default Sponsors;
