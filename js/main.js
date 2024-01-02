(function () {
  var $result = document.getElementById("result");

  function update() {
    var result = null,
      input = editor.getValue();
    try {
      result = ejs.render(input);
      $result.parentNode.style.background = "#2E2E2E";
    } catch (e) {
      result = e.stack;
      $result.parentNode.style.background = "#c0392b";
    }

    if (/html/.test(location.search)) {
      $result.innerHTML = result;
    } else {
      $result.textContent = result;
    }
  }

  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/ejs");
  editor.on("change", update);
  editor.setValue(
    `OK, so have fun! :D
-------------------
<%
    var fruits = ["Apple", "Pear", "Orange", "Lemon"]
      , random = " ".repeat(198).split("").map(x => Math.random())
      ;
%>

These fruits are amazing:
<% for(var i = 0; i < fruits.length; ++i) {%>
  - <%=fruits[i]%>s<% } %>

Let's see some random numbers:

<% random.forEach((c, i) => {
%> <%=c.toFixed(2) + ((i + 1) % 10 === 0 ? "\\n": "  ") %><%});%>`,
    -1
  );
  editor.focus();
})();

function myFunction() {
  const copyText = document.getElementById("result").textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  document.getElementById("copy").textContent = "Copied to Clipboard";
  document.getElementById("copy").style.width = "20rem";
  document.getElementById("copy").style.marginLeft = "24rem";
}

function FullScreen() {
  var content = document.querySelector(".row").style.display;

   if (content === "block") {
    document.querySelector(".row").style.display = "flex";
    document.getElementById("fullScreen").textContent = "Enter Full Screen";
    document.querySelector(".col-result").style.textAlign = "left"
} else {
    document.querySelector(".row").style.display = "block";
    document.getElementById("fullScreen").textContent = "Exit Full Screen";
    document.querySelector(".col-result").style.textAlign = "center";
   }
}
