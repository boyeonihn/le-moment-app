export async function getBackgroundImage() {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=O2i326sq5rbgynSMb0RNvC4EbApEpopFiPYeyPJzWx4&query=mountains&orientation=landscape&count=1'
  )
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data[0].urls.full;
      const imageAuthor = data[0].user.name;
      console.log(imageUrl);
      console.log(`hello background`);

      document.body.style.backgroundImage = `url(${imageUrl})`;
    });
}
