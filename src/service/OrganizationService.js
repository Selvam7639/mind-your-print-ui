import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1/organization";

class OrganizationService {
  saveOrganization(organization) {
    console.log(organization);
    return axios.post(BASE_URL, organization);
  }
}

export default new OrganizationService();
