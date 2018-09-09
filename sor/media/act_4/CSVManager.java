import java.util.ArrayList;
import java.util.Vector;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Closeable;

public class CSVManager {
  private static final String INVENTORY_FILENAME = "inventory.csv";
  private static final String SALES_FILENAME = "sales.csv";
  public static ArrayList<String[]> inventory;
  public static ArrayList<String[]> sales;

  public CSVManager() {
      inventory = loadCSV(INVENTORY_FILENAME);
      sales = loadCSV(SALES_FILENAME);
  }

  private ArrayList<String[]> loadCSV(String filename) {
    FileReader fileReader = null;
    BufferedReader buffer = null;
    ArrayList<String[]> data = new ArrayList<String[]>();

    try {
      fileReader = new FileReader(filename);
      buffer = new BufferedReader(fileReader);
      String currentLine;

      while ((currentLine = buffer.readLine()) != null) {
        data.add(currentLine.split(","));
      }
    } catch (IOException e) {
      Logger.debug(e);
    } finally {
      if (buffer != null) safeClose(buffer);
      if (fileReader != null) safeClose(fileReader);
    }

    return data;
  }

  private void writeCSV(String filename, Vector data) {
    FileWriter fileWriter = null;
    BufferedWriter buffer = null;

    try {
      fileWriter = new FileWriter(filename);
      buffer = new BufferedWriter(fileWriter);

      for (Object item: data) {
        Object[] oItem = ((Vector)item).toArray();
        String row = join(oItem);
        buffer.write(row);
      }
    } catch (IOException e) {
      Logger.debug(e);
    } finally {
      if (buffer != null) safeClose(buffer);
      if (fileWriter != null) safeClose(fileWriter);
    }
  }

  public void saveInventory(Vector data) {
    writeCSV(INVENTORY_FILENAME, data);
  }

  public void saveSales(Vector data) {
    writeCSV(SALES_FILENAME, data);
  }

  private <T extends Closeable> void safeClose(T reader) {
    try {
      reader.close();
    } catch (Exception e) {
      Logger.debug(e);
    };
  }

  private String join(Object[] data) {
    String result = "";
    for (int i = 0; i < data.length - 1; i++) {
      result += (String)data[i] + ",";
    }
    return result + data[data.length - 1] + "\n";
  }
}