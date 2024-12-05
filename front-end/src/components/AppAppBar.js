import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react'; // Importa los hooks

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

const OnClicjGitHub = () => {
  window.open('https://github.com/adrianqe', '_blank');
};

const OnClickLinkedIn = () => {
  window.open('https://www.linkedin.com/in/adrian-quiros-elizondo-639906300/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
};

export default function AppAppBar() {
  // Mueve los hooks aquí
  const [activeSection, setActiveSection] = useState('');
  const sections = ['features', 'testimonials', 'highlights', 'pricing', 'faq', 'blog'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const currentSection = sections.find(section => {
        const sectionElement = document.getElementById(section);
        return (
          sectionElement.offsetTop <= scrollPosition + 100 &&
          sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition + 100
        );
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 10 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mr: 2,
                color: 'text.primary',
                fontWeight: 'bold',
              }}
              data-section="appBar"
              data-value="portfolio"
            >
              <div data-section="portfolio" data-value="name">Portfolio</div>
            </Typography>
            
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <IconButton color="primary" variant="text" size="small" onClick={OnClicjGitHub}>
              <GitHubIcon />
            </IconButton>
            <IconButton color="primary" variant="contained" size="small" onClick={OnClickLinkedIn}>
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>Projects</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>
                  <IconButton color="primary" variant="text" size="small" onClick={OnClicjGitHub}>
                    <GitHubIcon />
                  </IconButton>
                  &nbsp; &nbsp;
                  <IconButton color="primary" size="small" onClick={OnClickLinkedIn}>
                    <LinkedInIcon />
                  </IconButton>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
