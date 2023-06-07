$('button').on('click', joke);

async function joke() {
  try {
    let config = {
      headers: {
        Accept: 'application/json',
      },
    };

    let response = await fetch('https://icanhazdadjoke.com/', config);
    let data = await response.json();
    $('p.jokerz').text(data.joke);
  } catch (error) {
    console.log('Error:', error);
  }
}
