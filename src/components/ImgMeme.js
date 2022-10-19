
import React from 'react';
import Card from 'react-bootstrap/Card';

function ImgMeme({memeUrls}) {
    return (
            memeUrls.map((value,index)=>{
                return (
                    <Card key={index} className="m-1" style={{ width: '20rem' }}>
                      <Card.Body>
                        <Card.Title>{value.content}</Card.Title>
                        <Card.Img src={value.url} className="meme-url" alt="meme" />
                      </Card.Body>
                    </Card>
                  );
            })
    )
}
export default ImgMeme;