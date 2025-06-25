"use client";
import { Trash2 } from "lucide-react";

export default function Inbox({
  submissions,
  expandedMessage,
  setExpandedMessage,
  fetchMessages,
}) {
  const MESSAGE_TRUNCATE_LENGTH = 60;

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        const token = localStorage.getItem("xtech_token");
        const res = await fetch(
          `https://x-tech-solution-backend.vercel.app/api/messages/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to delete message");

        alert("Message deleted successfully");
        fetchMessages();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  if (submissions.length === 0)
    return <p className="text-gray-500">No submissions yet.</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Contact Form Submissions</h2>
      {submissions.map((submission) => {
        const isExpanded = expandedMessage === submission._id;
        const shouldTruncate =
          submission.message.length > MESSAGE_TRUNCATE_LENGTH && !isExpanded;

        return (
          <div
            key={submission._id}
            className="p-4 border border-gray-300 rounded space-y-2 bg-white relative"
          >
            <button
              onClick={() => handleDelete(submission._id)}
              className="absolute top-0 right-0 p-1 text-white rounded-bl-lg bg-red-500 hover:bg-red-700 cursor-pointer"
            >
              <Trash2 size={20} />
            </button>

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
                onClick={() => setExpandedMessage(submission._id)}
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
