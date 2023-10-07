var chatMessages = [
  {
    name: "ms1",
    msg: "Hello! What are you?",
    delay: 0,
    align: "right",
    image: "",
  },
  {
    name: "ms2",
    msg: "Hello! I am Mini DALL·E 3, a smart AI assistant. I can help you with various tasks, including generating images based on your requests. How can I assist you today?",
    delay: 1000,
    align: "left",
    image: "",
  },
  {
    name: "ms3",
    msg: "That’s awesome. Can you generate a cute dog?",
    delay: 1500,
    align: "right",
    image: "",
  },
  {
    name: "ms4",
    msg: "Sure, here is a cute dog for you:",
    delay: 1000,
    align: "left",
    image: "teaser/image/image-7.png",
  },
  {
    name: "ms5",
    msg: "Cool! Could you make some sticker?",
    delay: 2000,
    align: "right",
    image: ""
  },
  {
    name: "ms6",
    msg: "Sure, here is a sticker of a cute dog for you:",
    delay: 1000,
    align: "left",
    image: "teaser/image/image-5.png",
  },
  {
    name: "ms7",
    msg: "Good! Can you make it run near the river?",
    delay: 2000,
    align: "right",
    image: ""
  },
  {
    name: "ms8",
    msg: "Sure, here it is:",
    delay: 1000,
    align: "left",
    image: "teaser/image/image-6.png",
  },
  {
    name: "ms9",
    msg: "Don't be a sticker",
    delay: 2000,
    align: "right",
    image: ""
  },
  {
    name: "ms10",
    msg: "Apologies for the confusion. Here is an image of a cute dog running near a serene river:",
    delay: 500,
    align: "left",
    image: "teaser/image/image-4.png",
  },
  {
    name: "ms11",
    msg: "What would this dog's house look like?",
    delay: 2000,
    align: "right",
    image: ''
  },
  {
    name: "ms12",
    msg: "Certainly! Here is an image of a cute dog's house:",
    delay: 500,
    align: "left",
    image: "teaser/image/image-3.png",
  },
  {
    name: "ms14",
    msg: "Don't be a 3D model!",
    delay: 2500,
    align: "right",
    image: ""
  },
  {
    name: "ms15",
    msg: "Apologies for the confusion. Here is a description of the cute dog's house: The cute dog's house is a cozy little wooden cabin with a red roof. It has a small porch with a dog bed and a bowl of water. The house is surrounded by a beautiful garden with colorful flowers and a fenced yard for the dog to play in.",
    delay: 500,
    align: "left",
    image: ""
  },
  {
    name: "ms16",
    msg: "Can you turn this description into an image?",
    delay: 2500,
    align: "right",
    image: ""
  },
  {
    name: "ms17",
    msg: "Certainly! Here is an image based on the description of the cute dog's house:",
    delay: 500,
    align: "left",
    image: "teaser/image/image-2.png",
  },
  {
    name: "ms19",
    msg: "Where is the dog?",
    delay: 3000,
    align: "right",
    image: ""
  },
  {
    name: "ms20",
    msg: "Apologies for the oversight. Here is an updated image that includes the dog in the scene:",
    delay: 500,
    align: "left",
    image: "teaser/image/image-1.png",
  },
  {
    name: "ms21",
    msg: "It looks great!",
    delay: 2000,
    align: "right",
    image: ""
  },
  {
    name: "ms22",
    msg: "I'm glad you like it! If you have any other requests or need further assistance, feel free to let me know.",
    delay: 1000,
    align: "left",
    image: ""
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
