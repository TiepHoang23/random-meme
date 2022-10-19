function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
function shuffleMemes(response) {
    const urls =[];
    response.forEach(element => {
        urls.push({content: element.name,url:element.url})
    });
    const shuffleUrls = shuffleArray(urls)
    return shuffleUrls;
}
export default shuffleMemes