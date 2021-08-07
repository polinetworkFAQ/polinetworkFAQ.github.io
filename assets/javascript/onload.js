// When the windows is fully loaded
window.addEventListener("load", () =>
{
  // Retrieve the first question of the tree
  // the first which has to be showed
  rootQuestion = document.getElementsByClassName("first question")[0];

  // Show the first question and its answers
  setQuestionGroupVisibility(rootQuestion, true);
});
