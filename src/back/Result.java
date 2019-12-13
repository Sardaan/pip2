package back;

public class Result {
    private double x;
    private double y;
    private double r;
    private boolean hit;

    public Result(double x, double y, double r, boolean hit){
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
    }
    public Result(){ }
    public double getX() { return x; }

    public double getY() { return y; }

    public double getR() { return r; }

    public boolean isHit() {
        return hit;
    }




//    @Override
//    public String toString() {
//        return "<td>" + x + "</td>" +
//                "<td>" + y + "</td>" +
//                "<td>" + r + "</td>" +
//                "<td>" + (hit ? "TRUE" : "FALSE") + "</td>" ;
//
//    }
//
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//
//        Result that = (Result) o;
//
//        if (x != that.x) return false;
//        if (y != that.y) return false;
//        if (r != that.r) return false;
//        return Objects.equals(hit, that.hit);
//    }
//
//    @Override
//    public int hashCode() {
//        int result1;
//        long temp;
//        temp = Double.doubleToLongBits(x);
//        result1 = (int) (temp ^ (temp >>> 32));
//        temp = Double.doubleToLongBits(y);
//        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
//        temp = Double.doubleToLongBits(r);
//        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
//        result1 = 31 * result1 + (hit ? 1 : 0);
//        return result1;
//    }

//    public String drawPoint() {
//        String strR = String.format("%.1f", r).replace(",", ".");
//        String strX = String.format("%.4f", x / r).replace(",", ".");
//        String strY = String.format("%.4f", y / r).replace(",", ".");
//        return String.format("drawPoint(%s,%s,%s,\'%s\');", strR, strX, strY, "#00FF00");
//    }

}
