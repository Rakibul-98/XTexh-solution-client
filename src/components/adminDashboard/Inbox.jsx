export default function Inbox({
  submissions,
  expandedMessage,
  setExpandedMessage,
}) {
  const MESSAGE_TRUNCATE_LENGTH = 60;

  if (submissions.length === 0)
    return <p className="text-gray-500">No submissions yet.</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
      {submissions.map((submission, i) => {
        const isExpanded = expandedMessage === submission.id;
        const shouldTruncate =
          submission.message.length > MESSAGE_TRUNCATE_LENGTH && !isExpanded;

        return (
          <div
            key={i}
            className="p-4 border border-gray-300 rounded space-y-2 bg-white"
          >
            <p>
              <strong>Name:</strong> {submission.name}
            </p>
            <p>
              <strong>Email:</strong> {submission.email}
            </p>
            <p className={shouldTruncate ? "truncate" : ""}>
              <strong>Message:</strong> {submission.message}
            </p>

            {shouldTruncate && (
              <button
                onClick={() => setExpandedMessage(submission.id)}
                className="text-sm text-blue-600 hover:underline"
              >
                Show Details
              </button>
            )}

            {isExpanded && (
              <button
                onClick={() => setExpandedMessage(null)}
                className="text-sm text-blue-600 hover:underline"
              >
                Hide Details
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
