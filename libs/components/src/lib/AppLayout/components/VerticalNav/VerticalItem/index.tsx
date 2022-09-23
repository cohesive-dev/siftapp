import React, { useEffect, useMemo } from 'react';
import { Icon, ListItemText } from '@mui/material';
import clsx from 'clsx';
import AppBadge from '../../../../AppBadge';
import Box from '@mui/material/Box';
import IntlMessages from '@sift/helpers/IntlMessages';
import { checkPermission } from '@sift/helpers';
import { useAuthUser } from '@sift/hooks/AuthHooks';
import VerticalNavItem from './VerticalNavItem';
import { RouterConfigData } from '@sift/models/Apps';
import Link from 'next/link';
import { useRouter } from 'next/router';

type VerticalItemProps = {
  item: RouterConfigData;
  level: number;
};

const VerticalItem: React.FC<VerticalItemProps> = ({ level, item }) => {
  const { user } = useAuthUser();
  const { pathname, asPath } = useRouter();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role]
  );
  useEffect(() => {
    if (process.browser) {
      if (pathname === item.url && document.getElementById(pathname)) {
        setTimeout(() => {
          if (document.getElementById(pathname)) {
            document
              .getElementById(pathname)
              .scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 1);
      }
    }
  }, [pathname]);

  if (!hasPermission) {
    return null;
  }

  return (
    <Link
      href={item.url as string}
      style={{ textDecoration: 'none' }}
      id={item.url}
      className={clsx({
        active: item.url === asPath,
      })}
    >
      <VerticalNavItem item={item} level={level} exact={item.exact}>
        {item.icon && (
          <Box component="span">
            <Icon
              sx={{
                fontSize: 18,
                display: 'block',
                mr: 4,
              }}
              className={clsx('nav-item-icon', 'material-icons-outlined')}
              color="action"
            >
              {item.icon}
            </Icon>
          </Box>
        )}
        <ListItemText
          className="nav-item-content"
          primary={<IntlMessages id={item.messageId} />}
          classes={{ primary: 'nav-item-text' }}
        />
        {item.count && (
          <Box sx={{ mr: 3.5 }} className="menu-badge">
            <AppBadge count={item.count} color={item.color} />
          </Box>
        )}
      </VerticalNavItem>
    </Link>
  );
};

export default React.memo(VerticalItem);
