let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
//console.log(storyWords.length);


//Temporary copy of storyWords. Holds resulting array after each filter. Prevents storyWords from being mutated.
let tempWords = storyWords;
unnecessaryWords.forEach(word =>{

betterWords = tempWords.filter(element => word !== element);
tempWords = betterWords;

});

const overusedWordsOccurence = () =>{
let eachWordCount = []; //Array that holds each num of occurence
overusedWords.forEach(function(word){
let number = 0; //count variable for each iteration. Resets to 0 after each iteration.
for(let i = 0; i<storyWords.length; i++){
if(word === storyWords[i]){number++;}
}
eachWordCount.push(number);
})
return eachWordCount;
}

const numOfSentences = () =>{
  let sentenceCount = 0;
storyWords.forEach(word=>{
  if(word[(word.length-1)] === '.'|| word[(word.length-1)] === '!'){
    sentenceCount ++;
  }
})
return sentenceCount;
}

//Displays the number of times each overused word appears
const overUsedWordsCount = () =>{
const wordCount = overusedWordsOccurence();
console.log('\nThe overused words, with their number of occurrences, are:');
for(let i = 0; i <wordCount.length; i++){
console.log(overusedWords[i]+ ': ' + wordCount[i]);
}
}

console.log('The number of words in the story is '+ storyWords.length);

console.log('The number of sentences in the story is '+ numOfSentences());

overUsedWordsCount();

console.log('\n'+betterWords.join(' '));

