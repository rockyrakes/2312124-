export async function fetchNotifications() {
  return {
    totalPages: 3,
    notifications: [
      {
        id: 1,
        title: "Placement Drive",
        message: "Company is coming.",
        type: "Placement",
        priority: 10,
        read: false,
        createdAt: "2026-07-02"
      },
      {
        id: 2,
        title: "Semester Result",
        message: "Semester 6 Result Published.",
        type: "Result",
        priority: 9,
        read: true,
        createdAt: "2026-07-01"
      },
      {
        id: 3,
        title: "Tech Event",
        message: "Hackathon starts tomorrow.",
        type: "Event",
        priority: 8,
        read: false,
        createdAt: "2026-06-30"
      }
    ]
  };
}
