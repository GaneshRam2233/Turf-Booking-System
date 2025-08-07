package ram.gm.Turf_Booking_System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ram.gm.Turf_Booking_System.Entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

	Admin findByEmail(String email);
}
