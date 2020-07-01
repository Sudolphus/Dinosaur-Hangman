export class WordGetterService {
  wordGetter() {
    let request = new XMLHttpRequest();
    const url = `http://dinoipsum.herokuapp.com/api/?format=json`;

    request.onreadystatechange = function() {
      if (this.readystate === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        // eslint-disable-next-line no-console
        console.log(response);
        return response[0][0];
      }
    };

    request.open('GET', url, true);
    request.send();
  }
}