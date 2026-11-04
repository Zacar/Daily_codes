const { useState, useEffect } = React;

interface Pet {
  name: string;
  hunger: number;
  happiness: number;
  energy: number;
}
enum Action {
  EAT = "EAT",
  SLEEP = "SLEEP",
  PLAY = "PLAY",
}

enum PetMood {
  HAPPY = "Happy",
  EXCITED = "Excited",
  CONTENT = "Content",
  SAD = "Sad",
  TIRED = "Tired",
  SICK = "Sick",
  HUNGRY = "Hungry",
}

const moodEmojis: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😸",
  [PetMood.EXCITED]: "😼",
  [PetMood.CONTENT]: "😺",
  [PetMood.SAD]: "😿",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🙀",
  [PetMood.HUNGRY]: "😾",
};

export const PetGame = () => {
  const [pet, setPet] = useState<Pet>({
    name: "",
    hunger: 0,
    happiness: 100,
    energy: 100,
  });
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!gameStarted) return;
    const interval = setInterval(() => {
      setPet((prev) => ({
        ...prev,
        hunger: Math.min(100, prev.hunger + 1),
        happiness: Math.max(0, prev.happiness - 1),
        energy: Math.min(100, prev.energy + 1),
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, [gameStarted]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("pet-name") as HTMLInputElement;
    const name = input.value.trim();
    if (!name) return;
    setPet((prev) => ({ ...prev, name }));
    setGameStarted(true);
  };

  const handleEat = () =>
    setPet((prev) => ({
      ...prev,
      hunger: Math.max(0, prev.hunger - 10),
      energy: Math.min(100, prev.energy + 10),
    }));

  const handlePlay = () =>
    setPet((prev) => ({
      ...prev,
      energy: Math.max(0, prev.energy - 10),
      happiness: Math.min(100, prev.happiness + 10),
    }));

  const handleSleep = () =>
    setPet((prev) => ({
      ...prev,
      hunger: Math.min(100, prev.hunger + 10),
      energy: Math.min(100, prev.energy + 10),
    }));

  const getPetMood = (pet: Pet): PetMood => {
    if (pet.hunger > 70) {
      return PetMood.HUNGRY;
    } else if (pet.energy < 30) {
      return PetMood.TIRED;
    } else if (pet.happiness < 30) {
      return PetMood.SAD;
    } else if (pet.happiness > 80 && pet.energy > 70) {
      return PetMood.EXCITED;
    } else if (pet.happiness > 60) {
      return PetMood.HAPPY;
    } else {
      return PetMood.CONTENT;
    }
  };
  const currentMood = getPetMood(pet);

  return (
    <div>
      {!gameStarted && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="pet-name">What's your pet name?</label>
            <input
              type="text"
              id="pet-name"
              value={pet.name}
              onChange={(e) =>
                setPet((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <button type="submit">PlayGame</button>
          </form>
        </div>
      )}
      {gameStarted && (
        <div>
          <div>😺</div>
          <h2 className="pet-name">{pet.name}</h2>
          <button id="eat-action" onClick={handleEat}>
            {Action.EAT}
          </button>

          <button id="play-action" onClick={handlePlay}>
            {Action.PLAY}
          </button>

          <button id="sleep-action" onClick={handleSleep}>
            {Action.SLEEP}
          </button>

          <div id="hunger" className="stat">
            <p>
              Hunger Value:<span className="stat-value">{pet.hunger}</span>
            </p>
          </div>
          <div id="happiness" className="stat">
            <p>
              Happiness Value:
              <span className="stat-value">{pet.happiness}</span>
            </p>
          </div>
          <div id="energy" className="stat">
            <p>
              Energy Value:<span className="stat-value">{pet.energy}</span>
            </p>
          </div>

          <div>
            <h2>Pet Mood</h2>

            <h1>{moodEmojis[currentMood]}</h1>

            <p>{currentMood}</p>
          </div>
        </div>
      )}
    </div>
  );
};
