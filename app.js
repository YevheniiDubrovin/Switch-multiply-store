let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn");
let close = document.querySelector(".close");


btn.onclick = function () {
  modal.style.display = "block";
  setTimeout(function () {
    modal.classList.add("show");
  }, 10);
};

close.onclick = function () {
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 800);
};
function createCountryLinkBlock(href, headerText, paragraphText) {
  return `
                <li>
                    <a class="country-link" data-testid="link" href="${href}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="css-1dscrux" width="24px" height="24px" role="img" viewBox="0 0 512 512">
                            <path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 
                                    272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 
                                    185c0-75.61-64.5-137-144-137z" 
                                    fill="none" stroke="currentColor" stroke-linecap="round" 
                                    stroke-linejoin="round" stroke-width="32"/>
                            <circle cx="256" cy="192" r="48" fill="none" 
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                    stroke-width="32"/>
                        </svg>
                        <div class="locale-label-container">
                            <h4 class="modal-h4">${headerText}</h4>
                            <p class="modal-p">${paragraphText}</p>
                        </div>
                    </a>
                </li>`;
}

function appendCountryLinkBlocks(containerId, blockData) {
  const container = document.getElementById(containerId);
  blockData.forEach((data) => {
    container.innerHTML += createCountryLinkBlock(
      data.href,
      data.headerText,
      data.paragraphText
    );
  });
}
const blockData1 = [
    { href: "https://elancosmetics.net", headerText: "Global", paragraphText: "English" },
    { href: "https://elancosmetics.net/de", headerText: "Global", paragraphText: "Deutsch" },
    { href: "https://elancosmetics.net/fr", headerText: "Global", paragraphText: "Français" },
    { href: "https://elancosmetics.net/uk", headerText: "Global", paragraphText: "Українська" },
    { href: "https://elancosmetics.net/ru", headerText: "Global", paragraphText: "Русский", },
    { href: "https://elan.net.ua", headerText: "Україна", paragraphText: "Українська", },
    { href: "https://elan.net.ua/en", headerText: "Україна", paragraphText: "English", },
    { href: "https://elan.net.ua/ru", headerText: "Україна", paragraphText: "Русский", },
    { href: "https://elanofficial.com.tr", headerText: "Türkiye", paragraphText: "Türkçe", },
    { href: "https://elanofficial.com.tr/ru", headerText: "Türkiye", paragraphText: "Русский", },
    { href: "https://elanofficial.ba/bs", headerText: "Bosnia", paragraphText: "Bosanski", },
    { href: "https://elanofficial.ba", headerText: "Bosnia", paragraphText: "English", },
    { href: "https://elanofficial.ba/ru", headerText: "Bosnia", paragraphText: "Русский", },
    { href: "https://elanofficial.rs", headerText: "Serbian", paragraphText: "Srpski", },
    { href: "https://elanofficial.ro", headerText: "România", paragraphText: "Română", },
    { href: "https://elanofficial.lt", headerText: "Lietuva", paragraphText: "Lietùvių", },
    { href: "https://elanofficial.lt/ru", headerText: "Polska", paragraphText: "Polski", }
];

appendCountryLinkBlocks('country-links-container-europe', blockData1);
const blockData2 = [
    { href: "https://elanofficial.ae/", headerText: "United Arab Emirates", paragraphText: "English" },
    { href: "https://elanofficial.ae/ar", headerText: "الإمارات العربية المتحدة", paragraphText: "العربية" }
];

appendCountryLinkBlocks('country-links-container-uae', blockData2);

const blockData3 = [
    { href: "https://elanofficial.us", headerText: "United States", paragraphText: "English" }
];

appendCountryLinkBlocks('country-links-container-usa', blockData3);