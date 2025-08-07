package ram.gm.Turf_Booking_System.dto;

public class GroundResponseDTO {
	private long gId;
	private String name;
	private String description;
	private double height;
	private double length;
	private double width;
	private double price;
	
	private String groundImage;

	public long getgId() {
		return gId;
	}
	public void setgId(long gId) {
		this.gId = gId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	public double getLength() {
		return length;
	}
	public void setLength(double length) {
		this.length = length;
	}
	public double getWidth() {
		return width;
	}
	public void setWidth(double width) {
		this.width = width;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getGroundImage() {
		return groundImage;
	}
	public void setGroundImage(String groundImage) {
		this.groundImage = groundImage;
	}
	
}
