import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      data {
        id
        title
        body
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">GraphQL Posts</h2>

        {loading && <p className="text-blue-600 text-lg font-medium">Loading...</p>}
        {error && <p className="text-red-600 font-semibold">{error.message}</p>}

        <ul className="mt-4 space-y-4">
          {data &&
            data.posts.data.map((post) => (
              <li
                key={post.id}
                className="bg-gray-200 p-4 rounded-md text-gray-800 font-medium transition transform hover:scale-105 hover:bg-gray-300 text-left"
              >
                <h3 className="text-lg font-semibold">{post.id}. {post.title}</h3>
                <p className="text-gray-700 mt-2">{post.body}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
