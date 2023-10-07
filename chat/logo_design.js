var chatMessages = [
  {
    name: "ms1",
    msg: "Can you help me to design a logo for a text-to-image app?    ",
    delay: 0,
    align: "right",
    image: "",
  },
  {
    name: "ms2",
    msg: "Of course! I can definitely help you design a logo for your text-to-image app. Could you please provide me with some more details about your app and any specific ideas or preferences you have for the logo design?    ",
    delay: 1000,
    align: "left",
    image: "",
  },
  {
    name: "ms3",
    msg: "It is call mini-dalle3    ",
    delay: 2500,
    align: "right",
    image: "",
  },
  {
    name: "ms4",
    msg: 'Great! So you would like the logo for your text-to-image app called "Mini-DALLE3". Could you please provide me with some more information about the style or concept you have in mind for the logo? Do you have any specific colors or symbols that you would like to incorporate? ',
    delay: 1000,
    align: "left",
    image: "",
  },
  {
    name: "ms5",
    msg: "I would like it to be flatten    ",
    delay: 4500,
    align: "right",
    image: ""
  },
  {
    name: "ms6",
    msg: "Understood! You would like the logo for your Mini-DALLE3 app to have a flat design. Based on that, I will create a logo that incorporates simplicity and minimalism. Here is a concept for the Mini-DALLE logo: <br><br> <img src='image/examples/examples-1.png' width=200px> <br> Please let me know if you have any specific changes or additions you would like to make to the concept.",
    delay: 1000,
    align: "left",
    image: "",
  },
  {
    name: "ms7",
    msg: "I want it to use orange as main color",
    delay: 3000,
    align: "right",
    image: ""
  },
  {
    name: "ms8",
    msg: "Certainly! Here is an updated concept for the Mini-DALLE logo with orange as the main color: <br><br> <img src='image/examples/examples-2.png' width=200px> <br>  Please let me know if you have any further feedback or if there are any other specific elements you would like to include in the logo design.",
    delay: 1000,
    align: "left",
    image: "",
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
