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



}
