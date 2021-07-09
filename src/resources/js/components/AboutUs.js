import { Typography, Box, Paper } from "@material-ui/core";

export default function AboutUs(props) {
  return (
    <>
      <Paper elevation={1} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Box p={2}>
          <Typography component="h6" variant="h6">
            About Us
          </Typography>
        </Box>
        <Box px={4} pb={4}>
          <Typography paragraph>
            Morbi risus nunc, condimentum a urna vitae, ullamcorper pulvinar
            eros. Morbi ut augue quis nunc scelerisque rhoncus sed ut justo.
            Pellentesque vitae tempor purus. Duis suscipit tellus venenatis,
            varius ex id, dignissim felis.
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
