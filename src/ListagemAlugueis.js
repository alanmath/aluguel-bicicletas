import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function ListagemAlugueis() {

    const [data, setData] = useState([])


    async function ListagemAlugueis() {
        let ListagemAlugueis = await fetch('http://localhost:8080/aluguel', {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            }
            return []
        }).catch(ex => {
            //setMensagem('Erro ao listar times')
            return []
        })
        setData(ListagemAlugueis)
    }

    console.log(data)

    useEffect(() => {
        ListagemAlugueis ()
    }, [])


    const columns = [
        { field: 'origem', width: '300px' },
        { field: 'status', width: '700px' }
    ]

    console.log(data)


    return (
        <Box
            sx={{
                width: 600,
                mx: 'auto',
                marginTop: '200px',
                width: '40%'
            }}
        >
            <DataGrid
                autoHeight
                rows={data}
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 15]}
                checkboxSelection
                disableRowSelectionOnClick
            />

        </Box>
    )

}