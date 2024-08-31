// import { useState } from 'react'
import { AppBar, Avatar, Button, BottomNavigation, Grid, Toolbar, Typography, IconButton, Chip } from '@mui/material'
import { Tabs, Tab, BottomNavigationAction } from '@mui/material'
import { 
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  // Email as EmailIcon,
  // Home as HomeIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material'
import { useQuery } from '@tanstack/react-query'
import { MuiTimeline } from './components/MuiTimeline'
import { queries } from './api'
// import './App.css';

import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { ProjectCard } from './components/Card'
import { projectsContent } from './components/data/projectsContent'

export function Scene({ isHovered }: { isHovered: boolean }) {
  return (
    <Canvas>
      <motion.group animate={isHovered ? "hover" : "rest"}>
        <motion.mesh variants={{ hover: { z: 1 } }} />
      </motion.group>
    </Canvas>
  )
}

// const handleType = (type: string) => ({  
//   heading_1: "h1",
//   heading_2: "h2",
//   heading_3: "h3",
//   heading_4: "h4",
//   heading_5: "h5",
//   heading_6: "h6",
//   paragraph: "p",
//   divider: "divider"
// }[type]);

// const excludeList = [
//   "column_list",
//   "divider",
//   "quote",
//   "link_preview"
// ];

const navItems = ["Work", "Experience", "About", "Resume"];

function App() {
  const contentQuery = useQuery(queries.query("/notion/portfolio"));
  console.log("contentQuery: ", contentQuery)

  return <AppContent /> || ({
    pending: <>Starting up...</>,
    loading: <>Loading...</>,
    success: <AppContent data={contentQuery.data} />,
    error: (<>Error</>)
  }[contentQuery.status]);
};

export default App;

const AppContent = ({ data }: { data?: any }) => {
  // const [isHovered, setIsHovered] = useState(false);
  console.log("AppContent.data: ", data)
  return (
    <>
    <Grid container sx={{ maxWidth: "100vw", my: 8, p: 2 }}>
      <AppBar position="fixed" sx={theme => ({ bgcolor: theme.palette.background.paper, zIndex: theme.zIndex.drawer + 1 })}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="h6">MW</Typography>
          <Tabs
            value={0}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {navItems.map((item: string, index: number) => (
              <Tab key={index} label={item} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Grid item sm={12}>
        <Avatar alt="Michael Woodward" sx={{ width: 150, height: 150 }} />
        <Typography variant="h3" component="h3">Michael Woodward</Typography>
        <Typography variant="body1" component="p">
          Professional Applications Engineer
        </Typography>
      </Grid>
      {/* {data.content.map((item: any) => !excludeList
        .includes(item.type) && (
          <Grid item sm={12} key={item.id}>
            <Typography
              variant={handleType(item.type) as any} 
              component={handleType(item.type) as any}
            >
              {item.content}
            </Typography>
          </Grid>

        ))} */}
      <Grid item sm={12}>
        <Chip label="3+ years experience" color="primary" />
        <Chip label="JavaScript" color="primary" />
        <Chip label="TypeScript" color="primary" />
        <Chip label="React" color="primary" />
        <Chip label="Node" color="primary" />
      </Grid>
      <Grid id='experience' item sm={12}>
        <MuiTimeline />
      </Grid>
      <Grid item sm={12}>
        <Grid container id="work">
          {projectsContent.map((item: any, index: number) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={index}
            >
              <ProjectCard
                title={item.name}
                projectUrl={item.url}
                githubUrl={item.source}
                imageUrl={item.thumbnail}
                description={item.description}
                // screenshots={item.screenshots}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item sm={12} id='about'>
        <Typography variant="h4" component="h4">
          About Me
        </Typography>
        <Typography variant="body1" component="p">
          I am a professional Applications Engineer with 3+ years of experience. I have experience with JavaScript, TypeScript, React, Node, and more. In my daily work I use React to build and maintain complex web applications.
        </Typography>
      </Grid>
      <Grid item sm={12} direction={"row"} sx={{ textAlign: "right", p: 1 }}>
        <Button variant="outlined" color="inherit">
          Resume
        </Button>
      </Grid>
      <Grid item sm={12}>
        <img src="https://placekitten.com/300/300" alt="Kitten" style={{ border: "1px solid #ccc", width: "100%", padding: "8px" }} />
      </Grid>
      <Grid item sm={12} direction={"row"}>
        
        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <GitHubIcon />
        </IconButton>
        <Button variant="outlined" color='inherit'>
          Trailhead
        </Button>
      </Grid>

    </Grid>
      <div style={{ 
        position: "fixed", 
        bottom: 0, 
        left: 0, 
        maxWidth: "100vw" 
      }}>
        <BottomNavigation
          component={Tabs}
          showLabels
          variant="scrollable"
          scrollButtons="auto"
          value={0}
          sx={{ zIndex: 1000, pt: 2, width: "100%" }}
        >
          {navItems.map((item: string, index: number) => (
            <BottomNavigationAction
              key={index}
              label={item}
              icon={(navItems as any)[item as keyof typeof navItems]}
              value={index}
              component="a"
              href={`#${item.toLowerCase()}`}
              // onClick={() => {}}
            />
          ))}
        </BottomNavigation>
      </div>
    </>
  );
};