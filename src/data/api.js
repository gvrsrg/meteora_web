const API = "http://127.0.0.1:5000/";

export default async function get_client() {
  let url = API + "service/get_client";

  try {
    let response = await fetch(url, {
      method: "POST",
    });

    if (!response.ok) return false;

    response = await response.json();

    if (response.api_statuscode === 401) {
      return false;
    }

    return response;
  } catch (error) {
    return false;
  }
}
