package ram.gm.Turf_Booking_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ram.gm.Turf_Booking_System.Entity.Customer;
import ram.gm.Turf_Booking_System.Service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping(value = "/csignup")
	public Customer createCustomer(@RequestBody Customer customer) {
		return customerService.createCustomer(customer);
	}
	
	@GetMapping("/clogin")
	public String fetchByEmail(@RequestParam String email,@RequestParam String password) {
		return customerService.fetchByEmail(email, password);
	}
//	@PostMapping("/clogin")
//	public String fetchByEmail(@RequestParam String email,@RequestParam String password) {
//		return customerService.fetchByEmail(email, password);
//	}
	
	@GetMapping("/getWallet/{cid}")
	public double fetchWalletById(@PathVariable long cid) {
		return customerService.fetchWalletById(cid);
	}
	
	@GetMapping("/addToWallet/{cid}")
	public boolean updateWalletById(@PathVariable long cid,@RequestParam double wallet) {
		System.out.println("cid :"+cid + "\n"+"wallet:"+wallet);
		return customerService.updateWalletById(cid, wallet);
	}
	
	@GetMapping("/getAllCustomers")
	public List<Customer> fetchAllCustomer(){
		return customerService.fetchAllCustomer();
	}
}
