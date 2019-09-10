
let values = [];

let i = 0;
let j = 0;
var h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function h1(){
  h = 1;
  loop();
}

function h2(){
  h = 2;
  loop();
}


function draw() {
  background(0);

//bubble sort
if(h == 1){
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

  for (let i = 0; i < values.length; i++) {
    stroke(random(255),(220),(220));
    line(i, height, i, height - values[i]);
  }
}
//selection sort
if(h == 2){
  let selectionSort = (values) => {
  let len = values.length;
  if(i < values.length) {
      let min = p;
      for (let j = p + 1; j < len; j++) {
          if (values[min] > values[j]) {
              min = j;
          }
      }
      if (min !== p) {
          let tmp = values[p];
          values[p] = values[min];
          values[min] = tmp;
      }

  p++
}

}

    for (let i = 0; i < values.length; i++) {
      stroke(random(255),(100),(100));
      line(i, height, i, height - values[i]);
}
}
}

function clearCanvas(){
  noLoop();
}

function reset() {
  window.location.reload();
}


function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
