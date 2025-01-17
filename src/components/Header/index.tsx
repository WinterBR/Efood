import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.png'
import productImg from '../../assets/images/productImg.jpg'

import {
  BackgroundImg,
  BackgroundImgPro,
  Logo,
  Nav,
  Title,
  BackgroundProductImg
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  category: 'home' | 'profile'
}

const Header = ({ category }: Props) => {
  if (category === 'home') {
    return (
      <header>
        <BackgroundImg style={{ backgroundImage: `url(${background})` }}>
          <Link to="/">
            <Logo src={logo} alt="EFOOD" />
          </Link>
          <Title>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Title>
        </BackgroundImg>
      </header>
    )
  }

  return (
    <header>
      <BackgroundImgPro style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Nav>
            <p>Restaurantes</p>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
            <p>0 produto(s) no carrinho</p>
          </Nav>
        </div>
      </BackgroundImgPro>
      <BackgroundProductImg style={{ backgroundImage: `url(${productImg})` }} />
    </header>
  )
}

export default Header
