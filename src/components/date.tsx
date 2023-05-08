import { Typography } from "@mui/material";
import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <Typography variant="overline">{format(date, "LLLL d, yyyy")}</Typography>
  );
}
