package ram.gm.Turf_Booking_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ram.gm.Turf_Booking_System.Entity.Admin;
import ram.gm.Turf_Booking_System.Service.AdminService;
import ram.gm.Turf_Booking_System.dto.AdminResponseDTO;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@PostMapping(value = "/asignup")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminService.createAdmin(admin);
	}
	
	@GetMapping("/alogin")
	public String fetchByEmail(@RequestParam String email,@RequestParam String password) {
		return adminService.fetchByEmail(email, password);
	}
	
	@GetMapping("/getAllAdmins")
	public List<AdminResponseDTO> fetchAllAdmin(){
		return adminService.fetchAllAdmin();
	}
}
