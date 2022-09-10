import React, { useState, useEffect }  from "react";
import { Table } from 'rsuite';
import { data_users } from '../data/data.jsx';


const { Column, HeaderCell, Cell } = Table;

export const TablePage = () => {

    return(

            <Table height={700}
                data={data_users}>
                <Column width={200} sortable>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
                </Column>

                <Column width={200} sortable>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="first_name" />
                </Column>

                <Column width={200} sortable>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="last_name" />
                </Column>

                <Column width={250} sortable>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
                </Column>

                <Column width={200} sortable>
                <HeaderCell>Phone Number</HeaderCell>
                <Cell dataKey="phone_number" />
                </Column>

                <Column width={200} sortable>
                <HeaderCell>Balance</HeaderCell>
                <Cell dataKey="balance" />
                </Column>

                <Column width={200} sortable>
                <HeaderCell>Open Issues</HeaderCell>
                <Cell dataKey="open_issues" />
                </Column>
        </Table>

    )
}

export default TablePage;