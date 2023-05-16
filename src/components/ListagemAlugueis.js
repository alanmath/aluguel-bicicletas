import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ListagemAlugueis() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function fetchAlugueis() {
        let response = await fetch('http://localhost:8080/aluguel', {
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return [];
        }).catch(ex => {
            return [];
        });
        setData(response);
    }

    useEffect(() => {
        fetchAlugueis();
    }, []);

    const columns = [
        { field: 'origem', headerName: 'Origem', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const onClick = async () => {
                    try {
                        const response = await fetch(`http://localhost:8080/aluguel/${params.row.id}`, {
                            method: 'DELETE',
                        });
    
                        if (response.ok) {
                            setData(data.filter(item => item.id !== params.row.id));
                        }
                    } catch (ex) {
                        // handle error
                    }
                };
    
                return <Button variant="contained" color="error" onClick={onClick}>Delete</Button>;
            }
        },
        {
            field: 'redirect',
            headerName: 'Redirect',
            sortable: false,
            width: 150,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const onClick = () => {
                    navigate(`/devolucao/${params.row.identificador}`);
                };
    
                return <Button variant="contained" color="primary" onClick={onClick}>DEVOLVER</Button>;
            }
        }
    ];

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
    );
}
