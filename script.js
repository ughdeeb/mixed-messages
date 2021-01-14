//Function that, when passed an array, returns a random element from an array. Note that array.length returns the length of the array like
const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

//Objects which contain sonnets
const shakespeareSonnets = {
  sonnetTitle: ["Sonnet 129", "Sonnet 65", "Sonnet 75"],
  sonnetTextOctave: [
    "1 The expense of spirit in a waste of shame 2 Is lust in action, and, till action, lust 3 Is perjured, murderous, bloody, full of blame, 4 Savage, extreme, rude, cruel, not to trust, 5 Enjoyed no sooner but despised straight, 6 Past reason hunted, and no sooner had 7 Past reason hated as a swallowed bait 8 On purpose laid to make the taker mad;",
    "1 Since brass, nor stone, nor earth, nor boundless sea, 2 But sad mortality o’ersways their power, 3 How with this rage shall beauty hold a plea, 4 Whose action is no stronger than a flower? 5 O, how shall summer’s honey breath hold out 6 Against the wrackful siege of battering days, 7 When rocks impregnable are not so stout, 8 Nor gates of steel so strong, but Time decays?",
    "1 So are you to my thoughts as food to life, 2 Or as sweet seasoned showers are to the ground; 3 And for the peace of you I hold such strife 4 As ‘twixt a miser and his wealth is found; 5 Now proud as an enjoyer, and anon 6 Doubting the filching age will steal his treasure; 7 Now counting best to be with you alone, 8 Then better’d that the world may see my pleasure;",
  ],
  sonnetTextSestet: [
    "9 Mad in pursuit and in possession so, 10 Had, having, and in quest to have, extreme, 11 A bliss in proof, and proved, a very woe, 12 Before, a joy proposed; behind, a dream. 13 All this the world well knows, yet none knows well 14 To shun the heaven that leads men to this hell.",
    "9 O fearful meditation! Where, alack, 10 Shall Time’s best jewel from Time’s chest lie hid? 11 Or what strong hand can hold his swift foot back? 12 Or who his spoil of beauty can forbid? 13 O, none, unless this miracle have might, 14 That in black ink my love may still shine bright.",
    "9 Sometime all full with feasting on your sight, 10 And by and by clean starved for a look; 11 Possessing or pursuing no delight 12 Save what is had or must from you be took. 13 Thus do I pine and surfeit day by day, 14 Or gluttoning on all, or all away. ",
  ],
};

// Function that prints text with the randomized sonnet
function sonnetShaker() {
  console.log(
    `Shakespeare has shooken up his sonnets in some of his socks and bonnets and now you have a newly-shaken Shakesperean sonnet:
  
  ${getRandomElement(shakespeareSonnets.sonnetTitle)}:
  ${getRandomElement(shakespeareSonnets.sonnetTextOctave)}
  ${getRandomElement(shakespeareSonnets.sonnetTextSestet)}`
  );
}
// // console.log(generateRandomNumber());

sonnetShaker();
