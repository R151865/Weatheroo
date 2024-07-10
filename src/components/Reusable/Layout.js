import { Grid } from '@mui/material'; // Importing Grid component from Material-UI
import React from 'react'; // Importing React
import SectionHeader from './SectionHeader'; // Importing SectionHeader component from local file './SectionHeader'

/**
 * Layout component for rendering a structured layout with title, section headers, and content.
 * @param {Object} props - Props passed to the Layout component
 * @param {React.ReactNode} props.content - Content to be rendered within the layout
 * @param {string} props.title - Title of the layout section
 * @param {Object} props.sx - Custom styling object for Material-UI sx prop
 * @param {string} props.mb - Margin bottom value for SectionHeader component
 * @param {React.ReactNode} props.sectionSubHeader - Additional sub-header content
 * @returns {JSX.Element} - Rendered Layout component
 */
const Layout = ({ content, title, sx, mb, sectionSubHeader }) => {
  return (
    <Grid container sx={sx}> {/* Material-UI Grid container with custom styling (sx prop) */}
      <Grid item xs={12}> {/* Grid item that spans full width on extra small screens */}
        <SectionHeader title={title} mb={mb || '0'} /> {/* Rendering SectionHeader with title and optional margin bottom (mb) */}
        {sectionSubHeader || null} {/* Rendering optional sectionSubHeader */}
      </Grid>
      {content} {/* Rendering main content */}
    </Grid>
  );
};

export default Layout; // Exporting Layout component as default
