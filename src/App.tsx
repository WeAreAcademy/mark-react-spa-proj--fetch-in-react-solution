import { useState } from "react";

function App() {
  const [imageURL, setImageURL] = useState<string>();

  const handleGetImageURL = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const body = await response.json();
    setImageURL(body.message);
  };

  if (imageURL) {
    return (
      <div>
        <Header />
        <button onClick={handleGetImageURL}>Get another image</button>
        <hr />
        <img src={imageURL} alt='dog' />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <button onClick={handleGetImageURL}>Get image</button>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          image URL from an API!
        </p>
      </div>
    );
  }
}
function Header() {
  return <h1>Dog Breed Image App</h1>
}

export default App;
