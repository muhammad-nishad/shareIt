import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchUsersList({ search }) {
    const navigate = useNavigate()
    return (
        <>
            <List
                dense
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "#ec255a00",
                    marginLeft: "3%",
                    marginTop: "12px",
                }}
            >

                {search ? search.map((value) => {
                    return (
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar
                                onClick={() => {
                                    navigate(`/profile/${value._id}`);
                                    localStorage.setItem("profileUser", value._id);
                                }}
                            >
                                <Avatar alt="Remy Sharp" src={value.profilePicture} />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ marginTop: "18px" }}
                                onClick={() => {
                                    navigate(`/profile/${value._id}`);
                                    // localStorage.setItem("profileUser", value._id);
                                }}
                                disableTypography
                                primary={
                                    <Typography style={{ fontWeight: 500 }}>
                                        {" "}
                                        <b>{value.first_name} </b>{" "}
                                    </Typography>
                                }
                            />
                            <Divider variant="inset" component="li" />
                        </ListItem>
                    );
                }): null}

            </List>
        </>
    )
}
