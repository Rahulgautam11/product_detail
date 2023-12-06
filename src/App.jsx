import { useEffect, useState } from 'react'
import ProductDetail from './component/productDetail'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
`

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <Container>
      {
        windowSize[0] <= 600 ?
          <ProductDetail /> : "Only for Mobile View"
      }
    </Container>
  )
}

export default App
