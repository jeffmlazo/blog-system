import { create } from "apisauce";
const baseUrl = "http://localhost/api";

// TODO: Need to refactor code here due to url error is always appearing
export async function addPost(values) {
  // API base Url
  const api = create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
  });

  const post = await api.post("/post/store", values);
  if (post.ok && post.data) {
    return post.data;
  }
}

// export function generateEmployeeId() {
//   if (localStorage.getItem(KEYS.employeeId) == null)
//     localStorage.setItem(KEYS.employeeId, "0");
//   var id = parseInt(localStorage.getItem(KEYS.employeeId));
//   localStorage.setItem(KEYS.employeeId, (++id).toString());
//   return id;
// }
