const viUrl = "./assets/locales/vi.json";
const jpUrl = "./assets/locales/jp.json";
const enUrl = "./assets/locales/en.json";

const loadDataLang = async (lang, langElements) => {
  let langUrl = "";
  try {
    switch (lang) {
      case 'vi':
        langUrl = viUrl;
        break;
      case 'jp':
        langUrl = jpUrl;
        break;
      case 'en':
        langUrl = enUrl;
        break;
      default:
        break;
    }
    const response = await fetch(langUrl);
    const langData = await response.json();

    for (const [index, [key, value]] of Object.entries(langData).entries()) {
      langElements[index].innerHTML = value;
    }

  } catch (error) {
    console.log(error);
  }
};

function changeLang(lang){
  const langElements = document.getElementsByClassName('lang');
  loadDataLang(lang, langElements);
}
