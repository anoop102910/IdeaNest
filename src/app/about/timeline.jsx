"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const milestones = [
  {
    id: 1,
    date: "2017",
    title: "Started as a side project",
    description: "The platform was started as a side project by two friends from Nepal.",
  },
  {
    id: 2,
    date: "2018",
    title: "First online launch",
    description:
      "The platform was launched online and received positive feedbacks from the community.",
  },
  {
    id: 3,
    date: "2020",
    title: "First official announcement",
    description:
      "The platform was officially announced on the social media platforms and received a lot of attention from the public.",
  },
  {
    id: 4,
    date: "2022",
    title: "Nepal's first online platform",
    description:
      "The platform has become the first online platform that offers Nepali language content on various topics.",
  },
];

export default function TimelineComp() {
  return (
    <Timeline>
      {milestones.map(milestone => (
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
