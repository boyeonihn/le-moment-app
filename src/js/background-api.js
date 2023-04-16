export async function getBackgroundImage() {
  const response = await fetch('url')
    // 'https://api.unsplash.com/photos/random?client_id=O2i326sq5rbgynSMb0RNvC4EbApEpopFiPYeyPJzWx4&query=blue-sky&orientation=landscape&count=1'
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data[0].urls.full;
      const imageAuthor = data[0].user.name;

      let bgImg = new Image();
      bgImg.onload = function () {
        document.body.style.backgroundImage = `url(${bgImg.src})`;
        document.getElementById(
          'photoCredit'
        ).innerText = `Photo credit:${imageAuthor}`;
      };
      bgImg.src = imageUrl;
    })
    .catch((error) => {
      console.log(error);
      let bgImg = new Image();
      bgImg.onload = function () {
        document.body.style.backgroundImage = `url(${bgImg.src})`;
        document.getElementById(
          'photoCredit'
        ).innerText = `Photo Credit: Vincentiu Solomon`;
      };
      bgImg.src = 'public/defaultBackground.jpg';
    });
}
