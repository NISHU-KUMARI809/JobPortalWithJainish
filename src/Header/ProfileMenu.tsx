import { Menu, Button, Text, rem, Avatar, Switch } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu=()=> {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] =useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className="flex cursor-pointer items-center gap-2">
            <div>Nishu</div>
            <Avatar src="avatar2.jpg" alt="it's me" />
            </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to="/profile">
        <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
          Profile
        </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
           size="md" color="dark.4" onLabel={<IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} color="yellow"/>} offLabel={<IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} color="cyan"
              />} />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 style={{ width: rem(14), height: rem(14) }} />}
        >
          LogOut
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu;