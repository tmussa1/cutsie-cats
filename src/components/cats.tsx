import { useGetCatData } from "../hooks/use-get-cat-data";
import { CatCard } from "./cat-card";

const GET_CATS_URL = 'https://api.thecatapi.com/v1/breeds';

export const Cats = () => {
    const { data, isLoading, isError } = useGetCatData({baseUrl: GET_CATS_URL, queryParam: 'limit=16' });

    if(isLoading) {
      return <></>
    }

    if(isError){
      return "Failed to fetch cat resources";
     }

    return (
        <div  style={{display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center'}}>
            <div  style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center'}}>
              <h1>Cutsie Cats</h1>
              <p><i>Click on your favorite feline to make your home their's</i></p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap'}}>
              {data.map((catBreed) => <CatCard catImage={catBreed.image} breedId={catBreed.id} />)}
          </div>
        </div>
      )
}