
import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Meme from './ImgMeme';
import shuffleMemes from './utils/Helper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListMemes() {
  const [memeUrls, setUrls] = useState([]);

  const getData =() => {
        fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(
            (result) => {
            const shuffleData = shuffleMemes(result.data.memes)
            setUrls(shuffleData)
            },
            (error) => {
                throw error
            }
          )
      }
  
  
  useEffect(()=>{
   getData()
  },[])
  return (
    <Container>
    <Row>
      <Col> <Button className='m-3 ' onClick={getData}>Random Memes</Button>  </Col>
    </Row>
    <Row>
      <Meme memeUrls={memeUrls} ></Meme>
  </Row>
  </Container>
    
  );
}

export default ListMemes;
