package com.highradius.implementation;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.highradius.model.Invoice;
import com.highradius.connection.DatabaseConnection;

public class InvoiceDaoImpl implements InvoiceDao {
    public boolean addInvoice(Invoice invoice) {
        Connection connection = null;
        PreparedStatement statement = null;

        try {
            
            connection = DatabaseConnection.getConnection();

           
            String sql = "INSERT INTO h2h_oap (sl_no, customer_order_id, sales_org, distribution_channel, " +
                    "company_code, order_creation_date, order_currency, customer_number, amount_in_usd, order_amount) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            statement = connection.prepareStatement(sql);

            
            statement.setInt(1, invoice.getSlNo());
            statement.setInt(2, invoice.getCustomerOrderId());
            statement.setInt(3, invoice.getSalesOrg());
            statement.setString(4, invoice.getDistributionChannel());
            statement.setInt(5, invoice.getCompanyCode());
            statement.setString(6, invoice.getOrderCreationDate());
            statement.setString(7, invoice.getOrderCurrency());
            statement.setInt(8, invoice.getCustomerNumber());
            statement.setDouble(9, invoice.getAmountInUSD());
            statement.setDouble(10, invoice.getOrderAmount());

           
            int rowsInserted = statement.executeUpdate();

           
            if(rowsInserted > 0) {
            	return true;
            }
            else {
            	return false;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } 
        

        return false;
    }

    public List<Invoice> getAllInvoices() {
        List<Invoice> invoices = new ArrayList<>();
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet resultSet = null;

        try {
           
            connection = DatabaseConnection.getConnection();

          
            String sql = "SELECT * FROM h2h_oap LIMIT 1000";
            statement = connection.prepareStatement(sql);


            resultSet = statement.executeQuery();

          
            while (resultSet.next()) {
               
                int slNo = resultSet.getInt("sl_no");
                int customerOrderId = resultSet.getInt("customer_order_id");
                int salesOrg = resultSet.getInt("sales_org");
                String distributionChannel = resultSet.getString("distribution_channel");
                int companyCode = resultSet.getInt("company_code");
                String orderCreationDate = resultSet.getString("order_creation_date");
                String orderCurrency = resultSet.getString("order_currency");
                int customerNumber = resultSet.getInt("customer_number");
                double amountInUSD = resultSet.getDouble("amount_in_usd");
                double orderAmount = resultSet.getDouble("order_amount");

                
                Invoice invoice = new Invoice(slNo, customerOrderId, salesOrg, distributionChannel, companyCode, orderCreationDate, orderCurrency, customerNumber, amountInUSD, orderAmount);
                invoices.add(invoice);
                
            }
        } catch (SQLException e) {
            e.printStackTrace();
        
        }

        return invoices;
    }
}
