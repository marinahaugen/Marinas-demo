const bankData = [
    {
        name: "Marinas Bank Account",
        currentBalance: 2000, 
        transactions: [
            {description: "Blue flower", price: 55.00, isDeposit: false}, 
            {description: "Sun flower", price: 100.00, isDeposit: false}, 
            {description: "Roses", price: 149.00, isDeposit: false},
            {description: "Andy transfered", price: 1000.00, isDeposit: true}
        ]   
    }, 
    {
        name: "Andys Bank Account",
        currentBalance: 3000,  
        transactions: [
            {description: "Swansea top", price: 200.00}, 
            {description: "Coffee to go", price: 43.00}, 
            {description: "Tea", price: 30.00},
            {description: "Transfere to Marina", price: 1000.00, isDeposit: false}
        ]
    }

]

function BankAccount({ name, currentBalance, transactions, isDeposit }) {
    return (
        <fieldset id={name}>
            <legend>{name}</legend>
            
            <h2>Current Balance is: {currentBalance} NOK</h2>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((t, i) =>
                    <li key={i} style={{ color: t.isDeposit? 'green': 'red' }}>{t.description} NOK {t.price}</li>
                )}
            </ul>
        </fieldset>
    )
}

const App = ({title, bank}) =>
    <div>
        <header>
            <h1>{title}</h1>
        </header>
        <div>
            {bank.map((bank, i) =>
                <BankAccount key={i} {...bank} />
            )}
        </div>
    </div>
    
    ReactDOM.render(
        <App bank={bankData} title="Bank JSX Crypto" />,
        document.getElementById("App")
    )
    
