
"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { milestones } from "@/utils/data";

export default function TimelineComp() {
  return (
    <Timeline>
      {milestones.map((milestone) => (
        <Timeline.Item key={milestone.id}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className="text-slate-100">{milestone.date}</Timeline.Time>
            <Timeline.Title className="text-slate-200">{milestone.title}</Timeline.Title>
            <Timeline.Body className="text-slate-100">{milestone.description}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

