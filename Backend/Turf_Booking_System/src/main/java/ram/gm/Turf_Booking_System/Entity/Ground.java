package ram.gm.Turf_Booking_System.Entity;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Ground {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long gid;
	private String groundname;
	private String grounddescription;
	private double groundwidth;
	private double groundlength;
	private double groundheight;
	private double groundprice;
	
	private String groundimagepath; // store imageName and imagePath separately for easy access 
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "ground")
	@JsonManagedReference("ground-booking")
	private Set<Booking> Booking;

	public long getGid() {
		return gid;
	}
	public void setGid(long gid) {
		this.gid = gid;
	}
	public String getGroundname() {
		return groundname;
	}
	public void setGroundname(String groundname) {
		this.groundname = groundname;
	}
	public String getGrounddescription() {
		return grounddescription;
	}
	public void setGrounddescription(String grounddescription) {
		this.grounddescription = grounddescription;
	}
	public double getGroundwidth() {
		return groundwidth;
	}
	public void setGroundwidth(double groundwidth) {
		this.groundwidth = groundwidth;
	}
	public double getGroundlength() {
		return groundlength;
	}
	public void setGroundlength(double groundlength) {
		this.groundlength = groundlength;
	}
	public double getGroundheight() {
		return groundheight;
	}
	public void setGroundheight(double groundheight) {
		this.groundheight = groundheight;
	}
	public double getGroundprice() {
		return groundprice;
	}
	public void setGroundprice(double groundprice) {
		this.groundprice = groundprice;
	}
	public String getGroundimagepath() {
		return groundimagepath;
	}
	public void setGroundimagepath(String groundimagepath) {
		this.groundimagepath = groundimagepath;
	}
	public Set<Booking> getBooking() {
		return Booking;
	}
	public void setBooking(Set<Booking> booking) {
		Booking = booking;
	}
	
}
