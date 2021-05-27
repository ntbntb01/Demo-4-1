export const getImage = (imgUrl) => {
    return `https://api.thecoffeehouse.com/api/v2/menu/${imgUrl.replace('upload', '')}`
  }