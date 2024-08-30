import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
};

const cardStyles: SxProps<Theme> = {
    maxWidth: 345,
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
    return (
        <Card sx={cardStyles} elevation={4}>
            <CardMedia component="img" height="140" image={"https://via.placeholder.com/300" || imageUrl} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" href={projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project
                </Button>
                <Button size="small" color="secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
