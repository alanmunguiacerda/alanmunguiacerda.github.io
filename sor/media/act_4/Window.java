import java.util.Vector;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.BorderLayout;
import java.awt.Insets;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.JPanel;
import javax.swing.BorderFactory;
import javax.swing.JTabbedPane;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.JSpinner;
import javax.swing.SpinnerNumberModel;
import javax.swing.JTable;
import javax.swing.JScrollPane;
import javax.swing.table.DefaultTableModel;
import javax.swing.ListSelectionModel;

public class Window extends JFrame {
  JPanel pnMain;
  JTabbedPane tbpMain;

  JPanel pnSellTab;
  JScrollPane scSellTab;
  JTable tbInventoryProducts;
  JSpinner spnAmount;
  JButton btSell;
  JButton btAdd;
  JButton btDelete;
  JLabel lbTotalPrice;

  JPanel pnSoldTab;
  JScrollPane scSoldTab;
  JTable tbSoldProducts;
  JLabel lbTotalSold;

  public Window() {
    super("Store Manager");

    try {
      UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
    } catch (ClassNotFoundException e ) {
      // NOOP
    } catch (InstantiationException e ) {
      // NOOP
    }catch (IllegalAccessException e ) {
      // NOOP
    } catch (UnsupportedLookAndFeelException e ) {
      // NOOP
    }


    pnMain = new JPanel();
    BorderLayout gbPanelMain = new BorderLayout();
    pnMain.setLayout(gbPanelMain);
    pnMain.setPreferredSize(new Dimension(640, 480));

    JTabbedPane tabbedPane = new JTabbedPane();

    pnSellTab = new JPanel();
    GridBagLayout gbPanelSell = new GridBagLayout();
    GridBagConstraints gbcPanelSell = new GridBagConstraints();
    pnSellTab.setLayout(gbPanelSell);

    Object[][] inventoryProducts = new Object[][] {};
    String[] inventoryHeaders = {"Name", "Price"};
    tbInventoryProducts = new JTable(new DefaultTableModel(inventoryProducts, inventoryHeaders));
    tbInventoryProducts.setRowSelectionAllowed(true);
    tbInventoryProducts.putClientProperty("terminateEditOnFocusLost", true);
    tbInventoryProducts.getSelectionModel().setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

    scSellTab = new JScrollPane(tbInventoryProducts);
    gbcPanelSell.gridx = 0;
    gbcPanelSell.gridy = 0;
    gbcPanelSell.gridwidth = 9;
    gbcPanelSell.gridheight = 5;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 1;
    gbcPanelSell.anchor = GridBagConstraints.CENTER;
    gbPanelSell.setConstraints(scSellTab, gbcPanelSell);
    pnSellTab.add(scSellTab);

    SpinnerNumberModel amountModel = new SpinnerNumberModel(1, 0, 9999, 1);
    spnAmount = new JSpinner(amountModel);
    gbcPanelSell.gridx = 0;
    gbcPanelSell.gridy = 5;
    gbcPanelSell.gridwidth = 1;
    gbcPanelSell.gridheight = 1;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 0;
    gbcPanelSell.anchor = GridBagConstraints.CENTER;
    gbPanelSell.setConstraints(spnAmount, gbcPanelSell);
    pnSellTab.add(spnAmount);

    btSell = new JButton("Sell");
    gbcPanelSell.gridx = 2;
    gbcPanelSell.gridy = 5;
    gbcPanelSell.gridwidth = 1;
    gbcPanelSell.gridheight = 1;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 0;
    gbcPanelSell.anchor = GridBagConstraints.SOUTH;
    gbPanelSell.setConstraints(btSell, gbcPanelSell);
    pnSellTab.add(btSell);

    btAdd = new JButton("Add");
    gbcPanelSell.gridx = 4;
    gbcPanelSell.gridy = 5;
    gbcPanelSell.gridwidth = 1;
    gbcPanelSell.gridheight = 1;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 0;
    gbcPanelSell.anchor = GridBagConstraints.CENTER;
    gbPanelSell.setConstraints(btAdd, gbcPanelSell);
    pnSellTab.add(btAdd);

    btDelete = new JButton("Delete");
    gbcPanelSell.gridx = 6;
    gbcPanelSell.gridy = 5;
    gbcPanelSell.gridwidth = 1;
    gbcPanelSell.gridheight = 1;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 0;
    gbcPanelSell.anchor = GridBagConstraints.CENTER;
    gbPanelSell.setConstraints(btDelete, gbcPanelSell);
    pnSellTab.add(btDelete);

    lbTotalPrice = new JLabel("Total: $0");
    gbcPanelSell.gridx = 8;
    gbcPanelSell.gridy = 5;
    gbcPanelSell.gridwidth = 1;
    gbcPanelSell.gridheight = 1;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 0;
    gbcPanelSell.anchor = GridBagConstraints.CENTER;
    gbPanelSell.setConstraints(lbTotalPrice, gbcPanelSell);
    pnSellTab.add(lbTotalPrice);

    tabbedPane.addTab("Inventory", pnSellTab);

    // -----------------------------------------------

    pnSoldTab = new JPanel();
    GridBagLayout gbPanelSold = new GridBagLayout();
    GridBagConstraints gbcPanelSold = new GridBagConstraints();
    pnSoldTab.setLayout(gbPanelSold);

    Object[][] soldProducts = new Object[][] {};
    String[] soldHeaders = {"Name", "Unit Price", "Amount", "Total"};
    tbSoldProducts = new JTable(new DefaultTableModel(soldProducts, soldHeaders));
    tbSoldProducts.setRowSelectionAllowed(true);
    tbSoldProducts.getSelectionModel().setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
    tbSoldProducts.setDefaultEditor(Object.class, null);

    scSoldTab = new JScrollPane(tbSoldProducts);
    gbcPanelSold.gridx = 0;
    gbcPanelSold.gridy = 0;
    gbcPanelSold.gridwidth = 9;
    gbcPanelSold.gridheight = 5;
    gbcPanelSold.fill = GridBagConstraints.BOTH;
    gbcPanelSold.weightx = 1;
    gbcPanelSold.weighty = 1;
    gbcPanelSold.anchor = GridBagConstraints.CENTER;
    gbPanelSold.setConstraints(scSoldTab, gbcPanelSold);
    pnSoldTab.add(scSoldTab);

    lbTotalSold = new JLabel("Total Sold: $0");
    gbcPanelSold.gridx = 8;
    gbcPanelSold.gridy = 5;
    gbcPanelSold.gridwidth = 1;
    gbcPanelSold.gridheight = 1;
    gbcPanelSold.fill = GridBagConstraints.BOTH;
    gbcPanelSold.weightx = 1;
    gbcPanelSold.weighty = 0;
    gbcPanelSold.anchor = GridBagConstraints.CENTER;
    gbPanelSold.setConstraints(lbTotalSold, gbcPanelSold);
    pnSoldTab.add(lbTotalSold);

    tabbedPane.addTab("Sold", pnSoldTab);

    pnMain.add(tabbedPane, BorderLayout.CENTER);

    setDefaultCloseOperation(EXIT_ON_CLOSE);

    setContentPane(pnMain);
    pack();
    setVisible(true);
  }

  private void addRow(JTable table, Object[] item) {
    DefaultTableModel model = (DefaultTableModel)table.getModel();
    model.addRow(item);
  }

  public void addNewItem() {
    Object[] item = new Object[]{"-- New Item --", "0"};
    addRow(tbInventoryProducts, item);
  }

  public void addNewItem(Object[] item) {
    addRow(tbInventoryProducts, item);
  }

  public void addSoldItem(Object[] item) {
    addRow(tbSoldProducts, item);
  }

  public void setTotal(Integer total) {
    lbTotalPrice.setText("Total: $" + total);
  }

  private Integer getSelectedRow(JTable table) {
    int[] rows = table.getSelectedRows();
    return rows.length > 0 ? (Integer)rows[0] : null;
  }

  public Integer getSelectedInventoryRow() {
    return getSelectedRow(tbInventoryProducts);
  }

  public Object[] getSelectedInventoryItem() {
    Integer selectedRow = getSelectedInventoryRow();
    if (selectedRow == null) return null;

    String name = (String)tbInventoryProducts.getValueAt(selectedRow, 0);
    String priceStr = (String)tbInventoryProducts.getValueAt(selectedRow, 1);
    Integer price = 0;

    try {
      price = Integer.parseInt(priceStr);
    } catch (Exception ex) {}

    return new Object[]{name, price};
  }

  public Integer getAmount() {
    return (Integer)spnAmount.getValue();
  }

  private void deleteRow(JTable table, Integer row) {
    DefaultTableModel model = (DefaultTableModel)table.getModel();
    model.removeRow(row);
  }

  public Integer deleteSelectedInventoryItem() {
    Integer row = getSelectedInventoryRow();
    if (row == null) return null;

    deleteRow(tbInventoryProducts, row);
    return row;
  }

  private void selectClosestRow(JTable table, Integer row) {
    int rowCount = table.getRowCount();
    if (rowCount > row) {
      table.setRowSelectionInterval(row, row);
    } else if (rowCount > 0) {
      table.setRowSelectionInterval(row - 1, row - 1);
    }
  }

  public void selectClosestInventoryRow(Integer row) {
    selectClosestRow(tbInventoryProducts, row);
  }

  public void selectLastInventoryRow() {
    int rowCount = tbInventoryProducts.getRowCount();
    tbInventoryProducts.setRowSelectionInterval(rowCount - 1, rowCount - 1);
  }

  public void updateSoldTotal() {
    int rowCount = tbSoldProducts.getRowCount();
    Integer total = 0;
    for (int row = 0; row < rowCount; ++row) {
      String subTotalStr = (String)tbSoldProducts.getValueAt(row, 3);
      Integer subTotal = Integer.parseInt(subTotalStr);
      total += subTotal;
    }

    lbTotalSold.setText("Total sold: $" + total);
  }

  private Vector getRows(JTable table) {
    DefaultTableModel model = (DefaultTableModel)table.getModel();
    return model.getDataVector();
  }

  public Vector getInventoryRows() {
    return getRows(tbInventoryProducts);
  }

  public Vector getSalesRows() {
    return getRows(tbSoldProducts);
  }
}
