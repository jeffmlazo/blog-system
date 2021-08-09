import { create } from 'apisauce';
// eslint-disable-next-line no-undef
const apiBaseURL = `${baseUrl}/api`;

// TODO: Need to refactor code here due to url error is always appearing
export async function addPost(values) {
  // API base Url
  const api = create({
    baseURL: apiBaseURL,
    headers: { 'Content-Type': 'application/json' },
  });

  const post = await api.post('/post/store', values);
  if (post.ok && post.data) {
    const postData = {
      status: post.data.status,
      message: post.data.message,
      addNew: 'addData',
    };
    return postData;
  }
  return 'An error occurred';
}

export default addPost;
// export { addPost as  };

// export function generateEmployeeId() {
//   if (localStorage.getItem(KEYS.employeeId) == null)
//     localStorage.setItem(KEYS.employeeId, "0");
//   var id = parseInt(localStorage.getItem(KEYS.employeeId));
//   localStorage.setItem(KEYS.employeeId, (++id).toString());
//   return id;
// }
