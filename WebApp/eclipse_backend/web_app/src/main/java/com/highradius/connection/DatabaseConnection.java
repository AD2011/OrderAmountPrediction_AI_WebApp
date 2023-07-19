package com.highradius.connection;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    public static Connection  getConnection() throws SQLException {
        Connection connection = null;

        try {
            String url = "jdbc:mysql://localhost:3306/h2h";
            String username = "root";
            String password = "root";

            Class.forName("com.mysql.cj.jdbc.Driver");

            connection = DriverManager.getConnection(url, username, password);
            
            }
            
            	
            catch (Exception e) {
			
			e.printStackTrace();
			
		}
        return connection;
            
		
	}
	
}