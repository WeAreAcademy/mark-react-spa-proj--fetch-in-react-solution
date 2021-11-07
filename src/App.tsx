import { useState } from "react";

function App() {
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  const handleGetImageURL = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const body = await response.json();
    setImageURLs([...imageURLs, body.message]);
  };

  return (
    <div>
      <Header />
      {imageURLs.length === 0 && <Help />}
      <button onClick={handleGetImageURL}>Get image</button>
      <ListOfImages urls={imageURLs} />
    </div>
  );
}

interface ListOfImagesProps {
  urls: string[]
}

function ListOfImages(props: ListOfImagesProps): JSX.Element {
  return <div>
    {
      props.urls.map((url: string, ix: number) => (
        <img
          src={url}
          key={ix}
          alt='dog'
          className='dogImage'
        />
      ))
    }
  </div>
}


function Header() {
  return <h1>Dog Breed Image App - Exercise 2</h1>
}
function Help() {
  return <p>
    Click the button to trigger a <code>fetch</code> that gets a random
    image URL from an API!
  </p>
}
export default App;
