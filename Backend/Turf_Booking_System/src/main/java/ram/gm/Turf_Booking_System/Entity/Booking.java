package ram.gm.Turf_Booking_System.Entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bid;
	@JsonFormat(pattern = "yyyy-MM-dd")  // MM -> defines Month, mm defines minutes
	private LocalDate bookeddate;
	private String bookedtime;
	private String status;
	private String payment;
	
	@ManyToOne
	@JoinColumn
	@JsonBackReference
	private Customer customer;
	
	@ManyToOne
	@JoinColumn
	@JsonBackReference("ground-booking")
	private Ground ground;

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
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Ground getGround() {
		return ground;
	}
	public void setGround(Ground ground) {
		this.ground = ground;
	}
	
}
