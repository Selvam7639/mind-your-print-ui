import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1/organization";

class OrganizationService {
  saveOrganization(organization) {
    return axios.post(BASE_URL, organization);
  }

  getAllOrganizations() {
    return axios.get(BASE_URL + "/organizations");
  }

  deleteOrganization(orgId) {
    return axios.delete(BASE_URL + "/" + orgId);
  }
}

export default new OrganizationService();
