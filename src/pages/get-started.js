// import { useEffect, useState } from 'react';

// export default function BlogPosts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetching the data from 'data.json' located in the 'public' directory
//     fetch('/data.json')
//       .then(response => response.json())
//       .then(data => {
//         setPosts(data);  // Assuming the data is an array directly
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   // Handling the case where data is not yet loaded
//   if (!posts || posts.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Latest Blog Posts</h1>
//       {posts.map(post => (
//         <div key={post.id} className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-4">
//           <h2 className="text-xl font-bold" >{post.title}</h2>
//           <p>{post.description}</p>
//           <div className="text-sm opacity-75">
//             Written by {post.author} on {post.date}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!posts || posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Latest Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold">
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
          <div className="text-sm opacity-75">
            Written by {post.author} on {post.date}
          </div>
        </div>
      ))}
    </div>
  );
}

