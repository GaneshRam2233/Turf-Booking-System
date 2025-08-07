package ram.gm.Turf_Booking_System.dto;

import java.time.LocalDate;

public class BookingDTO { // DTO -> Data Transfer Object
	
	private LocalDate bookeddate;
	private String bookedtime;
	private long groundId;
	private long customerId;
	
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
	public long getGroundId() {
		return groundId;
	}
	public void setGroundId(long groundId) {
		this.groundId = groundId;
	}
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	
}
