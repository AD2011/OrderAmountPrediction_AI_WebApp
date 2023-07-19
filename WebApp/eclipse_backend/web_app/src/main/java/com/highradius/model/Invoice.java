package com.highradius.model;
public class Invoice {
	private int SlNo;
	private int CustomerOrderId;
	private int SalesOrg;
	private String distributionChannel;
	private int CompanyCode;
	private String orderCreationDate;
    private String orderCurrency;
    private int customerNumber;
    private double amountInUSD;
    private double orderAmount;
  

public Invoice(int SlNo,int CustomerOrderId,int SalesOrg,String distributionChannel,int CompanyCode, String orderCreationDate,String orderCurrency,int customerNumber,double amountInUSD,double orderAmount) {
	this.SlNo=SlNo;
	this.CustomerOrderId=CustomerOrderId;
	this.SalesOrg=SalesOrg;
	this.distributionChannel=distributionChannel;
	this.CompanyCode=CompanyCode;
	this.orderCreationDate=orderCreationDate;
	this.orderCurrency=orderCurrency;
	this.customerNumber=customerNumber;
	this.amountInUSD=amountInUSD;
	this.orderAmount=orderAmount;
		
}

public Invoice() {
	// TODO Auto-generated constructor stub
}

public int getSlNo() {
	return SlNo;
}
public void setSlNo(int SlNo) {
	this.SlNo=SlNo;
}
public int getCustomerOrderId() {
	return CustomerOrderId;
}
public void setCustomerOrderId(int CustomerOrderId) {
	this.CustomerOrderId=CustomerOrderId;
}
public int getSalesOrg() {
    return SalesOrg;
}

public void setSalesOrg(int SalesOrg) {
    this.SalesOrg = SalesOrg;
}

public String getDistributionChannel() {
    return distributionChannel;
}

public void setDistributionChannel(String distributionChannel) {
    this.distributionChannel = distributionChannel;
}

public int getCompanyCode() {
    return CompanyCode;
}

public void setCompanyCode(int CompanyCode) {
    this.CompanyCode = CompanyCode;
}

public String getOrderCreationDate() {
    return orderCreationDate;
}

public void setOrderCreationDate(String orderCreationDate) {
    this.orderCreationDate = orderCreationDate;
}

public String getOrderCurrency() {
    return orderCurrency;
}

public void setOrderCurrency(String orderCurrency) {
    this.orderCurrency = orderCurrency;
}

public int getCustomerNumber() {
    return customerNumber;
}

public void setCustomerNumber(int customerNumber) {
    this.customerNumber = customerNumber;
}

public double getAmountInUSD() {
    return amountInUSD;
}

public void setAmountInUSD(double amountInUSD) {
    this.amountInUSD = amountInUSD;
}

public double getOrderAmount() {
    return orderAmount;
}

public void setOrderAmount(double orderAmount) {
    this.orderAmount = orderAmount;
}

}