import React from 'react';
import { Flex, Box, Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react"
// import Icons from './Icons'
import '../styles/stat.css'

const Profile = () => {
    return (
        <Box w="100%" p="10" >
            <Flex w="100%" id='statMain' >
                <Box>
                    Education
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Education</Th>
                                <Th>Institution</Th>
                                <Th>Year</Th>
                                <Th>CGPA/Percentage</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>MCA</Td>
                                <Td>University of Calcutta</Td>
                                <Td>July 2024</Td>
                                <Td>Pursuing</Td>
                            </Tr>
                            <Tr>
                                <Td>B.Sc Honours, Computer Science</Td>
                                <Td>University of Kalyani</Td>
                                <Td>July 2022</Td>
                                <Td>8.83</Td>
                            </Tr>
                            <Tr>
                                <Td>12th Standard</Td>
                                <Td>West Bengal Council of Higher Secondary Education</Td>
                                <Td>2019</Td>
                                <Td>74.00%</Td>
                            </Tr>
                            <Tr>
                                <Td>10th Standard</Td>
                                <Td>West Bengal Board of Secondary Education</Td>
                                <Td>2017</Td>
                                <Td>78.00%</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
                <hr/>
                <Box id='codetime'>
                    <span>Since 2024: </span> <img src="https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D23618%26project%3D%26in%3D0" alt="codetime" />
                </Box>
                <hr/>
                <Box>
                    <span><h3>Most Used Languages</h3></span>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=A-Little-Hat" alt="most used languages" />
                </Box>
                {/* <hr/>
                <Box>
                    <span><h3>Github Activity</h3></span>
                    <img src="https://activity-graph.herokuapp.com/graph?username=A-Little-Hat" alt="Github Activity" />
                </Box> */}
                <hr/>
                <Box>
                    <span><h3>Last 30 days</h3></span>
                    <img src="https://github-readme-activity-graph.vercel.app/graph?username=a-little-hat&bg_color=d1daff&color=2453c2&line=9e65d7&point=1a0f0f&area=true&hide_border=true" alt="Contribution graph" />
                </Box>
            </Flex>
        </Box>
    );
}

export default Profile;
