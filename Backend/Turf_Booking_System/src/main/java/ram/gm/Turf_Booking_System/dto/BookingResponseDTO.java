package ram.gm.Turf_Booking_System.dto;

import java.time.LocalDate;

public class BookingResponseDTO {
	private long bid;
	private LocalDate bookeddate;
	private String bookedtime;
	private String status;
	private String payment;
	
	private GroundResponseDTO ground;
	private CustomerResponseDTO customer;
	
	public long getBid() {
		return bid;
	}
	public void setBid(long bid) {
		this.bid = bid;
	}
	public LocalDate getBookeddate() {
		return bookeddate;
	}
	public void setBookeddate(LocalDate bookeddate) {
		this.bookeddate = bookeddate;
	}
	public String getBookedtime() {
		return bookedtime;
	}
	public void setBookedtime(String bookedtime) {
		this.bookedtime = bookedtime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	public GroundResponseDTO getGround() {
		return ground;
	}
	public void setGround(GroundResponseDTO ground) {
		this.ground = ground;
	}
	public CustomerResponseDTO getCustomer() {
		return customer;
	}
	public void setCustomer(CustomerResponseDTO customer) {
		this.customer = customer;
	}
	
}
