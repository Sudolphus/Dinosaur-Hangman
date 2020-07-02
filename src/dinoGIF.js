export async function dinoWinnerGif() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dinosaur&limit=1&offset=0&rating=G&lang=en`);
  if (!response.ok) {
    return false;
  }
  const responseJSON = await response.json();
  return responseJSON["data"][0]["images"]["original"]["url"];
}


export async function dinoLoserGif() {
  let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=meteor&limit=1&offset=0&rating=G&lang=en`);
  if (!response.ok) {
    return false;
  }
  const responseJSON = await response.json();
  return responseJSON["data"][0]["images"]["original"]["url"];
}