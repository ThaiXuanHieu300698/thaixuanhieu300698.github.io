const viUrl = "./assets/locales/vi.json";
const jpUrl = "./assets/locales/jp.json";
const enUrl = "./assets/locales/en.json";

const fetchDataLang = async () => {
  const viData = null;
  try {
    const response = await fetch(viUrl);
    const viData = await response.json();  
    console.log(viData);
  } catch (error) {
    console.log(error);
  }
};

fetchDataLang();

function changeLang(lang){
  const langs = document.getElementsByClassName('lang');
  console.log(langs)
  console.log(lang)
}