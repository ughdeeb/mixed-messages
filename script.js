//Function that, when passed an array, returns a random element from an array. Note that "array.length" returns a number, (i.e., the length of the array)
const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

//Objects which contain sonnet titles, sonnet octaves, and octave sestets
const shakespeareSonnets = {
  sonnetTitle: [
    "Sonnet 129?",
    "Sonnet 65?",
    "Sonnet 75?",
    "Sonnet 3?",
    "Sonnet 55?",
  ],
  sonnetTextOctave: [
    "Line 1 The expense of spirit in a waste of shame ~Line 2 Is lust in action, and, till action, lust ~Line 3 Is perjured, murderous, bloody, full of blame, ~Line 4 Savage, extreme, rude, cruel, not to trust, ~Line 5 Enjoyed no sooner but despised straight, ~Line 6 Past reason hunted, and no sooner had ~Line 7 Past reason hated as a swallowed bait ~Line 8 On purpose laid to make the taker mad;",
    "Line 1 Since brass, nor stone, nor earth, nor boundless sea, ~Line 2 But sad mortality o’ersways their power, ~Line 3 How with this rage shall beauty hold a plea, ~Line 4 Whose action is no stronger than a flower? ~Line 5 O, how shall summer’s honey breath hold out ~Line 6 Against the wrackful siege of battering days, ~Line 7 When rocks impregnable are not so stout, ~Line 8 Nor gates of steel so strong, but Time decays?",
    "Line 1 So are you to my thoughts as food to life, ~Line 2 Or as sweet seasoned showers are to the ground; ~Line 3 And for the peace of you I hold such strife ~Line 4 As ‘twixt a miser and his wealth is found; ~Line 5 Now proud as an enjoyer, and anon ~Line 6 Doubting the filching age will steal his treasure; ~Line 7 Now counting best to be with you alone, ~Line 8 Then better’d that the world may see my pleasure;",
    "Line 1 Look in thy glass and tell the face thou viewest, ~Line 2 Now is the time that face should form another, ~Line 3 Whose fresh repair if now thou not renewest, ~Line 4 Thou dost beguile the world, unbless some mother. ~Line 5 For where is she so fair whose uneared womb ~Line 6 Disdains the tillage of thy husbandry? ~Line 7 Or who is he so fond will be the tomb ~Line 8 Of his self-love, to stop posterity?",
    "Line 1 Not marble nor the gilded monuments ~Line 2 Of princes shall outlive this powerful rhyme; ~Line 3 But you shall shine more bright in these contents ~Line 4 Than unswept stone, besmear’d with sluttish time. ~Line 5 When wasteful war shall statues overturn, ~Line 6 And broils root out the work of masonry, ~Line 7 Nor Mars his sword nor war’s quick fire shall burn ~Line 8 The living record of your memory.",
  ],
  sonnetTextSestet: [
    "~Line 9 Mad in pursuit and in possession so, ~Line 10 Had, having, and in quest to have, extreme, ~Line 11 A bliss in proof, and proved, a very woe, ~Line 12 Before, a joy proposed; behind, a dream. ~Line 13 All this the world well knows, yet none knows well ~Line 14 To shun the heaven that leads men to this hell.",
    "~Line 9 O fearful meditation! Where, alack, ~Line 10 Shall Time’s best jewel from Time’s chest lie hid? ~Line 11 Or what strong hand can hold his swift foot back? ~Line 12 Or who his spoil of beauty can forbid? ~Line 13 O, none, unless this miracle have might, ~Line 14 That in black ink my love may still shine bright.",
    "~Line 9 Sometime all full with feasting on your sight, ~Line 10 And by and by clean starved for a look; ~Line 11 Possessing or pursuing no delight ~Line 12 Save what is had or must from you be took. ~Line 13 Thus do I pine and surfeit day by day, ~Line 14 Or gluttoning on all, or all away. ",
    "~Line 9 Thou art thy mother’s glass, and she in thee ~Line 10 Calls back the lovely April of her prime; ~Line 11 So thou through windows of thine age shalt see, ~Line 12 Despite of wrinkles, this thy golden time. ~Line 13 But if thou live rememb’red not to be, ~Line 14 Die single, and thine image dies with thee.",
    "~Line 9 ‘Gainst death and all-oblivious enmity ~Line 10 Shall you pace forth; your praise shall still find room, ~Line 11 Even in the eyes of all posterity ~Line 12 That wear this world out to the ending doom. ~Line 13 So, till the judgment that yourself arise, ~Line 14 You live in this, and dwell in lovers’ eyes.",
  ],
};

const sonnetShakerBreaker = (obj) => {
  const randomSonnetPieceTitle = getRandomElement(
    shakespeareSonnets.sonnetTitle
  );
  const randomSonnetPieceOctave = getRandomElement(
    shakespeareSonnets.sonnetTextOctave
  );
  const randomSonnetPieceSestet = getRandomElement(
    shakespeareSonnets.sonnetTextSestet
  );
  const linedSonnetTitle = randomSonnetPieceTitle.split("~");
  const linedSonnetOctave = randomSonnetPieceOctave.split("~");
  const linedSonnetSestet = randomSonnetPieceSestet.split("~");

  console.log(
    `Shakespeare has mixed up his sonnets in a sort-of mental bonnet to give you a newly-shaken Shakesperean sonnet:
${linedSonnetTitle.join("\n")}
${linedSonnetOctave.join("\n")} ${linedSonnetSestet.join("\n")}`
  );
};

sonnetShakerBreaker(shakespeareSonnets);
