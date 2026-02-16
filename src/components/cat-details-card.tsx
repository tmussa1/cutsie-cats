import Card from 'react-bootstrap/Card';
import { useGetCatData } from '../hooks/use-get-cat-data';
import { Link, useParams } from 'react-router-dom';
import { CAT_BREED_KEYS, type CatBreed } from '../types';
import { Button } from 'react-bootstrap';

const GET_BREED_DETAILS = 'https://api.thecatapi.com/v1/images/search'


export const CatDetailsCard = () => {

  const { breedId } = useParams();
  const { data, isLoading, isError } = useGetCatData({baseUrl: `${GET_BREED_DETAILS}`, queryParam: `breed_ids=${breedId}` });

  if (!breedId) return "Cat Not found";

  if(isLoading) {
     return <></>
   }

  if(isError){
    return "Failed to fetch cat resources";
  }

  const formatKey = (key: string) =>
  key
    .replace(/_/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  const isCatBreedKey = (key: string): key is keyof CatBreed => {
  return key in CAT_BREED_KEYS;
};


  return (
    <>
      {data[0].breeds.map((breed: CatBreed) =>
      ( 
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}} >
        <Card style={{ width: '900px', height: '900px', overflow: "hidden", justifyContent: 'center' }}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center'}} >
            <Card.Title style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
                {breed.name}
            </Card.Title>

              <div>
                {Object.entries(breed)
                  .filter(([key]) => isCatBreedKey(key))
                  .map(([key, value]) => {
                  return (
                    <div key={key} style={{display: 'flex', flexDirection: 'row', 
                      alignItems: 'center', flexWrap: 'wrap',
                      paddingLeft: '32px', paddingRight: '32px',
                      justifyContent: 'flex-start',
                      gap: '8px'}}>
                      <span >{formatKey(key)}:</span>
                      <span style={{color: 'blue'}}><i>{String(value)}</i></span>
                    </div>
                  );
                })}
              </div>
           </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
                  <Link to={`/`} style={{ textDecoration: "none" }}><Button variant="primary">Go Back</Button></Link>
                  </div>
        </Card>
        </div>))
      }
      </>
  );
}