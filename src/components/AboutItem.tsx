import React from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";
import Date from "fishwrapper/components/date";

export default function AboutItem({
  title,
  date,
  text,
  finalItem = false,
}: {
  title: string;
  date: string;
  text: string;
  finalItem?: boolean;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Date dateString={date} />
      </TimelineOppositeContent>
      {finalItem ? (
        <TimelineDot />
      ) : (
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      )}
      <TimelineContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
