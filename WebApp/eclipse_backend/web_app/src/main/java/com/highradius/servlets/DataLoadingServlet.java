package com.highradius.servlets;
import com.highradius.implementation.InvoiceDao;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.google.gson.Gson;


@WebServlet("/DataLoadingServlet")
public class DataLoadingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public DataLoadingServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		InvoiceDao Dao=new InvoiceDaoImpl();
		
		List<Invoice> invoicesList = new ArrayList<Invoice>();
		invoicesList=Dao.getAllInvoices();
		
		String errorString="Sorry ! No Customers Found!";
		
		Gson gson=new Gson();
		
		String jsonResponse=gson.toJson(errorString);
		if(invoicesList.size()>0) {
			jsonResponse=gson.toJson(invoicesList);
			
			response.setHeader("Content-Type", "application/json");
			response.getWriter().append(jsonResponse);
		}
		

	    }
	}