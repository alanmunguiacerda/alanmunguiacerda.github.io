public class Logger {
  public static void debug(Object cls, String extra) {
    System.out.println(cls.getClass().getSimpleName() + " " + extra);
  }

  public static void debug(Object any) {
    System.out.println(any);
  }
}
