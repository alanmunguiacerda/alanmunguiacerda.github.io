import java.util.ArrayList;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import javax.swing.event.ListSelectionListener;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ChangeListener;
import javax.swing.event.ChangeEvent;

public class Actions {
  static Window w;
  static int selectedRow;

  public Actions(Window _window) {
    w = _window;

    w.btAdd.addActionListener(new AddProduct());
    w.btDelete.addActionListener(new DeleteProduct());
    w.tbProducts.getSelectionModel().addListSelectionListener(new SelectRow());
    w.spnAmount.addChangeListener(new AmountChanged());
  }

  void updateTotal() {
    Integer row = w.getSelectedRow();
    if (row == null) return;

    try {
      String priceStr = (String)w.tbProducts.getValueAt(row, 1);
      int amount = (int)w.spnAmount.getValue();
      w.setTotal(amount * Integer.parseInt(priceStr));
    } catch (Exception ex) {
      w.setTotal(0);
    }
  }

  public class AddProduct implements ActionListener {
    public void actionPerformed(ActionEvent e) {
      w.addRow();

      int row = w.tbProducts.getRowCount();
      w.tbProducts.setRowSelectionInterval(row - 1, row - 1);
    }
  }

  public class DeleteProduct implements ActionListener {
    public void actionPerformed(ActionEvent e) {
      Integer row = w.getSelectedRow();
      if (row == null) return;

      w.deleteRow(row);

      int rowCount = w.tbProducts.getRowCount();

      if (row < rowCount) {
        w.tbProducts.setRowSelectionInterval(row, row);
      } else if (row - 1 >= 0) {
        w.tbProducts.setRowSelectionInterval(row - 1, row - 1);
      }
    }
  }

  public class SelectRow implements ListSelectionListener {
    public void valueChanged(ListSelectionEvent e) {
      updateTotal();
    }
  }

  public class AmountChanged implements ChangeListener {
    public void stateChanged(ChangeEvent e) {
      updateTotal();
    }
  }
}
