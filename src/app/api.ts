export interface Cat {
  id: string;
  name: string;
  description: string;
  temperament: string;
  image: {
    url: string;
  };
}

export async function getCats(): Promise<Cat[]> {
  const results = await fetch('https://api.thecatapi.com/v1/breeds');
  const cats: Cat[] = await results.json();
  return cats.slice(0, 10);
}
