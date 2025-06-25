export default function ServicesForm({
  fields,
  register,
  handleSubmit,
  onSubmit,
}) {
  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-2">
            <input
              {...register(`services.${index}.title`, { required: true })}
              placeholder={`Service ${index + 1} Title`}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
            />
            <input
              {...register(`services.${index}.description`, { required: true })}
              placeholder={`Service ${index + 1} Description`}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
            />
            <input
              {...register(`services.${index}.bgImage`, { required: false })}
              placeholder={`Service ${index + 1} Image URL`}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Save Services
        </button>
      </form>
    </div>
  );
}
