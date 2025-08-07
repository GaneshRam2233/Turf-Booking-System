package ram.gm.Turf_Booking_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ram.gm.Turf_Booking_System.Service.BookingService;
import ram.gm.Turf_Booking_System.dto.BookingDTO;
import ram.gm.Turf_Booking_System.dto.BookingResponseDTO;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@PostMapping(value = "/createBooking")
	public String createBooking(@RequestBody BookingDTO bookingDTO) {
		return bookingService.createBooking(bookingDTO);
	}
	
	@GetMapping("/getBookingById/{bid}")
	public BookingResponseDTO fetchByBid(@PathVariable long bid) {
		return bookingService.fetchByBid(bid);
	}
	
	@GetMapping("/getAllBookings")
	public List<BookingResponseDTO> fetchAll(){
		return bookingService.fetchAll();
	}
	
	@GetMapping("/cancelBooking/{bid}")
	public boolean cancelBookingByBid(@PathVariable long bid) {
		return bookingService.cancelBookingByBid(bid);
	}
	
	@GetMapping("/verifyBooking/{bid}")
	public boolean verifyBooking(@PathVariable long bid) {
		return bookingService.verifyBooking(bid);
	}
	
	@GetMapping("/getBookingsByCid/{cid}")
	public List<BookingResponseDTO> fetchAllBookingByCId(@PathVariable long cid){
		return bookingService.fetchAllBookingByCId(cid);
	}
	
	@GetMapping("/completePayment/{bid}")
	public String paymentByCustomer(@PathVariable long bid) {
		return bookingService.paymentByCustomer(bid);
	}
	
}
