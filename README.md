<h1 align="center">
<a href="https://southsystem.files.wordpress.com/2018/09/nodejs.png">
<img alt="Node.JS" src="https://southsystem.files.wordpress.com/2018/09/nodejs.png" width="300px" />
</a>
</h1>

<h2 align="center">
Bank Transactions
</h2>

<p align="center">Application to store incoming and outgoing financial transactions, which should allow the registration and listing of these transactions.</p>

##  HOW TO USE 

- Install yarn and run the cmd

```
$ git clone //URL
$ cd //repoName
$ yarn

```

##  FEATURES

- The route receives `**title**`, **`value`** and **`type`** within the body of the request, **`type`** is the type of the transaction, `**income**` for incoming (deposits) and `**outcome**` for outgoing (withdrawn). When registering a new transaction, it is stored inside an object with the following format

```jsx
{ "id": "uuid", "title": "Salário", "value": 3000, "type": "income"
}
```

- **`GET / transactions`**: This route will return a listing with all the transactions you have registered so far, together with the sum of entries, withdrawals and total credit. This route returns an object with the following format:

```jsx
transactions: [
    { id: 'uuid', title: 'Salário', value: 4000, type: 'income' },
    { id: 'uuid', title: 'Freela', value: 2000, type: 'income' },
    { id: 'uuid', title: 'Pagamento da fatura', value: 4000, type: 'outcome' },
    { id: 'uuid', title: 'Cadeira Gamer', value: 1200, type: 'outcome' },
  ],
  balance: { income: 6000, outcome: 5200, total: 800 },
```

Within balance, income is the sum of all values of transactions with `type` income. The outcome is the sum of all transaction values with **`type`** outcome, and the total is the **`income - outcome`** value.

### **API ESPECIFICATIONS**

- **`Able to create a new transaction`**:The application allows a transaction to be created, and returns a json with the created transaction.
- `**Able to list the transactions**`: The application allows an object to be returned containing all transactions together with the balance of income, outcome and total transactions that have been created so far.
- **`Not able to create outcome transaction without a valid balance`**:The application must not allow a transaction of the outcome type to extrapolate the total amount that the user has in the box, returning a response with HTTP 400 code and an error message in the following format: `{ error: string }`
- Within balance, income is the sum of all values of transactions with type income. The outcome is the sum of all transaction values with type outcome, and the total is the income - outcome value.

## 🛠 **Contributing**

### **Step 1**

- 🍴 Fork this repo!

### **Step 2**

- 👯 Clone this repo to your local machine using `LINK`

### **Step 3**

- 🎋 Create your feature branch using `git checkout -b my-feature`

### **Step 4**

- ✅ Commit your changes using `git commit -m 'feat: My new feature'`;

### **Step 5**

- 📌 Push to the branch using `git push origin my-feature`;

### **Step 6**

- 🔃 Create a new pull request

After your Pull Request is merged, can you delete your feature branch.
