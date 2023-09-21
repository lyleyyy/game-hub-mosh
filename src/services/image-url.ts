const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf("media/") + target.length;
  //media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  console.log(url.indexOf("media/"));
  //  https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
