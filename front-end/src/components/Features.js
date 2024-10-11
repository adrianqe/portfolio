import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: (
      <span data-section="features" data-value="title-1">
        Mobile App
      </span>
    ),
    description: (
      <span data-section="features" data-value="description-1">
        This mobile application scans the barcode of a product and shows its nutritional information. It was developed using .Net MAUI.
      </span>
    ),
    imageLight: 'url(./img/nutriMockupLight.png)',
    imageDark: 'url(./img/nutriMockupDark.png)',
    repoLink: 'https://github.com/adrianqe/NutriApp',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: (
      <span data-section="features" data-value="title-2">
        Web platform
      </span>
    ),
    description: (
      <span data-section="features" data-value="description-2">
        This item could let users know the product is available on all platforms, such as web, mobile, and desktop.
      </span>
    ),
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
    repoLink: 'https://github.com/adrianqe/WebPlatform',
  },
  {
    icon: <ViewQuiltRoundedIcon />,
    title: (
      <span data-section="features" data-value="title-3">
        Dashboard
      </span>
    ),
    description: (
      <span data-section="features" data-value="description-3">
        This item could provide a snapshot of the most important metrics or data points related to the product.
      </span>
    ),
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
    repoLink: 'https://github.com/adrianqe/Dashboard',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemHover = (index) => {
    setSelectedItemIndex(index);  // Cambiar el contenido al pasar el cursor
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
          data-section="features"
          data-value="title"
        >
          Feature Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
          data-section="features"
          data-value="description"
        >
          These are some of the most important projects I have worked on. Hover over or click the items to learn more.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description, repoLink }, index) => (
              <Box
                key={index}
                component={Button}
                onMouseEnter={() => handleItemHover(index)}
                onClick={() => window.open(repoLink, '_blank')}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: 500,
                height: 500,
                backgroundSize: 'large',
                backgroundPosition: 'center',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? {
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    }
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
