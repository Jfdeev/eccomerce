import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "../ui/dialog"
import Categories from "../categories/categories"
import { useState } from "react"
import api from "../../api/api"


export function DialogDemo(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleCategoryChange = (category) => {
    setCategory(category);
  }

  const handleCategorySubmit = async () => {
    if(categoryName === '') {
      alert('Nome da Categoria não pode ser vazio');
      return;
    }

    const json = {
      name: categoryName
    }

    try {
      const response = await api.post('/categories', json);
      console.log(response);


      if(response.status === 201) {
        alert('Categoria Adicionada com Sucesso!');
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async () => {
    try {
      if(name === '' || description === '' || price === '' || category === '') {
        alert('Todos os campos são obrigatórios');
        return;
      }

      const priceValue = parseFloat(price);
      if(isNaN(priceValue)) {
        alert('Preço inválido');
        return;
      }

      const response = await api.post('/products', {
        name,
        description,
        price,
        categoryId: category.id
      });

      if(response.status === 201) {
        alert('Produto Adicionado com Sucesso!');
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  if(props.title === "Adicionar Produto") {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{props.title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Produto</DialogTitle>
          <DialogDescription>
            Digite o nome do Produto que deseja adicionar
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Produto
            </Label>
            <Input 
            id="name" 
            className="col-span-3" 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Input 
            id="description" 
            className="col-span-3"
            onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Preço
            </Label>
            <Input 
            id="price" 
            className="col-span-3" 
            onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Categories onCategoryChange={handleCategoryChange}/>
          </div>
        </div>
        <DialogFooter>
            <DialogClose>
                <Button variant="outline">Cancelar</Button>
                <Button onClick={handleSubmit}>Adicionar</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} else {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{props.title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Categoria</DialogTitle>
          <DialogDescription>
            Digite o nome da Categoria que deseja adicionar
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Categoria
            </Label>
            <Input 
            id="categoryName" 
            className="col-span-3" 
            onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
            <DialogClose>
                <Button variant="outline">Cancelar</Button>
                <Button onClick={handleCategorySubmit}>Adicionar</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

}
