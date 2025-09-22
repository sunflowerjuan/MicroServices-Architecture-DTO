import axios from 'axios';

export class CustomerService {
    baseUrl = "http://localhost:9092/customers";
    
    getAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    saveCustomer(value) {
        return axios.post(this.baseUrl, value).then(res => res.data);
    }
    deleteCustomer(id) {
    return axios.delete(`${this.baseUrl}/${id}`).then((res) => res.data);
  }
}
