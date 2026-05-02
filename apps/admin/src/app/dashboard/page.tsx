"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type User = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  dateAdded: Date;
};


export default function Dashboard() {
    //mock data
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Daan" },
    { id: 2, name: "John" },
    ]);
  
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product 1", price: 19.99, dateAdded: new Date() },
    { id: 2, name: "Product 2", price: 29.99, dateAdded: new Date() },
    ]);

  const [newProduct, setNewProduct] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newName, setNewName] = useState("");

  function addUser() {
    if (!newName) return;

    setUsers([
      ...users,
      { id: Date.now(), name: newName }
    ]);

    setNewName("");
  }

  function deleteUser(id: number) {
    setUsers(users.filter((u) => u.id !== id));
  }
  
  function changeUser(id: number) {
    const newName = prompt("Enter new name");
    if (!newName) return;
    setUsers(users.map((u) => u.id === id ? { ...u, name: newName } : u));
  }

  function addProduct() {
    if (!newProduct) return;

    setProducts([
      ...products,
      { id: Date.now(), name: newProduct, price: newProductPrice, dateAdded: new Date() }
    ]);

    setNewProduct("");
    setNewProductPrice(0);
  }

  function deleteProduct(id: number) {
    setProducts(products.filter((p) => p.id !== id));
  }


  return (
    <section
      className="min-h-screen flex justify-center items-start bg-cover bg-center"
      style={{ backgroundImage: "url('/bglogin.jpg')" }}
      >
        <main className="max-w-6xl mx-auto space-y-6 p-6">
            <div className="bg-white p-3 rounded-xl shadow space-y-4">
                <h1 className="text-3xl font-bold text-center">Admin dashboard</h1>
            </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            
            {/* USERS */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Users CRUD</h2>

            <div className="flex gap-2">
                <Input
                placeholder="New user"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                />
                <Button onClick={addUser}>Add</Button>
            </div>

            <div className="space-y-2">
                {users.map((user) => (
                <div key={user.id} className="flex justify-between border p-2 rounded">
                    <span>{user.name}</span>
                    <div className="flex gap-2">
                        <Button 
                        variant="outline"
                        onClick={() => changeUser(user.id)}
                        >
                        Edit
                        </Button>

                        <Button
                        variant="destructive"
                        onClick={() => deleteUser(user.id)}
                        >
                        Delete
                        </Button>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* PRODUCTS (mock) */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Products CRUD</h2>
            <div className="flex gap-2">
                <Input
                placeholder="New product"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                />
                <Input
                placeholder="Product price"
                type="number"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(parseFloat(e.target.value) || 0)}
                />
                <Button onClick={addProduct}>Add</Button>
            </div>

            <div className="space-y-2">
                {products.map((product) => (
                <div key={product.id} className="flex justify-between border p-2 rounded">
                    <div className="flex gap-2">
                        <span>{product.name}</span>
                        <span>${product.price.toFixed(2)}</span>
                    </div>
                    <Button
                    variant="destructive"
                    onClick={() => deleteProduct(product.id)}
                    >
                    Delete
                    </Button>
                </div>
                ))}
            </div>
            </div>

            {/* SORTED BY PRICE */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Top Prices</h2>
            <div className="space-y-2">
                {products
                .slice()
                .sort((a, b) => b.price - a.price)
                .map((product) => (
                    <div key={product.id} className="flex justify-between border p-2 rounded">
                    <span>{product.name}</span>
                    <span>${product.price.toFixed(2)}</span>
                    </div>
                ))}
                
            </div>
            </div>
            {/* SORTED BY DATEADDED */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Newest Products</h2>
            <div className="space-y-2">
                {products
                .slice()
                .sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime())
                .map((product) => (
                    <div key={product.id} className="flex justify-between border p-2 rounded">
                    <span>{product.name}</span>
                    <span>{product.dateAdded.toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
        </div>
        
        </div>
        <p className="text-center text-sm text-gray-500">
            I made a simple dashboard with CRUD operations for Fast8
        </p>
        </main>
    </section>
  );
}