/*new Sortable(items, {
  animation: 150,
  ghostClass: "blue-background-class",
});
*/

/*
document.addEventListener("DOMContentLoaded", (event) => {
  function handleDragStart(e) {
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    console.log(e.dataTransfer.types);
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }
  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }

    return false;
  }

  let items = document.querySelectorAll(".drag");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("drop", handleDrop);
  });
});
*/
