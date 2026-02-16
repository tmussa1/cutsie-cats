import Card from 'react-bootstrap/Card';
import type { CatImage } from '../types';
import { Link } from 'react-router-dom';


export const CatCard = ({catImage, breedId}: {catImage: CatImage, breedId: string  }) => {
  return (
    <Link to={`/cat/${breedId}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: '24rem', height: '24rem', overflow: "hidden" }}>
            <Card.Img variant="top" src={catImage.url}  style={{width: "100%", height: "100%", objectFit: "cover"}}/>
        </Card>
    </Link>
  );
}