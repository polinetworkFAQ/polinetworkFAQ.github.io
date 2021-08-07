'use strict';

// Set the visibility of a group composed of a question and its answers
function setQuestionGroupVisibility(question, visibility)
{
  // Convert the visibility argument to a string
  // in which true corresponds to "visible" and false to "hidden"
  var visibilityString = (visibility ? "visible" : "hidden");

  // Set the question visibility
  question.style.visibility = visibilityString;

  // Set the visibility of the question answers
  Array.from(question.children)
    .filter((item) => {return item.classList.contains("answer")})
    .map((item) => {return item.style.setProperty("visibility", visibilityString)});
}

function stepForward(answerAnchor)
{
  // Retrieve the parent div of the anchor passed as argument
  // due to the fact that the real answer is the div, not the anchor
  var answer = answerAnchor.parentNode;

  // Retrieve the only child node of the answer
  var onlyChild = answer.children[1];

  // Retrieve the parent question of the answer
  var parentQuestion = answer.parentNode;

  // Hide the parent question and each of its childre answer
  setQuestionGroupVisibility(parentQuestion, false);

  // If the child node of the answer is a question
  if(onlyChild.classList.contains("question"))
  {
    // Show the child question and each of its answers
    setQuestionGroupVisibility(onlyChild, true);
  }
  // If the child node of the answer is a guide
  else
  {
    // ...
  }
}
