import React from 'react';

const AdminPage = () => {
    return (
        <>
            <h1>Dodaj zdjęcie</h1>
            <form action='http://localhost:5000/products/add' method='POST' encType='multipart/form-data' >
                <label htmlFor="">nazwa</label>
                <input type='text' name='name' />
                <label htmlFor="">kategoria</label>
                <input type='text' name='category' />
                <label htmlFor="">cena</label>
                <input type='number' name='price' />
                <label htmlFor="">zdjecia</label>
                <input type='file' name='image' multiple />
                <label htmlFor="">opis</label>
                <input type='text' name='description' />
                <label htmlFor="">wysokosc</label>
                <input type='number' name='height' />
                <label htmlFor="">szerokosc</label>
                <input type='number' name='width' />
                <label htmlFor="">materialy</label>
                <input type='text' name='materials' />
                <label htmlFor="">pielegnacja</label>
                <input type='text' name='care' />
                <label htmlFor="">promocja</label>
                <input type='checkbox' name='promotion' />
                <label htmlFor="">wielkosc promocji</label>
                <input type='number' name='promotionSize' />
                <label htmlFor="">dostepna ilosc</label>
                <input type='number' name='quantity' />
                <input type='submit' />
            </form>
        </>
    )
};

export default AdminPage;