const PASSWORD = "1522003";

const WORDS = [
  "بحبكك اوي اوي وبموت فيكي 🥹♥️",
  "مش عارف واخده روحي وعقلي وكل حاجه فيا مش هتسكتي غير لما تخليني اموووت بس امووت فيكي ♥️",
  "انا جمبك ومعاكي ومش هسيبك يا احلي حاجه حصلالي فحياتي♥️🫂"
];

const
  "images/pic1.jpg.HEIC",
  "images/pic2.jpg.HEIC",
  "images/pic3.jpg.HEIC",
  "images/pic4.jpg.HEIC",
  "images/pic5.jpg.JPG"
];

const AUDIO_PATH = "song.mp3.mp3";

const pwInput = document.getElementById('pw');
const openBtn = document.getElementById('openBtn');
const msg = document.getElementById('msg');
const content = document.getElementById('content');
const lockCard = document.getElementById('lockCard');
const gallery = document.getElementById('gallery');
const loveWords = document.getElementById('loveWords');
const audioEl = document.getElementById('audio');
const closeBtn = document.getElementById('closeBtn');

function showContent() {
  lockCard.classList.add('hidden');
  content.classList.remove('hidden');
  gallery.innerHTML = "";
  IMAGES.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
  });
  let i = 0;
  loveWords.textContent = WORDS[0] || "";
  setInterval(() => {
    i = (i+1) % WORDS.length;
    loveWords.textContent = WORDS[i];
  }, 4000);
  try { audioEl.play().catch(()=>{}); } catch(e){}
}

openBtn.addEventListener('click', () => {
  const val = pwInput.value || "";
  if (val === PASSWORD) {
    msg.textContent = "";
    showContent();
  } else {
    msg.textContent = "غلط يا يقلبي 🥲";
  }
});

pwInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') openBtn.click();
});

closeBtn.addEventListener('click', () => {
  content.classList.add('hidden');
  lockCard.classList.remove('hidden');
  pwInput.value = "";
});