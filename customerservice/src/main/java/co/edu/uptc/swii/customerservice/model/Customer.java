package co.edu.uptc.swii.customerservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String address;
    private String firstName;
    private String lastName;
    private String location;

    // constructores
    public Customer() {}

    public Customer(Integer id, String address, String firstName, String lastName, String location) {
        this.id = id;
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }

    // getters y setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
}
