var chatMessages = [
  {
    name: "ms1",
    msg: "I want to design a picture of a spaceship, could you give me some suggestions?    ",
    delay: 0,
    align: "right",
    image: "",
  },
  {
    name: "ms2",
    msg: "Certainly! Here are a few suggestions for designing a picture of a spaceship: <br> Classic Spaceship: Create a sleek and futuristic spaceship with a metallic exterior, streamlined shape, and glowing lights.<br> Retro Spaceship: Design a spaceship inspired by retro sci-fi movies, with a bulbous shape, fins, and retro color schemes like silver and red.<br> Alien Spaceship: Let your imagination run wild and design an otherworldly spaceship with unconventional shapes, organic textures, and vibrant colors.",
    delay: 1000,
    align: "left",
    image: "",
  },
  {
    name: "ms3",
    msg: "I like Retro Spaceship, could you imagine a picture of it?    ",
    delay: 2500,
    align: "right",
    image: "",
  },
  {
    name: "ms4",
    msg: 'Certainly! Here is an image of a Retro Spaceship for your inspiration:    ',
    delay: 1000,
    align: "left",
    image: "image/examples/examples-9.png",
  },
  {
    name: "ms5",
    msg: "What is the prompt for it?  ",
    delay: 4500,
    align: "right",
    image: ""
  },
  {
    name: "ms6",
    msg: "The prompt for the image of the Retro Spaceship is 'A Retro Spaceship with a bulbous shape, fins, and a silver and red color scheme'.    ",
    delay: 1000,
    align: "left",
    image: "",
  },
  {
    name: "ms7",
    msg: "I don't want the fins    ",
    delay: 3000,
    align: "right",
    image: ""
  },
  {
    name: "ms8",
    msg: "Apologies for the misunderstanding. Here is an updated image of a Retro Spaceship without the fins:    ",
    delay: 1000,
    align: "left",
    image: "image/examples/examples-8.png",
  },
];
var chatDelay = 0;

function onRowAdded() {
  $(".chat-container").animate({
    scrollTop: $(".chat-container").prop("scrollHeight"),
  });
}
$.each(chatMessages, function (index, obj) {
  chatDelay = chatDelay + 200;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;

  if (obj.image == "") {
    msg =
      "<li class='message-" +
      obj.align +
      " " +
      obj.name +
      "' hidden><div class='sp-" +
      obj.name +
      "'><span class='spinme-" +
      obj.align +
      "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
      obj.name +
      "' hidden><span class='message-text'>" +
      obj.msg +
      "</span>" +
      "</div></li>";
  } else {
    msg =
      "<li class='message-" +
      obj.align +
      " " +
      obj.name +
      "' hidden><div class='sp-" +
      obj.name +
      "'><span class='spinme-" +
      obj.align +
      "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
      obj.name +
      "' hidden><span class='message-text'>" +
      obj.msg +
      '<br><br> <img src="' +
      obj.image +
      '" width=200px>' +
      "</span>" +
      "</div></li>";
  }

  $(".chat-message-list").append(msg);

  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
