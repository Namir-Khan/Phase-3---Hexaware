import { useState, useEffect } from "react";
import './App.css';
import SCard from "./SCard";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Modal,
} from 'semantic-ui-react'

const Apieg = () => {
    let [products, setProducts] = useState([]);
    let [Fproducts, setFProducts] = useState([]);
    let [search, setSearch] = useState("");
    let [flag,setFlag]=useState(false);

    const [newId, setNewId] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newImage, setNewImage] = useState("");

    const [open, setOpen] = useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    useEffect(
        () => {
            fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((p) => {
                setProducts(p.products);
                setFlag(true);
            })
            .catch((e) => console.log(e))
        }, []
    );

    useEffect(
        () => {
        let data = products.filter((temp) => temp.category.includes(search));
        setFProducts(data);
        }, [search, products]
    );

    const addProduct = () => {
        const newProduct = {
        id: parseInt(newId),
        category: newCategory,
        title: newTitle,
        price: parseFloat(newPrice),
        thumbnail: newImage,
        };

        setProducts([...products, newProduct]);

        setNewId("");
        setNewCategory("");
        setNewTitle("");
        setNewPrice("");
        setNewImage("");
    }

    const removeProduct = (id) => {
        setProducts(products.filter((temp) => temp.id !== id));
    }

    const updateProduct = (id, newCat) => {
        setProducts(products.map((temp) => temp.id === id ? { ...temp, category: newCat } : temp));
    }

    return(
        <>
            {
                flag ?
                <div>
                    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}trigger={<Button>Add Item</Button>}>
                        <div className="card">
                            <input type="text" placeholder="Enter id" value={newId} onChange={(e) => setNewId(e.target.value)} />
                            <input type="text" placeholder="Enter category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                            <input type="text" placeholder="Enter title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            <input type="text" placeholder="Enter price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                            <input type="text" placeholder="Enter image url" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
                            <button onClick={addProduct}>Add New Item</button>
                            <button onClick={() => setOpen(false)}>Close</button>
                        </div>
                    </Modal>

                    <input type = 'text' placeholder = 'Search By Category' onChange = {handleSearch}/>

                    {
                        search.length > 0 ? 
                        Fproducts.map((temp) => <SCard id = {temp.id} name = {temp.title} category = {temp.category} price = {temp.price} image = {temp.thumbnail} remove = {removeProduct} update={updateProduct}/>) :
                        products.map((temp) => <SCard id = {temp.id} name = {temp.title} category = {temp.category} price = {temp.price} image = {temp.thumbnail} remove = {removeProduct} update={updateProduct}/>)
                    }
                </div>
                :
                <div>
                    <Segment>
                        <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>

                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                </div>
            }
        </>
    )
}

export default Apieg