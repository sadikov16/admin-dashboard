import { React, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlined,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setisCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    // sx={{
    //   "& .pro-sidebar-inner": {
    //     background: `${colors.primary[400]} !important`,
    //   },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 2px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#868dfb !important",
    //     backgroundColor: "none !important",
    //   },
    //   [`&.active`]: {
    //     backgroundColor: "#13395e",
    //     color: "#b6c8d9",
    //   },
    //   "& .pro-inner-item:active": {
    //     color: "#6870fa !important",
    //   },
    // }}
    >
      <Sidebar style={{ height: "100vh" }} collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setisCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ulug'bek Sodiqov
                </Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Link to="/" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Dashboard"
                icon={<HomeOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Link to="/team" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Manage Team"
                icon={<PeopleOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/contacts" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/invoices" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Invoices Balances"
                icon={<ReceiptOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Link to="/form" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Profile Form"
                icon={<PersonOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/calendar" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Calendar"
                icon={<CalendarTodayOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/faq" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="FAQ Page"
                icon={<HelpOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Link to="/bar" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Bar Chart"
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/pie" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Pie Chart"
                icon={<PieChartOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/line" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Line Chart"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="/geography" style={{ textDecoration: "none" }} sx={{}}>
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidbar;
