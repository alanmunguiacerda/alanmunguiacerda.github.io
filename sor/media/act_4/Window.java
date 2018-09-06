import javax.swing.JFrame;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.JPanel;
import javax.swing.BorderFactory;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.BorderLayout;
import java.awt.Insets;
import java.awt.Dimension;
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
  JTable tbProducts;
  JSpinner spnAmount;
  JButton btSell;
  JButton btAdd;
  JButton btDelete;
  JLabel lbTotal;

  public Window() {
    super("Sell stuff");

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

    pnSellTab = new JPanel();
    GridBagLayout gbPanelSell = new GridBagLayout();
    GridBagConstraints gbcPanelSell = new GridBagConstraints();
    pnSellTab.setLayout(gbPanelSell);

    Object[][] dataProducts = new Object[][] {};
    String[] colsProducts = {"Name", "Price"};
    tbProducts = new JTable(new DefaultTableModel(dataProducts, colsProducts));
    tbProducts.setRowSelectionAllowed(true);
    tbProducts.putClientProperty("terminateEditOnFocusLost", true);
    ListSelectionModel tbSelectionModel = tbProducts.getSelectionModel();
    tbSelectionModel.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

    scSellTab = new JScrollPane(tbProducts);
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

    lbTotal = new JLabel("Total: $0");
    gbcPanelSell.gridx = 8;
    gbcPanelSell.gridy = 5;
    gbcPanelSell.gridwidth = 1;
    gbcPanelSell.gridheight = 1;
    gbcPanelSell.fill = GridBagConstraints.BOTH;
    gbcPanelSell.weightx = 1;
    gbcPanelSell.weighty = 0;
    gbcPanelSell.anchor = GridBagConstraints.CENTER;
    gbPanelSell.setConstraints(lbTotal, gbcPanelSell);
    pnSellTab.add(lbTotal);

    pnMain.add(pnSellTab, BorderLayout.CENTER);

    setDefaultCloseOperation(EXIT_ON_CLOSE);

    setContentPane(pnMain);
    pack();
    setVisible(true);
  }

  public void addRow() {
    DefaultTableModel model = (DefaultTableModel)tbProducts.getModel();
    model.addRow(new Object[]{"-- Name --", 0});
  }

  public void deleteRow(Integer row) {
    DefaultTableModel model = (DefaultTableModel)tbProducts.getModel();
    model.removeRow(row);
  }

  public void setTotal(Integer total) {
    lbTotal.setText("Total: $" + total);
  }

  public Integer getSelectedRow() {
    int[] rows = tbProducts.getSelectedRows();
    return rows.length > 0 ? (Integer)rows[0] : null;
  }
}
