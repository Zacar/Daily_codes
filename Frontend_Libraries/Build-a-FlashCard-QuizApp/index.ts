interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

let currentIndex = 0;

let currentCards: FlashCard[] = [
  {
    questionText: "What is JavaScript?",
    questionAnswer: "A programming language.",
  },
  {
    questionText: "What is TypeScript?",
    questionAnswer: "A superset of JavaScript.",
  },
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");

function displayCards(index: number) {
  question!.textContent = currentCards[index].questionText;
  answer!.textContent = currentCards[index].questionAnswer;
}
displayCards(0);

const flashcard = document.querySelector("#flashcard") as HTMLElement | null;

if (flashcard) {
  flashcard.addEventListener("click", (event) => {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle("flipped");
  });
}

const deleteBtn = document.getElementById("delete-btn");

deleteBtn?.addEventListener("click", () => {
  currentCards.splice(currentIndex, 1);

  if (currentCards.length === 0) {
    question!.textContent = "";
    answer!.textContent = "";
    flashcard?.classList.remove("flipped");
    return;
  }

  if (currentIndex > 0) {
    currentIndex--;
  }

  displayCards(currentIndex);
  flashcard?.classList.remove("flipped");
});

const entryForm = document.getElementById("entry-form");
const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;

entryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!frontText.value.trim() || !backText.value.trim()) {
    throw new InvalidUserInputError("Question and answer cannot be empty");
  }

  const newCard: FlashCard = {
    questionText: frontText.value,
    questionAnswer: backText.value,
  };

  currentCards.push(newCard);

  currentIndex = currentCards.length - 1;
  displayCards(currentIndex);
});

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}
