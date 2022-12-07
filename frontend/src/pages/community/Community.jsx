import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import People from "../../components/People/People";
import Following from "../../components/Following/Following";
import Followers from "../../components/Followers/Followers";




export default function Community() {
    const [user, setUser] = useState([])
    const [people, setPeople] = useState(false)
    const [following, setFollowing] = useState(false)
    const [followers, setFollowers] = useState(false)


    return (
        <>
            <div >
                <div style={{ width: "55vw", paddingTop: 25, display: "flex", justifyContent: "center", gap: 10 }}>

                    <Button onClick={() => {
                        setFollowers((prev) =>
                            !prev

                        )

                    }} variant="contained" >Followers</Button>

                    <Button onClick={() => {
                        setFollowing((prev) =>
                            !prev
                        )
                    }} variant="contained">Following</Button>

                    <Button onClick={() => {
                        setPeople((prev) =>
                            !prev
                        )
                    }} variant="contained">People You May Know</Button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }} >
                    {people && <People />}
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>

                    {following && <Following following={following} />}
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {followers && <Followers followers={followers} />}
                </div>

            </div>
            {/* <Box flex={4} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" onClick={() => setPeople(1)} label="Followers" />
                    <Tab value="two" onClick={() => setPeople(2)} label="Following" />
                    <Tab value="three" onClick={() => setPeople(3)} label="People You May Know" />
                </Tabs>

                {people === 1 ? <div>
                      <div>
                   
             user.followers.map((user)=>(
              return <UserCard data={user} />
                
            ))
       
                    </div> 
                </div> : null}





                {people === 2 ? <h1>TWO</h1> : null}
                {people === 3 ? <h1>THREE</h1> : null}

            </Box> */}
        </>
    )
}
