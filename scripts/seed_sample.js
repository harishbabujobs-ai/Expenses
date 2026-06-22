const fs = require('fs');
const mongoose = require('mongoose');
const Expense = require('../models/Expense');
require('dotenv').config();

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const raw = fs.readFileSync(__dirname + '/../data/sample_expenses.json');
  const docs = JSON.parse(raw);
  await Expense.deleteMany({});
  await Expense.insertMany(docs);
  console.log('Seeded', docs.length, 'expenses');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
