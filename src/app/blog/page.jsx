export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {posts.slice(0, 100).map((p) => (
        <li
          key={p.id}
          className="group backdrop-blur-md rounded-xl p-2 bg-white shadow shadow-black rounded-lg hover:border-yellow-400/50 transition-all duration-300"
        >
          <h2 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-yellow-400 transition">
            {p.title}
          </h2>

          <p className="text-sm text-gray-400 line-clamp-4">
            {p.body}
          </p>

          <span className="inline-block mt-4 text-sm text-yellow-400 opacity-0 group-hover:opacity-100 transition">
            Read more →
          </span>
        </li>
      ))}
    </ul>
  )
}
