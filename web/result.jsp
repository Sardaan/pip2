<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="back.Result" %>
<html>
<head>
    <link rel="stylesheet" href="style.css"/>
    <script src="script.js" async></script>
    <meta charset="UTF-8">
    <title>Результат</title>
    <style type="text/css">
        #backToForm{
            font-size: small;
        }
    </style>
</head>
<body>
<%
    ArrayList<Result> result = (ArrayList<Result>) request.getSession().getAttribute("history");;
    if(result!=null){

%>
<div>
    <table>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Result</th>
        </tr>
        <%
            for (Result element : result) {
        %>
        <tr>
            <td><%= element.getX()%>
            </td>
            <td><%= element.getY()%>
            </td>
            <td><%= element.getR()%>
            </td>
            <td><%= element.isHit()%>
            </td>
        </tr>
        <% }}%>

    </table><a id="backToForm" href="index.jsp">Back to form</a>
</div>
</body>
</html>
