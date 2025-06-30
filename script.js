
const shirtImage = document.getElementById('shirt');
const print = document.getElementById('print-preview');

function previewPrint(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      print.src = e.target.result;
      print.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

function updateShirtView() {
  const color = document.getElementById('color').value;
  const side = document.getElementById('side').value;
  shirtImage.src = `images/${color}-${side}.png`;
}

function updatePrintPosition() {
  const placement = document.getElementById('placement').value;
  switch (placement) {
    case 'center':
      print.style.top = '100px';
      print.style.left = '50%';
      break;
    case 'left':
      print.style.top = '100px';
      print.style.left = '35%';
      break;
    case 'top':
      print.style.top = '60px';
      print.style.left = '50%';
      break;
    case 'back':
      print.style.top = '180px';
      print.style.left = '50%';
      break;
  }
}
