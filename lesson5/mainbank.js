function BankApplication(){
    let balance = 0;
    start()
        function start() {
            console.log('Enter W to Withdraw.')
            console.log('Enter D to Deposit.')
            console.log('Enter B to View Balance.')
            console.log('Enter Q to Quit. \n')
            console.log('***********************************')

            let input = prompt('Which action do you want to perform? \nEnter W to Withdraw.\nEnter D to Deposit\nEnter B to view Balance\nEnter Q to quit');


            if (input == 'Q' || input == "") { // Enter Q to quit (immediately quits the program)
                return;
            } else if (input == 'W') {
                withdraw(); // Enter W to Withdraw.
            } else if (input == 'D') {
                deposit();  // Enter D to Deposit.
            } else if (input == 'B') {
                showAccountBalance(); // Enter B to view Balance.
            } else {
                alert('Unsupported action: use (W)ithdraw, (D)eposit, or (B)alance. Press Q or enter to quit');
            }
            start(); // restarts the app after action
        }

         function deposit() {
            let amount = prompt('Enter an amount to deposit: ');
            amount = isNaN(amount) ? 0 : parseFloat(amount);
            balance += amount;
            return balance;
         }

         function showAccountBalance() {
            alert('Current balance: ' + balance);
         }

        function withdraw() {
            let amount = prompt('Enter an amount to withdraw: ');
            amount = isNaN(amount) ? 0 : parseFloat(amount);
            balance = balance- amount;
            return balance;
         }
  }
BankApplication();