export const DEFAULT_TITLE = 'Tools & Utilities';
export const LogoDark = './images/dark-logo.png';
export const LogoLight = './images/light-logo.png';
export const currencyLocalstorageKey = 'currency';
export const todotorageKey = 'todo';
export const pdfFileName = 'document.pdf';
export const UpperCaseText = 'Make Uppercase';
export const LowerCaseText = 'Make Lowercase';
export const RemovePunctuations = 'Remove Punctuations';
export const NewLineRemover = 'New Line Remover';
export const ExtraSpacesRemover = 'Extra Spaces Remover';
export const NumberRemover = 'Number Remover';
export const colorTheme = 'color-theme';
export const quizApiBaseUrl = 'https://opentdb.com/api.php?'; //amount=10&category=30&difficulty=medium&type=multiple
export const weatherApiBaseUrl = 'https://mockx-api.herokuapp.com/rest-api/v1/weather/';
export const get_currency_api_endpoint = 'https://mockx-api.herokuapp.com/rest-api/v1/currency';
export const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
export const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numericCharacters = '0123456789';
export const characters = 'a-z,A-Z,0-9,#';
export const symbolsCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
export const strongPassword = new RegExp(
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
);
export const mediumPassword = new RegExp(
  '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
);
export const converterOptions = [
  'Area',
  'Data Transfer Rate',
  'Digital Storage',
  'Energy',
  'Frequency',
  'Fuel Economy',
  'Length',
  'Mass',
  'Plane Angle',
  'Pressure',
  'Speed',
  'Temperature',
  'Time',
  'Volume',
];
export const convertLengthOptions = [
  'Kilometre',
  'Meter',
  'Centimeter',
  'Millimetre',
  'micrometres',
  'Nanometre',
  'Mile',
  'Yard',
  'Foot',
  'Inch',
  'Nautical mile',
];
export const calculatorButtons = [
  '+',
  '-',
  '*',
  '/',
  '7',
  '8',
  '9',
  '%',
  '4',
  '5',
  '6',
  '.',
  '1',
  '2',
  '3',
  '0',
  'C',
  '=',
];
export const convertTemperatureOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];
export const quizCategory = [
  {
    value: 'any',
    categoryName: 'Any Category',
  },
  {
    value: '9',
    categoryName: 'General Knowledge',
  },
  {
    value: '10',
    categoryName: 'Entertainment: Books',
  },
  {
    value: '11',
    categoryName: 'Entertainment: Film',
  },
  {
    value: '12',
    categoryName: 'Entertainment: Music',
  },
  {
    value: '13',
    categoryName: 'Entertainment: Musicals & Theatres',
  },
  {
    value: '14',
    categoryName: 'Entertainment: Television',
  },
  {
    value: '15',
    categoryName: 'Entertainment: Video Games',
  },
  {
    value: '16',
    categoryName: 'Entertainment: Board Games',
  },
  {
    value: '17',
    categoryName: 'Science & Nature',
  },
  {
    value: '18',
    categoryName: 'Science: Computers',
  },
  {
    value: '19',
    categoryName: 'Science: Mathematics',
  },
  {
    value: '20',
    categoryName: 'Mythology',
  },
  {
    value: '21',
    categoryName: 'Sports',
  },
  {
    value: '22',
    categoryName: 'Geography',
  },
  {
    value: '23',
    categoryName: 'History',
  },
  {
    value: '24',
    categoryName: 'Politics',
  },
  {
    value: '25',
    categoryName: 'Art',
  },
  {
    value: '26',
    categoryName: 'Celebrities',
  },
  {
    value: '27',
    categoryName: 'Animals',
  },
  {
    value: '28',
    categoryName: 'Vehicles',
  },
  {
    value: '29',
    categoryName: 'Entertainment: Comics',
  },
  {
    value: '30',
    categoryName: 'Science: Gadgets',
  },
  {
    value: '31',
    categoryName: 'Entertainment: Japanese Anime & Manga',
  },
  {
    value: '32',
    categoryName: 'Entertainment: Cartoon & Animations',
  },
];
