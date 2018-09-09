import java.util.ArrayList;

public class Main {
  static Window window;
  static CSVManager csvManager;
  static Actions actions;

  public static void main(String args[] ) {
    window = new Window();
    csvManager = new CSVManager();
    actions = new Actions(window, csvManager);
  }
}
