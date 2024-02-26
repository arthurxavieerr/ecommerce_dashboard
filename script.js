var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var icon = this.querySelector("i.fa-solid");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-right");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.remove("fa-chevron-right");
      icon.classList.add("fa-chevron-down");
    }
  });
}