import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { colors } from '@mui/material';
import Aluguel from './Aluguel';
export default function ListagemAlugueis() {
  const [data, setData] = useState([]);
  let indice = []
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/aluguel');
      const json = await response.json();
      setData(json);
        }
    fetchData();
  }, []);

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
    
                return <Button variant="contained" color="primary" onClick={onClick}>Redirect</Button>;
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
