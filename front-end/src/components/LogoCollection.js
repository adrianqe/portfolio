import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Logos = [
  './svg/react.svg',
  './svg/javascript.svg',
  './svg/python.svg',
  './svg/C.svg',
  './svg/sql.svg',
  './svg/java.svg',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="h3"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Tecnologies I've worked with
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
        {Logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
