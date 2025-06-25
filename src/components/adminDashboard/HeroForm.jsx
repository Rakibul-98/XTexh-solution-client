export default function HeroForm({ register, handleSubmit, onSubmit }) {
  return (
    <div className="bg-white p-6 rounded shadow space-y-4 border border-gray-300">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("hero.title", { required: true })}
          placeholder="Hero Title"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
        />
        <input
          {...register("hero.subtitle", { required: true })}
          placeholder="Hero Subtitle"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
        />
        <input
          {...register("hero.backgroundImage", { required: true })}
          placeholder="Background Image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Save Hero
        </button>
      </form>
    </div>
  );
}
