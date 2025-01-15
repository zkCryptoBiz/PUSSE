
// Generate Image----------

let currentIndex = 0;

function generateImage() {
  console.log("generateImage");

  let bg = randomPart("background/", 12);
  setBackground(bg);

  let hat = randomPart("Hat/", 28);
  setHat(hat);

  let makeups = randomPart("Retradio/", 3);
  setMakeups(makeups);

  let eye = randomPart("Eyes/", 9);
  setEyes(eye);

  let mouth = randomPart("Mouth/", 9);
  setMouth(mouth);

  let accs = randomPart("Accs/", 19);
  setAccs(accs);


 setShirt(randomPart("Clothes/", 18));

   let body = randomPart("Body/", 8);
  setBody(body);



 

}


function randomPart(part, range) {
  const randomIndex = Math.floor(Math.random() * range) + 1;
  return `./assets/${part}${randomIndex}.png`;
}

// Attach event listener to the generate button
document.querySelector('#generateLink').addEventListener('click', generateImage);

function downloadImage() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const BGG = document.getElementById('BGG');
  const bodyImg = document.getElementById('Body');
  const shirtImg = document.getElementById('shirt');
  const makeupsImg = document.getElementById('makeups');
  const eyesImg = document.getElementById('eyes');
  const mouthImg = document.getElementById('mouth');
  const hatImg = document.getElementById('hat');
  const accsImg = document.getElementById('accs');


  // Set canvas size based on the body image
  canvas.width = bodyImg.naturalWidth;
  canvas.height = bodyImg.naturalHeight;

  
  // Draw each image onto the canvas if it exists
  if (BGG.src) ctx.drawImage(BGG, 0, 0);
  if (bodyImg.src) ctx.drawImage(bodyImg, 0, 0);
  if (shirtImg.src) ctx.drawImage(shirtImg, 0, 0);
  if (makeupsImg.src) ctx.drawImage(makeupsImg, 0, 0);
  if (eyesImg.src) ctx.drawImage(eyesImg, 0, 0);
  if (mouthImg.src) ctx.drawImage(mouthImg, 0, 0);
  if (hatImg.src) ctx.drawImage(hatImg, 0, 0);
  if (accsImg.src) ctx.drawImage(accsImg, 0, 0);


  // Create a link for downloading the image
  const link = document.getElementById('downloadLink');
  link.href = canvas.toDataURL('image/png'); // Get the canvas data as a PNG
  link.download = 'downloaded_image.png'; // Set the default name of the downloaded file
}

// Attach downloadImage to click event
document.getElementById('downloadLink').addEventListener('click', downloadImage);







// Function to change the background of the canvas
function setBackground(imagePath) {
  // const canvas = document.getElementById('canvas');
  // canvas.style.backgroundImage = `url(${imagePath})`;

  const backImage = document.getElementById('BGG');
  backImage.src = imagePath;
  backImage.classList.remove('hidden');
}


function setBody(imageSrc) {
  console.log('setBody', imageSrc);
  const bodyImage = document.getElementById('Body');
  bodyImage.src = imageSrc;
  bodyImage.classList.remove('hidden');  // Make sure the image is visible
}

function setMakeups(imageSrc) {
  const makeups = document.getElementById('makeups');
  makeups.src = imageSrc;
  makeups.classList.remove('hidden');
}

// Set eyes image
function setEyes(imageSrc) {
  const eyesImage = document.getElementById('eyes');
  eyesImage.src = imageSrc;
  eyesImage.classList.remove('hidden');  // Make sure the image is visible
}

function setShirt(imageSrc) {
  const shirt = document.getElementById('shirt');
  shirt.src = imageSrc;
  shirt.classList.remove('hidden');
}

function setMouth(imageSrc) {
  const mouth = document.getElementById('mouth');
  mouth.src = imageSrc;
  mouth.classList.remove('hidden');
}

function setHat(imageSrc) {
  const hat = document.getElementById('hat');
  hat.src = imageSrc;
  hat.classList.remove('hidden');
}

function setAccs(imageSrc) {
  const accs = document.getElementById('accs');
  accs.src = imageSrc;
  accs.classList.remove('hidden');
}





const background = document.getElementById('background');
const backgroundList = document.getElementById('backgroundList');
const iconText = document.getElementById('iconText');

background.addEventListener('click', () => {
  if (iconText.classList.contains('close-icon')) {
    backgroundList.classList.remove('active');
    iconText.classList.remove('close-icon');
    iconText.innerText = 'Background';
  } else {

    backgroundList.classList.add('active');
    iconText.classList.add('close-icon');
    iconText.innerText = '';
  }
});

// For bodyImage------------------------

const bodyImg = document.getElementById('bodyImg');
const bodyList = document.getElementById('bodyList');
const bodyiconText = document.getElementById('bodyiconText');

bodyImg.addEventListener('click', () => {
  if (bodyiconText.classList.contains('close-icon')) {
    bodyList.classList.remove('active');
    bodyiconText.classList.remove('close-icon');
    bodyiconText.innerText = 'Body';
  } else {

    bodyList.classList.add('active');
    bodyiconText.classList.add('close-icon');
    bodyiconText.innerText = '';
  }
});

// Makeups

const makeupsImg = document.getElementById('makeupsImg');
const makeupsList = document.getElementById('makeupsList');
const makeupsiconText = document.getElementById('makeupsiconText');

makeupsImg.addEventListener('click', () => {
  if (makeupsiconText.classList.contains('close-icon')) {
    makeupsList.classList.remove('active');
    makeupsiconText.classList.remove('close-icon');
    makeupsiconText.innerText = 'makeups';
  } else {
    makeupsList.classList.add('active');
    makeupsiconText.classList.add('close-icon');
    makeupsiconText.innerText = '';
  }
});


// For Shades ----------------------

const shadesImg = document.getElementById('shadesImg');
const shadesList = document.getElementById('shadesList');
const shadesiconText = document.getElementById('shadesiconText');

shadesImg.addEventListener('click', () => {
  if (shadesiconText.classList.contains('close-icon')) {
    shadesList.classList.remove('active');
    shadesiconText.classList.remove('close-icon');
    shadesiconText.innerText = 'Shades';
  } else {

    shadesList.classList.add('active');
    shadesiconText.classList.add('close-icon');
    shadesiconText.innerText = '';
  }
});


// Cloth 

const clothesImg = document.getElementById('clothesImg');
const clothesList = document.getElementById('clothesList');
const clothesiconText = document.getElementById('clothesiconText');

clothesImg.addEventListener('click', () => {
  if (clothesiconText.classList.contains('close-icon')) {
    clothesList.classList.remove('active');
    clothesiconText.classList.remove('close-icon');
    clothesiconText.innerText = 'Clothes';
  } else {
    clothesList.classList.add('active');
    clothesiconText.classList.add('close-icon');
    clothesiconText.innerText = '';
  }
});


// Mouth

const mouthImg = document.getElementById('mouthImg');
const mouthList = document.getElementById('mouthList');
const mouthiconText = document.getElementById('mouthiconText');

mouthImg.addEventListener('click', () => {
  if (mouthiconText.classList.contains('close-icon')) {
    mouthList.classList.remove('active');
    mouthiconText.classList.remove('close-icon');
    mouthiconText.innerText = 'Mouth';
  } else {
    mouthList.classList.add('active');
    mouthiconText.classList.add('close-icon');
    mouthiconText.innerText = '';
  }
});

// Hat

const hatImg = document.getElementById('hatImg');
const hatList = document.getElementById('hatList');
const haticonText = document.getElementById('haticonText');

hatImg.addEventListener('click', () => {
  if (haticonText.classList.contains('close-icon')) {
    hatList.classList.remove('active');
    haticonText.classList.remove('close-icon');
    haticonText.innerText = 'hat';
  } else {
    hatList.classList.add('active');
    haticonText.classList.add('close-icon');
    haticonText.innerText = '';
  }
});

// Accs

const accsImg = document.getElementById('accsImg');
const accsList = document.getElementById('accsList');
const accsiconText = document.getElementById('accsiconText');

accsImg.addEventListener('click', () => {
  if (accsiconText.classList.contains('close-icon')) {
    accsList.classList.remove('active');
    accsiconText.classList.remove('close-icon');
    accsiconText.innerText = 'accs';
  } else {
    accsList.classList.add('active');
    accsiconText.classList.add('close-icon');
    accsiconText.innerText = '';
  }
});


