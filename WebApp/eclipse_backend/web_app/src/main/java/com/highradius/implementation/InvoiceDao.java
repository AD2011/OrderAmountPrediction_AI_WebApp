package com.highradius.implementation;
import java.util.List;
import com.highradius.model.Invoice;

public interface InvoiceDao {
    static boolean addInvoice(Invoice invoice) {
		return false;
	}
     List<Invoice> getAllInvoices();


}
