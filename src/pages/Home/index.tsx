import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCatsFetch } from '../../feature/cats/catSlice';

function Home() {
  const cats = useAppSelector((state) => state.cats.cats);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getCatsFetch());
  }, []);

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats. Lots os cats for your viewing pleasure</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img alt={cat.name} src={cat.image.url} width={200} height={200} />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>VIEW MORE CATS</button>
    </div>
  );
}

export default Home;
