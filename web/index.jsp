<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="back.Result" %>
<html>
  <head>
    <title>PIP2</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css"/>
  </head>

  <body onload="draw()">
  <header>
    <h2>Григорьева Сардаана P3200</h2>
    <p>Вариант 200029</p>
  </header>
  <div id="canv">
    <canvas id="graph"></canvas>
  </div>

  <form id="form" method="post" action="controller" onsubmit="return validate()">
      <div class="xForm">
        <span id="xSpan">X:</span>
        <label><input type="radio" name="xValue" value="-4">-4</label>
        <label><input type="radio" name="xValue" value="-3">-3</label>
        <label><input type="radio" name="xValue" value="-2">-2</label>
        <label><input type="radio" name="xValue" value="-1">-1</label>
        <label><input type="radio" name="xValue" value="0">0</label>
        <label><input type="radio" name="xValue" value="1">1</label>
        <label><input type="radio" name="xValue" value="2">2</label>
        <label><input type="radio" name="xValue" value="3">3</label>
        <label><input type="radio" name="xValue" value="4">4</label>
        <br><span id="xErrorLine" ></span>
      </div>
      <div class="yForm">
        <span id="ySpan">Y:</span>
        <input id="yValue" name="yValue" type="text" value="" maxlength="10" placeholder="-5 ... 5" />
        <br><span id="yErrorLine" ></span>
      </div>

      <div class="rForm">
        <span id="rSpan">R:</span>
        <input id="rValue" name="rValue" type="text" value="" maxlength="10" placeholder="2 ... 5" />
        <br><span id="rErrorLine" ></span>
      </div>

      <div class="formButtons">
        <button type="submit" id="submitButton">Send</button>
      </div>
  </form>
  <script src="script.js"></script>
  <%
    if (request!=null) {
      ArrayList<Result> result = (ArrayList<Result>) request.getSession().getAttribute("history");;
      if (result != null) {
        for (Result element : result) {
          %>
  <script>
    drawPoint(<%=element.getX()/element.getR()*160+200%>, <%=-element.getY()/element.getR()*160+200%>);
  </script>
  <%}}}%>
  
  </body>
</html>
