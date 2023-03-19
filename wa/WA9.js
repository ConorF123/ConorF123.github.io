const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was a quiet night, so Bob and :insertx: decided to take a stroll. As they walked past :inserty:, they were transfixed, then :insertx: :insertz:. Bob witnessed the strange phenomenon, but wasn\'t too surprised. Afterall, :insertx: was known for their random acts of insanity. Despite the cool breeze, :insertx: was sweating profusely, their heart pounding as they tried to make sense of what they had just seen.';
const insertX = ['Conor', 'Jemima', 'The Fig'];
const insertY = ['the abandoned building', 'the crashed UFO', 'the old fountain'];
const insertZ = ['did a backflip', 'began to tapdance', 'burst into tears of joy'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714)} stone`;
    const temperature =  `${Math.round((94-32) * 5/9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}