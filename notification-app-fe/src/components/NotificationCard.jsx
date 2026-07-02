import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h5" fontWeight="bold">
            {notification.title}
          </Typography>

          <Chip
            label={notification.type}
            color="primary"
            size="small"
          />
        </Stack>

        <Typography variant="body1" mb={2}>
          {notification.message}
        </Typography>

        <Typography variant="body2">
          <strong>Priority:</strong> {notification.priority}
        </Typography>

        <Typography variant="body2">
          <strong>Date:</strong>{" "}
          {new Date(notification.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </Typography>

        <Typography
          variant="body2"
          color={notification.read ? "text.secondary" : "success.main"}
        >
          <strong>Status:</strong>{" "}
          {notification.read ? "Read" : "Unread"}
        </Typography>
      </CardContent>
    </Card>
  );
}
