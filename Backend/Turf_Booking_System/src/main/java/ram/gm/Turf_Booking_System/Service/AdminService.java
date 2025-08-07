package ram.gm.Turf_Booking_System.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ram.gm.Turf_Booking_System.Entity.Admin;
import ram.gm.Turf_Booking_System.Repository.AdminRepository;
import ram.gm.Turf_Booking_System.dto.AdminResponseDTO;

@Service
public class AdminService {
	
	@Autowired
	AdminRepository adminRepository;
	
	public Admin createAdmin(Admin admin) {
		Admin a = adminRepository.findByEmail(admin.getEmail());
		if(a!=null) {
			return null;
		}
		return adminRepository.save(admin);
	}
	
	public String fetchByEmail(String email,String password) {
		Admin a = adminRepository.findByEmail(email);
		if(a!=null) {
			if(password.equals(a.getPassword())) {
				return "Login Successfull";
			}
			return "Wrong Password";
		}
		return "Admin not Found";
	}
	
	public List<AdminResponseDTO> fetchAllAdmin(){
		List<Admin> la = adminRepository.findAll();
		List<AdminResponseDTO> list = new ArrayList<AdminResponseDTO>();
		for(Admin a : la) {
			AdminResponseDTO dto = new AdminResponseDTO();
			dto.setAid(a.getAid());
			dto.setFirstname(a.getFirstname());
			dto.setLastname(a.getLastname());
			dto.setEmail(a.getEmail());
			dto.setContact(a.getContact());
			
			list.add(dto);
		}
		
		return list;
	}
}
