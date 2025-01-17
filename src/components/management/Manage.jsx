import React from "react";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "../ui/table.tsx";
import { Link } from "react-router-dom";
import { Button } from "../ui/button.tsx";

function Manage() {

    return(
        
        <div className="p-6 max-w-4xl mx-auto">
        <Link to="/">Voltar</Link>
            <p className="font-bold text-center">Meus Produtos</p>
        <div className="flex items-center justify-between mb-2">
            <Button>Adicionar Produto</Button>
        </div>
        <div className="border rounded-sm">
            <Table>
                <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Preço</TableHead>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 10 }).map((_, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>K21i301ADaaiksdAPIh</TableCell>
                                <TableCell>Produto {index}</TableCell>
                                <TableCell>R$ 192,00</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    </div>
    )
}

export default Manage;