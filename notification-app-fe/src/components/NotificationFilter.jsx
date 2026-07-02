import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export function NotificationFilter({ value, onChange }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      color="primary"
    >
      <ToggleButton value="All">All</ToggleButton>
      <ToggleButton value="Placement">Placement</ToggleButton>
      <ToggleButton value="Result">Result</ToggleButton>
      <ToggleButton value="Event">Event</ToggleButton>
    </ToggleButtonGroup>
  );
}
