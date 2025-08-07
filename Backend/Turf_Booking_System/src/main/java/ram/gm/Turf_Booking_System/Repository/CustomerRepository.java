package ram.gm.Turf_Booking_System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ram.gm.Turf_Booking_System.Entity.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Long> {

	Customer findByCemail(String cemail);
	
//	@Query(value = "select c.wallet from customer c where cid = ?1")
//	double fetchWalletByCid(long cid); 
}
