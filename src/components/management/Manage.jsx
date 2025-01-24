import React from "react";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "../ui/table.tsx";
import { Link } from "react-router-dom";
import { Search, PlusCircle } from "lucide-react";
import { Button } from "../ui/button.tsx";
import api from "../../api/api.js";
import { Input } from "../ui/input.tsx";
import { DialogDemo } from "../dialog/Dialog.jsx"; 
import { useState, useEffect } from "react";
import { ArrowLeft } from 'lucide-react';

function Manage() {

    const [products, setProducts] = useState([]);

    const loadProduts = async () => {
        try {
            const response = await api.get('/products');
            console.log(response.data);
            setProducts(response.data.content);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadProduts();
    }, []);

    return(
        
        <div className="p-6 max-w-4xl mx-auto">
        <Link to="/">
            <ArrowLeft size={24} />
        </Link>
        <p className="font-bold text-center">Meus Produtos</p>
        <div className="flex items-center justify-between mb-2 mt-2 max-sm:grid gap-2">
            <form action="Search" className="flex items-center gap-2 mb-2 mt-2"> 
                <Input type="id" placeholder="ID do Produto" />
                <Input type="name" placeholder="Nome do Produto"/>
                <Button type="submit" variant={"outline"}>
                    <Search className="h-4 mr-2"/>
                    Filtrar Resultados
                </Button>
            </form>


            
            <DialogDemo
             title="Adicionar Produto"
            >
            </DialogDemo>

            <DialogDemo
             title="Adicionar Categoria"
            >
            </DialogDemo>
            
        </div>
        <div className="border rounded-sm">
            <Table>
                <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Preço</TableHead>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
    )
}

export default Manage;