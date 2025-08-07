package ram.gm.Turf_Booking_System.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ram.gm.Turf_Booking_System.Entity.Customer;
import ram.gm.Turf_Booking_System.Repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository customerRepository;
	
	public Customer createCustomer(Customer customer) {
		Customer c = customerRepository.findByCemail(customer.getCemail());
		if(c!=null) {
			return null;
		}
		return customerRepository.save(customer);
	}
	
	public String fetchByEmail(String cemail,String password) {
		Customer c = customerRepository.findByCemail(cemail);
		if(c!=null) {
			if(password.equals(c.getCpassword())) {
				return "Login Successfull"+"&"+c.getCid();
			}
			return "Wrong password";
		}
		return "Customer not found";
	}
	
	public double fetchWalletById(long cid) {
		Customer c = customerRepository.findById(cid).orElse(null);
		if(c!=null) {
			return c.getWallet();
		}
		return 0;
//		return customerRepository.fetchWalletByCid(cid);
	}
	
	public boolean updateWalletById(long cid,double wallet) {
		Customer c = customerRepository.findById(cid).orElse(null);
		System.out.println(c);
		if(c!=null) {
//			System.out.println("c.getWallet:"+c.getWallet());
//			System.out.println("wallet:"+wallet);
			c.setWallet(c.getWallet() + wallet);
//			System.out.println("c.getWallet:"+c.getWallet());
			customerRepository.save(c);
			return true;
		}
		return false;
	}
	
	public List<Customer> fetchAllCustomer(){
		return customerRepository.findAll();
	}
}
