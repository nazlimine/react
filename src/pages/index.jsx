import React, { useState, useEffect }  from "react";
import { Container } from 'rsuite';
import TablePage from './TablePage';
import {Input,InputGroup} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';


export const IndexPage = () => {

    return(
            
            <Container>
                <h1>Users</h1>
                <InputGroup inside >
                <Input />
                    <InputGroup.Button>
                        <SearchIcon />
                    </InputGroup.Button>
                </InputGroup>

                <TablePage></TablePage>

            </Container>

    )
}

export default IndexPage;