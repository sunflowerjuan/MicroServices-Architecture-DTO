package co.edu.uptc.swii.customerservice.service;

import co.edu.uptc.swii.customerservice.model.Customer;
import co.edu.uptc.swii.customerservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    public Customer saveCustomer(Customer c) {
        return repository.save(c);
    }

    public List<Customer> getAll() {
        return repository.findAll();
    }

    public Optional<Customer> getById(Integer id) {
        return repository.findById(id);
    }

    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
