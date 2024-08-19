import { QuestionGroup } from '../types/types';
import { questionThemes } from './question-themes';

const videoGameQuestions: QuestionGroup = {
  theme: 'video-game',
  questions: [
    {
      theme: questionThemes[0],
      title:
        'In which video game do players compete in the Battle Royale mode to be the last person standing on an island?',
      options: [
        { id: 0, text: 'Fortnite' },
        { id: 1, text: 'Apex Legends' },
        { id: 2, text: "PlayerUnknown's Battlegrounds (PUBG)" },
        { id: 3, text: 'Call of Duty: Warzone' },
      ],
      correctAnswer: 0,
    },
    {
      theme: questionThemes[0],
      title:
        "What is the name of the main protagonist in the 'Legend of Zelda' series?",
      options: [
        { id: 0, text: 'Link' },
        { id: 1, text: 'Zelda' },
        { id: 2, text: 'Ganon' },
        { id: 3, text: 'Sheik' },
      ],
      correctAnswer: 0,
    },
    {
      theme: questionThemes[0],
      title:
        'Which video game features a space marine known as Doomguy who fights demons from Hell?',
      options: [
        { id: 0, text: 'Halo' },
        { id: 1, text: 'Doom' },
        { id: 2, text: 'Quake' },
        { id: 3, text: 'Wolfenstein' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[0],
      title: "Which game is known for the quote 'The cake is a lie'?",
      options: [
        { id: 0, text: 'Half-Life 2' },
        { id: 1, text: 'Portal' },
        { id: 2, text: 'Bioshock' },
        { id: 3, text: 'Fallout 3' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[0],
      title:
        "In 'Overwatch', which character is known for the catchphrase 'It's high noon'?",
      options: [
        { id: 0, text: 'Tracer' },
        { id: 1, text: 'Reaper' },
        { id: 2, text: 'McCree' },
        { id: 3, text: 'Soldier: 76' },
      ],
      correctAnswer: 2,
    },
    {
      theme: questionThemes[0],
      title: 'Which game series features an assassin named Ezio Auditore?',
      options: [
        { id: 0, text: 'Hitman' },
        { id: 1, text: "Assassin's Creed" },
        { id: 2, text: 'Dishonored' },
        { id: 3, text: 'Metal Gear Solid' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[0],
      title: 'What is the best-selling video game of all time?',
      options: [
        { id: 0, text: 'Minecraft' },
        { id: 1, text: 'Tetris' },
        { id: 2, text: 'Grand Theft Auto V' },
        { id: 3, text: 'Wii Sports' },
      ],
      correctAnswer: 0,
    },
    {
      theme: questionThemes[0],
      title: 'Which game features the characters Master Chief and Cortana?',
      options: [
        { id: 0, text: 'Mass Effect' },
        { id: 1, text: 'Halo' },
        { id: 2, text: 'Destiny' },
        { id: 3, text: 'Gears of War' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[0],
      title:
        "What is the name of the city where the game 'BioShock' takes place?",
      options: [
        { id: 0, text: 'Rapture' },
        { id: 1, text: 'Columbia' },
        { id: 2, text: 'Midgar' },
        { id: 3, text: 'Raccoon City' },
      ],
      correctAnswer: 0,
    },
    {
      theme: questionThemes[0],
      title: 'In which game do you play as Geralt of Rivia, a monster hunter?',
      options: [
        { id: 0, text: 'Dark Souls' },
        { id: 1, text: 'The Witcher' },
        { id: 2, text: 'Dragon Age' },
        { id: 3, text: 'Bloodborne' },
      ],
      correctAnswer: 1,
    },
  ],
};

const cinemaGameQuestions: QuestionGroup = {
  theme: 'cinema',
  questions: [
    {
      theme: questionThemes[1],
      title: "Who directed the movie 'Inception'?",
      options: [
        { id: 0, text: 'Steven Spielberg' },
        { id: 1, text: 'Christopher Nolan' },
        { id: 2, text: 'Quentin Tarantino' },
        { id: 3, text: 'James Cameron' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[1],
      title:
        'Which movie features a giant ship sinking after hitting an iceberg?',
      options: [
        { id: 0, text: 'Poseidon' },
        { id: 1, text: 'Titanic' },
        { id: 2, text: 'A Night to Remember' },
        { id: 3, text: 'The Abyss' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[1],
      title:
        "Which actor played the character of Jack Sparrow in the 'Pirates of the Caribbean' series?",
      options: [
        { id: 0, text: 'Orlando Bloom' },
        { id: 1, text: 'Johnny Depp' },
        { id: 2, text: 'Geoffrey Rush' },
        { id: 3, text: 'Keira Knightley' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[1],
      title:
        "In which movie does the character 'Forrest Gump' say, 'Life is like a box of chocolates'?",
      options: [
        { id: 0, text: 'Cast Away' },
        { id: 1, text: 'Saving Private Ryan' },
        { id: 2, text: 'Forrest Gump' },
        { id: 3, text: 'The Green Mile' },
      ],
      correctAnswer: 2,
    },
    {
      theme: questionThemes[1],
      title: "Which film features the quote, 'Here's looking at you, kid'?",
      options: [
        { id: 0, text: 'Gone with the Wind' },
        { id: 1, text: 'Casablanca' },
        { id: 2, text: 'The Maltese Falcon' },
        { id: 3, text: 'Citizen Kane' },
      ],
      correctAnswer: 1,
    },
    {
      theme: questionThemes[1],
      title: "Who played the character of Neo in 'The Matrix'?",
      options: [
        { id: 0, text: 'Keanu Reeves' },
        { id: 1, text: 'Laurence Fishburne' },
        { id: 2, text: 'Hugo Weaving' },
        { id: 3, text: 'Carrie-Anne Moss' },
      ],
      correctAnswer: 0,
    },
    {
      theme: questionThemes[1],
      title: 'Which movie won the Academy Award for Best Picture in 2020?',
      options: [
        { id: 0, text: '1917' },
        { id: 1, text: 'Joker' },
        { id: 2, text: 'Parasite' },
        { id: 3, text: 'Once Upon a Time in Hollywood' },
      ],
      correctAnswer: 2,
    },
    {
      theme: questionThemes[1],
      title: "Who directed the 'Lord of the Rings' trilogy?",
      options: [
        { id: 0, text: 'Peter Jackson' },
        { id: 1, text: 'George Lucas' },
        { id: 2, text: 'Steven Spielberg' },
        { id: 3, text: 'James Cameron' },
      ],
      correctAnswer: 0,
    },
    {
      theme: questionThemes[1],
      title:
        "Which actress played the role of Katniss Everdeen in 'The Hunger Games' series?",
      options: [
        { id: 0, text: 'Shailene Woodley' },
        { id: 1, text: 'Emma Stone' },
        { id: 2, text: 'Jennifer Lawrence' },
        { id: 3, text: 'Emma Watson' },
      ],
      correctAnswer: 2,
    },
    {
      theme: questionThemes[1],
      title:
        'Which movie features a group of friends on a quest to find a lost treasure and save their homes from foreclosure?',
      options: [
        { id: 0, text: 'Stand by Me' },
        { id: 1, text: 'The Goonies' },
        { id: 2, text: 'E.T. the Extra-Terrestrial' },
        { id: 3, text: 'Back to the Future' },
      ],
      correctAnswer: 1,
    },
  ],
};

const allQuestions: QuestionGroup[] = [videoGameQuestions, cinemaGameQuestions];

const getQuestionsByTheme = (
  themeCode: string,
  numberOfQuestions: number = -1
) => {
  const themeQuestionGroup = allQuestions.find(
    (questionGroup) => questionGroup.theme == themeCode
  );

  if (themeQuestionGroup !== undefined) {
    if (numberOfQuestions === -1) {
      return themeQuestionGroup.questions;
    } else {
      const questionsArray = [...themeQuestionGroup.questions];
      questionsArray.splice(Math.min(numberOfQuestions, questionsArray.length));
      return questionsArray;
    }
  } else {
    return [];
  }
};

export { getQuestionsByTheme };
