import { Avatar, Box, Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import './App.css';
import {motion} from 'framer-motion'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Home() {
  const skills = [
    {
      type:'frontend',
      skill:'HTML',
      img:
    },
    {
      type:'frontend',
      skill:'CSS',
    },
    {
      type:'frontend',
      skill:'JavaScript',
    },
    {
      type:'frontend',
      skill:'React',
    },
    {
      type:'Library',
      skill:'Redux',
    },
    {
      type:'Library',
      skill:'Framer Motion',
    },
    {
      type:'Library',
      skill:'React router',
    },
    {
      type:'Library',
      skill:'Framer Motion',
    },
    {
      type:'Library',
      skill:'Mongoose',
    },
    {
    type:'backend',
    skill:'Nodejs',
  },
    {
      type:'backend',
      skill:'MongoDB',
    },
    {
      type:'Library',
      skill:'Framer Motion',
    },
  ]

  const Tools =[
    'Postman','Visual studio code','PhotoShop','MS Word'
  ]
  return (
    <>
    <Stack fullWidth className="homePage" spacing={2} direction="row" sx={{ display: 'flex', margin: '30px', padding: '18px', alignItems: 'center', justifyContent: 'space-around', display: { xs: 'block', sm: 'flex' }, direction: { xs: 'column-reverse' }, marginTop: '60px' }}>
      <Box sx={{ width: '600px', padding: '10px' }}>
        <Typography className="homePage__text" variant="h3" color="dodgerBlue" sx={{ marginBottom: '20px', fontSize: { xs: '60px' } }} id="name">Aravindh Arumugam</Typography>
        <Typography variant="h6" sx={{color:'white', fontSize: { xs: '30px', md: '20px' } }}>Hello Everybody 👋 ! I am aravindh i have a knowledge in HTML , CSS , JavaScript and some famous UI library like React. And i can adapt any environment , looking for frontend developer role .  </Typography>
      </Box>
      <Box sx={{ margin: 'auto' }} component={motion.div}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ x: [50, 110, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
      }}
      >
        <Avatar  sx={{ marginLeft: { xs: '30%' }, justifyContent: "center", alignItems: "center", width:{xs:350,md:250},height:{xs:350,md:250}}} alt="Travis Howard" src="https://avatars.githubusercontent.com/u/83901906?v=4" />
        <div className="duplicateAvatar"></div>
      </Box>
      
    </Stack>
       <Box component={motion.button}
       whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.5 }}
         className="tech_skills"
         sx={{color:'green',padding:'8px',margin:{xs:'40px auto',md:'auto'},border:'2px solid transparent',borderRadius:'10px',fontSize:'20px',width:'200px',height:'60px'}}
         ><TaskAltIcon/> Tech Skills</Box>

         <Stack>
             
                 { skills.filter((skill)=>skill.type==='frontend').map((skill,i)=>{
                    return(
                      <motion.div sx={{height:'60px',width:'200px',}}>
                           
                      </motion.div>
                    )})
                  }
         </Stack>
    </>
  );
}

export default Home;
