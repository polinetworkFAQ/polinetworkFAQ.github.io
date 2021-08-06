function step(currentNode)
{
  if(currentNode.id == "question")
  {
    currentNode.style.visibility = "visible";
    
    for (var i=0; i < currentNode.children.length; i++)
      if(currentNode.children[i].tagName == "DIV")
        currentNode.children[i].style.visibility = "visible";
  }
}
