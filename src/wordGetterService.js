export async function wordGetter() {
  let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&words=10&paragraph=1`);
  let dinos;
  if (response.ok && response.status === 200) {
    dinos = await response.json();
  } else {
    dinos = false;
  }
  return dinos[0][0];
}