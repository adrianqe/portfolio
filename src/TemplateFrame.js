import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ToggleColorMode from './components/ToggleColorMode';
import getMPTheme from './theme/getMPTheme';

const basePath = window.location.hostname.includes("github.io") ? "/portfolio" : "";
const changeLanguage = async (language) => {
  try {
    const requestJSON = await fetch(`${basePath}/language/${language}.json`);
    if (!requestJSON.ok) throw new Error(`HTTP error! Status: ${requestJSON.status}`);

    const texts = await requestJSON.json();
    document.querySelectorAll("[data-section]").forEach((element) => {
      const section = element.dataset.section;
      const value = element.dataset.value;
      if (texts[section] && texts[section][value]) {
        element.textContent = texts[section][value];
      }
    });
  } catch (error) {
    console.error(`Failed to load or apply language file for ${language}:`, error);
  }
};


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  backgroundImage: 'none',
  zIndex: theme.zIndex.drawer + 1,
  flex: '0 0 auto',
}));

function TemplateFrame({
  showCustomTheme,
  mode,
  toggleColorMode,
  children,
}) {
  const [language, setLanguage] = useState('en');
  const [resumeLink, setResumeLink] = useState('/pdf/ResumeCurriculumAdriánQuirós.pdf'); // Estado para el link

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    changeLanguage(newLanguage);

    // Cambiar el href del PDF según el idioma
    const newResumeLink = newLanguage === 'es'
      ? '/pdf/CurriculumAdriánQuirós.pdf'
      : '/pdf/ResumeCurriculumAdriánQuirós.pdf';
    setResumeLink(newResumeLink);
  };

  const MPTheme = createTheme(getMPTheme(mode));

  return (
    <ThemeProvider theme={MPTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <StyledAppBar>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              p: '8px 12px',
            }}
          >
            <Button
              variant="text"
              size="medium"
              aria-label="Résumé"
              component="a"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <div data-section="CV" data-value="curriculum">Résumé</div>
            </Button>
            <IconButton
              variant="text"
              size="small"
              aria-label="Résumé"
              component="a"
              href={resumeLink}
              target="_blank"
              sx={{ display: { xs: 'auto', sm: 'none' } }}
            >
              CV
            </IconButton>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <FormControl variant="outlined" sx={{ minWidth: 180 }}>
                <Select
                  size="small"
                  id="language-select"
                  value={language}
                  onChange={handleLanguageChange}
                  label="Language"
                >
                  <MenuItem value="en" data-language="en">English</MenuItem>
                  <MenuItem value="es" data-language="es">Español</MenuItem>
                </Select>
              </FormControl>
              <ToggleColorMode
                data-screenshot="toggle-mode"
                mode={mode}
                toggleColorMode={toggleColorMode}
              />
            </Box>
          </Toolbar>
        </StyledAppBar>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}

TemplateFrame.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default TemplateFrame;
