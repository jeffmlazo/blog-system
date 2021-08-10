import { create } from 'apisauce';
// eslint-disable-next-line no-undef
const apiBaseURL = `${baseUrl}/api`;

// API base Url
const api = create({
  baseURL: apiBaseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': document.head
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content'),
  },
});

// FIXME: Need to fix some returning issue of data
async function addPost(values) {
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

async function updatePost(values) {
  console.log(`API = ${values}`);
}

async function deletePost(values) {
  console.log('Edit Post');
}

async function getPost(values) {
  console.log('Edit Post');
}

export { addPost, updatePost, deletePost, getPost };
// export { addPost as  };

// export function generateEmployeeId() {
//   if (localStorage.getItem(KEYS.employeeId) == null)
//     localStorage.setItem(KEYS.employeeId, "0");
//   var id = parseInt(localStorage.getItem(KEYS.employeeId));
//   localStorage.setItem(KEYS.employeeId, (++id).toString());
//   return id;
// }
