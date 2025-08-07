package ram.gm.Turf_Booking_System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ram.gm.Turf_Booking_System.Entity.Ground;

public interface GroundRepository extends JpaRepository<Ground, Long> {
	
}
