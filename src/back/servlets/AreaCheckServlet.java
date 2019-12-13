package back.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

import back.Result;

@WebServlet("/areaCheck")
public class AreaCheckServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws SecurityException, IOException, ServletException {
        HttpSession session = request.getSession();
        ArrayList<Result> holder = new ArrayList<>();
        if (session.getAttribute("history") != null) {
            holder.addAll((ArrayList<Result>) session.getAttribute("history"));
        }

        try{
            double x = Double.parseDouble(request.getParameter("xValue"));
            double y = Double.parseDouble(request.getParameter("yValue").replace(",","."));
            double r = Double.parseDouble(request.getParameter("rValue").replace(",","."));

            if (checkResult(x, y, r)) {
                holder.add(new Result(x, y, r, true));
            }
            else {
                holder.add(new Result(x, y, r, false));
            }
            session.setAttribute("history", holder);
            request.getServletContext().getRequestDispatcher("/result.jsp").forward(request, response);
        }catch (NumberFormatException | NullPointerException  e){

            e.printStackTrace();
        }
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws SecurityException, IOException, ServletException {
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }

    private boolean checkResult(double x, double y, double r) {
//        if (x < -4 || x > 4 || y < - 5|| y > 5 || r < 2 || r > 5) {
//            return false;
//        }
        if (x <= 0 && y <= 0 && (x*x + y*y <= r*r/4)) {
            return true;
        }

        if (x >= 0 && y <= 0 && (y - x >= -r/2)) {
            return true;
        }

        if (x >= 0 && y >= 0 && x <= r/2 && y <= r) {
            return true;
        }
        return false;
    }



}