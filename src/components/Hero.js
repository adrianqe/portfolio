import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';

const email = 'ajquirose05@gmail.com';

const handleCopy = () => {
  navigator.clipboard.writeText(email);
  alert('Correo copiado al portapapeles');
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Adrián&nbsp;Quirós&nbsp;
            <Typography
              component="span"
              textAlign={{ xs: 'center', sm: 'center' }}
              variant="h2"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              <div data-section="profile" data-value="rol">Information Systems Engineering</div>
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'justify',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }, // Ajusta el tamaño según el dispositivo
            }}
          >
            <span data-section="profile" data-value="description">
              I am passionate about technology and AI, driven by the ambition to create innovative and impactful solutions. Strong problem-solving skills and a continuous learning mindset. Seeking opportunities to grow and contribute my skills.
            </span>
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Correo"
              value={email} // correo aquí
              fullWidth
              InputProps={{
                readOnly: true, // Para que no se pueda modificar
              }}
            />
            <Button variant="contained" onClick={handleCopy} data-section="profile" data-value="copyButton">
              <div data-section="copyButton" data-value="copy">Copy</div>
            </Button>
          </Stack>

        </Stack>

      </Container>
    </Box>
  );
}
