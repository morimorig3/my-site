import profilePic from '../../../../public/images/profile.jpg';
import Image from 'next/image';
import { Box } from '@mui/material';
import { BACKGROUND_COLORS } from '@/const/color';

export const AvatorG3 = () => (
  <Box
    component="figure"
    sx={{
      width: '96px',
      height: '96px',
      borderRadius: '100vh',
      overflow: 'hidden',
      backgroundImage: `linear-gradient(to bottom right, ${BACKGROUND_COLORS.lightGreen}, ${BACKGROUND_COLORS.green})`,
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <Box
      sx={{
        width: '92%',
        borderRadius: '100vh',
        overflow: 'hidden',
      }}
    >
      <Image src={profilePic} layout="responsive" alt="morimorig3アイコン" />
    </Box>
  </Box>
);
