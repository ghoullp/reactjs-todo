import Header from './Header';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <Container className='p-3 p-sm-1'>
        <div className='row justify-content-center'>
          <div className='col-xl-6 col-lg-7 col-md-10'>
            <div className='card'>
              <div className='card-body'>
                <Header />
                {children}
              </div>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Layout;
