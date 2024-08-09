function fetchCatImage() {
  fetch("https://cataas.com/cat")
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      document.getElementById("catImage").src = url;
    });
}

function fetchCatGif() {
  fetch("https://cataas.com/cat/gif")
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      document.getElementById("catGif").src = url;
    });
}

function fetchCatSays() {
  const userName = document.getElementById("userName").value;
  if (userName.trim() !== "") {
    fetch(`https://cataas.com/cat/says/${encodeURIComponent(userName)}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        document.getElementById("catSays").src = url;
      });
  } else {
    alert("Please enter your name.");
  }
}
