package ram.gm.Turf_Booking_System.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ram.gm.Turf_Booking_System.Entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

	List<Booking> findByCustomerCid(long cid);
	
}
