package com.highradius.servlets;

import com.highradius.implementation.InvoiceDao;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private final InvoiceDao invoiceDao;

    public AddServlet() {
        super();
        invoiceDao = new InvoiceDaoImpl();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Set CORS headers to allow cross-origin requests
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");

        // Set the response content type and get the PrintWriter
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        String slNoParam = request.getParameter("sl_no");
        String customerOrderIdParam = request.getParameter("customer_order_id");
        String salesOrgParam = request.getParameter("sales_org");
        String distributionChannel = request.getParameter("distribution_channel");
        String companyCodeParam = request.getParameter("company_code");
        String orderCreationDate = request.getParameter("order_creation_date");
        String orderCurrency = request.getParameter("order_currency");
        String customerNumberParam = request.getParameter("customer_number");
        String amountInUSDParam = request.getParameter("amount_in_usd");
        String orderAmountParam = request.getParameter("order_amount");

        if (slNoParam == null || customerOrderIdParam == null || salesOrgParam == null || companyCodeParam == null || customerNumberParam == null || amountInUSDParam == null || orderAmountParam == null) {
            String jsonResponse = "{\"status\": \"failure\", \"message\": \"Invalid request parameters\"}";
            out.print(jsonResponse);
            out.flush();
            return;
        }

        int slNo = Integer.parseInt(slNoParam);
        int customerOrderId = Integer.parseInt(customerOrderIdParam);
        int salesOrg = Integer.parseInt(salesOrgParam);
        int companyCode = Integer.parseInt(companyCodeParam);
        int customerNumber = Integer.parseInt(customerNumberParam);
        double amountInUSD = Double.parseDouble(amountInUSDParam);
        double orderAmount = Double.parseDouble(orderAmountParam);

        Invoice invoice = new Invoice(slNo, customerOrderId, salesOrg, distributionChannel, companyCode, orderCreationDate, orderCurrency, customerNumber, amountInUSD, orderAmount);

        boolean isAdded = InvoiceDao.addInvoice(invoice);

        String jsonResponse;
        if (isAdded) {
            jsonResponse = "{\"status\": \"success\", \"message\": \"Invoice added successfully\"}";
        } else {
            jsonResponse = "{\"status\": \"failure\", \"message\": \"Failed to add invoice\"}";
        }

        out.print(jsonResponse);
        out.flush();
    }
}