package ram.gm.Turf_Booking_System.Controller;

import java.io.IOException;
import java.util.List;

//import java.io.IOException;
//import java.util.logging.Level;
//import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ram.gm.Turf_Booking_System.Entity.Ground;
import ram.gm.Turf_Booking_System.Service.GroundService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class GroundController {
	
	@Autowired
	GroundService groundService;
	
	// method 1
	@PostMapping(value = "/addGround")
	public boolean createGround(@RequestPart("ground") String groundjson,@RequestPart("groundImage") MultipartFile image) {
		return groundService.createGround(groundjson,image);
	}
	
	// method 2
//	private static final Logger log = Logger.getLogger(GroundController.class.getName());
//	
//	@PostMapping("/addGround")
//	public boolean createGroundYT(@RequestPart("ground") String groundjson,@RequestPart("groundImage") MultipartFile image) {
//		try {
//			groundService.createGroundYT(groundjson, image);
//			return true;
//		} catch (IOException e) {
////			e.printStackTrace();
//			log.log(Level.SEVERE, "Exception During Upload",e);
//		}
//		return false;
//	}
	
	@GetMapping("/getGround/{id}")
	public Ground fetchByGid(@PathVariable long id) {
		return groundService.fetchByGid(id);
	}
	@GetMapping("/groundImage/{id}")
	public Resource fetchImageByGid(@PathVariable long id) {
		try {
			return groundService.getGroundImage(id);
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@GetMapping("/getAllGrounds")
	public List<Ground> fetchAllGrounds(){
		return groundService.fetchAllGround();
	}
	
//	@GetMapping("/groundImg")
//	public Resource fetchImage() {
//		
//	}
	
	@DeleteMapping("/deleteGround/{gid}")
	public void deleteGroundById(@PathVariable long gid) {
		groundService.deleteGroundById(gid);
	}
	
}
