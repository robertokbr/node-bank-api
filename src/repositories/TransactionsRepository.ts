import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce(
      (a, b) => a + (b.type === 'income' ? b.value : 0),
      0,
    );
    const outcome = this.transactions.reduce(
      (a, b) => a + (b.type === 'outcome' ? b.value : 0),
      0,
    );

    const balance = {
      income,
      outcome,
      total: income - outcome,
    };
    return balance;
  }

  public create({ title, type, value }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
