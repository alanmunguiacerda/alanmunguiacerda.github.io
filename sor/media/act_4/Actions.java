import java.util.ArrayList;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import javax.swing.event.ListSelectionListener;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ChangeListener;
import javax.swing.event.ChangeEvent;
import javax.swing.event.TableModelListener;
import javax.swing.event.TableModelEvent;


public class Actions {
  static Window w;
  static CSVManager c;

  public Actions(Window _window, CSVManager _csvManager) {
    w = _window;
    c = _csvManager;

    loadInventory();
    loadSales();

    w.btSell.addActionListener(new SellProduct());
    w.btAdd.addActionListener(new AddProduct());
    w.btDelete.addActionListener(new DeleteProduct());
    w.tbInventoryProducts.getSelectionModel().addListSelectionListener(new SelectRow());
    w.tbInventoryProducts.getModel().addTableModelListener(new TableChange());
    w.spnAmount.addChangeListener(new AmountChanged());
  }

  private void loadInventory() {
    for (String[] item: c.inventory) {
      w.addNewItem(new Object[]{item[0], item[1]});
    }
  }

  private void loadSales() {
    for (String[] item: c.sales) {
      w.addSoldItem(new Object[]{item[0], item[1], item[2], item[3]});
    }
  }

  private void saveInventory() {
    c.saveInventory(w.getInventoryRows());
  }

  private void saveSales() {
    c.saveSales(w.getSalesRows());
  }

  private void updateTotal() {
    Object[] selectedItem = w.getSelectedInventoryItem();

    if (selectedItem == null) {
      w.setTotal(0);
      return;
    }

    Integer amount = w.getAmount();

    w.setTotal(amount * (Integer)selectedItem[1]);
  }

  private class SellProduct implements ActionListener {
    public void actionPerformed(ActionEvent e) {
      Object[] item = w.getSelectedInventoryItem();
      if (item == null) return;

      Integer amount = w.getAmount();
      Integer unitPrice = (Integer)item[1];
      Integer total = amount * unitPrice;
      w.addSoldItem(new Object[]{
        item[0],
        Integer.toString(unitPrice),
        Integer.toString(amount),
        Integer.toString(total)
      });
      w.updateSoldTotal();
      saveSales();
    }
  }

  private class AddProduct implements ActionListener {
    public void actionPerformed(ActionEvent e) {
      w.addNewItem();
      w.selectLastInventoryRow();
    }
  }

  private class DeleteProduct implements ActionListener {
    public void actionPerformed(ActionEvent e) {
      Integer deletedRow = w.deleteSelectedInventoryItem();
      if (deletedRow == null) return;

      w.selectClosestInventoryRow(deletedRow);
    }
  }

  private class SelectRow implements ListSelectionListener {
    public void valueChanged(ListSelectionEvent e) {
      updateTotal();
    }
  }

  private class TableChange implements TableModelListener {
    public void tableChanged(TableModelEvent e) {
      if (e.getType() != TableModelEvent.DELETE) updateTotal();
      saveInventory();
    }
  }

  private class AmountChanged implements ChangeListener {
    public void stateChanged(ChangeEvent e) {
      updateTotal();
    }
  }
}
