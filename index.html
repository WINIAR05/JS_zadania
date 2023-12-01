const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Błąd JSON:', error);
    throw error;
  }
};

const fillPrzewinieniaList = (data) => {
  const listaPrzewinien = document.getElementById("listaPrzewinien");

  Object.keys(data).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = data[key].pozycja;
    listaPrzewinien.appendChild(option);
  });
};

const obliczPunkty = async () => {
  try {
    const url = "https://imiki.pl/dane.json";
    const startowePunkty = parseInt(document.getElementById("startowePunkty").value) || 0;
    const listaPrzewinien = document.getElementById("listaPrzewinien");
    const aktualnePunkty = document.getElementById("aktualnePunkty");

    const data = await fetchData(url);
    const wybranePrzewinienie = listaPrzewinien.options[listaPrzewinien.selectedIndex].value;

    let punkty;

    if (typeof data[wybranePrzewinienie].punkty === "object") {
      punkty = startowePunkty - data[wybranePrzewinienie].punkty.p0 - data[wybranePrzewinienie].punkty.p1;
    } else {
      punkty = startowePunkty - data[wybranePrzewinienie].punkty;
    }

    aktualnePunkty.value = punkty;
  } catch (error) {
    console.error('Błąd podczas obliczania punktów:', error);
  }
};
fetchData("https://imiki.pl/dane.json")
  .then((data) => fillPrzewinieniaList(data))
  .catch((error) => console.error('Błąd podczas pobierania danych:', error));
