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
const addPost = async (values) => {
  const post = await api.post('/post/store', values);
  if (post.ok && post.data) {
    // console.log(post.data);
    // console.log(Object.values(post));
    // console.log(Object.values(post.value));
    const postData = {
      status: post.data.status,
      message: post.data.message,
      addNew: 'addData',
    };
    // console.log(postData);
    // return postData;
    return post.data.status;
    // return post;
  }
  return 'An error occurred';
};

async function updatePost(values) {
  console.log(`API = ${values}`);
}

async function deletePost(values) {
  console.log(`Edit Post = ${values}`);
}

async function getPost(values) {
  console.log(`Get Post = ${values}`);
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
