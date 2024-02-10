import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import BgImg from "../IMG/BgImg.jpeg";
import AvatarImg from "../IMG/Avatar.jpeg";
import { useLocation } from "react-router-dom";
import UserDataComp from "./UserDataComp";
const drawerWidth = 240;

export default function UserData() {
  const location = useLocation();
  console.log(location.state);
  const { firstName, lastName, email, mobileNo,gender } = location.state;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{  background:"#506081" ,color: "#000000" }}>
          <Typography variant="h6" noWrap component="div">
            User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
             background:"#011949b0",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {["My dashboard"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit:"cover",
          minHeight: "100vh",
          overflow: "auto",
        }}

      >
        <Toolbar />
        <Stack
          direction={{
            xs: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          spacing={5}
          sx={{
            background: "rgba(224, 224, 224, .3)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <Box sx={{ width: "100%", height:"100%" }}>
            <Card sx={{ width:"100%",borderRadius:"15px"}}>
              <Box sx={{ display: "flex", justifyContent: "center", background:"#d9d4d487" }}>
                <CardMedia
                  sx={{ height: "15vw", aspectRatio: "1" }}
                  image={AvatarImg}
                  title="Avatar"
                />
              </Box>

              <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{textAlign:"center"}}> 
                  Details
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography gutterBottom variant="h6" fontWeight={"bold"}component="div">
                    Name
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    {firstName} {lastName}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary"></Typography>
                <UserDataComp name="Gender" data={gender}/>
                <UserDataComp name="Email" data={email}/>
              </CardContent>
            </Card>
          </Box>
          <Box width={"100%"} height={"100%"}>
            <Stack direction={"column"} spacing={5}>
              <Box width={"100%"} height={"100%"}>
                <Card sx={{borderRadius:"15px"}}>
                  <CardContent>
                    This is usertrg cwioj Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Maxime praesentium adipisci
                    quod debitis! Officiis beatae, exercitationem dolor
                    molestias deleniti molestiae consequuntur totam laudantium{" "}
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card sx={{borderRadius:"15px"}}>
                  <CardContent>This is more user</CardContent>
                </Card>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
