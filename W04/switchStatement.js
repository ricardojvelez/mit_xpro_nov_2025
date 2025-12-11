const singer = {
    name: "Velez",
    genre: "R&B"
};


switch (singer.genre) {
    case "R&B":
      console.log(singer.name + " is known for his work in the R&B genre.");
      break;
    case "Hip hop":
      console.log(singer.name + " is known for his work in the Hip hop genre.");
      break;
    default:
      console.log(singer.name + " explores other genres as well.");
      break;
  }