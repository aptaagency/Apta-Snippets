const options = [
  {
    destination: "30A, Florida",
    fields: [
      { option: "A", value: 10 },
      { option: "B", value: 2 },
      { option: "C", value: 3 },
      { option: "D", value: 5 },
    ],
  },
  {
    destination: "Abaco, Bahamas",
    fields: [
      { option: "A", value: 10 },
      { option: "B", value: 3 },
      { option: "C", value: 2 },
      { option: "D", value: 6 },
    ],
  },
  {
    destination: "Deer Valley, UT",
    fields: [
      { option: "A", value: 4 },
      { option: "B", value: 10 },
      { option: "C", value: 3 },
      { option: "D", value: 6 },
    ],
  },
  {
    destination: "Los Cabos, Mexico",
    fields: [
      { option: "A", value: 10 },
      { option: "B", value: 3 },
      { option: "C", value: 8 },
      { option: "D", value: 6 },
    ],
  },
  {
    destination: "Maui, HI",
    fields: [
      { option: "A", value: 10 },
      { option: "B", value: 5 },
      { option: "C", value: 2 },
      { option: "D", value: 7 },
    ],
  },
  {
    destination: "Palm Springs, CA",
    fields: [
      { option: "A", value: 5 },
      { option: "B", value: 4 },
      { option: "C", value: 10 },
      { option: "D", value: 6 },
    ],
  },
  {
    destination: "Scottsdale, AZ",
    fields: [
      { option: "A", value: 4 },
      { option: "B", value: 5 },
      { option: "C", value: 10 },
      { option: "D", value: 7 },
    ],
  },
  {
    destination: "Tamarindo, Costa Rica",
    fields: [
      { option: "A", value: 10 },
      { option: "B", value: 6 },
      { option: "C", value: 3 },
      { option: "D", value: 8 },
    ],
  },
  {
    destination: "Whistler, Canada",
    fields: [
      { option: "A", value: 3 },
      { option: "B", value: 10 },
      { option: "C", value: 2 },
      { option: "D", value: 6 },
    ],
  },
];

let userChoice = [];
let points = [];

let numQuestions = 10;

let url = window.location.href;
let params = new URLSearchParams(window.location.search);
let weightScore = [2, 1.5, 2, 1.5, 1, 1, 1, 1, 1.5, 2];

const btnCalcDest = document.querySelector('[ap-quiz="calc_dest"]');

function calculateValuePoint() {
  userChoice.forEach((choice) => {
    options.forEach((dest) => {
      let i = 0;
      let sum = 0;
      dest.fields.forEach((field) => {
        if (field.option.toUpperCase() === choice) {
          sum += field.value * weightScore[i];
        }
        i++;
      });
      if (!points[dest.destination]) {
        points[dest.destination] = 0;
      }
      points[dest.destination] += sum;
    });
  });
}

function calculateDestination() {
  let maior = 0;
  let destination;
  for (const dest in points) {
    if (points[dest] > maior) {
      maior = points[dest];
      destination = dest;
    }
  }
  return destination;
}

for (let index = 1; index <= numQuestions; index++) {
  const buttonChoiceQuestion = document.querySelectorAll(
    `[ap-quiz="option_question${index}"]`
  );

  buttonChoiceQuestion.forEach((btnChoice) => {
    btnChoice.addEventListener("click", () => {
      const choice = btnChoice.getAttribute("ap-quiz-choice");
      params.set(`q${index}`, choice);
      url = url.split("?")[0] + "?" + params.toString();
      console.log(url);
    });
  });
}

btnCalcDest.addEventListener("click", () => {
  params = new URLSearchParams(window.location.search);

  for (let index = 1; index <= numQuestions; index++) {
    const parametro = params.get(`q${index}`);
    if (parametro !== null) {
      userChoice.push(parametro);
    }
  }

  calculateValuePoint();
  const destinationName = calculateDestination();

  console.log(destinationName);
});
