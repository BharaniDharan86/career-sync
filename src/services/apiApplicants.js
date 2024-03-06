import { API } from "../utils/constants";
export default async function getApplicants(jobId, token) {
  const response = await fetch(`${API}/api/v1/apply/${jobId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data.applicants;
}
