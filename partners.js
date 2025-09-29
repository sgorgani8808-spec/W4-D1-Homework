// partners.js
(function renderPartners() {
  const basePath = "images/"; // your files are directly in /images per your screenshot

  const files = [
    "partner-bustour.png",
    "partner-cabinrental.png",
    "partner-campingadv.png",
    "partner-collegetours.png",
    "partner-rentalbike.png",
    "partner-tourgroup.png"
  ];

  const ul = document.getElementById("partners");
  if (!ul) return;

  ul.innerHTML = files.map(f => `
    <li class="partner">
      <img src="${basePath}${f}"
           alt="${f.replace(/\.(png|jpg|jpeg|webp|gif)$/i,'').replace(/-/g,' ')}"
           width="80" height="80" loading="lazy" decoding="async">
    </li>
  `).join("");
})();
// digclock.js