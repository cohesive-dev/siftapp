import React from 'react';
import { alpha, Box } from '@mui/material';
import { Fonts } from '@sift/constants/AppEnums';
import { useIntl } from 'react-intl';
import AppCard from '@sift/components/AppCard';
import moment from 'moment';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiMessageDetail } from 'react-icons/bi';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { MdOutlineExitToApp } from 'react-icons/md';
import { WelcomeCardType } from '@sift/models/dashboards/Analytics';
import AppScrollbar from '@sift/components/AppScrollbar';
import { BsCheckSquare } from 'react-icons/bs';

const getWelcomeIcon = (iconType: string) => {
  switch (iconType) {
    case 'HiOutlineMailOpen':
      return <HiOutlineMailOpen color="purple" className="icon" />;
    case 'BiMessageDetail':
      return <BiMessageDetail color="purple" className="icon" />;
    case 'RiMoneyDollarBoxLine':
      return <RiMoneyDollarBoxLine color="purple" className="icon" />;
    case 'MdOutlineExitToApp':
      return <MdOutlineExitToApp color="purple" className="icon" />;
    case 'BsCheckSquare':
      return <BsCheckSquare color="purple" className="icon" />;
    default:
      return <CgFileDocument color="purple" className="icon" />;
  }
};

type WelcomeCardProps = {
  fundName: string;
  fundStartDate: number;
  data: WelcomeCardType[];
};

const WelcomeCard: React.FC<WelcomeCardProps> = ({ fundName, fundStartDate, data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{
        mb: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            mr: { xs: 2, xl: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              mb: { md: 12 },
            }}
          >
            <Box
              component="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: Fonts.REGULAR,
                mb: 0.5,
                fontSize: 16,
              }}
            >
              {fundName}
            </Box>
            <Box
              component="h3"
              sx={{
                color: 'text.primary',
                fontWeight: Fonts.MEDIUM,
                fontSize: 20,
                mb: 3,
              }}
            >
              {moment(fundStartDate).format('DD MMMM YYYY')}
            </Box>
          </Box>
          <Box
            sx={{
              mx: -3,
            }}
          >
            <AppScrollbar
              sx={{
                maxWidth: '100%',
                px: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  mx: -3,
                }}
              >
                {data.map((item, index) => (
                  <Box
                    key={'box-' + index}
                    sx={{
                      px: 3,
                      mt: 3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        mr: 4,
                        backgroundColor: (theme) =>
                          alpha(theme.palette.primary.main, 0.1),
                        width: { xs: 46, md: 60 },
                        height: { xs: 46, md: 60 },
                        minWidth: { xs: 46, md: 60 },
                        fontSize: { xs: 24, md: 26 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 1.25,
                        borderRadius: '50%',
                      }}
                    >
                      {getWelcomeIcon(item.icon)}
                    </Box>
                    <Box
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      <Box
                        sx={{
                          color: 'text.primary',
                          fontWeight: Fonts.MEDIUM,
                          fontSize: 18,
                          position: 'relative',
                          lineHeight: 1,
                          marginBottom: 0.5,
                        }}
                        component="h5"
                      >
                        ${item.counts}M
                      </Box>

                      <Box component="p">{item.type}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </AppScrollbar>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            marginRight: -2.5,
            marginBottom: -5,
            maxWidth: { sm: 150, xl: 180 },
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            },
          }}
        >
          <img alt="welcome" src={'/assets/images/dashboard/welcomImage.svg'} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default WelcomeCard;
