import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';


type TimelineDataItem = {
  time?: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  color: 'primary' | 'secondary' | 'inherit' | undefined;
  variant: 'filled' | 'outlined';
  connectorColor?: string;
  align: 'right' | 'left';
};

const timelineData: TimelineDataItem[] = [
  {
    time: '2024-Current',
    title: 'Applications Engineer',
    description: 'Software Engineer at Discover Financial',
    icon: <LaptopMacIcon />,
    color: 'primary',
    variant: 'filled',
    connectorColor: 'primary',
    align: 'right',
  },
  {
    time: '2022-2024 (2.4 years)',
    title: 'JavaScript Developer II',
    description: 'Developed internal Applications for Charter Telecommunications (Spectrum)',
    icon: <LaptopMacIcon />,
    color: 'primary',
    variant: 'filled',
    connectorColor: 'primary',
    align: 'left',
  },
  {
    time: '2021-2022 (10 months)',
    title: 'Frontend Developer',
    description: 'Developed Qlik Sense Applications with React for 3vue (BI Solutions - Pharmaceutical Sector)',
    icon: <LaptopMacIcon />,
    color: 'primary',
    variant: 'outlined',
    connectorColor: 'secondary.main',
    align: 'left',
  },
  {
    time: '2021-2021 (3 months)',
    title: 'Northwestern University',
    description: 'Professional Certification of Full Stack Web Development',
    icon: <LaptopMacIcon />,
    color: 'secondary',
    variant: 'filled',
    connectorColor: 'primary',
    align: 'left',
  },
  {
    time: '2020-2020 (6 months)',
    title: 'Salesforce Administrator',
    description: 'Salesforce Administrator for MedPro',
    icon: <LaptopMacIcon />,
    color: 'secondary',
    variant: 'filled',
    connectorColor: 'primary',
    align: 'left',
  },
];

export default function MuiTimeline() {
  return (
    <Timeline position="alternate">
      {timelineData.map((item: TimelineDataItem, index: number) => (
        <TimelineItem key={index}>
          {item.time && (
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={item.align}
              variant="body2"
              color="inherit"
            >
              {item.time}
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: item.connectorColor !== 'default' ? item.connectorColor : undefined }} />
            <TimelineDot color={item.color} variant={item.variant}>
              {item.icon}
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: item.connectorColor !== 'default' ? item.connectorColor : undefined }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
