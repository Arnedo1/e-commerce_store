require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// get from cart
app.get('/cart', async (req, res) => {
    try {
        const { user_id } = req.query;
        const result = await pool.query(
            `SELECT * FROM cart WHERE user_id = $1`,
            [user_id]
        );
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// add to cart
app.post('/cart', async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;
        const result = await pool.query(
            `INSERT INTO cart (user_id, product_id, quantity)
             VALUES ($1, $2, $3)
             ON CONFLICT (user_id, product_id) 
             DO UPDATE SET quantity = cart.quantity + $3
             RETURNING *`,
            [user_id, product_id, quantity]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
app.patch('/cart', async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        const result = await pool.query(
            `UPDATE cart 
             SET quantity = quantity - 1
             WHERE user_id = $1 AND product_id = $2 AND quantity > 1
             RETURNING *`,
            [user_id, product_id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
// delete item from cart
app.delete('/cart', async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        await pool.query(
            'DELETE FROM cart WHERE user_id=$1 AND product_id=$2',
            [user_id, product_id]
        );
        res.json({ message: 'deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Something went wrong' });
    }
});

// add favorite
app.post('/favorites', async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        const result = await pool.query(
            'INSERT INTO favorites (user_id, product_id) VALUES ($1, $2) RETURNING *',
            [user_id, product_id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
});

//  remove favorite
app.delete('/favorites', async (req, res) => {
    try {
        const { user_id, item_id } = req.body;
        await pool.query(
            'DELETE FROM favorites WHERE user_id = $1 AND product_id = $2',
            [user_id, item_id]
        );
        res.json({ message: 'Favorite deleted from list' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Something went wrong' });
    }
});

//  get favorite
app.get('/favorites', async (req, res) => {
    try {
        const { user_id } = req.query;
        const result = await pool.query(
            'SELECT * FROM favorites WHERE user_id = $1',
            [user_id]
        );
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
});
// GET USERS
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
});
app.post('/users', async (req, res) => {
    try {
        const { first_name, last_name, email, password, phone} = req.body;
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, email, password, phone) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [first_name, last_name, email, password, phone]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`server draait op ${PORT}`);
});
