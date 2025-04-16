const start = 1; 
const end = 656;
const urlBase = "https://resources.pearsonactivelearn.com/r01/r0113/r011351/r01135156/current/OPS/images/F01_IB_CHEM_SL_27690-";

function fetchAndSave(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const anchor = document.createElement("a");
      anchor.href = URL.createObjectURL(blob);
      anchor.download = filename;
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    })
    .catch((error) => console.error(Error fetching ${filename}: ${error.message}));
}

for (let i = start; i <= end; i++) {
  const imageUrl = ${urlBase}${i.toString().padStart(3, "0")}.jpg;
  const filename = F01_IB_CHEM_SL_27690-${i.toString().padStart(3, "0")}.jpg;
  fetchAndSave(imageUrl, filename);
}