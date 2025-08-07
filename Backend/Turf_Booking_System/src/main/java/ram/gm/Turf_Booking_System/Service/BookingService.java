package ram.gm.Turf_Booking_System.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ram.gm.Turf_Booking_System.Entity.Booking;
import ram.gm.Turf_Booking_System.Entity.Customer;
import ram.gm.Turf_Booking_System.Entity.Ground;
import ram.gm.Turf_Booking_System.Repository.BookingRepository;
import ram.gm.Turf_Booking_System.Repository.CustomerRepository;
import ram.gm.Turf_Booking_System.Repository.GroundRepository;
import ram.gm.Turf_Booking_System.dto.BookingDTO;
import ram.gm.Turf_Booking_System.dto.BookingResponseDTO;
import ram.gm.Turf_Booking_System.dto.CustomerResponseDTO;
import ram.gm.Turf_Booking_System.dto.GroundResponseDTO;

@Service
public class BookingService {

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private GroundRepository groundRepository;
	
	@Autowired
	private CustomerRepository customerRepository;

	public String createBooking(BookingDTO bookingDTO) {

		long gid = bookingDTO.getGroundId();
		Ground ground = groundRepository.findById(gid).orElse(null);
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId()).orElse(null);

//		if( customer.getWallet() < ground.getGroundprice()) {
//			return "Wallet Balance is insufficient, Add required Amount!!!";
//		}
		Booking booking = new Booking();
		booking.setBookeddate(bookingDTO.getBookeddate());
		booking.setBookedtime(bookingDTO.getBookedtime());
		booking.setStatus("Pending");
		booking.setPayment("Pending");
		booking.setGround(ground);
		
//		customer.setWallet(customer.getWallet() - ground.getGroundprice());
		booking.setCustomer(customer);

		
		Booking b = bookingRepository.save(booking);
		if (b != null) {
			return "Booked Successfully with ID:" + b.getBid();
		}
		return "Booking Failed";
	}
	
	public String paymentByCustomer(long bid) {
		Booking booking = bookingRepository.findById(bid).orElse(null);
		Customer customer = booking.getCustomer();
		Ground ground = booking.getGround();
		
		if( customer.getWallet() < ground.getGroundprice()) {
			return "Wallet Balance insufficient, Add required Amount!!!";
		}
		
		customer.setWallet(customer.getWallet() - ground.getGroundprice());
		booking.setCustomer(customer);
		
		booking.setPayment("Completed");
		
		bookingRepository.save(booking);
		return "Payment Completed";
	}
	

	public BookingResponseDTO fetchByBid(long bid) {
		Booking booking = bookingRepository.findById(bid).orElse(null);
		if (booking != null) {
			BookingResponseDTO bookingDTO = new BookingResponseDTO();
			bookingDTO.setBid(booking.getBid());
			bookingDTO.setBookeddate(booking.getBookeddate());
			bookingDTO.setBookedtime(booking.getBookedtime());
			bookingDTO.setStatus(booking.getStatus());
			bookingDTO.setPayment(booking.getPayment());

			GroundResponseDTO groundDTO = groundToGroundResponseDTO(booking.getGround());
			bookingDTO.setGround(groundDTO);
			
			if(booking.getCustomer()!=null) {
				CustomerResponseDTO customerDTO = customerToCustomerResponseDTO(booking.getCustomer());
				bookingDTO.setCustomer(customerDTO);
			}

			return bookingDTO;
		}
		return null;
	}

	public List<BookingResponseDTO> fetchAll() {
		List<Booking> lb = bookingRepository.findAll();
		if (lb != null) {
			List<BookingResponseDTO> bookingDTOs = new ArrayList<BookingResponseDTO>();
			for (Booking b : lb) {
				BookingResponseDTO bookingDTO = new BookingResponseDTO();
				bookingDTO.setBid(b.getBid());
				bookingDTO.setBookeddate(b.getBookeddate());
				bookingDTO.setBookedtime(b.getBookedtime());
				bookingDTO.setStatus(b.getStatus());
				bookingDTO.setPayment(b.getPayment());

				GroundResponseDTO groundDTO = groundToGroundResponseDTO(b.getGround());
				bookingDTO.setGround(groundDTO);
				
				if(b.getCustomer()!=null) {
					CustomerResponseDTO customerDTO = customerToCustomerResponseDTO(b.getCustomer());
					bookingDTO.setCustomer(customerDTO);
				}
				
				bookingDTOs.add(bookingDTO);
			}
			return bookingDTOs;
		}
		return null;
	}

	// converting Ground to GroundDTO -> to get ground data(removed by
	// @jsonBackReference by default) and to set image URL;
	public GroundResponseDTO groundToGroundResponseDTO(Ground ground) {
		GroundResponseDTO groundDTO = new GroundResponseDTO();
		groundDTO.setgId(ground.getGid());
		groundDTO.setName(ground.getGroundname());
		groundDTO.setDescription(ground.getGrounddescription());
		groundDTO.setLength(ground.getGroundlength());
		groundDTO.setWidth(ground.getGroundwidth());
		groundDTO.setHeight(ground.getGroundheight());
		groundDTO.setPrice(ground.getGroundprice());

		String imageURL = "http://localhost:8080/groundImage/" + ground.getGid();
		groundDTO.setGroundImage(imageURL);

		return groundDTO;
	}
	
	// converting Customer to CusstomerDTO -> to get Customer data(removed by
	// @jsonBackReference by default) and remove password, wallet and booking;
	public CustomerResponseDTO customerToCustomerResponseDTO(Customer customer) {
		
		CustomerResponseDTO customerDTO = new CustomerResponseDTO();
		
		customerDTO.setCid(customer.getCid());
		customerDTO.setCname(customer.getCname());
		customerDTO.setCemail(customer.getCemail());
		customerDTO.setCaddress(customer.getCaddress());
		customerDTO.setCphone(customer.getCphone());
		
		return customerDTO;
	}
	
	public boolean cancelBookingByBid(long bid) {
		Booking booking = bookingRepository.findById(bid).orElse(null);
		if(booking!=null) {
			booking.setStatus("Cancelled");
			bookingRepository.save(booking);
			return true;
		}
		return false;
	}
	
	public boolean verifyBooking(long bid) {
		Booking booking = bookingRepository.findById(bid).orElse(null);
		if(booking!=null) {
			booking.setStatus("Approved");
			bookingRepository.save(booking);
			return true;
		}
		return false;
	}
	
	public List<BookingResponseDTO> fetchAllBookingByCId(long cid){
//		System.out.println("cid : "+cid);
		List<Booking> lb = bookingRepository.findByCustomerCid(cid);
//		System.out.println("fetched Bookings by Cid :"+lb);	
		if (lb != null) {
			List<BookingResponseDTO> bookingDTOs = new ArrayList<BookingResponseDTO>();
			for (Booking b : lb) {
				BookingResponseDTO bookingDTO = new BookingResponseDTO();
				bookingDTO.setBid(b.getBid());
				bookingDTO.setBookeddate(b.getBookeddate());
				bookingDTO.setBookedtime(b.getBookedtime());
				bookingDTO.setStatus(b.getStatus());
				bookingDTO.setPayment(b.getPayment());

				GroundResponseDTO groundDTO = groundToGroundResponseDTO(b.getGround());
				bookingDTO.setGround(groundDTO);
				
				if(b.getCustomer()!=null) {
					CustomerResponseDTO customerDTO = customerToCustomerResponseDTO(b.getCustomer());
					bookingDTO.setCustomer(customerDTO);
				}
				
				bookingDTOs.add(bookingDTO);
			}
			return bookingDTOs;
		}
		return null;
	}
}
