package ram.gm.Turf_Booking_System.Service;

import java.io.File;
import java.io.IOException;
//import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
//import java.nio.file.StandardCopyOption;
import java.util.List;
//import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

//import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ram.gm.Turf_Booking_System.Entity.Ground;
import ram.gm.Turf_Booking_System.Repository.GroundRepository;

@Service
public class GroundService {

	@Autowired
	GroundRepository groundRepository;

	private static final String STORAGE_DIRECTORY_1 = "Turf_Grounds"; 

//	private static final String STORAGE_DIRECTORY_2 = "C:\\Users\\ganes\\Turf_Grounds";

	// method 1 -> using chatGPT
	public boolean createGround(String groundjson, MultipartFile image) {
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			Ground ground = objectMapper.readValue(groundjson, Ground.class); // it reads and converts JSON string to java object

			String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
			Path filePath = Paths.get(STORAGE_DIRECTORY_1 + File.separator + fileName); // File.separator will give "\\" for windows and "/" for Linux 

			Files.createDirectories(filePath.getParent()); // it generates the existing parent folder path of filePath
			Files.write(filePath, image.getBytes());

			ground.setGroundimagepath(filePath.toString());

			Ground g = groundRepository.save(ground); // returns saved ground
			
			if(g!=null) {
				return true; // saved
			}
			return false; // error

		} catch (Exception e) {
			e.printStackTrace();
			return false; // exception
		}
	}

	// method 2 -> YouTube
//	public void createGroundYT(String groundjson, MultipartFile image) throws IOException {
//		
//		ObjectMapper objectMapper = new ObjectMapper();
//		Ground ground = objectMapper.readValue(groundjson, Ground.class); // this statement throws an exception
//
//		if (image == null) {
//			throw new NullPointerException("Image is Null");
//		}
//		
//		File imageFile = new File(STORAGE_DIRECTORY_2 + File.separator + image.getOriginalFilename());
//		
//		if (!Objects.equals(imageFile.getParent(), STORAGE_DIRECTORY_2)) {
//			throw new SecurityException("Unsupported filename!");
//		}
//		
//		Files.copy(image.getInputStream(), imageFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
//
//		// to save path in database along with ground details
//		Path imagePath = imageFile.toPath();
//		ground.setGroundimagepath(imagePath.toString());
//
//		groundRepository.save(ground);
//
//	}
	

	public Ground fetchByGid(long gid) {
		
		Ground ground = groundRepository.findById(gid).orElse(null);
		if(ground!=null) {
//			String imagePath = ground.getGroundimagepath();
			 ground.setGroundimagepath("http://localhost:8080/groundImage/"+ ground.getGid());
			 return ground;
		}
		return null;
	}
	public Resource getGroundImage(long gid) throws IOException {
		Ground g = groundRepository.findById(gid).orElse(null);
		String imagePathstr = g.getGroundimagepath();
		Path imagePath = Paths.get(imagePathstr);
		if(!Files.exists(imagePath)) {
			return null;
		}
		Resource resource = new UrlResource(imagePath.toUri());
		return resource;
	}

	public List<Ground> fetchAllGround() {
		
		List<Ground> lg =  groundRepository.findAll();
		
		for(Ground g: lg){
			g.setGroundimagepath("http://localhost:8080/groundImage/"+g.getGid());
		}
		
		return lg;
	}
	
	public void deleteGroundById(long gid) {
		groundRepository.deleteById(gid);
	}
}
